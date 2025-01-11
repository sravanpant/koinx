// types.ts
interface BitcoinData {
  market_data: {
    current_price: {
      usd: number;
    };
    high_24h: {
      usd: number;
    };
    low_24h: {
      usd: number;
    };
    market_cap: {
      usd: number;
    };
    total_volume: {
      usd: number;
    };
    market_cap_rank: number;
  };
}

// PerformanceCard.tsx
import React, { useEffect, useState } from "react";
import { FiInfo } from "react-icons/fi";
import axios from "axios";

const PerformanceCard: React.FC = () => {
  const [bitcoinData, setBitcoinData] = useState<BitcoinData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/bitcoin"
        );
        setBitcoinData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [bitcoinData]);

  return (
    <div className="bg-white rounded-lg  p-10 ">
      {/* Performance Section */}
      <div className="mb-8">
        <h2 className="text-[#0B1426] text-2xl font-semibold mb-6">
          Performance
        </h2>

        {/* Today's Range */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-[#7C7E8C]">Today&apos;s Low</span>
            <span className="text-base font-medium">$48,637.83</span>
            <span className="text-sm text-[#7C7E8C]">Today&apos;s High</span>
          </div>
          <div className="relative h-2 bg-gradient-to-r from-[#FF4949] via-[#FFAF11] to-[#11EB68] rounded-full mb-2">
            <div className="absolute w-3 h-3 bg-black rounded-full top-1/2 -translate-y-1/2 left-[60%] -translate-x-1/2 border-2 border-white"></div>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-medium">$46,930.22</span>
            <span className="text-sm font-medium">$49,343.83</span>
          </div>
        </div>

        {/* 52W Range */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-[#7C7E8C]">52W Low</span>
            <span className="text-sm text-[#7C7E8C]">52W High</span>
          </div>
          <div className="relative h-2 bg-gradient-to-r from-[#FF4949] via-[#FFAF11] to-[#11EB68] rounded-full mb-2">
            <div className="absolute w-3 h-3 bg-black rounded-full top-1/2 -translate-y-1/2 left-[60%] -translate-x-1/2 border-2 border-white"></div>
          </div>
          <div className="flex justify-between">
            <span className="text-sm font-medium">$16,930.22</span>
            <span className="text-sm font-medium">$49,743.83</span>
          </div>
        </div>
      </div>

      {/* Fundamentals Section */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-[#0B1426] text-2xl font-semibold">
            Fundamentals
          </h2>
          <FiInfo className="text-[#7C7E8C] text-xl" />
        </div>

        <div className="grid grid-cols-2 gap-x-8">
          {/* Bitcoin Price */}
          <div className="border-b border-[#DEE1E6] py-3">
            <div className="flex flex-col gap-1">
              <span className="text-sm text-[#7C7E8C]">Bitcoin Price</span>
              <span className="text-base font-medium">$16,815.46</span>
            </div>
          </div>

          {/* Market Cap */}
          <div className="border-b border-[#DEE1E6] py-3">
            <div className="flex flex-col gap-1">
              <span className="text-sm text-[#7C7E8C]">Market Cap</span>
              <span className="text-base font-medium">$323,507,290,047</span>
            </div>
          </div>

          {/* 24h Low / 24h High */}
          <div className="border-b border-[#DEE1E6] py-3">
            <div className="flex flex-col gap-1">
              <span className="text-sm text-[#7C7E8C]">24h Low / 24h High</span>
              <span className="text-base font-medium">
                $16,382.07 / $16,874.12
              </span>
            </div>
          </div>

          {/* Market Cap Dominance */}
          <div className="border-b border-[#DEE1E6] py-3">
            <div className="flex flex-col gap-1">
              <span className="text-sm text-[#7C7E8C]">
                Market Cap Dominance
              </span>
              <span className="text-base font-medium">38.343%</span>
            </div>
          </div>

          {/* 7d Low / 7d High */}
          <div className="border-b border-[#DEE1E6] py-3">
            <div className="flex flex-col gap-1">
              <span className="text-sm text-[#7C7E8C]">7d Low / 7d High</span>
              <span className="text-base font-medium">
                $16,382.07 / $16,874.12
              </span>
            </div>
          </div>

          {/* Volume / Market Cap */}
          <div className="border-b border-[#DEE1E6] py-3">
            <div className="flex flex-col gap-1">
              <span className="text-sm text-[#7C7E8C]">
                Volume / Market Cap
              </span>
              <span className="text-base font-medium">0.0718</span>
            </div>
          </div>

          {/* Trading Volume */}
          <div className="border-b border-[#DEE1E6] py-3">
            <div className="flex flex-col gap-1">
              <span className="text-sm text-[#7C7E8C]">Trading Volume</span>
              <span className="text-base font-medium">$23,249,202,782</span>
            </div>
          </div>

          {/* All-Time High */}
          <div className="border-b border-[#DEE1E6] py-3">
            <div className="flex flex-col gap-1">
              <span className="text-sm text-[#7C7E8C]">All-Time High</span>
              <div className="flex items-center gap-2">
                <span className="text-base font-medium">$69,044.77</span>
                <span className="text-sm font-medium text-[#F7324C]">
                  -75.6%
                </span>
                <span className="text-xs text-[#7C7E8C]">
                  Nov 10, 2021 (about 1 year)
                </span>
              </div>
            </div>
          </div>

          {/* Market Cap Rank */}
          <div className="border-b border-[#DEE1E6] py-3">
            <div className="flex flex-col gap-1">
              <span className="text-sm text-[#7C7E8C]">Market Cap Rank</span>
              <span className="text-base font-medium">#1</span>
            </div>
          </div>

          {/* All-Time Low */}
          <div className="border-b border-[#DEE1E6] py-3">
            <div className="flex flex-col gap-1">
              <span className="text-sm text-[#7C7E8C]">All-Time Low</span>
              <div className="flex items-center gap-2">
                <span className="text-base font-medium">$67.81</span>
                <span className="text-sm font-medium text-[#0FBA83]">
                  24729.1%
                </span>
                <span className="text-xs text-[#7C7E8C]">
                  Jul 06, 2013 (over 9 years)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceCard;
