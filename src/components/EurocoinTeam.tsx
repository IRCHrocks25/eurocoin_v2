import { Header } from './Header';
import { Footer } from './Footer';
import heroBgImage from 'figma:asset/16dc135f24de769da9df3f28a47cbb0da6cbbafb.png';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import teamBgImage from 'figma:asset/bd0441ceed50fa86e14b4efeeb402a009be331dd.png';
import profilesImage from 'figma:asset/5ddf9af5f9629d123b3e450fa46125147a41001a.png';
import structureBgImage from 'figma:asset/2054e4d44c8438f95e54067514367b51c6feda20.png';
import coinImage from 'figma:asset/f2c8b34d462a0e39df49801f6f3fc6bf97c43832.png';
import purposeBgImage from 'figma:asset/5c53908508721eb8ea78c137cc7d5878e9fa449d.png';
import earthBgImage from 'figma:asset/af3c6efc6ea179431e93dd83377ab1f5e7f65967.png';

export function EurocoinTeam() {
  return (
    <div className="min-h-screen bg-[#0a0e27]">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="pt-48 pb-40 px-6 md:px-12 lg:px-24 relative min-h-[900px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, transparent 70%, rgba(10, 14, 39, 0.8) 90%, rgba(10, 14, 39, 1) 100%), url(${heroBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div 
          className="max-w-6xl text-center relative z-10 w-full"
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: '24px',
            paddingRight: '24px'
          }}
        >
          {/* Main Heading */}
          <h1 
            className="mb-8"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(36px, 5.5vw, 56px)',
              fontWeight: 'bold',
              lineHeight: '1.2',
              color: '#000000'
            }}
          >
            The Visionaries Powering Europe's Digital Future
          </h1>

          {/* First Paragraph */}
          <p 
            className="mb-6"
            style={{
              fontFamily: 'ibrand, sans-serif',
              fontSize: 'clamp(16px, 2.2vw, 18px)',
              lineHeight: '1.6',
              color: '#000000',
              marginTop: '24px'
            }}
          >
            At the core of Eurocoin lies a leadership team that doesn't just understand the intersection of finance and technology they built it. With decades of experience across regulated finance, blockchain innovation, and enterprise infrastructure, these leaders are shaping a new era of trust, transparency, and performance in European digital money.
          </p>

          {/* Bold Statement */}
          <p 
            className="mb-8"
            style={{
              fontFamily: 'ibrand, sans-serif',
              fontSize: 'clamp(16px, 2.2vw, 18px)',
              fontWeight: '700',
              lineHeight: '1.6',
              color: '#000000',
              textShadow: '0.5px 0 0 #000000, -0.5px 0 0 #000000',
              marginTop: '24px'
            }}
          >
            Together, they bring the vision, execution power, and credibility to make Eurocoin <strong>Europe's most compliant, most scalable, and most trusted stablecoin.</strong>
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ marginTop: '40px' }}>
            <button 
              className="flex items-center gap-2 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              style={{
                fontFamily: 'ibrand, sans-serif',
                fontSize: 'clamp(14px, 2vw, 16px)',
                backgroundColor: '#FFFFFF',
                color: '#000000',
                border: '2px solid #000000'
              }}
            >
              Request Early Access
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button 
              className="flex items-center gap-2 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              style={{
                fontFamily: 'ibrand, sans-serif',
                fontSize: 'clamp(14px, 2vw, 16px)',
                backgroundColor: 'transparent',
                color: '#5B9FFF',
                border: '2px solid #5B9FFF'
              }}
            >
              Schedule a Demo
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section 
        className="px-6 md:px-12 lg:px-24 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(10, 14, 39, 1) 0%, rgba(10, 14, 39, 0.7) 10%, transparent 20%), url(${teamBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <h2 
            className="md:translate-x-[80px]"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(28px, 5vw, 42px)',
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#FFFFFF',
              marginBottom: '80px',
              paddingTop: '60px'
            }}
          >
            Visionary Leadership. Proven Impact.
          </h2>

          {/* Display the full team profiles image */}
          <div className="flex justify-center items-center">
            <img 
              src={profilesImage}
              alt="Leadership Team"
              className="max-w-full md:max-w-6xl w-full mx-auto md:translate-x-[80px]"
              style={{ 
                objectFit: 'contain',
                display: 'block',
                paddingBottom: '60px'
              }}
            />
          </div>
        </div>
      </section>

      {/* Structure for Leadership Section */}
      <section 
        className="py-16 md:py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden"
        style={{
          backgroundImage: `url(${structureBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          paddingTop: '120px',
          paddingBottom: '120px'
        }}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: 'bold',
                color: '#B8D4F1',
                marginBottom: '16px',
                lineHeight: '1.2'
              }}
            >
              A Strategic Structure for European Leadership
            </h2>
            <p 
              style={{
                fontFamily: 'ibrand, sans-serif',
                fontSize: 'clamp(16px, 2vw, 18px)',
                color: '#B8D4F1'
              }}
            >
              Eurocoin isn't just powered by leaders, it's powered by structure.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" style={{ marginTop: '40px' }}>
            {/* Coin Image */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <img 
                src={coinImage}
                alt="Eurocoin"
                className="lg:translate-x-[140px]"
                style={{
                  maxWidth: '320px',
                  width: '100%',
                  objectFit: 'contain'
                }}
              />
            </div>

            {/* Info Cards */}
            <div className="flex flex-col gap-8 order-1 lg:order-2 lg:scale-[1.15]">
              {/* Card 1 */}
              <div 
                className="p-6 md:p-8 rounded-3xl"
                style={{
                  backgroundColor: '#0A1628',
                  border: '1px solid rgba(91, 159, 255, 0.2)'
                }}
              >
                <h3 
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: 'clamp(18px, 3vw, 22px)',
                    fontWeight: '600',
                    color: '#FFFFFF',
                    marginBottom: '12px'
                  }}
                >
                  Technology Backbone
                </h3>
                <p 
                  style={{
                    fontFamily: 'ibrand, sans-serif',
                    fontSize: 'clamp(13px, 2vw, 14px)',
                    color: '#B8D4F1',
                    lineHeight: '1.6'
                  }}
                >
                  Built on Billon's enterprise-grade DLT protocol: audited, compliant, and proven at scale.
                </p>
              </div>

              {/* Card 2 */}
              <div 
                className="p-6 md:p-8 rounded-3xl"
                style={{
                  backgroundColor: '#0A1628',
                  border: '1px solid rgba(91, 159, 255, 0.2)'
                }}
              >
                <h3 
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: 'clamp(18px, 3vw, 22px)',
                    fontWeight: '600',
                    color: '#FFFFFF',
                    marginBottom: '12px'
                  }}
                >
                  UK Holding, European Reach
                </h3>
                <p 
                  style={{
                    fontFamily: 'ibrand, sans-serif',
                    fontSize: 'clamp(13px, 2vw, 14px)',
                    color: '#B8D4F1',
                    lineHeight: '1.6'
                  }}
                >
                  The Eurocoin Group operates from a UK base with full European distribution rights, enabling rapid cross-border deployment under a unified regulatory strategy.
                </p>
              </div>

              {/* Card 3 */}
              <div 
                className="p-6 md:p-8 rounded-3xl"
                style={{
                  backgroundColor: '#0A1628',
                  border: '1px solid rgba(91, 159, 255, 0.2)'
                }}
              >
                <h3 
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: 'clamp(18px, 3vw, 22px)',
                    fontWeight: '600',
                    color: '#FFFFFF',
                    marginBottom: '12px'
                  }}
                >
                  Planned Billon Merger
                </h3>
                <p 
                  style={{
                    fontFamily: 'ibrand, sans-serif',
                    fontSize: 'clamp(13px, 2vw, 14px)',
                    color: '#B8D4F1',
                    lineHeight: '1.6'
                  }}
                >
                  Eurocoin's roadmap includes a merger with Billon, consolidating technology, licenses, and expertise to accelerate growth and amplify shareholder value.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Text */}
          <div className="text-center mt-16">
            <p 
              style={{
                fontFamily: 'ibrand, sans-serif',
                fontSize: 'clamp(16px, 2vw, 18px)',
                color: '#B8D4F1',
                lineHeight: '1.6',
                marginTop: '80px'
              }}
            >
              This integrated structure positions Eurocoin as the premier digital euro ecosystem rooted in compliance, engineered for scale.
            </p>
          </div>
        </div>
      </section>

      {/* Trust. Driven by Purpose Section */}
      <section 
        className="py-16 md:py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden"
        style={{
          backgroundImage: `url(${earthBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '600px',
          paddingTop: '120px',
          paddingBottom: '120px'
        }}
      >
        <div className="max-w-5xl text-center relative z-10 md:translate-x-[60px] md:-translate-y-[20px] w-full" style={{ marginLeft: 'auto', marginRight: 'auto', padding: '0 24px' }}>
          {/* Main Heading */}
          <h2 
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(36px, 6vw, 64px)',
              fontWeight: 'bold',
              color: '#FFFFFF',
              marginBottom: '48px',
              lineHeight: '1.2'
            }}
          >
            Trust. Driven by Purpose.
          </h2>

          {/* First Paragraph */}
          <p 
            style={{
              fontFamily: 'ibrand, sans-serif',
              fontSize: 'clamp(16px, 2vw, 18px)',
              color: '#B8D4F1',
              lineHeight: '1.8',
              marginBottom: '32px'
            }}
          >
            The Eurocoin leadership team combines financial discipline with innovative spirit. Together, they are redefining what it means to issue a digital euro fast, secure, and fully compliant.
          </p>

          {/* Second Paragraph - Bold Statement */}
          <p 
            style={{
              fontFamily: 'ibrand, sans-serif',
              fontSize: 'clamp(16px, 2vw, 18px)',
              color: '#B8D4F1',
              lineHeight: '1.8',
              marginBottom: '60px'
            }}
          >
            Their mission is simple but powerful: <strong>to deliver the safest, fastest, and most compliant euro stablecoin for Europe's digital future.</strong>
          </p>

          {/* Contact Us Button */}
          <div className="flex justify-center">
            <button 
              className="flex items-center gap-3 px-12 py-5 rounded-full transition-all duration-300 hover:scale-105"
              style={{
                fontFamily: 'ibrand, sans-serif',
                fontSize: 'clamp(18px, 2.5vw, 22px)',
                backgroundColor: '#B8D4F1',
                color: '#000000',
                fontWeight: '600',
                boxShadow: '0 0 40px rgba(184, 212, 241, 0.3)'
              }}
            >
              Contact Us
              <div 
                className="flex items-center justify-center rounded-full"
                style={{
                  backgroundColor: '#000000',
                  width: '40px',
                  height: '40px'
                }}
              >
                <ArrowRight className="w-6 h-6" style={{ color: '#FFFFFF' }} />
              </div>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
