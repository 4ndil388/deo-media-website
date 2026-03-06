import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ArrowRight, BookOpen, Smartphone, ShoppingBag, Book, FileText, Tv } from "lucide-react";
import { Link } from "react-router";
import publishingLogo from "../../assets/images/publishing.png";
import afrotodsBookImage from "../../assets/images/book.jpg";
import afrotodsEbookImage from "../../assets/images/ebook.jpg";

export default function Publishing() {
  const catalogItems = [
    {
      title: "THE AFROTODS BOOK",
      category: "Book",
      icon: Book,
      image: afrotodsBookImage,
      description: "A children's illustrated book celebrating imagination, culture, and storytelling.",
      status: "Published",
      statusColor: "bg-green-600",
      link: "https://afrotods.com/product/the-afrotods-festival-time/"
    },
    {
      title: "AFROTODS EBOOK",
      category: "eBook",
      icon: FileText,
      image: afrotodsEbookImage,
      description: "The digital edition available on Google Play Books for readers worldwide.",
      status: "Available",
      statusColor: "bg-green-600",
      link: "https://play.google.com/store/books/details/Fabian_Adeoye_Lojede_The_Afrotods_Festival_Time?id=QIi5EQAAQBAJ"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header variant="publishing" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-black via-[#6B3F1D]/25 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Publishing Logo */}
          <div className="flex justify-center mb-8">
            <img
              src={publishingLogo}
              alt="Publishing Division"
              className="h-32 md:h-45 w-auto"
            />
          </div>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Bringing African Stories to Readers Worldwide
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">ABOUT DEO MEDIA PUBLISHING</h2>
            <div className="w-24 h-1 bg-[#6B3F1D] mb-8" />
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Deo Media Publishing is dedicated to amplifying African voices through premium books,
              eBooks, and curated merchandise. We partner with talented authors, illustrators, and
              creatives to produce high-quality publications that celebrate African culture, history,
              and contemporary experiences.
            </p>
            <p className="text-gray-400 leading-relaxed">
              From fiction and non-fiction to children's books and art collections, our catalog spans
              diverse genres and formats. We provide comprehensive publishing services including editorial
              development, design, distribution, and marketing to ensure every publication reaches its
              intended audience.
            </p>
          </div>
        </div>
      </section>

      {/* Category Overview */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16 text-center">OUR PUBLISHING CATEGORIES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900 border border-[#6B3F1D]/30 p-8 hover:border-[#6B3F1D] transition-colors group">
              <BookOpen className="text-[#6B3F1D] mb-4 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-2xl font-bold mb-4">Books</h3>
              <p className="text-gray-400 leading-relaxed">
                Premium hardcover and paperback publications featuring Africa's finest literary voices.
                From contemporary fiction to historical narratives, our collection celebrates storytelling
                at its best.
              </p>
            </div>

            <div className="bg-zinc-900 border border-[#6B3F1D]/30 p-8 hover:border-[#6B3F1D] transition-colors group">
              <Smartphone className="text-[#6B3F1D] mb-4 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-2xl font-bold mb-4">eBooks</h3>
              <p className="text-gray-400 leading-relaxed">
                Digital publications accessible worldwide, including eBooks and audiobooks optimized
                for modern readers. Available on major platforms with seamless reading experiences
                across devices.
              </p>
            </div>

            <div className="bg-zinc-900 border border-[#6B3F1D]/30 p-8 hover:border-[#6B3F1D] transition-colors group">
              <ShoppingBag className="text-[#6B3F1D] mb-4 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-2xl font-bold mb-4">Merchandise</h3>
              <p className="text-gray-400 leading-relaxed">
                Curated merchandise inspired by our publications and productions. From art prints
                and posters to apparel and collectibles, bringing African creativity into everyday life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">OUR CATALOG</h2>

          {/* Publications Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {catalogItems.map((item, idx) => (
              <div key={item.title} className="bg-black border-2 border-gray-800 hover:border-[#6B3F1D] transition-all overflow-hidden group shadow-sm">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />

                  <div className="absolute top-4 right-4">
                    <div className={`${item.statusColor} text-white text-xs font-bold uppercase tracking-wider px-3 py-1`}>
                      {item.status}
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <item.icon className="w-6 h-6 text-[#6B3F1D]" />
                    <div className="flex items-center gap-2">
                      <div className="h-0.5 w-8 bg-[#6B3F1D]" />
                      <span className="text-[#6B3F1D] uppercase text-xs font-bold tracking-wider">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#6B3F1D] hover:bg-[#4d2a14] text-white uppercase tracking-wide font-semibold w-full px-4 py-3 flex items-center justify-center gap-2 transition-colors"
                  >
                    <item.icon className="w-4 h-4" />
                    Purchase Now
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* View Merchandise Button */}
          <div className="mt-16 text-center">
            <a
              href="https://afrotods.com/shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#6B3F1D] hover:bg-[#4d2a14] text-white uppercase tracking-wider font-bold text-base transition-all hover:scale-105"
            >
              <ShoppingBag size={24} />
              View Merchandise
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#6B3F1D] to-[#4d2a14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to publish with us?
          </h2>
          <p className="text-xl text-gray-100 mb-12 max-w-2xl mx-auto">
            Whether you're an author, illustrator, or creative, Deo Media Publishing is here to
            help bring your work to readers around the world.
          </p>
          <Link
            to="/contact"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-block"
          >
            <span className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#6B3F1D] uppercase tracking-wider hover:bg-transparent hover:text-white border-2 border-white transition-all font-bold">
              Contact Publishing Team
              <ArrowRight size={20} />
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}