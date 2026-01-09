import React, { useState } from 'react';
import { Instagram, Youtube, Phone, Send, MessageCircle, ChevronDown, MapPin, Mail } from 'lucide-react';
import svgPaths from '../imports/svg-ciz2gpotlv';
import imgVividBlurredColorfulWallpaperBackground11 from 'figma:asset/ce7caeef00ed2a6b2a2fd35a7e4e0a68ac6644f0.png';
import footerBg from 'figma:asset/9d80727f80b332b8c897bc38f0fd946d60999d41.png';

function LogoIcon() {
  return (
    <div className="relative w-[120px] h-[120px]">
      {/* Radial circle design */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" fill="none" viewBox="0 0 120 120">
          {/* Radial lines around circle */}
          <g opacity="0.8">
            {Array.from({ length: 34 }).map((_, i) => {
              const angle = (i * 360) / 34;
              const rad = (angle * Math.PI) / 180;
              const innerRadius = 35;
              const outerRadius = 50;
              const x1 = 60 + innerRadius * Math.cos(rad);
              const y1 = 60 + innerRadius * Math.sin(rad);
              const x2 = 60 + outerRadius * Math.cos(rad);
              const y2 = 60 + outerRadius * Math.sin(rad);
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="white"
                  strokeWidth="1.5"
                />
              );
            })}
          </g>
          {/* Blurred background */}
          <defs>
            <filter id="blur">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
            </filter>
          </defs>
          <image
            href={imgVividBlurredColorfulWallpaperBackground11}
            x="20"
            y="20"
            width="80"
            height="80"
            filter="url(#blur)"
            opacity="0.6"
          />
          {/* Euro symbol */}
          <text
            x="60"
            y="75"
            textAnchor="middle"
            fill="#0698ED"
            fontSize="48"
            fontWeight="bold"
            fontFamily="Arial, sans-serif"
          >
            €
          </text>
        </svg>
      </div>
    </div>
  );
}

interface AccordionSectionProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

