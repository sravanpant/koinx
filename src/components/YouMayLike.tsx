"use client";

import { useQuery } from "@tanstack/react-query";
import { getTrendingCoins } from "@/services/api";
import { Card } from "./ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Define a type for the trending coin
interface TrendingCoin {
  item: {
    id: string;
    name: string;
    symbol: string;
    small: string;
    data: {
      price: string;
      price_change_percentage_24h: {
        usd: number;
      };
      sparkline: string;
    };
  };
}

export default function YouMayLike() {
  const { data: coins } = useQuery<TrendingCoin[]>({
    queryKey: ["trending-coins"],
    queryFn: getTrendingCoins,
  });

  return (
    <Card className="p-6 bg-white">
      <h2 className="text-2xl font-semibold mb-6">You May Also Like</h2>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView="auto"
        navigation
        className="!pb-8"
      >
        {coins?.map((coin) => (
          <SwiperSlide key={coin.item.id} className="!w-[250px]">
            <div className="border border-[#E3E3E3] rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <img
                  src={coin.item.small}
                  alt={coin.item.name}
                  className="w-6 h-6"
                />
                <span className="font-medium">{coin.item.symbol}</span>
                <span
                  className={`ml-auto text-sm ${
                    coin.item.data.price_change_percentage_24h.usd > 0
                      ? "text-[#14B079]"
                      : "text-red-500"
                  }`}
                >
                  {coin.item.data.price_change_percentage_24h.usd > 0
                    ? "+"
                    : ""}
                  {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
                </span>
              </div>
              <div className="text-lg font-medium">{coin.item.data.price}</div>
              <img
                src={coin.item.data.sparkline}
                alt="Price chart"
                className="w-full h-16 mt-2"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Card>
  );
}
