import { Navbar } from "./components/Navbar";
import { BestModel } from "./sections/BestModel";
import { Conclusion } from "./sections/Conclusion";
import { DataProfile } from "./sections/DataProfile";
import { FeatureAnalysis } from "./sections/FeatureAnalysis";
import { Hero } from "./sections/Hero";
import { ModelPerformance } from "./sections/ModelPerformance";
import { Overview } from "./sections/Overview";
import { Preprocessing } from "./sections/Preprocessing";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <DataProfile />
        <Preprocessing />
        <FeatureAnalysis />
        <ModelPerformance />
        <BestModel />
        <Conclusion />
      </main>
      <footer><div className="container"><strong>Lifestyle &amp; Income Analysis</strong><span>Data Mining I · Teknologi Sains Data · Universitas Airlangga</span><a href="#top">Back to top ↑</a></div></footer>
    </>
  );
}

export default App;
