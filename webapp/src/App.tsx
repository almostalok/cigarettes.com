import { Layout } from "./components/layout/Layout";
import { Hero } from "./components/home/Hero";
import { BrandsGrid } from "./components/home/BrandsGrid";
import { SmokeRoom } from "./components/home/SmokeRoom";
import { About } from "./components/home/About";

function App() {
  return (
    <Layout>
      <Hero />
      <BrandsGrid />
      <SmokeRoom />
      <About />
    </Layout>
  );
}

export default App;
