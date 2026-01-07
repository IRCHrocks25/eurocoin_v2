import { Header } from './Header';
import { Footer } from './Footer';
import { Link } from 'react-router';
import blogsBg from 'figma:asset/a1c5190388a6ec68c52884ec6b432334310e83fc.png';
import cardBg from 'figma:asset/2d26682965662b7f8dbe12fe6eca500f40ae0635.png';
import whyFollowBg from 'figma:asset/b9af2b82f68755636199483448497671bb80c99f.png';
import cardsImage from 'figma:asset/d58ae8bee0dce47034ffa13d8acabc2c89eef24f.png';
import coinImage from 'figma:asset/a455b3a5a7d26b8bf26be2310c1079f5cfbb6032.png';
import ctaBg from 'figma:asset/e1031d986d257eaf344cb6654ad90fb70362c100.png';
import { User, ArrowRight } from 'lucide-react';

export function Blogs() {
  const blogPosts = [
    {
      image: "https://images.unsplash.com/photo-1609391144572-83e4bae1d35d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMG5ldHdvcmt8ZW58MXx8fHwxNjc3MTY4MjU3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Eurocoin: Navigating MiCA and Binance's Stablecoin Delistings in Europe",
      author: "By Jarone Olik & Takashi Yanagi",
      description: "How the MiCA regulation is reshaping stablecoins and why Eurocoin is ready for the new era. Analysis of Binance's delisting of non-compliant coins, what it means for European users, and the rise of MiCA-compliant digital assets."
    },
    {
      image: "https://images.unsplash.com/photo-1631384916671-3d4be55a8c92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldXJvJTIwY3VycmVuY3klMjBkaWdpdGFsfGVufDF8fHx8MTY3NzE2ODI1OHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "The Minting Revolution: Why Pre-Minting is Obsolete in Modern Stablecoins",
      author: "",
      description: "Exploring Eurocoin's instant 'Mint-on-the-Fly' architecture, the end of liquidity friction, and how this breakthrough is redefining the market for regulated digital cash."
    },
    {
      image: "https://images.unsplash.com/photo-1659018966825-43297e655ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXRjb2luJTIwY2hhcnQlMjBncmFwaHxlbnwxfHx8fDE2NzcxNjgyNTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Eurocoin's DLT Advantage: Audited Speed and Real-World Settlement",
      author: "",
      description: "A technical deep dive into Billon's 530,000 TPS performance, instant 7–19 second settlement, and what this means for banks, fintechs, and DeFi innovators."
    },
    {
      image: "https://images.unsplash.com/photo-1726064855988-1e4deb0a3392?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBheW1lbnQlMjBkaWdpdGFsfGVufDF8fHx8MTY3NzE2ODI1OXww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Enterprise Payments at Scale: Case Studies from Philip Morris, FIS, and RBI",
      author: "",
      description: "Real-world impact stories: How global brands are using Billon DLT for mass payouts, fund tokenization, and high-speed, compliant cash flows."
    },
    {
      image: "https://images.unsplash.com/photo-1729830375021-cfbe769ebe9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldXJvJTIwZGlnaXRhbCUyMGZ1dHVyZXxlbnwxfHx8fDE2NzcxNjgyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "The EU Digital Future: Eurocoin's Role in EBSI and Digital Product Passports",
      author: "",
      description: "How Eurocoin's technology is powering European Commission pilots for IP tokenization, product lifecycle management, and the broader digital economy."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0e27]">
      <Header />
      
      {/* Hero Section with original background */}
      <section 
        className="pt-32 pb-20 flex items-center justify-center"
        style={{
          backgroundImage: `url(${blogsBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          paddingTop: '8rem',
          paddingBottom: '8rem',
          minHeight: '600px'
        }}
      >
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-6">
          {/* Hero Section */}
          <div className="text-center w-full flex flex-col items-center">
            {/* Our Blogs Label */}
            <div className="mb-8">
              <span className="px-6 py-2 border border-white/30 rounded-full text-white/80 text-sm md:text-base inline-block">
                Our Blogs
              </span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-white w-full" style={{ fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: '1.2', marginBottom: '2rem' }}>
              Stay Ahead with Eurocoin
            </h1>
            
            {/* Description Paragraphs */}
            <div className="max-w-4xl mx-auto w-full">
              <p className="text-white/70 text-center" style={{ fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: '1.6', marginBottom: '2rem', marginLeft: 'auto', marginRight: 'auto' }}>
                As Europe's digital finance landscape evolves, Eurocoin is at the center defining best practices, sharing regulatory updates, and spotlighting the technology shaping the next generation of money.
              </p>
              <p className="text-white/70 text-center" style={{ fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: '1.6', marginLeft: 'auto', marginRight: 'auto' }}>
                Our blog and news section is your go-to source for the latest on MiCA compliance, stablecoin innovation, digital euro strategy, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section with new background */}
      <section
        className="flex justify-center"
        style={{
          backgroundImage: `url(${cardBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          paddingTop: '10rem',
          paddingBottom: '6rem'
        }}
      >
        <div className="w-full max-w-[1100px] mx-auto px-4 md:px-8 flex flex-col items-center">
          {/* Section Title */}
          <h2 className="text-white text-center w-full" style={{ 
            fontSize: 'clamp(28px, 4vw, 42px)', 
            lineHeight: '1.2', 
            marginTop: '-2rem',
            marginBottom: '4rem',
            paddingBottom: '2rem',
            fontWeight: '600',
            textShadow: `
              0 0 20px rgba(255, 255, 255, 0.5),
              0 0 40px rgba(165, 191, 255, 0.4),
              0 0 60px rgba(111, 75, 255, 0.3),
              0 2px 4px rgba(0, 0, 0, 0.3)
            `,
            color: 'rgba(255, 255, 255, 0.95)'
          }}>
            Articles & Executive Thought Leadership
          </h2>
          
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center w-full">
            {blogPosts.map((post, index) => (
              <div 
                key={index} 
                className="rounded-3xl overflow-hidden transition-all duration-300 backdrop-blur-sm w-full max-w-[380px] hover:scale-105 hover:shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(165, 191, 255, 0.95) 0%, rgba(111, 75, 255, 0.95) 50%, rgba(13, 0, 66, 0.98) 100%)',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 10px 40px rgba(139, 92, 246, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                  minHeight: '500px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Image */}
                <div className="overflow-hidden relative" style={{ flexShrink: 0, height: '180px' }}>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40"></div>
                </div>
                
                {/* Content */}
                <div className="p-7 flex-1 flex flex-col" style={{ paddingBottom: '2rem', background: 'rgba(0, 0, 0, 0.2)' }}>
                  {/* Title */}
                  <h3 className="text-white mb-5 font-bold" style={{ 
                    fontSize: 'clamp(18px, 2vw, 22px)', 
                    lineHeight: '1.5', 
                    fontWeight: '700',
                    letterSpacing: '0.01em',
                    wordSpacing: '0.05em',
                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
                    paddingBottom: '0.5rem'
                  }}>
                    {post.title}
                  </h3>
                  
                  {/* Author */}
                  {post.author && (
                    <div className="flex items-center gap-2 mb-5" style={{ marginTop: '0.5rem' }}>
                      <User className="w-4 h-4 text-white/90" style={{ filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.5))' }} />
                      <span className="text-white/90 font-medium" style={{ 
                        fontSize: 'clamp(14px, 1.5vw, 16px)',
                        letterSpacing: '0.02em',
                        textShadow: '0 1px 4px rgba(0, 0, 0, 0.5)'
                      }}>
                        {post.author}
                      </span>
                    </div>
                  )}
                  
                  {/* Description */}
                  <p className="text-white/95 flex-1" style={{ 
                    fontSize: 'clamp(15px, 1.8vw, 17px)', 
                    lineHeight: '2',
                    letterSpacing: '0.02em',
                    wordSpacing: '0.1em',
                    textShadow: '0 1px 4px rgba(0, 0, 0, 0.5)',
                    marginTop: '0.5rem',
                    paddingTop: '0.5rem'
                  }}>
                    {post.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Follow Eurocoin Section */}
      <section
        className="flex justify-center"
        style={{
          backgroundImage: `url(${whyFollowBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          paddingTop: '8rem',
          paddingBottom: '8rem'
        }}
      >
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 flex flex-col items-center">
          {/* Section Title */}
          <div className="text-center mb-4 w-full">
            <h2 className="text-white w-full" style={{ fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: '1.2', marginBottom: '1rem' }}>
              Why Follow Eurocoin?
            </h2>
            <p className="text-white/70 w-full" style={{ fontSize: 'clamp(14px, 1.5vw, 18px)' }}>
              Eurocoin isn't just powered by leaders, it's powered by structure.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-12">
            {/* Left Column - Cards */}
            <div className="flex justify-center">
              <img 
                src={cardsImage} 
                alt="Eurocoin Benefits" 
                className="w-full max-w-[600px]"
              />
            </div>

            {/* Right Column - Coin */}
            <div className="flex justify-center">
              <img 
                src={coinImage} 
                alt="Euro Coin" 
                className="w-full max-w-[500px]"
              />
            </div>
          </div>

          {/* Bottom Tagline */}
          <div className="text-center mt-12">
            <p className="text-white/80" style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', lineHeight: '1.6' }}>
              Whether you're a developer, a financial professional, or just curious about the future of money—following Eurocoin keeps you at the heart of Europe's{' '}
              <span className="text-white">premier digital euro ecosystem</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        className="flex justify-center"
        style={{
          backgroundImage: `url(${ctaBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          paddingTop: '8rem',
          paddingBottom: '8rem'
        }}
      >
        <div className="w-full max-w-[900px] mx-auto px-4 md:px-8 text-center flex flex-col items-center">
          {/* Main Heading */}
          <h2 className="text-white w-full" style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: '1.2', marginBottom: '2rem' }}>
            Instant. Compliant. Built for Everyone.
          </h2>
          
          {/* Subtitle */}
          <p className="text-white/80 w-full" style={{ fontSize: 'clamp(16px, 1.8vw, 20px)', lineHeight: '1.5', marginBottom: '2rem' }}>
            See how simple it is to integrate, transact, and build on the Eurocoin network.
          </p>
          
          {/* Question */}
          <p className="text-white w-full" style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', marginBottom: '3rem' }}>
            Want to partner, invest, or connect with our team?
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full">
            {/* Contact Us Button - Premium Style */}
            <Link
              to="/contact-us"
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
                Contact Us for Onboarding
                <div className="relative z-10 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-900 to-black transition-all duration-300 group-hover:scale-110" style={{
                  width: '32px',
                  height: '32px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(0, 0, 0, 0.3)',
                  border: '1.5px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" style={{ strokeWidth: '2.8', stroke: 'white', fill: 'none' }} />
                </div>
              </span>
            </Link>

            {/* View Integration Docs Button - Premium Style */}
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