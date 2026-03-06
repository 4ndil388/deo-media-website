import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/ui/button";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");
    setStatusMessage("");

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setStatusMessage("Thanks! Your message has been sent. We'll reply soon.");
        form.reset();
      } else {
        setStatus("error");
        setStatusMessage(
          data.message || "Something went wrong. Please try again."
        );
      }
    } catch (err) {
      setStatus("error");
      setStatusMessage("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header variant="default" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-black via-[#DC2626]/10 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-16 bg-[#DC2626]"></div>
            <span className="text-[#DC2626] uppercase text-sm font-bold tracking-wider">Get In Touch</span>
            <div className="h-1 w-16 bg-[#DC2626]"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            CONTACT <span className="text-[#DC2626]">US</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Ready to work with us? Get in touch with our team to discuss production, distribution, publishing, or technology partnerships.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-zinc-900 to-black border-2 border-zinc-800 p-10">
              <h3 className="text-2xl font-bold mb-8 uppercase tracking-wide">Send Us A Message</h3>
              
              {/* Status Banner */}
              {status !== "idle" && (
                <div
                  className={`mb-6 border-2 p-4 ${
                    status === "success"
                      ? "border-green-600 bg-green-900/20 text-green-200"
                      : "border-red-600 bg-red-900/20 text-red-200"
                  }`}
                >
                  {statusMessage}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Web3Forms Required */}
                <input
                  type="hidden"
                  name="access_key"
                  value="YOUR_NEW_ACCESS_KEY_HERE"
                />
                <input
                  type="hidden"
                  name="subject"
                  value="New Contact Form Submission - Deo Media"
                />
                <input type="hidden" name="from_name" value="Deo Media Website" />

                {/* Honeypot (spam protection) */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-black border-2 border-zinc-800 focus:border-[#DC2626] text-white px-4 py-3 outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-black border-2 border-zinc-800 focus:border-[#DC2626] text-white px-4 py-3 outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full bg-black border-2 border-zinc-800 focus:border-[#DC2626] text-white px-4 py-3 outline-none transition-colors"
                    placeholder="Company name (optional)"
                  />
                </div>

                {/* Inquiry Type */}
                <div>
                  <label htmlFor="inquiry" className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiry"
                    name="inquiry"
                    required
                    className="w-full bg-black border-2 border-zinc-800 focus:border-[#DC2626] text-white px-4 py-3 outline-none transition-colors"
                    defaultValue=""
                  >
                    <option value="" disabled>Select inquiry type</option>
                    <option value="production">Production Services</option>
                    <option value="distribution">Distribution Partnership</option>
                    <option value="publishing">Publishing & IP</option>
                    <option value="tech">Creative Tech / Platforms</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full bg-black border-2 border-zinc-800 focus:border-[#DC2626] text-white px-4 py-3 outline-none transition-colors resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white uppercase tracking-wide font-bold py-6 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send className="mr-2 h-5 w-5" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-gradient-to-br from-zinc-900 to-black border-2 border-zinc-800 p-10">
                <h3 className="text-2xl font-bold mb-8 uppercase tracking-wide">Contact Information</h3>
                
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#DC2626] rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Email</h4>
                      <a href="mailto:info@deomedia.co.uk" className="text-white hover:text-[#DC2626] transition-colors text-lg">
                        info@deomedia.co.uk
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#DC2626] rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Phone</h4>
                      <a href="tel:+44XXXXXXXXXX" className="text-white hover:text-[#DC2626] transition-colors text-lg">
                        +44 (0) XXX XXX XXXX
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#DC2626] rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">UK Headquarters</h4>
                      <p className="text-white text-lg leading-relaxed">
                        Springhead Road<br />
                        Northfleet, Kent<br />
                        United Kingdom, DA11 8HN
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Locations */}
              <div className="bg-gradient-to-br from-zinc-900 to-black border-2 border-zinc-800 p-10">
                <h3 className="text-2xl font-bold mb-8 uppercase tracking-wide">Office Locations</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">🇬🇧</span>
                      <h4 className="text-white font-bold uppercase text-sm tracking-wider">United Kingdom</h4>
                    </div>
                    <p className="text-gray-400 text-sm ml-8">Headquarters</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">🇿🇦</span>
                      <h4 className="text-white font-bold uppercase text-sm tracking-wider">South Africa</h4>
                    </div>
                    <p className="text-gray-400 text-sm ml-8">Johannesburg Office</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">🇳🇬</span>
                      <h4 className="text-white font-bold uppercase text-sm tracking-wider">Nigeria</h4>
                    </div>
                    <p className="text-gray-400 text-sm ml-8">Lagos Office</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-zinc-900 to-black border-2 border-zinc-800 p-10">
                <h3 className="text-2xl font-bold mb-6 uppercase tracking-wide">Business Hours</h3>
                <p className="text-gray-400">
                  <span className="text-white font-bold">Monday - Friday:</span> 9:00 AM - 6:00 PM GMT<br />
                  <span className="text-white font-bold">Saturday - Sunday:</span> Closed
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  We aim to respond to all inquiries within 24-48 business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}