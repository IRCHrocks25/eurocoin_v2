import React from 'react';
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24 lg:pt-32" style={{ backgroundColor: '#000', minHeight: 'clamp(600px, 90vh, 100vh)' }}>
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-24 xl:py-32">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="w-full text-center lg:text-left">
              {/* Main Heading */}
              <h1 className="text-white leading-tight" style={{
                fontFamily: 'ibrand, sans-serif',
                fontSize: 'clamp(1.75rem, 6vw, 3.5rem)',
                lineHeight: '1.15',
                marginBottom: 'clamp(2rem, 5vw, 3rem)'
              }}>
                The Future of Europe's Digital Finance
              </h1>

              {/* Subtitle with highlight */}
              <p className="text-white/90 leading-relaxed mb-3 md:mb-4 lg:mb-6" style={{
                fontFamily: 'ibrand, sans-serif',
                fontSize: 'clamp(0.9rem, 2.5vw, 1.25rem)',
                lineHeight: '1.6'
              }}>
                Eurocoin (EURDT) bridges traditional banking and blockchain innovation with a{' '}
                <span className="text-cyan-400 font-semibold">fully regulated, euro-pegged stablecoin</span>{' '}
                for seamless, secure transactions.
              </p>

              {/* Description */}
              <p className="text-white/70 leading-relaxed mb-6 md:mb-8 lg:mb-10" style={{
                fontFamily: 'ibrand, sans-serif',
                fontSize: 'clamp(0.85rem, 2vw, 1.125rem)',
                lineHeight: '1.7'
              }}>
                Whether you're a business, institution, or individual, Eurocoin lets you transact, 
                settle, and store value digitally without the volatility, delays, or risks of legacy 
                crypto infrastructure.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start" style={{ marginTop: '1.5rem' }}>
                {/* Request Early Access Button - Premium Style */}
                <button
                  onClick={() => {
                    window.location.href = '/contact-us';
                  }}
                  className="group relative flex items-center justify-center gap-3 rounded-full transition-all duration-500 ease-out overflow-hidden hover:scale-105 active:scale-95 w-full sm:w-auto"
                  style={{
                    fontFamily: 'ibrand, sans-serif',
                    fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                    fontWeight: '700',
                    padding: 'clamp(14px, 3.5vw, 18px) clamp(24px, 5vw, 32px)',
                    cursor: 'pointer',
                    minWidth: 'clamp(200px, 50vw, 240px)',
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
                  <span className="relative z-10 flex items-center gap-3" style={{ letterSpacing: '0.02em', color: '#000000', fontWeight: '700' }}>
                    Request Early Access
                    <div className="relative z-10 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-900 to-black transition-all duration-300 group-hover:scale-110" style={{
                      width: 'clamp(32px, 7vw, 36px)',
                      height: 'clamp(32px, 7vw, 36px)',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(0, 0, 0, 0.3)',
                      border: '1.5px solid rgba(255, 255, 255, 0.1)',
                      flexShrink: 0
                    }}>
                      <ArrowRight className="text-white group-hover:translate-x-1 transition-transform duration-300" style={{ strokeWidth: '2.8', stroke: 'white', fill: 'none', width: 'clamp(18px, 4vw, 20px)', height: 'clamp(18px, 4vw, 20px)' }} />
                    </div>
                  </span>
                </button>

                {/* Schedule a Demo Button - Premium Style */}
                <button
                  onClick={() => {
                    window.location.href = '/contact-us';
                  }}
                  className="group relative flex items-center justify-center gap-3 rounded-full transition-all duration-500 ease-out overflow-hidden hover:scale-105 active:scale-95 w-full sm:w-auto"
                  style={{
                    fontFamily: 'ibrand, sans-serif',
                    fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                    fontWeight: '700',
                    padding: 'clamp(14px, 3.5vw, 18px) clamp(24px, 5vw, 32px)',
                    cursor: 'pointer',
                    minWidth: 'clamp(200px, 50vw, 240px)',
                    minHeight: '52px',
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
                      width: 'clamp(32px, 7vw, 36px)',
                      height: 'clamp(32px, 7vw, 36px)',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.9), inset 0 -1px 0 rgba(0, 0, 0, 0.1)',
                      border: '1.5px solid rgba(0, 0, 0, 0.1)',
                      flexShrink: 0
                    }}>
                      <ArrowRight className="text-[#0a0e27] group-hover:translate-x-1 transition-transform duration-300" style={{ strokeWidth: '2.8', stroke: '#0a0e27', fill: 'none', width: 'clamp(18px, 4vw, 20px)', height: 'clamp(18px, 4vw, 20px)' }} />
                    </div>
                  </span>
                </button>
              </div>
            </div>

            {/* Right Column - Euro Coin Image */}
            <div className="hidden lg:flex items-center justify-center px-8 lg:px-16">
              <div className="relative w-full max-w-xs lg:max-w-sm">
                {/* Glow effect behind coin */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-amber-500/20 to-orange-500/20 blur-3xl rounded-full scale-110" />
                
                {/* Gold Coin Image */}
                <img 
                  src={euroCoinGold} 
                  alt="Euro Coin" 
                  className="relative z-10 w-full h-auto drop-shadow-2xl"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    maxHeight: 'clamp(300px, 40vh, 400px)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Digital Money Section */}
      <section className="relative w-full py-6 md:py-8 lg:py-10 overflow-hidden" style={{ backgroundColor: '#000' }}>
        {/* Background Pattern */}
        <img 
          src={newBgPattern} 
          alt="Background Pattern" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-10 flex items-center justify-center px-4 sm:px-6 md:px-8">
          <img 
            src={forDigitalMoney} 
            alt="For Digital Money" 
            className="w-full h-auto"
            style={{
              maxWidth: 'clamp(280px, 85vw, 600px)',
              height: 'auto'
            }}
          />
        </div>
      </section>

      {/* With You Banner Section */}
      <section className="relative w-full py-6 md:py-8 lg:py-10 overflow-hidden" style={{ backgroundColor: '#000' }}>
        {/* Background Pattern */}
        <img 
          src={newBgPattern} 
          alt="Background Pattern" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-10 flex items-center justify-center px-4 sm:px-6 md:px-8">
          <img 
            src={withYouBanner} 
            alt="With You Banner" 
            className="w-full h-auto"
            style={{
              maxWidth: 'clamp(280px, 85vw, 600px)',
              height: 'auto'
            }}
          />
        </div>
      </section>

      {/* How Eurocoin Works Section */}
      <section className="relative w-full py-6 md:py-8 lg:py-10 overflow-hidden" style={{ backgroundColor: '#000' }}>
        {/* Background Pattern */}
        <img 
          src={newBgPattern} 
          alt="Background Pattern" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-10 flex items-center justify-center px-4 sm:px-6 md:px-8">
          <img 
            src={howEurocoinWorks} 
            alt="How Eurocoin Works" 
            className="w-full h-auto"
            style={{
              maxWidth: 'clamp(280px, 85vw, 600px)',
              height: 'auto'
            }}
          />
        </div>
      </section>

      {/* Why Eurocoin Section */}
      <section className="relative w-full py-12 md:py-16 lg:py-20 overflow-hidden flex items-center justify-center" style={{ backgroundColor: 'transparent' }}>
        {/* Background Pattern */}
        <img 
          src={newBgPattern} 
          alt="Background Pattern" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Column - Euro Coin Image */}
            <div className="flex items-center justify-center lg:justify-start order-2 lg:order-1" style={{ paddingTop: 'clamp(2rem, 4vw, 3rem)', paddingBottom: 'clamp(2rem, 4vw, 3rem)' }}>
              <div className="relative w-full flex justify-center lg:justify-start" style={{ maxWidth: 'clamp(200px, 35vw, 320px)' }}>
                {/* Glow effect behind coin */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-amber-500/20 to-orange-500/20 blur-3xl rounded-full scale-110" style={{ width: '100%', height: '100%' }} />
                
                {/* Gold Coin Image */}
                <img 
                  src={euroCoinGold} 
                  alt="Euro Coin" 
                  className="relative z-10 w-full h-auto drop-shadow-2xl"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    maxHeight: 'clamp(250px, 35vh, 350px)',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left" style={{ paddingLeft: 'clamp(1rem, 3vw, 2rem)', paddingRight: 'clamp(1rem, 3vw, 2rem)' }}>
              {/* Section Title */}
              <h2 className="text-white mb-6 md:mb-8 lg:mb-10" style={{ 
                fontFamily: 'ibrand, sans-serif',
                fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
                lineHeight: '1.2',
                fontWeight: '600',
                marginBottom: 'clamp(1.5rem, 4vw, 2.5rem)'
              }}>
                Why Eurocoin?
              </h2>

              {/* Features Grid */}
              <div className="space-y-5 md:space-y-6 lg:space-y-7">
                {/* Feature 1 */}
                <div style={{ marginBottom: 'clamp(1.25rem, 3vw, 1.75rem)' }}>
                  <h3 className="text-cyan-400 mb-2 md:mb-3" style={{ 
                    fontFamily: 'ibrand, sans-serif',
                    fontSize: 'clamp(1.125rem, 3vw, 1.5rem)',
                    fontWeight: '600',
                    marginBottom: 'clamp(0.75rem, 2vw, 1rem)'
                  }}>
                    Stable & Secure
                  </h3>
                  <p className="text-white/70" style={{ 
                    fontFamily: 'ibrand, sans-serif',
                    fontSize: 'clamp(0.875rem, 2vw, 1.0625rem)',
                    lineHeight: '1.6',
                    marginBottom: '0'
                  }}>
                    Backed 1:1 by euro reserves held in regulated European banks, ensuring full transparency and trust.
                  </p>
                </div>

                {/* Feature 2 */}
                <div style={{ marginBottom: 'clamp(1.25rem, 3vw, 1.75rem)' }}>
                  <h3 className="text-cyan-400 mb-2 md:mb-3" style={{ 
                    fontFamily: 'ibrand, sans-serif',
                    fontSize: 'clamp(1.125rem, 3vw, 1.5rem)',
                    fontWeight: '600',
                    marginBottom: 'clamp(0.75rem, 2vw, 1rem)'
                  }}>
                    Fast Transactions
                  </h3>
                  <p className="text-white/70" style={{ 
                    fontFamily: 'ibrand, sans-serif',
                    fontSize: 'clamp(0.875rem, 2vw, 1.0625rem)',
                    lineHeight: '1.6',
                    marginBottom: '0'
                  }}>
                    Instant settlement across borders with minimal fees—no delays, no intermediaries.
                  </p>
                </div>

                {/* Feature 3 */}
                <div>
                  <h3 className="text-cyan-400 mb-2 md:mb-3" style={{ 
                    fontFamily: 'ibrand, sans-serif',
                    fontSize: 'clamp(1.125rem, 3vw, 1.5rem)',
                    fontWeight: '600',
                    marginBottom: 'clamp(0.75rem, 2vw, 1rem)'
                  }}>
                    Fully Regulated
                  </h3>
                  <p className="text-white/70" style={{ 
                    fontFamily: 'ibrand, sans-serif',
                    fontSize: 'clamp(0.875rem, 2vw, 1.0625rem)',
                    lineHeight: '1.6',
                    marginBottom: '0'
                  }}>
                    Compliant with EU financial regulations, including MiCA and AML standards, for peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="relative w-full overflow-hidden flex items-center justify-center" style={{ 
        minHeight: 'clamp(350px, 50vh, 500px)',
        paddingTop: 'clamp(40px, 8vw, 60px)',
        paddingBottom: 'clamp(40px, 8vw, 60px)'
      }}>
        {/* Background with hero image */}
        <div className="absolute inset-0">
          <img 
            src={heroBgImage} 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center flex flex-col items-center justify-center">
          {/* Main Heading */}
          <h2 
            className="text-white w-full"
            style={{
              fontFamily: 'ibrand, sans-serif',
              fontSize: 'clamp(1.75rem, 6vw, 3.5rem)',
              lineHeight: '1.15',
              fontWeight: '600',
              marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
              paddingLeft: '0.5rem',
              paddingRight: '0.5rem'
            }}
          >
            Get Started with Eurocoin
          </h2>
          
          {/* Subtitle */}
          <p 
            className="text-white"
            style={{
              fontFamily: 'ibrand, sans-serif',
              fontSize: 'clamp(0.95rem, 2.5vw, 1.25rem)',
              lineHeight: '1.7',
              opacity: 0.95,
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginBottom: 'clamp(2rem, 5vw, 3rem)',
              paddingLeft: '1rem',
              paddingRight: '1rem'
            }}
          >
            Power your transactions with Europe's most trusted digital euro. Join the future of digital finance today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-stretch sm:items-center w-full max-w-2xl mx-auto px-2 sm:px-4">
            {/* Get Started Button - Premium Style */}
            <button
              onClick={() => {
                // Navigate to contact or early access
                window.location.href = '/contact-us';
              }}
              className="group relative flex items-center justify-center gap-3 md:gap-4 rounded-full transition-all duration-500 ease-out overflow-hidden hover:scale-105 active:scale-95 w-full sm:w-auto sm:flex-1"
              style={{
                fontFamily: 'ibrand, sans-serif',
                fontSize: 'clamp(1rem, 3vw, 1.375rem)',
                fontWeight: '600',
                padding: 'clamp(18px, 5vw, 24px) clamp(32px, 7vw, 48px)',
                cursor: 'pointer',
                minHeight: '56px',
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
              <span className="relative z-10 flex items-center justify-center gap-3 md:gap-4" style={{ letterSpacing: '0.02em', whiteSpace: 'nowrap' }}>
                Get Started with Eurocoin
                <div className="relative z-10 flex items-center justify-center rounded-full bg-[#0a0e27] transition-all duration-300 group-hover:scale-110" style={{
                  width: 'clamp(38px, 9vw, 44px)',
                  height: 'clamp(38px, 9vw, 44px)',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  border: '1.5px solid rgba(0, 0, 0, 0.3)',
                  flexShrink: 0
                }}>
                  <ArrowRight className="text-white group-hover:translate-x-1 transition-transform duration-300" style={{ strokeWidth: '2.8', fill: 'white', width: 'clamp(22px, 5.5vw, 26px)', height: 'clamp(22px, 5.5vw, 26px)' }} />
                </div>
              </span>
            </button>

            {/* Schedule a Demo Button - Premium Style */}
            <button
              onClick={() => {
                // Navigate to contact or schedule demo
                window.location.href = '/contact-us';
              }}
              className="group relative flex items-center justify-center gap-3 md:gap-4 rounded-full transition-all duration-500 ease-out overflow-hidden hover:scale-105 active:scale-95 w-full sm:w-auto sm:flex-1"
              style={{
                fontFamily: 'ibrand, sans-serif',
                fontSize: 'clamp(1rem, 3vw, 1.375rem)',
                fontWeight: '600',
                padding: 'clamp(18px, 5vw, 24px) clamp(32px, 7vw, 48px)',
                cursor: 'pointer',
                minHeight: '56px',
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
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000"></span>
              <span className="relative z-10 flex items-center justify-center gap-3 md:gap-4 text-white font-medium" style={{ fontFamily: 'ibrand, sans-serif', letterSpacing: '0.02em', textShadow: '0 2px 4px rgba(0,0,0,0.2)', whiteSpace: 'nowrap' }}>
                Schedule a Demo
                <div className="relative z-10 flex items-center justify-center rounded-full bg-white transition-all duration-300 group-hover:scale-110" style={{
                  width: 'clamp(38px, 9vw, 44px)',
                  height: 'clamp(38px, 9vw, 44px)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
                  border: '1.5px solid rgba(0, 0, 0, 0.1)',
                  flexShrink: 0
                }}>
                  <ArrowRight className="text-[#0a0e27] group-hover:translate-x-1 transition-transform duration-300" style={{ strokeWidth: '2.8', fill: '#0a0e27', width: 'clamp(22px, 5.5vw, 26px)', height: 'clamp(22px, 5.5vw, 26px)' }} />
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
