import React, { useState } from 'react';
import { ArrowRight, Menu, X, ChevronDown } from 'lucide-react';
import logo from 'figma:asset/ba00e1228c75b9db4ef3b7e8988aea2b960cbbb4.png';
import { Link } from 'react-router';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [technologyDropdownOpen, setTechnologyDropdownOpen] = useState(false);
  const [whyUsDropdownOpen, setWhyUsDropdownOpen] = useState(false);
  const [aboutUsDropdownOpen, setAboutUsDropdownOpen] = useState(false);

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}} />
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e27]/90 backdrop-blur-xl">
      <div className="w-full px-4 md:px-8 py-3 md:py-4">
        <div className="flex items-center justify-between md:justify-center md:gap-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4">
            <img src={logo} alt="EURDT Stablecoin Logo" className="h-12 md:h-20 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
            <Link 
              to="/" 
              className="text-[#94BEFC] hover:text-white transition-colors duration-200 relative group text-base xl:text-lg"
              style={{ fontFamily: 'ibrand, sans-serif' }}
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/blogs" 
              className="text-[#94BEFC] hover:text-white transition-colors duration-200 relative group text-base xl:text-lg"
              style={{ fontFamily: 'ibrand, sans-serif' }}
            >
              Blogs
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <div 
              className="relative"
              onMouseEnter={() => setTechnologyDropdownOpen(true)}
              onMouseLeave={() => setTechnologyDropdownOpen(false)}
            >
              <button
                className="text-[#94BEFC] hover:text-white transition-colors duration-200 relative group text-base xl:text-lg flex items-center gap-1"
                style={{ fontFamily: 'ibrand, sans-serif' }}
              >
                Technology
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${technologyDropdownOpen ? 'rotate-180' : ''}`} />
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-200 group-hover:w-full"></span>
              </button>
              {technologyDropdownOpen && (
                <div 
                  className="absolute left-0 mt-4 w-[600px] rounded-2xl z-50"
                  style={{
                    background: 'linear-gradient(135deg, rgba(10, 14, 39, 0.98) 0%, rgba(13, 18, 48, 0.96) 100%)',
                    backdropFilter: 'blur(30px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                    border: '1.5px solid rgba(148, 190, 252, 0.3)',
                    boxShadow: `
                      0 12px 48px rgba(0, 0, 0, 0.5),
                      0 0 0 1px rgba(148, 190, 252, 0.2) inset,
                      inset 0 1px 0 rgba(255, 255, 255, 0.1),
                      0 0 32px rgba(148, 190, 252, 0.2)
                    `,
                    animation: 'fadeInDown 0.3s ease-out',
                    padding: '20px 24px',
                    overflow: 'visible'
                  }}
                >
                  <div className="relative z-10">
                    <Link
                      to="/technology"
                      className="group relative block px-6 py-5 text-base transition-all duration-300 mb-3"
                      style={{
                        color: 'rgba(255, 255, 255, 0.95)',
                        borderBottom: '1px solid rgba(148, 190, 252, 0.2)',
                        paddingBottom: '20px'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(90deg, rgba(148, 190, 252, 0.15) 0%, rgba(91, 159, 255, 0.1) 100%)';
                        e.currentTarget.style.color = '#FFFFFF';
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.95)';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <div className="flex items-center justify-center relative z-10 w-full">
                        <div className="flex-1 text-center" style={{ paddingRight: '60px' }}>
                          <div className="font-semibold text-lg transition-all duration-300 whitespace-nowrap" style={{ 
                            fontFamily: 'ibrand, sans-serif',
                            letterSpacing: '0.015em',
                            lineHeight: '1.5',
                            whiteSpace: 'nowrap'
                          }}>Technology of Eurocoin</div>
                        </div>
                        <div className="flex-shrink-0 flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" style={{
                          width: '40px',
                          height: '40px',
                          background: 'linear-gradient(135deg, rgba(148, 190, 252, 0.25) 0%, rgba(91, 159, 255, 0.2) 100%)',
                          border: '1.5px solid rgba(148, 190, 252, 0.35)',
                          boxShadow: '0 4px 12px rgba(148, 190, 252, 0.25)',
                          position: 'absolute',
                          right: '0px'
                        }}>
                          <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-all duration-300" style={{ strokeWidth: '2.5' }} />
                        </div>
                      </div>
                    </Link>
                    <Link
                      to="/how-eurocoin-works"
                      className="group relative block px-6 py-5 text-base transition-all duration-300"
                      style={{
                        color: 'rgba(255, 255, 255, 0.95)',
                        paddingTop: '20px'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(90deg, rgba(148, 190, 252, 0.15) 0%, rgba(91, 159, 255, 0.1) 100%)';
                        e.currentTarget.style.color = '#FFFFFF';
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.95)';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <div className="flex items-center justify-center relative z-10 w-full">
                        <div className="flex-1 text-center" style={{ paddingRight: '60px' }}>
                          <div className="font-semibold text-lg transition-all duration-300 whitespace-nowrap" style={{ 
                            fontFamily: 'ibrand, sans-serif',
                            letterSpacing: '0.015em',
                            lineHeight: '1.5',
                            whiteSpace: 'nowrap'
                          }}>How Eurocoin Works</div>
                        </div>
                        <div className="flex-shrink-0 flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" style={{
                          width: '40px',
                          height: '40px',
                          background: 'linear-gradient(135deg, rgba(148, 190, 252, 0.25) 0%, rgba(91, 159, 255, 0.2) 100%)',
                          border: '1.5px solid rgba(148, 190, 252, 0.35)',
                          boxShadow: '0 4px 12px rgba(148, 190, 252, 0.25)',
                          position: 'absolute',
                          right: '0px'
                        }}>
                          <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-all duration-300" style={{ strokeWidth: '2.5' }} />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link 
              to="/open-platform" 
              className="text-[#94BEFC] hover:text-white transition-colors duration-200 relative group text-base xl:text-lg"
              style={{ fontFamily: 'ibrand, sans-serif' }}
            >
              How It Works
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <div 
              className="relative"
              onMouseEnter={() => setWhyUsDropdownOpen(true)}
              onMouseLeave={() => setWhyUsDropdownOpen(false)}
            >
              <button
                className="text-[#94BEFC] hover:text-white transition-colors duration-200 relative group text-base xl:text-lg flex items-center gap-1"
                style={{ fontFamily: 'ibrand, sans-serif' }}
              >
                Why Us
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${whyUsDropdownOpen ? 'rotate-180' : ''}`} />
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-200 group-hover:w-full"></span>
              </button>
              {whyUsDropdownOpen && (
                <div 
                  className="absolute left-0 mt-4 w-[600px] rounded-2xl z-50"
                  style={{
                    background: 'linear-gradient(135deg, rgba(10, 14, 39, 0.98) 0%, rgba(13, 18, 48, 0.96) 100%)',
                    backdropFilter: 'blur(30px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                    border: '1.5px solid rgba(148, 190, 252, 0.3)',
                    boxShadow: `
                      0 12px 48px rgba(0, 0, 0, 0.5),
                      0 0 0 1px rgba(148, 190, 252, 0.2) inset,
                      inset 0 1px 0 rgba(255, 255, 255, 0.1),
                      0 0 32px rgba(148, 190, 252, 0.2)
                    `,
                    animation: 'fadeInDown 0.3s ease-out',
                    padding: '20px 24px',
                    overflow: 'visible'
                  }}
                >
                  <div className="relative z-10">
                    <Link
                      to="/advantage-of-eurocoin"
                      className="group relative block px-6 py-5 text-base transition-all duration-300 mb-3"
                      style={{
                        color: 'rgba(255, 255, 255, 0.95)',
                        borderBottom: '1px solid rgba(148, 190, 252, 0.2)',
                        paddingBottom: '20px'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(90deg, rgba(148, 190, 252, 0.15) 0%, rgba(91, 159, 255, 0.1) 100%)';
                        e.currentTarget.style.color = '#FFFFFF';
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.95)';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <div className="flex items-center justify-center relative z-10 w-full">
                        <div className="flex-1 text-center" style={{ paddingRight: '60px' }}>
                          <div className="font-semibold text-lg transition-all duration-300 whitespace-nowrap" style={{ 
                            fontFamily: 'ibrand, sans-serif',
                            letterSpacing: '0.015em',
                            lineHeight: '1.5',
                            whiteSpace: 'nowrap'
                          }}>Advantage of Eurocoin</div>
                        </div>
                        <div className="flex-shrink-0 flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" style={{
                          width: '40px',
                          height: '40px',
                          background: 'linear-gradient(135deg, rgba(148, 190, 252, 0.25) 0%, rgba(91, 159, 255, 0.2) 100%)',
                          border: '1.5px solid rgba(148, 190, 252, 0.35)',
                          boxShadow: '0 4px 12px rgba(148, 190, 252, 0.25)',
                          position: 'absolute',
                          right: '0px'
                        }}>
                          <ArrowRight className="w-5 h-5 text-blue-400 group-hover:translate-x-1 transition-all duration-300" style={{ strokeWidth: '2.5' }} />
                        </div>
                      </div>
                    </Link>
                    <Link
                      to="/use-cases-and-solution"
                      className="group relative block px-6 py-5 text-base transition-all duration-300"
                      style={{
                        color: 'rgba(255, 255, 255, 0.95)',
                        paddingTop: '20px'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(90deg, rgba(148, 190, 252, 0.15) 0%, rgba(91, 159, 255, 0.1) 100%)';
                        e.currentTarget.style.color = '#FFFFFF';
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.95)';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <div className="flex items-center justify-center relative z-10 w-full">
                        <div className="flex-1 text-center" style={{ paddingRight: '60px' }}>
                          <div className="font-semibold text-lg transition-all duration-300 whitespace-nowrap" style={{ 
                            fontFamily: 'ibrand, sans-serif',
                            letterSpacing: '0.015em',
                            lineHeight: '1.5',
                            whiteSpace: 'nowrap'
                          }}>Use Cases and Solution</div>
                        </div>
                        <div className="flex-shrink-0 flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" style={{
                          width: '40px',
                          height: '40px',
                          background: 'linear-gradient(135deg, rgba(148, 190, 252, 0.25) 0%, rgba(91, 159, 255, 0.2) 100%)',
                          border: '1.5px solid rgba(148, 190, 252, 0.35)',
                          boxShadow: '0 4px 12px rgba(148, 190, 252, 0.25)',
                          position: 'absolute',
                          right: '0px'
                        }}>
                          <ArrowRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-all duration-300" style={{ strokeWidth: '2.5' }} />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div 
              className="relative"
              onMouseEnter={() => setAboutUsDropdownOpen(true)}
              onMouseLeave={() => setAboutUsDropdownOpen(false)}
            >
              <button
                className="text-[#94BEFC] hover:text-white transition-colors duration-200 relative group text-base xl:text-lg flex items-center gap-1"
                style={{ fontFamily: 'ibrand, sans-serif' }}
              >
                About Us
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${aboutUsDropdownOpen ? 'rotate-180' : ''}`} />
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-200 group-hover:w-full"></span>
              </button>
              {aboutUsDropdownOpen && (
                <div 
                  className="absolute left-0 mt-4 w-[600px] rounded-2xl z-50"
                  style={{
                    background: 'linear-gradient(135deg, rgba(10, 14, 39, 0.98) 0%, rgba(13, 18, 48, 0.96) 100%)',
                    backdropFilter: 'blur(30px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(30px) saturate(180%)',
                    border: '1.5px solid rgba(148, 190, 252, 0.3)',
                    boxShadow: `
                      0 12px 48px rgba(0, 0, 0, 0.5),
                      0 0 0 1px rgba(148, 190, 252, 0.2) inset,
                      inset 0 1px 0 rgba(255, 255, 255, 0.1),
                      0 0 32px rgba(148, 190, 252, 0.2)
                    `,
                    animation: 'fadeInDown 0.3s ease-out',
                    padding: '20px 24px',
                    overflow: 'visible'
                  }}
                >
                  <div className="relative z-10">
                    <Link
                      to="/eurocoin-team"
                      className="group relative block px-6 py-5 text-base transition-all duration-300 mb-3"
                      style={{
                        color: 'rgba(255, 255, 255, 0.95)',
                        borderBottom: '1px solid rgba(148, 190, 252, 0.2)',
                        paddingBottom: '20px'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(90deg, rgba(148, 190, 252, 0.15) 0%, rgba(91, 159, 255, 0.1) 100%)';
                        e.currentTarget.style.color = '#FFFFFF';
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.95)';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <div className="flex items-center justify-center relative z-10 w-full">
                        <div className="flex-1 text-center" style={{ paddingRight: '60px' }}>
                          <div className="font-semibold text-lg transition-all duration-300 whitespace-nowrap" style={{ 
                            fontFamily: 'ibrand, sans-serif',
                            letterSpacing: '0.015em',
                            lineHeight: '1.5',
                            whiteSpace: 'nowrap'
                          }}>Eurocoin Team</div>
                        </div>
                        <div className="flex-shrink-0 flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" style={{
                          width: '40px',
                          height: '40px',
                          background: 'linear-gradient(135deg, rgba(148, 190, 252, 0.25) 0%, rgba(91, 159, 255, 0.2) 100%)',
                          border: '1.5px solid rgba(148, 190, 252, 0.35)',
                          boxShadow: '0 4px 12px rgba(148, 190, 252, 0.25)',
                          position: 'absolute',
                          right: '0px'
                        }}>
                          <ArrowRight className="w-5 h-5 text-indigo-400 group-hover:translate-x-1 transition-all duration-300" style={{ strokeWidth: '2.5' }} />
                        </div>
                      </div>
                    </Link>
                    <Link
                      to="/partners-integrations"
                      className="group relative block px-6 py-5 text-base transition-all duration-300 mb-3"
                      style={{
                        color: 'rgba(255, 255, 255, 0.95)',
                        borderBottom: '1px solid rgba(148, 190, 252, 0.2)',
                        paddingTop: '20px',
                        paddingBottom: '20px'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(90deg, rgba(148, 190, 252, 0.15) 0%, rgba(91, 159, 255, 0.1) 100%)';
                        e.currentTarget.style.color = '#FFFFFF';
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.95)';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <div className="flex items-center justify-center relative z-10 w-full">
                        <div className="flex-1 text-center" style={{ paddingRight: '60px' }}>
                          <div className="font-semibold text-lg transition-all duration-300 whitespace-nowrap" style={{ 
                            fontFamily: 'ibrand, sans-serif',
                            letterSpacing: '0.015em',
                            lineHeight: '1.5',
                            whiteSpace: 'nowrap'
                          }}>Partners and Integrations</div>
                        </div>
                        <div className="flex-shrink-0 flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" style={{
                          width: '40px',
                          height: '40px',
                          background: 'linear-gradient(135deg, rgba(148, 190, 252, 0.25) 0%, rgba(91, 159, 255, 0.2) 100%)',
                          border: '1.5px solid rgba(148, 190, 252, 0.35)',
                          boxShadow: '0 4px 12px rgba(148, 190, 252, 0.25)',
                          position: 'absolute',
                          right: '0px'
                        }}>
                          <ArrowRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-all duration-300" style={{ strokeWidth: '2.5' }} />
                        </div>
                      </div>
                    </Link>
                    <Link
                      to="/compliance-security"
                      className="group relative block px-6 py-5 text-base transition-all duration-300"
                      style={{
                        color: 'rgba(255, 255, 255, 0.95)',
                        paddingTop: '20px'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(90deg, rgba(148, 190, 252, 0.15) 0%, rgba(91, 159, 255, 0.1) 100%)';
                        e.currentTarget.style.color = '#FFFFFF';
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.95)';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      <div className="flex items-center justify-center relative z-10 w-full">
                        <div className="flex-1 text-center" style={{ paddingRight: '60px' }}>
                          <div className="font-semibold text-lg transition-all duration-300 whitespace-nowrap" style={{ 
                            fontFamily: 'ibrand, sans-serif',
                            letterSpacing: '0.015em',
                            lineHeight: '1.5',
                            whiteSpace: 'nowrap'
                          }}>Compliance & Security</div>
                        </div>
                        <div className="flex-shrink-0 flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" style={{
                          width: '40px',
                          height: '40px',
                          background: 'linear-gradient(135deg, rgba(148, 190, 252, 0.25) 0%, rgba(91, 159, 255, 0.2) 100%)',
                          border: '1.5px solid rgba(148, 190, 252, 0.35)',
                          boxShadow: '0 4px 12px rgba(148, 190, 252, 0.25)',
                          position: 'absolute',
                          right: '0px'
                        }}>
                          <ArrowRight className="w-5 h-5 text-green-400 group-hover:translate-x-1 transition-all duration-300" style={{ strokeWidth: '2.5' }} />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link 
              to="/faq" 
              className="text-[#94BEFC] hover:text-white transition-colors duration-200 relative group text-base xl:text-lg"
              style={{ fontFamily: 'ibrand, sans-serif' }}
            >
              FAQ
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-200 group-hover:w-full"></span>
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Contact Button */}
            <Link to="/contact-us">
              <button className="group relative flex items-center justify-center gap-4 px-12 md:px-20 py-5 md:py-6 rounded-full overflow-hidden transition-all duration-500 hover:scale-105" style={{
                background: 'linear-gradient(135deg, rgba(148, 190, 252, 0.25) 0%, rgba(91, 159, 255, 0.3) 50%, rgba(148, 190, 252, 0.25) 100%)',
                border: '2px solid rgba(148, 190, 252, 0.5)',
                backdropFilter: 'blur(20px)',
                boxShadow: `
                  0 8px 32px rgba(148, 190, 252, 0.3),
                  0 0 0 1px rgba(255, 255, 255, 0.1) inset,
                  0 2px 8px rgba(0, 0, 0, 0.2)
                `,
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
                <span className="relative z-10 text-white font-semibold text-sm sm:text-base md:text-lg" style={{ 
                  fontFamily: 'ibrand, sans-serif',
                  letterSpacing: '0.5px',
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                  marginLeft: '8px'
                }}>Contact Us</span>
                <div className="relative z-10 flex items-center justify-center rounded-full bg-white transition-all duration-300 group-hover:scale-110" style={{ 
                  width: '36px', 
                  height: '36px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
                }}>
                  <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700"></div>
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 border-t border-white/10 max-h-[85vh] overflow-y-auto" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
            <div className="flex flex-col gap-3">
              <Link 
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/80 hover:text-white transition-colors duration-200 py-4 px-4 rounded-lg hover:bg-white/5"
                style={{ fontFamily: 'ibrand, sans-serif' }}
              >
                Home
              </Link>
              <Link 
                to="/blogs"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/80 hover:text-white transition-colors duration-200 py-4 px-4 rounded-lg hover:bg-white/5"
                style={{ fontFamily: 'ibrand, sans-serif' }}
              >
                Blogs
              </Link>
              
              {/* Technology Dropdown */}
              <div className="flex flex-col">
                <div className="py-4 px-4 text-base" style={{ color: '#94BEFC', fontWeight: 'bold', fontFamily: 'ibrand, sans-serif' }}>Technology</div>
                <Link 
                  to="/technology"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#94BEFC] hover:text-white transition-colors duration-200 py-3 px-8 rounded-lg hover:bg-white/5"
                  style={{ fontFamily: 'ibrand, sans-serif' }}
                >
                  Technology of Eurocoin
                </Link>
                <Link 
                  to="/how-eurocoin-works"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#94BEFC] hover:text-white transition-colors duration-200 py-3 px-8 rounded-lg hover:bg-white/5"
                  style={{ fontFamily: 'ibrand, sans-serif' }}
                >
                  How Eurocoin Works
                </Link>
              </div>
              
              <Link 
                to="/open-platform"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/80 hover:text-white transition-colors duration-200 py-4 px-4 rounded-lg hover:bg-white/5"
                style={{ fontFamily: 'ibrand, sans-serif' }}
              >
                How It Works
              </Link>
              
              {/* Why Us Dropdown */}
              <div className="flex flex-col">
                <div className="py-4 px-4 text-base" style={{ color: '#94BEFC', fontWeight: 'bold', fontFamily: 'ibrand, sans-serif' }}>Why Us</div>
                <Link 
                  to="/advantage-of-eurocoin"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#94BEFC] hover:text-white transition-colors duration-200 py-3 px-8 rounded-lg hover:bg-white/5"
                  style={{ fontFamily: 'ibrand, sans-serif' }}
                >
                  Advantage of Eurocoin
                </Link>
                <Link 
                  to="/use-cases-and-solution"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#94BEFC] hover:text-white transition-colors duration-200 py-3 px-8 rounded-lg hover:bg-white/5"
                  style={{ fontFamily: 'ibrand, sans-serif' }}
                >
                  Use Cases and Solution
                </Link>
              </div>
              
              {/* About Us Dropdown */}
              <div className="flex flex-col">
                <div className="py-4 px-4 text-base" style={{ color: '#94BEFC', fontWeight: 'bold', fontFamily: 'ibrand, sans-serif' }}>About Us</div>
                <Link 
                  to="/eurocoin-team"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#94BEFC] hover:text-white transition-colors duration-200 py-3 px-8 rounded-lg hover:bg-white/5"
                  style={{ fontFamily: 'ibrand, sans-serif' }}
                >
                  Eurocoin Team
                </Link>
                <Link 
                  to="/partners-integrations"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#94BEFC] hover:text-white transition-colors duration-200 py-3 px-8 rounded-lg hover:bg-white/5"
                  style={{ fontFamily: 'ibrand, sans-serif' }}
                >
                  Partners and Integrations
                </Link>
                <Link 
                  to="/compliance-security"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#94BEFC] hover:text-white transition-colors duration-200 py-3 px-8 rounded-lg hover:bg-white/5"
                  style={{ fontFamily: 'ibrand, sans-serif' }}
                >
                  Compliance & Security
                </Link>
              </div>
              
              <Link 
                to="/faq"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/80 hover:text-white transition-colors duration-200 py-4 px-4 rounded-lg hover:bg-white/5"
                style={{ fontFamily: 'ibrand, sans-serif' }}
              >
                FAQ
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
    </>
  );
}