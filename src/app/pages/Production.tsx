import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useState, useRef } from "react";
import { ArrowRight, Play, X, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router";
import productionLogo from "../../assets/images/production.png";
import reelThumbnail from "../../assets/images/prod.png";
import ejeImage from "../../assets/images/eje.png";
import comatoseImage from "../../assets/images/comatose.jpg";
import covidPsaImage from "../../assets/images/covid-19.jpg";
import afrotodsImage from "../../assets/images/afrotods-animation.jpg";
import gtBankImage from "../../assets/images/gt-bank.jpg";
import BankImage from "../../assets/images/gt-bank.png";
import seplatEnergyImage from "../../assets/images/seplat.jpg";
import ngxImage from "../../assets/images/ngx.jpg";
import ekoVibesImage from "../../assets/images/eko.png";
import youthVaccineImage from "../../assets/images/vaxed.png";
import vaccineBoosterImage from "../../assets/images/youth.jpg";
import keReadyToVaxImage from "../../assets/images/ke.png";
import frutiyaImage from "../../assets/images/frutiya.jpg";

// Gallery Images Imports
import outdoorGallery1 from "../../assets/images/gt1.jpg";
import outdoorGallery2 from "../../assets/images/gt2.jpg";
import outdoorGallery3 from "../../assets/images/gt3.jpg";
import outdoorGallery4 from "../../assets/images/gt4.jpg";
import liveStreamGallery1 from "../../assets/images/seplat.jpg";
import liveStreamGallery2 from "../../assets/images/seplat.jpg";
import liveStreamGallery3 from "../../assets/images/seplat.jpg";
import devGallery1 from "../../assets/images/eko.png";
import devGallery2 from "../../assets/images/eko.png";
import devGallery3 from "../../assets/images/eko.png";
import preventCovidImage from "../../assets/images/print.png";
import printGallery1 from "../../assets/images/print1.png";
import printGallery2 from "../../assets/images/print2.png";
import printGallery3 from "../../assets/images/print3.png";
import printGallery4 from "../../assets/images/print4.png";

// ✅ VIDEO IMPORTS
import showcaseReel from "../../assets/videos/reel.mp4";
import covidVideo from "../../assets/videos/covid.mp4";
import afrotodsVideo from "../../assets/videos/ajad.mp4";
import ejeVideo from "../../assets/videos/eje.mp4";
import comatoseVideo from "../../assets/videos/DEO_Reel_07.mp4";
import gtbankVideo from "../../assets/videos/gt.mp4";
import frutiyaVideo from "../../assets/videos/frutiya.mp4";
import seplatVideo from "../../assets/videos/seplat.mp4";
import ngxVideo from "../../assets/videos/ngx.mp4";

// ✅ AUDIO IMPORTS
import youthSpot1 from "../../assets/audio/vaxed1.mp3";
import youthSpot2 from "../../assets/audio/vaxed2.mp3";
import youthSpot3 from "../../assets/audio/vaxed4.mp3";
import youthSpot4 from "../../assets/audio/vaxed3.mp3";
import youthSpot5 from "../../assets/audio/vaxed5.mp3";
import youthSpot6 from "../../assets/audio/vaxed6.mp3";
import youthSpot7 from "../../assets/audio/vaxed7.mp3";
import youthSpot8 from "../../assets/audio/vaxed8.mp3";
import youthSpot9 from "../../assets/audio/vaxed9.mp3";
import youthSpot10 from "../../assets/audio/vaxed10.mp3";
import youthSpot11 from "../../assets/audio/vaxed11.mp3";
import youthSpot12 from "../../assets/audio/vaxed12.mp3";

import boosterSpot1 from "../../assets/audio/booster1.mp3";
import boosterSpot2 from "../../assets/audio/booster2.mp3";
import boosterSpot3 from "../../assets/audio/booster3.mp3";
import boosterSpot4 from "../../assets/audio/booster4.mp3";
import boosterSpot5 from "../../assets/audio/booster5.mp3";
import boosterSpot6 from "../../assets/audio/booster6.mp3";
import boosterSpot7 from "../../assets/audio/booster7.mp3";
import boosterSpot8 from "../../assets/audio/booster8.mp3";
import boosterSpot9 from "../../assets/audio/booster9.mp3";
import boosterSpot10 from "../../assets/audio/booster10.mp3";
import boosterSpot11 from "../../assets/audio/booster11.mp3";

import keVaxSpot1 from "../../assets/audio/ke1.mp3";
import keVaxSpot2 from "../../assets/audio/ke2.mp3";
import keVaxSpot3 from "../../assets/audio/ke3.mp3";

export default function Production() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showReelPlaying, setShowReelPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const filters = [
    "All",
    "TV Commercials",
    "Animation",
    "Movies",
    "Outdoor",
    "Print",
    "Radio",
    "Live Streaming",
    "In Development"
  ];

  const projects = [
    {
      title: "COVID-19 Vaccine PSA",
      category: "TV Commercials",
      image: covidPsaImage,
      year: "2020",
      description: "Public service announcement promoting COVID-19 vaccination and ending uncertainty.",
      videoUrl: covidVideo,
    },
    {
      title: "Afrotods Animated Series",
      category: "Animation",
      image: afrotodsImage,
      year: "2024",
      description: "An exciting animated series celebrating African culture and storytelling through vibrant characters.",
      videoUrl: afrotodsVideo,
    },
    {
      title: "EJE",
      category: "Movies",
      image: ejeImage,
      year: "2025",
      description: " Lara, an unemployed young lady, responds to an online ad for a babysitter. To her surprise, she gets the job with just a phone interview and no reference checks.",
      videoUrl: ejeVideo,
    },
    {
      title: "COMATOSE",
      category: "Movies",
      image: comatoseImage,
      year: "2024",
      description: "A psychological thriller exploring the depths of human consciousness.",
      videoUrl: comatoseVideo,
    },
    {
      title: "GT Bank Branding",
      category: "Outdoor",
      image: gtBankImage,
      year: "2023",
      description: "Large-scale branding and environmental graphics for GT Bank's global business locations.",
      galleryImages: [
        outdoorGallery1,
        outdoorGallery2,
        outdoorGallery3,
         outdoorGallery4
      ]
    },
    {
      title: "Youth Vaccine PSA",
      category: "Radio",
      image: youthVaccineImage,
      year: "2023",
      description: "Vaxed & Opportunity Ready - An impactful radio PSA campaign encouraging youth vaccination and highlighting opportunities for vaccinated individuals.",
      audioFiles: [
        {
          title: "Youth Vaccine PSA - Radio",
          url: youthSpot1
        },
        {
          title: "Youth Vaccine PSA - Radio",
          url: youthSpot2
        },
        {
          title: "Youth Vaccine PSA - Radio",
          url: youthSpot3
        },
          {
          title: "Youth Vaccine PSA - Radio",
          url: youthSpot4
        },
          {
          title: "Youth Vaccine PSA - Radio",
          url: youthSpot5
        },
          {
          title: "Youth Vaccine PSA - Radio",
          url: youthSpot6
        },
          {
          title: "Youth Vaccine PSA - Radio",
          url: youthSpot7
        },
          {
          title: "Youth Vaccine PSA - Radio",
          url: youthSpot8
        },
          {
          title: "Youth Vaccine PSA - Radio",
          url: youthSpot9
        },
          {
          title: "Youth Vaccine PSA - Radio",
          url: youthSpot10
        },
          {
          title: "Youth Vaccine PSA - Radio",
          url: youthSpot11
        },
          {
          title: "Youth Vaccine PSA - Radio",
          url: youthSpot12
        },
      ],
    },
    {
      title: "Vaccine Booster",
      category: "Radio",
      image: vaccineBoosterImage,
      year: "2024",
      description: "Booster Shots Now Available to All 18+ - A public health radio campaign promoting COVID-19 booster vaccination accessibility for adults.",
      audioFiles: [
        {
          title: "Vaccine Booster - Radio Spot 1",
          url: boosterSpot1
        },
        {
          title: "Vaccine Booster - Radio Spot 2",
          url: boosterSpot2
        },
        {
          title: "Vaccine Booster - Radio Spot 3",
          url: boosterSpot3
        },
        {
          title: "Vaccine Booster - Radio Spot 4",
          url: boosterSpot4
        },
        {
          title: "Vaccine Booster - Radio Spot 5",
          url: boosterSpot5
        },
        {
          title: "Vaccine Booster - Radio Spot 6",
          url: boosterSpot6
        },
        {
          title: "Vaccine Booster - Radio Spot 7",
          url: boosterSpot7
        },
        {
          title: "Vaccine Booster - Radio Spot 8",
          url: boosterSpot8
        },
        {
          title: "Vaccine Booster - Radio Spot 9",
          url: boosterSpot9
        },
        {
          title: "Vaccine Booster - Radio Spot 10",
          url: boosterSpot10
        },
        {
          title: "Vaccine Booster - Radio Spot 11",
          url: boosterSpot11
        }
      ],
    },
    {
      title: "Ke Ready to Vax",
      category: "Radio",
      image: keReadyToVaxImage,
      year: "2024",
      description: "This campaign was a Vaccine promo campaign, we produced it in all 11 South African languages.",
      audioFiles: [
        {
          title: "Ke Ready to Vax - Radio Spot 1",
          url: keVaxSpot1
        },
        {
          title: "Ke Ready to Vax - Radio Spot 2",
          url: keVaxSpot2
        },
        {
          title: "Ke Ready to Vax - Radio Spot 3",
          url: keVaxSpot3
        }
      ],
    },
    {
      title: "NGX",
      category: "Live Streaming",
      image: ngxImage,
      year: "2024",
      description: "Professional live streaming production and broadcast coverage for Nigerian Exchange Group (NGX) events and market activities.",
      videoUrl: ngxVideo,
    },
    {
      title: "Seplat Energy",
      category: "Live Streaming",
      image: seplatEnergyImage,
      year: "2024",
      description: "Professional live streaming production and coverage for Seplat Energy's corporate events and announcements.",
      videoUrl: seplatVideo,
    },
    {
      title: "EKO Vibes",
      category: "In Development",
      image: ekoVibesImage,
      year: "2026",
      description: "An exciting new entertainment and music production celebrating Lagos culture and vibrant city life, currently in development.",
      galleryImages: [
        devGallery1,
        devGallery2,
        devGallery3
      ]
    },
    {
      title: "GTBank Brand Campaign",
      category: "TV Commercials",
      image: BankImage,
      year: "2023",
      description: "A dynamic brand campaign for GTBank, showcasing their commitment to excellence and innovation.",
      videoUrl: gtbankVideo,
    },
    {
      title: "Prevent COVID-19",
      category: "Print",
      image: preventCovidImage,
      year: "2021",
      description: "A series of print ads promoting COVID-19 prevention and safety measures.",
      galleryImages: [
        printGallery1,
        printGallery2,
        printGallery3,
        printGallery4
      ]
    },
    {
      title: "Frutiya",
      category: "TV Commercials",
      image: frutiyaImage,
      year: "2024",
      description: "A vibrant commercial campaign for Frutiya juice drinks, showcasing refreshing flavors and healthy lifestyle choices.",
      videoUrl: frutiyaVideo,
    },
  ];

  const hasVideo = (project: any) => {
    return !!project.videoUrl;
  };

  const hasAudio = (project: any) => {
    return Array.isArray(project.audioFiles) && project.audioFiles.length > 0;
  };

  const hasGallery = (project: any) => {
    return Array.isArray(project.galleryImages) && project.galleryImages.length > 0;
  };

  const isClickable = (project: any) => {
    return hasVideo(project) || hasAudio(project) || hasGallery(project);
  };

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const videoProjects = projects.filter((p) => hasVideo(p));
  const audioProjects = projects.filter((p) => hasAudio(p));
  const galleryProjects = projects.filter((p) => hasGallery(p));

  const handleProjectClick = (project: any) => {
    if (isClickable(project)) {
      setSelectedProject(project);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const navigateProject = (direction: "prev" | "next") => {
    if (!selectedProject) return;

    // Determine which collection to use
    const projectCollection = hasVideo(selectedProject)
      ? videoProjects
      : hasAudio(selectedProject)
      ? audioProjects
      : galleryProjects;

    const currentIndex = projectCollection.findIndex((p) => p.title === selectedProject.title);
    let newIndex;

    if (direction === "prev") {
      newIndex = currentIndex === 0 ? projectCollection.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === projectCollection.length - 1 ? 0 : currentIndex + 1;
    }

    setSelectedProject(projectCollection[newIndex]);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header variant="production" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-black via-[#0A3D91]/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Production Logo */}
          <div className="flex justify-center mb-8">
            <img
              src={productionLogo}
              alt="Production Division"
              className="h-32 md:h-45 w-auto"
            />
          </div>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Premium African Film & Media Production
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">ABOUT DEO MEDIA PRODUCTION</h2>
            <div className="w-24 h-1 bg-[#0A3D91] mb-8" />
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Deo Media Production is a full-service film and media production company specializing in
              world-class African storytelling. From concept development to post-production, we deliver
              cinematic excellence across feature films, documentaries, short films, and commercial campaigns.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our award-winning team combines technical expertise with creative vision to produce content
              that resonates locally and captivates globally. We are committed to elevating African narratives
              on the world stage.
            </p>
          </div>
        </div>
      </section>

      {/* Production Reel Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">PRODUCTION REEL</h2>
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden group">
              {showReelPlaying ? (
                <video
                  ref={videoRef}
                  src={showcaseReel}
                  controls
                  autoPlay
                  className="w-full h-full"
                  controlsList="nodownload"
                  onPause={() => setShowReelPlaying(false)}
                  onEnded={() => setShowReelPlaying(false)}
                >
                  Your browser does not support the video element.
                </video>
              ) : (
                <div
                  className="absolute inset-0 bg-black cursor-pointer"
                  onClick={() => setShowReelPlaying(true)}
                >
                  <img
                    src={reelThumbnail}
                    alt="Production Reel Thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-20 h-20 bg-[#0A3D91] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play size={32} fill="white" className="ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="text-2xl font-bold">Deo Media Production Showcase Reel 2025</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">OUR PORTFOLIO</h2>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-16">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 uppercase tracking-wider text-sm transition-all ${
                  activeFilter === filter
                    ? "bg-[#0A3D91] text-white"
                    : "bg-zinc-900 text-gray-400 hover:bg-zinc-800 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.title}
                className={`group relative overflow-hidden bg-zinc-900 ${isClickable(project) ? "cursor-pointer" : ""}`}
                onClick={() => handleProjectClick(project)}
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {(hasVideo(project) || hasAudio(project)) && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                      <div className="w-16 h-16 bg-[#0A3D91] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play size={24} fill="white" className="ml-1" />
                      </div>
                    </div>
                  )}
                </div>
                {!isClickable(project) && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-sm text-[#0A3D91] uppercase tracking-wider mb-2">
                      {project.category} • {project.year}
                    </p>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-300">{project.description}</p>
                  </div>
                )}
                <div className="p-6">
                  <p className="text-sm text-[#0A3D91] uppercase tracking-wider mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isModalOpen && selectedProject && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className={`relative w-full bg-zinc-900 ${hasAudio(selectedProject) ? "max-w-4xl" : "max-w-2xl"}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Navigation Controls - Top Right */}
            <div className="absolute -top-14 right-0 flex items-center gap-2 z-20">
              <button
                onClick={() => navigateProject("prev")}
                className="w-10 h-10 rounded-full border-2 border-white text-white hover:bg-white hover:text-black transition-all flex items-center justify-center"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={closeModal}
                className="w-10 h-10 rounded-full border-2 border-white text-white hover:bg-white hover:text-black transition-all flex items-center justify-center"
              >
                <X size={18} />
              </button>
              <button
                onClick={() => navigateProject("next")}
                className="w-10 h-10 rounded-full border-2 border-white text-white hover:bg-white hover:text-black transition-all flex items-center justify-center"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Content - Video or Audio */}
            {hasVideo(selectedProject) ? (
              <div className="aspect-video bg-black">
                <video
                  src={selectedProject.videoUrl}
                  controls
                  className="w-full h-full"
                  controlsList="nodownload"
                >
                  Your browser does not support the video element.
                </video>
              </div>
            ) : hasAudio(selectedProject) ? (
              <div className="bg-zinc-900 p-4 max-h-[80vh] overflow-y-auto">
                <div className="max-w-full mx-auto">
                  {/* Title and Description */}
                  <div className="mb-4 pb-4 border-b border-zinc-700">
                    <p className="text-xs text-[#0A3D91] uppercase tracking-wider mb-1">
                      {selectedProject.category} • {selectedProject.year}
                    </p>
                    <h3 className="text-lg font-bold mb-1.5 text-white">{selectedProject.title}</h3>
                    <p className="text-xs text-gray-300 leading-relaxed">{selectedProject.description}</p>
                  </div>

                  {/* Audio Files */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {selectedProject.audioFiles?.map((audioFile: any, index: number) => (
                      <div key={index} className="bg-black p-2.5 rounded">
                        <p className="text-[10px] text-gray-400 mb-1.5 truncate">{audioFile.title}</p>
                        <audio
                          controls
                          className="w-full h-8"
                          src={audioFile.url}
                        >
                          Your browser does not support the audio element.
                        </audio>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : hasGallery(selectedProject) ? (
              <div className="bg-zinc-900 p-6 max-h-[80vh] overflow-y-auto">
                <div className="max-w-full mx-auto">
                  {/* Title and Description */}
                  <div className="mb-6">
                    <p className="text-xs text-[#0A3D91] uppercase tracking-wider mb-2">
                      {selectedProject.category} • {selectedProject.year}
                    </p>
                    <h3 className="text-2xl font-bold mb-3 text-white">{selectedProject.title}</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">{selectedProject.description}</p>
                  </div>

                  {/* Gallery Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {selectedProject.galleryImages?.map((image: any, index: number) => (
                      <div key={index} className="aspect-video bg-black rounded overflow-hidden">
                        <img
                          src={image}
                          alt={`${selectedProject.title} - Gallery Image ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}

            <div className={`p-4 bg-zinc-900 ${hasAudio(selectedProject) || hasGallery(selectedProject) ? "hidden" : ""}`}>
              <p className="text-xs text-[#0A3D91] uppercase tracking-wider mb-1">
                {selectedProject.category} • {selectedProject.year}
              </p>
              <h3 className="text-lg font-bold mb-1.5 text-white">{selectedProject.title}</h3>
              <p className="text-gray-300 text-xs leading-relaxed">{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#0A3D91] to-[#082d6b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Have a production in mind?
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
            Let's bring your vision to life. Our production team is ready to collaborate on your next project.
          </p>
          <Link
            to="/contact"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-block"
          >
            <span className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#0A3D91] uppercase tracking-wider hover:bg-transparent hover:text-white border-2 border-white transition-all font-bold">
              Contact Production Team
              <ArrowRight size={20} />
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}