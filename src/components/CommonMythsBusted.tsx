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

      <div className="container mx-auto px-4" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Title */}
        <h2 
          className="text-white text-center mb-16"
          style={{
            fontFamily: 'ibrand',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            marginBottom: '80px',
            marginLeft: '8%'
          }}
        >
          Common Myths Busted
        </h2>

        {/* Myths Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          style={{
            maxWidth: '1400px',
            margin: '0 auto 100px auto',
            marginLeft: '12%'
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
                  fontSize: '0.75rem',
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
                  fontSize: '1.125rem',
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
                    fontSize: '0.875rem',
                    color: '#8A55FF',
                    fontWeight: '600'
                  }}
                >
                  Fact:{' '}
                </span>
                <span 
                  style={{
                    fontFamily: 'ibrand',
                    fontSize: '0.875rem',
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ marginLeft: '8%' }}>
          <button
            className="px-8 py-4 rounded-full transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #8A55FF 0%, #6B3FD9 100%)',
              color: 'white',
              fontFamily: 'ibrand',
              fontSize: '1rem',
              fontWeight: '500',
              border: 'none',
              cursor: 'pointer',
              minWidth: '220px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(138, 85, 255, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Request Early Access
          </button>

          <button
            className="px-8 py-4 rounded-full transition-all duration-300"
            style={{
              background: 'transparent',
              color: 'white',
              fontFamily: 'ibrand',
              fontSize: '1rem',
              fontWeight: '500',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              cursor: 'pointer',
              minWidth: '220px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(138, 85, 255, 0.6)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Schedule a Demo
          </button>
        </div>
      </div>
    </div>
  );
}