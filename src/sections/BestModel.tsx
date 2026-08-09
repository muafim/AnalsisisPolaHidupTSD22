import { CheckCircle2 } from "lucide-react";
import { ConfusionMatrix } from "../components/ConfusionMatrix";
import { MetricCard } from "../components/MetricCard";
import { SectionHeader } from "../components/SectionHeader";
import { bestModelClassification, classMapping, modelPerformance } from "../data/researchData";

export function BestModel() {
  const best = modelPerformance[0];
  return (
    <section id="best-model" className="section best-model-section">
      <div className="container">
        <SectionHeader eyebrow="06 · Best Model" title="Bagging Random Forest" description="Bagging dengan Random Forest menghasilkan performa klasifikasi tertinggi dibandingkan enam metode lain pada data pengujian penelitian." />
        <div className="best-metrics"><MetricCard label="Accuracy" value={`${best.accuracy.toFixed(2)}%`} /><MetricCard label="Precision" value={`${best.precision.toFixed(2)}%`} /><MetricCard label="Recall" value={`${best.recall.toFixed(2)}%`} /><MetricCard label="F1 Score" value={`${best.f1.toFixed(2)}%`} /></div>
        <div className="best-detail-grid">
          <article className="panel report-card"><div className="panel-heading"><div><p className="eyebrow">Classification report</p><h3>Class-level performance</h3></div><span>Accuracy 0.88 · n = 24</span></div><div className="table-wrap"><table><thead><tr><th>Class</th><th>Precision</th><th>Recall</th><th>F1</th><th>Support</th></tr></thead><tbody>{bestModelClassification.map(row => <tr key={row.label}><th scope="row">{row.label}</th><td>{row.precision.toFixed(2)}</td><td>{row.recall.toFixed(2)}</td><td>{row.f1.toFixed(2)}</td><td>{row.support ?? "—"}</td></tr>)}</tbody></table></div><div className="class-legend">{classMapping.map(item => <span key={item.className}><b>{item.className}</b>{item.label}</span>)}</div><small>Mapping mengikuti urutan LabelEncoder dan ejaan label yang tersimpan pada notebook.</small></article>
          <article className="panel matrix-card"><div className="panel-heading"><div><p className="eyebrow">Confusion matrix</p><h3>Actual vs predicted</h3></div></div><ConfusionMatrix /><ul className="matrix-insights"><li><CheckCircle2 />Class 2: 9 dari 9 benar.</li><li><CheckCircle2 />Class 1: 8 dari 9 benar.</li><li><CheckCircle2 />Class 0 memiliki kesalahan relatif terbanyak.</li></ul></article>
        </div>
      </div>
    </section>
  );
}
