import { useState } from "react";
import { ModelComparisonChart } from "../components/ModelComparisonChart";
import { SectionHeader } from "../components/SectionHeader";
import { modelPerformance } from "../data/researchData";
import type { ModelMetric } from "../types/research";

const metrics: { key: ModelMetric; label: string }[] = [
  { key: "accuracy", label: "Accuracy" }, { key: "precision", label: "Precision" },
  { key: "recall", label: "Recall" }, { key: "f1", label: "F1 Score" },
];

export function ModelPerformance() {
  const [metric, setMetric] = useState<ModelMetric>("accuracy");
  return (
    <section id="model-performance" className="section section-tinted">
      <div className="container">
        <SectionHeader eyebrow="05 · Model Performance" title="Perbandingan tujuh model klasifikasi" description="Pilih metrik untuk membandingkan hasil pengujian setiap model. Nilai utama mengikuti laporan penelitian." />
        <div className="metric-selector" aria-label="Pilih metrik model">{metrics.map(item => <button key={item.key} className={metric === item.key ? "active" : ""} onClick={() => setMetric(item.key)}>{item.label}</button>)}</div>
        <article className="panel comparison-panel"><ModelComparisonChart metric={metric} /><div className="best-marker"><span>Best performer</span><strong>Bagging Random Forest</strong><b>{modelPerformance[0][metric].toFixed(2)}%</b></div></article>
        <div className="table-wrap"><table><caption>Model metrics on the research test set</caption><thead><tr><th>Rank</th><th>Model</th><th>Precision</th><th>Recall</th><th>F1-score</th><th>Accuracy</th></tr></thead><tbody>{modelPerformance.map(item => <tr key={item.model} className={item.rank === 1 ? "best-row" : ""}><td>{item.rank}{item.rank === 2 || item.rank === 4 ? " (tie)" : ""}</td><th scope="row">{item.model}</th><td>{item.precision.toFixed(2)}%</td><td>{item.recall.toFixed(2)}%</td><td>{item.f1.toFixed(2)}%</td><td><strong>{item.accuracy.toFixed(2)}%</strong></td></tr>)}</tbody></table></div>
        <p className="table-footnote">ANN menggunakan nilai utama yang tercantum pada laporan; output notebook tersimpan mencatat precision 68,01% dan F1-score 67,18%.</p>
      </div>
    </section>
  );
}
