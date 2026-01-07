import { Header } from './Header';
import { Footer } from './Footer';
import heroBgImage from 'figma:asset/bd0441ceed50fa86e14b4efeeb402a009be331dd.png';
import coinImage from 'figma:asset/b589d4f3d6b43809c83cf8ccf1546b2b219f862e.png';
import featuresBg from 'figma:asset/43443578133725060886d86192987d1c3cd47fe6.png';
import featuresCards from 'figma:asset/691403976c11bc38424423d63ea1b4617b17d477.png';
import ctaBg from 'figma:asset/27598f1834d1dbac7746ce2d7958d635945b7122.png';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function UseCasesAndSolution() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-[#0a0e27]">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="pt-40 pb-32 px-6 md:px-12 lg:px-24 relative min-h-[600px] flex items-center"
        style={{
          backgroundImage: `url(${heroBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Gradient Overlay for smooth transition */}
        <div 
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '200px',
            background: 'linear-gradient(to bottom, rgba(10, 14, 39, 0) 0%, rgba(10, 14, 39, 0.7) 50%, rgba(10, 14, 39, 1) 100%)',
            pointerEvents: 'none'
          }}
        />
        
        <div 
          className="max-w-4xl text-center relative z-10 w-full md:translate-y-10"
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: '24px',
            paddingRight: '24px'
          }}
        >
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <div 
              className="px-6 py-2 rounded-full border"
              style={{
                fontFamily: 'ibrand, sans-serif',
                fontSize: 'clamp(12px, 2vw, 14px)',
                color: '#FFFFFF',
                borderColor: 'rgba(255, 255, 255, 0.3)',
                backgroundColor: 'rgba(255, 255, 255, 0.05)'
              }}
            >
              Eurocoin in Action
            </div>
          </div>

          {/* Main Heading */}
          <h1 
            style={{
              fontFamily: 'ibrand, sans-serif',
              fontSize: 'clamp(32px, 6vw, 56px)',
              lineHeight: '1.2',
              color: '#FFFFFF',
              marginBottom: '24px'
            }}
          >
            Real-World Blockchain Solutions
          </h1>

          {/* Subheading */}
          <h2 
            style={{
              fontFamily: 'ibrand, sans-serif',
              fontSize: 'clamp(18px, 3vw, 24px)',
              lineHeight: '1.4',
              color: '#5B9FFF',
              marginBottom: '32px'
            }}
          >
            The Fastest Path to Regulated Digital Cash
          </h2>

          {/* Body Text */}
          <div 
            style={{
              fontFamily: 'ibrand, sans-serif',
              fontSize: 'clamp(14px, 2vw, 16px)',
              lineHeight: '1.6',
              color: '#FFFFFF'
            }}
          >
            <p style={{ marginBottom: '16px' }}>
              Eurocoin (EURDT) isn't just the future of money, it's digital cash perfected.
            </p>
            <p style={{ marginBottom: '16px' }}>
              Built for instant access, zero friction, and uncompromising compliance, Eurocoin turns traditional euros into programmable value; you can move at blockchain speed without the risk, delay, or volatility of legacy crypto.
            </p>
            <p>
              Here's how it works, from deposit to instant settlement.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section 
        className="px-6 md:px-12 lg:px-24 pt-16 md:pt-20"
        style={{ paddingBottom: '200px' }}
      >
        <div 
          className="max-w-4xl rounded-3xl overflow-hidden cursor-pointer transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #A5BFFF 0%, #6F4BFF 50%, #0D0042 100%)',
            marginTop: '80px',
            marginBottom: '80px',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: '24px',
            paddingRight: '24px'
          }}
          onClick={() => toggleSection('intro')}
        >
          <div className="p-8 md:p-12 flex flex-col items-center justify-center text-center min-h-[140px]" style={{ marginLeft: 'auto', marginRight: 'auto', paddingLeft: '32px', paddingRight: '32px' }}>
            <h2 
              style={{
                fontFamily: 'ibrand, sans-serif',
                fontSize: 'clamp(20px, 4vw, 28px)',
                lineHeight: '1.3',
                color: '#FFFFFF',
                marginBottom: '12px'
              }}
            >
              Blockchain, Finally Built for the Real Economy
            </h2>
            <ChevronDown 
              className="w-7 h-7 text-white transition-transform duration-300"
              style={{
                transform: expandedSection === 'intro' ? 'rotate(180deg)' : 'rotate(0deg)'
              }}
            />
          </div>
          
          {expandedSection === 'intro' && (
            <div 
              className="px-8 md:px-12 text-center"
              style={{
                fontFamily: 'ibrand, sans-serif',
                fontSize: 'clamp(14px, 2vw, 16px)',
                lineHeight: '1.6',
                color: '#FFFFFF',
                paddingBottom: '48px'
              }}
            >
              <p 
                style={{
                  marginBottom: '24px'
                }}
              >
                Eurocoin (EURDT) isn't theory, it's blockchain that works.
              </p>
              
              <p 
                style={{
                  marginBottom: '24px'
                }}
              >
                Powered by Billon's enterprise-grade distributed ledger, Eurocoin delivers something the digital finance world has been waiting for: a compliant, high-speed euro stablecoin built for the real economy.
              </p>
              
              <p>
                Where others talk about decentralization, Eurocoin operationalizes trust bringing instant settlement, programmable money, and regulatory clarity to institutions, fintechs, and enterprises across Europe.
              </p>
            </div>
          )}
        </div>

        {/* Use Cases Cards */}
        <div className="max-w-4xl mt-20 pb-48" style={{ marginLeft: 'auto', marginRight: 'auto', paddingLeft: '24px', paddingRight: '24px' }}>
          
          {/* Financial Institutions */}
          <div 
            className="rounded-3xl overflow-hidden cursor-pointer transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #A5BFFF 0%, #6F4BFF 50%, #0D0042 100%)',
              marginBottom: '32px'
            }}
            onClick={() => toggleSection('financial')}
          >
            <div className="p-8 md:p-12 flex flex-col items-center justify-center text-center min-h-[140px]">
              <h3 
                style={{
                  fontFamily: 'ibrand, sans-serif',
                  fontSize: '28px',
                  lineHeight: '1.3',
                  color: '#FFFFFF',
                  marginBottom: '12px'
                }}
                className="text-xl md:text-2xl lg:text-[28px]"
              >
                For Financial Institutions & Banks
              </h3>
              <ChevronDown 
                className="w-7 h-7 text-white transition-transform duration-300"
                style={{
                  transform: expandedSection === 'financial' ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
              />
            </div>
            {expandedSection === 'financial' && (
              <div 
                className="px-8 md:px-12 pb-8 md:pb-12 text-center"
                style={{
                  fontFamily: 'ibrand, sans-serif',
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: '#FFFFFF',
                  paddingBottom: '48px'
                }}
              >
                <p className="mb-4">
                  Eurocoin enables banks and financial institutions to offer real-time settlements, reducing counterparty risk and operational costs while maintaining full regulatory compliance.
                </p>
                <p>
                  With instant euro transfers, seamless integration with existing infrastructure, and built-in compliance features, Eurocoin transforms traditional banking into next-generation digital finance.
                </p>
              </div>
            )}
          </div>

          {/* Fintechs */}
          <div 
            className="rounded-3xl overflow-hidden cursor-pointer transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #0D0042 0%, #6F4BFF 50%, #A5BFFF 100%)',
              marginBottom: '32px'
            }}
            onClick={() => toggleSection('fintech')}
          >
            <div className="p-8 md:p-12 flex flex-col items-center justify-center text-center min-h-[140px]">
              <h3 
                style={{
                  fontFamily: 'ibrand, sans-serif',
                  fontSize: '28px',
                  lineHeight: '1.3',
                  color: '#FFFFFF',
                  marginBottom: '12px'
                }}
                className="text-xl md:text-2xl lg:text-[28px]"
              >
                For Fintechs & Enterprises
              </h3>
              <ChevronDown 
                className="w-7 h-7 text-white transition-transform duration-300"
                style={{
                  transform: expandedSection === 'fintech' ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
              />
            </div>
            {expandedSection === 'fintech' && (
              <div 
                className="px-8 md:px-12 pb-8 md:pb-12 text-center"
                style={{
                  fontFamily: 'ibrand, sans-serif',
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: '#FFFFFF',
                  paddingBottom: '48px'
                }}
              >
                <p className="mb-4">
                  Build innovative payment solutions, embed programmable money into your applications, and create new revenue streams with Eurocoin's flexible API.
                </p>
                <p>
                  From instant payouts to smart contracts, Eurocoin provides the infrastructure for next-generation fintech applications without the complexity of traditional blockchain.
                </p>
              </div>
            )}
          </div>

          {/* DeFi */}
          <div 
            className="rounded-3xl overflow-hidden cursor-pointer transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #A5BFFF 0%, #6F4BFF 50%, #0D0042 100%)',
              marginBottom: '32px'
            }}
            onClick={() => toggleSection('defi')}
          >
            <div className="p-8 md:p-12 flex flex-col items-center justify-center text-center min-h-[140px]">
              <h3 
                style={{
                  fontFamily: 'ibrand, sans-serif',
                  fontSize: '28px',
                  lineHeight: '1.3',
                  color: '#FFFFFF',
                  marginBottom: '12px'
                }}
                className="text-xl md:text-2xl lg:text-[28px]"
              >
                For DeFi Platforms & Crypto Users
              </h3>
              <ChevronDown 
                className="w-7 h-7 text-white transition-transform duration-300"
                style={{
                  transform: expandedSection === 'defi' ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
              />
            </div>
            {expandedSection === 'defi' && (
              <div 
                className="px-8 md:px-12 pb-8 md:pb-12 text-center"
                style={{
                  fontFamily: 'ibrand, sans-serif',
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: '#FFFFFF',
                  paddingBottom: '48px'
                }}
              >
                <p className="mb-4">
                  Access the DeFi ecosystem with a stable, compliant euro-backed token that bridges traditional finance and decentralized applications.
                </p>
                <p>
                  Trade, lend, and earn with confidence using a stablecoin designed for institutional-grade security and regulatory compliance.
                </p>
              </div>
            )}
          </div>

          {/* Remittance */}
          <div 
            className="rounded-3xl overflow-hidden cursor-pointer transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #0D0042 0%, #6F4BFF 50%, #A5BFFF 100%)',
              marginBottom: '32px'
            }}
            onClick={() => toggleSection('remittance')}
          >
            <div className="p-8 md:p-12 flex flex-col items-center justify-center text-center min-h-[140px]">
              <h3 
                style={{
                  fontFamily: 'ibrand, sans-serif',
                  fontSize: '28px',
                  lineHeight: '1.3',
                  color: '#FFFFFF',
                  marginBottom: '12px'
                }}
                className="text-xl md:text-2xl lg:text-[28px]"
              >
                For Remittance & Cross-Border Commerce
              </h3>
              <ChevronDown 
                className="w-7 h-7 text-white transition-transform duration-300"
                style={{
                  transform: expandedSection === 'remittance' ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
              />
            </div>
            {expandedSection === 'remittance' && (
              <div 
                className="px-8 md:px-12 pb-8 md:pb-12 text-center"
                style={{
                  fontFamily: 'ibrand, sans-serif',
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: '#FFFFFF',
                  paddingBottom: '48px'
                }}
              >
                <p className="mb-4">
                  Send money across borders instantly with near-zero fees, eliminating the delays and costs of traditional remittance services.
                </p>
                <p>
                  Eurocoin powers fast, transparent international payments that arrive in seconds, not days, giving businesses and individuals true financial freedom.
                </p>
              </div>
            )}
          </div>

          {/* Government */}
          <div 
            className="rounded-3xl overflow-hidden cursor-pointer transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #A5BFFF 0%, #6F4BFF 50%, #0D0042 100%)'
            }}
            onClick={() => toggleSection('government')}
          >
            <div className="p-8 md:p-12 flex flex-col items-center justify-center text-center min-h-[140px]">
              <h3 
                style={{
                  fontFamily: 'ibrand, sans-serif',
                  fontSize: '28px',
                  lineHeight: '1.3',
                  color: '#FFFFFF',
                  marginBottom: '12px'
                }}
                className="text-xl md:text-2xl lg:text-[28px]"
              >
                For Government & Infrastructure
              </h3>
              <ChevronDown 
                className="w-7 h-7 text-white transition-transform duration-300"
                style={{
                  transform: expandedSection === 'government' ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
              />
            </div>
            {expandedSection === 'government' && (
              <div 
                className="px-8 md:px-12 pb-8 md:pb-12 text-center"
                style={{
                  fontFamily: 'ibrand, sans-serif',
                  fontSize: '15px',
                  lineHeight: '1.6',
                  color: '#FFFFFF',
                  paddingBottom: '48px'
                }}
              >
                <p className="mb-4">
                  Deploy digital euro infrastructure for public services, social benefits, and civic payments with full auditability and transparency.
                </p>
                <p>
                  Eurocoin provides governments with the tools to modernize payment systems, reduce fraud, and deliver financial services more efficiently to citizens.
                </p>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section 
        className="relative px-4 md:px-12 lg:px-24"
        style={{
          backgroundImage: `url(${featuresBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          paddingTop: '80px',
          paddingBottom: '0'
        }}
      >
        <div className="w-full flex justify-center">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            {/* Header */}
            <div className="flex justify-center mb-16">
            <h2 
              className="bg-clip-text bg-gradient-to-r text-center px-4"
              style={{
                fontFamily: 'ibrand, sans-serif',
                fontSize: 'clamp(32px, 6vw, 56px)',
                lineHeight: '1.2',
                background: 'linear-gradient(to right, #ffffff 33.946%, #b8d5ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                paddingBottom: '40px'
              }}
            >
              Why Eurocoin Is Different
            </h2>
          </div>

          {/* Feature Cards */}
          <div className="mb-16 flex items-center justify-center w-full">
            <img 
              src={featuresCards} 
              alt="Features" 
              className="w-auto max-w-[95%] md:max-w-6xl lg:max-w-7xl object-contain mx-auto"
            />
          </div>

          {/* Coin Image */}
          <div className="flex items-center justify-center w-full">
            <img 
              src={coinImage} 
              alt="Eurocoin" 
              className="w-80 h-80 md:w-[500px] md:h-[500px] lg:w-[650px] lg:h-[650px] object-contain mx-auto"
            />
          </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="relative px-6 md:px-12 lg:px-24 flex items-center justify-center py-20 md:py-32"
        style={{
          backgroundImage: `url(${ctaBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '500px'
        }}
      >
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h2 
            style={{
              fontFamily: 'ibrand, sans-serif',
              fontSize: 'clamp(28px, 5vw, 48px)',
              lineHeight: '1.3',
              color: '#FFFFFF',
              marginBottom: '24px'
            }}
          >
            Instant. Compliant. Built for Everyone.
          </h2>
          
          {/* Subheading */}
          <p 
            style={{
              fontFamily: 'ibrand, sans-serif',
              fontSize: 'clamp(14px, 2vw, 18px)',
              lineHeight: '1.6',
              color: '#FFFFFF',
              marginBottom: '32px'
            }}
          >
            See how simple it is to integrate, transact, and build on the Eurocoin network.
          </p>
          
          {/* Partnership Text */}
          <p 
            style={{
              fontFamily: 'ibrand, sans-serif',
              fontSize: 'clamp(14px, 2vw, 18px)',
              lineHeight: '1.6',
              color: '#FFFFFF',
              marginBottom: '32px'
            }}
          >
            Want to partner, invest, or connect with our team?
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Contact Us Button - Premium Style */}
            <button
              onClick={() => {
                window.location.href = '/contact-us';
              }}
              className="group relative flex items-center justify-center gap-4 rounded-full transition-all duration-500 ease-out overflow-hidden hover:scale-105 w-full sm:w-auto"
              style={{
                fontFamily: 'ibrand, sans-serif',
                fontSize: 'clamp(1rem, 1.3vw, 1.125rem)',
                fontWeight: '700',
                padding: '18px 36px',
                cursor: 'pointer',
                minWidth: '240px',
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
              <span className="relative z-10 flex items-center gap-3" style={{ letterSpacing: '0.02em', color: '#000000', fontWeight: '700' }}>
                Contact Us for Onboarding
                <div className="relative z-10 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-900 to-black transition-all duration-300 group-hover:scale-110" style={{
                  width: '38px',
                  height: '38px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(0, 0, 0, 0.3)',
                  border: '1.5px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" style={{ strokeWidth: '2.8', stroke: 'white', fill: 'none' }} />
                </div>
              </span>
            </button>

            {/* View Integration Docs Button - Premium Style */}
            <button
              onClick={() => {
                window.open('#', '_blank');
              }}
              className="group relative flex items-center justify-center gap-4 rounded-full transition-all duration-500 ease-out overflow-hidden hover:scale-105 w-full sm:w-auto"
              style={{
                fontFamily: 'ibrand, sans-serif',
                fontSize: 'clamp(1rem, 1.3vw, 1.125rem)',
                fontWeight: '700',
                padding: '18px 36px',
                cursor: 'pointer',
                minWidth: '240px',
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
                <div className="relative z-10 flex items-center justify-center rounded-full bg-gradient-to-br from-white to-gray-100 transition-all duration-300 group-hover:scale-110" style={{
                  width: '38px',
                  height: '38px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.9), inset 0 -1px 0 rgba(0, 0, 0, 0.1)',
                  border: '1.5px solid rgba(0, 0, 0, 0.1)'
                }}>
                  <ArrowRight className="w-5 h-5 text-[#0a0e27] group-hover:translate-x-1 transition-transform duration-300" style={{ strokeWidth: '2.8', stroke: '#0a0e27', fill: 'none' }} />
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
