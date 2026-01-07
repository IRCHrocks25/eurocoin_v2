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
      <div className="w-full flex justify-center">
        <div className="w-full max-w-4xl mx-auto px-4">
          <div className="flex flex-col items-center text-center">
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
            className="group relative flex items-center justify-center gap-4 rounded-full transition-all duration-500 ease-out overflow-hidden mb-8"
            style={{
              fontFamily: 'ibrand',
              fontSize: 'clamp(1.125rem, 1.5vw, 1.375rem)',
              fontWeight: '600',
              padding: '22px 48px',
              marginTop: '24px',
              cursor: 'pointer',
              background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FBFF 50%, #E8F4FF 100%)',
              border: '2px solid rgba(255, 255, 255, 0.6)',
              boxShadow: `
                0 10px 40px rgba(255, 255, 255, 0.2),
                0 0 0 1px rgba(255, 255, 255, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.6),
                inset 0 -1px 0 rgba(0, 0, 0, 0.1)
              `,
              color: '#020219',
              position: 'relative',
              minWidth: '320px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `
                0 20px 60px rgba(255, 255, 255, 0.35),
                0 0 0 4px rgba(255, 255, 255, 0.2),
                inset 0 1px 0 rgba(255, 255, 255, 0.8),
                inset 0 -1px 0 rgba(0, 0, 0, 0.05)
              `;
              e.currentTarget.style.background = 'linear-gradient(135deg, #FFFFFF 0%, #F0F7FF 50%, #D6EBFF 100%)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.8)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = `
                0 10px 40px rgba(255, 255, 255, 0.2),
                0 0 0 1px rgba(255, 255, 255, 0.3),
                inset 0 1px 0 rgba(255, 255, 255, 0.6),
                inset 0 -1px 0 rgba(0, 0, 0, 0.1)
              `;
              e.currentTarget.style.background = 'linear-gradient(135deg, #FFFFFF 0%, #F8FBFF 50%, #E8F4FF 100%)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {/* Shimmer effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 ease-in-out"></span>
            
            {/* Content */}
            <span className="relative z-10 flex items-center gap-3" style={{ letterSpacing: '0.02em' }}>
              Get Started with Eurocoin
              <div className="relative z-10 flex items-center justify-center rounded-full bg-[#020219] transition-all duration-300 group-hover:scale-110" style={{ 
                width: '40px', 
                height: '40px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
              }}>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </span>
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
    </div>
  );
}