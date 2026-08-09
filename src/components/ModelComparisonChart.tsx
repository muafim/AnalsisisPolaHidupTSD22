import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { modelPerformance } from "../data/researchData";
import type { ModelMetric } from "../types/research";

export function ModelComparisonChart({ metric }: { metric: ModelMetric }) {
  return (
    <div className="chart-frame model-chart" role="img" aria-label={`Perbandingan ${metric} tujuh model`}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={modelPerformance} layout="vertical" margin={{ top: 8, right: 24, bottom: 8, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e4e7e1" />
          <XAxis type="number" domain={[0, 100]} tickFormatter={(v: number) => `${v}%`} tick={{ fill: "#68706a", fontSize: 11 }} />
          <YAxis type="category" dataKey="shortName" width={106} tick={{ fill: "#414842", fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip formatter={(value) => [`${Number(value).toFixed(2)}%`, metric]} cursor={{ fill: "#f2f4ef" }} />
          <Bar dataKey={metric} radius={[0, 5, 5, 0]}>
            {modelPerformance.map((item) => <Cell key={item.model} fill={item.model === "Bagging Random Forest" ? "#d77a2f" : "#506d63"} />)}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
