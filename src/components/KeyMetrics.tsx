export default function KeyMetrics() {
    const metrics = [
      {
        label: "Bitcoin Price",
        value: "$46,953.04",
        change: "+2.34%",
        isPositive: true
      },
      {
        label: "Market Cap",
        value: "$901,496,289,047",
        change: "+2.34%",
        isPositive: true
      },
      {
        label: "24h Volume",
        value: "$23,249,202,782",
      },
      {
        label: "Circulating Supply",
        value: "19.57M BTC",
      }
    ]
  
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-6 border border-[#DEE1E6] rounded-lg mb-5">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <div className="text-sm text-[#44475B] mb-2">{metric.label}</div>
            <div className="text-base font-semibold">{metric.value}</div>
            {metric.change && (
              <div className={`text-sm ${
                metric.isPositive ? 'text-[#14B079]' : 'text-red-500'
              }`}>
                {metric.change}
              </div>
            )}
          </div>
        ))}
      </div>
    )
  }