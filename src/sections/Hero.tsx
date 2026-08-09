import { ArrowDown, BarChart3, Database, GraduationCap, Trophy } from "lucide-react";
import { researchOverview } from "../data/researchData";

export function Hero() {
  const meta = [
    { icon: GraduationCap, label: "Program", value: "Teknologi Sains Data" },
    { icon: Database, label: "Respondents", value: researchOverview.respondents },
    { icon: BarChart3, label: "Models", value: researchOverview.modelsEvaluated },
    { icon: Trophy, label: "Best Model", value: researchOverview.bestModel },
  ];
  return (
    <header id="top" className="hero">
      <div className="container hero-grid">
        <div>
          <p className="hero-kicker">Data Mining Research · Cohort 2022</p>
          <h1>Lifestyle <em>&amp;</em><br />Income Analysis</h1>
          <h2>Analisis Pola Hidup Mahasiswa TSD 22 Berdasarkan Pendapatan Per Bulan</h2>
          <p className="hero-copy">Penelitian Data Mining yang menganalisis hubungan pola hidup mahasiswa Teknologi Sains Data angkatan 2022 dengan kategori pendapatan bulanan serta membandingkan tujuh algoritma klasifikasi machine learning.</p>
          <a className="primary-link" href="#overview">Explore Results <ArrowDown size={17} /></a>
        </div>
        <aside className="hero-panel" aria-label="Metadata penelitian">
          <div className="hero-score"><span>Best accuracy</span><strong>{researchOverview.bestAccuracy}%</strong><small>Bagging Random Forest</small></div>
          <div className="hero-meta">
            {meta.map(({ icon: Icon, label, value }) => <div key={label}><Icon size={17} /><span>{label}<strong>{value}</strong></span></div>)}
          </div>
        </aside>
      </div>
    </header>
  );
}
