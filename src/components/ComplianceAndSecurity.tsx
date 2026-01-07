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
        className="pt-32 relative overflow-hidden min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          paddingBottom: '0'
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020219]/70 via-[#020219]/50 to-[#020219]/80 pointer-events-none"></div>

        <div className="w-full flex justify-center relative z-10">
          <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12 text-center" style={{ width: '100%' }}>
          {/* Badge */}
          <div className="inline-flex items-center px-5 py-2 rounded-full mb-8" style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <span style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: '20px',
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
            fontSize: 'clamp(48px, 6vw, 80px)',
            fontWeight: '400',
            lineHeight: '110%',
            background: 'linear-gradient(90deg, #FFFFFF 22.19%, #B8D5FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '32px'
          }}>
            Built for European Trust
          </h1>

          {/* Subheading */}
          <h2 style={{
            fontFamily: 'ibrand, sans-serif',
            fontSize: 'clamp(24px, 3vw, 36px)',
            fontWeight: '400',
            lineHeight: '130%',
            color: '#B8D5FF',
            marginBottom: '24px'
          }}>
            A New Era of Digital Finance Built on Regulation and Protection
          </h2>

          {/* Body Paragraph */}
          <p style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'clamp(16px, 2vw, 20px)',
            lineHeight: '160%',
            color: 'rgba(255, 255, 255, 0.85)',
            maxWidth: '900px',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '8px'
          }}>
            Eurocoin isn't just another digital currency — it's the first Euro-native stablecoin built from the ground up to meet European regulatory standards. With full MiCA compliance, institutional-grade security, and transparent reserve management, Eurocoin provides the trust and protection that users, businesses, and institutions demand in the digital economy.
          </p>

          {/* Expand/Collapse Button */}
          <button
            className="inline-flex items-center text-sm font-medium text-blue-500 hover:text-blue-700"
            style={{ marginBottom: '0', marginTop: '0' }}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-4 h-4 mr-2" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4 mr-2" />
                Show More
              </>
            )}
          </button>
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="bg-[#020219] flex justify-center relative" style={{ paddingTop: '60px', paddingBottom: '100px' }}>
        {/* Animated Background Glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="w-full max-w-[1100px] mx-auto px-4 relative z-10">
          {accordionItems.map((item, index) => (
            <React.Fragment key={index}>
              <div
                className="mb-8 rounded-3xl overflow-hidden transition-all duration-700 group relative"
                style={{
                  background: openAccordion === index 
                    ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.99) 0%, rgba(245, 250, 255, 0.98) 50%, rgba(240, 247, 255, 0.97) 100%)'
                    : 'linear-gradient(135deg, rgba(255, 255, 255, 0.97) 0%, rgba(250, 252, 255, 0.95) 50%, rgba(248, 250, 252, 0.93) 100%)',
                  border: '2.5px solid',
                  borderColor: openAccordion === index 
                    ? 'rgba(148, 190, 252, 0.7)' 
                    : 'rgba(148, 190, 252, 0.25)',
                  boxShadow: openAccordion === index 
                    ? `
                      0 20px 60px rgba(148, 190, 252, 0.4),
                      0 0 0 1px rgba(148, 190, 252, 0.3) inset,
                      inset 0 2px 0 rgba(255, 255, 255, 0.9),
                      inset 0 -2px 0 rgba(148, 190, 252, 0.1),
                      0 0 80px rgba(148, 190, 252, 0.2)
                    `
                    : `
                      0 8px 32px rgba(0, 0, 0, 0.12),
                      0 0 0 1px rgba(148, 190, 252, 0.15) inset,
                      inset 0 1px 0 rgba(255, 255, 255, 0.8),
                      inset 0 -1px 0 rgba(0, 0, 0, 0.05)
                    `,
                  backdropFilter: 'blur(30px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                  transform: openAccordion === index ? 'scale(1.01)' : 'scale(1)',
                  transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseEnter={(e) => {
                  if (openAccordion !== index) {
                    e.currentTarget.style.transform = 'scale(1.015) translateY(-2px)';
                    e.currentTarget.style.boxShadow = `
                      0 12px 40px rgba(148, 190, 252, 0.25),
                      0 0 0 1px rgba(148, 190, 252, 0.2) inset,
                      inset 0 1px 0 rgba(255, 255, 255, 0.9),
                      inset 0 -1px 0 rgba(0, 0, 0, 0.05),
                      0 0 50px rgba(148, 190, 252, 0.15)
                    `;
                    e.currentTarget.style.borderColor = 'rgba(148, 190, 252, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (openAccordion !== index) {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = `
                      0 8px 32px rgba(0, 0, 0, 0.12),
                      0 0 0 1px rgba(148, 190, 252, 0.15) inset,
                      inset 0 1px 0 rgba(255, 255, 255, 0.8),
                      inset 0 -1px 0 rgba(0, 0, 0, 0.05)
                    `;
                    e.currentTarget.style.borderColor = 'rgba(148, 190, 252, 0.25)';
                  }
                }}
              >
                {/* Premium Shimmer Effect */}
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                  style={{
                    transform: 'translateX(-100%)',
                    animation: openAccordion === index ? 'shimmer 3s infinite' : 'none'
                  }}
                ></div>

                {/* Accordion Header */}
                <button
                  onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                  className="w-full px-8 md:px-12 py-8 flex items-center justify-between text-left transition-all duration-500 relative group/header"
                  style={{
                    background: openAccordion === index 
                      ? 'linear-gradient(135deg, rgba(148, 190, 252, 0.12) 0%, rgba(148, 190, 252, 0.05) 50%, transparent 100%)'
                      : 'linear-gradient(135deg, transparent 0%, rgba(148, 190, 252, 0.02) 100%)'
                  }}
                >
                  <h3 style={{
                    fontFamily: 'ibrand, sans-serif',
                    fontSize: 'clamp(24px, 3vw, 36px)',
                    fontWeight: '600',
                    color: '#000000',
                    letterSpacing: '0.02em',
                    lineHeight: '1.3',
                    textShadow: openAccordion === index ? '0 2px 8px rgba(148, 190, 252, 0.2)' : 'none',
                    transition: 'all 0.3s ease'
                  }}>
                    {item.title}
                  </h3>
                  <div className="flex-shrink-0 ml-8 flex items-center justify-center rounded-full transition-all duration-500 group-hover/header:scale-110 group-hover/header:rotate-180" style={{
                    width: '40px',
                    height: '40px',
                    background: openAccordion === index 
                      ? 'linear-gradient(135deg, rgba(148, 190, 252, 0.3) 0%, rgba(148, 190, 252, 0.2) 50%, rgba(148, 190, 252, 0.15) 100%)'
                      : 'linear-gradient(135deg, rgba(148, 190, 252, 0.2) 0%, rgba(148, 190, 252, 0.1) 50%, rgba(148, 190, 252, 0.05) 100%)',
                    border: '2px solid',
                    borderColor: openAccordion === index ? 'rgba(148, 190, 252, 0.5)' : 'rgba(148, 190, 252, 0.3)',
                    boxShadow: openAccordion === index 
                      ? '0 4px 16px rgba(148, 190, 252, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
                      : '0 2px 8px rgba(148, 190, 252, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.5)'
                  }}>
                    {openAccordion === index ? (
                      <ChevronUp className="w-5 h-5 text-[#0a0e27] transition-all duration-500" style={{ strokeWidth: '2.5' }} />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#0a0e27] transition-all duration-500" style={{ strokeWidth: '2.5' }} />
                    )}
                  </div>
                </button>

                {/* Accordion Content */}
                {openAccordion === index && (
                  <div 
                    className="px-8 md:px-12 pb-10"
                    style={{
                      animation: 'fadeInUp 0.6s ease-out'
                    }}
                  >
                    {item.content.map((section, idx) => (
                      <div 
                        key={idx} 
                        className={idx > 0 ? 'mt-10' : ''} 
                        style={{
                          borderTop: idx > 0 ? '2px solid rgba(148, 190, 252, 0.25)' : 'none',
                          paddingTop: idx > 0 ? '28px' : '0',
                          animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`
                        }}
                      >
                        <p style={{
                          fontFamily: 'Manrope, sans-serif',
                          fontSize: 'clamp(17px, 2vw, 20px)',
                          lineHeight: '1.85',
                          color: '#1a1a2e',
                          marginBottom: '0',
                          letterSpacing: '0.015em'
                        }}>
                          <strong style={{
                            color: '#0a0e27',
                            fontWeight: '700',
                            fontSize: 'clamp(19px, 2.2vw, 22px)',
                            display: 'block',
                            marginBottom: '12px',
                            background: 'linear-gradient(135deg, #0a0e27 0%, #1a1a3e 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                          }}>{section.subtitle}</strong>
                          <span style={{ color: '#2d3748', display: 'block' }}>{section.text}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Decorative Arrow Between Accordions */}
              {index < accordionItems.length - 1 && (
                <div className="flex justify-center mb-8">
                  <div 
                    className="flex items-center justify-center rounded-full transition-all duration-500 hover:scale-125 hover:rotate-180 cursor-pointer group/arrow" 
                    style={{
                      width: '44px',
                      height: '44px',
                      background: 'linear-gradient(135deg, rgba(148, 190, 252, 0.25) 0%, rgba(148, 190, 252, 0.15) 50%, rgba(148, 190, 252, 0.1) 100%)',
                      border: '2px solid rgba(148, 190, 252, 0.4)',
                      backdropFilter: 'blur(15px)',
                      boxShadow: '0 6px 20px rgba(148, 190, 252, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
                      animation: 'float 3s ease-in-out infinite'
                    }}
                  >
                    <ArrowDown className="w-5 h-5 transition-all duration-500 group-hover/arrow:translate-y-1" style={{ color: '#94BEFC', strokeWidth: '2.5' }} />
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
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
          paddingTop: '80px',
          paddingBottom: '80px'
        }}
      >
        <div className="w-full max-w-[1000px] mx-auto px-4 md:px-8 lg:px-12 text-center relative z-10">
          {/* Main Heading */}
          <h2 style={{
            fontFamily: 'ibrand, sans-serif',
            fontSize: 'clamp(40px, 5vw, 64px)',
            fontWeight: '400',
            lineHeight: '120%',
            color: '#FFFFFF',
            marginBottom: '32px'
          }}>
            Security You Can See.<br />
            Compliance You Can Trust.
          </h2>

          {/* Subheading */}
          <p style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'clamp(18px, 2vw, 24px)',
            lineHeight: '150%',
            color: '#FFFFFF',
            marginBottom: '24px'
          }}>
            Eurocoin delivers more than speed and utility; it delivers safety, transparency, and trust.
          </p>

          {/* Supporting Text */}
          <p style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'clamp(16px, 1.5vw, 20px)',
            lineHeight: '160%',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '48px',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Whether you're an individual, a business, or a financial institution, you can transact, store value, and build with confidence.
          </p>

          {/* CTA Prompt */}
          <p style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: 'clamp(16px, 1.5vw, 20px)',
            lineHeight: '160%',
            color: '#FFFFFF',
            marginBottom: '32px'
          }}>
            Ready for digital money you can trust?
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            {/* Contact Us Button */}
            <button
              onClick={() => {
                window.location.href = '/contact-us';
              }}
              className="group relative flex items-center justify-center gap-4 rounded-full transition-all duration-700 ease-out overflow-hidden hover:scale-110 w-full sm:w-auto"
              style={{
                fontFamily: 'ibrand, sans-serif',
                fontSize: 'clamp(1rem, 1.3vw, 1.125rem)',
                fontWeight: '700',
                padding: '18px 36px',
                cursor: 'pointer',
                minWidth: '240px',
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
                e.currentTarget.style.transform = 'scale(1.1) translateY(-2px)';
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
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 ease-in-out"></span>
              <span className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative z-10 flex items-center gap-4" style={{ letterSpacing: '0.03em', color: '#000000', fontWeight: '700' }}>
                Contact Us
                <div className="relative z-10 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-900 via-black to-gray-900 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12" style={{
                  width: '40px',
                  height: '40px',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4), inset 0 2px 0 rgba(255, 255, 255, 0.15), inset 0 -2px 0 rgba(0, 0, 0, 0.3)',
                  border: '2px solid rgba(0, 0, 0, 0.2)'
                }}>
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-all duration-500" style={{ strokeWidth: '3', stroke: 'white', fill: 'none' }} />
                </div>
              </span>
            </button>

            {/* View Compliance Reports Button */}
            <button
              onClick={() => {
                window.open('#', '_blank'); // Replace with actual compliance reports URL
              }}
              className="group relative flex items-center justify-center gap-4 rounded-full transition-all duration-700 ease-out overflow-hidden hover:scale-110 w-full sm:w-auto"
              style={{
                fontFamily: 'ibrand, sans-serif',
                fontSize: 'clamp(1rem, 1.3vw, 1.125rem)',
                fontWeight: '700',
                padding: '18px 36px',
                cursor: 'pointer',
                minWidth: '240px',
                background: 'linear-gradient(135deg, rgba(148, 190, 252, 0.3) 0%, rgba(91, 159, 255, 0.35) 50%, rgba(148, 190, 252, 0.3) 100%)',
                border: '2.5px solid rgba(148, 190, 252, 0.7)',
                backdropFilter: 'blur(30px) saturate(180%)',
                WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                boxShadow: `
                  0 12px 48px rgba(148, 190, 252, 0.4),
                  0 0 0 2px rgba(255, 255, 255, 0.15) inset,
                  0 4px 16px rgba(0, 0, 0, 0.25),
                  0 0 40px rgba(148, 190, 252, 0.3),
                  0 0 80px rgba(148, 190, 252, 0.15)
                `,
                color: '#FFFFFF',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `
                  0 20px 64px rgba(148, 190, 252, 0.6),
                  0 0 0 3px rgba(255, 255, 255, 0.25) inset,
                  0 6px 24px rgba(0, 0, 0, 0.35),
                  0 0 60px rgba(148, 190, 252, 0.5),
                  0 0 100px rgba(148, 190, 252, 0.3),
                  0 0 140px rgba(148, 190, 252, 0.2)
                `;
                e.currentTarget.style.borderColor = 'rgba(148, 190, 252, 1)';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(148, 190, 252, 0.4) 0%, rgba(91, 159, 255, 0.45) 50%, rgba(148, 190, 252, 0.4) 100%)';
                e.currentTarget.style.transform = 'scale(1.1) translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `
                  0 12px 48px rgba(148, 190, 252, 0.4),
                  0 0 0 2px rgba(255, 255, 255, 0.15) inset,
                  0 4px 16px rgba(0, 0, 0, 0.25),
                  0 0 40px rgba(148, 190, 252, 0.3),
                  0 0 80px rgba(148, 190, 252, 0.15)
                `;
                e.currentTarget.style.borderColor = 'rgba(148, 190, 252, 0.7)';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(148, 190, 252, 0.3) 0%, rgba(91, 159, 255, 0.35) 50%, rgba(148, 190, 252, 0.3) 100%)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 ease-in-out"></span>
              <span className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative z-10 flex items-center gap-4" style={{ letterSpacing: '0.03em', color: '#FFFFFF', fontWeight: '700', textShadow: '0 3px 12px rgba(0, 0, 0, 0.4)' }}>
                View Compliance Reports
                <div className="relative z-10 flex items-center justify-center rounded-full bg-gradient-to-br from-white via-gray-50 to-white transition-all duration-500 group-hover:scale-125 group-hover:rotate-12" style={{
                  width: '40px',
                  height: '40px',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.3), inset 0 2px 0 rgba(255, 255, 255, 1), inset 0 -2px 0 rgba(0, 0, 0, 0.1)',
                  border: '2px solid rgba(0, 0, 0, 0.1)'
                }}>
                  <ArrowRight className="w-5 h-5 text-[#0a0e27] group-hover:translate-x-1 transition-all duration-500" style={{ strokeWidth: '3', stroke: '#0a0e27', fill: 'none' }} />
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