import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { conclusions, futureWork } from "../data/researchData";

export function Conclusion() {
  return (
    <section id="conclusion" className="section conclusion-section">
      <div className="container">
        <SectionHeader eyebrow="07 · Conclusion" title="Ringkasan temuan penelitian" description="Kesimpulan diringkas dari laporan resmi tanpa memperluas klaim di luar hasil penelitian." />
        <div className="conclusion-grid">{conclusions.map((item, index) => <article key={item.title}><span>0{index + 1}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
        <article className="future-work"><div><p className="eyebrow">Future work</p><h2>Arah penelitian berikutnya</h2><p>Usulan pengembangan yang tercantum pada laporan.</p></div><ul>{futureWork.map(item => <li key={item}><ArrowUpRight size={17} />{item}</li>)}</ul></article>
      </div>
    </section>
  );
}
