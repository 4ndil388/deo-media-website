export function About() {
  return (
    <section id="about" className="py-24 bg-[#18181b] border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          {/* Label with lines */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-0.5 bg-red-600"></div>
            <span className="text-red-600 font-bold text-sm uppercase tracking-widest">
              ABOUT US
            </span>
            <div className="w-16 h-0.5 bg-red-600"></div>
          </div>

          {/* Main Heading */}
          <h2 className="text-6xl md:text-7xl font-bold mb-12 leading-tight">
            <span className="text-white">WHO WE </span>
            <span className="text-red-600">ARE</span>
          </h2>

          {/* Description */}
          <div className="text-gray-400 text-lg leading-relaxed max-w-4xl mx-auto space-y-6">
            <p>
              Deo Media is a UK-headquartered creative media and technology company operating at the intersection of content creation, distribution, publishing, and digital innovation.
            </p>
            <p>
              We develop and own intellectual property across multiple platforms, producing original content while building the technology infrastructure to distribute it globally. Our integrated approach combines production capabilities, distribution networks, publishing ventures, and proprietary creative tech solutions.
            </p>
            <p>
              We connect creative ideas with global audiences through strategic partnerships and innovative digital platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}