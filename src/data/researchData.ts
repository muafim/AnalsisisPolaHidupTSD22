import type {
  ClassificationRow,
  DominantCategory,
  FeatureImportanceItem,
  ModelPerformanceItem,
} from "../types/research";

export const researchOverview = {
  respondents: 94,
  initialVariables: 15,
  modelsEvaluated: 7,
  bestModel: "Bagging Random Forest",
  bestAccuracy: 87.5,
  mostImportantFeature: "Pengeluaran",
  mutualInformation: 0.346106,
};

export const researchObjectives = [
  "Menganalisis hubungan pola hidup mahasiswa Teknologi Sains Data angkatan 2022 dengan pendapatan per bulan dari orang tua.",
  "Mengidentifikasi faktor-faktor utama yang memengaruhi kategori pendapatan berdasarkan pola hidup.",
  "Mengevaluasi performa model klasifikasi dalam memprediksi kategori pendapatan berdasarkan pola hidup mahasiswa.",
];

export const initialVariables = [
  "Jenis_Kelamin", "usia", "pendapatan", "transportasi", "makan",
  "masak_sendiri", "belanja_online", "nongkrong", "tabung", "merasa_cukup",
  "merokok", "aktif_org", "jajan_mall", "ojol", "pengeluaran",
];

export const dominantCategories: DominantCategory[] = [
  { variable: "Gender", category: "Perempuan", count: 49 },
  { variable: "Pendapatan awal", category: "Rp1.000.000 - Rp1.500.000", count: 25 },
  { variable: "Transportasi", category: "Motor", count: 55 },
  { variable: "Frekuensi makan", category: "Dua kali", count: 51 },
  { variable: "Memasak", category: "Lebih sering membeli makanan di luar", count: 46 },
  { variable: "Belanja online", category: "1-2 kali", count: 55 },
  { variable: "Nongkrong", category: "1-2 kali", count: 41 },
  { variable: "Menabung", category: "Ya, kadang-kadang", count: 50 },
  { variable: "Merasa cukup", category: "Cukup, tetapi tidak selalu bisa menabung", count: 51 },
  { variable: "Merokok", category: "Tidak", count: 85 },
  { variable: "Aktif organisasi", category: "Ya", count: 53 },
  { variable: "Jajan di mall", category: "Jarang", count: 58 },
  { variable: "Ojek online", category: "Jarang", count: 53 },
  { variable: "Pengeluaran awal", category: "Rp1.000.001 - Rp1.500.000", count: 27 },
];

export const missingValueSummary = { observations: 94, variables: 15, missingValues: 0 };

export const ageInsight = {
  order: [20, 19, 21, 22],
  outlierAge: 22,
  note: "Usia 20 tahun merupakan kelompok terbanyak, diikuti usia 19, 21, dan 22 tahun. Usia 22 tahun teridentifikasi sebagai outlier, tetapi dipertahankan untuk menjaga variasi data.",
};

export const transformations = {
  before: 5,
  after: 3,
  incomeLabels: ["< 2.000.000 IDR", "=< 2.000.000 IDR", "> 2.000.000 IDR"],
  expenseLabels: ["<= 1.000.000 IDR", "1.000.000 IDR - 2.000.000 IDR", "> 2.000.000 IDR"],
  note: "Label ditampilkan sesuai terminologi yang tersimpan pada notebook penelitian.",
};

export const preprocessingSteps = [
  "Raw Data", "Missing Value Check", "Variable Transformation", "Label Encoding",
  "Feature Encoding", "Feature Selection", "Random Over Sampling", "Train/Test Split",
  "Machine Learning Models",
];

export const featureImportance: FeatureImportanceItem[] = [
  { feature: "Pengeluaran", value: 0.346106 },
  { feature: "Transportasi", value: 0.117269 },
  { feature: "Belanja Online", value: 0.078583 },
  { feature: "Nongkrong", value: 0.070213 },
  { feature: "Ojek Online", value: 0.05024 },
  { feature: "Makan", value: 0.04212 },
  { feature: "Masak Sendiri", value: 0.039587 },
  { feature: "Menabung", value: 0.03709 },
  { feature: "Merasa Cukup", value: 0.033412 },
  { feature: "Jenis Kelamin", value: 0.020231 },
  { feature: "Usia", value: 0.019505 },
  { feature: "Jajan Mall", value: 0.016183 },
  { feature: "Merokok", value: 0.006412 },
  { feature: "Aktif Organisasi", value: 0.004805 },
];

