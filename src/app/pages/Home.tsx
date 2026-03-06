import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { About } from "../components/About";
import { Hero } from "../components/Hero";
import { FourVerticals } from "../components/FourVerticals";
import { ProductionPreview } from "../components/ProductionPreview";
import { PublishingPreview } from "../components/PublishingPreview";
import { TechPreview } from "../components/TechPreview";
import { Link } from "react-router";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header variant="default" />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Four Verticals Section */}
      <FourVerticals />

      {/* Production Section */}
      <ProductionPreview />

      {/* Distribution Section */}
      <section id="distribution" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-1 w-16 bg-[#DC2626]"></div>
              <span className="text-[#DC2626] uppercase text-sm font-bold tracking-wider">Distribution</span>
              <div className="h-1 w-16 bg-[#DC2626]"></div>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
              GLOBAL <span className="text-[#DC2626]">REACH</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Global distribution arm placing Deo Media content across platforms and territories worldwide.
            </p>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-black border-2 border-gray-800 p-12">
            <h3 className="text-3xl font-bold text-white mb-6 uppercase tracking-wide">
              Ready to distribute your film?
            </h3>
            <p className="text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
              We work with filmmakers, producers, and content creators to bring their stories to audiences worldwide.
            </p>
      <Link
  to="/distribution"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="inline-block"
>
  <span className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-red-600 text-white uppercase tracking-wider hover:bg-red-700 transition-colors font-bold text-base">
    SEE OUR DISTRIBUTIONS →
  </span>
</Link>
          </div>
        </div>
      </section>

      {/* Publishing Section */}
      <PublishingPreview />

      {/* Tech Section */}
      <TechPreview />

      <Footer />
    </div>
  );
}