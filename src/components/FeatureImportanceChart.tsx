import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { featureImportance } from "../data/researchData";

export function FeatureImportanceChart() {
  return (
    <div className="chart-frame tall-chart" role="img" aria-label="Grafik mutual information empat belas fitur">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={featureImportance} layout="vertical" margin={{ top: 8, right: 28, bottom: 8, left: 28 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e4e7e1" />
          <XAxis type="number" domain={[0, 0.37]} tickFormatter={(v: number) => `${(v * 100).toFixed(0)}%`} tick={{ fill: "#68706a", fontSize: 11 }} />
          <YAxis type="category" dataKey="feature" width={112} tick={{ fill: "#414842", fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip formatter={(value) => [`${(Number(value) * 100).toFixed(2)}%`, "Mutual information"]} cursor={{ fill: "#f2f4ef" }} />
          <Bar dataKey="value" radius={[0, 5, 5, 0]}>
            {featureImportance.map((_, index) => <Cell key={index} fill={index < 3 ? "#1f6f5c" : "#a9b7af"} />)}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
