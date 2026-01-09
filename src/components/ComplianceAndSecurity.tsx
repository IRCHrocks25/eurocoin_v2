import { Header } from './Header';
import { Footer } from './Footer';
import { useState } from 'react';
import { ChevronUp, ChevronDown, ArrowDown, ArrowRight } from 'lucide-react';
import heroBackground from 'figma:asset/db4f570127b96324c38704791adef3db2e94cd3d.png';
import bottomBanner from 'figma:asset/dcf2716e803131758127d656382c52b4f1a9c158.png';
import ctaBackground from 'figma:asset/af3c6efc6ea179431e93dd83377ab1f5e7f65967.png';
import React from 'react';

export function ComplianceAndSecurity() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const accordionItems = [
    {
      title: 'MiCA Compliance and Licensing',
      content: [
        {
          subtitle: 'First Fully MiCA-Compliant Euro Stablecoin:',
          text: 'Eurocoin is ready to issue under the Markets in Crypto-Assets (MiCA) framework the new gold standard for stablecoin regulation in Europe.'
        },
        {
          subtitle: 'EMI Licensing:',
          text: 'Issued by an Electronic Money Institution (EMI) license from the Polish Financial Supervision Authority (KNF), with Billon operating under an e-money license since 2019.'
        },
        {
          subtitle: 'Legal Trust Protections:',
          text: 'All client funds are legally segregated under EU trust law. This means 100% of client balances are shielded even in the unlikely event of operator or banking partner insolvency.'
        }
      ]
    },
    {
      title: 'Embedded Protocol-Level Compliance',
      content: [
        {
          subtitle: 'Built-in Regulatory Controls:',
          text: 'Compliance features are embedded directly into the Eurocoin protocol, ensuring adherence to European regulations.'
        }
      ]
    },
    {
      title: 'Security Features that Set a New Standard',
      content: [
        {
          subtitle: 'Institutional-Grade Security:',
          text: 'Advanced security measures protect user funds and transactions at all times.'
        }
      ]
    },
    {
      title: 'Data Privacy & User Sovereignty',
      content: [
        {
          subtitle: 'GDPR Compliance:',
          text: 'Full compliance with European data protection regulations, ensuring user privacy and data sovereignty.'
        }
      ]
    },
    {
      title: 'Tax Efficiency',
      content: [
        {
          subtitle: 'Optimized for European Tax Frameworks:',
          text: 'Eurocoin is designed to work seamlessly within European tax regulations.'
        }
      ]
    },
    {
      title: 'Insurance and Risk Mitigation',
      content: [
        {
          subtitle: 'Comprehensive Coverage:',
          text: 'Multiple layers of insurance and risk management protect user assets.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#020219]">
      <Header />
      
      {/* Hero Section with Background */}
      <section 
        className="relative overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: 'clamp(600px, 90vh, 100vh)',
          paddingTop: 'clamp(120px, 18vh, 180px)',
          paddingBottom: 'clamp(20px, 3vh, 40px)'
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020219]/70 via-[#020219]/50 to-[#020219]/80 pointer-events-none"></div>

        <div className="w-full flex justify-center relative z-10">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center" style={{ width: '100%' }}>
          {/* Badge */}
          <div className="inline-flex items-center px-4 sm:px-5 py-2 rounded-full mb-6 sm:mb-8" style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <span style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'clamp(14px, 3vw, 20px)',
              fontWeight: '700',
              background: 'linear-gradient(90deg, #94BEFC 0%, #FFFFFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Compliance & Security
            </span>
          </div>

          {/* Main Heading */}
          <h1 style={{
            fontFamily: 'ibrand, sans-serif',
            fontSize: 'clamp(36px, 7vw, 80px)',
            fontWeight: '400',
            lineHeight: '1.1',
            background: 'linear-gradient(90deg, #FFFFFF 22.19%, #B8D5FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
            paddingLeft: '1rem',
            paddingRight: '1rem'
          }}>
            Built for European Trust
          </h1>

          {/* Subheading */}
          <h2 style={{
            fontFamily: 'ibrand, sans-serif',
            fontSize: 'clamp(20px, 4vw, 36px)',
            fontWeight: '400',
            lineHeight: '130%',
            color: '#B8D5FF',
            marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
            paddingLeft: '1rem',
            paddingRight: '1rem'
          }}>
            A New Era of Digital Finance Built on Regulation and Protection
          </h2>

          {/* Body Paragraph */}
          <p style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'clamp(14px, 2.5vw, 20px)',
            lineHeight: '160%',
            color: 'rgba(255, 255, 255, 0.85)',
            maxWidth: '900px',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
            paddingLeft: '1rem',
            paddingRight: '1rem'
          }}>
            Eurocoin isn't just another digital currency — it's the first Euro-native stablecoin built from the ground up to meet European regulatory standards. With full MiCA compliance, institutional-grade security, and transparent reserve management, Eurocoin provides the trust and protection that users, businesses, and institutions demand in the digital economy.
          </p>

          {/* Expand/Collapse Button */}
          <button
            className="inline-flex items-center text-sm font-medium text-blue-500 hover:text-blue-700 transition-colors"
            style={{ 
              marginBottom: '0', 
              marginTop: '0',
              fontSize: 'clamp(13px, 2vw, 16px)',
              padding: '0.5rem 1rem'
            }}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Show More
              </>
            )}
          </button>
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="bg-[#020219] flex justify-center relative" style={{ 
        paddingTop: 'clamp(60px, 12vw, 120px)', 
        paddingBottom: 'clamp(60px, 12vw, 100px)' 
      }}>
        {/* Animated Background Glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20 md:mb-28 lg:mb-32">
            <h2 style={{
              fontFamily: 'ibrand, sans-serif',
              fontSize: 'clamp(28px, 6vw, 48px)',
              fontWeight: '500',
              lineHeight: '1.2',
              background: 'linear-gradient(135deg, #FFFFFF 0%, #B8D5FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
              letterSpacing: '-0.02em'
            }}>
              Compliance & Security Framework
            </h2>
            <p style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'clamp(14px, 2.5vw, 18px)',
              fontWeight: '400',
              lineHeight: '1.6',
              color: 'rgba(255, 255, 255, 0.7)',
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto',
              paddingLeft: '1rem',
              paddingRight: '1rem',
              marginBottom: 'clamp(40px, 8vw, 60px)'
            }}>
              Explore how Eurocoin ensures regulatory compliance, security, and user protection at every level
            </p>
          </div>

          <div className="space-y-12 md:space-y-16 lg:space-y-20">
          {accordionItems.map((item, index) => (
            <React.Fragment key={index}>
              <div
                className="rounded-[20px] md:rounded-[24px] overflow-hidden transition-all duration-500 group relative"
                style={{
                  background: openAccordion === index 
                    ? 'linear-gradient(135deg, rgba(10, 10, 30, 0.95) 0%, rgba(20, 15, 45, 0.9) 100%)'
                    : 'linear-gradient(135deg, rgba(10, 10, 30, 0.9) 0%, rgba(15, 12, 35, 0.85) 100%)',
                  border: '2px solid',
                  borderColor: openAccordion === index 
                    ? 'rgba(148, 190, 252, 0.5)' 
                    : 'rgba(148, 190, 252, 0.25)',
                  boxShadow: openAccordion === index 
                    ? `
                      0 12px 48px rgba(148, 190, 252, 0.3),
                      0 0 0 1px rgba(148, 190, 252, 0.2) inset,
                      inset 0 1px 0 rgba(255, 255, 255, 0.1),
                      0 0 60px rgba(148, 190, 252, 0.2)
                    `
                    : `
                      0 8px 32px rgba(0, 0, 0, 0.4),
                      0 0 0 1px rgba(148, 190, 252, 0.15) inset,
                      inset 0 1px 0 rgba(255, 255, 255, 0.05)
                    `,
                  backdropFilter: 'blur(16px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                  transform: openAccordion === index ? 'scale(1.01)' : 'scale(1)',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseEnter={(e) => {
                  if (openAccordion !== index) {
                    e.currentTarget.style.transform = 'scale(1.02) translateY(-2px)';
                    e.currentTarget.style.boxShadow = `
                      0 16px 56px rgba(148, 190, 252, 0.35),
                      0 0 0 1px rgba(148, 190, 252, 0.3) inset,
                      inset 0 1px 0 rgba(255, 255, 255, 0.1),
                      0 0 80px rgba(148, 190, 252, 0.25)
                    `;
                    e.currentTarget.style.borderColor = 'rgba(148, 190, 252, 0.5)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (openAccordion !== index) {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = `
                      0 8px 32px rgba(0, 0, 0, 0.4),
                      0 0 0 1px rgba(148, 190, 252, 0.15) inset,
                      inset 0 1px 0 rgba(255, 255, 255, 0.05)
                    `;
                    e.currentTarget.style.borderColor = 'rgba(148, 190, 252, 0.25)';
                  }
                }}
              >
                {/* Premium Shimmer Effect */}
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                  style={{
                    transform: 'translateX(-100%)',
                    animation: openAccordion === index ? 'shimmer 3s infinite' : 'none'
                  }}
                ></div>

                {/* Accordion Header */}
                <button
                  onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                  className="w-full px-6 sm:px-8 md:px-10 lg:px-12 py-6 sm:py-8 md:py-10 flex items-center justify-between text-left transition-all duration-500 relative group/header overflow-hidden"
                  style={{
                    background: openAccordion === index 
                      ? 'linear-gradient(135deg, rgba(148, 190, 252, 0.15) 0%, rgba(148, 190, 252, 0.08) 50%, transparent 100%)'
                      : 'linear-gradient(135deg, transparent 0%, rgba(148, 190, 252, 0.05) 100%)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover/header:opacity-100 transition-opacity duration-500"></div>
                  <h3 style={{
                    fontFamily: 'ibrand, sans-serif',
                    fontSize: 'clamp(18px, 4vw, 36px)',
                    fontWeight: '500',
                    background: 'linear-gradient(135deg, #FFFFFF 0%, #B8D5FF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    letterSpacing: '0.02em',
                    lineHeight: '1.3',
                    transition: 'all 0.3s ease',
                    paddingRight: '1rem',
                    flex: 1,
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {item.title}
                  </h3>
                  <div className="relative z-10 flex-shrink-0 ml-4 sm:ml-8 flex items-center justify-center rounded-full transition-all duration-500 group-hover/header:scale-110" style={{
                    width: 'clamp(40px, 9vw, 44px)',
                    height: 'clamp(40px, 9vw, 44px)',
                    background: openAccordion === index 
                      ? 'linear-gradient(135deg, rgba(148, 190, 252, 0.4) 0%, rgba(148, 190, 252, 0.3) 50%, rgba(148, 190, 252, 0.25) 100%)'
                      : 'linear-gradient(135deg, rgba(148, 190, 252, 0.3) 0%, rgba(148, 190, 252, 0.2) 50%, rgba(148, 190, 252, 0.15) 100%)',
                    border: '2px solid',
                    borderColor: openAccordion === index ? 'rgba(148, 190, 252, 0.6)' : 'rgba(148, 190, 252, 0.4)',
                    boxShadow: openAccordion === index 
                      ? '0 6px 20px rgba(148, 190, 252, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                      : '0 4px 12px rgba(148, 190, 252, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
                    transform: openAccordion === index ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}>
                    {openAccordion === index ? (
                      <ChevronUp className="text-[#B8D5FF] transition-all duration-500" style={{ strokeWidth: '2.5', width: 'clamp(22px, 5vw, 24px)', height: 'clamp(22px, 5vw, 24px)', filter: 'drop-shadow(0 0 8px rgba(184, 213, 255, 0.5))' }} />
                    ) : (
                      <ChevronDown className="text-[#B8D5FF] transition-all duration-500" style={{ strokeWidth: '2.5', width: 'clamp(22px, 5vw, 24px)', height: 'clamp(22px, 5vw, 24px)' }} />
                    )}
                  </div>
                </button>

                {/* Accordion Content */}
                {openAccordion === index && (
                  <div 
                    className="px-6 sm:px-8 md:px-10 lg:px-12 pb-10 sm:pb-12 md:pb-14 border-t border-white/10"
                    style={{
                      animation: 'fadeInUp 0.6s ease-out',
                      background: 'linear-gradient(180deg, rgba(148, 190, 252, 0.08) 0%, transparent 100%)'
                    }}
                  >
                    {item.content.map((section, idx) => (
                      <div 
                        key={idx} 
                        className={idx > 0 ? 'mt-8 sm:mt-10 md:mt-12' : ''} 
                        style={{
                          borderTop: idx > 0 ? '1px solid rgba(148, 190, 252, 0.2)' : 'none',
                          paddingTop: idx > 0 ? 'clamp(24px, 5vw, 32px)' : '0',
                          animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`
                        }}
                      >
                        <p style={{
                          fontFamily: 'Manrope, sans-serif',
                          fontSize: 'clamp(15px, 2.5vw, 20px)',
                          lineHeight: '1.8',
                          color: 'rgba(255, 255, 255, 0.9)',
                          marginBottom: '0',
                          letterSpacing: '0.015em'
                        }}>
                          <strong style={{
                            color: '#B8D5FF',
                            fontWeight: '700',
                            fontSize: 'clamp(17px, 2.8vw, 22px)',
                            display: 'block',
                            marginBottom: 'clamp(12px, 2.5vw, 16px)',
                            background: 'linear-gradient(135deg, #B8D5FF 0%, #94BEFC 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                          }}>{section.subtitle}</strong>
                          <span style={{ color: 'rgba(255, 255, 255, 0.8)', display: 'block', lineHeight: '1.7' }}>{section.text}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </React.Fragment>
          ))}
          </div>
        </div>

        <style>{`
          @keyframes shimmer {
            0% { transform: translateX(-100%) translateY(0); }
            100% { transform: translateX(200%) translateY(0); }
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
        `}</style>
      </section>

      {/* Bottom Banner */}
      <section className="bg-[#020219] py-8">
        <div className="w-full">
          <img 
            src={bottomBanner} 
            alt="With you all around the world" 
            className="w-full h-auto object-cover"
            style={{ maxHeight: '120px' }}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="relative overflow-hidden flex justify-center"
        style={{
          backgroundImage: `url(${ctaBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          paddingTop: 'clamp(60px, 12vw, 80px)',
          paddingBottom: 'clamp(60px, 12vw, 80px)'
        }}
      >
        <div className="w-full max-w-[1000px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center relative z-10">
          {/* Main Heading */}
          <h2 style={{
            fontFamily: 'ibrand, sans-serif',
            fontSize: 'clamp(32px, 6vw, 64px)',
            fontWeight: '400',
            lineHeight: '1.2',
            color: '#FFFFFF',
            marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
            paddingLeft: '1rem',
            paddingRight: '1rem'
          }}>
            Security You Can See.<br />
            Compliance You Can Trust.
          </h2>

          {/* Subheading */}
          <p style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'clamp(16px, 2.5vw, 24px)',
            lineHeight: '150%',
            color: '#FFFFFF',
            marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
            paddingLeft: '1rem',
            paddingRight: '1rem'
          }}>
            Eurocoin delivers more than speed and utility; it delivers safety, transparency, and trust.
          </p>

          {/* Supporting Text */}
          <p style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'clamp(14px, 2vw, 20px)',
            lineHeight: '160%',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: 'clamp(2.5rem, 5vw, 3rem)',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: '1rem',
            paddingRight: '1rem'
          }}>
            Whether you're an individual, a business, or a financial institution, you can transact, store value, and build with confidence.
          </p>

          {/* CTA Prompt */}
          <p style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'clamp(16px, 2vw, 20px)',
            lineHeight: '160%',
            color: '#FFFFFF',
            marginBottom: 'clamp(2rem, 4vw, 2.5rem)',
            paddingLeft: '1rem',
            paddingRight: '1rem'
          }}>
            Ready for digital money you can trust?
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 md:gap-8 px-2">
            {/* Contact Us Button */}
            <button
              onClick={() => {
                window.location.href = '/contact-us';
              }}
              className="group relative flex items-center justify-center gap-3 md:gap-4 rounded-full transition-all duration-700 ease-out overflow-hidden hover:scale-105 active:scale-95 w-full sm:w-auto sm:flex-1"
              style={{
                fontFamily: 'ibrand, sans-serif',
                fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
                fontWeight: '700',
                padding: 'clamp(18px, 4vw, 22px) clamp(32px, 6vw, 40px)',
                cursor: 'pointer',
                minHeight: '56px',
                background: 'linear-gradient(135deg, #FFFFFF 0%, #F8FBFF 50%, #E8F4FF 100%)',
                border: '2.5px solid rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(30px) saturate(180%)',
                WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                boxShadow: `
                  0 12px 48px rgba(255, 255, 255, 0.25),
                  0 0 0 2px rgba(255, 255, 255, 0.6) inset,
                  inset 0 2px 0 rgba(255, 255, 255, 1),
                  inset 0 -2px 0 rgba(0, 0, 0, 0.08),
                  0 0 60px rgba(255, 255, 255, 0.2)
                `,
                color: '#000000',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `
                  0 20px 64px rgba(255, 255, 255, 0.4),
                  0 0 0 3px rgba(255, 255, 255, 0.8) inset,
                  inset 0 2px 0 rgba(255, 255, 255, 1),
                  inset 0 -2px 0 rgba(0, 0, 0, 0.1),
                  0 0 80px rgba(255, 255, 255, 0.35),
                  0 0 120px rgba(148, 190, 252, 0.2)
                `;
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 1)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #FFFFFF 0%, #F0F7FF 50%, #D6EBFF 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `
                  0 12px 48px rgba(255, 255, 255, 0.25),
                  0 0 0 2px rgba(255, 255, 255, 0.6) inset,
                  inset 0 2px 0 rgba(255, 255, 255, 1),
                  inset 0 -2px 0 rgba(0, 0, 0, 0.08),
                  0 0 60px rgba(255, 255, 255, 0.2)
                `;
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.9)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #FFFFFF 0%, #F8FBFF 50%, #E8F4FF 100%)';
              }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 ease-in-out"></span>
              <span className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 md:gap-4" style={{ letterSpacing: '0.03em', color: '#000000', fontWeight: '700' }}>
                <span className="whitespace-normal sm:whitespace-nowrap text-center">Contact Us</span>
                <div className="relative z-10 flex items-center justify-center rounded-full bg-white transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 flex-shrink-0" style={{
                  width: 'clamp(38px, 9vw, 44px)',
                  height: 'clamp(38px, 9vw, 44px)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(0, 0, 0, 0.05)',
                  border: '1.5px solid rgba(0, 0, 0, 0.1)'
                }}>
                  <ArrowRight className="text-black group-hover:translate-x-1 transition-all duration-500" style={{ 
                    strokeWidth: '3', 
                    stroke: '#000000', 
                    fill: 'none', 
                    width: 'clamp(22px, 5.5vw, 26px)', 
                    height: 'clamp(22px, 5.5vw, 26px)'
                  }} />
                </div>
              </span>
            </button>

            {/* View Compliance Reports Button */}
            <button
              onClick={() => {
                window.open('#', '_blank'); // Replace with actual compliance reports URL
              }}
              className="group relative flex items-center justify-center gap-3 md:gap-4 rounded-full transition-all duration-700 ease-out overflow-hidden hover:scale-105 active:scale-95 w-full sm:w-auto sm:flex-1"
              style={{
                fontFamily: 'ibrand, sans-serif',
                fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
                fontWeight: '700',
                padding: 'clamp(18px, 4vw, 22px) clamp(32px, 6vw, 40px)',
                cursor: 'pointer',
                minHeight: '56px',
                background: 'linear-gradient(135deg, rgba(148, 190, 252, 0.35) 0%, rgba(91, 159, 255, 0.4) 50%, rgba(148, 190, 252, 0.35) 100%)',
                border: '2.5px solid rgba(148, 190, 252, 0.8)',
                backdropFilter: 'blur(30px) saturate(180%)',
                WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                boxShadow: `
                  0 12px 48px rgba(148, 190, 252, 0.45),
                  0 0 0 2px rgba(255, 255, 255, 0.2) inset,
                  0 4px 16px rgba(0, 0, 0, 0.25),
                  0 0 40px rgba(148, 190, 252, 0.35),
                  0 0 80px rgba(148, 190, 252, 0.2)
                `,
                color: '#FFFFFF',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `
                  0 20px 64px rgba(148, 190, 252, 0.6),
                  0 0 0 3px rgba(255, 255, 255, 0.3) inset,
                  0 6px 24px rgba(0, 0, 0, 0.35),
                  0 0 60px rgba(148, 190, 252, 0.5),
                  0 0 100px rgba(148, 190, 252, 0.3),
                  0 0 140px rgba(148, 190, 252, 0.2)
                `;
                e.currentTarget.style.borderColor = 'rgba(148, 190, 252, 1)';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(148, 190, 252, 0.45) 0%, rgba(91, 159, 255, 0.5) 50%, rgba(148, 190, 252, 0.45) 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `
                  0 12px 48px rgba(148, 190, 252, 0.45),
                  0 0 0 2px rgba(255, 255, 255, 0.2) inset,
                  0 4px 16px rgba(0, 0, 0, 0.25),
                  0 0 40px rgba(148, 190, 252, 0.35),
                  0 0 80px rgba(148, 190, 252, 0.2)
                `;
                e.currentTarget.style.borderColor = 'rgba(148, 190, 252, 0.8)';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(148, 190, 252, 0.35) 0%, rgba(91, 159, 255, 0.4) 50%, rgba(148, 190, 252, 0.35) 100%)';
              }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 ease-in-out"></span>
              <span className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 md:gap-4" style={{ letterSpacing: '0.03em', color: '#FFFFFF', fontWeight: '700', textShadow: '0 3px 12px rgba(0, 0, 0, 0.4)' }}>
                <span className="whitespace-normal sm:whitespace-nowrap text-center">View Compliance Reports</span>
                <div className="relative z-10 flex items-center justify-center rounded-full bg-gradient-to-br from-white via-gray-50 to-white transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 flex-shrink-0" style={{
                  width: 'clamp(38px, 9vw, 44px)',
                  height: 'clamp(38px, 9vw, 44px)',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3), inset 0 2px 0 rgba(255, 255, 255, 1), inset 0 -2px 0 rgba(0, 0, 0, 0.1)',
                  border: '2px solid rgba(0, 0, 0, 0.1)'
                }}>
                  <ArrowRight className="text-[#0a0e27] group-hover:translate-x-1 transition-all duration-500" style={{ strokeWidth: '3.5', stroke: '#0a0e27', fill: 'none', width: 'clamp(22px, 5.5vw, 26px)', height: 'clamp(22px, 5.5vw, 26px)' }} />
                </div>
              </span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}