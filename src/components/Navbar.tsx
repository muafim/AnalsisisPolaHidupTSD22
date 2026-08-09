import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["Overview", "overview"], ["Data", "data"], ["Preprocessing", "preprocessing"],
  ["Feature Analysis", "feature-analysis"], ["Model Performance", "model-performance"],
  ["Best Model", "best-model"], ["Conclusion", "conclusion"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="navbar" aria-label="Navigasi utama">
      <div className="nav-inner">
        <a className="brand" href="#top" aria-label="Kembali ke atas">
          <span>LA</span><strong>Research Dashboard</strong>
        </a>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Tutup menu" : "Buka menu"} aria-expanded={open}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div className={`nav-links ${open ? "open" : ""}`}>
          {links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
        </div>
      </div>
    </nav>
  );
}
