import { ArrowRight } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import whyUsBgImage from 'figma:asset/7d2878ebf33fe7240b09a9b5859449df2659760e.png';
import whyUsCardsFullImage from '../assets/Frame 1707482021.png';
import darkBlueBg from 'figma:asset/b3dbefa83a6eaf34e621974ecb8df2e4e597f109.png';
import heroBgImage from 'figma:asset/b4ea384d8eb8e231c5607c87c40b03297346549d.png';
import featureCardsImage from 'figma:asset/5423529f318ab3a74da8abfa2652fadf41541fc8.png';

export function AdvantageOfEurocoin() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative flex items-center overflow-hidden" style={{ backgroundColor: '#000', minHeight: 'clamp(500px, 70vh, 700px)', paddingTop: 'clamp(100px, 12vh, 140px)', paddingBottom: 'clamp(20px, 3vh, 40px) !important' }}>
        {/* Background Image */}
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: `url(${whyUsBgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 w-full" style={{ paddingTop: 'clamp(2rem, 4vw, 3rem)', paddingBottom: 'clamp(1rem, 2vw, 2rem)' }}>
          <div className="max-w-2xl" style={{ marginLeft: 'clamp(60px, 10vw, 100px)', marginTop: 'clamp(2rem, 4vw, 3rem)' }}>
            {/* Main Heading */}
            <h1 
              className="text-white mb-8" 
              style={{ 
                fontFamily: 'ibrand, sans-serif',
                fontSize: 'clamp(48px, 8vw, 72px)', 
                lineHeight: '1.1' 
              }}
            >
              Why Eurocoin?
            </h1>

            {/* Subtitle */}
            <p className="text-white mb-12" style={{ fontSize: 'clamp(18px, 3vw, 24px)', lineHeight: '1.4', opacity: '0.95' }}>
              The Competitive Advantages of Europe's Next-Gen Stablecoin
            </p>

            {/* CTA Button */}
            <button 
              className="group relative flex items-center justify-center gap-4 rounded-full overflow-hidden transition-all duration-500 hover:scale-105 w-full sm:w-auto" 
              style={{ 
                marginTop: '2rem',
                padding: 'clamp(14px, 2.5vw, 20px) clamp(32px, 5vw, 56px)',
                background: 'linear-gradient(135deg, rgba(148, 190, 252, 0.25) 0%, rgba(91, 159, 255, 0.3) 50%, rgba(148, 190, 252, 0.25) 100%)',
                border: '2px solid rgba(148, 190, 252, 0.5)',
                backdropFilter: 'blur(20px)',
                boxShadow: `
                  0 8px 32px rgba(148, 190, 252, 0.3),
                  0 0 0 1px rgba(255, 255, 255, 0.1) inset,
                  0 2px 8px rgba(0, 0, 0, 0.2)
                `,
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
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `
                  0 8px 32px rgba(148, 190, 252, 0.3),
                  0 0 0 1px rgba(255, 255, 255, 0.1) inset,
                  0 2px 8px rgba(0, 0, 0, 0.2)
                `;
                e.currentTarget.style.borderColor = 'rgba(148, 190, 252, 0.5)';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(148, 190, 252, 0.25) 0%, rgba(91, 159, 255, 0.3) 50%, rgba(148, 190, 252, 0.25) 100%)';
              }}
            >
              <span className="relative z-10 text-white font-semibold" style={{ 
                fontFamily: 'ibrand, sans-serif',
                fontSize: 'clamp(14px, 2vw, 18px)',
                letterSpacing: '0.5px',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                marginLeft: '8px'
              }}>Schedule a Demo</span>
              <div className="relative z-10 flex items-center justify-center rounded-full bg-white transition-all duration-300 group-hover:scale-110" style={{ 
                width: '36px', 
                height: '36px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
              }}>
                <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Cards Section - Full Image Display */}
      <section className="relative py-24 overflow-hidden">
        {/* Dark Blue Background */}
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: `url(${darkBlueBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        {/* Full Cards Image */}
        <div className="relative z-10 w-full flex justify-center">
          <img 
            src={whyUsCardsFullImage} 
            alt="Why Us Features" 
            className="h-auto"
            style={{ 
              display: 'block',
              width: 'clamp(60%, 75vw, 85%)',
              maxWidth: '1200px'
            }}
          />
        </div>
      </section>

      {/* CTA Section with Feature Cards Overlay */}
      <section className="relative overflow-hidden pb-32 md:pb-0" style={{ position: 'relative', minHeight: '1200px' }}>
        {/* CTA Background - Same as Home Hero Section */}
        <div className="absolute inset-0" style={{ zIndex: 1 }}>
          <img 
            src={heroBgImage} 
            alt="CTA Background" 
            className="absolute inset-0 w-full h-full"
            style={{ objectFit: 'cover', display: 'block' }}
          />
          {/* Dark overlay for better text readability - Same as Hero Section */}
          <div className="absolute inset-0 bg-black/40" style={{ zIndex: 1 }} />
        </div>

        {/* Header Content - Overlaid on Background */}
        <div className="absolute left-0 right-0 z-20 flex justify-center items-center" style={{ top: 'clamp(60px, 8vh, 100px)' }}>
          <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12 flex flex-col gap-6 items-center text-center" style={{ marginLeft: '100px' }}>
            {/* Gradient Heading */}
            <h2 
              className="max-w-4xl"
              style={{ marginTop: 'clamp(1rem, 2vw, 2rem)' }}
              style={{ 
                fontSize: 'clamp(32px, 6vw, 64px)',
                lineHeight: '1.2',
                fontFamily: 'Inter, sans-serif',
                fontWeight: '700',
                letterSpacing: '-0.02em',
                background: 'linear-gradient(to right, #ffffff 33.946%, #b8d5ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textAlign: 'center',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              Why Eurocoin is Reshaping Europe's Digital Economy
            </h2>

            {/* Subtitle */}
            <p 
              className="max-w-5xl px-4"
              style={{ 
                fontSize: 'clamp(14px, 2vw, 18px)',
                lineHeight: '1.5',
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 'bold',
                color: '#b8d5ff',
                textAlign: 'center',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              Eurocoin isn't just another euro stablecoin—it's Europe's bridge between trusted finance and the digital economy of tomorrow. Built for regulation, speed, and sustainability, Eurocoin delivers the confidence institutions demand and the performance innovators expect.
            </p>
          </div>
        </div>

        {/* CTA Text Above Buttons */}
        <div className="absolute left-0 right-0 z-30 flex justify-center" style={{ bottom: '180px' }}>
          <div className="w-full max-w-5xl mx-auto px-6 md:px-8 lg:px-12 flex flex-col gap-4 items-center text-center">
            <p 
              className="text-white max-w-4xl"
              style={{ 
                fontSize: 'clamp(18px, 2.5vw, 24px)',
                lineHeight: '1.5',
                fontFamily: 'Inter, sans-serif',
                fontWeight: '400',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)'
              }}
            >
              Eurocoin brings together the best of traditional banking and next-generation blockchain, transparent, compliant, and fast enough for the real economy.
            </p>
            <p 
              className="text-white max-w-3xl"
              style={{ 
                fontSize: 'clamp(16px, 2vw, 20px)',
                lineHeight: '1.5',
                fontFamily: 'Inter, sans-serif',
                fontWeight: '400',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)'
              }}
            >
              The next generation of European digital money starts here.
            </p>
          </div>
        </div>

        {/* Feature Cards Image Overlay */}
        <div className="absolute left-0 right-0 w-full flex justify-center items-center hidden md:block" style={{ zIndex: 10, top: 'clamp(420px, 38vh, 450px)', transform: 'translateX(60px)', paddingBottom: '120px' }}>
          <img 
            src={featureCardsImage} 
            alt="Feature Cards" 
            className="h-auto"
            style={{ display: 'block', width: '75%', maxWidth: '1100px', objectFit: 'contain', margin: '0 auto' }}
          />
        </div>
        
        {/* Mobile Feature Cards - No Overlay, Normal Position */}
        <div className="block md:hidden relative w-full px-4 py-8" style={{ zIndex: 10 }}>
          <img 
            src={featureCardsImage} 
            alt="Feature Cards" 
            className="w-full h-auto mx-auto"
            style={{ maxWidth: '75%' }}
          />
        </div>

        {/* Real CTA Buttons - Overlaid at Bottom - REPLACING IMAGE BUTTONS */}
        <div 
          className="absolute left-1/2 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8" 
          style={{ 
            zIndex: 10000, 
            position: 'absolute',
            bottom: 'clamp(100px, 12vh, 120px)',
            pointerEvents: 'auto',
            transform: 'translateX(calc(-50% + 30px))'
          }}
        >
          {/* Download Whitepaper Button - Light Blue to White Gradient */}
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              // Add your whitepaper download link here
              const link = document.createElement('a');
              link.href = '#'; // Replace with actual whitepaper URL
              link.target = '_blank';
              link.click();
            }}
            onMouseDown={(e) => e.stopPropagation()}
            className="group relative flex items-center justify-center gap-3 rounded-full transition-all duration-500 ease-out font-semibold overflow-hidden hover:scale-105 cursor-pointer"
            style={{ 
              zIndex: 10001, 
              position: 'relative', 
              pointerEvents: 'auto',
              userSelect: 'none',
              padding: '14px 28px',
              minWidth: '200px',
              fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
              background: 'linear-gradient(to right, #60A5FA, #93C5FD, #FFFFFF)',
              border: '2px solid rgba(255, 255, 255, 0.8)',
              boxShadow: '0 8px 24px rgba(96, 165, 250, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
            }}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
            
            {/* Content */}
            <span className="relative z-10 text-[#0a0e27] drop-shadow-sm font-bold" style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1rem)' }}>Download Whitepaper</span>
            <div className="relative z-10 flex items-center justify-center rounded-full bg-[#0a0e27] transition-all duration-300 group-hover:scale-110" style={{ 
              width: '32px', 
              height: '32px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
            }}>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </button>

          {/* Integrate with Eurocoin Button - Dark Blue to Purple Gradient */}
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              // Add your integration link here
              const link = document.createElement('a');
              link.href = '#'; // Replace with actual integration URL
              link.target = '_blank';
              link.click();
            }}
            onMouseDown={(e) => e.stopPropagation()}
            className="group relative flex items-center justify-center gap-3 rounded-full transition-all duration-500 ease-out font-semibold overflow-hidden hover:scale-105 cursor-pointer"
            style={{ 
              zIndex: 10001, 
              position: 'relative', 
              pointerEvents: 'auto',
              userSelect: 'none',
              padding: '14px 28px',
              minWidth: '200px',
              fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
              background: 'linear-gradient(to right, #2563EB, #4F46E5, #7C3AED)',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 8px 24px rgba(37, 99, 235, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
            }}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
            
            {/* Content */}
            <span className="relative z-10 text-white drop-shadow-lg font-bold" style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1rem)' }}>Integrate with Eurocoin</span>
            <div className="relative z-10 flex items-center justify-center rounded-full bg-white transition-all duration-300 group-hover:scale-110" style={{ 
              width: '32px', 
              height: '32px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
            }}>
              <ArrowRight className="w-4 h-4 text-[#0a0e27] group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
