import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';
import bgImage from 'figma:asset/920bac5e79f6b4e2f8d028d7d03c1726b8731e55.png';
import dotPattern from 'figma:asset/4f8ac2e2e33f435af4d70409e35bc8694036b3a6.png';
import newBgPattern from 'figma:asset/c9a1a100b7e5bf872e244847c13028fb8b6a5d79.png';
import euroCoin from 'figma:asset/dbf80a82905e64bf71fe73df79a2846fd89006be.png';
import euroCoinGold from 'figma:asset/74f80e2b27170a1ecf5b59a7c9a3d68a99635253.png';
import forDigitalMoney from 'figma:asset/167b70984e29772695f72edde47a71baebd1dcb9.png';
import withYouBanner from 'figma:asset/410c3871512cd890781e47427996c6c48780838b.png';
import howEurocoinWorks from 'figma:asset/865f4fad7e30ff811747f5d13ea8d1ce2935367e.png';
import whyEurocoin from 'figma:asset/f78ba638aacf4b8949847458660a8d1bc52e81e7.png';
import earthHorizonBg from 'figma:asset/af3c6efc6ea179431e93dd83377ab1f5e7f65967.png';
import getStartedContent from 'figma:asset/9389c6bf1d37120b432ba486610aca23b7f21ac4.png';
import heroBgImage from 'figma:asset/b4ea384d8eb8e231c5607c87c40b03297346549d.png';

