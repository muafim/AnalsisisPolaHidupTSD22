import { ArrowRight, Check } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { classBalance, missingValueSummary, preprocessingSteps, transformations } from "../data/researchData";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export function Preprocessing() {
  return (
    <section id="preprocessing" className="section">
      <div className="container">
        <SectionHeader eyebrow="03 · Preprocessing" title="Dari data mentah menuju data pemodelan" description="Tahapan yang tercatat pada laporan dan notebook, tanpa menjalankan ulang proses training." />
        <div className="pre-grid">
          <article className="panel missing-card"><div className="status-icon"><Check size={20} /></div><p>Missing Values</p><strong>{missingValueSummary.missingValues}</strong><span>Semua atribut terisi lengkap.</span><div>{missingValueSummary.observations} observations · {missingValueSummary.variables} variables</div></article>
          <article className="panel transform-card"><p className="eyebrow">Variable transformation</p><div className="transform-visual"><strong>{transformations.before}</strong><span>Categories</span><ArrowRight /><strong>{transformations.after}</strong><span>Categories</span></div><div className="label-columns"><div><b>Pendapatan</b>{transformations.incomeLabels.map(x => <span key={x}>{x}</span>)}</div><div><b>Pengeluaran</b>{transformations.expenseLabels.map(x => <span key={x}>{x}</span>)}</div></div><small>{transformations.note}</small></article>
        </div>
        <article className="pipeline" aria-label="Feature engineering pipeline">{preprocessingSteps.map((step, index) => <div key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong>{index < preprocessingSteps.length - 1 && <ArrowRight className="flow-arrow" size={18} />}</div>)}</article>
        <div className="chart-and-copy">
          <article className="panel"><div className="panel-heading"><div><p className="eyebrow">Class imbalance</p><h3>Before vs After Random Over Sampling</h3></div></div><div className="chart-frame balance-chart"><ResponsiveContainer width="100%" height="100%"><BarChart data={classBalance} margin={{ top: 10, right: 12, bottom: 0, left: -18 }}><CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e4e7e1" /><XAxis dataKey="className" tick={{ fontSize: 12 }} /><YAxis domain={[0, 45]} tick={{ fontSize: 11 }} /><Tooltip /><Legend /><Bar dataKey="before" name="Before ROS" fill="#9ca9a2" radius={[4,4,0,0]} /><Bar dataKey="after" name="After ROS" fill="#1f6f5c" radius={[4,4,0,0]} /></BarChart></ResponsiveContainer></div></article>
          <aside className="side-note"><span>Why ROS?</span><h3>Menyeimbangkan tiga kelas target</h3><p>Random Over Sampling menambahkan salinan sampel dari kelas minoritas hingga Class 0, Class 1, dan Class 2 masing-masing memiliki 39 observasi.</p><div className="balance-numbers"><b>39</b><b>23</b><b>32</b><ArrowRight /><b>39</b><b>39</b><b>39</b></div></aside>
        </div>
      </div>
    </section>
  );
}
