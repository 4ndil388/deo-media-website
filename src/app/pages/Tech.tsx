import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { 
  ArrowRight,
  Calculator,
  FileText,
  Smartphone,
  Cloud,
  BarChart3,
  Shield,
  BookOpen,
  Gamepad2,
  ExternalLink,
  Download,
  Clock,
  CreditCard,
  Globe,
  Lightbulb,
  ShoppingBag
} from "lucide-react";
import { Link } from "react-router";
import techLogo from "../../assets/images/tech.png";
import prodculatorImage from "../../assets/images/prodculator.png";
import afrotodsAppImage from "../../assets/images/afrotods-app.png";
import shomytaxImage from "../../assets/images/shomytax.png";


export default function Tech() {
  const platforms = [
    {
      name: "Prodculator",
      tagline: "Script-Driven Production Intelligence",
     icon: Calculator,
      image: prodculatorImage,
      description: "Prodculator is DEO Media's proprietary production intelligence platform. Powered by our Scriptelligence™ engine, it transforms screenplays into actionable financial strategy — before production begins. Upload a script and instantly unlock location optimisation insights, incentive and rebate projections, cost-efficiency comparisons, and clear, decision-ready reports. Prodculator gives producers the financial edge traditional production never had.",
      features: [
        { icon: Cloud, title: "Cloud-Based Platform", description: "Secure script uploads and instant access to production intelligence from anywhere" },
        { icon: Calculator, title: "Scriptelligence™ Engine", description: "Proprietary analysis that converts screenplay data into strategic production insights" },
        { icon: BarChart3, title: "Financial Optimisation", description: "Model incentives, compare locations, and reduce cost risk before pre-production" },
        { icon: FileText, title: "Decision-Ready Reporting", description: "Structured reports built for executive, studio, and investor conversations" },
      ],
    },
    {
      name: "Shomytax",
      tagline: "Pan-African tax clarity for independent earners",
    icon: FileText,
      image: shomytaxImage,
      description: "ShoMyTax is a transaction-driven tax estimation platform built for African and emerging markets. It transforms bank statement data into structured income insights and estimated tax summaries, helping self-employed professionals understand potential obligations under local tax frameworks. Nigeria is the first launch market, with expansion planned across Africa and other high-growth economies.",
      features: [
        { icon: Calculator, title: "Local Tax Estimation Engine", description: "Accurate tax estimates based on local tax frameworks and regulations" },
        { icon: CreditCard, title: "Transaction-Based Income Analysis", description: "Transforms bank statement data into structured income insights" },
        { icon: FileText, title: "Structured Tax Summary Reports", description: "Clear tax summaries that help understand potential obligations" },
        { icon: Globe, title: "Expansion-Ready Architecture", description: "Built to scale across Africa and other high-growth economies" },
      ],
    },
    {
      name: "Afrotods App",
      tagline: "Step Into Afroville",
    icon: Smartphone,
      image: afrotodsAppImage,
      description: "Designed for children aged 3–10, THE AFROTODS Storybook App blends animated storytelling, engaging narration, interactive moments, and culturally rich characters to create a powerful learning and entertainment experience.",
      features: [
        { icon: BookOpen, title: "Animated Storytelling", description: "Immersive animated books that bring Afroville and its characters to life with rich visuals and cinematic narration" },
        { icon: Shield, title: "Child-Friendly Design", description: "Safe, intuitive interface built specifically for young readers and independent navigation" },
        { icon: Lightbulb, title: "Learning Through Story", description: "Each adventure gently teaches values like honesty, patience, creativity, and pride in heritage" },
        { icon: ShoppingBag, title: "One-Time Unlock", description: "Simple purchase model. No complicated subscriptions required for story access" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header variant="tech" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-black via-[#0A8F5A]/30 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Tech Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src={techLogo} 
              alt="Deo Media Tech" 
              className="h-32 md:h-40 w-auto"
            />
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Technology Platforms for Creators and Businesses
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">ABOUT DEO MEDIA TECH</h2>
            <div className="w-24 h-1 bg-[#0A8F5A] mb-8" />
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Deo Media Tech develops cutting-edge digital platforms and tools that empower creators, 
              production companies, and businesses across the media ecosystem. Our technology solutions 
              address real-world challenges in film production, financial management, and content delivery.
            </p>
            <p className="text-gray-400 leading-relaxed">
              From cloud-based budgeting tools to tax compliance systems and children's content platforms, 
              we leverage technology to streamline workflows, enhance productivity, and create new opportunities 
              for African media professionals and audiences.
            </p>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16 text-center">OUR PLATFORMS</h2>

          <div className="space-y-24">
            {platforms.map((platform, index) => (
              <div
                key={platform.name}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="aspect-video overflow-hidden rounded-lg bg-zinc-900">
                    <img
                      src={platform.image}
                      alt={platform.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <platform.icon className="text-[#0A8F5A]" size={36} />
                    <h3 className="text-3xl md:text-4xl font-bold">{platform.name}</h3>
                  </div>
                  <p className="text-[#0A8F5A] text-lg mb-6">{platform.tagline}</p>
                  <p className="text-gray-300 leading-relaxed mb-8">
                    {platform.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {platform.features.map((feature) => (
                      <div
                        key={feature.title}
                        className="bg-zinc-900 border border-zinc-800 p-4 hover:border-[#0A8F5A] transition-colors"
                      >
                        <feature.icon className="text-[#0A8F5A] mb-2" size={24} />
                        <h4 className="font-bold mb-1 text-sm">{feature.title}</h4>
                        <p className="text-xs text-gray-400">{feature.description}</p>
                      </div>
                    ))}
                  </div>

                  {/* View Platform Button - Only for Prodculator */}
                  {platform.name === "Prodculator" && (
                    <a 
                      href="https://prodculator.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#0A8F5A] hover:bg-[#087347] text-white uppercase tracking-wide font-semibold px-8 py-4 flex items-center justify-center gap-2 transition-colors"
                    >
                      <ExternalLink size={20} />
                      View Platform
                    </a>
                  )}

                  {/* Coming Soon Button - Only for Shomytax */}
                  {platform.name === "Shomytax" && (
                    <button className="bg-zinc-700 text-gray-400 cursor-not-allowed uppercase tracking-wide font-semibold px-8 py-4 flex items-center justify-center gap-2" disabled>
                      <Clock size={20} />
                      Coming Soon
                    </button>
                  )}

                  {/* Download Button - Only for Afrotods App */}
                  {platform.name === "Afrotods App" && (
                    <a 
                      href="https://play.google.com/store/apps/details?id=com.afrotods.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#0A8F5A] hover:bg-[#087347] text-white uppercase tracking-wide font-semibold px-8 py-4 flex items-center justify-center gap-2 transition-colors"
                    >
                      <Download size={20} />
                      Download on Google Play
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">WHY CHOOSE DEO MEDIA TECH?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platforms are built by media professionals for media professionals, 
              combining industry expertise with cutting-edge technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black border border-zinc-800 p-8 text-center hover:border-[#0A8F5A] transition-colors">
              <Cloud className="text-[#0A8F5A] mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-4">Cloud-Based Solutions</h3>
              <p className="text-gray-400">
                Access your tools from anywhere with secure cloud infrastructure and automatic updates.
              </p>
            </div>

            <div className="bg-black border border-zinc-800 p-8 text-center hover:border-[#0A8F5A] transition-colors">
              <Shield className="text-[#0A8F5A] mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-4">Industry Compliance</h3>
              <p className="text-gray-400">
                Built to meet industry standards and regulatory requirements across multiple jurisdictions.
              </p>
            </div>

            <div className="bg-black border border-zinc-800 p-8 text-center hover:border-[#0A8F5A] transition-colors">
              <BarChart3 className="text-[#0A8F5A] mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold mb-4">Data-Driven Insights</h3>
              <p className="text-gray-400">
                Powerful analytics and reporting to help you make informed business decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#0A8F5A] to-[#087347]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Want to work with our tech platforms?
          </h2>
          <p className="text-xl text-gray-100 mb-12 max-w-2xl mx-auto">
            Join thousands of creators and businesses already using Deo Media Tech platforms 
            to streamline their workflows and grow their business.
          </p>
         <Link
  to="/contact"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="inline-block"
>
  <span className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0A8F5A] uppercase tracking-wider hover:bg-transparent hover:text-white border-2 border-white transition-all font-bold">
    Contact Tech Team
    <ArrowRight size={20} />
  </span>
</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}