import React, { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ArrowRight, ChevronUp, ChevronDown, Check } from 'lucide-react';
import heroBackground from 'figma:asset/08506d8d54cc0c81255ff5a4a877d6d18be5c1f9.png';
import partnerLogos from 'figma:asset/ee2130bfeeb33e6e4cb9524c18fbafe1a9b73937.png';
import fundingLogos from 'figma:asset/d536fdd327324e286f3a100ebf44c77a80080882.png';
import logo1 from 'figma:asset/79e53e43f54955baa10a6160005e96098961fed9.png';
import logo2 from 'figma:asset/5cccc936053070237625c05852495dfe3beb848b.png';
import logo3 from 'figma:asset/7f315a52bb09ed5f877f1a0a77b82c76057ed929.png';
import logo4 from 'figma:asset/eed24f9db749ab49164a4588f07e92a88624f3c1.png';
import logo5 from 'figma:asset/466525b1ecc7324ec3ac30777c45e7aa8bf67fea.png';
import logo6 from 'figma:asset/143bca35117a640a6323db2a894ce91290ae4bcc.png';
import cardsBgImage from 'figma:asset/b663ed1323f80faa8a6d5936d660c511164a294f.png';
import card1Image from 'figma:asset/11b558fc972dc3b9a4cbcd6367bd09be0cf71a78.png';
import card2Image from 'figma:asset/10970c32021bbc1010b86cb928bfac655bb134f7.png';
import accordionBgImage from 'figma:asset/04f124b1ead92d98b6db78df6f0c51beb8b3bf59.png';
import ctaLightBg from 'figma:asset/368edee03670366645b817d2ba67a0266e98a0e0.png';
import ctaDarkBg from 'figma:asset/27598f1834d1dbac7746ce2d7958d635945b7122.png';

