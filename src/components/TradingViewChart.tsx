// types.ts

// BitcoinChart.tsx
import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { format } from "date-fns";
import axios, { AxiosError } from "axios";
import { TimeRange, PriceData } from "@/types/index";

const timeRanges: TimeRange[] = [
  { label: "1H", value: "1H", days: "0.04166" }, // 1 hour in days
  { label: "24H", value: "24H", days: "1" },
  { label: "7D", value: "7D", days: "7" },
  { label: "1M", value: "1M", days: "30" },
  { label: "3M", value: "3M", days: "90" },
  { label: "6M", value: "6M", days: "180" },
  { label: "1Y", value: "1Y", days: "365" },
  { label: "ALL", value: "ALL", days: "max" },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    payload: PriceData;
  }>;
  label?: string;
}

const BitcoinChart: React.FC = () => {
  const [data, setData] = useState<PriceData[]>([]);
  const [selectedRange, setSelectedRange] = useState<string>("7D");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBitcoinData = async (): Promise<void> => {
      setLoading(true);
      setError(null);

      const selectedTimeRange = timeRanges.find(
        (range) => range.value === selectedRange
      );
      if (!selectedTimeRange) return;

      try {
        const response = await axios.get<{
          prices: [number, number][];
        }>("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart", {
          params: {
            vs_currency: "usd",
            days: selectedTimeRange.days,
          },
          headers: {
            Accept: "application/json",
          },
        });

        let formattedData: PriceData[] = response.data.prices.map(
          ([timestamp, price]) => ({
            timestamp,
            price,
          })
        );

        // For 1H view, filter last hour's data
        if (selectedRange === "1H") {
          const oneHourAgo = Date.now() - 3600000;
          formattedData = formattedData.filter(
            (item) => item.timestamp >= oneHourAgo
          );
        }

        setData(formattedData);
        setError(null);
      } catch (err) {
        const error = err as AxiosError;
        console.error("Error fetching Bitcoin data:", error);
        setError("Failed to fetch Bitcoin data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBitcoinData();
  }, [selectedRange]);

  const formatXAxis = (timestamp: number): string => {
    const date = new Date(timestamp);
    switch (selectedRange) {
      case "1H":
        return format(date, "HH:mm");
      case "24H":
        return format(date, "HH:mm");
      case "7D":
        return format(date, "dd MMM HH:mm");
      default:
        return format(date, "dd MMM yyyy");
    }
  };

  const CustomTooltip: React.FC<CustomTooltipProps> = ({
    active,
    payload,
    label,
  }) => {
    if (active && payload && payload.length && label) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="text-sm text-gray-600">
            {format(new Date(Number(label)), "dd MMM yyyy HH:mm")}
          </p>
          <p className="text-sm font-bold text-gray-800">
            $
            {payload[0].value.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-white rounded-lg">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-xl font-bold text-gray-800">
          Bitcoin Price Chart (USD)
        </h2>
        <div className="flex flex-wrap gap-2">
          {timeRanges.map((range) => (
            <button
              key={range.value}
              onClick={() => setSelectedRange(range.value)}
              className={`px-3 py-1 rounded-md text-sm transition-colors duration-200 ${
                selectedRange === range.value
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {error && (
        <div className="h-[400px] flex items-center justify-center text-red-500">
          {error}
        </div>
      )}

      {loading ? (
        <div className="h-[400px] flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
        </div>
      ) : (
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis
                dataKey="timestamp"
                tickFormatter={formatXAxis}
                stroke="#94a3b8"
                tick={{ fontSize: 12 }}
                minTickGap={30}
              />
              <YAxis
                domain={["auto", "auto"]}
                tickFormatter={(value: number) =>
                  `$${value.toLocaleString(undefined, {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}`
                }
                stroke="#94a3b8"
                tick={{ fontSize: 12 }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={false}
                animationDuration={750}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default BitcoinChart;
