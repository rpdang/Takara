import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <main className="flex-col items-center justify-center">
      <Header />
      <section>
        <Hero />
      </section>
      <section className="bg-gray-50">
        <Features />
      </section>
      <section className="bg-gray-50">
        <Testimonials />
      </section>
      <section>
        <FAQ />
      </section>
      <section className="bg-gray-50">
        <CTA />
      </section>
      <Footer />
    </main>
  );
}
