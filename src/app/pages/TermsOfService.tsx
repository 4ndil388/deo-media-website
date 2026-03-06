import { FileText, ArrowUp } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function TermsOfService() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black">
      <Header variant="default" />

      <section className="min-h-screen py-24 bg-black pt-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-red-600" />
              <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
                Terms of Service
              </h1>
            </div>
            <p className="text-gray-400">
              Last Updated:{" "}
              <span className="text-white font-bold">26 February 2026</span>
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-red max-w-none space-y-8">
            {/* Introduction */}
            <div className="bg-gradient-to-br from-gray-900 to-black border-l-4 border-red-600 p-8">
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                Agreement to Terms
              </h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms of Service ("Terms") constitute a legally binding
                agreement between you and Deo Media Limited ("Company," "we,"
                "us," or "our") concerning your access to and use of the{" "}
                <span className="text-white font-semibold">deomedia.co.uk</span>{" "}
                website and our platforms, including Prodculator and Shomytax
                (collectively, the "Services").
              </p>
              <p className="text-gray-300 leading-relaxed mt-4 font-bold text-white">
                BY ACCESSING OR USING OUR SERVICES, YOU AGREE TO BE BOUND BY
                THESE TERMS. IF YOU DO NOT AGREE, DO NOT USE OUR SERVICES.
              </p>
            </div>

            {/* Company Information */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                Company Information
              </h2>
              <div className="bg-black border-2 border-gray-800 p-6">
                <p className="text-gray-300">
                  <strong className="text-white">Company Name:</strong> Deo Media
                  Limited
                </p>
                <p className="text-gray-300">
                  <strong className="text-white">Registered in:</strong> United
                  Kingdom
                </p>
                <p className="text-gray-300">
                  <strong className="text-white">Registered Address:</strong>{" "}
                  Springhead Road, Northfleet, Kent, United Kingdom, DA11 8HN
                </p>
                <p className="text-gray-300">
                  <strong className="text-white">Contact Email:</strong>{" "}
                  terms@deomedia.net
                </p>
              </div>
            </div>

            {/* Eligibility */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                1. Eligibility
              </h2>
              <p className="text-gray-300 leading-relaxed">
                You must be at least 18 years old and capable of forming a
                binding contract to use our Services. By using our Services, you
                represent and warrant that you meet these requirements.
              </p>
            </div>

            {/* User Accounts */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                2. User Accounts
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Certain Services may require account registration. You agree to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized access</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                We reserve the right to suspend or terminate accounts that
                violate these Terms.
              </p>
            </div>

            {/* Permitted Use */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                3. Permitted Use
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                You may use our Services for lawful purposes only. You agree NOT
                to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights of others</li>
                <li>Upload viruses, malware, or harmful code</li>
                <li>Engage in fraudulent, deceptive, or misleading activities</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Scrape, copy, or reproduce our content without permission</li>
                <li>Interfere with or disrupt the operation of our Services</li>
                <li>Use our Services to harass, abuse, or harm others</li>
              </ul>
            </div>

            {/* Platform-Specific Terms */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                4. Platform-Specific Terms
              </h2>

              <h3 className="text-xl font-bold text-red-600 mb-3 uppercase text-sm tracking-wide">
                4.1 Prodculator
              </h3>
              <div className="bg-black border-2 border-gray-800 p-6 mb-6">
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <strong className="text-white">Service Description:</strong>{" "}
                    Prodculator provides production intelligence analysis based
                    on screenplay uploads and user-provided parameters.
                  </li>
                  <li>
                    <strong className="text-white">Estimates Only:</strong> All
                    outputs are estimates and projections. Actual production
                    costs and incentives may vary.
                  </li>
                  <li>
                    <strong className="text-white">No Guarantees:</strong> We do
                    not guarantee accuracy of tax incentive calculations or
                    territory-specific data.
                  </li>
                  <li>
                    <strong className="text-white">Professional Advice:</strong>{" "}
                    Prodculator is not a substitute for professional legal,
                    financial, or production advice.
                  </li>
                  <li>
                    <strong className="text-white">User Content:</strong> You
                    retain ownership of uploaded screenplays. By uploading, you
                    grant us a limited license to process and analyze your
                    content solely for providing the Service.
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-red-600 mb-3 uppercase text-sm tracking-wide">
                4.2 Shomytax
              </h3>
              <div className="bg-black border-2 border-gray-800 p-6">
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <strong className="text-white">Service Description:</strong>{" "}
                    Shomytax provides estimated tax clarity based on bank
                    statement analysis.
                  </li>
                  <li>
                    <strong className="text-white">Estimates Only:</strong> All
                    calculations are estimates. Shomytax does NOT file taxes on
                    your behalf.
                  </li>
                  <li>
                    <strong className="text-white">Not Tax Advice:</strong>{" "}
                    Shomytax is not a substitute for professional tax advice.
                    Consult a qualified tax professional for guidance.
                  </li>
                  <li>
                    <strong className="text-white">Not Affiliated:</strong>{" "}
                    Shomytax is not affiliated with or endorsed by any tax
                    authority or government agency.
                  </li>
                  <li>
                    <strong className="text-white">User Responsibility:</strong>{" "}
                    You are responsible for verifying data accuracy and
                    confirming transaction categorizations.
                  </li>
                  <li>
                    <strong className="text-white">One-Time Payment:</strong>{" "}
                    Reports are purchased on a one-time basis with no
                    subscription or recurring fees.
                  </li>
                  <li>
                    <strong className="text-white">No Refunds:</strong> Once a
                    report is generated and downloaded, payments are
                    non-refundable.
                  </li>
                </ul>
              </div>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                5. Intellectual Property Rights
              </h2>

              <h3 className="text-xl font-bold text-red-600 mb-3 uppercase text-sm tracking-wide">
                5.1 Our Content
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                All content, trademarks, logos, software, and materials on our
                Services are owned by or licensed to Deo Media Limited. This
                includes but is not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-6">
                <li>Website design and layout</li>
                <li>Platform algorithms and calculation methodologies</li>
                <li>Text, graphics, images, and videos</li>
                <li>Prodculator and Shomytax software and functionality</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                You may not reproduce, distribute, modify, or create derivative
                works without our prior written consent.
              </p>

              <h3 className="text-xl font-bold text-red-600 mb-3 mt-6 uppercase text-sm tracking-wide">
                5.2 User Content
              </h3>
              <p className="text-gray-300 leading-relaxed">
                You retain ownership of content you submit (screenplays, bank
                statements, etc.). By submitting content, you grant us a
                non-exclusive, worldwide, royalty-free license to use, process,
                and analyze your content solely for providing our Services.
              </p>
            </div>

            {/* Payment Terms */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                6. Payment Terms
              </h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>
                  <strong className="text-white">Pricing:</strong> Fees for
                  Services are displayed on our platforms and subject to change
                  with notice.
                </li>
                <li>
                  <strong className="text-white">Payment Processing:</strong>{" "}
                  Payments are processed through third-party providers. You
                  agree to their terms.
                </li>
                <li>
                  <strong className="text-white">Taxes:</strong> Prices exclude
                  applicable taxes unless stated otherwise. You are responsible
                  for all taxes.
                </li>
                <li>
                  <strong className="text-white">Refunds:</strong> Refund
                  policies vary by Service and are specified at point of
                  purchase.
                </li>
              </ul>
            </div>

            {/* Disclaimers */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                7. Disclaimers and Warranties
              </h2>
              <div className="bg-gradient-to-br from-yellow-900/20 to-black border-2 border-yellow-600 p-8">
                <p className="text-gray-300 leading-relaxed mb-4 uppercase text-sm font-bold tracking-wide text-yellow-500">
                  IMPORTANT NOTICE
                </p>
                <p className="text-gray-300 leading-relaxed">
                  OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
                  WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
                  LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                  PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  WE DO NOT WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED,
                  ERROR-FREE, SECURE, OR FREE FROM VIRUSES OR OTHER HARMFUL
                  COMPONENTS.
                </p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                8. Limitation of Liability
              </h2>
              <div className="bg-gradient-to-br from-red-900/20 to-black border-2 border-red-600 p-8">
                <p className="text-gray-300 leading-relaxed">
                  TO THE FULLEST EXTENT PERMITTED BY LAW, DEO MEDIA LIMITED SHALL
                  NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                  CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED
                  TO LOSS OF PROFITS, DATA, USE, OR GOODWILL, ARISING FROM:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-4">
                  <li>Your use or inability to use our Services</li>
                  <li>Reliance on estimates or calculations provided</li>
                  <li>Unauthorized access to your data</li>
                  <li>Errors, bugs, or interruptions in our Services</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID TO US
                  IN THE 12 MONTHS PRECEDING THE CLAIM, OR £100, WHICHEVER IS
                  GREATER.
                </p>
              </div>
            </div>

            {/* Indemnification */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                9. Indemnification
              </h2>
              <p className="text-gray-300 leading-relaxed">
                You agree to indemnify, defend, and hold harmless Deo Media
                Limited and its officers, directors, employees, and agents from
                any claims, liabilities, damages, losses, costs, or expenses
                (including legal fees) arising from:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-4">
                <li>Your use of our Services</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Content you submit to our platforms</li>
              </ul>
            </div>

            {/* Termination */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                10. Termination
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We may suspend or terminate your access to our Services at any
                time, with or without cause or notice, including for violations
                of these Terms. Upon termination, your right to use our Services
                ceases immediately. Sections regarding intellectual property,
                disclaimers, liability limitations, and indemnification survive
                termination.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                11. Governing Law and Jurisdiction
              </h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms are governed by the laws of England and Wales. Any
                disputes arising from these Terms or our Services shall be
                subject to the exclusive jurisdiction of the courts of England
                and Wales.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                12. Dispute Resolution
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We encourage you to contact us first to resolve any disputes
                informally. If informal resolution fails, disputes shall be
                resolved through binding arbitration or in courts of competent
                jurisdiction in England and Wales.
              </p>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                13. Changes to These Terms
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes
                will be posted with an updated "Last Updated" date. Continued
                use of our Services after changes constitutes acceptance.
                Material changes will be communicated via email or prominent
                notice on our website.
              </p>
            </div>

            {/* Severability */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                14. Severability
              </h2>
              <p className="text-gray-300 leading-relaxed">
                If any provision of these Terms is held to be invalid or
                unenforceable, the remaining provisions shall remain in full
                force and effect.
              </p>
            </div>

            {/* Entire Agreement */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                15. Entire Agreement
              </h2>
              <p className="text-gray-300 leading-relaxed">
                These Terms, together with our Privacy Policy and Cookie Policy,
                constitute the entire agreement between you and Deo Media
                Limited regarding our Services and supersede all prior
                agreements and understandings.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-red-600/10 to-black border-2 border-red-600 p-8">
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                16. Contact Us
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                For questions about these Terms of Service, please contact:
              </p>
              <div className="text-gray-300 space-y-2">
                <p>
                  <strong className="text-white">Legal Department</strong>
                </p>
                <p>Deo Media Limited</p>
                <p>
                  Springhead Road, Northfleet, Kent, United Kingdom, DA11 8HN
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:terms@deomedia.net"
                    className="text-red-600 hover:text-red-500 font-semibold"
                  >
                    terms@deomedia.net
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Back to Top */}
          <div className="mt-12 text-center">
            <button
              onClick={scrollToTop}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 uppercase text-sm font-bold tracking-wider transition-colors inline-flex items-center gap-2"
            >
              <ArrowUp size={20} />
              Back to Top
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
