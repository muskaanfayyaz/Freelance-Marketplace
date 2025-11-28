import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Categories } from "./components/Categories";
import { HowItWorks } from "./components/HowItWorks";
import { Stats } from "./components/Stats";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { CTASection } from "./components/CTASection";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Categories />
      <HowItWorks />
      <CTASection />
      <Footer />
    </div>
  );
}
