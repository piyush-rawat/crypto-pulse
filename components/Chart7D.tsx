import { Line, LineChart, YAxis } from "recharts";

const Chart7D = ({ data }: { data: number[] }) => {
  const chartData = data.map((item) => ({ value: item }));

  return (
    <LineChart
      width={100}
      height={50}
      data={chartData}
      //   margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <YAxis hide domain={["dataMin", "dataMax"]} />
      <Line
        type="monotone"
        dataKey="value"
        stroke={
          data[data.length - 10] < data[data.length - 1] ? "green" : "red"
        }
        strokeWidth={1}
        dot={false}
      />
    </LineChart>
  );
};

export default Chart7D;
