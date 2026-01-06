import { ArrowRight } from 'lucide-react';
import ctaBg from 'figma:asset/af3c6efc6ea179431e93dd83377ab1f5e7f65967.png';

export function FAQClosingCTA() {
  return (
    <div 
      className="w-full relative"
      style={{
        backgroundImage: `url(${ctaBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '100px',
        paddingBottom: '100px'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto" style={{ marginLeft: '55%', transform: 'translateX(-50%)' }}>
          {/* Main Heading */}
          <h2 
            className="text-white mb-6"
            style={{ 
              fontFamily: 'ibrand',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              lineHeight: '1.2',
              whiteSpace: 'nowrap'
            }}
          >
            Eurocoin isn't just a stablecoin.
          </h2>
          
          {/* Subheading */}
          <p 
            className="text-white mb-4"
            style={{ 
              fontFamily: 'ibrand',
              fontSize: 'clamp(0.95rem, 1.5vw, 1.125rem)',
              opacity: 0.9,
              maxWidth: '700px',
              paddingBottom: '12px'
            }}
          >
            It's the trusted digital foundation for tomorrow's European economy.
            <br />
            Want to know more about our vision, partners, or leadership?
          </p>
          
          {/* Meet the Team / Contact Us */}
          <p 
            className="text-white mb-10"
            style={{ 
              fontFamily: 'ibrand',
              fontSize: 'clamp(0.95rem, 1.5vw, 1.125rem)',
              paddingBottom: '12px'
            }}
          >
            <span style={{ fontWeight: '600' }}>Meet the Team</span> or <span style={{ fontWeight: '600' }}>Contact Us</span> for partnership opportunities.
          </p>
          
          {/* CTA Button */}
          <button
            className="group transition-all duration-300 hover:scale-105 mb-8"
            style={{
              backgroundColor: '#FFFFFF',
              color: '#020219',
              fontFamily: 'ibrand',
              fontSize: '1rem',
              padding: '16px 32px',
              borderRadius: '50px',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontWeight: '500',
              marginTop: '24px'
            }}
          >
            Get Started with Eurocoin
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          
          {/* Bottom Text */}
          <p 
            className="text-white"
            style={{ 
              fontFamily: 'ibrand',
              fontSize: 'clamp(0.85rem, 1.2vw, 1rem)',
              opacity: 0.8,
              paddingTop: '36px'
            }}
          >
            Power your transactions with Europe's most trusted digital euro.
          </p>
        </div>
      </div>
    </div>
  );
}