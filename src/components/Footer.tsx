import React from 'react';
import { Instagram, Youtube, Phone, Send, MessageCircle } from 'lucide-react';
import footerBg from 'figma:asset/9d80727f80b332b8c897bc38f0fd946d60999d41.png';
import logoIcon from '../assets/logo_icon/eurocoin_icon_logo.png';

export function Footer() {
  return (
    <footer className="relative pb-32 font-['Manrope',sans-serif]" style={{ paddingTop: 'clamp(1rem, 2vw, 2rem)' }}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${footerBg})` }}
      />
      {/* Content */}
      <div className="relative w-full px-4 md:px-8 z-10 pt-6 md:pt-8 pb-20 md:pb-32">
        <div className="w-full mx-auto">
          <div className="relative flex flex-col items-center justify-center">
            <div className="w-full max-w-6xl px-4">
          
          {/* Top section */}
          <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] border-b border-white/10" style={{ gap: 'clamp(1rem, 2.5vw, 1.5rem)', paddingBottom: 'clamp(1rem, 2.5vw, 1.5rem)', marginBottom: 'clamp(0.75rem, 2vw, 1rem)' }}>
            
            {/* Left: Logo and Address */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(0.75rem, 2vw, 1rem)' }}>
              {/* Logo */}
              <div className="flex items-center gap-4">
                <img 
                  src={logoIcon} 
                  alt="Eurocoin Logo" 
                  className="w-auto"
                  style={{ height: 'clamp(3.25rem, 4vw, 4.25rem)' }}
                  loading="lazy"
                />
                <div className="flex flex-col">
                  <span 
                    className="text-white font-bold text-xl md:text-2xl leading-tight"
                    style={{ fontFamily: 'ibrand, sans-serif' }}
                  >
                    Eurocoin <span className="text-[#94BEFC] font-medium">[EURDT]</span>
                  </span>
                  <p className="text-[#b8d5ff] text-xs mt-2">Powered by Billon Group</p>
                </div>
              </div>
              
              {/* Address */}
              <div className="text-[#b9b9b9] text-sm" style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(0.25rem, 0.75vw, 0.5rem)' }}>
                <p>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                <p>+1 891 989-11-91</p>
                <p>info@eurocoin.com</p>
              </div>
            </div>

            {/* Right: Three columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 self-end font-['Poppins',sans-serif]" style={{ gap: 'clamp(1rem, 2.5vw, 1.5rem)', wordSpacing: '0.05em', letterSpacing: '-0.01em' }}>
              
              {/* Column 1: Regulated & Compliant */}
              <div>
                <h4 
                  className="text-[#b9b9b9] uppercase" 
                  style={{ 
                    fontFamily: 'ibrand, sans-serif',
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                    fontWeight: '700',
                    marginBottom: 'clamp(0.75rem, 2vw, 1rem)'
                  }}
                >
                  Regulated & Compliant
                </h4>
                <ul className="text-[#b9b9b9]" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', display: 'flex', flexDirection: 'column', gap: 'clamp(0.125rem, 0.5vw, 0.25rem)', wordSpacing: '0.05em', letterSpacing: '-0.01em' }}>
                  <li>MiCA-Compliant</li>
                  <li>EMI Licensed (KNF)</li>
                  <li>Fully Regulated Electronic Money Institution</li>
                </ul>
              </div>

              {/* Column 2: Technology */}
              <div>
                <h4 
                  className="text-[#b9b9b9] uppercase" 
                  style={{ 
                    fontFamily: 'ibrand, sans-serif',
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                    fontWeight: '700',
                    marginBottom: 'clamp(0.75rem, 2vw, 1rem)'
                  }}
                >
                  Technology
                </h4>
                <ul className="text-[#b9b9b9]" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', display: 'flex', flexDirection: 'column', gap: 'clamp(0.125rem, 0.5vw, 0.25rem)', wordSpacing: '0.05em', letterSpacing: '-0.01em' }}>
                  <li>Powered by Billon Group</li>
                  <li>Billon Unified Blockchain</li>
                  <li>530,000 TPS Certified</li>
                </ul>
              </div>

              {/* Column 3: Investor Relations */}
              <div>
                <h4 
                  className="text-[#b9b9b9] uppercase" 
                  style={{ 
                    fontFamily: 'ibrand, sans-serif',
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                    fontWeight: '700',
                    marginBottom: 'clamp(0.75rem, 2vw, 1rem)'
                  }}
                >
                  Investor Relations
                </h4>
                <ul className="text-[#b9b9b9]" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', display: 'flex', flexDirection: 'column', gap: 'clamp(0.125rem, 0.5vw, 0.25rem)', wordSpacing: '0.05em', letterSpacing: '-0.01em' }}>
                  <li>Whitepaper Download</li>
                  <li>Investment Deck</li>
                  <li>Schedule Investor Demo</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Middle section: Social and Chat */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center" style={{ gap: 'clamp(0.75rem, 2vw, 1rem)', paddingBottom: 'clamp(0.5rem, 1.5vw, 0.75rem)', marginBottom: 'clamp(0.5rem, 1.5vw, 0.75rem)' }}>
            
            {/* Follow us */}
            <div className="flex items-center" style={{ gap: 'clamp(0.75rem, 2vw, 1rem)' }}>
              <span className="text-[#b9b9b9] text-sm">Follow us</span>
              <div className="flex" style={{ gap: 'clamp(0.375rem, 1vw, 0.5rem)' }}>
                <a href="#" className="w-12 h-12 rounded-full border border-[#B8D5FF]/25 flex items-center justify-center hover:bg-white/5 transition-colors">
                  <Instagram className="w-5 h-5 text-[#B8D5FF]" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-[#B8D5FF]/25 flex items-center justify-center hover:bg-white/5 transition-colors">
                  <Youtube className="w-5 h-5 text-[#B8D5FF]" />
                </a>
              </div>
            </div>

            {/* Let's chat */}
            <div className="flex items-center" style={{ gap: 'clamp(0.75rem, 2vw, 1rem)' }}>
              <span className="text-[#b9b9b9] text-sm">Let's chat</span>
              <div className="flex" style={{ gap: 'clamp(0.375rem, 1vw, 0.5rem)' }}>
                <a href="#" className="w-12 h-12 rounded-full border border-[#B8D5FF]/25 flex items-center justify-center hover:bg-white/5 transition-colors">
                  <Phone className="w-5 h-5 text-[#B8D5FF]" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-[#B8D5FF]/25 flex items-center justify-center hover:bg-white/5 transition-colors">
                  <Send className="w-5 h-5 text-[#B8D5FF]" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-[#B8D5FF]/25 flex items-center justify-center hover:bg-white/5 transition-colors">
                  <MessageCircle className="w-5 h-5 text-[#B8D5FF]" />
                </a>
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10" style={{ gap: 'clamp(0.5rem, 1.5vw, 1rem)', paddingTop: 'clamp(0.75rem, 2vw, 1rem)' }}>
            <p className="text-[#b9b9b9] text-sm">
              Copyright © 2025 EURDT. All rights reserved.
            </p>
            <div className="flex gap-6 text-[#b9b9b9] text-sm">
              <a href="#" className="hover:text-white transition-colors">Press Kit</a>
              <a href="#" className="hover:text-white transition-colors">Legal Disclaimers</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            </div>
            <p className="text-[#b9b9b9] text-sm">
              Design and Developed by <span className="text-white">KATALYST CRM</span>
            </p>
          </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}