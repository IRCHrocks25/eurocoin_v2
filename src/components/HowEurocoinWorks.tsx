import React from 'react';
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
          minHeight: 'clamp(450px, 70vh, 700px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 'clamp(120px, 15vh, 150px)',
          paddingBottom: 'clamp(60px, 10vh, 100px)'
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex justify-center">
          <div className="flex flex-col items-center text-center max-w-6xl w-full">
            {/* Badge */}
            <div 
              className="inline-flex"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '50px',
                padding: 'clamp(8px, 1.5vw, 10px) clamp(20px, 4vw, 24px)',
                backdropFilter: 'blur(10px)',
                marginBottom: 'clamp(1.5rem, 4vw, 2rem)'
              }}
            >
              <span 
                className="text-white"
                style={{
                  fontFamily: 'ibrand',
                  fontSize: 'clamp(0.75rem, 2vw, 1rem)',
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
                fontSize: 'clamp(2.25rem, 6.5vw, 4rem) !important',
                lineHeight: '1.2',
                marginBottom: 'clamp(1rem, 2.5vw, 1.5rem)',
                paddingLeft: '1rem',
                paddingRight: '1rem',
                fontWeight: '700'
              }}
            >
              Simple. Instant. Secure.
            </h1>
            
            {/* Subheading */}
            <h2 
              className="text-white"
              style={{ 
                fontFamily: 'ibrand',
                fontSize: 'clamp(1.25rem, 4vw, 2rem) !important',
                lineHeight: '1.3',
                opacity: 0.9,
                marginBottom: 'clamp(1rem, 2.5vw, 1.5rem)',
                paddingLeft: '1rem',
                paddingRight: '1rem',
                fontWeight: '600'
              }}
            >
              The Fastest Path to Regulated Digital Cash
            </h2>
            
            {/* Body Paragraph */}
            <p 
              className="text-white"
              style={{ 
                fontFamily: 'ibrand',
                fontSize: 'clamp(1.125rem, 3vw, 1.25rem) !important',
                lineHeight: '1.6',
                opacity: 0.85,
                maxWidth: '700px',
                marginBottom: 'clamp(1rem, 2.5vw, 1.5rem)',
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingLeft: '1rem',
                paddingRight: '1rem'
              }}
            >
              Eurocoin (EURDT) is a euro-backed digital token that gives you the speed of crypto with the stability of traditional currency. Built on blockchain, compliant with EU regulation, and backed by real reserves — it's money reimagined for the digital age.
            </p>
            
            {/* Closing Line */}
            <p 
              className="text-white"
              style={{ 
                fontFamily: 'ibrand',
                fontSize: 'clamp(1.125rem, 3vw, 1.25rem) !important',
                lineHeight: '1.6',
                opacity: 0.85,
                marginLeft: 'auto',
                marginRight: 'auto',
                paddingLeft: '1rem',
                paddingRight: '1rem'
              }}
            >
              Here's how it works, from deposit to instant settlement.
            </p>
          </div>
        </div>
      </section>

      <main className="pb-12 md:pb-16">
        {/* Process Steps Section - Transition Background */}
        <section 
          className="relative w-full flex items-center justify-center"
          style={{
            background: 'linear-gradient(to bottom, rgba(5, 8, 25, 1) 0%, rgba(8, 12, 35, 0.95) 50%, rgba(10, 15, 40, 0.7) 100%)',
            paddingTop: 'clamp(30px, 5vw, 50px)',
            paddingBottom: 'clamp(30px, 5vw, 50px)'
          }}
        >
          <div className="w-full flex justify-center px-4 md:px-6 lg:px-8">
            <div className="w-full flex items-center justify-center">
              <img 
                src={processSteps}
                alt="How Eurocoin Works - Process Steps"
                className="w-full h-auto mx-auto"
                style={{
                  maxWidth: 'clamp(600px, 75vw, 900px)',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: 'clamp(12px, 2vw, 20px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                }}
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
            paddingTop: 'clamp(40px, 6vw, 60px)',
            paddingBottom: 'clamp(40px, 6vw, 70px)'
          }}
        >
          <div className="w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col items-center">
            {/* Section Heading */}
            <h2 
              className="text-white text-center w-full"
              style={{
                fontFamily: 'ibrand',
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                lineHeight: '1.2',
                fontWeight: '600',
                marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)',
                paddingLeft: '1rem',
                paddingRight: '1rem'
              }}
            >
              Why Eurocoin Is Different
            </h2>

            {/* Three Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-5xl mx-auto" style={{ marginTop: 'clamp(1.5rem, 4vw, 2.5rem)', marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
              {/* Card 1 - Instant Minting */}
              <div 
                className="rounded-xl md:rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(56, 68, 150, 0.5) 0%, rgba(40, 50, 120, 0.5) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  padding: 'clamp(20px, 4vw, 32px) clamp(18px, 3vw, 32px)',
                  textAlign: 'center',
                  minHeight: 'clamp(160px, 30vw, 220px)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <h3 
                  className="text-white"
                  style={{
                    fontFamily: 'ibrand',
                    fontSize: 'clamp(1.125rem, 3vw, 1.5rem)',
                    fontWeight: '600',
                    lineHeight: '1.2',
                    marginBottom: 'clamp(10px, 2vw, 14px)'
                  }}
                >
                  Instant Minting
                </h3>
                <p 
                  className="text-white"
                  style={{
                    fontFamily: 'ibrand',
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                    lineHeight: '1.5',
                    opacity: 0.85
                  }}
                >
                  No pre-minted supply. No reconciliation delays. Just immediate, on-demand digital euros.
                </p>
              </div>

              {/* Card 2 - Unbreakable Trust */}
              <div 
                className="rounded-xl md:rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(56, 68, 150, 0.5) 0%, rgba(40, 50, 120, 0.5) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  padding: 'clamp(20px, 4vw, 32px) clamp(18px, 3vw, 32px)',
                  textAlign: 'center',
                  minHeight: 'clamp(160px, 30vw, 220px)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <h3 
                  className="text-white"
                  style={{
                    fontFamily: 'ibrand',
                    fontSize: 'clamp(1.125rem, 3vw, 1.5rem)',
                    fontWeight: '600',
                    lineHeight: '1.2',
                    marginBottom: 'clamp(10px, 2vw, 14px)'
                  }}
                >
                  Unbreakable Trust
                </h3>
                <p 
                  className="text-white"
                  style={{
                    fontFamily: 'ibrand',
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                    lineHeight: '1.5',
                    opacity: 0.85
                  }}
                >
                  Regulated framework, real-time settlement, zero custodial exposure.
                </p>
              </div>

              {/* Card 3 - Fully Backed */}
              <div 
                className="rounded-xl md:rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(56, 68, 150, 0.5) 0%, rgba(40, 50, 120, 0.5) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  padding: 'clamp(20px, 4vw, 32px) clamp(18px, 3vw, 32px)',
                  textAlign: 'center',
                  minHeight: 'clamp(160px, 30vw, 220px)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <h3 
                  className="text-white"
                  style={{
                    fontFamily: 'ibrand',
                    fontSize: 'clamp(1.125rem, 3vw, 1.5rem)',
                    fontWeight: '600',
                    lineHeight: '1.2',
                    marginBottom: 'clamp(10px, 2vw, 14px)'
                  }}
                >
                  Fully Backed, Fully Redeemable
                </h3>
                <p 
                  className="text-white"
                  style={{
                    fontFamily: 'ibrand',
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                    lineHeight: '1.5',
                    opacity: 0.85
                  }}
                >
                  Every Eurocoin is 100% collateralized by segregated euro reserves held in regulated institutions.
                </p>
              </div>
            </div>

            {/* Centered Coin Image */}
            <div className="flex justify-center px-4 mt-4">
              <img 
                src={coinImage}
                alt="Eurocoin"
                style={{
                  maxWidth: 'clamp(200px, 45vw, 350px)',
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
            paddingTop: 'clamp(50px, 8vw, 80px)',
            paddingBottom: 'clamp(50px, 8vw, 80px)',
            minHeight: 'clamp(350px, 50vh, 500px)'
          }}
        >
          {/* Background with hero image */}
          <div className="absolute inset-0">
            <img 
              src={heroBgImage} 
              alt="Background" 
              className="w-full h-full object-cover"
            />
            {/* Enhanced dark overlay for better text readability on mobile */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50" />
          </div>

          <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center flex flex-col items-center">
            {/* Main Heading */}
            <h2 
              className="text-white w-full"
              style={{
                fontFamily: 'ibrand',
                fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
                lineHeight: '1.2',
                fontWeight: '600',
                marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
                paddingLeft: '0.5rem',
                paddingRight: '0.5rem',
                letterSpacing: '-0.02em'
              }}
            >
              Instant. Compliant. Built for Everyone.
            </h2>
            
            {/* Subtitle */}
            <p 
              className="text-white w-full"
              style={{
                fontFamily: 'ibrand',
                fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)',
                lineHeight: '1.6',
                opacity: 0.95,
                marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
                paddingLeft: '1rem',
                paddingRight: '1rem',
                maxWidth: '600px',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              See how simple it is to integrate, transact, and build on the Eurocoin network.
            </p>

            {/* Question */}
            <p 
              className="text-white w-full"
              style={{
                fontFamily: 'ibrand',
                fontSize: 'clamp(0.875rem, 2.5vw, 1rem)',
                lineHeight: '1.6',
                opacity: 0.9,
                marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)',
                paddingLeft: '1rem',
                paddingRight: '1rem',
                fontWeight: '500'
              }}
            >
              Want to partner, invest, or connect with our team?
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-stretch sm:items-center w-full max-w-2xl mx-auto px-2 sm:px-4">
              {/* Contact Us Button - Premium Style */}
              <Link to="/contact-us" className="w-full sm:w-auto sm:flex-1">
                <button
                  className="group relative flex items-center justify-center gap-3 md:gap-4 rounded-full transition-all duration-500 ease-out overflow-hidden hover:scale-105 active:scale-95 w-full"
                  style={{
                    fontFamily: 'ibrand, sans-serif',
                    fontSize: 'clamp(1rem, 3vw, 1.25rem)',
                    fontWeight: '700',
                    padding: 'clamp(18px, 5vw, 24px) clamp(32px, 7vw, 48px)',
                    cursor: 'pointer',
                    minHeight: '56px',
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #E6F0FF 100%)',
                    border: '2px solid rgba(255, 255, 255, 0.9)',
                    boxShadow: `
                      0 8px 32px rgba(148, 190, 252, 0.3),
                      0 0 0 1px rgba(255, 255, 255, 0.5) inset,
                      inset 0 1px 0 rgba(255, 255, 255, 0.9),
                      inset 0 -1px 0 rgba(0, 0, 0, 0.05),
                      0 4px 16px rgba(148, 190, 252, 0.2)
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
                  <span className="relative z-10 flex items-center justify-center gap-3 md:gap-4" style={{ letterSpacing: '0.02em', whiteSpace: 'nowrap' }}>
                    Contact Us for Onboarding
                    <div className="relative z-10 flex items-center justify-center rounded-full bg-[#0a0e27] transition-all duration-300 group-hover:scale-110" style={{
                      width: 'clamp(38px, 9vw, 44px)',
                      height: 'clamp(38px, 9vw, 44px)',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                      border: '1.5px solid rgba(0, 0, 0, 0.3)',
                      flexShrink: 0
                    }}>
                      <ArrowRight className="text-white group-hover:translate-x-1 transition-transform duration-300" style={{ strokeWidth: '2.8', fill: 'white', width: 'clamp(22px, 5.5vw, 26px)', height: 'clamp(22px, 5.5vw, 26px)' }} />
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
                className="group relative flex items-center justify-center gap-3 md:gap-4 rounded-full transition-all duration-500 ease-out overflow-hidden hover:scale-105 active:scale-95 w-full sm:w-auto sm:flex-1"
                style={{
                  fontFamily: 'ibrand, sans-serif',
                  fontSize: 'clamp(1rem, 3vw, 1.25rem)',
                  fontWeight: '700',
                  padding: 'clamp(18px, 5vw, 24px) clamp(32px, 7vw, 48px)',
                  cursor: 'pointer',
                  minHeight: '56px',
                  background: 'linear-gradient(135deg, rgba(148, 190, 252, 0.3) 0%, rgba(91, 159, 255, 0.35) 50%, rgba(148, 190, 252, 0.3) 100%)',
                  border: '2px solid rgba(148, 190, 252, 0.6)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  boxShadow: `
                    0 8px 32px rgba(148, 190, 252, 0.35),
                    0 0 0 1px rgba(255, 255, 255, 0.15) inset,
                    0 2px 8px rgba(0, 0, 0, 0.2),
                    0 4px 16px rgba(148, 190, 252, 0.25)
                  `,
                  color: '#FFFFFF',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `
                    0 12px 48px rgba(148, 190, 252, 0.5),
                    0 0 0 2px rgba(255, 255, 255, 0.25) inset,
                    0 4px 16px rgba(0, 0, 0, 0.3),
                    0 0 60px rgba(148, 190, 252, 0.4)
                  `;
                  e.currentTarget.style.borderColor = 'rgba(148, 190, 252, 0.85)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(148, 190, 252, 0.4) 0%, rgba(91, 159, 255, 0.45) 50%, rgba(148, 190, 252, 0.4) 100%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `
                    0 8px 32px rgba(148, 190, 252, 0.35),
                    0 0 0 1px rgba(255, 255, 255, 0.15) inset,
                    0 2px 8px rgba(0, 0, 0, 0.2),
                    0 4px 16px rgba(148, 190, 252, 0.25)
                  `;
                  e.currentTarget.style.borderColor = 'rgba(148, 190, 252, 0.6)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(148, 190, 252, 0.3) 0%, rgba(91, 159, 255, 0.35) 50%, rgba(148, 190, 252, 0.3) 100%)';
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000"></span>
                <span className="relative z-10 flex items-center justify-center gap-3 md:gap-4 text-white font-medium" style={{ fontFamily: 'ibrand, sans-serif', letterSpacing: '0.02em', textShadow: '0 2px 4px rgba(0,0,0,0.2)', whiteSpace: 'nowrap' }}>
                  View Integration Docs
                  <div className="relative z-10 flex items-center justify-center rounded-full bg-white transition-all duration-300 group-hover:scale-110" style={{
                    width: 'clamp(38px, 9vw, 44px)',
                    height: 'clamp(38px, 9vw, 44px)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
                    border: '1.5px solid rgba(0, 0, 0, 0.1)',
                    flexShrink: 0
                  }}>
                    <ArrowRight className="text-[#0a0e27] group-hover:translate-x-1 transition-transform duration-300" style={{ strokeWidth: '2.8', fill: '#0a0e27', width: 'clamp(22px, 5.5vw, 26px)', height: 'clamp(22px, 5.5vw, 26px)' }} />
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