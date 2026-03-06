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

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setStatusMessage(
          "Thanks! Your message has been sent. We'll reply soon."
        );
        form.reset();
      } else {
        setStatus("error");
        setStatusMessage(data.message || "Something went wrong.");
      }
    } catch (error) {
      setStatus("error");
      setStatusMessage("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header variant="default" />

      {/* HERO */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-black via-[#DC2626]/10 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            CONTACT <span className="text-[#DC2626]">US</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Ready to work with us? Get in touch with our team to discuss
            production, distribution, publishing, or technology partnerships.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* CONTACT FORM */}
            <div className="bg-gradient-to-br from-zinc-900 to-black border-2 border-zinc-800 p-10">
              <h3 className="text-2xl font-bold mb-8 uppercase tracking-wide">
                Send Us A Message
              </h3>

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
                {/* REQUIRED WEB3FORMS FIELDS */}
                <input
                  type="hidden"
                  name="access_key"
                  value="3f23bdbb-41ac-42f4-b152-832d3a6ae12e"
                />

                <input
                  type="hidden"
                  name="subject"
                  value="New Contact Form Submission - Deo Media"
                />

                <input
                  type="hidden"
                  name="from_name"
                  value="Deo Media Website"
                />

                {/* Honeypot spam protection */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                />

                {/* NAME */}
                <div>
                  <label className="block text-sm font-bold text-gray-400 uppercase mb-2">
                    Full Name *
                  </label>

                  <input
                    name="name"
                    required
                    className="w-full bg-black border-2 border-zinc-800 focus:border-[#DC2626] text-white px-4 py-3"
                    placeholder="Your name"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block text-sm font-bold text-gray-400 uppercase mb-2">
                    Email Address *
                  </label>

                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full bg-black border-2 border-zinc-800 focus:border-[#DC2626] text-white px-4 py-3"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* COMPANY */}
                <div>
                  <label className="block text-sm font-bold text-gray-400 uppercase mb-2">
                    Company / Organization
                  </label>

                  <input
                    name="company"
                    className="w-full bg-black border-2 border-zinc-800 focus:border-[#DC2626] text-white px-4 py-3"
                    placeholder="Company name (optional)"
                  />
                </div>

                {/* INQUIRY */}
                <div>
                  <label className="block text-sm font-bold text-gray-400 uppercase mb-2">
                    Inquiry Type *
                  </label>

                  <select
                    name="inquiry"
                    required
                    defaultValue=""
                    className="w-full bg-black border-2 border-zinc-800 focus:border-[#DC2626] text-white px-4 py-3"
                  >
                    <option value="" disabled>
                      Select inquiry type
                    </option>

                    <option value="production">Production Services</option>
                    <option value="distribution">Distribution Partnership</option>
                    <option value="publishing">Publishing &amp; IP</option>
                    <option value="tech">Creative Tech</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block text-sm font-bold text-gray-400 uppercase mb-2">
                    Message *
                  </label>

                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="w-full bg-black border-2 border-zinc-800 focus:border-[#DC2626] text-white px-4 py-3 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#DC2626] hover:bg-[#B91C1C] text-white uppercase font-bold py-6"
                >
                  <Send className="mr-2 h-5 w-5" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-8">
              {/* CONTACT INFO */}
              <div className="bg-gradient-to-br from-zinc-900 to-black border-2 border-zinc-800 p-10 space-y-6">
                <h3 className="text-2xl font-bold mb-8 uppercase">
                  Contact Information
                </h3>

                <div className="flex items-start gap-4">
                  <Mail className="text-[#DC2626]" />
                  <a href="mailto:info@deomedia.net">
                    info@deomedia.net
                  </a>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-[#DC2626]" />
                  <a href="tel:+4422120022012">
                    +44 (0) 221 2002 2012
                  </a>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="text-[#DC2626]" />
                  <p>
                    Springhead Road
                    <br />
                    Northfleet, Kent
                    <br />
                    United Kingdom, DA11 8HN
                  </p>
                </div>
              </div>

              {/* Office Locations */}
              <div className="bg-gradient-to-br from-zinc-900 to-black border-2 border-zinc-800 p-10">
                <h3 className="text-2xl font-bold mb-8 uppercase tracking-wide">
                  Office Locations
                </h3>

                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">🇬🇧</span>
                      <h4 className="text-white font-bold uppercase text-sm tracking-wider">
                        United Kingdom
                      </h4>
                    </div>
                    <p className="text-gray-400 text-sm ml-8">Headquarters</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">🇿🇦</span>
                      <h4 className="text-white font-bold uppercase text-sm tracking-wider">
                        South Africa
                      </h4>
                    </div>
                    <p className="text-gray-400 text-sm ml-8">
                      Johannesburg Office
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">🇳🇬</span>
                      <h4 className="text-white font-bold uppercase text-sm tracking-wider">
                        Nigeria
                      </h4>
                    </div>
                    <p className="text-gray-400 text-sm ml-8">Lagos Office</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-zinc-900 to-black border-2 border-zinc-800 p-10">
                <h3 className="text-2xl font-bold mb-6 uppercase tracking-wide">
                  Business Hours
                </h3>
                <p className="text-gray-400">
                  <span className="text-white font-bold">
                    Monday - Friday:
                  </span>{" "}
                  9:00 AM - 6:00 PM GMT
                  <br />
                  <span className="text-white font-bold">
                    Saturday - Sunday:
                  </span>{" "}
                  Closed
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  We aim to respond to all inquiries within 24-48 business
                  hours.
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