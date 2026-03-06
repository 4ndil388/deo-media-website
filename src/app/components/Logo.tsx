import { Link } from "react-router";
import logoImage from "../../assets/images/deo-logo.png";

interface LogoProps {
  variant?: "default" | "production" | "distribution" | "publishing" | "tech";
}

export function Logo({ variant = "default" }: LogoProps) {
  const getVariantText = () => {
    switch (variant) {
      case "production":
        return <span className="text-sm ml-2 text-[#0A3D91]"></span>;
      case "distribution":
        return <span className="text-sm ml-2 text-[#DC2626]"></span>;
      case "publishing":
        return <span className="text-sm ml-2 text-[#6B3F1D]"></span>;
      case "tech":
        return <span className="text-sm ml-2 text-[#0A8F5A]"></span>;
      default:
        return null;
    }
  };

  return (
    <Link to="/" className="flex items-center text-white hover:opacity-80 transition-opacity">
      <img 
        src={logoImage} 
        alt="Deo Media" 
        className="h-22 w-auto"
      />
      {getVariantText()}
    </Link>
  );
}