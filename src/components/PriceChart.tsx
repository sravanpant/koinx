'use client'

import { PriceData } from "@/types"
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts"
import { format } from "date-fns"

interface PriceChartProps {
  data: PriceData[]
}

export default function PriceChart({ data }: PriceChartProps) {
  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis 
            dataKey="timestamp"
            tickFormatter={(timestamp) => format(timestamp, 'MMM dd')}
          />
          <YAxis 
            domain={['auto', 'auto']}
            tickFormatter={(value) => `$${value.toLocaleString()}`}
          />
          <Tooltip 
            formatter={(value: number) => [`$${value.toLocaleString()}`, 'Price']}
            labelFormatter={(timestamp) => format(timestamp, 'MMM dd, yyyy HH:mm')}
          />
          <Line 
            type="monotone" 
            dataKey="price" 
            stroke="#2563eb" 
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}