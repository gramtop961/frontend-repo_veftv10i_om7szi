import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductsGrid from "./components/ProductsGrid";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-blue-950">
      <Navbar />
      <main>
        <Hero />
        <ProductsGrid />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}
