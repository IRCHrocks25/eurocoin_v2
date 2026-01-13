import { ArrowRight } from 'lucide-react';
import bgImage from 'figma:asset/366dd05f4863e51d3a2ce9dcd904276fd7c603c1.png';

export function ParadigmShiftSection() {
  const problems = [
    {
      title: 'Compliance',
      description: 'bolted on as an afterthought',
    },
    {
      title: 'Pre-minting',
      description: 'creates liquidity friction and distribution delays',
    },
    {
      title: 'Custodial Risks',
      description: 'accumulate on exchanges',
    },
    {
      title: 'Debt-driven Models',
      description: 'rely on complex market maker networks',
    },
    {
      title: 'Settlement',
      description: 'takes 3-15 minutes (or longer)',
    },
    {
      title: 'High Transaction Fees',
      description: 'kill microtransaction use cases',
    },
  ];

  return (
    <section className="relative pt-16 md:pt-24 pb-16 md:pb-24 mt-8 md:mt-12 bg-[#0a0e27] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={bgImage}
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dotted Pattern Overlay */}
      <div className="absolute bottom-0 left-0 w-64 h-32 opacity-30">
        <div className="grid grid-cols-12 gap-1">
          {Array.from({ length: 96 }).map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 rounded-full bg-blue-500"
              style={{ opacity: Math.random() * 0.5 + 0.2 }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative w-full flex flex-col items-center px-4 md:px-6">
        {/* Spacer to push title down */}
        <div className="h-8 md:h-32"></div>
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20 mt-8 md:mt-32">
          <div className="inline-block mb-4">
            <span 
              className="px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-transparent border border-white/20 text-white text-sm md:text-base"
              style={{ fontFamily: 'ibrand, sans-serif' }}
            >
              The Problem with Legacy Stablecoins
            </span>
          </div>
          <h2 
            className="text-white mb-4 md:mb-6 px-4"
            style={{ fontFamily: 'ibrand, sans-serif' }}
          >
            The Paradigm Shift
          </h2>
          <p 
            className="text-white/70 text-base md:text-lg max-w-2xl mx-auto px-4"
            style={{ fontFamily: 'ibrand, sans-serif' }}
          >
            The current stablecoin infrastructure is fundamentally broken
          </p>
        </div>

        {/* Problems Grid */}
        <div className="h-8 md:h-16"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-16 w-full max-w-6xl">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative w-full"
            >
              {/* Card */}
              <div className="relative h-full p-6 md:p-8 rounded-xl md:rounded-2xl bg-black/40 border border-white/10 hover:border-red-500/30 transition-all duration-300 backdrop-blur-sm">
                {/* Red Icon Grid */}
                <div className="mb-4 md:mb-6">
                  <div className="grid grid-cols-2 gap-1 w-7">
                    <div className="w-3 h-3 rounded-[3px] bg-red-500"></div>
                    <div className="w-3 h-3 rounded-[3px] bg-red-500"></div>
                    <div className="w-3 h-3 rounded-[3px] bg-red-500"></div>
                    <div className="w-3 h-3 rounded-[3px] bg-red-500"></div>
                  </div>
                </div>

                {/* Content */}
                <h3 
                  className="text-white mb-2 md:mb-3"
                  style={{ fontFamily: 'ibrand, sans-serif' }}
                >
                  {problem.title}
                </h3>
                <p 
                  className="text-white/60 text-sm md:text-base leading-relaxed"
                  style={{ fontFamily: 'ibrand, sans-serif' }}
                >
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message and CTAs */}
        <div className="h-8 md:h-12"></div>
        <div className="text-center px-4">
          <p 
            className="text-white/90 text-base md:text-lg mb-1 md:mb-2"
            style={{ fontFamily: 'ibrand, sans-serif' }}
          >
            The market doesn't need another iteration.
          </p>
          <p 
            className="text-white text-lg md:text-xl font-medium"
            style={{ fontFamily: 'ibrand, sans-serif' }}
          >
            It needs a complete rebuild.
          </p>
        </div>

        {/* Spacer between text and buttons */}
        <div className="h-10 md:h-16"></div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full px-4 max-w-4xl mx-auto">
          {/* Request Early Access Button - Premium Style */}
          <button
            onClick={() => {
              window.location.href = '/contact-us';
            }}
            className="group relative flex items-center justify-center gap-3 rounded-full transition-all duration-500 ease-out overflow-hidden hover:scale-105 w-full sm:w-auto cursor-pointer"
            style={{
              fontFamily: 'ibrand, sans-serif',
              fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
              fontWeight: '700',
              padding: '14px 28px',
              minWidth: '200px',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)',
              border: '2px solid rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(20px)',
              boxShadow: `
                0 8px 32px rgba(0, 0, 0, 0.12),
                0 0 0 1px rgba(255, 255, 255, 0.5) inset,
                inset 0 1px 0 rgba(255, 255, 255, 0.9),
                inset 0 -1px 0 rgba(0, 0, 0, 0.05)
              `,
              color: '#000000',
              position: 'relative'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `
                0 12px 48px rgba(0, 0, 0, 0.18),
                0 0 0 2px rgba(255, 255, 255, 0.6) inset,
                inset 0 1px 0 rgba(255, 255, 255, 1),
                inset 0 -1px 0 rgba(0, 0, 0, 0.08),
                0 0 40px rgba(255, 255, 255, 0.3)
              `;
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 1)';
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.95) 100%)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = `
                0 8px 32px rgba(0, 0, 0, 0.12),
                0 0 0 1px rgba(255, 255, 255, 0.5) inset,
                inset 0 1px 0 rgba(255, 255, 255, 0.9),
                inset 0 -1px 0 rgba(0, 0, 0, 0.05)
              `;
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.8)';
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 ease-in-out"></span>
            <span className="relative z-10 flex items-center gap-3" style={{ letterSpacing: '0.02em', color: '#000000', fontWeight: '700' }}>
              Request Early Access
              <div className="relative z-10 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-900 to-black transition-all duration-300 group-hover:scale-110" style={{
                width: '32px',
                height: '32px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(0, 0, 0, 0.3)',
                border: '1.5px solid rgba(255, 255, 255, 0.1)'
              }}>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" style={{ strokeWidth: '2.8', stroke: 'white', fill: 'none' }} />
              </div>
            </span>
          </button>

          {/* Schedule a Demo Button - Premium Style */}
          <button
            onClick={() => {
              window.location.href = '/contact-us';
            }}
            className="group relative flex items-center justify-center gap-3 rounded-full transition-all duration-500 ease-out overflow-hidden hover:scale-105 w-full sm:w-auto cursor-pointer"
            style={{
              fontFamily: 'ibrand, sans-serif',
              fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
              fontWeight: '700',
              padding: '14px 28px',
              minWidth: '200px',
              background: 'linear-gradient(135deg, rgba(148, 190, 252, 0.25) 0%, rgba(91, 159, 255, 0.3) 50%, rgba(148, 190, 252, 0.25) 100%)',
              border: '2px solid rgba(148, 190, 252, 0.5)',
              backdropFilter: 'blur(20px)',
              boxShadow: `
                0 8px 32px rgba(148, 190, 252, 0.3),
                0 0 0 1px rgba(255, 255, 255, 0.1) inset,
                0 2px 8px rgba(0, 0, 0, 0.2)
              `,
              color: '#FFFFFF',
              position: 'relative'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `
                0 12px 48px rgba(148, 190, 252, 0.5),
                0 0 0 2px rgba(255, 255, 255, 0.2) inset,
                0 4px 16px rgba(0, 0, 0, 0.3),
                0 0 60px rgba(148, 190, 252, 0.4)
              `;
              e.currentTarget.style.borderColor = 'rgba(148, 190, 252, 0.8)';
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(148, 190, 252, 0.35) 0%, rgba(91, 159, 255, 0.4) 50%, rgba(148, 190, 252, 0.35) 100%)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = `
                0 8px 32px rgba(148, 190, 252, 0.3),
                0 0 0 1px rgba(255, 255, 255, 0.1) inset,
                0 2px 8px rgba(0, 0, 0, 0.2)
              `;
              e.currentTarget.style.borderColor = 'rgba(148, 190, 252, 0.5)';
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(148, 190, 252, 0.25) 0%, rgba(91, 159, 255, 0.3) 50%, rgba(148, 190, 252, 0.25) 100%)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000"></span>
            <span className="relative z-10 flex items-center gap-3 text-white font-medium" style={{ fontFamily: 'ibrand, sans-serif', letterSpacing: '0.02em', textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
              Schedule a Demo
              <div className="relative z-10 flex items-center justify-center rounded-full bg-gradient-to-br from-white to-gray-100 transition-all duration-300 group-hover:scale-110" style={{
                width: '32px',
                height: '32px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.9), inset 0 -1px 0 rgba(0, 0, 0, 0.1)',
                border: '1.5px solid rgba(0, 0, 0, 0.1)'
              }}>
                <ArrowRight className="w-4 h-4 text-[#0a0e27] group-hover:translate-x-1 transition-transform duration-300" style={{ strokeWidth: '2.8', stroke: '#0a0e27', fill: 'none' }} />
              </div>
            </span>
          </button>
        </div>

        {/* Bottom Spacer */}
        <div className="h-16 md:h-32"></div>
      </div>
    </section>
  );
}