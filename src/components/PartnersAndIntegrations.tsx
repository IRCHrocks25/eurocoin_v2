import { Header } from './Header';
import { Footer } from './Footer';
import { ArrowRight, ChevronUp, ChevronDown, Check } from 'lucide-react';
import { useState } from 'react';
import heroBackground from 'figma:asset/08506d8d54cc0c81255ff5a4a877d6d18be5c1f9.png';
import partnerLogos from 'figma:asset/ee2130bfeeb33e6e4cb9524c18fbafe1a9b73937.png';
import fundingLogos from 'figma:asset/d536fdd327324e286f3a100ebf44c77a80080882.png';
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
        className="pt-32 px-6 md:px-12 lg:px-24 relative overflow-hidden min-h-screen flex items-center"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          paddingBottom: '0'
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020219]/60 via-[#020219]/40 to-[#020219]/80 pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto text-center relative z-10 w-full px-12 md:px-16 lg:px-24">
          {/* Badge */}
          <div className="inline-flex items-center px-5 py-2 rounded-full mb-12" style={{
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
              Partners & Integrations
            </span>
          </div>

          {/* Main Heading */}
          <h1 style={{
            fontFamily: 'ibrand, sans-serif',
            fontSize: 'clamp(36px, 5vw, 72px)',
            fontWeight: '400',
            lineHeight: '110%',
            background: 'linear-gradient(90deg, #FFFFFF 22.19%, #B8D5FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '100px',
            maxWidth: '1013px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Building Europe's Trusted Digital Finance Network
          </h1>

          {/* Partnerships Section with Circular Logo Arrangement */}
          <div className="mt-20 mb-20 relative">
            {/* Partner Logos in Semi-Circle */}
            <div className="flex items-center justify-center mb-8">
              <img 
                src={partnerLogos} 
                alt="Partner Organizations" 
                className="w-full max-w-5xl opacity-60 hover:opacity-100 transition-opacity duration-300"
                style={{
                  filter: 'brightness(1.1)'
                }}
              />
            </div>
          </div>

          {/* Funding Section */}
          <div className="mt-32 pt-16 border-t border-white/10">
            <p style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: '18px',
              letterSpacing: '0.35em',
              color: '#FFFFFF',
              marginBottom: '40px',
              textTransform: 'uppercase'
            }}>
              EUROCOIN/BILLON GROUP TECHNOLOGY FUNDING
            </p>

            {/* Funding Logos */}
            <div className="flex items-center justify-center pb-12">
              <img 
                src={fundingLogos} 
                alt="Funding Partners" 
                className="w-full max-w-4xl"
                style={{
                  filter: 'brightness(1.2)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Two Image Cards Section */}
      <section 
        className="py-40 px-6 md:px-12 lg:px-24 relative overflow-hidden" 
        style={{
          backgroundImage: `url(${cardsBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#5646D4]/80 via-[#0D0042]/70 to-[#01010C]/90 pointer-events-none"></div>

        <div className="max-w-[1440px] mx-auto px-12 md:px-16 lg:px-24 relative z-10" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto translate-x-48">
            {/* Card 1 - Powering New Financial Ecosystem */}
            <div className="rounded-[24px] overflow-hidden shadow-2xl">
              {/* Image with Overlay */}
              <div className="h-[240px] relative overflow-hidden">
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
              <div className="p-6 bg-gradient-to-b from-white/5 to-transparent">
                <h3 style={{
                  fontFamily: 'ibrand, sans-serif',
                  fontSize: 'clamp(20px, 2.5vw, 28px)',
                  lineHeight: '130%',
                  background: 'linear-gradient(90deg, #FFFFFF 22.19%, #B8D5FF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '16px'
                }}>
                  Powering a New Financial Ecosystem
                </h3>
                <p style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: '18px',
                  lineHeight: '150%',
                  color: '#D9D9D9'
                }}>
                  Eurocoin isn't just a technology — it's a movement, powered by trusted partners and institutional relationships across banking, enterprise, and digital innovation. Our network is the backbone of real-world adoption, bridging the regulated world of finance with the limitless potential of programmable money.
                </p>
              </div>
            </div>

            {/* Card 2 - Strategic Technology Partnerships */}
            <div className="rounded-[24px] overflow-hidden shadow-2xl">
              {/* Image with Overlay */}
              <div className="h-[240px] relative overflow-hidden">
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
              <div className="p-6 bg-gradient-to-b from-white/5 to-transparent">
                <h3 style={{
                  fontFamily: 'ibrand, sans-serif',
                  fontSize: 'clamp(20px, 2.5vw, 28px)',
                  lineHeight: '130%',
                  background: 'linear-gradient(90deg, #FFFFFF 22.19%, #B8D5FF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '16px'
                }}>
                  Strategic Technology Partnerships
                </h3>
                <p style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: '18px',
                  fontWeight: '700',
                  lineHeight: '150%',
                  color: '#D9D9D9'
                }}>
                  <strong>Billon Group</strong> — Eurocoin is built on the award-winning Billon Unified DLT System — a platform recognized for regulatory rigor, speed, and energy efficiency. Billon's enterprise track record forms the foundation of Eurocoin's compliance and credibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section 
        className="py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden" 
        style={{
          backgroundImage: `url(${accordionBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          paddingTop: '120px',
          paddingBottom: '120px'
        }}
      >
        <div className="max-w-5xl mx-auto space-y-6 px-8 md:px-12 translate-x-48">
          
          {/* Enterprise Adoption & Industry Leaders */}
          <div 
            className="rounded-[12px] overflow-hidden"
            style={{
              background: 'rgba(86, 70, 212, 0.4)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <button
              onClick={() => toggleSection('enterprise')}
              className="w-full px-12 md:px-20 py-10 md:py-14 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-200"
            >
              <h3 style={{
                fontFamily: 'ibrand, sans-serif',
                fontSize: 'clamp(24px, 3vw, 36px)',
                fontWeight: '400',
                lineHeight: '120%',
                color: '#FFFFFF'
              }}>
                Enterprise Adoption & Industry Leaders
              </h3>
              {openSection === 'enterprise' ? (
                <ChevronUp className="w-8 h-8 text-white flex-shrink-0" />
              ) : (
                <ChevronDown className="w-8 h-8 text-white flex-shrink-0" />
              )}
            </button>
            
            {openSection === 'enterprise' && (
              <div className="px-12 md:px-16 pb-12 pt-6">
                <p style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '150%',
                  color: 'rgba(255, 255, 255, 0.9)',
                  marginBottom: '24px'
                }}>
                  Eurocoin's underlying technology is trusted by global organizations, demonstrating scalability and trust
                </p>
                
                <div className="space-y-5">
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
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-1" style={{
                        background: '#7961FF'
                      }}>
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: '18px',
                        fontWeight: '400',
                        lineHeight: '150%',
                        color: 'rgba(255, 255, 255, 0.9)',
                        flex: 1
                      }}>
                        <strong>{item.title}</strong> {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Financial & Payment Infrastructure */}
          <div 
            className="rounded-[12px] overflow-hidden"
            style={{
              background: 'rgba(86, 70, 212, 0.4)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <button
              onClick={() => toggleSection('payment')}
              className="w-full px-12 md:px-20 py-10 md:py-14 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-200"
            >
              <h3 style={{
                fontFamily: 'ibrand, sans-serif',
                fontSize: 'clamp(24px, 3vw, 36px)',
                fontWeight: '400',
                lineHeight: '120%',
                color: '#FFFFFF'
              }}>
                Financial & Payment Infrastructure
              </h3>
              {openSection === 'payment' ? (
                <ChevronUp className="w-8 h-8 text-white flex-shrink-0" />
              ) : (
                <ChevronDown className="w-8 h-8 text-white flex-shrink-0" />
              )}
            </button>
            
            {openSection === 'payment' && (
              <div className="px-12 md:px-20 pb-14 pt-4">
                <div className="space-y-5">
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
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-1" style={{
                        background: '#7961FF'
                      }}>
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: '18px',
                        fontWeight: '400',
                        lineHeight: '150%',
                        color: 'rgba(255, 255, 255, 0.9)',
                        flex: 1
                      }}>
                        <strong>{item.title}</strong> — {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Government & Regulatory Partnerships */}
          <div 
            className="rounded-[12px] overflow-hidden"
            style={{
              background: 'rgba(86, 70, 212, 0.4)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <button
              onClick={() => toggleSection('regulatory')}
              className="w-full px-12 md:px-20 py-10 md:py-14 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-200"
            >
              <h3 style={{
                fontFamily: 'ibrand, sans-serif',
                fontSize: 'clamp(24px, 3vw, 36px)',
                fontWeight: '400',
                lineHeight: '120%',
                color: '#FFFFFF'
              }}>
                Government & Regulatory Partnerships
              </h3>
              {openSection === 'regulatory' ? (
                <ChevronUp className="w-8 h-8 text-white flex-shrink-0" />
              ) : (
                <ChevronDown className="w-8 h-8 text-white flex-shrink-0" />
              )}
            </button>
            
            {openSection === 'regulatory' && (
              <div className="px-12 md:px-20 pb-14 pt-4">
                <p style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: '18px',
                  fontWeight: '400',
                  lineHeight: '150%',
                  color: 'rgba(255, 255, 255, 0.8)',
                  marginBottom: '32px'
                }}>
                  Eurocoin bridges traditional finance and regulation while maintaining full compliance across European jurisdictions.
                </p>
                
                <div className="space-y-5">
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
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-1" style={{
                        background: '#7961FF'
                      }}>
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: '18px',
                        fontWeight: '400',
                        lineHeight: '150%',
                        color: 'rgba(255, 255, 255, 0.9)',
                        flex: 1
                      }}>
                        <strong>{item.title}</strong> — {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Ecosystem Expansion: Open Integration */}
          <div 
            className="rounded-[12px] overflow-hidden"
            style={{
              background: 'rgba(86, 70, 212, 0.4)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <button
              onClick={() => toggleSection('ecosystem')}
              className="w-full px-12 md:px-20 py-10 md:py-14 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-200"
            >
              <h3 style={{
                fontFamily: 'ibrand, sans-serif',
                fontSize: 'clamp(24px, 3vw, 36px)',
                fontWeight: '400',
                lineHeight: '120%',
                color: '#FFFFFF'
              }}>
                Ecosystem Expansion: Open Integration
              </h3>
              {openSection === 'ecosystem' ? (
                <ChevronUp className="w-8 h-8 text-white flex-shrink-0" />
              ) : (
                <ChevronDown className="w-8 h-8 text-white flex-shrink-0" />
              )}
            </button>
            
            {openSection === 'ecosystem' && (
              <div className="px-12 md:px-20 pb-14 pt-4">
                <p style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: '18px',
                  fontWeight: '400',
                  lineHeight: '150%',
                  color: 'rgba(255, 255, 255, 0.8)',
                  marginBottom: '32px'
                }}>
                  Built for interoperability across multiple blockchain ecosystems and traditional finance rails.
                </p>
                
                <div className="space-y-5">
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
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-1" style={{
                        background: '#7961FF'
                      }}>
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: '18px',
                        fontWeight: '400',
                        lineHeight: '150%',
                        color: 'rgba(255, 255, 255, 0.9)',
                        flex: 1
                      }}>
                        <strong>{item.title}</strong> — {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative overflow-hidden">
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

        <div className="relative z-10 py-48 md:py-64 px-6 md:px-12 lg:px-24">
          <div className="max-w-[1400px] mx-auto text-center" style={{ paddingTop: '150px', paddingBottom: '150px' }}>
            {/* Main Heading */}
            <h2 style={{
              fontFamily: 'ibrand, sans-serif',
              fontSize: 'clamp(40px, 5vw, 72px)',
              fontWeight: '400',
              lineHeight: '110%',
              background: 'linear-gradient(90deg, #FFFFFF 0%, #B8D5FF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '48px'
            }}>
              Resilient. Built for Everyone.
            </h2>

            {/* Subtitle */}
            <p style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: 'clamp(20px, 2.5vw, 28px)',
              fontWeight: '400',
              lineHeight: '150%',
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '64px',
              maxWidth: '1000px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              See how simple it is to integrate, transact, and build on the Eurocoin network.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              {/* Primary Button - Contact Us */}
              <button 
                className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #A5BFFF 0%, #94BEFC 100%)',
                  boxShadow: '0 8px 24px rgba(148, 190, 252, 0.3)'
                }}
              >
                <span style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#020219'
                }}>
                  Contact Us for Onboarding
                </span>
                <ArrowRight className="w-5 h-5 text-[#020219] group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              {/* Secondary Button - View Documentation */}
              <button 
                className="group flex items-center justify-center px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <span style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#FFFFFF'
                }}>
                  View Documentation
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