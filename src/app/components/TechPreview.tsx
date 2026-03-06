import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Calculator, DollarSign, Smartphone } from "lucide-react";
import { Link } from "react-router";
import afrotodsAppImage from "../../assets/images/afrotods-app.png";
import prodculatorImage from "../../assets/images/prodculator.png";
import shomytaxImage from "../../assets/images/shomytax.png";

export function TechPreview() {
  const platforms = [
    {
      name: "Prodculator",
      icon: Calculator,
      description: "Production intelligence platform for film budgeting and territory analysis.",
      status: "LIVE",
      statusColor: "bg-green-600",
      image: prodculatorImage
    },
    {
      name: "Shomytax",
      icon: DollarSign,
      description: "Tax clarity platform helping individuals understand their tax position.",
      status: "COMING SOON",
      statusColor: "bg-yellow-600",
      image: shomytaxImage
    },
    {
      name: "Afrotods App",
      icon: Smartphone,
      description: "Interactive storytelling platform for children with games and animated books.",
      status: "LIVE",
      statusColor: "bg-green-600",
      image: afrotodsAppImage
    }
  ];

  return (
    <section id="tech" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-16 bg-red-600"></div>
            <span className="text-red-600 uppercase text-sm font-bold tracking-wider">Creative Tech</span>
            <div className="h-1 w-16 bg-red-600"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
            OUR <span className="text-red-600">PLATFORMS</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Deo Media Tech builds digital platforms for creators and businesses — production intelligence, tax clarity, and interactive content for the next generation.
          </p>
        </div>

        {/* 3 Platform Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {platforms.map((platform, idx) => (
            <div 
              key={idx}
              className="bg-black border-2 border-gray-800 hover:border-red-600 transition-all p-8 group"
            >
              {/* Icon & Status */}
              <div className="flex items-start justify-between mb-6">
                <platform.icon className="w-12 h-12 text-red-600" />
                <div className={`${platform.statusColor} text-white text-xs font-bold uppercase tracking-wider px-3 py-1`}>
                  {platform.status}
                </div>
              </div>

              {/* Image if available */}
              {platform.image && (
                <div className="mb-6 aspect-video rounded overflow-hidden">
                  <ImageWithFallback
                    src={platform.image}
                    alt={platform.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                {platform.name}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {platform.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
       <div className="text-center">
  <Link
    to="/tech"
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    className="inline-block"
  >
    <span className="inline-flex items-center justify-center gap-2 px-8 py-6 bg-red-600 hover:bg-red-700 text-white uppercase tracking-wide font-semibold text-base transition-colors">
      SHOW INVENTORY →
    </span>
  </Link>
</div>
      </div>
    </section>
  );
}