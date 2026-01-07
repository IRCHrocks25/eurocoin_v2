import { ArrowRight } from 'lucide-react';
import coinBackgroundImage from 'figma:asset/37c3a5f593284aef10a6c5c685fb86e5c5816e39.png';
import cardsImage from 'figma:asset/6f906559282818a5e3a520ba5308f83c1326f0d7.png';

export function WhyNowSection() {
  return (
    <section 
      className="relative pb-24 md:pb-40 bg-[#0a0e27] overflow-hidden" 
      style={{ 
        paddingTop: '80px',
        paddingBottom: '200px',
        backgroundImage: `url(${coinBackgroundImage})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Decorative gradient dots */}
      <div 
        className="absolute left-0 bottom-0 w-64 h-64 opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(78, 205, 196, 0.3) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }}
      />

      <div className="relative w-full px-4 md:px-8">
        <div className="w-full mx-auto">
          
          <div className="flex flex-col items-center justify-center mb-4 md:mb-8" style={{ marginTop: '60px' }}>
            {/* Badge */}
            <div className="inline-block px-4" style={{ marginBottom: '48px' }}>
              <span 
                className="px-6 py-2 rounded-full text-white text-xs md:text-sm tracking-wide"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                Regulated Velocity
              </span>
            </div>

            {/* Main Heading */}
            <h2 
              className="text-center text-3xl md:text-5xl lg:text-6xl text-white px-4"
              style={{ 
                fontWeight: '800',
                letterSpacing: '-0.02em',
                marginBottom: '0px',
                marginTop: '-20px'
              }}
            >
              Why Now? The Convergence Moment
            </h2>

            {/* Subheading */}
            <p 
              className="text-center text-white text-base md:text-xl mt-6 px-4"
              style={{ 
                opacity: '0.8',
                fontWeight: '400'
              }}
            >
              Three critical factors make this Eurocoin's moment:
            </p>
          </div>

          <div className="relative flex flex-col items-center justify-center gap-8 md:gap-12" style={{ paddingBottom: '100px', marginTop: '80px' }}>
            
            {/* Cards Image */}
            <div className="w-full max-w-6xl px-4">
              <img 
                src={cardsImage} 
                alt="Why Now - The Convergence Moment" 
                className="w-full h-auto object-contain"
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mt-8 px-4">
              {/* Request Early Access Button - Premium Style */}
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

        </div>
      </div>
    </section>
  );
}