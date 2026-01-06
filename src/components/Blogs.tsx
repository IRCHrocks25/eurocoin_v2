import { Header } from './Header';
import { Footer } from './Footer';
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
        className="pt-32 pb-20"
        style={{
          backgroundImage: `url(${blogsBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          paddingTop: '8rem',
          paddingBottom: '8rem'
        }}
      >
        <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6" style={{ marginLeft: 'calc(50% + 2rem)', transform: 'translateX(-50%)' }}>
          {/* Hero Section */}
          <div className="text-center">
            {/* Our Blogs Label */}
            <div className="mb-8">
              <span className="px-6 py-2 border border-white/30 rounded-full text-white/80 text-sm md:text-base">
                Our Blogs
              </span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-white mb-8" style={{ fontSize: 'clamp(32px, 5vw, 56px)', lineHeight: '1.2' }}>
              Stay Ahead with Eurocoin
            </h1>
            
            {/* Description Paragraphs */}
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-white/70 text-center" style={{ fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: '1.6', marginTop: '3rem' }}>
                As Europe's digital finance landscape evolves, Eurocoin is at the center defining best practices, sharing regulatory updates, and spotlighting the technology shaping the next generation of money.
              </p>
              <p className="text-white/70 text-center" style={{ fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: '1.6', marginTop: '3rem' }}>
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
        <div className="w-full max-w-[1100px] px-4 md:px-8">
          {/* Section Title */}
          <h2 className="text-white/40 text-center mb-12 pb-8" style={{ fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: '1.2', marginTop: '-2rem' }}>
            Articles & Executive Thought Leadership
          </h2>
          
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
            {blogPosts.map((post, index) => (
              <div 
                key={index} 
                className="rounded-3xl overflow-hidden transition-all duration-300 backdrop-blur-sm w-full max-w-[320px]"
                style={{
                  background: 'linear-gradient(135deg, #A5BFFF 0%, #6F4BFF 50%, #0D0042 100%)',
                  border: '2px solid rgba(139, 92, 246, 0.5)',
                  boxShadow: '0 0 30px rgba(139, 92, 246, 0.4)',
                  height: '400px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Image */}
                <div className="overflow-hidden" style={{ flexShrink: 0 }}>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-40 object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="p-5" style={{ flex: 1, display: 'flex', flexDirection: 'column', paddingBottom: '1.5rem' }}>
                  {/* Title */}
                  <h3 className="text-white mb-3" style={{ fontSize: '15px', lineHeight: '1.4', paddingTop: '0.5rem' }}>
                    {post.title}
                  </h3>
                  
                  {/* Author */}
                  {post.author && (
                    <div className="flex items-center gap-2 mb-3">
                      <User className="w-3 h-3 text-white/70" />
                      <span className="text-white/70" style={{ fontSize: '13px' }}>{post.author}</span>
                    </div>
                  )}
                  
                  {/* Description */}
                  <p className="text-white/70 leading-relaxed" style={{ fontSize: '13px', lineHeight: '1.5', marginTop: '8px' }}>
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
        <div className="w-full max-w-[1200px] px-4 md:px-8">
          {/* Section Title */}
          <div className="text-center mb-4">
            <h2 className="text-white mb-3" style={{ fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: '1.2' }}>
              Why Follow Eurocoin?
            </h2>
            <p className="text-white/70" style={{ fontSize: 'clamp(14px, 1.5vw, 18px)' }}>
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
        <div className="w-full max-w-[900px] px-4 md:px-8 text-center">
          {/* Main Heading */}
          <h2 className="text-white mb-6" style={{ fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: '1.2' }}>
            Instant. Compliant. Built for Everyone.
          </h2>
          
          {/* Subtitle */}
          <p className="text-white/80 mb-6" style={{ fontSize: 'clamp(16px, 1.8vw, 20px)', lineHeight: '1.5' }}>
            See how simple it is to integrate, transact, and build on the Eurocoin network.
          </p>
          
          {/* Question */}
          <p className="text-white mb-8" style={{ fontSize: 'clamp(14px, 1.5vw, 18px)' }}>
            Want to partner, invest, or connect with our team?
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ marginTop: '2.5rem' }}>
            {/* Contact Us Button */}
            <button 
              className="px-8 py-3 rounded-full bg-white text-black flex items-center gap-2 transition-all hover:bg-white/90"
              style={{ fontSize: '16px' }}
            >
              Contact Us for Onboarding
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* View Docs Button */}
            <button 
              className="px-8 py-3 rounded-full border-2 border-white text-white flex items-center gap-2 transition-all hover:bg-white/10"
              style={{ fontSize: '16px' }}
            >
              View Integration Docs
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}