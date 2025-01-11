import { IoInformationCircleOutline } from "react-icons/io5";

export default function Fundamentals() {
  const fundamentals = [
    {
      label: "Bitcoin Price",
      value: "$16,815.46",
    },
    {
      label: "24h Low / 24h High",
      value: "$16,382.07 / $16,874.12",
    },
    {
      label: "7d Low / 7d High",
      value: "$16,382.07 / $16,874.12",
    },
    {
      label: "Trading Volume",
      value: "$23,249,202,782",
    },
    {
      label: "Market Cap Rank",
      value: "#1",
    },
    {
      label: "Market Cap",
      value: "$323,507,290,047",
    },
    {
      label: "Market Cap Dominance",
      value: "38.343%",
    },
    {
      label: "Volume / Market Cap",
      value: "0.0718",
    },
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-2xl font-semibold">Fundamentals</h2>
        <IoInformationCircleOutline size={20} className="text-gray-400" />
      </div>

      <div className="grid md:grid-cols-2 gap-x-16">
        {fundamentals.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-4 border-b border-[#D3E0E6]"
          >
            <span className="text-[#768396] text-sm">{item.label}</span>
            <span className="text-[#111827] text-sm font-medium">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
