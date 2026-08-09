import { bestModelConfusionMatrix } from "../data/researchData";

export function ConfusionMatrix() {
  const max = Math.max(...bestModelConfusionMatrix.flat());
  return (
    <div className="matrix-wrap">
      <span className="matrix-axis matrix-axis-top">Predicted</span>
      <span className="matrix-axis matrix-axis-side">Actual</span>
      <div className="matrix-grid" role="table" aria-label="Confusion matrix Bagging Random Forest">
        <div /><div className="matrix-label">Class 0</div><div className="matrix-label">Class 1</div><div className="matrix-label">Class 2</div>
        {bestModelConfusionMatrix.map((row, rowIndex) => [
          <div className="matrix-label" key={`label-${rowIndex}`}>Class {rowIndex}</div>,
          ...row.map((value, colIndex) => (
            <div key={`${rowIndex}-${colIndex}`} className="matrix-cell" style={{ backgroundColor: `rgba(31, 111, 92, ${0.08 + (value / max) * 0.82})`, color: value > max / 2 ? "white" : "#183c32" }}>
              <strong>{value}</strong><span>{rowIndex === colIndex ? "correct" : "error"}</span>
            </div>
          )),
        ])}
      </div>
    </div>
  );
}
