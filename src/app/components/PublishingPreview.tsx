import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Book, Smartphone, FileText, Tv } from "lucide-react";
import { Link } from "react-router";
import afrotodsBookImage from "../../assets/images/book.jpg";
import afrotodsAppImage from "../../assets/images/afrotods-app.png";
import afrotodsEbookImage from "../../assets/images/ebook.jpg";
import animatedSeriesImage from "../../assets/images/afrotods-animation.jpg";

export function PublishingPreview() {
  const items = [
    {
      title: "THE AFROTODS BOOK",
      category: "Book",
      icon: Book,
      image: afrotodsBookImage,
      description:
        "A children's illustrated book celebrating imagination, culture, and storytelling.",
      status: "Published",
      statusColor: "bg-green-600",
      link: "https://afrotods.com/product/the-afrotods-festival-time/",
      buttonText: "BUY NOW",
    },
    {
      title: "AFROTODS APP",
      category: "App",
      icon: Smartphone,
      image: afrotodsAppImage,
      description:
        "The gaming and animated book experience. Available now on Google Play.",
      status: "Available",
      statusColor: "bg-green-600",
      link: "https://play.google.com/store/apps/details?id=com.afrotods.app",
      buttonText: "DOWNLOAD APP",
    },
    {
      title: "AFROTODS EBOOK",
      category: "eBook",
      icon: FileText,
      image: afrotodsEbookImage,
      description:
        "The digital edition available on Google Play Books for readers worldwide.",
      status: "Available",
      statusColor: "bg-green-600",
      link: "https://play.google.com/store/books/details/Fabian_Adeoye_Lojede_The_Afrotods_Festival_Time?id=QIi5EQAAQBAJ",
      buttonText: "GET EBOOK",
    },
    {
      title: "ANIMATED SERIES",
      category: "Animation",
      icon: Tv,
      image: animatedSeriesImage,
      description:
        "Watch THE AFROTODS animated content and updates on YouTube.",
      status: "Now Streaming",
      statusColor: "bg-red-600",
      link: "https://www.youtube.com/@afrotods",
      buttonText: "WATCH NOW",
    },
  ];

  return (
    <section id="publishing" className="py-24 bg-[#18181b] border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-16 bg-red-600"></div>
            <span className="text-red-600 uppercase text-sm font-bold tracking-wider">
              Publishing & IP
            </span>
            <div className="h-1 w-16 bg-red-600"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
            THE <span className="text-red-600">AFROTODS</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            THE AFROTODS is a Deo Media intellectual property, released as a book,
            live mobile app, and an upcoming animated series.
          </p>
        </div>

        {/* 2x2 Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-black border-2 border-gray-800 hover:border-red-600 transition-all overflow-hidden group shadow-sm"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />

                <div className="absolute top-4 right-4">
                  <div
                    className={`${item.statusColor} text-white text-xs font-bold uppercase tracking-wider px-3 py-1`}
                  >
                    {item.status}
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <item.icon className="w-6 h-6 text-red-600" />
                  <div className="flex items-center gap-2">
                    <div className="h-0.5 w-8 bg-red-600" />
                    <span className="text-red-600 uppercase text-xs font-bold tracking-wider">
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

                {/* ✅ Red button (span inside anchor) */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full"
                >
                  <span className="inline-flex w-full items-center justify-center gap-2 px-4 py-3 bg-red-600 hover:bg-red-700 text-white uppercase tracking-wide font-semibold transition-colors">
                    <item.icon className="w-4 h-4" />
                    {item.buttonText}
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            to="/publishing"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-block"
          >
            <span className="inline-flex items-center justify-center gap-2 px-8 py-6 bg-red-600 hover:bg-red-700 text-white uppercase tracking-wide font-semibold text-base transition-colors">
              SHOW MORE PUBLISHING →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}