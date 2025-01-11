"use client";

import { useQuery } from "@tanstack/react-query";
import { getCoinData } from "@/services/api";
import Image from "next/image";

export default function PriceSection() {
  const { data: coinData } = useQuery({
    queryKey: ["bitcoin"],
    queryFn: () => getCoinData("bitcoin"),
  });

  return (
    <div className="mb-6">
      <div className="flex items-center gap-8 mb-8">
        <div className="flex items-center gap-2">
          <Image src="https://swu7aik9l9.ufs.sh/f/w1oZdaymV9eMADqKlhXNX4cs5VF6vzZIeWb0P2ihk3wYx1fo" alt="Bitcoin" className="w-9 h-9" height={36} width={36} />
          <h1 className="text-2xl font-semibold">Bitcoin</h1>
          <span className="text-[#5D667B] text-sm font-semibold">BTC</span>
        </div>
        <div className="px-3 py-2 bg-[#808A9D] text-white rounded-lg text-sm">
          Rank #1
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div>
          <div className="flex items-center gap-4">
            <span className="text-3xl font-semibold">
              ${coinData?.current_price?.toLocaleString() ?? "N/A"}
            </span>
            <div className="flex items-center gap-2">
              <div className="bg-[#EBF9F4] text-[#14B079] px-2 py-1 rounded text-sm font-medium">
                ▲ {coinData?.price_change_percentage_24h?.toFixed(2) ?? "N/A"}%
              </div>
              <span className="text-[#768396] text-sm">(24H)</span>
            </div>
          </div>
          <div className="text-[#0F172A] text-sm mt-1">
            ₹
            {coinData?.current_price
              ? (coinData.current_price * 83.21).toLocaleString()
              : "N/A"}
          </div>
        </div>

        
      </div>
      <div className="border-t my-6" />
    </div>
  );
}
