import { useNavigate } from "react-router";
import ejeImage from "../../assets/images/eje.png";
import comatoseImage from "../../assets/images/comatose.jpg";
import covid19Image from "../../assets/images/covid-19.jpg";

export function ProductionPreview() {
  const navigate = useNavigate();

  const projects = [
    {
      title: "EJE",
     
      image: ejeImage
    },
    {
      title: "Comatose",
   
      image: comatoseImage
    },
    {
      title: "COVID-19 Campaign",
    
      image: covid19Image
    }
  ];

  return (
    <section id="production" className="py-24 bg-[#18181b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-16 bg-red-600"></div>
            <span className="text-red-600 uppercase text-sm font-bold tracking-wider">Production</span>
            <div className="h-1 w-16 bg-red-600"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
            OUR <span className="text-red-600">WORK</span>
          </h2>
        </div>

        {/* 3 Column Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="group relative overflow-hidden bg-gray-900 border-2 border-gray-800 hover:border-red-600 transition-all"
            >
              <div className="aspect-[16/9] relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-red-600 text-xs font-bold uppercase tracking-wider mb-2">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-wide">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button 
            onClick={() => {
              navigate("/production");
              setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
            }}
            className="bg-red-600 hover:bg-red-700 text-white uppercase tracking-wide font-semibold px-8 py-6 text-base transition-colors"
          >
            SHOW MORE PRODUCTION PROJECTS →
          </button>
        </div>
      </div>
    </section>
  );
}