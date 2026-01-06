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
        className="pt-32 pb-6 px-6 md:px-12 lg:px-24 relative overflow-hidden min-h-screen flex items-center"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020219]/70 via-[#020219]/50 to-[#020219]/80 pointer-events-none"></div>

        <div className="max-w-[1200px] mx-auto text-center relative z-10 w-full" style={{ transform: 'translateX(120px)' }}>
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
            marginBottom: '40px'
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
            marginRight: 'auto'
          }}>
            Eurocoin isn't just another digital currency — it's the first Euro-native stablecoin built from the ground up to meet European regulatory standards. With full MiCA compliance, institutional-grade security, and transparent reserve management, Eurocoin provides the trust and protection that users, businesses, and institutions demand in the digital economy.
          </p>

          {/* Expand/Collapse Button */}
          <button
            className="mt-4 inline-flex items-center text-sm font-medium text-blue-500 hover:text-blue-700"
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
      </section>

      {/* Accordion Section */}
      <section className="pt-6 px-6 md:px-12 lg:px-24 bg-[#020219]" style={{ paddingBottom: '80px' }}>
        <div className="max-w-[900px] mx-auto px-4 lg:px-0" style={{ transform: 'translateX(260px)' }}>
          {accordionItems.map((item, index) => (
            <React.Fragment key={index}>
              <div
                className="mb-8 rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: openAccordion === index 
                    ? 'linear-gradient(135deg, #FFFFFF 0%, #F0F7FF 100%)'
                    : 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)',
                  border: '2px solid',
                  borderColor: openAccordion === index ? '#94BEFC' : 'rgba(148, 190, 252, 0.2)',
                  boxShadow: openAccordion === index 
                    ? '0 8px 32px rgba(148, 190, 252, 0.2)'
                    : '0 2px 8px rgba(0, 0, 0, 0.05)'
                }}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                  className="w-full px-4 md:px-8 py-6 flex items-center justify-between text-left transition-all duration-200"
                >
                  <h3 style={{
                    fontFamily: 'ibrand, sans-serif',
                    fontSize: 'clamp(20px, 2.5vw, 28px)',
                    fontWeight: '400',
                    color: '#000000'
                  }}>
                    {item.title}
                  </h3>
                  {openAccordion === index ? (
                    <ChevronUp className="w-6 h-6 text-black flex-shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-black flex-shrink-0 ml-4" />
                  )}
                </button>

                {/* Accordion Content */}
                {openAccordion === index && (
                  <div className="px-4 md:px-8 pb-8">
                    {item.content.map((section, idx) => (
                      <div key={idx} className={idx > 0 ? 'mt-6' : ''}>
                        <p style={{
                          fontFamily: 'Manrope, sans-serif',
                          fontSize: '16px',
                          lineHeight: '160%',
                          color: '#000000',
                          marginBottom: '16px'
                        }}>
                          <strong>{section.subtitle}</strong> {section.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Decorative Arrow Between Accordions */}
              {index < accordionItems.length - 1 && (
                <div className="flex justify-center mb-8">
                  <ArrowDown className="w-8 h-8" style={{ color: '#94BEFC' }} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
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
        className="relative px-6 md:px-12 lg:px-24 overflow-hidden"
        style={{
          backgroundImage: `url(${ctaBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          paddingTop: '80px',
          paddingBottom: '80px'
        }}
      >
        <div className="max-w-[1000px] mx-auto text-center relative z-10" style={{ transform: 'translateX(250px)' }}>
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
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Contact Us Button */}
            <button
              className="px-8 py-4 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(90deg, #FFFFFF 0%, #E6F0FF 100%)',
                color: '#000000',
                fontFamily: 'Manrope, sans-serif',
                fontSize: '18px',
                fontWeight: '600'
              }}
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* View Compliance Reports Button */}
            <button
              className="px-8 py-4 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105"
              style={{
                background: 'transparent',
                border: '2px solid rgba(255, 255, 255, 0.5)',
                color: '#FFFFFF',
                fontFamily: 'Manrope, sans-serif',
                fontSize: '18px',
                fontWeight: '600'
              }}
            >
              View Compliance Reports
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}