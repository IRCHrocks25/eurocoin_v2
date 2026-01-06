import { Header } from './Header';
import { Footer } from './Footer';
import heroBg from 'figma:asset/52ec0fa752c1904f6225c98d4968b58175ac83c7.png';
import processSteps from 'figma:asset/64ef15a92139cc140581b04a0df726fb9748e1fb.png';
import coinImage from 'figma:asset/b589d4f3d6b43809c83cf8ccf1546b2b219f862e.png';
import sectionBg from 'figma:asset/6a9f02b6b65adfd1b0f35db7967562ee44f10795.png';
import ctaBg from 'figma:asset/af3c6efc6ea179431e93dd83377ab1f5e7f65967.png';

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
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto" style={{ marginLeft: '52%', transform: 'translateX(-50%)' }}>
            {/* Badge */}
            <div 
              className="mb-8"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '50px',
                padding: '10px 24px',
                backdropFilter: 'blur(10px)'
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
              className="text-white mb-6"
              style={{ 
                fontFamily: 'ibrand',
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                lineHeight: '1.15',
                whiteSpace: 'nowrap'
              }}
            >
              Simple. Instant. Secure.
            </h1>
            
            {/* Subheading */}
            <h2 
              className="text-white mb-8"
              style={{ 
                fontFamily: 'ibrand',
                fontSize: 'clamp(1.25rem, 2.5vw, 2rem)',
                lineHeight: '1.3',
                opacity: 0.9
              }}
            >
              The Fastest Path to Regulated Digital Cash
            </h2>
            
            {/* Body Paragraph */}
            <p 
              className="text-white mb-6"
              style={{ 
                fontFamily: 'ibrand',
                fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                lineHeight: '1.7',
                opacity: 0.85,
                maxWidth: '800px',
                marginTop: '20px'
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
                marginTop: '16px'
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
          className="relative w-full"
          style={{
            background: 'linear-gradient(to bottom, rgba(5, 8, 25, 1) 0%, rgba(8, 12, 35, 0.95) 50%, rgba(10, 15, 40, 0.7) 100%)',
            paddingTop: '80px',
            paddingBottom: '80px'
          }}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-6xl mx-auto" style={{ marginLeft: '52%', transform: 'translateX(-50%)' }}>
              <img 
                src={processSteps}
                alt="How Eurocoin Works - Process Steps"
                className="w-full h-auto"
                style={{ transform: 'scale(1.15)' }}
              />
            </div>
          </div>
        </section>

        {/* Why Eurocoin Is Different Section - Full Width */}
        <section 
          className="relative w-full"
          style={{
            backgroundImage: `url(${sectionBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            paddingTop: '100px',
            paddingBottom: '120px'
          }}
        >
          <div className="max-w-6xl mx-auto px-4 md:px-8" style={{ marginLeft: '52%', transform: 'translateX(-50%)' }}>
            {/* Section Heading */}
            <h2 
              className="text-white text-center mb-16"
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16" style={{ maxWidth: '2200px', margin: '6rem auto 4rem auto' }}>
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
          className="relative w-full"
          style={{
            backgroundImage: `url(${ctaBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            paddingTop: '120px',
            paddingBottom: '120px'
          }}
        >
          <div className="max-w-4xl mx-auto px-4 text-center" style={{ marginLeft: '53%', transform: 'translateX(-50%)' }}>
            {/* Main Heading */}
            <h2 
              className="text-white mb-6"
              style={{
                fontFamily: 'ibrand',
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                lineHeight: '1.2',
                fontWeight: '500'
              }}
            >
              Instant. Compliant. Built for Everyone.
            </h2>
            
            {/* Subtitle */}
            <p 
              className="text-white mb-8"
              style={{
                fontFamily: 'ibrand',
                fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                lineHeight: '1.6',
                opacity: 0.9
              }}
            >
              See how simple it is to integrate, transact, and build on the Eurocoin network.
            </p>

            {/* Question */}
            <p 
              className="text-white mb-10"
              style={{
                fontFamily: 'ibrand',
                fontSize: 'clamp(0.95rem, 1.3vw, 1.125rem)',
                lineHeight: '1.5',
                opacity: 0.85
              }}
            >
              Want to partner, invest, or connect with our team?
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Contact Us Button */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-black transition-all hover:scale-105"
                style={{
                  fontFamily: 'ibrand',
                  fontSize: '1.05rem',
                  fontWeight: '500',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                Contact Us for Onboarding
                <span style={{ fontSize: '1.2rem' }}>👋</span>
              </a>

              {/* View Integration Docs Button */}
              <a
                href="#docs"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white transition-all hover:scale-105"
                style={{
                  fontFamily: 'ibrand',
                  fontSize: '1.05rem',
                  fontWeight: '500',
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(255, 255, 255, 0.4)'
                }}
              >
                View Integration Docs
                <span style={{ fontSize: '1.2rem' }}>→</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}