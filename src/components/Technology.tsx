import { ArrowRight } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import techBgImage from 'figma:asset/72aa310f3a0bcc4fa423c10d9441fb6b2fceb5f8.png';
import featuresImage from 'figma:asset/4fe9da421f52b5c1bbd4daeb8d159f0e8dec6c2a.png';
import realWorldValueImage from 'figma:asset/c8be9202df5c6fb1946a19840303a0f779656948.png';
import valueBgImage from 'figma:asset/e44cd395a8433267406c70e9c53444b87d5e0382.png';
import redefinesBgImage from 'figma:asset/b0a81a351830e3db4b4436eb898788c3c8f2d9b2.png';
import euroCoinImage from 'figma:asset/46e8be2c158f5125d2b5686c19dff2f15871a897.png';

export function Technology() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32" style={{ backgroundColor: '#000' }}>
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-no-repeat bg-center" 
          style={{ 
            backgroundImage: `url(${techBgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24 lg:py-32 text-center">
          {/* Powered by text */}
          <div style={{ marginBottom: 'clamp(2rem, 5vw, 3.5rem)' }}>
            <span className="inline-block rounded-full border border-cyan-400/30 text-cyan-400" style={{
              fontFamily: 'ibrand, sans-serif',
              fontSize: 'clamp(0.75rem, 1.75vw, 1rem)',
              padding: 'clamp(0.625rem, 1.5vw, 0.875rem) clamp(1.25rem, 3vw, 2rem)',
              display: 'inline-block'
            }}>
              Powered by Billion Group
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight" style={{ marginBottom: '2rem' }}>
            Technology Behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Eurocoin</span>
          </h1>

          {/* Description */}
          <p className="text-white/80 leading-relaxed max-w-4xl mx-auto px-4" style={{ 
            marginBottom: '5rem',
            fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
            lineHeight: '1.6'
          }}>
            Purpose-built for the future of regulated digital finance, Eurocoin (EURDT) runs on Billon's Unified Enterprise DLT System, a next-generation distributed ledger that bridges compliance, speed, and scalability for Europe's digital economy.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Request Early Access Button - Premium Style */}
            <button
              onClick={() => {
                window.location.href = '/contact-us';
              }}
              className="group relative flex items-center justify-center gap-3 rounded-full transition-all duration-500 ease-out overflow-hidden hover:scale-105 w-full sm:w-auto cursor-pointer"
              style={{
                fontFamily: 'ibrand, sans-serif',
                fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
                fontWeight: '700',
                padding: '14px 28px',
                minWidth: '200px',
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
                Request Early Access
                <div className="relative z-10 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-900 to-black transition-all duration-300 group-hover:scale-110" style={{
                  width: '32px',
                  height: '32px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(0, 0, 0, 0.3)',
                  border: '1.5px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" style={{ strokeWidth: '2.8', stroke: 'white', fill: 'none' }} />
                </div>
              </span>
            </button>

            {/* Learn More Button - Premium Style */}
            <button
              onClick={() => {
                window.open('#', '_blank');
              }}
              className="group relative flex items-center justify-center gap-3 rounded-full transition-all duration-500 ease-out overflow-hidden hover:scale-105 w-full sm:w-auto cursor-pointer"
              style={{
                fontFamily: 'ibrand, sans-serif',
                fontSize: 'clamp(0.9rem, 1.2vw, 1rem)',
                fontWeight: '700',
                padding: '14px 28px',
                minWidth: '200px',
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
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `
                  0 8px 32px rgba(148, 190, 252, 0.3),
                  0 0 0 1px rgba(255, 255, 255, 0.1) inset,
                  0 2px 8px rgba(0, 0, 0, 0.2)
                `;
                e.currentTarget.style.borderColor = 'rgba(148, 190, 252, 0.5)';
                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(148, 190, 252, 0.25) 0%, rgba(91, 159, 255, 0.3) 50%, rgba(148, 190, 252, 0.25) 100%)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000"></span>
              <span className="relative z-10 flex items-center gap-3 text-white font-medium" style={{ fontFamily: 'ibrand, sans-serif', letterSpacing: '0.02em', textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}>
                Learn More
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

      {/* Features Section */}
      <section className="relative overflow-hidden flex items-center justify-center py-12 md:py-32" style={{ backgroundColor: '#0a0e27' }}>
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 lg:px-12">
          <img 
            src={featuresImage} 
            alt="Technology Features" 
            className="w-full h-auto mx-auto"
          />
        </div>
      </section>

      {/* Real World Value Section */}
      <section className="relative overflow-hidden flex items-center justify-center py-12 md:py-32">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-no-repeat bg-center" 
          style={{ 
            backgroundImage: `url(${valueBgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 lg:px-12">
          <img 
            src={realWorldValueImage} 
            alt="Real World Value" 
            className="w-full h-auto mx-auto"
          />
        </div>
      </section>

      {/* Technology That Redefines Digital Money Section */}
      <section className="relative overflow-hidden flex items-center justify-center py-12 md:py-32">
        {/* Background Image */}
        <div 
          className="absolute inset-x-0 bg-no-repeat bg-center" 
          style={{ 
            backgroundImage: `url(${redefinesBgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            paddingTop: '80px',
            paddingBottom: '80px',
            top: 0,
            bottom: 0
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
          {/* Heading */}
          <h2 className="text-white text-center" style={{ fontSize: 'clamp(28px, 5vw, 48px)', lineHeight: '1.2', paddingTop: '60px', marginBottom: 'clamp(2rem, 4vw, 3rem)' }}>
            Technology That Redefines Digital Money
          </h2>

          {/* Subtitle */}
          <p className="text-white/90 text-center max-w-4xl mx-auto" style={{ 
            fontSize: 'clamp(18px, 2.5vw, 22px)', 
            lineHeight: '1.6',
            marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)'
          }}>
            Powered by Billon's enterprise-grade DLT, Eurocoin merges real-time liquidity, institutional compliance, and unmatched performance into one unified ecosystem.
          </p>

          {/* Body Paragraph */}
          <p className="text-white/70 text-center max-w-4xl mx-auto" style={{ 
            fontSize: 'clamp(16px, 2.25vw, 18px)', 
            lineHeight: '1.7',
            marginBottom: 'clamp(2.5rem, 5vw, 4rem)'
          }}>
            Eurocoin's strength lies in its foundation: a regulated, enterprise-grade DLT designed for real-world financial systems, not crypto experiments. It's where liquidity meets compliance, and speed meets sustainability. Every layer of its architecture has one goal: to make digital money work seamlessly, securely, and responsibly at scale.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto" style={{ gap: 'clamp(1.5rem, 3vw, 2.5rem)', marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}>
            {/* Feature 1 */}
            <div style={{ marginBottom: 'clamp(1rem, 2vw, 1.5rem)' }}>
              <h3 className="text-green-400" style={{ fontSize: 'clamp(16px, 2.25vw, 18px)', marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)' }}>
                Instant, on-demand minting
              </h3>
              <p className="text-white/70" style={{ fontSize: 'clamp(15px, 2.25vw, 17px)', lineHeight: '1.6' }}>
                — tokens are created the moment euros move, unlocking real liquidity with zero delays.
              </p>
            </div>

            {/* Feature 2 */}
            <div style={{ marginBottom: 'clamp(1rem, 2vw, 1.5rem)' }}>
              <h3 className="text-green-400" style={{ fontSize: 'clamp(16px, 2.25vw, 18px)', marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)' }}>
                Gas-free and energy-efficient
              </h3>
              <p className="text-white/70" style={{ fontSize: 'clamp(15px, 2.25vw, 17px)', lineHeight: '1.6' }}>
                — sustainable, costless transactions aligned with EU climate goals.
              </p>
            </div>

            {/* Feature 3 */}
            <div style={{ marginBottom: 'clamp(1rem, 2vw, 1.5rem)' }}>
              <h3 className="text-green-400" style={{ fontSize: 'clamp(16px, 2.25vw, 18px)', marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)' }}>
                Enterprise-scale performance
              </h3>
              <p className="text-white/70" style={{ fontSize: 'clamp(15px, 2.25vw, 17px)', lineHeight: '1.6' }}>
                — audited throughput exceeding 500K TPS and settlement in seconds.
              </p>
            </div>

            {/* Feature 4 */}
            <div style={{ marginBottom: 'clamp(1rem, 2vw, 1.5rem)' }}>
              <h3 className="text-green-400" style={{ fontSize: 'clamp(16px, 2.25vw, 18px)', marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)' }}>
                Enterprise-ready foundation
              </h3>
              <p className="text-white/70" style={{ fontSize: 'clamp(15px, 2.25vw, 17px)', lineHeight: '1.6' }}>
                — powering digital cash, secure data, and tokenized real-world assets.
              </p>
            </div>

            {/* Feature 5 - Full Width */}
            <div className="md:col-span-2" style={{ marginBottom: 'clamp(1rem, 2vw, 1.5rem)' }}>
              <h3 className="text-green-400" style={{ fontSize: 'clamp(16px, 2.25vw, 18px)', marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)' }}>
                Compliance-first architecture
              </h3>
              <p className="text-white/70" style={{ fontSize: 'clamp(15px, 2.25vw, 17px)', lineHeight: '1.6' }}>
                — built-in AML, KYC, and GDPR for security and regulatory trust.
              </p>
            </div>
          </div>

          {/* Euro Coin Image */}
          <div className="flex justify-center pb-0">
            <img 
              src={euroCoinImage} 
              alt="Euro Coin" 
              className="w-full max-w-[500px] h-auto"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}