import { SectionHeader } from "../components/SectionHeader";
import { ageInsight, dominantCategories, initialVariables, researchOverview } from "../data/researchData";

export function DataProfile() {
  return (
    <section id="data" className="section section-tinted">
      <div className="container">
        <SectionHeader eyebrow="02 · Data" title="Dataset overview" description={`${researchOverview.respondents} responden dan ${researchOverview.initialVariables} variabel menggambarkan kebiasaan konsumsi, mobilitas, aktivitas, serta kondisi finansial mahasiswa.`} />
        <div className="data-layout">
          <article className="panel variables-panel"><div className="panel-heading"><h3>Initial variables</h3><span>15 columns</span></div><div className="chip-list">{initialVariables.map((item) => <span key={item}>{item}</span>)}</div></article>
          <article className="panel age-panel"><div className="panel-heading"><h3>Age distribution</h3><span>Verified narrative</span></div><div className="age-order">{ageInsight.order.map((age, i) => <span key={age} className={i === 0 ? "active" : ""}>{age}<small>{i === 0 ? "Most" : `#${i + 1}`}</small></span>)}</div><p>{ageInsight.note}</p></article>
        </div>
        <article className="panel compact-table"><div className="panel-heading"><h3>Dominant categories</h3><span>Kategori dengan frekuensi tertinggi</span></div><div className="category-grid">{dominantCategories.map((item) => <div key={item.variable}><span>{item.variable}</span><strong>{item.category}</strong><em>{item.count} responden</em></div>)}</div></article>
      </div>
    </section>
  );
}
