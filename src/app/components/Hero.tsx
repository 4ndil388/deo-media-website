import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import comatoseImage from "../../assets/images/production-h.jpg";
import animationImage from "../../assets/images/publishing-h.jpg";
import portraitImage from "../../assets/images/tech-h.png";
import productionImage from "../../assets/images/distribution-h.jpg";

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const backgroundImages = [
    {
      url: comatoseImage,
      label: "PRODUCTION"
    },
    {
      url: animationImage,
      label: "PUBLISHING"
    },
    {
      url: portraitImage,
      label: "TECH"
    },
    {
      url: productionImage,
      label: "DISTRIBUTION"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navigateToContact = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/70" />
          </div>
        ))}
      </div>

      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10 z-[1]" style={{
        backgroundImage: 'repeating-linear-gradient(90deg, #ff0000 0px, transparent 1px, transparent 40px), repeating-linear-gradient(0deg, #ff0000 0px, transparent 1px, transparent 40px)',
        backgroundSize: '40px 40px'
      }} />
      
      {/* Red geometric accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-600/20 to-transparent z-[1]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center space-y-12">
         
          {/* Main Headline - MASSIVE */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
              <span className="text-white">A CREATIVE </span>
              <span className="text-red-600">MEDIA TECH</span>
              <span className="text-white"> COMPANY</span>
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
            Connecting creative ideas with global audiences through technology, production, publishing, and distribution
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <button 
              className="bg-red-600 hover:bg-red-700 text-white uppercase tracking-wide font-semibold text-lg px-10 py-6 transition-colors inline-flex items-center gap-2"
              onClick={() => scrollToSection("production")}
            >
              View Our Work
              <ArrowRight className="h-6 w-6" />
            </button>
            <button 
              className="border-2 border-white text-white hover:bg-white hover:text-black uppercase tracking-wide font-semibold text-lg px-10 py-6 transition-colors"
              onClick={navigateToContact}
            >
              Get In Touch
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-16 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-white/30 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {backgroundImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="group flex flex-col items-center gap-2"
          >
            <div 
              className={`h-1 transition-all duration-300 ${
                index === currentSlide 
                  ? "w-12 bg-red-600" 
                  : "w-8 bg-white/30 hover:bg-white/50"
              }`}
            />
            <span className={`text-xs uppercase tracking-wider font-bold transition-colors ${
              index === currentSlide 
                ? "text-red-600" 
                : "text-white/50 group-hover:text-white/80"
            }`}>
              {image.label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