export const removedFeatures = ["merokok", "aktif_org", "usia", "jajan_mall"];
export const selectedFeatures = [
  "jenis_kelamin", "transportasi", "makan", "masak_sendiri", "belanja_online",
  "nongkrong", "tabung", "merasa_cukup", "ojol", "pengeluaran",
];
export const targetVariable = "pendapatan";

export const correlationInsights = [
  { pair: "Pengeluaran ↔ Pendapatan", value: 0.31, interpretation: "Hubungan positif paling menonjol terhadap pendapatan dalam analisis korelasi." },
  { pair: "Pengeluaran ↔ Jenis Kelamin", value: -0.38, interpretation: "Hubungan linear negatif paling menonjol yang dicatat dalam laporan." },
  { pair: "Transportasi ↔ Makan", value: -0.03, interpretation: "Hubungan linear negatif yang sangat lemah." },
  { pair: "Pendapatan ↔ Usia", value: -0.0002, interpretation: "Hampir tidak memiliki korelasi linear." },
];

export const classBalance = [
  { className: "Class 0", before: 39, after: 39 },
  { className: "Class 1", before: 23, after: 39 },
  { className: "Class 2", before: 32, after: 39 },
];

export const classMapping = [
  { className: "Class 0", label: "< 2.000.000 IDR" },
  { className: "Class 1", label: "=< 2.000.000 IDR" },
  { className: "Class 2", label: "> 2.000.000 IDR" },
];

export const modelPerformance: ModelPerformanceItem[] = [
  { model: "Bagging Random Forest", shortName: "Bagging RF", accuracy: 87.5, precision: 87.08, recall: 87.5, f1: 87.04, rank: 1 },
  { model: "Random Forest", shortName: "Random Forest", accuracy: 83.33, precision: 83.23, recall: 83.33, f1: 83.08, rank: 2 },
  { model: "Bagging Decision Tree", shortName: "Bagging DT", accuracy: 83.33, precision: 83.23, recall: 83.33, f1: 83.08, rank: 2 },
  { model: "Decision Tree", shortName: "Decision Tree", accuracy: 70.83, precision: 71.25, recall: 70.83, f1: 70.5, rank: 4 },
  { model: "K-Nearest Neighbors", shortName: "KNN", accuracy: 70.83, precision: 78.12, recall: 70.83, f1: 72.1, rank: 4 },
  { model: "Artificial Neural Network", shortName: "ANN", accuracy: 66.67, precision: 70.68, recall: 66.67, f1: 68.01, rank: 6 },
  { model: "Naive Bayes", shortName: "Naive Bayes", accuracy: 62.5, precision: 65.82, recall: 62.5, f1: 62.79, rank: 7 },
];

export const bestModelClassification: ClassificationRow[] = [
  { label: "Class 0", precision: 0.8, recall: 0.67, f1: 0.73, support: 6 },
  { label: "Class 1", precision: 0.89, recall: 0.89, f1: 0.89, support: 9 },
  { label: "Class 2", precision: 0.9, recall: 1, f1: 0.95, support: 9 },
  { label: "Macro average", precision: 0.86, recall: 0.85, f1: 0.85 },
  { label: "Weighted average", precision: 0.87, recall: 0.88, f1: 0.87 },
];

export const bestModelConfusionMatrix = [[4, 1, 1], [1, 8, 0], [0, 0, 9]];

export const conclusions = [
  { title: "Best Classification Model", text: "Bagging Random Forest memperoleh akurasi tertinggi 87,5%, atau dibulatkan menjadi 88% dalam kesimpulan penelitian." },
  { title: "Important Lifestyle Factor", text: "Pengeluaran menjadi variabel paling informatif dengan mutual information sekitar 0,346 atau 34,6%." },
  { title: "Other Important Factors", text: "Transportasi dan belanja online menyusul dengan mutual information sekitar 11,7% dan 7,9%." },
  { title: "Model Comparison", text: "Random Forest dan Bagging Decision Tree juga memberikan akurasi relatif tinggi, yaitu 83,33%." },
  { title: "Lowest Accuracy", text: "Naive Bayes memiliki akurasi terendah, yaitu 62,5%." },
];

export const futureWork = [
  "Menambahkan variabel latar belakang keluarga, minat, hobi, dan faktor relevan lain.",
  "Menggunakan pendekatan lain seperti clustering untuk memperoleh perspektif berbeda.",
  "Memperluas populasi penelitian ke seluruh mahasiswa FTMM.",
  "Memperluas populasi hingga mahasiswa Universitas Airlangga.",
  "Menggunakan dataset yang lebih banyak, bervariasi, dan representatif.",
];
