// TrendingCoins.tsx
"use client";

import React, { useEffect, useState } from "react";
import { FaEthereum, FaBitcoin } from "react-icons/fa";
import { SiPolygon } from "react-icons/si";
import { BiSolidUpArrow } from "react-icons/bi";

interface CoinData {
  id: string;
  symbol: string;
  name: string;
  price_change_percentage_24h: number;
  image: string;
}

const TrendingCoins: React.FC = () => {
  const [coins, setCoins] = useState<CoinData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getCoinIcon = (symbol: string) => {
    switch (symbol.toLowerCase()) {
      case "eth":
        return <FaEthereum className="text-[#627EEA] text-2xl" />;
      case "btc":
        return <FaBitcoin className="text-[#F7931A] text-2xl" />;
      case "matic":
        return <SiPolygon className="text-[#8247E5] text-2xl" />;
      default:
        return null;
    }
  };

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=ethereum,bitcoin,matic-network&order=market_cap_desc&sparkline=false"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setCoins(data);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setLoading(false);
      }
    };

    fetchTrendingCoins();
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Trending Coins (24h)</h2>
        <div className="animate-pulse space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-8 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Trending Coins (24h)</h2>
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Trending Coins (24h)</h2>
      <div className="space-y-3">
        {coins.map((coin) => (
          <div key={coin.id} className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2">
              {getCoinIcon(coin.symbol)}
              <span className="font-medium">
                {coin.name}({coin.symbol.toUpperCase()})
              </span>
            </div>
            <div className="flex items-center gap-1 bg-[#EBF9F4] text-[#14B079] px-2 py-1 rounded">
              <BiSolidUpArrow className="text-xs" />
              <span className="text-sm font-medium">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingCoins;
