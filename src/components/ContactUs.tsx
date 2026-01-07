import { Header } from './Header';
import { Footer } from './Footer';
import { Mail, ArrowRight } from 'lucide-react';
import contactBgImage from 'figma:asset/97969cb1679f6cf13ff9b68d32f7c994248b47d9.png';
import addressBgImage from 'figma:asset/f4d9a80e843cee888808869d0f6d09a0125baf31.png';
import sectionBgImage from 'figma:asset/b1793ff53b5df4729eda02f2264b876554dc6d0a.png';
import supportSectionBg from 'figma:asset/954c7a1a19e186991b8fd17ea13f4826858d89be.png';
import thumbsUpImage from 'figma:asset/87de5304dc8f03cf980528926a0a4d7f63796eec.png';
import euroCoinImage from 'figma:asset/8d179f67bbd2dc634a157288b573a4de6bda93a2.png';
import ctaSectionBg from 'figma:asset/27598f1834d1dbac7746ce2d7958d635945b7122.png';

export function ContactUs() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section with Background */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32"
        style={{
          backgroundImage: `url(${contactBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24 w-full">
          {/* Main Heading */}
          <h1 
            className="text-center mb-6"
            style={{
              fontFamily: 'ibrand, sans-serif',
              fontSize: '64px',
              lineHeight: '1.2',
              color: '#000000'
            }}
          >
            Contact Eurocoin
          </h1>

          {/* Subtitle */}
          <p 
            className="text-center mx-auto mb-16"
            style={{
              fontFamily: 'ibrand, sans-serif',
              fontSize: '24px',
              lineHeight: '1.5',
              color: '#000000',
              maxWidth: '1400px',
              width: '100%',
              paddingLeft: '0',
              paddingRight: '0'
            }}
          >
            We're here to support businesses, institutions, investors, and partners looking to join the next era of digital finance.
          </p>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto mb-12" style={{ maxWidth: '1400px', marginTop: '48px' }}>
            {/* Media or Press Card */}
            <div 
              className="rounded-3xl border-2"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderColor: '#60A5FA',
                backdropFilter: 'blur(10px)',
                padding: '24px 20px'
              }}
            >
              <p 
                className="mb-3"
                style={{
                  fontSize: '15px',
                  lineHeight: '1.5',
                  color: '#000000'
                }}
              >
                <strong>For media or press:</strong>
              </p>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" style={{ color: '#60A5FA', flexShrink: 0 }} />
                <a 
                  href="mailto:contact@billongroup.com"
                  className="hover:underline"
                  style={{
                    fontSize: '15px',
                    color: '#60A5FA',
                    wordBreak: 'break-word'
                  }}
                >
                  contact@billongroup.com
                </a>
              </div>
            </div>

            {/* Business Inquiries Card */}
            <div 
              className="rounded-3xl border-2"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderColor: '#60A5FA',
                backdropFilter: 'blur(10px)',
                padding: '24px 20px'
              }}
            >
              <p 
                className="mb-3"
                style={{
                  fontSize: '15px',
                  lineHeight: '1.5',
                  color: '#000000'
                }}
              >
                <strong>For business inquiries, partnerships, or integrations:</strong>
              </p>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" style={{ color: '#60A5FA', flexShrink: 0 }} />
                <a 
                  href="mailto:contact@billongroup.com"
                  className="hover:underline"
                  style={{
                    fontSize: '15px',
                    color: '#60A5FA',
                    wordBreak: 'break-word'
                  }}
                >
                  contact@billongroup.com
                </a>
              </div>
            </div>

            {/* Compliance Card */}
            <div 
              className="rounded-3xl border-2"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderColor: '#60A5FA',
                backdropFilter: 'blur(10px)',
                padding: '24px 20px'
              }}
            >
              <p 
                className="mb-3"
                style={{
                  fontSize: '15px',
                  lineHeight: '1.5',
                  color: '#000000'
                }}
              >
                <strong>For compliance, audit, or legal requests:</strong>
              </p>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" style={{ color: '#60A5FA', flexShrink: 0 }} />
                <a 
                  href="mailto:contact@billongroup.com"
                  className="hover:underline"
                  style={{
                    fontSize: '15px',
                    color: '#60A5FA',
                    wordBreak: 'break-word'
                  }}
                >
                  contact@billongroup.com
                </a>
              </div>
            </div>
          </div>

          {/* Response Time Message */}
          <p 
            className="text-center"
            style={{
              fontSize: '18px',
              lineHeight: '1.5',
              color: '#000000',
              marginTop: '48px'
            }}
          >
            We aim to respond to all inquiries within one business day.
          </p>
        </div>
      </section>

      {/* Registered Address Section */}
      <section 
        className="relative flex justify-center"
        style={{
          backgroundImage: `url(${sectionBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          paddingTop: '120px',
          paddingBottom: '120px'
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          {/* Address Card - Using the Full Image */}
          <div className="mb-20 flex justify-center">
            <img 
              src={addressBgImage} 
              alt="Registered Address" 
              className="w-full h-auto rounded-3xl"
              style={{
                maxWidth: '900px',
                boxShadow: '0 0 60px rgba(96, 165, 250, 0.2)'
              }}
            />
          </div>

          {/* Legal Information Section */}
          <div className="flex justify-center w-full" style={{ marginTop: '60px' }}>
            <div className="w-full max-w-[1000px] mx-auto">
              <h2 
                className="text-center mb-16 w-full"
                style={{
                  fontFamily: 'ibrand, sans-serif',
                  fontSize: '36px',
                  lineHeight: '1.2',
                  color: '#FFFFFF',
                  paddingBottom: '24px'
                }}
              >
                Legal Information & User Protection
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 w-full relative mx-auto">
                {/* Vertical Divider Line - Hidden on Mobile */}
                <div 
                  className="hidden md:block absolute left-1/2 top-0 bottom-0"
                  style={{
                    width: '1px',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    transform: 'translateX(-50%)'
                  }}
                />
                
                {/* Privacy Policy */}
                <div className="w-full">
                  <h3 
                    className="mb-4"
                    style={{
                      fontFamily: 'ibrand, sans-serif',
                      fontSize: '18px',
                      lineHeight: '1.4',
                      color: '#FFFFFF',
                      fontWeight: '600'
                    }}
                  >
                    Privacy Policy
                  </h3>
                  <p 
                    style={{
                      fontFamily: 'ibrand, sans-serif',
                      fontSize: '14px',
                      lineHeight: '1.7',
                      color: 'rgba(255, 255, 255, 0.6)'
                    }}
                  >
                    We take data protection seriously. Read our Privacy Policy to see how your information is handled in full compliance with GDPR and EU law.
                  </p>
                </div>

                {/* Terms of Service */}
                <div className="w-full">
                  <h3 
                    className="mb-4"
                    style={{
                      fontFamily: 'ibrand, sans-serif',
                      fontSize: '18px',
                      lineHeight: '1.4',
                      color: '#FFFFFF',
                      fontWeight: '600'
                    }}
                  >
                    Terms of Service
                  </h3>
                  <p 
                    style={{
                      fontFamily: 'ibrand, sans-serif',
                      fontSize: '14px',
                      lineHeight: '1.7',
                      color: 'rgba(255, 255, 255, 0.6)'
                    }}
                  >
                    All users, partners, and clients are required to review and agree to our Terms of Service, which govern access to Eurocoin's platform, services, and APIs.
                  </p>
                </div>

                {/* Regulatory Disclosures */}
                <div className="w-full">
                  <h3 
                    className="mb-4"
                    style={{
                      fontFamily: 'ibrand, sans-serif',
                      fontSize: '18px',
                      lineHeight: '1.4',
                      color: '#FFFFFF',
                      fontWeight: '600'
                    }}
                  >
                    Regulatory Disclosures
                  </h3>
                  <p 
                    style={{
                      fontFamily: 'ibrand, sans-serif',
                      fontSize: '14px',
                      lineHeight: '1.7',
                      color: 'rgba(255, 255, 255, 0.6)'
                    }}
                  >
                    Eurocoin is issued under an Electronic Money Institution (EMI) license by the Polish Financial Supervision Authority (KNF), fully MiCA-ready, and operates in accordance with European financial regulations.
                  </p>
                </div>

                {/* Disclaimer */}
                <div className="w-full">
                  <h3 
                    className="mb-4"
                    style={{
                      fontFamily: 'ibrand, sans-serif',
                      fontSize: '18px',
                      lineHeight: '1.4',
                      color: '#FFFFFF',
                      fontWeight: '600'
                    }}
                  >
                    Disclaimer
                  </h3>
                  <p 
                    style={{
                      fontFamily: 'ibrand, sans-serif',
                      fontSize: '14px',
                      lineHeight: '1.7',
                      color: 'rgba(255, 255, 255, 0.6)'
                    }}
                  >
                    Eurocoin is a digital asset pegged 1:1 to the euro. Usage and redemption are subject to regulatory status and market availability in your jurisdiction. Please consult your legal and tax advisors before investing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support and Compliance Section */}
      <section 
        className="relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${supportSectionBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
          paddingTop: '120px',
          paddingBottom: '120px'
        }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 w-full">
          {/* Support Section */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-32">
            {/* Thumbs Up Icon */}
            <div className="flex-shrink-0">
              <img 
                src={thumbsUpImage} 
                alt="Thumbs Up" 
                style={{ width: '280px', height: '280px', objectFit: 'contain' }}
              />
            </div>
            
            {/* Support Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 
                className="mb-6"
                style={{
                  fontFamily: 'ibrand, sans-serif',
                  fontSize: '48px',
                  lineHeight: '1.2',
                  color: '#FFFFFF',
                  paddingBottom: '12px'
                }}
              >
                Support
              </h2>
              <p 
                className="mb-3"
                style={{
                  fontFamily: 'ibrand, sans-serif',
                  fontSize: '16px',
                  lineHeight: '1.6',
                  color: '#FFFFFF'
                }}
              >
                For help with onboarding, integration, or technical questions, reach out to our support team: <span style={{ fontWeight: 600 }}>contact@billongroup.com</span>
              </p>
              <p 
                className="mb-6"
                style={{
                  fontFamily: 'ibrand, sans-serif',
                  fontSize: '16px',
                  lineHeight: '1.6',
                  color: '#FFFFFF',
                  marginTop: '16px'
                }}
              >
                For urgent issues, please indicate "Urgent" in your email subject for fastest routing.
              </p>
              <button
                onClick={() => {
                  window.location.href = '/contact-us';
                }}
                className="group relative flex items-center justify-center gap-3 rounded-full transition-all duration-500 ease-out overflow-hidden hover:scale-105 mx-auto md:mx-0 w-full sm:w-auto"
                style={{
                  fontFamily: 'ibrand, sans-serif',
                  fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
                  fontWeight: '700',
                  padding: '14px 28px',
                  cursor: 'pointer',
                  minWidth: '200px',
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
                  position: 'relative',
                  marginTop: '24px'
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
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 ease-in-out"></span>
                <span className="relative z-10 flex items-center gap-3" style={{ letterSpacing: '0.02em', color: '#FFFFFF', fontWeight: '700', textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)' }}>
                  Contact Us
                  <div className="relative z-10 flex items-center justify-center rounded-full bg-gradient-to-br from-white to-gray-100 transition-all duration-300 group-hover:scale-110" style={{
                    width: '32px',
                    height: '32px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.9), inset 0 -1px 0 rgba(0, 0, 0, 0.1)',
                    border: '1.5px solid rgba(0, 0, 0, 0.1)'
                  }}>
                    <ArrowRight className="w-4 h-4 text-[#0a0e27] group-hover:translate-x-1 transition-transform duration-300" style={{ strokeWidth: '2.8', stroke: '#0a0e27', fill: 'none' }} />
                  </div>
                </span>
              </button>
            </div>
          </div>

          {/* Compliance Commitment Section */}
          <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-12" style={{ marginTop: '80px' }}>
            {/* Euro Coin Icon */}
            <div className="flex-shrink-0">
              <img 
                src={euroCoinImage} 
                alt="Euro Coin" 
                style={{ width: '280px', height: '280px', objectFit: 'contain' }}
              />
            </div>
            
            {/* Compliance Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 
                className="mb-6"
                style={{
                  fontFamily: 'ibrand, sans-serif',
                  fontSize: '48px',
                  lineHeight: '1.2',
                  color: '#FFFFFF',
                  paddingBottom: '12px'
                }}
              >
                Compliance Commitment
              </h2>
              <p 
                className="mb-4"
                style={{
                  fontFamily: 'ibrand, sans-serif',
                  fontSize: '20px',
                  lineHeight: '1.5',
                  color: '#FFFFFF',
                  fontWeight: 500
                }}
              >
                Your safety, privacy, and compliance are our highest priorities.
              </p>
              <p 
                className="mb-6"
                style={{
                  fontFamily: 'ibrand, sans-serif',
                  fontSize: '16px',
                  lineHeight: '1.6',
                  color: '#FFFFFF'
                }}
              >
                We welcome audit requests, regulator inquiries, and partnership proposals from across Europe's financial ecosystem.
              </p>
              <button
                onClick={() => {
                  window.location.href = '/contact-us';
                }}
                className="group relative flex items-center justify-center gap-3 rounded-full transition-all duration-500 ease-out overflow-hidden hover:scale-105 mx-auto md:mx-0 w-full sm:w-auto"
                style={{
                  fontFamily: 'ibrand, sans-serif',
                  fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
                  fontWeight: '700',
                  padding: '14px 28px',
                  cursor: 'pointer',
                  minWidth: '200px',
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
                  position: 'relative',
                  marginTop: '24px'
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
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 ease-in-out"></span>
                <span className="relative z-10 flex items-center gap-3" style={{ letterSpacing: '0.02em', color: '#FFFFFF', fontWeight: '700', textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)' }}>
                  Contact Us
                  <div className="relative z-10 flex items-center justify-center rounded-full bg-gradient-to-br from-white to-gray-100 transition-all duration-300 group-hover:scale-110" style={{
                    width: '32px',
                    height: '32px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.9), inset 0 -1px 0 rgba(0, 0, 0, 0.1)',
                    border: '1.5px solid rgba(0, 0, 0, 0.1)'
                  }}>
                    <ArrowRight className="w-4 h-4 text-[#0a0e27] group-hover:translate-x-1 transition-transform duration-300" style={{ strokeWidth: '2.8', stroke: '#0a0e27', fill: 'none' }} />
                  </div>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${ctaSectionBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '60vh',
          paddingTop: '80px',
          paddingBottom: '80px'
        }}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12 w-full text-center">
          {/* Main Heading */}
          <h2 
            className="mb-8"
            style={{
              fontFamily: 'ibrand, sans-serif',
              fontSize: '48px',
              lineHeight: '1.2',
              color: '#FFFFFF',
              paddingBottom: '12px'
            }}
          >
            Instant. Compliant. Built for Everyone.
          </h2>

          {/* First Subtitle */}
          <p 
            className="mb-6"
            style={{
              fontFamily: 'ibrand, sans-serif',
              fontSize: '18px',
              lineHeight: '1.6',
              color: '#FFFFFF'
            }}
          >
            See how simple it is to integrate, transact, and build on the Eurocoin network.
          </p>

          {/* Second Subtitle */}
          <p 
            className="mb-10"
            style={{
              fontFamily: 'ibrand, sans-serif',
              fontSize: '18px',
              lineHeight: '1.6',
              color: '#FFFFFF'
            }}
          >
            Want to partner, invest, or connect with our team?
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6" style={{ marginTop: '24px' }}>
            <button
              onClick={() => {
                window.location.href = '/contact-us';
              }}
              className="group relative flex items-center justify-center gap-3 rounded-full transition-all duration-500 ease-out overflow-hidden hover:scale-105 w-full sm:w-auto"
              style={{
                fontFamily: 'ibrand, sans-serif',
                fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
                fontWeight: '700',
                padding: '14px 28px',
                cursor: 'pointer',
                minWidth: '200px',
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
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 ease-in-out"></span>
              <span className="relative z-10 flex items-center gap-3" style={{ letterSpacing: '0.02em', color: '#FFFFFF', fontWeight: '700', textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)' }}>
                Contact Us for Onboarding
                <div className="relative z-10 flex items-center justify-center rounded-full bg-gradient-to-br from-white to-gray-100 transition-all duration-300 group-hover:scale-110" style={{
                  width: '32px',
                  height: '32px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.9), inset 0 -1px 0 rgba(0, 0, 0, 0.1)',
                  border: '1.5px solid rgba(0, 0, 0, 0.1)'
                }}>
                  <ArrowRight className="w-4 h-4 text-[#0a0e27] group-hover:translate-x-1 transition-transform duration-300" style={{ strokeWidth: '2.8', stroke: '#0a0e27', fill: 'none' }} />
                </div>
              </span>
            </button>

            <button
              onClick={() => {
                window.open('#', '_blank'); // Replace with actual integration docs URL
              }}
              className="group relative flex items-center justify-center gap-3 rounded-full transition-all duration-500 ease-out overflow-hidden w-full sm:w-auto"
              style={{
                fontFamily: 'ibrand, sans-serif',
                fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
                fontWeight: '700',
                padding: '14px 28px',
                cursor: 'pointer',
                minWidth: '200px',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 50%, rgba(255, 255, 255, 0.08) 100%)',
                border: '2px solid rgba(255, 255, 255, 0.4)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: `
                  0 10px 40px rgba(255, 255, 255, 0.1),
                  0 0 0 1px rgba(255, 255, 255, 0.2),
                  inset 0 1px 0 rgba(255, 255, 255, 0.3),
                  inset 0 -1px 0 rgba(0, 0, 0, 0.2)
                `,
                color: '#FFFFFF',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.7)';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.12) 50%, rgba(255, 255, 255, 0.15) 100%)';
                e.currentTarget.style.boxShadow = `
                  0 20px 60px rgba(255, 255, 255, 0.25),
                  0 0 0 4px rgba(255, 255, 255, 0.15),
                  inset 0 1px 0 rgba(255, 255, 255, 0.5),
                  inset 0 -1px 0 rgba(0, 0, 0, 0.1)
                `;
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.06) 50%, rgba(255, 255, 255, 0.08) 100%)';
                e.currentTarget.style.boxShadow = `
                  0 10px 40px rgba(255, 255, 255, 0.1),
                  0 0 0 1px rgba(255, 255, 255, 0.2),
                  inset 0 1px 0 rgba(255, 255, 255, 0.3),
                  inset 0 -1px 0 rgba(0, 0, 0, 0.2)
                `;
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 ease-in-out"></span>
              <span className="relative z-10 flex items-center gap-3" style={{ letterSpacing: '0.02em', color: '#FFFFFF', fontWeight: '700', textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)' }}>
                View Integration Docs
                <div className="relative z-10 flex items-center justify-center rounded-full bg-gradient-to-br from-white to-gray-100 transition-all duration-300 group-hover:scale-110" style={{
                  width: '32px',
                  height: '32px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.9), inset 0 -1px 0 rgba(0, 0, 0, 0.1)',
                  border: '1.5px solid rgba(0, 0, 0, 0.1)'
                }}>
                  <ArrowRight className="w-4 h-4 text-[#0a0e27] group-hover:translate-x-1 transition-transform duration-300" style={{ strokeWidth: '2.8', stroke: '#0a0e27', fill: 'none' }} />
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