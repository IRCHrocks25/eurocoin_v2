import { ArrowRight, Menu, X, ChevronDown } from 'lucide-react';
import logo from 'figma:asset/ba00e1228c75b9db4ef3b7e8988aea2b960cbbb4.png';
import { useState } from 'react';
import { Link } from 'react-router';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [technologyDropdownOpen, setTechnologyDropdownOpen] = useState(false);
  const [whyUsDropdownOpen, setWhyUsDropdownOpen] = useState(false);
  const [aboutUsDropdownOpen, setAboutUsDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e27]/90 backdrop-blur-xl">
      <div className="w-full px-4 md:px-8 py-3 md:py-4">
        <div className="flex items-center justify-between md:justify-center md:gap-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4">
            <img src={logo} alt="EURDT Stablecoin Logo" className="h-12 md:h-20 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
            <Link to="/" className="text-white/80 hover:text-white transition-colors duration-200 relative group text-base xl:text-lg">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link to="/blogs" className="text-white/80 hover:text-white transition-colors duration-200 relative group text-base xl:text-lg">
              Blogs
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <div 
              className="relative"
              onMouseEnter={() => setTechnologyDropdownOpen(true)}
              onMouseLeave={() => setTechnologyDropdownOpen(false)}
            >
              <button
                className="text-white/80 hover:text-white transition-colors duration-200 relative group text-base xl:text-lg flex items-center gap-1"
              >
                Technology
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${technologyDropdownOpen ? 'rotate-180' : ''}`} />
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-200 group-hover:w-full"></span>
              </button>
              {technologyDropdownOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-gradient-to-b from-[#0a0e27] to-[#0d1230] backdrop-blur-xl rounded-lg shadow-2xl border border-cyan-400/30 overflow-hidden z-50">
                  <Link
                    to="/technology"
                    className="block px-6 py-4 text-base text-white/80 hover:text-white hover:bg-cyan-400/10 transition-all duration-200 border-b border-white/5"
                  >
                    Technology of Eurocoin
                  </Link>
                  <Link
                    to="/how-eurocoin-works"
                    className="block px-6 py-4 text-base text-white/80 hover:text-white hover:bg-cyan-400/10 transition-all duration-200"
                  >
                    How Eurocoin Works
                  </Link>
                </div>
              )}
            </div>
            <Link to="/open-platform" className="text-white/80 hover:text-white transition-colors duration-200 relative group text-base xl:text-lg">
              How It Works
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <div 
              className="relative"
              onMouseEnter={() => setWhyUsDropdownOpen(true)}
              onMouseLeave={() => setWhyUsDropdownOpen(false)}
            >
              <button
                className="text-white/80 hover:text-white transition-colors duration-200 relative group text-base xl:text-lg flex items-center gap-1"
              >
                Why Us
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${whyUsDropdownOpen ? 'rotate-180' : ''}`} />
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-200 group-hover:w-full"></span>
              </button>
              {whyUsDropdownOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-gradient-to-b from-[#0a0e27] to-[#0d1230] backdrop-blur-xl rounded-lg shadow-2xl border border-cyan-400/30 overflow-hidden z-50">
                  <Link
                    to="/advantage-of-eurocoin"
                    className="block px-6 py-4 text-base text-white/80 hover:text-white hover:bg-cyan-400/10 transition-all duration-200 border-b border-white/5"
                  >
                    Advantage of Eurocoin
                  </Link>
                  <Link
                    to="/use-cases-and-solution"
                    className="block px-6 py-4 text-base text-white/80 hover:text-white hover:bg-cyan-400/10 transition-all duration-200"
                  >
                    Use Cases and Solution
                  </Link>
                </div>
              )}
            </div>
            <div 
              className="relative"
              onMouseEnter={() => setAboutUsDropdownOpen(true)}
              onMouseLeave={() => setAboutUsDropdownOpen(false)}
            >
              <button
                className="text-white/80 hover:text-white transition-colors duration-200 relative group text-base xl:text-lg flex items-center gap-1"
              >
                About Us
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${aboutUsDropdownOpen ? 'rotate-180' : ''}`} />
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-200 group-hover:w-full"></span>
              </button>
              {aboutUsDropdownOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-gradient-to-b from-[#0a0e27] to-[#0d1230] backdrop-blur-xl rounded-lg shadow-2xl border border-cyan-400/30 overflow-hidden z-50">
                  <Link
                    to="/eurocoin-team"
                    className="block px-6 py-4 text-base text-white/80 hover:text-white hover:bg-cyan-400/10 transition-all duration-200 border-b border-white/5"
                  >
                    Eurocoin Team
                  </Link>
                  <Link
                    to="/partners-integrations"
                    className="block px-6 py-4 text-base text-white/80 hover:text-white hover:bg-cyan-400/10 transition-all duration-200 border-b border-white/5"
                  >
                    Partners and Integrations
                  </Link>
                  <Link
                    to="/compliance-security"
                    className="block px-6 py-4 text-base text-white/80 hover:text-white hover:bg-cyan-400/10 transition-all duration-200"
                  >
                    Compliance & Security
                  </Link>
                </div>
              )}
            </div>
            <Link to="/faq" className="text-white/80 hover:text-white transition-colors duration-200 relative group text-base xl:text-lg">
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
              <button className="flex items-center gap-2 sm:gap-3 px-3 sm:px-6 md:px-8 py-2 sm:py-3 md:py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-600 text-white hover:from-cyan-400 hover:via-blue-400 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/40 hover:scale-105 group text-xs sm:text-base md:text-lg font-medium border border-cyan-400/20">
                <span className="hidden sm:inline">Contact Us</span>
                <span className="sm:hidden">Contact</span>
                <ArrowRight className="w-3 h-3 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <div className="flex flex-col gap-4">
              <Link 
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/80 hover:text-white transition-colors duration-200 py-2"
              >
                Home
              </Link>
              <Link 
                to="/blogs"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/80 hover:text-white transition-colors duration-200 py-2"
              >
                Blogs
              </Link>
              <Link 
                to="/technology"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/80 hover:text-white transition-colors duration-200 py-2"
              >
                Technology
              </Link>
              <Link 
                to="/open-platform"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/80 hover:text-white transition-colors duration-200 py-2"
              >
                How It Works
              </Link>
              <Link 
                to="/why-us"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/80 hover:text-white transition-colors duration-200 py-2"
              >
                Why Us
              </Link>
              <Link 
                to="/about-us"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/80 hover:text-white transition-colors duration-200 py-2"
              >
                About Us
              </Link>
              <Link 
                to="/faq"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/80 hover:text-white transition-colors duration-200 py-2"
              >
                FAQ
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}