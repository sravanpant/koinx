'use client'

import { useState } from 'react'
import { Card } from "./ui/card"
import PriceSection from './PriceSection'
import TradingViewChart from './TradingViewChart'
import Performance from './Performance'
import Sentiment from './Sentiment'
import AboutBitcoin from './AboutBitcoin'
import Tokenomics from './Tokenomics'
import Team from './Team'
import YouMayLike from './YouMayLike'

const TABS = [
  'Overview',
  'Fundamentals',
  'News Insights',
  'Sentiments',
  'Team',
  'Technicals',
  'Tokenomics'
] as const

export default function MainContent() {
  const [activeTab, setActiveTab] = useState<typeof TABS[number]>('Overview')

  return (
    <div className="space-y-5">
      <Card className="p-6 bg-white max-w-5xl">
        <PriceSection />
        <TradingViewChart />
      </Card>

      <div className="">
        <div className="border-b max-w-4xl border-gray-200">
          <div className="overflow-x-auto">
            <div className="flex max-w-4xl px-6">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-4 text-sm font-semibold relative ${
                    activeTab === tab
                      ? 'text-[#0052FE]'
                      : 'text-[#3E424A]'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#0052FE]" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="py-6">
          <Performance />
          <Sentiment />
          <AboutBitcoin />
          <Tokenomics />
          <Team />
        </div>

        <YouMayLike />
      </div>
    </div>
  )
}