import { ArrowRight } from 'lucide-react';
import mythsCardsImg from 'figma:asset/4b9b6eadb89b6d3279db24ce88577982f6657393.png';
import gradientBg from 'figma:asset/5c4d6a21b832f6bc03ea9d307a429652416b7757.png';

export function CommonMythsBusted() {
  const myths = [
    {
      label: "MYTH 1",
      myth: "\"Stablecoins are all the same—they're just digital euros.\"",
      fact: "Not all stablecoins are created equal. Eurocoin is fully MiCA-compliant, 1:1 euro-backed, legally segregated under EU trust law, and audited monthly by Big Four firms. Many competitors rely on debt instruments, algorithmic backing, or pre-minted reserves—Eurocoin uses none of those."
    },
    {
      label: "MYTH 2",
      myth: "\"Blockchain payments are slow and expensive.\"",
      fact: "Eurocoin settles in 7-19 seconds from initiation to completion, handles 530,000+ TPS, and charges zero gas fees. That's faster and cheaper than most traditional payment rails—and orders of magnitude faster than Ethereum or Bitcoin."
    },
    {
      label: "MYTH 3",
      myth: "\"Stablecoins aren't safe or regulated.\"",
      fact: "Eurocoin operates under a full EMI license, meets MiCA regulatory standards, and undergoes monthly third-party audits. Funds are 100% segregated and legally protected—even in the event of operator insolvency. Protocol-level AML, KYC, and GDPR ensure institutional-grade compliance."
    },
    {
      label: "MYTH 4",
      myth: "\"You can't use crypto with traditional banks.\"",
      fact: "Eurocoin is natively integrated with SEPA, SWIFT, and a vast network of European banks. It bridges legacy finance and DeFi seamlessly—so you can settle with your bank or transact on Ethereum, all with the same token."
    }
  ];

  return (
    <div 
      className="w-full relative"
      style={{
        backgroundColor: '#020219',
        paddingTop: '100px',
        paddingBottom: '120px'
      }}
    >
      {/* Background gradient at bottom */}
      <div 
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '400px',
          backgroundImage: `url(${gradientBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
          opacity: 0.6,
          pointerEvents: 'none'
        }}
      />

      <div className="w-full flex justify-center" style={{ position: 'relative', zIndex: 10 }}>
        <div className="w-full max-w-[1200px] mx-auto px-4">
          {/* Section Title */}
          <h2 
            className="text-white text-center"
            style={{
              fontFamily: 'ibrand',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              marginBottom: '80px'
            }}
          >
            Common Myths Busted
          </h2>

          {/* Myths Grid */}
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            style={{
              marginBottom: '100px'
            }}
          >
          {myths.map((myth, index) => (
            <div
              key={index}
              className="p-6"
              style={{
                background: 'rgba(13, 13, 35, 0.5)',
                border: '1px solid rgba(138, 85, 255, 0.3)',
                borderRadius: '16px',
                boxShadow: '0 0 20px rgba(138, 85, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                padding: '32px'
              }}
            >
              {/* Myth Label */}
              <div 
                className="mb-4"
                style={{
                  fontFamily: 'ibrand',
                  fontSize: 'clamp(0.875rem, 1.5vw, 1rem) !important',
                  color: '#8A55FF',
                  letterSpacing: '0.1em',
                  fontWeight: '600',
                  marginBottom: '20px'
                }}
              >
                {myth.label}
              </div>

              {/* Myth Statement */}
              <p 
                className="mb-6"
                style={{
                  fontFamily: 'ibrand',
                  fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem) !important',
                  color: 'white',
                  lineHeight: '1.6',
                  fontStyle: 'italic',
                  marginBottom: '24px'
                }}
              >
                {myth.myth}
              </p>

              {/* Fact */}
              <div>
                <span 
                  style={{
                    fontFamily: 'ibrand',
                    fontSize: 'clamp(1rem, 2vw, 1.125rem) !important',
                    color: '#8A55FF',
                    fontWeight: '600'
                  }}
                >
                  Fact:{' '}
                </span>
                <span 
                  style={{
                    fontFamily: 'ibrand',
                    fontSize: 'clamp(1rem, 2vw, 1.125rem) !important',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: '1.8'
                  }}
                >
                  {myth.fact}
                </span>
              </div>
            </div>
          ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          {/* Request Early Access Button */}
          <button
            className="group relative flex items-center justify-center gap-4 rounded-full transition-all duration-500 ease-out overflow-hidden"
            style={{
              fontFamily: 'ibrand',
              fontSize: 'clamp(1.125rem, 1.5vw, 1.25rem)',
              fontWeight: '600',
              padding: '22px 44px',
              cursor: 'pointer',
              minWidth: '280px',
              background: 'linear-gradient(135deg, #8A55FF 0%, #6B3FD9 50%, #5A2FC7 100%)',
              border: '2px solid rgba(138, 85, 255, 0.5)',
              boxShadow: `
                0 10px 40px rgba(138, 85, 255, 0.3),
                0 0 0 1px rgba(255, 255, 255, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.2),
                inset 0 -1px 0 rgba(0, 0, 0, 0.2)
              `,
              color: 'white',
              position: 'relative'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `
                0 20px 60px rgba(138, 85, 255, 0.5),
                0 0 0 4px rgba(138, 85, 255, 0.2),
                inset 0 1px 0 rgba(255, 255, 255, 0.3),
                inset 0 -1px 0 rgba(0, 0, 0, 0.1)
              `;
              e.currentTarget.style.background = 'linear-gradient(135deg, #9A65FF 0%, #7B4FE9 50%, #6A3FD7 100%)';
              e.currentTarget.style.borderColor = 'rgba(138, 85, 255, 0.8)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = `
                0 10px 40px rgba(138, 85, 255, 0.3),
                0 0 0 1px rgba(255, 255, 255, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.2),
                inset 0 -1px 0 rgba(0, 0, 0, 0.2)
              `;
              e.currentTarget.style.background = 'linear-gradient(135deg, #8A55FF 0%, #6B3FD9 50%, #5A2FC7 100%)';
              e.currentTarget.style.borderColor = 'rgba(138, 85, 255, 0.5)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {/* Shimmer effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 ease-in-out"></span>
            
            {/* Content */}
            <span className="relative z-10 flex items-center gap-3" style={{ letterSpacing: '0.02em' }}>
              Request Early Access
              <div className="relative z-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-110" style={{ 
                width: '36px', 
                height: '36px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
              }}>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </span>
          </button>

          {/* Schedule a Demo Button */}
          <button
            className="group relative flex items-center justify-center gap-4 rounded-full transition-all duration-500 ease-out overflow-hidden"
            style={{
              fontFamily: 'ibrand',
              fontSize: 'clamp(1.125rem, 1.5vw, 1.25rem)',
              fontWeight: '600',
              padding: '22px 44px',
              cursor: 'pointer',
              minWidth: '280px',
              background: 'rgba(138, 85, 255, 0.1)',
              border: '2px solid rgba(138, 85, 255, 0.5)',
              boxShadow: `
                0 10px 40px rgba(138, 85, 255, 0.2),
                0 0 0 1px rgba(255, 255, 255, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.1)
              `,
              color: 'white',
              position: 'relative',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `
                0 20px 60px rgba(138, 85, 255, 0.4),
                0 0 0 4px rgba(138, 85, 255, 0.2),
                inset 0 1px 0 rgba(255, 255, 255, 0.2)
              `;
              e.currentTarget.style.background = 'rgba(138, 85, 255, 0.2)';
              e.currentTarget.style.borderColor = 'rgba(138, 85, 255, 0.8)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = `
                0 10px 40px rgba(138, 85, 255, 0.2),
                0 0 0 1px rgba(255, 255, 255, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.1)
              `;
              e.currentTarget.style.background = 'rgba(138, 85, 255, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(138, 85, 255, 0.5)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {/* Shimmer effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 ease-in-out"></span>
            
            {/* Content */}
            <span className="relative z-10 flex items-center gap-3" style={{ letterSpacing: '0.02em' }}>
              Schedule a Demo
              <div className="relative z-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-110" style={{ 
                width: '36px', 
                height: '36px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
              }}>
                <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </span>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}