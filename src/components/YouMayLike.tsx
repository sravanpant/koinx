"use client";

import { useQuery } from "@tanstack/react-query";
import { getTopCoins, getTrendingCoins } from "@/services/api";
import { Card } from "./ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"; // Import react-icons
import "swiper/css";
import "swiper/css/navigation";
import { TopCoin, TrendingCoin } from "@/types";
// import { Sparklines, SparklinesLine } from "react-sparklines";

const generateSparklineSVG = (data: number[], color: string) => {
  const width = 180;
  const height = 60;
  const points = data
    .map(
      (value, index) =>
        `${(index / (data.length - 1)) * width},${
          height -
          ((value - Math.min(...data)) /
            (Math.max(...data) - Math.min(...data))) *
            height
        }`
    )
    .join(" ");

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M ${points}" 
        fill="none" 
        stroke="${color}" 
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  `)}`;
};

const YouMayLikeSlider = ({ coins }: { coins?: TrendingCoin[] }) => {
  const formatPrice = (price: number | string) => {
    try {
      // If price is already a number
      if (typeof price === 'number') {
        return `$${price.toLocaleString(undefined, {
          minimumFractionDigits: 3,
          maximumFractionDigits: 3,
        })}`;
      }
      
      // If price is a string
      if (typeof price === 'string') {
        // Remove any non-numeric characters except decimal point
        const numericValue = parseFloat(price.replace(/[^0-9.]/g, ''));
        return `$${numericValue.toLocaleString(undefined, {
          minimumFractionDigits: 3,
          maximumFractionDigits: 3,
        })}`;
      }

      // If price is in any other format
      return price;
    } catch (error) {
      console.error('Error formatting price:', error);
      return price; // Return original price if formatting fails
    }
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl pl-12 font-semibold mb-6">You May Also Like</h2>
      <div className="relative px-12">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView="auto"
          navigation={{
            nextEl: ".you-may-like-next",
            prevEl: ".you-may-like-prev",
          }}
          className="!pb-8"
        >
          {coins?.map((coin) => (
            <SwiperSlide key={coin.item.id} className="!w-[250px]">
              <div className="border border-[#E3E3E3] rounded-lg p-4 hover:shadow-md transition-shadow">
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
                <div className="text-lg font-medium">
                  {formatPrice(coin.item.data.price)}
                </div>
                <img
                  src={coin.item.data.sparkline}
                  alt="Price chart"
                  className="w-full h-16 mt-2"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="you-may-like-prev absolute top-1/2 -translate-y-1/2 left-0 z-10 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
          <MdKeyboardArrowLeft className="w-6 h-6" />
        </button>
        <button className="you-may-like-next absolute top-1/2 -translate-y-1/2 right-0 z-10 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
          <MdKeyboardArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

const TrendingCoinsSlider = ({ coins }: { coins?: TopCoin[] }) => (
  <div className="mb-8">
    <h2 className="text-2xl pl-12 font-semibold mb-6">Trending Coins</h2>
    <div className="relative px-12">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView="auto"
        navigation={{
          nextEl: ".trending-coins-next",
          prevEl: ".trending-coins-prev",
        }}
        className="!pb-8"
      >
        {coins?.map((coin) => (
          <SwiperSlide key={coin.id} className="!w-[250px]">
            <div className="border border-[#E3E3E3] rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-2">
                <img src={coin.image} alt={coin.name} className="w-6 h-6" />
                <span className="font-medium">{coin.symbol.toUpperCase()}</span>
                <span
                  className={`ml-auto text-sm ${
                    coin.price_change_percentage_24h > 0
                      ? "text-[#14B079]"
                      : "text-red-500"
                  }`}
                >
                  {coin.price_change_percentage_24h > 0 ? "+" : ""}
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </span>
              </div>
              <div className="text-lg font-medium">
                ${coin.current_price.toLocaleString()}
              </div>
              <img
                src={generateSparklineSVG(
                  coin.sparkline_in_7d.price,
                  coin.price_change_percentage_24h > 0 ? "#14B079" : "#DC2626"
                )}
                alt="Price chart"
                className="w-full h-16 mt-2"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="trending-coins-prev absolute top-1/2 -translate-y-1/2 left-0 z-10 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
        <MdKeyboardArrowLeft className="w-6 h-6" />
      </button>
      <button className="trending-coins-next absolute top-1/2 -translate-y-1/2 right-0 z-10 bg-white shadow-lg rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
        <MdKeyboardArrowRight className="w-6 h-6" />
      </button>
    </div>
  </div>
);

export default function YouMayLike() {
  const { data: trendingCoins } = useQuery<TrendingCoin[]>({
    queryKey: ["trending-coins"],
    queryFn: getTrendingCoins,
  });

  const { data: topCoins } = useQuery<TopCoin[]>({
    queryKey: ["top-coins"],
    queryFn: getTopCoins,
  });

  return (
    <Card className="p-12 overflow-hidden bg-white">
      <YouMayLikeSlider coins={trendingCoins} />
      <TrendingCoinsSlider coins={topCoins} />
    </Card>
  );
}
