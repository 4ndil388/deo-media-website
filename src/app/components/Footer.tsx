import { MapPin, Linkedin, Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { Link, useNavigate } from "react-router";
import logoImage from "../../assets/images/deo-logo.png";

export function Footer() {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    scrollToTop();
  };

  return (
    <footer className="bg-black border-t border-white/10">
      {/* TOP AREA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* BRAND */}
          <div className="lg:col-span-4">
            <img src={logoImage} alt="Deo Media" className="h-20 w-auto mb-6" />
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              A UK-headquartered creative media and technology company.
              Production, distribution, publishing, and digital platforms —
              connecting creative ideas with global audiences.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">
              QUICK LINKS
            </h4>

            <ul className="space-y-3">
              {[
                { label: "Tech", path: "/tech" },
                { label: "Production", path: "/production" },
                { label: "Publishing", path: "/publishing" },
                { label: "Distribution", path: "/distribution" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className="text-gray-400 hover:text-red-600 transition-colors uppercase text-sm tracking-wide flex items-center gap-2 group"
                  >
                    <div className="w-0 h-0.5 bg-red-600 group-hover:w-4 transition-all" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* BRANDS */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">
              BRANDS
            </h4>

            <ul className="space-y-3">
              <li>
                <a
                  href="https://prodculator.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-600 transition-colors text-sm tracking-wide flex items-center gap-2 group"
                >
                  <div className="w-0 h-0.5 bg-red-600 group-hover:w-4 transition-all" />
                  Prodculator
                </a>
              </li>

              <li>
                <a
                  href="https://afrotods.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-600 transition-colors text-sm tracking-wide flex items-center gap-2 group"
                >
                  <div className="w-0 h-0.5 bg-red-600 group-hover:w-4 transition-all" />
                  Afrotods
                </a>
              </li>

              <li>
                <button
                  onClick={() => handleNavigation("/tech")}
                  className="text-gray-400 hover:text-red-600 transition-colors text-sm tracking-wide flex items-center gap-2 group"
                >
                  <div className="w-0 h-0.5 bg-red-600 group-hover:w-4 transition-all" />
                  Shomytax (Coming soon)
                </button>
              </li>
            </ul>
          </div>

          {/* GET IN TOUCH */}
          <div className="lg:col-span-2">
            <h4 className="text-gray-500 font-bold uppercase tracking-wider text-xs mb-6">
              GET IN TOUCH
            </h4>

            <div className="space-y-4">
              <div>
                <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                  General
                </div>
                <a
                  href="mailto:info@deomedia.net"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  info@deomedia.net
                </a>
              </div>

              <div>
                <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                  Production
                </div>
                <a
                  href="mailto:info@deomedia.net"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  info@deomedia.net
                </a>
              </div>

              <div>
                <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">
                  Prodculator Partners
                </div>
                <a
                  href="mailto:partners@prodculator.com"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  partners@prodculator.com
                </a>
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-2 mt-6">
              {[
                {
                  href: "https://www.linkedin.com/company/deo-media-production/",
                  Icon: Linkedin,
                  label: "LinkedIn",
                },
                {
                  href: "https://www.instagram.com/deomedia_holdings/",
                  Icon: Instagram,
                  label: "Instagram",
                },
                {
                  href: "https://www.facebook.com/DEO-MEDIA-Holdings-102175172362809",
                  Icon: Facebook,
                  label: "Facebook",
                },
                {
                  href: "https://twitter.com/DeoManager",
                  Icon: Twitter,
                  label: "Twitter",
                },
                {
                  href: "https://www.youtube.com/@afrotods",
                  Icon: Youtube,
                  label: "YouTube",
                },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group w-9 h-9 border border-gray-800 hover:border-gray-500 transition-colors flex items-center justify-center"
                >
                  <Icon className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* OFFICE SECTION */}
        <div className="mt-16">
          <h3 className="text-white font-bold uppercase tracking-wider text-xl mb-10">
            OFFICE
          </h3>

          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-red-600" />
                <h4 className="text-white font-extrabold uppercase tracking-wide text-xl">
                  HEADQUARTERS
                </h4>
              </div>
              <p className="text-gray-500 leading-relaxed">
                Springhead Road
                <br />
                Northfleet, Kent
                <br />
                United Kingdom, DA11 8HN
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-red-600" />
                <h4 className="text-white font-extrabold uppercase tracking-wide text-xl">
                  JOHANNESBURG
                </h4>
              </div>
              <p className="text-gray-500 leading-relaxed">
                1st Floor Eagle Canyon Office Park
                <br />
                Cnr. Dolfyn & Christian De Wet St.
                <br />
                Randpark Ridge
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-red-600" />
                <h4 className="text-white font-extrabold uppercase tracking-wide text-xl">
                  LAGOS
                </h4>
              </div>
              <p className="text-gray-500 leading-relaxed">
                Olabode House
                <br />
                217/219 Ikorodu Road
                <br />
                Ilupeju
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM RED BAR */}
      <div className="bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white font-bold tracking-wide text-sm">
            © {currentYear} DEO MEDIA. ALL RIGHTS RESERVED.
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            <Link to="/privacy-policy" className="text-white font-bold uppercase tracking-wide text-sm hover:underline">
              PRIVACY POLICY
            </Link>
            <Link to="/terms-of-service" className="text-white font-bold uppercase tracking-wide text-sm hover:underline">
              TERMS OF SERVICE
            </Link>
            <button className="text-white font-bold uppercase tracking-wide text-sm hover:underline">
              COOKIE POLICY
            </button>
            <button className="text-white font-bold uppercase tracking-wide text-sm hover:underline">
              DISCLAIMER
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}