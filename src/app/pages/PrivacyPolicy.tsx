import { Shield, ArrowUp } from "lucide-react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function PrivacyPolicy() {
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
              <Shield className="w-8 h-8 text-red-600" />
              <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">
                Privacy Policy
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
                Introduction
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Deo Media Limited ("we," "us," or "our") is committed to
                protecting your privacy. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                visit our website{" "}
                <a
                  href="https://deomedia.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold hover:text-red-600 transition-colors"
                >
                  deomedia.net
                </a>{" "}
                and use our platforms, including Prodculator and Shomytax.
              </p>
              <p className="text-gray-300 leading-relaxed mt-4">
                We are registered in the United Kingdom with offices in South
                Africa and Nigeria. We comply with the UK General Data
                Protection Regulation (UK GDPR), the Data Protection Act 2018,
                and applicable data protection laws in territories where we
                operate.
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
                  <strong className="text-white">Registered Address:</strong>{" "}
                  Springhead Road, Northfleet, Kent, United Kingdom, DA11 8HN
                </p>
                <p className="text-gray-300">
                  <strong className="text-white">Contact Email:</strong>{" "}
                  <a
                    href="mailto:privacy@deomedia.net"
                    className="text-gray-300 hover:text-red-600 transition-colors"
                  >
                    privacy@deomedia.net
                  </a>
                </p>
              </div>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                1. Information We Collect
              </h2>

              <h3 className="text-xl font-bold text-red-600 mb-3 uppercase text-sm tracking-wide">
                1.1 Personal Information
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                When you contact us or use our services, we may collect:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Name and contact details (email address, phone number)</li>
                <li>Company or organization name</li>
                <li>Communication preferences</li>
                <li>Information you provide in inquiry forms or correspondence</li>
              </ul>

              <h3 className="text-xl font-bold text-red-600 mb-3 mt-6 uppercase text-sm tracking-wide">
                1.2 Platform-Specific Data
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-white">Prodculator:</strong> When you use
                our production intelligence platform, we may collect screenplay
                files, production parameters, and project-related data you submit
                for analysis.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                <strong className="text-white">Shomytax:</strong> Our tax clarity
                platform processes bank statement data (PDF/CSV) you upload. This
                data is processed locally on your device where possible. We do
                not store raw bank statements on our servers. Only aggregated,
                anonymized calculation results may be retained for service
                improvement.
              </p>

              <h3 className="text-xl font-bold text-red-600 mb-3 mt-6 uppercase text-sm tracking-wide">
                1.3 Technical Information
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Pages visited and time spent on site</li>
                <li>Referring website addresses</li>
                <li>
                  Cookies and similar tracking technologies (see our Cookie
                  Policy)
                </li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use collected information for:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>
                  <strong className="text-white">Service Delivery:</strong>{" "}
                  Providing production analysis, tax calculations, and platform
                  functionality
                </li>
                <li>
                  <strong className="text-white">Communication:</strong>{" "}
                  Responding to inquiries and providing customer support
                </li>
                <li>
                  <strong className="text-white">Platform Improvement:</strong>{" "}
                  Analyzing usage patterns to enhance our services
                </li>
                <li>
                  <strong className="text-white">Legal Compliance:</strong>{" "}
                  Meeting regulatory and legal obligations
                </li>
                <li>
                  <strong className="text-white">Security:</strong> Protecting
                  against fraud, unauthorized access, and security threats
                </li>
                <li>
                  <strong className="text-white">Marketing:</strong> Sending
                  relevant updates with your consent (you may opt out at any
                  time)
                </li>
              </ul>
            </div>

            {/* Legal Basis for Processing */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                3. Legal Basis for Processing (UK GDPR)
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We process your personal data under the following legal bases:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>
                  <strong className="text-white">Consent:</strong> You have given
                  clear consent for specific processing activities
                </li>
                <li>
                  <strong className="text-white">Contract:</strong> Processing is
                  necessary to fulfill our contractual obligations
                </li>
                <li>
                  <strong className="text-white">Legal Obligation:</strong>{" "}
                  Processing is required by law
                </li>
                <li>
                  <strong className="text-white">Legitimate Interests:</strong>{" "}
                  Processing is necessary for our legitimate business interests,
                  provided these do not override your rights
                </li>
              </ul>
            </div>

            {/* Data Sharing and Disclosure */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                4. Data Sharing and Disclosure
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We do not sell or rent your personal information. We may share
                data with:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>
                  <strong className="text-white">Service Providers:</strong>{" "}
                  Third-party vendors who assist with hosting, analytics, and
                  platform operations (under strict confidentiality agreements)
                </li>
                <li>
                  <strong className="text-white">Legal Authorities:</strong> When
                  required by law or to protect our rights and safety
                </li>
                <li>
                  <strong className="text-white">Business Transfers:</strong> In
                  connection with mergers, acquisitions, or asset sales (with
                  notice to you)
                </li>
                <li>
                  <strong className="text-white">Affiliated Entities:</strong>{" "}
                  Our offices in South Africa and Nigeria for operational
                  purposes
                </li>
              </ul>
            </div>

            {/* International Data Transfers */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                5. International Data Transfers
              </h2>
              <p className="text-gray-300 leading-relaxed">
                As we operate in the UK, South Africa, and Nigeria, your data may
                be transferred internationally. We ensure appropriate safeguards
                are in place, including:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mt-4">
                <li>
                  Standard Contractual Clauses (SCCs) approved by the UK
                  Information Commissioner's Office
                </li>
                <li>Adequacy decisions where applicable</li>
                <li>Encryption and secure transmission protocols</li>
              </ul>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                6. Data Retention
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We retain personal data only as long as necessary for the
                purposes outlined in this policy or as required by law. Retention
                periods vary based on data type and legal obligations. Upon
                expiry, data is securely deleted or anonymized.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                7. Your Rights
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Under UK GDPR, you have the following rights:
              </p>
              <div className="bg-black border-2 border-gray-800 p-6 space-y-3">
                <p className="text-gray-300">
                  <strong className="text-white">Right to Access:</strong>{" "}
                  Request copies of your personal data
                </p>
                <p className="text-gray-300">
                  <strong className="text-white">Right to Rectification:</strong>{" "}
                  Request correction of inaccurate data
                </p>
                <p className="text-gray-300">
                  <strong className="text-white">Right to Erasure:</strong>{" "}
                  Request deletion of your data ("right to be forgotten")
                </p>
                <p className="text-gray-300">
                  <strong className="text-white">
                    Right to Restrict Processing:
                  </strong>{" "}
                  Request limitation on how we use your data
                </p>
                <p className="text-gray-300">
                  <strong className="text-white">
                    Right to Data Portability:
                  </strong>{" "}
                  Receive your data in a structured, machine-readable format
                </p>
                <p className="text-gray-300">
                  <strong className="text-white">Right to Object:</strong> Object
                  to processing based on legitimate interests
                </p>
                <p className="text-gray-300">
                  <strong className="text-white">
                    Right to Withdraw Consent:
                  </strong>{" "}
                  Withdraw consent at any time (without affecting prior
                  processing)
                </p>
              </div>
              <p className="text-gray-300 leading-relaxed mt-4">
                To exercise these rights, contact us at{" "}
                <a
                  href="mailto:privacy@deomedia.net"
                  className="text-red-600 hover:text-red-500 font-semibold"
                >
                  privacy@deomedia.net
                </a>
              </p>
            </div>

            {/* Security */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                8. Security Measures
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We implement appropriate technical and organizational measures to
                protect your data against unauthorized access, alteration,
                disclosure, or destruction. This includes encryption, access
                controls, secure servers, and regular security audits. However,
                no internet transmission is completely secure, and we cannot
                guarantee absolute security.
              </p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                9. Children's Privacy
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Our services are not directed to individuals under 18. We do not
                knowingly collect personal information from children. If you
                believe we have collected such information, please contact us
                immediately for deletion.
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                10. Cookies and Tracking
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We use cookies and similar technologies to enhance your
                experience. For detailed information, please see our{" "}
                <span className="text-red-600 font-semibold cursor-pointer hover:text-red-500">
                  Cookie Policy
                </span>
                .
              </p>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                11. Third-Party Links
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Our website may contain links to third-party websites. We are not
                responsible for their privacy practices. We encourage you to
                review their privacy policies before providing any information.
              </p>
            </div>

            {/* Changes to Policy */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                12. Changes to This Policy
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy periodically. Changes will be
                posted on this page with an updated "Last Updated" date.
                Continued use of our services after changes constitutes
                acceptance of the revised policy.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-red-600/10 to-black border-2 border-red-600 p-8">
              <h2 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                13. Contact Us
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                For questions about this Privacy Policy or to exercise your
                rights, please contact:
              </p>
              <div className="text-gray-300 space-y-2">
                <p>
                  <strong className="text-white">Data Protection Officer</strong>
                </p>
                <p>Deo Media Limited</p>
                <p>
                  Springhead Road, Northfleet, Kent, United Kingdom, DA11 8HN
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:privacy@deomedia.net"
                    className="text-red-600 hover:text-red-500 font-semibold"
                  >
                    privacy@deomedia.net
                  </a>
                </p>
              </div>
              <p className="text-gray-300 leading-relaxed mt-6">
                You also have the right to lodge a complaint with the UK
                Information Commissioner's Office (ICO) if you believe your data
                protection rights have been violated:{" "}
                <a
                  href="https://ico.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-500 font-semibold"
                >
                  ico.org.uk
                </a>
              </p>
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