function AccordionSection({ title, isOpen, onToggle, children }: AccordionSectionProps) {
  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-left focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-transparent rounded-lg transition-all"
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${title.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <h4 className="text-white text-sm font-semibold uppercase tracking-[0.1em]" style={{ fontFamily: 'ibrand, sans-serif' }}>
          {title}
        </h4>
        <ChevronDown 
          className={`w-5 h-5 text-white/60 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      <div
        id={`accordion-content-${title.toLowerCase().replace(/\s+/g, '-')}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="pb-4">
          {children}
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    'regulated': false,
    'technology': false,
    'investor': false,
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <footer className="relative py-32 font-['Manrope',sans-serif]">
      {/* Background Image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${footerBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      
      {/* Content */}
      <div className="relative w-full px-4 md:px-8 z-10 py-20 md:py-32">
        <div className="w-full mx-auto">
          <div className="relative flex flex-col items-center justify-center">
            <div className="w-full max-w-6xl px-4">
          
          {/* Top section */}
          <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-16 pb-16 mb-12 border-b border-white/20">
            
            {/* Left: Logo and Address */}
            <div className="space-y-8">
              {/* Logo */}
              <div className="flex items-center gap-4">
                <LogoIcon />
                <div className="flex flex-col gap-1">
                  <h3 className="text-white text-3xl font-bold" style={{ fontFamily: 'ibrand, sans-serif', letterSpacing: '0.1em', wordSpacing: '0.2em' }}>EURDT</h3>
                  <p className="text-[#94BEFC] text-xl font-medium" style={{ fontFamily: 'ibrand, sans-serif', letterSpacing: '0.05em', wordSpacing: '0.15em' }}>Stablecoins</p>
                  <p className="text-[#94BEFC]/70 text-xs mt-2 font-medium" style={{ fontFamily: 'ibrand, sans-serif', letterSpacing: '0.03em', wordSpacing: '0.1em' }}>Powered by Billon Group</p>
                </div>
              </div>
              
              {/* Address */}
              <div className="space-y-3 text-white/80 text-sm" style={{ fontFamily: 'ibrand, sans-serif', lineHeight: '1.8', letterSpacing: '0.05em', wordSpacing: '0.15em' }}>
                <p className="hover:text-white transition-colors cursor-pointer">
                  1901 Thornridge Cir. Shiloh, Hawaii 81063
                </p>
                <p className="hover:text-white transition-colors cursor-pointer">
                  +1 891 989-11-91
                </p>
                <p className="hover:text-white transition-colors cursor-pointer">
                  info@eurocoin.com
                </p>
              </div>
            </div>

            {/* Right: Three columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 self-end font-['Poppins',sans-serif]">
              
              {/* Column 1: Regulated & Compliant */}
              <div>
                <h4 className="text-white/90 text-xs uppercase tracking-widest mb-6 font-semibold" style={{ fontFamily: 'ibrand, sans-serif', letterSpacing: '0.15em', wordSpacing: '0.2em' }}>
                  Regulated & Compliant
                </h4>
                <ul className="space-y-3 text-white/70 text-sm" style={{ fontFamily: 'ibrand, sans-serif', lineHeight: '1.8', letterSpacing: '0.05em', wordSpacing: '0.15em' }}>
                  <li className="hover:text-white transition-colors cursor-pointer">MiCA-Compliant</li>
                  <li className="hover:text-white transition-colors cursor-pointer">EMI Licensed (KNF)</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Fully Regulated Electronic Money Institution</li>
                </ul>
              </div>

              {/* Column 2: Technology */}
              <div>
                <h4 className="text-white/90 text-xs uppercase tracking-widest mb-6 font-semibold" style={{ fontFamily: 'ibrand, sans-serif', letterSpacing: '0.15em', wordSpacing: '0.2em' }}>
                  Technology
                </h4>
                <ul className="space-y-3 text-white/70 text-sm" style={{ fontFamily: 'ibrand, sans-serif', lineHeight: '1.8', letterSpacing: '0.05em', wordSpacing: '0.15em' }}>
                  <li className="hover:text-white transition-colors cursor-pointer">Powered by Billon Group</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Billon Unified Blockchain</li>
                  <li className="hover:text-white transition-colors cursor-pointer">530,000 TPS Certified</li>
                </ul>
              </div>

              {/* Column 3: Investor Relations */}
              <div>
                <h4 className="text-white/90 text-xs uppercase tracking-widest mb-6 font-semibold" style={{ fontFamily: 'ibrand, sans-serif', letterSpacing: '0.15em', wordSpacing: '0.2em' }}>
                  Investor Relations
                </h4>
                <ul className="space-y-3 text-white/70 text-sm" style={{ fontFamily: 'ibrand, sans-serif', lineHeight: '1.8', letterSpacing: '0.05em', wordSpacing: '0.15em' }}>
                  <li className="hover:text-white transition-colors cursor-pointer">Whitepaper Download</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Investment Deck</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Schedule Investor Demo</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Middle section: Social and Chat */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 mb-8">
            
            {/* Follow us */}
            <div className="flex items-center gap-6">
              <span className="text-white/80 text-sm font-medium" style={{ fontFamily: 'ibrand, sans-serif', letterSpacing: '0.08em', wordSpacing: '0.15em' }}>Follow us</span>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="group relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, rgba(148, 190, 252, 0.15) 0%, rgba(91, 159, 255, 0.1) 100%)',
                    border: '1.5px solid rgba(148, 190, 252, 0.3)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 4px 12px rgba(148, 190, 252, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(148, 190, 252, 0.3) 0%, rgba(91, 159, 255, 0.2) 100%)';
                    e.currentTarget.style.borderColor = 'rgba(148, 190, 252, 0.5)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(148, 190, 252, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(148, 190, 252, 0.15) 0%, rgba(91, 159, 255, 0.1) 100%)';
                    e.currentTarget.style.borderColor = 'rgba(148, 190, 252, 0.3)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(148, 190, 252, 0.2)';
                  }}
                >
                  <Instagram className="w-6 h-6 text-[#94BEFC] group-hover:text-white transition-colors" style={{ strokeWidth: '2' }} />
                </a>
                <a 
                  href="#" 
                  className="group relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, rgba(148, 190, 252, 0.15) 0%, rgba(91, 159, 255, 0.1) 100%)',
                    border: '1.5px solid rgba(148, 190, 252, 0.3)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 4px 12px rgba(148, 190, 252, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(148, 190, 252, 0.3) 0%, rgba(91, 159, 255, 0.2) 100%)';
                    e.currentTarget.style.borderColor = 'rgba(148, 190, 252, 0.5)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(148, 190, 252, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(148, 190, 252, 0.15) 0%, rgba(91, 159, 255, 0.1) 100%)';
                    e.currentTarget.style.borderColor = 'rgba(148, 190, 252, 0.3)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(148, 190, 252, 0.2)';
                  }}
                >
                  <Youtube className="w-6 h-6 text-[#94BEFC] group-hover:text-white transition-colors" style={{ strokeWidth: '2' }} />
                </a>
              </div>
            </div>

            {/* Let's chat */}
            <div className="flex items-center gap-6">
              <span className="text-white/80 text-sm font-medium" style={{ fontFamily: 'ibrand, sans-serif', letterSpacing: '0.08em', wordSpacing: '0.15em' }}>Let's chat</span>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="group relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, rgba(148, 190, 252, 0.15) 0%, rgba(91, 159, 255, 0.1) 100%)',
                    border: '1.5px solid rgba(148, 190, 252, 0.3)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 4px 12px rgba(148, 190, 252, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(148, 190, 252, 0.3) 0%, rgba(91, 159, 255, 0.2) 100%)';
                    e.currentTarget.style.borderColor = 'rgba(148, 190, 252, 0.5)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(148, 190, 252, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(148, 190, 252, 0.15) 0%, rgba(91, 159, 255, 0.1) 100%)';
                    e.currentTarget.style.borderColor = 'rgba(148, 190, 252, 0.3)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(148, 190, 252, 0.2)';
                  }}
                >
                  <Phone className="w-6 h-6 text-[#94BEFC] group-hover:text-white transition-colors" style={{ strokeWidth: '2' }} />
                </a>
                <a 
                  href="#" 
                  className="group relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, rgba(148, 190, 252, 0.15) 0%, rgba(91, 159, 255, 0.1) 100%)',
                    border: '1.5px solid rgba(148, 190, 252, 0.3)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 4px 12px rgba(148, 190, 252, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(148, 190, 252, 0.3) 0%, rgba(91, 159, 255, 0.2) 100%)';
                    e.currentTarget.style.borderColor = 'rgba(148, 190, 252, 0.5)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(148, 190, 252, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(148, 190, 252, 0.15) 0%, rgba(91, 159, 255, 0.1) 100%)';
                    e.currentTarget.style.borderColor = 'rgba(148, 190, 252, 0.3)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(148, 190, 252, 0.2)';
                  }}
                >
                  <Send className="w-6 h-6 text-[#94BEFC] group-hover:text-white transition-colors" style={{ strokeWidth: '2' }} />
                </a>
                <a 
                  href="#" 
                  className="group relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, rgba(148, 190, 252, 0.15) 0%, rgba(91, 159, 255, 0.1) 100%)',
                    border: '1.5px solid rgba(148, 190, 252, 0.3)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 4px 12px rgba(148, 190, 252, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(148, 190, 252, 0.3) 0%, rgba(91, 159, 255, 0.2) 100%)';
                    e.currentTarget.style.borderColor = 'rgba(148, 190, 252, 0.5)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(148, 190, 252, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(148, 190, 252, 0.15) 0%, rgba(91, 159, 255, 0.1) 100%)';
                    e.currentTarget.style.borderColor = 'rgba(148, 190, 252, 0.3)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(148, 190, 252, 0.2)';
                  }}
                >
                  <MessageCircle className="w-6 h-6 text-[#94BEFC] group-hover:text-white transition-colors" style={{ strokeWidth: '2' }} />
                </a>
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/20">
            <p className="text-white/70 text-sm" style={{ fontFamily: 'ibrand, sans-serif', letterSpacing: '0.03em', wordSpacing: '0.1em' }}>
              Copyright © 2025 EURDT. All rights reserved.
            </p>
            <div className="flex gap-8 text-white/70 text-sm" style={{ fontFamily: 'ibrand, sans-serif', letterSpacing: '0.03em', wordSpacing: '0.1em' }}>
              <a href="#" className="hover:text-white transition-colors duration-200">Press Kit</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Legal Disclaimers</a>
              <a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
            </div>
            <p className="text-white/70 text-sm" style={{ fontFamily: 'ibrand, sans-serif', letterSpacing: '0.03em', wordSpacing: '0.1em' }}>
              Design and Developed by <span className="text-white font-semibold">KATALYST CRM</span>
            </p>
          </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
