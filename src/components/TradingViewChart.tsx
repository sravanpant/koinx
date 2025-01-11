// BitcoinChart.tsx
import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    TradingView: any;
  }
}

const BitcoinChart: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (!scriptLoaded.current) {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/tv.js';
      script.async = true;
      script.onload = () => {
        if (container.current) {
          new window.TradingView.widget({
            width: '100%',
            height: '600',
            symbol: 'BITSTAMP:BTCUSD',
            interval: 'D',
            timezone: 'Etc/UTC',
            theme: 'dark',
            style: '1',
            locale: 'en',
            toolbar_bg: '#f1f3f6',
            enable_publishing: false,
            allow_symbol_change: false,
            container_id: 'tradingview_chart',
            hide_side_toolbar: false,
            studies: [
              'MASimple@tv-basicstudies',
              'RSI@tv-basicstudies',
              'Volume@tv-basicstudies'
            ],
            save_image: true,
            show_popup_button: true,
            popup_width: '1000',
            popup_height: '650',
          });
        }
      };
      document.head.appendChild(script);
      scriptLoaded.current = true;
    }
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-lg p-4">
      <div className="flex flex-col gap-4 mb-6">
        <h2 className="text-xl font-bold text-gray-800">
          Bitcoin Price Chart (USD)
        </h2>
      </div>
      
      {/* TradingView Chart Container */}
      <div 
        id="tradingview_chart" 
        ref={container}
        className="w-full h-[500px] sm:h-[600px] rounded-lg overflow-hidden"
      />
    </div>
  );
};

export default BitcoinChart;