# Analisis Pola Hidup Mahasiswa TSD 22

## About the Research

Penelitian Data Mining mengenai hubungan pola hidup mahasiswa Teknologi Sains Data angkatan 2022 dengan kategori pendapatan bulanan.

## Research Dashboard

Static research dashboard ini menyajikan profil data, preprocessing, feature analysis, perbandingan model, serta detail model terbaik. Dashboard hanya memvisualisasikan hasil penelitian yang telah selesai dan tidak menjalankan prediksi atau training baru.

## Key Findings

- 94 respondents
- 15 initial variables
- 7 classification models
- Best model: Bagging Random Forest
- Best accuracy: 87.5%
- Most informative feature: Pengeluaran

## Machine Learning Models

- Decision Tree
- Random Forest
- K-Nearest Neighbors
- Bagging Decision Tree
- Bagging Random Forest
- Naive Bayes
- Artificial Neural Network

## Tech Stack

Vite, React, TypeScript, Tailwind CSS, Recharts, dan Lucide React.

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Workflow di `.github/workflows/deploy.yml` membangun dan menerbitkan folder `dist` melalui GitHub Pages Actions resmi.

## Research Files

- `Dokumen_ANALISIS PENDAPATAN BULANAN MAHASISWA TSD 22 BERDASARKAN POLA HIDUP MAHASISWA.pdf`
- `ANALISIS PENDAPATAN BULANAN MAHASISWA TSD 22 BERDASARKAN POLA HIDUP MAHASISWA (1).pdf`
- `Analisis_Pola_Hidup_pada_Mahasiswa_TSD_22_Berdasarkan_Uang_Saku.ipynb`

Seluruh angka pada dashboard dipusatkan di `src/data/researchData.ts` dan bersumber dari laporan serta output notebook yang tersimpan.
