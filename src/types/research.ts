export interface FeatureImportanceItem {
  feature: string;
  value: number;
}

export type ModelMetric = "accuracy" | "precision" | "recall" | "f1";

export interface ModelPerformanceItem {
  model: string;
  shortName: string;
  accuracy: number;
  precision: number;
  recall: number;
  f1: number;
  rank: number;
}

export interface DominantCategory {
  variable: string;
  category: string;
  count: number;
}

export interface ClassificationRow {
  label: string;
  precision: number;
  recall: number;
  f1: number;
  support?: number;
}
