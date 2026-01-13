import { Lightbulb, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import backgroundImage from 'figma:asset/ae97827e1ca44e54515fd94859b25a1916f2ecb4.png';
import cardsImage from 'figma:asset/f26e5bf123022cc757ac78bb03891c63f6cad9fa.png';

export function BondPlaySection() {
  return (
    <section 
      className="relative py-16 md:py-24 pt-16 md:pt-24 bg-[#0a0e27] overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="relative w-full px-4 md:px-8">
        <div className="w-full mx-auto">
          
          <div className="flex flex-col items-center justify-center mb-12 md:mb-20" style={{ paddingTop: '32px' }}>
            {/* Badge */}
            <div className="inline-block px-4" style={{ marginBottom: '48px' }}>
              <span 
                className="px-6 md:px-8 py-3 rounded-full text-white text-xs md:text-sm tracking-wider uppercase text-center block"
                style={{
                  fontFamily: 'ibrand, sans-serif',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
                }}
              >
                The Investment Edge: Eurocoin's Business Model
              </span>
            </div>

            {/* Main Heading */}
            <h2 
              className="text-center text-3xl md:text-5xl lg:text-7xl relative text-white px-4"
              style={{ 
                fontFamily: 'ibrand, sans-serif',
                fontWeight: '800', 
                letterSpacing: '-0.03em',
                marginBottom: '40px'
              }}
            >
              The Bond Play: Profitable, Sustainable, Proven
            </h2>

            {/* Subtitle */}
            <p 
              className="text-center text-xl md:text-2xl lg:text-3xl xl:text-4xl px-4"
              style={{ 
                fontFamily: 'ibrand, sans-serif',
                fontWeight: '600', 
                letterSpacing: '-0.01em', 
                marginBottom: '36px', 
                color: '#B8D5FF' 
              }}
            >
              Proprietary DLT Built for Regulated Finance
            </p>

            {/* Description */}
            <p className="text-center text-white/90 max-w-4xl mx-auto text-base md:text-lg lg:text-xl leading-relaxed px-4" style={{ marginTop: '-20px', marginBottom: '80px' }}>
              As a regulated financial institution, Eurocoin generates profit from the interest rates obtained from clients' cash deposits. 
              Since client funds are legally segregated, the interest rate income accrues to the company.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-8 md:gap-12 px-4" style={{ paddingBottom: '100px' }}>
            {/* Cards Image */}
            <div className="w-full max-w-6xl mx-auto">
              <img 
                src={cardsImage} 
                alt="What This Means and The Market Opportunity" 
                className="w-full h-auto"
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-8 w-full">
              {/* Request Early Access Button - Premium Style */}
              <button
                onClick={() => {
                  window.location.href = '/contact-us';
                }}
                className="group relative flex items-center justify-center gap-4 rounded-full transition-all duration-500 ease-out overflow-hidden hover:scale-105 w-full sm:w-auto"
                style={{
                  fontFamily: 'ibrand, sans-serif',
                  fontSize: 'clamp(1rem, 1.3vw, 1.125rem)',
                  fontWeight: '700',
                  padding: '18px 36px',
                  cursor: 'pointer',
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
                  Request Early Access
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

              {/* Schedule a Demo Button - Premium Style */}
              <button
                onClick={() => {
                  window.location.href = '/contact-us';
                }}
                className="group relative flex items-center justify-center gap-4 rounded-full transition-all duration-500 ease-out overflow-hidden hover:scale-105 w-full sm:w-auto"
                style={{
                  fontFamily: 'ibrand, sans-serif',
                  fontSize: 'clamp(1rem, 1.3vw, 1.125rem)',
                  fontWeight: '700',
                  padding: '18px 36px',
                  cursor: 'pointer',
                  minWidth: '240px',
                  background: 'linear-gradient(135deg, rgba(91, 159, 255, 0.9) 0%, rgba(74, 143, 232, 0.95) 100%)',
                  border: '2px solid rgba(91, 159, 255, 0.8)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: `
                    0 8px 32px rgba(91, 159, 255, 0.4),
                    0 0 0 1px rgba(255, 255, 255, 0.2) inset,
                    inset 0 1px 0 rgba(255, 255, 255, 0.3),
                    inset 0 -1px 0 rgba(0, 0, 0, 0.2),
                    0 0 30px rgba(91, 159, 255, 0.3)
                  `,
                  color: '#FFFFFF',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `
                    0 12px 48px rgba(91, 159, 255, 0.6),
                    0 0 0 2px rgba(255, 255, 255, 0.3) inset,
                    inset 0 1px 0 rgba(255, 255, 255, 0.4),
                    inset 0 -1px 0 rgba(0, 0, 0, 0.15),
                    0 0 50px rgba(91, 159, 255, 0.5)
                  `;
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(107, 175, 255, 0.95) 0%, rgba(90, 159, 248, 1) 100%)';
                  e.currentTarget.style.borderColor = 'rgba(91, 159, 255, 1)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `
                    0 8px 32px rgba(91, 159, 255, 0.4),
                    0 0 0 1px rgba(255, 255, 255, 0.2) inset,
                    inset 0 1px 0 rgba(255, 255, 255, 0.3),
                    inset 0 -1px 0 rgba(0, 0, 0, 0.2),
                    0 0 30px rgba(91, 159, 255, 0.3)
                  `;
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(91, 159, 255, 0.9) 0%, rgba(74, 143, 232, 0.95) 100%)';
                  e.currentTarget.style.borderColor = 'rgba(91, 159, 255, 0.8)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 ease-in-out"></span>
                <span className="relative z-10 flex items-center gap-3" style={{ letterSpacing: '0.02em', color: '#FFFFFF', fontWeight: '700', textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)' }}>
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

        </div>
      </div>
    </section>
  );
}