export function OpenPlatform() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Main About Us Content */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32" style={{ backgroundColor: '#000' }}>
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-no-repeat bg-center" 
          style={{ 
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24 lg:py-32">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="w-full">
              {/* Main Heading */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 md:mb-6 lg:mb-8 leading-tight">
                The Future of Europe's Digital Finance
              </h1>

              {/* Subtitle with highlight */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed mb-3 md:mb-4 lg:mb-6">
                Eurocoin (EURDT) bridges traditional banking and blockchain innovation with a{' '}
                <span className="text-cyan-400">fully regulated, euro-pegged stablecoin</span>{' '}
                for seamless, secure transactions.
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white/70 leading-relaxed mb-6 md:mb-8 lg:mb-10">
                Whether you're a business, institution, or individual, Eurocoin lets you transact, 
                settle, and store value digitally without the volatility, delays, or risks of legacy 
                crypto infrastructure.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6" style={{ marginTop: '1.5rem' }}>
                {/* Request Early Access Button - Premium Style */}
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

                {/* Schedule a Demo Button - Premium Style */}
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
                    background: 'linear-gradient(135deg, rgba(91, 159, 255, 0.9) 0%, rgba(74, 143, 232, 0.95) 100%)',
                    border: '2px solid rgba(91, 159, 255, 0.8)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: `
                      0 8px 32px rgba(91, 159, 255, 0.4),
                      0 0 0 1px rgba(255, 255, 255, 0.2) inset,
                      inset 0 1px 0 rgba(255, 255, 255, 0.3),
                      inset 0 -1px 0 rgba(0, 0, 0, 0.2),
                      0 0 30px rgba(91, 159, 255, 0.3)
                    `,
                    color: '#FFFFFF',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `
                      0 12px 48px rgba(91, 159, 255, 0.6),
                      0 0 0 2px rgba(255, 255, 255, 0.3) inset,
                      inset 0 1px 0 rgba(255, 255, 255, 0.4),
                      inset 0 -1px 0 rgba(0, 0, 0, 0.15),
                      0 0 50px rgba(91, 159, 255, 0.5)
                    `;
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(107, 175, 255, 0.95) 0%, rgba(90, 159, 248, 1) 100%)';
                    e.currentTarget.style.borderColor = 'rgba(91, 159, 255, 1)';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `
                      0 8px 32px rgba(91, 159, 255, 0.4),
                      0 0 0 1px rgba(255, 255, 255, 0.2) inset,
                      inset 0 1px 0 rgba(255, 255, 255, 0.3),
                      inset 0 -1px 0 rgba(0, 0, 0, 0.2),
                      0 0 30px rgba(91, 159, 255, 0.3)
                    `;
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(91, 159, 255, 0.9) 0%, rgba(74, 143, 232, 0.95) 100%)';
                    e.currentTarget.style.borderColor = 'rgba(91, 159, 255, 0.8)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 ease-in-out"></span>
                  <span className="relative z-10 flex items-center gap-3" style={{ letterSpacing: '0.02em', color: '#FFFFFF', fontWeight: '700', textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)' }}>
                    Schedule a Demo
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

            {/* Right Column - Euro Coin Image */}
            <div className="hidden lg:flex items-center justify-center px-8 lg:px-16">
              <div className="relative w-full max-w-md lg:max-w-lg">
                {/* Glow effect behind coin */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-amber-500/20 to-orange-500/20 blur-3xl rounded-full scale-110" />
                
                {/* Gold Coin Image */}
                <img 
                  src={euroCoinGold} 
                  alt="Euro Coin" 
                  className="relative z-10 w-full h-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Digital Money Section */}
      <section className="relative w-full py-12 md:py-16 overflow-hidden" style={{ backgroundColor: '#000' }}>
        {/* Background Pattern */}
        <img 
          src={newBgPattern} 
          alt="Background Pattern" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-10 flex items-center justify-center">
          <img 
            src={forDigitalMoney} 
            alt="For Digital Money" 
            className="w-full max-w-3xl md:max-w-4xl h-auto px-6 md:px-8"
          />
        </div>
      </section>

      {/* With You Banner Section */}
      <section className="relative w-full py-12 md:py-16 overflow-hidden" style={{ backgroundColor: '#000' }}>
        {/* Background Pattern */}
        <img 
          src={newBgPattern} 
          alt="Background Pattern" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-10 flex items-center justify-center">
          <img 
            src={withYouBanner} 
            alt="With You Banner" 
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* How Eurocoin Works Section */}
      <section className="relative w-full py-12 md:py-16 overflow-hidden" style={{ backgroundColor: '#000' }}>
        {/* Background Pattern */}
        <img 
          src={newBgPattern} 
          alt="Background Pattern" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-10 flex items-center justify-center">
          <img 
            src={howEurocoinWorks} 
            alt="How Eurocoin Works" 
            className="w-full max-w-3xl md:max-w-4xl h-auto px-6 md:px-8"
          />
        </div>
      </section>

      {/* Why Eurocoin Section */}
      <section className="relative w-full py-16 md:py-24 overflow-hidden flex items-center justify-center" style={{ backgroundColor: '#000' }}>
        {/* Background Pattern */}
        <img 
          src={newBgPattern} 
          alt="Background Pattern" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Euro Coin Image */}
            <div className="flex items-center justify-center lg:justify-start">
              <div className="relative w-full max-w-md lg:max-w-lg">
                {/* Glow effect behind coin */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-amber-500/20 to-orange-500/20 blur-3xl rounded-full scale-110" />
                
                {/* Gold Coin Image */}
                <img 
                  src={euroCoinGold} 
                  alt="Euro Coin" 
                  className="relative z-10 w-full h-auto drop-shadow-2xl scale-75"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:pl-12 lg:pr-8" style={{ marginLeft: 'auto', marginRight: 'auto', paddingLeft: '3rem', paddingRight: '2rem' }}>
              {/* Section Title */}
              <h2 className="text-4xl md:text-5xl text-white mb-12" style={{ textAlign: 'left' }}>
                Why Eurocoin?
              </h2>

              {/* Features Grid */}
              <div className="space-y-8">
                {/* Feature 1 */}
                <div>
                  <h3 className="text-2xl text-cyan-400 mb-3" style={{ textAlign: 'left' }}>
                    Stable & Secure
                  </h3>
                  <p className="text-white/70 text-lg" style={{ textAlign: 'left' }}>
                    Backed 1:1 by euro reserves held in regulated European banks, ensuring full transparency and trust.
                  </p>
                </div>

                {/* Feature 2 */}
                <div>
                  <h3 className="text-2xl text-cyan-400 mb-3" style={{ textAlign: 'left' }}>
                    Fast Transactions
                  </h3>
                  <p className="text-white/70 text-lg" style={{ textAlign: 'left' }}>
                    Instant settlement across borders with minimal fees—no delays, no intermediaries.
                  </p>
                </div>

                {/* Feature 3 */}
                <div>
                  <h3 className="text-2xl text-cyan-400 mb-3" style={{ textAlign: 'left' }}>
                    Fully Regulated
                  </h3>
                  <p className="text-white/70 text-lg" style={{ textAlign: 'left' }}>
                    Compliant with EU financial regulations, including MiCA and AML standards, for peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="relative w-full py-16 md:py-24 overflow-hidden flex items-center justify-center" style={{ minHeight: '600px' }}>
        {/* Background with hero image */}
        <div className="absolute inset-0">
          <img 
            src={heroBgImage} 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-8 lg:px-12 text-center flex flex-col items-center justify-center" style={{ minHeight: '600px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '2rem', paddingRight: '1rem' }}>
          {/* Main Heading */}
          <h2 
            className="text-white w-full mb-6"
            style={{
              fontFamily: 'ibrand',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              lineHeight: '1.2',
              fontWeight: '600',
              textAlign: 'center'
            }}
          >
            Get Started with Eurocoin
          </h2>
          
          {/* Subtitle */}
          <p 
            className="text-white mb-8"
            style={{
              fontFamily: 'ibrand',
              fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
              lineHeight: '1.6',
              opacity: 0.9,
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto',
              textAlign: 'center'
            }}
          >
            Power your transactions with Europe's most trusted digital euro. Join the future of digital finance today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full" style={{ maxWidth: '100%', marginTop: '2rem' }}>
            {/* Get Started Button - Premium Style */}
            <button
              onClick={() => {
                // Navigate to contact or early access
                window.location.href = '/contact-us';
              }}
              className="group relative flex items-center justify-center gap-4 rounded-full transition-all duration-500 ease-out overflow-hidden hover:scale-105 w-full sm:w-auto"
              style={{
                fontFamily: 'ibrand, sans-serif',
                fontSize: 'clamp(1.125rem, 1.5vw, 1.375rem)',
                fontWeight: '600',
                padding: '22px 48px',
                cursor: 'pointer',
                minWidth: '320px',
                background: 'linear-gradient(135deg, #FFFFFF 0%, #E6F0FF 100%)',
                border: '2px solid rgba(255, 255, 255, 0.8)',
                boxShadow: `
                  0 8px 32px rgba(148, 190, 252, 0.3),
                  0 0 0 1px rgba(255, 255, 255, 0.5) inset,
                  inset 0 1px 0 rgba(255, 255, 255, 0.9),
                  inset 0 -1px 0 rgba(0, 0, 0, 0.05)
                `,
                color: '#000000',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `
                  0 12px 48px rgba(148, 190, 252, 0.5),
                  0 0 0 2px rgba(255, 255, 255, 0.6) inset,
                  inset 0 1px 0 rgba(255, 255, 255, 1),
                  inset 0 -1px 0 rgba(0, 0, 0, 0.08),
                  0 0 40px rgba(148, 190, 252, 0.3)
                `;
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 1)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #FFFFFF 0%, #F0F7FF 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `
                  0 8px 32px rgba(148, 190, 252, 0.3),
                  0 0 0 1px rgba(255, 255, 255, 0.5) inset,
                  inset 0 1px 0 rgba(255, 255, 255, 0.9),
                  inset 0 -1px 0 rgba(0, 0, 0, 0.05)
                `;
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.8)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #FFFFFF 0%, #E6F0FF 100%)';
              }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 ease-in-out"></span>
              <span className="relative z-10 flex items-center gap-3" style={{ letterSpacing: '0.02em' }}>
                Get Started with Eurocoin
                <div className="relative z-10 flex items-center justify-center rounded-full bg-[#0a0e27] transition-all duration-300 group-hover:scale-110" style={{
                  width: '42px',
                  height: '42px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(0, 0, 0, 0.3)'
                }}>
                  <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform duration-300" style={{ strokeWidth: '2.5', fill: 'white' }} />
                </div>
              </span>
            </button>

            {/* Schedule a Demo Button - Premium Style */}
            <button
              onClick={() => {
                // Navigate to contact or schedule demo
                window.location.href = '/contact-us';
              }}
              className="group relative flex items-center justify-center gap-4 rounded-full transition-all duration-500 ease-out overflow-hidden hover:scale-105 w-full sm:w-auto"
              style={{
                fontFamily: 'ibrand, sans-serif',
                fontSize: 'clamp(1.125rem, 1.5vw, 1.375rem)',
                fontWeight: '600',
                padding: '22px 48px',
                cursor: 'pointer',
                minWidth: '320px',
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
                Schedule a Demo
                <div className="relative z-10 flex items-center justify-center rounded-full bg-white transition-all duration-300 group-hover:scale-110" style={{
                  width: '42px',
                  height: '42px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
                }}>
                  <ArrowRight className="w-6 h-6 text-[#0a0e27] group-hover:translate-x-1 transition-transform duration-300" style={{ strokeWidth: '2.5', fill: '#0a0e27' }} />
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
