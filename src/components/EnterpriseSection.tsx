import { Grid3x3 } from 'lucide-react';
import card1 from 'figma:asset/b4c5f202168432f03ce5d98d050240a06a96d3a5.png';
import card2 from 'figma:asset/76398f7436b7c520c9d39dfb0b227ec4766cd049.png';
import card3 from 'figma:asset/5321a94dedfae4b89d87ab57b1c145242bc7d129.png';
import card4 from 'figma:asset/196aed1552aaab231030af1bfca032bddc3c0891.png';
import card5 from 'figma:asset/d609bce560342bc971e973fcf8f97064b3b610c7.png';
import card6 from 'figma:asset/3b724a5ea68c0dce9a41daee8474e73571bcd4c5.png';

export function EnterpriseSection() {
  const featureCards = [
    { image: card1, alt: '1:1 Euro Peg' },
    { image: card2, alt: '530,000 TPS' },
    { image: card3, alt: 'Instant Minting' },
    { image: card4, alt: 'Zero Custodial Risk' },
    { image: card5, alt: '0.32 mWh/transaction' },
    { image: card6, alt: 'Gas-free Protocol' },
  ];

  return (
    <section 
      className="relative pb-16 md:pb-24 bg-gradient-to-b from-[#0a0e27] via-[#0d1135] to-[#0a0e27] overflow-hidden"
      style={{ 
        paddingTop: 'clamp(1rem, 3vw, 2rem)',
        marginTop: 'clamp(0.25rem, 1vw, 0.75rem)'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative w-full flex flex-col items-center px-4 md:px-6">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-block" style={{ marginRight: 'clamp(1rem, 3vw, 2rem)', marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
            <span 
              className="rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400"
              style={{ 
                fontFamily: 'ibrand, sans-serif',
                fontSize: 'clamp(0.875rem, 2vw, 1.125rem)',
                padding: 'clamp(0.5rem, 1.5vw, 0.75rem) clamp(1rem, 3vw, 1.5rem)',
                display: 'inline-block'
              }}
            >
              Enterprise Performance
            </span>
          </div>
          <div className="w-full flex flex-col items-center">
            <h2 
              className="text-white bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent text-center"
              style={{ 
                fontFamily: 'ibrand, sans-serif',
                marginBottom: 'clamp(0.5rem, 1.5vw, 0.75rem)',
                paddingLeft: '1rem',
                paddingRight: '1rem',
                width: '100%'
              }}
            >
              Built and Audited for Enterprise-Scale Transactions
            </h2>
            <p 
              className="text-white/60 max-w-2xl text-center"
              style={{ 
                fontFamily: 'ibrand, sans-serif',
                marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)',
                fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                lineHeight: '1.6',
                paddingLeft: '1rem',
                paddingRight: '1rem',
                width: '100%'
              }}
            >
              The numbers that matter. Real performance, audited results.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="h-4 md:h-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8 md:mb-16 w-full max-w-7xl" style={{ gap: 'clamp(0.75rem, 2vw, 1.5rem)' }}>
          {featureCards.map((card, index) => (
            <div
              key={index}
              className="group relative w-full"
            >
              <img 
                src={card.image} 
                alt={card.alt}
                className="w-full h-auto rounded-xl md:rounded-2xl transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Bottom Spacer */}
        <div className="h-16 md:h-32"></div>
      </div>
    </section>
  );
}