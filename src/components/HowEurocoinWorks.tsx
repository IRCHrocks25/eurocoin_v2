import { Header } from './Header';
import { Footer } from './Footer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import heroBg from 'figma:asset/52ec0fa752c1904f6225c98d4968b58175ac83c7.png';
import processSteps from 'figma:asset/64ef15a92139cc140581b04a0df726fb9748e1fb.png';
import coinImage from 'figma:asset/b589d4f3d6b43809c83cf8ccf1546b2b219f862e.png';
import sectionBg from 'figma:asset/6a9f02b6b65adfd1b0f35db7967562ee44f10795.png';
import heroBgImage from 'figma:asset/b4ea384d8eb8e231c5607c87c40b03297346549d.png';

export function HowEurocoinWorks() {
  return (
    <div className="min-h-screen bg-[#0a0e27]">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="w-full relative"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '700px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '150px',
          paddingBottom: '100px'
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 flex justify-center">
          <div className="flex flex-col items-center text-center max-w-4xl w-full">
            {/* Badge */}
            <div 
              className="inline-flex"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '50px',
                padding: '10px 24px',
                backdropFilter: 'blur(10px)',
                marginBottom: '2rem'
              }}
            >
              <span 
                className="text-white"
                style={{
                  fontFamily: 'ibrand',
                  fontSize: 'clamp(0.875rem, 1.2vw, 1rem)',
                  fontWeight: '500',
                  opacity: 0.9
                }}
              >
                How Eurocoin Works
              </span>
            </div>

            {/* Main Heading */}
            <h1 
              className="text-white"
              style={{ 
                fontFamily: 'ibrand',
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                lineHeight: '1.15',
                whiteSpace: 'nowrap',
                marginBottom: '2rem'
              }}
            >
              Simple. Instant. Secure.
            </h1>
            
            {/* Subheading */}
            <h2 
              className="text-white"
              style={{ 
                fontFamily: 'ibrand',
                fontSize: 'clamp(1.25rem, 2.5vw, 2rem)',
                lineHeight: '1.3',
                opacity: 0.9,
                marginBottom: '2rem'
              }}
            >
              The Fastest Path to Regulated Digital Cash
            </h2>
            
            {/* Body Paragraph */}
            <p 
              className="text-white"
              style={{ 
                fontFamily: 'ibrand',
                fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                lineHeight: '1.7',
                opacity: 0.85,
                maxWidth: '800px',
                marginBottom: '2rem',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              Eurocoin (EURDT) is a euro-backed digital token that gives you the speed of crypto with the stability of traditional currency. Built on blockchain, compliant with EU regulation, and backed by real reserves — it's money reimagined for the digital age.
            </p>
            
            {/* Closing Line */}
            <p 
              className="text-white"
              style={{ 
                fontFamily: 'ibrand',
                fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                lineHeight: '1.7',
                opacity: 0.85,
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              Here's how it works, from deposit to instant settlement.
            </p>
          </div>
        </div>
      </section>

      <main className="pb-20">
        {/* Process Steps Section - Transition Background */}
        <section 
          className="relative w-full flex items-center justify-center"
          style={{
            background: 'linear-gradient(to bottom, rgba(5, 8, 25, 1) 0%, rgba(8, 12, 35, 0.95) 50%, rgba(10, 15, 40, 0.7) 100%)',
            paddingTop: '80px',
            paddingBottom: '80px'
          }}
        >
          <div className="w-full flex justify-center">
            <div className="w-full flex items-center justify-center">
              <img 
                src={processSteps}
                alt="How Eurocoin Works - Process Steps"
                className="w-full h-auto max-w-7xl mx-auto"
              />
            </div>
          </div>
        </section>

        {/* Why Eurocoin Is Different Section - Full Width */}
        <section 
          className="relative w-full flex items-center justify-center"
          style={{
            backgroundImage: `url(${sectionBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            paddingTop: '100px',
            paddingBottom: '120px'
          }}
        >
          <div className="w-full max-w-6xl mx-auto px-4 md:px-8 flex flex-col items-center">
            {/* Section Heading */}
            <h2 
              className="text-white text-center mb-16 w-full"
              style={{
                fontFamily: 'ibrand',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                lineHeight: '1.2',
                fontWeight: '600'
              }}
            >
              Why Eurocoin Is Different
            </h2>

            {/* Three Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16 w-full max-w-5xl mx-auto" style={{ marginTop: '6rem', marginBottom: '4rem' }}>
              {/* Card 1 - Instant Minting */}
              <div 
                className="rounded-3xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(56, 68, 150, 0.5) 0%, rgba(40, 50, 120, 0.5) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  padding: '45px 50px',
                  textAlign: 'center',
                  height: '280px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <h3 
                  className="text-white mb-4"
                  style={{
                    fontFamily: 'ibrand',
                    fontSize: '1.75rem',
                    fontWeight: '600',
                    lineHeight: '1.2'
                  }}
                >
                  Instant Minting
                </h3>
                <p 
                  className="text-white"
                  style={{
                    fontFamily: 'ibrand',
                    fontSize: '1.1rem',
                    lineHeight: '1.5',
                    opacity: 0.85
                  }}
                >
                  No pre-minted supply. No reconciliation delays. Just immediate, on-demand digital euros.
                </p>
              </div>

              {/* Card 2 - Unbreakable Trust */}
              <div 
                className="rounded-3xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(56, 68, 150, 0.5) 0%, rgba(40, 50, 120, 0.5) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  padding: '45px 50px',
                  textAlign: 'center',
                  height: '280px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <h3 
                  className="text-white mb-4"
                  style={{
                    fontFamily: 'ibrand',
                    fontSize: '1.75rem',
                    fontWeight: '600',
                    lineHeight: '1.2'
                  }}
                >
                  Unbreakable Trust
                </h3>
                <p 
                  className="text-white"
                  style={{
                    fontFamily: 'ibrand',
                    fontSize: '1.1rem',
                    lineHeight: '1.5',
                    opacity: 0.85
                  }}
                >
                  Regulated framework, real-time settlement, zero custodial exposure.
                </p>
              </div>

              {/* Card 3 - Fully Backed */}
              <div 
                className="rounded-3xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(56, 68, 150, 0.5) 0%, rgba(40, 50, 120, 0.5) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  padding: '45px 50px',
                  textAlign: 'center',
                  height: '280px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <h3 
                  className="text-white mb-4"
                  style={{
                    fontFamily: 'ibrand',
                    fontSize: '1.75rem',
                    fontWeight: '600',
                    lineHeight: '1.2'
                  }}
                >
                  Fully Backed, Fully Redeemable
                </h3>
                <p 
                  className="text-white"
                  style={{
                    fontFamily: 'ibrand',
                    fontSize: '1.1rem',
                    lineHeight: '1.5',
                    opacity: 0.85
                  }}
                >
                  Every Eurocoin is 100% collateralized by segregated euro reserves held in regulated institutions.
                </p>
              </div>
            </div>

            {/* Centered Coin Image */}
            <div className="flex justify-center">
              <img 
                src={coinImage}
                alt="Eurocoin"
                style={{
                  maxWidth: '500px',
                  width: '100%',
                  height: 'auto'
                }}
              />
            </div>
          </div>
        </section>

        {/* CTA Section - Instant. Compliant. Built for Everyone */}
        <section 
          className="relative w-full flex items-center justify-center overflow-hidden"
          style={{
            paddingTop: '120px',
            paddingBottom: '120px',
            minHeight: '600px'
          }}
        >
          {/* Background with hero image */}
          <div className="absolute inset-0">
            <img 
              src={heroBgImage} 
              alt="Background" 
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
            {/* Main Heading */}
            <h2 
              className="text-white w-full"
              style={{
                fontFamily: 'ibrand',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                lineHeight: '1.2',
                fontWeight: '500',
                marginBottom: '2rem'
              }}
            >
              Instant. Compliant. Built for Everyone.
            </h2>
            
            {/* Subtitle */}
            <p 
              className="text-white w-full"
              style={{
                fontFamily: 'ibrand',
                fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                lineHeight: '1.6',
                opacity: 0.9,
                marginBottom: '2rem'
              }}
            >
              See how simple it is to integrate, transact, and build on the Eurocoin network.
            </p>

            {/* Question */}
            <p 
              className="text-white w-full"
              style={{
                fontFamily: 'ibrand',
                fontSize: 'clamp(0.95rem, 1.3vw, 1.125rem)',
                lineHeight: '1.5',
                opacity: 0.85,
                marginBottom: '3rem'
              }}
            >
              Want to partner, invest, or connect with our team?
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full">
              {/* Contact Us Button - Premium Style */}
              <Link to="/contact-us">
                <button
                  className="group relative flex items-center justify-center gap-4 rounded-full transition-all duration-500 ease-out overflow-hidden hover:scale-105 w-full sm:w-auto"
                  style={{
                    fontFamily: 'ibrand, sans-serif',
                    fontSize: 'clamp(1.125rem, 1.5vw, 1.25rem)',
                    fontWeight: '700',
                    padding: '22px 44px',
                    cursor: 'pointer',
                    minWidth: '280px',
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #E6F0FF 100%)',
                    border: '2px solid rgba(255, 255, 255, 0.8)',
                    boxShadow: `
                      0 8px 32px rgba(148, 190, 252, 0.3),
                      0 0 0 1px rgba(255, 255, 255, 0.5) inset,
                      inset 0 1px 0 rgba(255, 255, 255, 0.9),
                      inset 0 -1px 0 rgba(0, 0, 0, 0.05)
                    `,
                    color: '#000000',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `
                      0 12px 48px rgba(148, 190, 252, 0.5),
                      0 0 0 2px rgba(255, 255, 255, 0.6) inset,
                      inset 0 1px 0 rgba(255, 255, 255, 1),
                      inset 0 -1px 0 rgba(0, 0, 0, 0.08),
                      0 0 40px rgba(148, 190, 252, 0.3)
                    `;
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 1)';
                    e.currentTarget.style.background = 'linear-gradient(135deg, #FFFFFF 0%, #F0F7FF 100%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `
                      0 8px 32px rgba(148, 190, 252, 0.3),
                      0 0 0 1px rgba(255, 255, 255, 0.5) inset,
                      inset 0 1px 0 rgba(255, 255, 255, 0.9),
                      inset 0 -1px 0 rgba(0, 0, 0, 0.05)
                    `;
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.8)';
                    e.currentTarget.style.background = 'linear-gradient(135deg, #FFFFFF 0%, #E6F0FF 100%)';
                  }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 ease-in-out"></span>
                  <span className="relative z-10 flex items-center gap-3" style={{ letterSpacing: '0.02em' }}>
                    Contact Us for Onboarding
                    <div className="relative z-10 flex items-center justify-center rounded-full bg-[#0a0e27] transition-all duration-300 group-hover:scale-110" style={{
                      width: '42px',
                      height: '42px',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                      border: '1px solid rgba(0, 0, 0, 0.3)'
                    }}>
                      <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform duration-300" style={{ strokeWidth: '2.5', fill: 'white' }} />
                    </div>
                  </span>
                </button>
              </Link>

              {/* View Integration Docs Button - Premium Style */}
              <button
                onClick={() => {
                  // Navigate to technology page or open docs
                  window.open('#', '_blank');
                }}
                className="group relative flex items-center justify-center gap-4 rounded-full transition-all duration-500 ease-out overflow-hidden hover:scale-105 w-full sm:w-auto"
                style={{
                  fontFamily: 'ibrand, sans-serif',
                  fontSize: 'clamp(1.125rem, 1.5vw, 1.25rem)',
                  fontWeight: '700',
                  padding: '22px 44px',
                  cursor: 'pointer',
                  minWidth: '280px',
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
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000"></span>
                <span className="relative z-10 flex items-center gap-3 text-white font-medium" style={{ fontFamily: 'ibrand, sans-serif', letterSpacing: '0.02em', textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
                  View Integration Docs
                  <div className="relative z-10 flex items-center justify-center rounded-full bg-white transition-all duration-300 group-hover:scale-110" style={{
                    width: '42px',
                    height: '42px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
                  }}>
                    <ArrowRight className="w-6 h-6 text-[#0a0e27] group-hover:translate-x-1 transition-transform duration-300" style={{ strokeWidth: '2.5', fill: '#0a0e27' }} />
                  </div>
                </span>
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}