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
        className="pt-48 pb-40 relative min-h-[900px] flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, transparent 70%, rgba(10, 14, 39, 0.8) 90%, rgba(10, 14, 39, 1) 100%), url(${heroBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="w-full flex justify-center relative z-10">
          <div className="w-full max-w-6xl mx-auto px-4 md:px-8 lg:px-12 text-center">
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
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center" style={{ marginTop: '40px' }}>
            {/* Request Early Access Button */}
            <button 
              className="group relative flex items-center justify-center gap-3 rounded-full transition-all duration-500 ease-out overflow-hidden w-full sm:w-auto"
              style={{
                fontFamily: 'ibrand, sans-serif',
                fontSize: 'clamp(1rem, 1.3vw, 1.125rem)',
                fontWeight: '700',
                padding: '18px 36px',
                cursor: 'pointer',
                minWidth: '240px',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.95) 100%)',
                border: '2px solid rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(20px)',
                boxShadow: `
                  0 6px 24px rgba(0, 0, 0, 0.1),
                  0 0 0 1px rgba(255, 255, 255, 0.6) inset,
                  inset 0 1px 0 rgba(255, 255, 255, 0.9),
                  inset 0 -1px 0 rgba(0, 0, 0, 0.05)
                `,
                color: '#000000',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `
                  0 10px 36px rgba(0, 0, 0, 0.15),
                  0 0 0 2px rgba(255, 255, 255, 0.7) inset,
                  inset 0 1px 0 rgba(255, 255, 255, 1),
                  inset 0 -1px 0 rgba(0, 0, 0, 0.08),
                  0 0 30px rgba(255, 255, 255, 0.2)
                `;
                e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.15)';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.98) 100%)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `
                  0 6px 24px rgba(0, 0, 0, 0.1),
                  0 0 0 1px rgba(255, 255, 255, 0.6) inset,
                  inset 0 1px 0 rgba(255, 255, 255, 0.9),
                  inset 0 -1px 0 rgba(0, 0, 0, 0.05)
                `;
                e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.95) 100%)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              {/* Shimmer effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 ease-in-out"></span>
              
              {/* Content */}
              <span className="relative z-10 flex items-center gap-3" style={{ letterSpacing: '0.02em', color: '#000000', fontWeight: '700' }}>
                Request Early Access
                <div className="relative z-10 flex items-center justify-center rounded-full bg-white transition-all duration-300 group-hover:scale-110" style={{ 
                  width: '38px', 
                  height: '38px',
                  boxShadow: '0 3px 10px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(0, 0, 0, 0.05)',
                  border: '2px solid rgba(0, 0, 0, 0.2)'
                }}>
                  <ArrowRight className="w-5 h-5 text-[#333333] group-hover:translate-x-1 transition-transform duration-300" style={{ strokeWidth: '3', stroke: '#333333', fill: 'none' }} />
                </div>
              </span>
            </button>
            
            {/* Schedule a Demo Button */}
            <button 
              className="group relative flex items-center justify-center gap-3 rounded-full transition-all duration-500 ease-out overflow-hidden w-full sm:w-auto"
              style={{
                fontFamily: 'ibrand, sans-serif',
                fontSize: 'clamp(1rem, 1.3vw, 1.125rem)',
                fontWeight: '700',
                padding: '18px 36px',
                cursor: 'pointer',
                minWidth: '240px',
                background: 'linear-gradient(135deg, rgba(91, 159, 255, 0.95) 0%, rgba(74, 143, 232, 0.98) 100%)',
                border: '2px solid rgba(91, 159, 255, 0.7)',
                backdropFilter: 'blur(20px)',
                boxShadow: `
                  0 6px 24px rgba(91, 159, 255, 0.35),
                  0 0 0 1px rgba(255, 255, 255, 0.25) inset,
                  inset 0 1px 0 rgba(255, 255, 255, 0.35),
                  inset 0 -1px 0 rgba(0, 0, 0, 0.2),
                  0 0 25px rgba(91, 159, 255, 0.25)
                `,
                color: '#FFFFFF',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `
                  0 10px 36px rgba(91, 159, 255, 0.5),
                  0 0 0 2px rgba(255, 255, 255, 0.35) inset,
                  inset 0 1px 0 rgba(255, 255, 255, 0.45),
                  inset 0 -1px 0 rgba(0, 0, 0, 0.15),
                  0 0 40px rgba(91, 159, 255, 0.4)
                `;
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(107, 175, 255, 0.98) 0%, rgba(90, 159, 248, 1) 100%)';
                e.currentTarget.style.borderColor = 'rgba(91, 159, 255, 0.9)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `
                  0 6px 24px rgba(91, 159, 255, 0.35),
                  0 0 0 1px rgba(255, 255, 255, 0.25) inset,
                  inset 0 1px 0 rgba(255, 255, 255, 0.35),
                  inset 0 -1px 0 rgba(0, 0, 0, 0.2),
                  0 0 25px rgba(91, 159, 255, 0.25)
                `;
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(91, 159, 255, 0.95) 0%, rgba(74, 143, 232, 0.98) 100%)';
                e.currentTarget.style.borderColor = 'rgba(91, 159, 255, 0.7)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              {/* Shimmer effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 ease-in-out"></span>
              
              {/* Content */}
              <span className="relative z-10 flex items-center gap-3" style={{ letterSpacing: '0.02em', color: '#FFFFFF', fontWeight: '700', textShadow: '0 2px 6px rgba(0, 0, 0, 0.3)' }}>
                Schedule a Demo
                <div className="relative z-10 flex items-center justify-center rounded-full bg-white transition-all duration-300 group-hover:scale-110" style={{ 
                  width: '38px', 
                  height: '38px',
                  boxShadow: '0 3px 10px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(0, 0, 0, 0.05)',
                  border: '2px solid rgba(0, 0, 0, 0.15)'
                }}>
                  <ArrowRight className="w-5 h-5 text-[#000000] group-hover:translate-x-1 transition-transform duration-300" style={{ strokeWidth: '3', stroke: '#000000', fill: '#000000' }} />
                </div>
              </span>
            </button>
          </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section 
        className="relative overflow-hidden flex justify-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(10, 14, 39, 1) 0%, rgba(10, 14, 39, 0.7) 10%, transparent 20%), url(${teamBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          {/* Section Header */}
          <h2 
            className="text-center"
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
              className="max-w-full md:max-w-6xl w-full mx-auto"
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
        className="py-16 md:py-32 relative overflow-hidden flex justify-center"
        style={{
          backgroundImage: `url(${structureBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          paddingTop: '120px',
          paddingBottom: '120px'
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
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
                className=""
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
        className="py-16 md:py-32 relative overflow-hidden flex justify-center"
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
        <div className="w-full max-w-5xl mx-auto px-4 md:px-8 lg:px-12 text-center relative z-10">
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
              className="group relative flex items-center justify-center gap-5 px-14 md:px-24 py-6 md:py-7 rounded-full overflow-hidden transition-all duration-500 hover:scale-105"
              style={{
                fontFamily: 'ibrand, sans-serif',
                fontSize: 'clamp(18px, 2.5vw, 22px)',
                background: 'linear-gradient(135deg, rgba(148, 190, 252, 0.25) 0%, rgba(91, 159, 255, 0.3) 50%, rgba(148, 190, 252, 0.25) 100%)',
                border: '2px solid rgba(148, 190, 252, 0.5)',
                backdropFilter: 'blur(20px)',
                boxShadow: `
                  0 8px 32px rgba(148, 190, 252, 0.3),
                  0 0 0 1px rgba(255, 255, 255, 0.1) inset,
                  0 2px 8px rgba(0, 0, 0, 0.2)
                `,
                color: '#FFFFFF',
                fontWeight: '600',
                letterSpacing: '0.5px',
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
              <span className="relative z-10" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)', marginLeft: '8px' }}>Contact Us</span>
              <div 
                className="relative z-10 flex items-center justify-center rounded-full bg-white transition-all duration-300 group-hover:scale-110"
                style={{
                  width: '42px',
                  height: '42px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
                }}
              >
                <ArrowRight className="w-6 h-6 text-black group-hover:translate-x-1 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700"></div>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
