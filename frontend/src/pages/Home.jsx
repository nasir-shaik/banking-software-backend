import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LoanCalculator from "../components/LoanCalculator";
import HowItWorks from "../components/HowItWorks";
import Benefits from "../components/Benefits";
import LoanProducts from "../components/LoanProducts";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LoanCalculator />
      <HowItWorks />
      <Benefits />
      <LoanProducts />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;
