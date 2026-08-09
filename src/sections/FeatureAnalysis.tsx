import { FeatureImportanceChart } from "../components/FeatureImportanceChart";
import { SectionHeader } from "../components/SectionHeader";
import { correlationInsights, removedFeatures, selectedFeatures, targetVariable } from "../data/researchData";

export function FeatureAnalysis() {
  return (
    <section id="feature-analysis" className="section section-dark">
      <div className="container">
        <SectionHeader eyebrow="04 · Feature Analysis" title="Pengeluaran adalah fitur paling informatif" description="Feature importance dihitung menggunakan mutual information. Nilainya menunjukkan keterkaitan informatif, bukan hubungan sebab-akibat." />
        <div className="dark-chart-card"><div className="top-features"><article><span>01</span><strong>Pengeluaran</strong><em>34,6%</em></article><article><span>02</span><strong>Transportasi</strong><em>11,7%</em></article><article><span>03</span><strong>Belanja Online</strong><em>7,9%</em></article></div><FeatureImportanceChart /><p className="chart-note">Pengeluaran memiliki nilai mutual information tertinggi, sehingga menjadi variabel paling informatif terhadap kategori pendapatan dalam analisis ini.</p></div>
        <div className="feature-selection-grid"><article><p className="eyebrow">Feature selection</p><h3>10 predictors + 1 target</h3><p>Setelah empat fitur bernilai relatif rendah dikeluarkan, sepuluh prediktor digunakan untuk memodelkan target <b>{targetVariable}</b>.</p><div className="chip-list selected">{selectedFeatures.map(x => <span key={x}>{x}</span>)}</div></article><article><p className="eyebrow">Removed features</p><h3>4 variables excluded</h3><div className="chip-list removed">{removedFeatures.map(x => <span key={x}>{x}</span>)}</div></article></div>
        <div className="correlation-section"><div className="panel-heading"><div><p className="eyebrow">Correlation insights</p><h3>Empat hubungan yang dicatat dalam laporan</h3></div></div><div className="correlation-grid">{correlationInsights.map(item => <article key={item.pair}><span>{item.pair}</span><strong>{item.value}</strong><p>{item.interpretation}</p></article>)}</div></div>
      </div>
    </section>
  );
}
