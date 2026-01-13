import { ArrowRight } from 'lucide-react';
import bgImage from 'figma:asset/b4ea384d8eb8e231c5607c87c40b03297346549d.png';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background with uploaded image */}
      <div className="absolute inset-0">
        <img 
          src={bgImage} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center">
        {/* Subtitle */}
        <div className="mb-6 md:mb-8">
          <span 
            className="text-cyan-400 tracking-wider uppercase text-sm md:text-base font-medium"
            style={{ fontFamily: 'ibrand, sans-serif' }}
          >
            EUROCOIN (EURDT)
          </span>
        </div>

        {/* Main Heading */}
        <h1 
          style={{ 
            fontFamily: 'ibrand, sans-serif',
            marginBottom: '2rem',
            fontWeight: '900',
            letterSpacing: '-0.02em'
          }}
          className="bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent px-4 md:px-0"
        >
          The Next-Gen Euro Stablecoin
        </h1>

        {/* Subheading */}
        <p 
          style={{ 
            fontFamily: 'ibrand, sans-serif',
            marginBottom: '1rem' 
          }}
          className="text-xl md:text-2xl text-white/95 font-medium px-4 md:px-0"
        >
          A new era in digital finance starts here.
        </p>

        {/* Description */}
        <p 
          style={{ 
            fontFamily: 'ibrand, sans-serif',
            marginBottom: '4rem' 
          }}
          className="text-white/80 max-w-3xl mx-auto leading-relaxed text-base md:text-lg px-4 md:px-0"
        >
          Eurocoin is the world's first fully MiCA-compliant, euro-backed stablecoin engineered for real-time settlement, gas-free payments, and true institutional trust.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 px-4 md:px-0">
          {/* Early Access Button - Premium Style */}
          <button 
            onClick={() => {
              window.location.href = '/contact-us';
            }}
            className="group relative flex items-center justify-center gap-4 rounded-full transition-all duration-500 ease-out overflow-hidden hover:scale-105 w-full sm:w-auto cursor-pointer"
            style={{
              fontFamily: 'ibrand, sans-serif',
              fontSize: 'clamp(1rem, 1.3vw, 1.125rem)',
              fontWeight: '700',
              padding: '18px 36px',
              minWidth: '240px',
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
              Early Access Only
              <div className="relative z-10 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-900 to-black transition-all duration-300 group-hover:scale-110" style={{
                width: '38px',
                height: '38px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(0, 0, 0, 0.3)',
                border: '1.5px solid rgba(255, 255, 255, 0.1)'
              }}>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" style={{ strokeWidth: '2.8', stroke: 'white', fill: 'none' }} />
              </div>
            </span>
          </button>

          {/* Schedule Demo Button - Premium Style */}
          <button 
            onClick={() => {
              window.location.href = '/contact-us';
            }}
            className="group relative flex items-center justify-center gap-4 rounded-full transition-all duration-500 ease-out overflow-hidden hover:scale-105 w-full sm:w-auto cursor-pointer"
            style={{
              fontFamily: 'ibrand, sans-serif',
              fontSize: 'clamp(1rem, 1.3vw, 1.125rem)',
              fontWeight: '700',
              padding: '18px 36px',
              minWidth: '240px',
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
                width: '38px',
                height: '38px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.9), inset 0 -1px 0 rgba(0, 0, 0, 0.1)',
                border: '1.5px solid rgba(0, 0, 0, 0.1)'
              }}>
                <ArrowRight className="w-5 h-5 text-[#0a0e27] group-hover:translate-x-1 transition-transform duration-300" style={{ strokeWidth: '2.8', stroke: '#0a0e27', fill: 'none' }} />
              </div>
            </span>
          </button>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0e27] to-transparent" />
    </section>
  );
}