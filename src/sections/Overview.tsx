import { MetricCard } from "../components/MetricCard";
import { SectionHeader } from "../components/SectionHeader";
import { researchObjectives, researchOverview } from "../data/researchData";

export function Overview() {
  return (
    <section id="overview" className="section">
      <div className="container">
        <SectionHeader eyebrow="01 · Overview" title="Hasil utama dalam satu pandangan" description="Ringkasan hasil resmi penelitian, dengan detail teknis diverifikasi dari output notebook yang tersimpan." />
        <div className="metric-grid">
          <MetricCard label="Total Respondents" value={researchOverview.respondents} detail="observasi lengkap" />
          <MetricCard label="Initial Variables" value={researchOverview.initialVariables} detail="variabel awal" />
          <MetricCard label="Models Evaluated" value={researchOverview.modelsEvaluated} detail="algoritma klasifikasi" />
          <MetricCard label="Best Accuracy" value={`${researchOverview.bestAccuracy}%`} detail="data pengujian" />
        </div>
        <div className="finding-grid">
          <article className="finding-main"><p>Key finding</p><blockquote>“Dari tujuh metode klasifikasi yang diuji, Bagging Random Forest menghasilkan performa terbaik dengan akurasi 87,5%, sementara pengeluaran menjadi variabel dengan hubungan informatif terbesar terhadap kategori pendapatan.”</blockquote></article>
          <article><span>Best Model</span><strong>{researchOverview.bestModel}</strong></article>
          <article><span>Most Important Feature</span><strong>{researchOverview.mostImportantFeature}</strong><small>MI {researchOverview.mutualInformation.toFixed(3)} · 34,6%</small></article>
        </div>
        <div className="objectives">
          <p className="eyebrow">Research objectives</p>
          <div className="objective-grid">{researchObjectives.map((item, index) => <article key={item}><span>0{index + 1}</span><p>{item}</p></article>)}</div>
        </div>
      </div>
    </section>
  );
}
