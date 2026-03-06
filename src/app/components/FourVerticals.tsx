import productionsLogo from "../../assets/images/production.png";
import distributionLogo from "../../assets/images/distribution.png";
import publishingLogo from "../../assets/images/publishing.png";
import techLogo from "../../assets/images/tech.png";
export function FourVerticals() {
  const verticals = [
    {
      logo: productionsLogo,
      description: "Films, television, micro dramas, commercials and original content — produced across the UK and international markets.",
      link: "production",
      hoverColor: "#1477cd"
    },
    {
      logo: distributionLogo,
      description: "Global distribution arm placing Deo Media content across platforms and territories worldwide.",
      link: "distribution",
      hoverColor: "#eb2131"
    },
    {
      logo: publishingLogo,
      description: "Publisher of THE AFROTODS children's book and intellectual property — with animation and app extensions in development.",
      link: "publishing",
      hoverColor: "#c5570f"
    },
    {
      logo: techLogo,
      description: "Owner of Prodculator — the production intelligence platform — and the Shomytax tax clarity engine.",
      link: "tech",
      hoverColor: "#70be2d"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {verticals.map((vertical, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(vertical.link)}
              className="group bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 transition-all p-10 text-left"
              style={{
                ['--hover-color' as string]: vertical.hoverColor,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = vertical.hoverColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '';
              }}
            >
              {/* Logo */}
              <div className="flex justify-center mb-6">
                <img 
                  src={vertical.logo} 
                  alt="Division Logo" 
                  className="h-24 md:h-32 w-auto object-contain"
                />
              </div>
              
              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {vertical.description}
              </p>

              {/* Underline indicator */}
              <div 
                className="w-0 h-0.5 group-hover:w-16 transition-all duration-300 mt-6"
                style={{ backgroundColor: vertical.hoverColor }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
