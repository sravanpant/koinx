import { PieChart, Pie, Cell } from "recharts";

export default function Tokenomics() {
  const data = [
    { name: "Crowdsale Investors", value: 80, color: "#0082FF" },
    { name: "Foundation", value: 20, color: "#FAA002" },
  ];

  return (
    <div className="mb-8 bg-white p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-6">Tokenomics</h2>

      <div className="space-y-6">
        <h3 className="text-lg font-semibold">Initial Distribution</h3>

        <div className="flex items-center gap-8">
          <div className="w-[200px] h-[200px]">
            <PieChart width={200} height={200}>
              <Pie
                data={data}
                cx={90}
                cy={90}
                innerRadius={60}
                outerRadius={90}
                paddingAngle={0}
                dataKey="value"
                startAngle={90}
                endAngle={450}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    stroke="none"
                  />
                ))}
              </Pie>
            </PieChart>
          </div>

          <div className="space-y-4">
            {data.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm text-[#333333]">
                  {item.name} ({item.value}%)
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-[#3E424A] text-sm leading-6">
          Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
          vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
          amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
          eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse
          urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet
          bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel
          ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit
          mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
        </p>
      </div>
    </div>
  );
}
