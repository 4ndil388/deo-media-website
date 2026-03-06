import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { Link } from "react-router";
import distributionLogo from "../../assets/images/distribution.png";
import prideOfLionessImage from "../../assets/images/pride.png";
import lilithAndEveImage from "../../assets/images/eve.png";
import theLastFightImage from "../../assets/images/last.png";
import rageOfLionessImage from "../../assets/images/rage.png";
import comatoseImage from "../../assets/images/comatosee.png";
import firstLastTourImage from "../../assets/images/tour.png";

export default function Distribution() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedMovie, setSelectedMovie] = useState<any>(null);

  const filters = ["All", "Feature Film", "Short Film", "Series", "International", "Local"];

  const movies = [
    {
      title: "Pride of a Lioness",
      category: "Feature Film",
      region: "International",
      image: prideOfLionessImage,
      year: "2021",
      territories: "Amazon Prime Video",
      synopsis: "In the sequel to Rage of a lioness, Ruth is a battle tested no nonsense retired police woman turned security guard at an ageing hospital that is being closed down for renovations. Siya, her late daughter's boyfriend and surrogate son finds himself on the run from a rogue police unit when he acquires evidence of their corruption and runs to Ruth for refuge. The two find themselves trapped in a deadly cat and mouse game in the empty hospital, with no other choice but to fight for their lives when the police men converge on the hospital with the intention of tying up loose ends.",
      keyCast: "Wiseman Ncube, Samela Tyelbooi, Joe Kazadi",
      writer: "Thabiso Camilo Christopher",
      genre: "Action/Thriller",
      director: "Adze Ugah",
      productionHouse: "Sigola Media",
      productionStatus: "Completed 2021",
      runningTime: "56 Minutes",
      language: "Zulu, Xhosa (English subtitles)",
      countryOfFilming: "South Africa",
      camera: "Digital, Sony A7s Mark III",
      screeningBroadcastRelease: "NONE",
    },
    {
      title: "The Ground Beneath Her Feet",
      category: "Feature Film",
      region: "International",
      image: lilithAndEveImage,
      year: "2024",
      territories: "Amazon Prime Video",
      synopsis: "When a young mistress tries to convince the estranged wife of the man she is having an affair with to grant him a divorce, she unwittingly steps into a diabolical scheme, hatched by the wife, that could see her end up in jail or even lose her life.",
      keyCast: "Beverly Naya, Linda Osifo, Shawn Faqua",
      writer: "Abba Makama",
      genre: "Psychological Thriller",
      director: "C.J. 'Fiery' Obasi",
      runningTime: "90 mins",
      targetAudience: "16 to 65",
      tagline: "The only thing standing in the way of their goals is each other.",
      logline: "A young woman's attempt to get the wife of the man she is having an affair with, to agree to a divorce, takes an unexpected turn when she discovers that she might just be a pawn in the wife's malicious scheme.",
      premise: "What if a young mistress's effort to negotiate a divorce between the man she is having an affair with and his estranged wife, leads to a treacherous cat and mouse game that raises the stakes far above that which she could ever have imagined.",
    },
    {
      title: "The Last Fight",
      category: "Feature Film",
      region: "International",
      image: theLastFightImage,
      year: "2024",
      territories: "Amazon Prime Video",
      synopsis: "Aged but strong-willed, a disgraced veteran fights one last time to save his naïve son from a gangster hell-bent on getting revenge for the young man's failed initiation and running off with his headstrong daughter.",
      keyCast: "Richard Mofe-Damijo, Toyin Abraham, Blossom Chukwujekwu",
      writer: "Thabiso Christopher",
      genre: "Dramatic Thriller",
      director: "Jade Osiberu",
      storyteller: "Thabiso Christopher – 083 536 9940 (camilochristopher@gmail.com)",
      length: "90-to-120-minute film",
      targetAudience: "16-65 year olds",
      tagline: "Old or young, evil must be defeated.",
      logline: "Aged but strong-willed, a disgraced veteran fights one last time to save his naïve son from a gangster hell-bent on getting revenge for the young man's failed initiation and running off with his headstrong daughter.",
      premise: "What if a veteran freedom fighter, disgraced for letting an askari escape justice, is forced to dig deep into his grit to save his only son and family member from the wrath of a brutal and ruthless gangster, the same man whom he spared during the Struggle?",
      dramaticIssue: "Redemption",
      dramaticValues: "Redemption vs. Devastating Defeat",
      controllingIdea: "A father's love and ultimate sacrifice can guide his son to become the man he needs to be in a harsh and unforgiving world.",
      themes: "Love, family, failure, redemption, justice, death, desperation, survival.",
      worldOfStory: "Set in the heart of SA's townships, the story takes place in three major locations – a cramped township house where Bangizwe lives, and where Kagiso lived; a lively and dark shebeen (Mama's) where Bra Stix operates his gang from; and a taxi rank where the final act takes place. The story also takes place in the streets, where the main characters interact with other people and attempt to flee the villain's goons. It's a lively location, offering unique and exciting visuals of a township that has both slum and suburb elements. It also focuses and traps the characters to fend for themselves, in a place where there are few who would interrupt their daily lives to save an unknown person from being hunted by a known killer.",
    },
    {
      title: "Rage of a Lioness",
      category: "Feature Film",
      region: "International",
      image: rageOfLionessImage,
      year: "2019",
      territories: "Amazon Prime Video",
      synopsis: "When her daughter is kidnapped, a mother unleashes her fury and embarks on a relentless quest for justice that will stop at nothing.",
      keyCast: "Wiseman Ncube, Samela Tyelbooi, Jabulani Mthembu",
      writer: "Thabiso Camilo Christopher",
      genre: "Action/Thriller",
      director: "Adze Ugah",
      productionHouse: "Sigola Media",
      productionStatus: "Completed 2019",
      runningTime: "77 Minutes",
      language: "Zulu, Xhosa (English subtitles)",
      countryOfFilming: "South Africa",
      camera: "Digital, Sony A7s Mark III",
      screeningBroadcastRelease: "SHOWMAX",
    },
    {
      title: "Comatose",
      category: "Feature Film",
      region: "International",
      image: comatoseImage,
      year: "2016",
      territories: "Amazon Prime Video",
      synopsis: "A medical thriller that follows a brilliant doctor who must solve a mysterious illness affecting patients while battling her own demons.",
      keyCast: "Fabian Adeoye Lojede, Bimbo Akintola, Aissa Miaga, Hakeem Kae Kazim, Robert Whitehead",
      writer: "Fabian Adeoye Lojede, Jude Idada, Mickey Madoda Dube",
      genre: "Action/Thriller",
      director: "Mickey Madoda Dube",
      producers: "Fabian Adeoye Lojede, Mickey Dube",
      productionStatus: "Completed 2016",
      language: "English, Yoruba (English subtitles)",
    },
    {
      title: "First Last Tour",
      category: "Feature Film",
      region: "International",
      image: firstLastTourImage,
      year: "2024",
      territories: "Amazon Prime Video",
      synopsis: "An already down and out Rapper wanna be in his 20's has lost all hopes of ever becoming a household name. Having never taken off on his own native country where his home language and culture seems to be waning, he goes on to Bomb on stage in a Dutch speaking country where he thought his language will give him an advantage as its close to the one spoken there. Being forced to come back to reality of living in Johannesburg in his home country, he arrives back to even more nails to his coffin. He's robbed of his last belongings seconds after arriving back in Johannesburg, finds out his possible accommodation and ex-girlfriend is now engaged and living with someone else, his only family and brother is a drug dealer who wants him to join the family business. Suicide seems to be the only solution right now…",
      keyCast: "Rouge, Nadia Nakai, Marinus Gubitz, Tarryn Wyngaard, Siya Seya, Bonko Khoza",
      writer: "Marinus Gubitz and Rorisang Motuba",
      genre: "Drama Musical (Rap)",
      director: "David Kau",
      producers: "Malebo Manamela",
      productionStatus: "Completed",
      runningTime: "72 Minutes",
      language: "English",
      countryOfFilming: "South Africa/Nigeria",
      targetAudience: "16 – 55 (65% male 35% Female)",
    },
  ];

  const getFilteredMovies = () => {
    if (activeFilter === "All") return movies;
    if (activeFilter === "International" || activeFilter === "Local") {
      return movies.filter(m => m.region === activeFilter);
    }
    return movies.filter(m => m.category === activeFilter);
  };

  const filteredMovies = getFilteredMovies();

  return (
    <div className="min-h-screen bg-black text-white">
      <Header variant="distribution" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-black via-[#DC2626]/10 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Distribution Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src={distributionLogo} 
              alt="Distribution Division" 
              className="h-32 md:h-40 w-auto"
            />
          </div>
          
         
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Connecting African Stories with Global Audiences
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">ABOUT DEO MEDIA DISTRIBUTION</h2>
            <div className="w-24 h-1 bg-[#DC2626] mb-8" />
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Deo Media Distribution is your gateway to global audiences. With an extensive network spanning 
              theatrical releases, premium streaming platforms, broadcast television, and digital channels, 
              we ensure African content reaches viewers across multiple continents.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our experienced team handles every aspect of distribution—from rights acquisition and strategic 
              positioning to marketing campaigns and revenue optimization. We are committed to maximizing the 
              reach and impact of every film we represent.
            </p>
          </div>
        </div>
      </section>

      {/* Movies Grid Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12">DISTRIBUTED CONTENT</h2>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-16">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 uppercase tracking-wider text-sm transition-all ${
                  activeFilter === filter
                    ? "bg-[#DC2626] text-white"
                    : "bg-zinc-900 text-gray-400 hover:bg-zinc-800 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Movies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMovies.map((movie) => (
              <div 
                key={movie.title} 
                className="group relative overflow-hidden bg-zinc-900 cursor-pointer"
                onClick={() => setSelectedMovie(movie)}
              >
                <div className="aspect-[2/3] overflow-hidden">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-sm text-[#DC2626] uppercase tracking-wider mb-2">
                    {movie.category} • {movie.year}
                  </p>
                  <h3 className="text-2xl font-bold mb-2">{movie.title}</h3>
                  <p className="text-sm text-gray-300">{movie.territories}</p>
                  <button className="mt-4 px-4 py-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white text-sm uppercase tracking-wider transition-colors">
                    View Details
                  </button>
                </div>
                <div className="p-6">
                  <p className="text-sm text-[#DC2626] uppercase tracking-wider mb-2">
                    {movie.category}
                  </p>
                  <h3 className="text-xl font-bold mb-1">{movie.title}</h3>
                  <p className="text-sm text-gray-400">{movie.territories}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Movie Detail Modal */}
      {selectedMovie && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedMovie(null)}
        >
          <div 
            className="bg-zinc-900 max-w-5xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedMovie(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 p-2 transition-colors"
            >
              <X size={24} className="text-white" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Movie Image */}
              <div className="aspect-[2/3] lg:aspect-auto">
                <img
                  src={selectedMovie.image}
                  alt={selectedMovie.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Movie Details */}
              <div className="p-8 lg:p-12 space-y-6">
                <div>
                  <p className="text-[#DC2626] text-sm uppercase tracking-wider mb-2">
                    {selectedMovie.category} • {selectedMovie.year}
                  </p>
                  <h2 className="text-4xl font-bold mb-4">{selectedMovie.title}</h2>
                  <p className="text-gray-400 text-sm uppercase tracking-wider">
                    {selectedMovie.territories}
                  </p>
                </div>

                <div className="space-y-4 text-sm">
                  <div>
                    <h3 className="text-[#DC2626] font-bold uppercase tracking-wider mb-2">Synopsis:</h3>
                    <p className="text-gray-300 leading-relaxed">{selectedMovie.synopsis}</p>
                  </div>

                  <div>
                    <h3 className="text-[#DC2626] font-bold uppercase tracking-wider mb-2">Genre:</h3>
                    <p className="text-gray-300">{selectedMovie.genre}</p>
                  </div>

                  <div>
                    <h3 className="text-[#DC2626] font-bold uppercase tracking-wider mb-2">Director:</h3>
                    <p className="text-gray-300">{selectedMovie.director}</p>
                  </div>

                  <div>
                    <h3 className="text-[#DC2626] font-bold uppercase tracking-wider mb-2">Writer:</h3>
                    <p className="text-gray-300">{selectedMovie.writer}</p>
                  </div>

                  {selectedMovie.producers && (
                    <div>
                      <h3 className="text-[#DC2626] font-bold uppercase tracking-wider mb-2">Producers:</h3>
                      <p className="text-gray-300">{selectedMovie.producers}</p>
                    </div>
                  )}

                  <div>
                    <h3 className="text-[#DC2626] font-bold uppercase tracking-wider mb-2">Key Cast:</h3>
                    <p className="text-gray-300">{selectedMovie.keyCast}</p>
                  </div>

                  {selectedMovie.productionStatus && (
                    <div>
                      <h3 className="text-[#DC2626] font-bold uppercase tracking-wider mb-2">Production Status:</h3>
                      <p className="text-gray-300">{selectedMovie.productionStatus}</p>
                    </div>
                  )}

                  {selectedMovie.language && (
                    <div>
                      <h3 className="text-[#DC2626] font-bold uppercase tracking-wider mb-2">Language:</h3>
                      <p className="text-gray-300">{selectedMovie.language}</p>
                    </div>
                  )}

                  {selectedMovie.runningTime && (
                    <div>
                      <h3 className="text-[#DC2626] font-bold uppercase tracking-wider mb-2">Running Time:</h3>
                      <p className="text-gray-300">{selectedMovie.runningTime}</p>
                    </div>
                  )}

                  {selectedMovie.targetAudience && (
                    <div>
                      <h3 className="text-[#DC2626] font-bold uppercase tracking-wider mb-2">Target Audience:</h3>
                      <p className="text-gray-300">{selectedMovie.targetAudience}</p>
                    </div>
                  )}

                  {selectedMovie.tagline && (
                    <div>
                      <h3 className="text-[#DC2626] font-bold uppercase tracking-wider mb-2">Tagline:</h3>
                      <p className="text-gray-300">{selectedMovie.tagline}</p>
                    </div>
                  )}

                  {selectedMovie.logline && (
                    <div>
                      <h3 className="text-[#DC2626] font-bold uppercase tracking-wider mb-2">Logline:</h3>
                      <p className="text-gray-300">{selectedMovie.logline}</p>
                    </div>
                  )}

                  {selectedMovie.premise && (
                    <div>
                      <h3 className="text-[#DC2626] font-bold uppercase tracking-wider mb-2">Premise:</h3>
                      <p className="text-gray-300">{selectedMovie.premise}</p>
                    </div>
                  )}

                  {selectedMovie.dramaticIssue && (
                    <div>
                      <h3 className="text-[#DC2626] font-bold uppercase tracking-wider mb-2">Dramatic Issue:</h3>
                      <p className="text-gray-300">{selectedMovie.dramaticIssue}</p>
                    </div>
                  )}

                  {selectedMovie.dramaticValues && (
                    <div>
                      <h3 className="text-[#DC2626] font-bold uppercase tracking-wider mb-2">Dramatic Values:</h3>
                      <p className="text-gray-300">{selectedMovie.dramaticValues}</p>
                    </div>
                  )}

                  {selectedMovie.controllingIdea && (
                    <div>
                      <h3 className="text-[#DC2626] font-bold uppercase tracking-wider mb-2">Controlling Idea:</h3>
                      <p className="text-gray-300">{selectedMovie.controllingIdea}</p>
                    </div>
                  )}

                  {selectedMovie.themes && (
                    <div>
                      <h3 className="text-[#DC2626] font-bold uppercase tracking-wider mb-2">Themes:</h3>
                      <p className="text-gray-300">{selectedMovie.themes}</p>
                    </div>
                  )}

                  {selectedMovie.worldOfStory && (
                    <div>
                      <h3 className="text-[#DC2626] font-bold uppercase tracking-wider mb-2">World of Story:</h3>
                      <p className="text-gray-300">{selectedMovie.worldOfStory}</p>
                    </div>
                  )}

                  {selectedMovie.storyteller && (
                    <div>
                      <h3 className="text-[#DC2626] font-bold uppercase tracking-wider mb-2">Storyteller:</h3>
                      <p className="text-gray-300">{selectedMovie.storyteller}</p>
                    </div>
                  )}

                  {selectedMovie.length && (
                    <div>
                      <h3 className="text-[#DC2626] font-bold uppercase tracking-wider mb-2">Length:</h3>
                      <p className="text-gray-300">{selectedMovie.length}</p>
                    </div>
                  )}

                  {selectedMovie.countryOfFilming && (
                    <div>
                      <h3 className="text-[#DC2626] font-bold uppercase tracking-wider mb-2">Country of Filming:</h3>
                      <p className="text-gray-300">{selectedMovie.countryOfFilming}</p>
                    </div>
                  )}

                  {selectedMovie.camera && (
                    <div>
                      <h3 className="text-[#DC2626] font-bold uppercase tracking-wider mb-2">Camera:</h3>
                      <p className="text-gray-300">{selectedMovie.camera}</p>
                    </div>
                  )}

                  {selectedMovie.screeningBroadcastRelease && (
                    <div>
                      <h3 className="text-[#DC2626] font-bold uppercase tracking-wider mb-2">Screening/Broadcast Release:</h3>
                      <p className="text-gray-300">{selectedMovie.screeningBroadcastRelease}</p>
                    </div>
                  )}

                  {selectedMovie.productionHouse && (
                    <div>
                      <h3 className="text-[#DC2626] font-bold uppercase tracking-wider mb-2">Production House:</h3>
                      <p className="text-gray-300">{selectedMovie.productionHouse}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#DC2626] to-[#B91C1C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to distribute your film?
          </h2>
          <p className="text-xl text-gray-100 mb-12 max-w-2xl mx-auto">
            Partner with Deo Media Distribution to bring your content to audiences worldwide.
          </p>
          <Link
  to="/contact"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="inline-block"
>
  <span className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-red-600 border-2 border-white hover:bg-transparent hover:text-white transition-all font-bold uppercase tracking-wider">
    CONTACT DISTRIBUTION TEAM
    <ArrowRight size={20} />
  </span>
</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}