export function PartnersAndIntegrations() {
  const [openSection, setOpenSection] = useState<string | null>('enterprise');

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-[#020219]">
      <Header />
      
      {/* Hero Section with Background Effects */}
      <section 
        className="relative overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: 'clamp(600px, 90vh, 100vh)',
          paddingTop: 'clamp(120px, 18vh, 180px)',
          paddingBottom: 'clamp(60px, 10vh, 100px)'
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020219]/60 via-[#020219]/40 to-[#020219]/80 pointer-events-none"></div>

        <div className="w-full max-w-[1440px] mx-auto text-center relative z-10 px-4 sm:px-6 md:px-8 lg:px-12">
          {/* Badge */}
          <div className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full mb-8 sm:mb-16 shadow-lg" style={{
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1.5px solid rgba(148, 190, 252, 0.3)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 20px rgba(148, 190, 252, 0.15)'
          }}>
            <span style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'clamp(13px, 3.5vw, 20px)',
              fontWeight: '700',
              background: 'linear-gradient(90deg, #94BEFC 0%, #FFFFFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '0.5px'
            }}>
              Partners & Integrations
            </span>
          </div>

          {/* Main Heading */}
          <h1 style={{
            fontFamily: 'ibrand, sans-serif',
            fontSize: 'clamp(32px, 8vw, 72px)',
            fontWeight: '400',
            lineHeight: '1.1',
            background: 'linear-gradient(90deg, #FFFFFF 22.19%, #B8D5FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: 'clamp(2.5rem, 7vw, 6.25rem)',
            marginTop: 'clamp(1rem, 3vw, 2rem)',
            maxWidth: '1013px',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: '0.5rem',
            paddingRight: '0.5rem',
            textShadow: '0 0 30px rgba(184, 213, 255, 0.2)'
          }}>
            Building Europe's Trusted Digital Finance Network
          </h1>

          {/* Partnerships Section - Carousel Logo Display */}
          <div className="mt-12 sm:mt-20 mb-12 sm:mb-20 relative">
            {(() => {
              const partners = [
                { name: 'Partner 1', logo: logo1 },
                { name: 'Partner 2', logo: logo2 },
                { name: 'Partner 3', logo: logo3 },
                { name: 'Partner 4', logo: logo4 },
                { name: 'Partner 5', logo: logo5 },
                { name: 'Partner 6', logo: logo6 },
              ];
              const duplicatedPartners = [...partners, ...partners];
              
              return (
                <div className="w-full max-w-[90rem] mx-auto px-4 md:px-6 overflow-hidden">
                  <div className="relative w-full" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                    <div 
                      className="flex"
                      style={{
                        animation: 'scrollPartners 30s linear infinite',
                        width: 'max-content'
                      }}
                    >
                      {duplicatedPartners.map((partner, index) => (
                        <div
                          key={index}
                          className="flex-shrink-0 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
                          style={{ 
                            width: 'clamp(90px, 16vw, 160px)',
                            marginRight: 'clamp(0.5rem, 1.5vw, 1rem)',
                          }}
                        >
                          {partner.logo ? (
                            <div className="w-full flex items-center justify-center" style={{ height: 'clamp(1.75rem, 4vw, 3rem)' }}>
                              <img 
                                src={partner.logo} 
                                alt={partner.name} 
                                className="max-w-full max-h-full object-contain" 
                                style={{ maxWidth: '100%', maxHeight: '100%' }}
                              />
                            </div>
                          ) : (
                            <div className="w-full bg-white/10 rounded-lg flex items-center justify-center border border-white/20" style={{ height: 'clamp(1.75rem, 4vw, 3rem)' }}>
                              <span className="text-white/70 text-xs md:text-sm font-medium px-3 md:px-4 text-center">
                                {partner.name}
                              </span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>

          <style>{`
            @keyframes scrollPartners {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}</style>

          {/* Funding Section */}
          <div className="mt-12 sm:mt-32 pt-6 sm:pt-16 border-t border-white/20" style={{
            boxShadow: '0 -1px 0 rgba(255, 255, 255, 0.05)'
          }}>
            <p style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'clamp(11px, 2.8vw, 18px)',
              letterSpacing: 'clamp(0.15em, 0.6vw, 0.35em)',
              color: '#FFFFFF',
              marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)',
              textTransform: 'uppercase',
              paddingLeft: '1rem',
              paddingRight: '1rem',
              fontWeight: '600',
              opacity: 0.9
            }}>
              EUROCOIN/BILLON GROUP TECHNOLOGY FUNDING
            </p>

            {/* Funding Logos */}
            <div className="flex items-center justify-center pb-6 sm:pb-12 px-2 sm:px-4">
              <img 
                src={fundingLogos} 
                alt="Funding Partners" 
                className="w-full"
                style={{
                  maxWidth: 'clamp(800px, 95vw, 1400px)',
                  filter: 'brightness(1.3) contrast(1.1)',
                  opacity: 0.95
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Two Image Cards Section */}
      <section 
        className="relative overflow-hidden flex items-center justify-center" 
        style={{
          backgroundImage: `url(${cardsBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          paddingTop: 'clamp(60px, 12vw, 100px)',
          paddingBottom: 'clamp(60px, 12vw, 100px)'
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#5646D4]/80 via-[#0D0042]/70 to-[#01010C]/90 pointer-events-none"></div>

        <div className="w-full flex justify-center relative z-10">
          <div className="w-full max-w-[1200px] px-4 sm:px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Card 1 - Powering New Financial Ecosystem */}
            <div className="rounded-[20px] md:rounded-[24px] overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-[1.02]" style={{
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)'
            }}>
              {/* Image with Overlay */}
              <div className="h-[220px] sm:h-[240px] relative overflow-hidden">
                <img 
                  src={card1Image} 
                  alt="Business Team Meeting" 
                  className="w-full h-full object-cover"
                />
                {/* Purple/Blue Color Overlay */}
                <div className="absolute inset-0" style={{
                  background: 'linear-gradient(173.48deg, rgba(165, 191, 255, 0.4) 26.12%, rgba(111, 75, 255, 0.5) 46.18%, rgba(13, 0, 66, 0.6) 93.99%)',
                  mixBlendMode: 'color'
                }}></div>
                {/* Gradient Fade Bottom */}
                <div className="absolute inset-0" style={{
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.1) 100%)'
                }}></div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7 bg-gradient-to-b from-white/8 via-white/5 to-transparent" style={{
                backdropFilter: 'blur(10px)'
              }}>
                <h3 style={{
                  fontFamily: 'ibrand, sans-serif',
                  fontSize: 'clamp(20px, 4vw, 28px)',
                  lineHeight: '130%',
                  background: 'linear-gradient(90deg, #FFFFFF 22.19%, #B8D5FF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: 'clamp(14px, 2.5vw, 16px)',
                  fontWeight: '500'
                }}>
                  Powering a New Financial Ecosystem
                </h3>
                <p style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 'clamp(15px, 2.8vw, 18px)',
                  lineHeight: '160%',
                  color: '#E5E5E5',
                  opacity: 0.95
                }}>
                  Eurocoin isn't just a technology — it's a movement, powered by trusted partners and institutional relationships across banking, enterprise, and digital innovation. Our network is the backbone of real-world adoption, bridging the regulated world of finance with the limitless potential of programmable money.
                </p>
              </div>
            </div>

            {/* Card 2 - Strategic Technology Partnerships */}
            <div className="rounded-[20px] md:rounded-[24px] overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-[1.02]" style={{
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)'
            }}>
              {/* Image with Overlay */}
              <div className="h-[220px] sm:h-[240px] relative overflow-hidden">
                <img 
                  src={card2Image} 
                  alt="Digital Technology Network" 
                  className="w-full h-full object-cover"
                />
                {/* Purple/Blue Color Overlay */}
                <div className="absolute inset-0" style={{
                  background: 'linear-gradient(173.48deg, rgba(165, 191, 255, 0.4) 26.12%, rgba(111, 75, 255, 0.5) 46.18%, rgba(13, 0, 66, 0.6) 93.99%)',
                  mixBlendMode: 'color'
                }}></div>
                {/* Gradient Fade Bottom */}
                <div className="absolute inset-0" style={{
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.1) 100%)'
                }}></div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7 bg-gradient-to-b from-white/8 via-white/5 to-transparent" style={{
                backdropFilter: 'blur(10px)'
              }}>
                <h3 style={{
                  fontFamily: 'ibrand, sans-serif',
                  fontSize: 'clamp(20px, 4vw, 28px)',
                  lineHeight: '130%',
                  background: 'linear-gradient(90deg, #FFFFFF 22.19%, #B8D5FF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: 'clamp(14px, 2.5vw, 16px)',
                  fontWeight: '500'
                }}>
                  Strategic Technology Partnerships
                </h3>
                <p style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 'clamp(15px, 2.8vw, 18px)',
                  fontWeight: '600',
                  lineHeight: '160%',
                  color: '#E5E5E5',
                  opacity: 0.95
                }}>
                  <strong style={{ color: '#B8D5FF', fontWeight: '700' }}>Billon Group</strong> — Eurocoin is built on the award-winning Billon Unified DLT System — a platform recognized for regulatory rigor, speed, and energy efficiency. Billon's enterprise track record forms the foundation of Eurocoin's compliance and credibility.
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section 
        className="relative overflow-hidden flex items-center justify-center" 
        style={{
          backgroundImage: `url(${accordionBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          paddingTop: 'clamp(60px, 12vw, 120px)',
          paddingBottom: 'clamp(60px, 12vw, 120px)'
        }}
      >
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(15px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes glowPulse {
            0%, 100% {
              box-shadow: 0 0 20px rgba(121, 97, 255, 0.3), 0 0 40px rgba(121, 97, 255, 0.2);
            }
            50% {
              box-shadow: 0 0 30px rgba(121, 97, 255, 0.5), 0 0 60px rgba(121, 97, 255, 0.3);
            }
          }
          .accordion-item {
            animation: slideDown 0.4s ease-out;
          }
          .accordion-content {
            animation: slideDown 0.3s ease-out;
          }
          .accordion-list-item {
            animation: fadeInUp 0.4s ease-out;
            animation-fill-mode: both;
          }
          .accordion-check-icon {
            animation: glowPulse 2s ease-in-out infinite;
          }
        `}} />
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
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
              Strategic Partnerships & Integrations
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
              paddingRight: '1rem'
            }}>
              Discover how Eurocoin connects with leading enterprises, financial institutions, and regulatory bodies across Europe
            </p>
          </div>

          <div className="space-y-4 md:space-y-6 lg:space-y-8" style={{ marginTop: 'clamp(1rem, 3vw, 2rem)' }}>
          {/* Enterprise Adoption & Industry Leaders */}
          <div 
            className="accordion-item overflow-hidden transition-all duration-500 group"
            style={{
              background: 'linear-gradient(135deg, rgba(10, 10, 30, 0.95) 0%, rgba(20, 15, 45, 0.9) 100%)',
              backdropFilter: 'blur(16px)',
              border: '2px solid rgba(121, 97, 255, 0.3)',
              borderRadius: 'clamp(24px, 5vw, 32px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(121, 97, 255, 0.1)',
              marginBottom: 'clamp(1rem, 2.5vw, 1.5rem)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(121, 97, 255, 0.6)';
              e.currentTarget.style.boxShadow = '0 12px 48px rgba(121, 97, 255, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 0 0 1px rgba(121, 97, 255, 0.2)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(121, 97, 255, 0.3)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(121, 97, 255, 0.1)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <button
              onClick={() => toggleSection('enterprise')}
              className="w-full px-10 sm:px-12 md:px-16 lg:px-24 py-8 sm:py-9 md:py-11 lg:py-14 flex items-center justify-between text-left transition-all duration-300 relative overflow-hidden"
              style={{
                background: openSection === 'enterprise' 
                  ? 'linear-gradient(135deg, rgba(121, 97, 255, 0.15) 0%, rgba(86, 70, 212, 0.1) 100%)'
                  : 'transparent'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 style={{
                fontFamily: 'ibrand, sans-serif',
                fontSize: 'clamp(18px, 4vw, 36px)',
                fontWeight: '500',
                lineHeight: '120%',
                background: 'linear-gradient(135deg, #FFFFFF 0%, #B8D5FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                paddingRight: 'clamp(2rem, 4vw, 2.5rem)',
                paddingLeft: 'clamp(0.75rem, 1.5vw, 1.25rem)',
                position: 'relative',
                zIndex: 1,
                transition: 'all 0.3s ease'
              }}>
                Enterprise Adoption & Industry Leaders
              </h3>
              <div className="relative z-10 transition-transform duration-300" style={{
                transform: openSection === 'enterprise' ? 'rotate(180deg)' : 'rotate(0deg)'
              }}>
                {openSection === 'enterprise' ? (
                  <ChevronUp className="w-6 h-6 sm:w-8 sm:h-8 text-[#B8D5FF] flex-shrink-0 transition-all duration-300" style={{
                    filter: 'drop-shadow(0 0 8px rgba(184, 213, 255, 0.5))'
                  }} />
                ) : (
                  <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-[#B8D5FF] flex-shrink-0 transition-all duration-300" />
                )}
              </div>
            </button>
            
            {openSection === 'enterprise' && (
              <div className="accordion-content px-8 sm:px-12 md:px-20 lg:px-24 pb-10 sm:pb-14 md:pb-20 pt-8 sm:pt-10 md:pt-12 border-t border-white/10" style={{
                background: 'linear-gradient(180deg, rgba(121, 97, 255, 0.08) 0%, transparent 100%)',
                marginTop: 'clamp(0.5rem, 1.5vw, 1rem)'
              }}>
                <p style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 'clamp(14px, 2.5vw, 16px)',
                  fontWeight: '400',
                  lineHeight: '160%',
                  color: 'rgba(255, 255, 255, 0.85)',
                  marginBottom: 'clamp(2rem, 5vw, 3rem)',
                  paddingLeft: 'clamp(1rem, 2vw, 1.5rem)',
                  paddingRight: 'clamp(1rem, 2vw, 1.5rem)'
                }}>
                  Eurocoin's underlying technology is trusted by global organizations, demonstrating scalability and trust
                </p>
                
                <div className="space-y-6 sm:space-y-8 md:space-y-10" style={{ paddingLeft: 'clamp(0.5rem, 1.5vw, 1rem)', paddingRight: 'clamp(0.5rem, 1.5vw, 1rem)' }}>
                  {[
                    {
                      title: 'Raiffeisen Bank International (RBI)',
                      desc: 'Pioneered digital asset tokenization, automated letter of credit processes, and advanced fund management on Billon\'s platform.'
                    },
                    {
                      title: 'FIS Global',
                      desc: 'Stress-tested, commercially implemented Billon\'s DLT, validating performance for global banking and settlement.'
                    },
                    {
                      title: 'Philip Morris International',
                      desc: 'Uses the technology for real-time, cross-border retailer incentive payments.'
                    },
                    {
                      title: 'Tauron, BIK, Ergo Hestia',
                      desc: 'Powering secure document management, mass payouts, and insurance claims proving versatility across financial and enterprise verticals.'
                    }
                  ].map((item, i) => (
                    <div 
                      key={i} 
                      className="accordion-list-item flex items-start gap-4 sm:gap-6 p-5 sm:p-7 md:p-8 lg:p-9 rounded-lg transition-all duration-300 hover:bg-white/5"
                      style={{
                        animationDelay: `${i * 0.1}s`,
                        marginBottom: 'clamp(0.75rem, 2vw, 1.25rem)',
                        marginLeft: 'clamp(0.5rem, 1.5vw, 1rem)',
                        marginRight: 'clamp(0.5rem, 1.5vw, 1rem)'
                      }}
                    >
                      <div className="accordion-check-icon flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mt-0.5 transition-all duration-300" style={{
                        background: 'linear-gradient(135deg, #7961FF 0%, #5B4FD9 100%)',
                        border: '2px solid rgba(184, 213, 255, 0.3)'
                      }}>
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" style={{ strokeWidth: '3' }} />
                      </div>
                      <p style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: 'clamp(14px, 2.5vw, 18px)',
                        fontWeight: '400',
                        lineHeight: '160%',
                        color: 'rgba(255, 255, 255, 0.9)',
                        flex: 1
                      }}>
                        <strong style={{ color: '#B8D5FF', fontWeight: '600' }}>{item.title}</strong> {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Financial & Payment Infrastructure */}
          <div 
            className="accordion-item overflow-hidden transition-all duration-500 group"
            style={{
              background: 'linear-gradient(135deg, rgba(10, 10, 30, 0.95) 0%, rgba(20, 15, 45, 0.9) 100%)',
              backdropFilter: 'blur(16px)',
              border: '2px solid rgba(121, 97, 255, 0.3)',
              borderRadius: 'clamp(24px, 5vw, 32px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(121, 97, 255, 0.1)',
              marginBottom: 'clamp(1rem, 2.5vw, 1.5rem)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(121, 97, 255, 0.6)';
              e.currentTarget.style.boxShadow = '0 12px 48px rgba(121, 97, 255, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 0 0 1px rgba(121, 97, 255, 0.2)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(121, 97, 255, 0.3)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(121, 97, 255, 0.1)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <button
              onClick={() => toggleSection('payment')}
              className="w-full px-10 sm:px-12 md:px-16 lg:px-24 py-8 sm:py-9 md:py-11 lg:py-14 flex items-center justify-between text-left transition-all duration-300 relative overflow-hidden"
              style={{
                background: openSection === 'payment' 
                  ? 'linear-gradient(135deg, rgba(121, 97, 255, 0.15) 0%, rgba(86, 70, 212, 0.1) 100%)'
                  : 'transparent'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 style={{
                fontFamily: 'ibrand, sans-serif',
                fontSize: 'clamp(18px, 4vw, 36px)',
                fontWeight: '500',
                lineHeight: '120%',
                background: 'linear-gradient(135deg, #FFFFFF 0%, #B8D5FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                paddingRight: 'clamp(2rem, 4vw, 2.5rem)',
                paddingLeft: 'clamp(0.75rem, 1.5vw, 1.25rem)',
                position: 'relative',
                zIndex: 1
              }}>
                Financial & Payment Infrastructure
              </h3>
              <div className="relative z-10 transition-transform duration-300" style={{
                transform: openSection === 'payment' ? 'rotate(180deg)' : 'rotate(0deg)'
              }}>
                {openSection === 'payment' ? (
                  <ChevronUp className="w-6 h-6 sm:w-8 sm:h-8 text-[#B8D5FF] flex-shrink-0 transition-all duration-300" style={{
                    filter: 'drop-shadow(0 0 8px rgba(184, 213, 255, 0.5))'
                  }} />
                ) : (
                  <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-[#B8D5FF] flex-shrink-0 transition-all duration-300" />
                )}
              </div>
            </button>
            
            {openSection === 'payment' && (
              <div className="accordion-content px-8 sm:px-12 md:px-20 lg:px-24 pb-10 sm:pb-14 md:pb-20 pt-8 sm:pt-10 md:pt-12 border-t border-white/10" style={{
                background: 'linear-gradient(180deg, rgba(121, 97, 255, 0.08) 0%, transparent 100%)',
                marginTop: 'clamp(0.5rem, 1.5vw, 1rem)'
              }}>
                <div className="space-y-6 sm:space-y-8 md:space-y-10" style={{ paddingLeft: 'clamp(0.5rem, 1.5vw, 1rem)', paddingRight: 'clamp(0.5rem, 1.5vw, 1rem)' }}>
                  {[
                    {
                      title: 'SEPA & SWIFT',
                      desc: 'Direct membership and dedicated Bank Identifier Code (BIC) enable seamless euro-denominated transactions and cross-border settlements.'
                    },
                    {
                      title: 'CENTROlink',
                      desc: 'Expanded connectivity for pan-European payments and integration with local banks.'
                    },
                    {
                      title: 'MetaMask & ERC-20 Compatibility',
                      desc: 'Instant access for Web3 users and DeFi platforms, maximizing reach and interoperability.'
                    }
                  ].map((item, i) => (
                    <div 
                      key={i} 
                      className="accordion-list-item flex items-start gap-4 sm:gap-6 p-5 sm:p-7 md:p-8 lg:p-9 rounded-lg transition-all duration-300 hover:bg-white/5"
                      style={{
                        animationDelay: `${i * 0.1}s`,
                        marginBottom: 'clamp(0.75rem, 2vw, 1.25rem)',
                        marginLeft: 'clamp(0.5rem, 1.5vw, 1rem)',
                        marginRight: 'clamp(0.5rem, 1.5vw, 1rem)'
                      }}
                    >
                      <div className="accordion-check-icon flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mt-0.5 transition-all duration-300" style={{
                        background: 'linear-gradient(135deg, #7961FF 0%, #5B4FD9 100%)',
                        border: '2px solid rgba(184, 213, 255, 0.3)'
                      }}>
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" style={{ strokeWidth: '3' }} />
                      </div>
                      <p style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: 'clamp(14px, 2.5vw, 18px)',
                        fontWeight: '400',
                        lineHeight: '160%',
                        color: 'rgba(255, 255, 255, 0.9)',
                        flex: 1
                      }}>
                        <strong style={{ color: '#B8D5FF', fontWeight: '600' }}>{item.title}</strong> — {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Government & Regulatory Partnerships */}
          <div 
            className="accordion-item overflow-hidden transition-all duration-500 group"
            style={{
              background: 'linear-gradient(135deg, rgba(10, 10, 30, 0.95) 0%, rgba(20, 15, 45, 0.9) 100%)',
              backdropFilter: 'blur(16px)',
              border: '2px solid rgba(121, 97, 255, 0.3)',
              borderRadius: 'clamp(24px, 5vw, 32px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(121, 97, 255, 0.1)',
              marginBottom: 'clamp(1rem, 2.5vw, 1.5rem)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(121, 97, 255, 0.6)';
              e.currentTarget.style.boxShadow = '0 12px 48px rgba(121, 97, 255, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 0 0 1px rgba(121, 97, 255, 0.2)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(121, 97, 255, 0.3)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(121, 97, 255, 0.1)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <button
              onClick={() => toggleSection('regulatory')}
              className="w-full px-10 sm:px-12 md:px-16 lg:px-24 py-8 sm:py-9 md:py-11 lg:py-14 flex items-center justify-between text-left transition-all duration-300 relative overflow-hidden"
              style={{
                background: openSection === 'regulatory' 
                  ? 'linear-gradient(135deg, rgba(121, 97, 255, 0.15) 0%, rgba(86, 70, 212, 0.1) 100%)'
                  : 'transparent'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 style={{
                fontFamily: 'ibrand, sans-serif',
                fontSize: 'clamp(18px, 4vw, 36px)',
                fontWeight: '500',
                lineHeight: '120%',
                background: 'linear-gradient(135deg, #FFFFFF 0%, #B8D5FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                paddingRight: 'clamp(2rem, 4vw, 2.5rem)',
                paddingLeft: 'clamp(0.75rem, 1.5vw, 1.25rem)',
                position: 'relative',
                zIndex: 1
              }}>
                Government & Regulatory Partnerships
              </h3>
              <div className="relative z-10 transition-transform duration-300" style={{
                transform: openSection === 'regulatory' ? 'rotate(180deg)' : 'rotate(0deg)'
              }}>
                {openSection === 'regulatory' ? (
                  <ChevronUp className="w-6 h-6 sm:w-8 sm:h-8 text-[#B8D5FF] flex-shrink-0 transition-all duration-300" style={{
                    filter: 'drop-shadow(0 0 8px rgba(184, 213, 255, 0.5))'
                  }} />
                ) : (
                  <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-[#B8D5FF] flex-shrink-0 transition-all duration-300" />
                )}
              </div>
            </button>
            
            {openSection === 'regulatory' && (
              <div className="accordion-content px-8 sm:px-12 md:px-20 lg:px-24 pb-10 sm:pb-14 md:pb-20 pt-8 sm:pt-10 md:pt-12 border-t border-white/10" style={{
                background: 'linear-gradient(180deg, rgba(121, 97, 255, 0.08) 0%, transparent 100%)',
                marginTop: 'clamp(0.5rem, 1.5vw, 1rem)'
              }}>
                <p style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 'clamp(14px, 2.5vw, 18px)',
                  fontWeight: '400',
                  lineHeight: '160%',
                  color: 'rgba(255, 255, 255, 0.85)',
                  marginBottom: 'clamp(2rem, 5vw, 3rem)',
                  paddingLeft: 'clamp(1rem, 2vw, 1.5rem)',
                  paddingRight: 'clamp(1rem, 2vw, 1.5rem)'
                }}>
                  Eurocoin bridges traditional finance and regulation while maintaining full compliance across European jurisdictions.
                </p>
                
                <div className="space-y-6 sm:space-y-8 md:space-y-10" style={{ paddingLeft: 'clamp(0.5rem, 1.5vw, 1rem)', paddingRight: 'clamp(0.5rem, 1.5vw, 1rem)' }}>
                  {[
                    {
                      title: 'MiCA Compliance Framework',
                      desc: 'Fully aligned with EU\'s Markets in Crypto-Assets regulation for stablecoin issuance and distribution.'
                    },
                    {
                      title: 'KNF Licensing (Poland)',
                      desc: 'Electronic Money Institution license ensures regulatory adherence and consumer protection.'
                    },
                    {
                      title: 'European Banking Authority (EBA)',
                      desc: 'Following guidelines for digital asset service providers and payment institutions.'
                    }
                  ].map((item, i) => (
                    <div 
                      key={i} 
                      className="accordion-list-item flex items-start gap-4 sm:gap-6 p-5 sm:p-7 md:p-8 lg:p-9 rounded-lg transition-all duration-300 hover:bg-white/5"
                      style={{
                        animationDelay: `${i * 0.1}s`,
                        marginBottom: 'clamp(0.75rem, 2vw, 1.25rem)',
                        marginLeft: 'clamp(0.5rem, 1.5vw, 1rem)',
                        marginRight: 'clamp(0.5rem, 1.5vw, 1rem)'
                      }}
                    >
                      <div className="accordion-check-icon flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mt-0.5 transition-all duration-300" style={{
                        background: 'linear-gradient(135deg, #7961FF 0%, #5B4FD9 100%)',
                        border: '2px solid rgba(184, 213, 255, 0.3)'
                      }}>
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" style={{ strokeWidth: '3' }} />
                      </div>
                      <p style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: 'clamp(14px, 2.5vw, 18px)',
                        fontWeight: '400',
                        lineHeight: '160%',
                        color: 'rgba(255, 255, 255, 0.9)',
                        flex: 1
                      }}>
                        <strong style={{ color: '#B8D5FF', fontWeight: '600' }}>{item.title}</strong> — {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Ecosystem Expansion: Open Integration */}
          <div 
            className="accordion-item overflow-hidden transition-all duration-500 group"
            style={{
              background: 'linear-gradient(135deg, rgba(10, 10, 30, 0.95) 0%, rgba(20, 15, 45, 0.9) 100%)',
              backdropFilter: 'blur(16px)',
              border: '2px solid rgba(121, 97, 255, 0.3)',
              borderRadius: 'clamp(24px, 5vw, 32px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(121, 97, 255, 0.1)',
              marginBottom: 'clamp(1rem, 2.5vw, 1.5rem)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(121, 97, 255, 0.6)';
              e.currentTarget.style.boxShadow = '0 12px 48px rgba(121, 97, 255, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 0 0 1px rgba(121, 97, 255, 0.2)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(121, 97, 255, 0.3)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 0 0 1px rgba(121, 97, 255, 0.1)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <button
              onClick={() => toggleSection('ecosystem')}
              className="w-full px-10 sm:px-12 md:px-16 lg:px-24 py-8 sm:py-9 md:py-11 lg:py-14 flex items-center justify-between text-left transition-all duration-300 relative overflow-hidden"
              style={{
                background: openSection === 'ecosystem' 
                  ? 'linear-gradient(135deg, rgba(121, 97, 255, 0.15) 0%, rgba(86, 70, 212, 0.1) 100%)'
                  : 'transparent'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <h3 style={{
                fontFamily: 'ibrand, sans-serif',
                fontSize: 'clamp(18px, 4vw, 36px)',
                fontWeight: '500',
                lineHeight: '120%',
                background: 'linear-gradient(135deg, #FFFFFF 0%, #B8D5FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                paddingRight: 'clamp(2rem, 4vw, 2.5rem)',
                paddingLeft: 'clamp(0.75rem, 1.5vw, 1.25rem)',
                position: 'relative',
                zIndex: 1
              }}>
                Ecosystem Expansion: Open Integration
              </h3>
              <div className="relative z-10 transition-transform duration-300" style={{
                transform: openSection === 'ecosystem' ? 'rotate(180deg)' : 'rotate(0deg)'
              }}>
                {openSection === 'ecosystem' ? (
                  <ChevronUp className="w-6 h-6 sm:w-8 sm:h-8 text-[#B8D5FF] flex-shrink-0 transition-all duration-300" style={{
                    filter: 'drop-shadow(0 0 8px rgba(184, 213, 255, 0.5))'
                  }} />
                ) : (
                  <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-[#B8D5FF] flex-shrink-0 transition-all duration-300" />
                )}
              </div>
            </button>
            
            {openSection === 'ecosystem' && (
              <div className="accordion-content px-8 sm:px-12 md:px-20 lg:px-24 pb-10 sm:pb-14 md:pb-20 pt-8 sm:pt-10 md:pt-12 border-t border-white/10" style={{
                background: 'linear-gradient(180deg, rgba(121, 97, 255, 0.08) 0%, transparent 100%)',
                marginTop: 'clamp(0.5rem, 1.5vw, 1rem)'
              }}>
                <p style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 'clamp(14px, 2.5vw, 18px)',
                  fontWeight: '400',
                  lineHeight: '160%',
                  color: 'rgba(255, 255, 255, 0.85)',
                  marginBottom: 'clamp(2rem, 5vw, 3rem)',
                  paddingLeft: 'clamp(1rem, 2vw, 1.5rem)',
                  paddingRight: 'clamp(1rem, 2vw, 1.5rem)'
                }}>
                  Built for interoperability across multiple blockchain ecosystems and traditional finance rails.
                </p>
                
                <div className="space-y-6 sm:space-y-8 md:space-y-10" style={{ paddingLeft: 'clamp(0.5rem, 1.5vw, 1rem)', paddingRight: 'clamp(0.5rem, 1.5vw, 1rem)' }}>
                  {[
                    {
                      title: 'Multi-chain Support',
                      desc: 'Deploy and transact across Ethereum, Polygon, and other EVM-compatible chains.'
                    },
                    {
                      title: 'Open APIs & Developer Tools',
                      desc: 'Comprehensive documentation, SDKs, and sandbox environments for seamless integration.'
                    },
                    {
                      title: 'DeFi Protocol Integrations',
                      desc: 'Compatible with leading decentralized exchanges, lending protocols, and yield platforms.'
                    },
                    {
                      title: 'Enterprise Middleware',
                      desc: 'White-label solutions and plug-and-play modules for corporate treasury and payment systems.'
                    }
                  ].map((item, i) => (
                    <div 
                      key={i} 
                      className="accordion-list-item flex items-start gap-4 sm:gap-6 p-5 sm:p-7 md:p-8 lg:p-9 rounded-lg transition-all duration-300 hover:bg-white/5"
                      style={{
                        animationDelay: `${i * 0.1}s`,
                        marginBottom: 'clamp(0.75rem, 2vw, 1.25rem)',
                        marginLeft: 'clamp(0.5rem, 1.5vw, 1rem)',
                        marginRight: 'clamp(0.5rem, 1.5vw, 1rem)'
                      }}
                    >
                      <div className="accordion-check-icon flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mt-0.5 transition-all duration-300" style={{
                        background: 'linear-gradient(135deg, #7961FF 0%, #5B4FD9 100%)',
                        border: '2px solid rgba(184, 213, 255, 0.3)'
                      }}>
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" style={{ strokeWidth: '3' }} />
                      </div>
                      <p style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: 'clamp(14px, 2.5vw, 18px)',
                        fontWeight: '400',
                        lineHeight: '160%',
                        color: 'rgba(255, 255, 255, 0.9)',
                        flex: 1
                      }}>
                        <strong style={{ color: '#B8D5FF', fontWeight: '600' }}>{item.title}</strong> — {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          </div>

        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${ctaDarkBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-center" style={{ 
          paddingTop: 'clamp(80px, 15vw, 150px)', 
          paddingBottom: 'clamp(80px, 15vw, 150px)' 
        }}>
          <div className="w-full max-w-[1400px] mx-auto text-center">
            {/* Main Heading */}
            <h2 style={{
              fontFamily: 'ibrand, sans-serif',
              fontSize: 'clamp(28px, 6vw, 72px)',
              fontWeight: '400',
              lineHeight: '110%',
              background: 'linear-gradient(90deg, #FFFFFF 0%, #B8D5FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: 'clamp(2rem, 5vw, 3rem)',
              paddingLeft: '1rem',
              paddingRight: '1rem'
            }}>
              Resilient. Built for Everyone.
            </h2>

            {/* Subtitle */}
            <p style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'clamp(16px, 3vw, 28px)',
              fontWeight: '400',
              lineHeight: '150%',
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: 'clamp(2.5rem, 6vw, 4rem)',
              maxWidth: '1000px',
              marginLeft: 'auto',
              marginRight: 'auto',
              paddingLeft: '1rem',
              paddingRight: '1rem'
            }}>
              See how simple it is to integrate, transact, and build on the Eurocoin network.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 md:gap-6 px-2">
              {/* Primary Button - Contact Us */}
              <button
                onClick={() => {
                  window.location.href = '/contact-us';
                }}
                className="group relative flex items-center justify-center gap-3 md:gap-4 rounded-full transition-all duration-500 ease-out overflow-hidden hover:scale-105 active:scale-95 w-full sm:w-auto sm:flex-1"
                style={{
                  fontFamily: 'ibrand, sans-serif',
                  fontSize: 'clamp(0.95rem, 2.5vw, 1.125rem)',
                  fontWeight: '700',
                  padding: 'clamp(16px, 4vw, 20px) clamp(28px, 6vw, 40px)',
                  cursor: 'pointer',
                  minHeight: '52px',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)',
                  border: '2px solid rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: `
                    0 8px 32px rgba(0, 0, 0, 0.12),
                    0 0 0 1px rgba(255, 255, 255, 0.5) inset,
                    inset 0 1px 0 rgba(255, 255, 255, 0.9),
                    inset 0 -1px 0 rgba(0, 0, 0, 0.05)
                  `,
                  color: '#000000',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `
                    0 12px 48px rgba(0, 0, 0, 0.18),
                    0 0 0 2px rgba(255, 255, 255, 0.6) inset,
                    inset 0 1px 0 rgba(255, 255, 255, 1),
                    inset 0 -1px 0 rgba(0, 0, 0, 0.08),
                    0 0 40px rgba(255, 255, 255, 0.3)
                  `;
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 1)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.95) 100%)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `
                    0 8px 32px rgba(0, 0, 0, 0.12),
                    0 0 0 1px rgba(255, 255, 255, 0.5) inset,
                    inset 0 1px 0 rgba(255, 255, 255, 0.9),
                    inset 0 -1px 0 rgba(0, 0, 0, 0.05)
                  `;
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.8)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 ease-in-out"></span>
                <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3" style={{ letterSpacing: '0.02em', color: '#000000', fontWeight: '700' }}>
                  <span className="whitespace-normal sm:whitespace-nowrap text-center">Contact Us for Onboarding</span>
                  <div className="relative z-10 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-900 to-black transition-all duration-300 group-hover:scale-110 flex-shrink-0" style={{
                    width: 'clamp(36px, 8vw, 40px)',
                    height: 'clamp(36px, 8vw, 40px)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(0, 0, 0, 0.3)',
                    border: '1.5px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    <ArrowRight className="text-white group-hover:translate-x-1 transition-transform duration-300" style={{ strokeWidth: '2.8', stroke: 'white', fill: 'none', width: 'clamp(20px, 4.5vw, 22px)', height: 'clamp(20px, 4.5vw, 22px)' }} />
                  </div>
                </span>
              </button>

              {/* Secondary Button - View Documentation */}
              <button
                onClick={() => {
                  window.open('#', '_blank');
                }}
                className="group relative flex items-center justify-center gap-3 md:gap-4 rounded-full transition-all duration-500 ease-out overflow-hidden hover:scale-105 active:scale-95 w-full sm:w-auto sm:flex-1"
                style={{
                  fontFamily: 'ibrand, sans-serif',
                  fontSize: 'clamp(0.95rem, 2.5vw, 1.125rem)',
                  fontWeight: '700',
                  padding: 'clamp(16px, 4vw, 20px) clamp(28px, 6vw, 40px)',
                  cursor: 'pointer',
                  minHeight: '52px',
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
                <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 text-white font-medium" style={{ fontFamily: 'ibrand, sans-serif', letterSpacing: '0.02em', textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
                  <span className="whitespace-normal sm:whitespace-nowrap text-center">View Documentation</span>
                  <div className="relative z-10 flex items-center justify-center rounded-full bg-gradient-to-br from-white to-gray-100 transition-all duration-300 group-hover:scale-110 flex-shrink-0" style={{
                    width: 'clamp(36px, 8vw, 40px)',
                    height: 'clamp(36px, 8vw, 40px)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.9), inset 0 -1px 0 rgba(0, 0, 0, 0.1)',
                    border: '1.5px solid rgba(0, 0, 0, 0.1)'
                  }}>
                    <ArrowRight className="text-[#0a0e27] group-hover:translate-x-1 transition-transform duration-300" style={{ strokeWidth: '2.8', stroke: '#0a0e27', fill: 'none', width: 'clamp(20px, 4.5vw, 22px)', height: 'clamp(20px, 4.5vw, 22px)' }} />
                  </div>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}