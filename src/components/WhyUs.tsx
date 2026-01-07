import { ArrowRight } from 'lucide-react';
import { Header } from './Header';
import { Footer } from './Footer';
import whyUsBgImage from 'figma:asset/7d2878ebf33fe7240b09a9b5859449df2659760e.png';
import whyUsCardsFullImage from 'figma:asset/b37a2c7b757eee0c248f6db49ec971bbcae3a133.png';
import darkBlueBg from 'figma:asset/b3dbefa83a6eaf34e621974ecb8df2e4e597f109.png';
import ctaSectionBg from 'figma:asset/f2c10d80fb68f58b36e2edba039b3ab4c7bfd424.png';
import featureCardsImage from 'figma:asset/5423529f318ab3a74da8abfa2652fadf41541fc8.png';

export function WhyUs() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24 md:pt-32" style={{ backgroundColor: '#000' }}>
        {/* Background Image */}
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: `url(${whyUsBgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24 lg:py-32 w-full">
          <div className="max-w-2xl mx-auto">
            {/* Main Heading */}
            <h1 className="text-white mb-8" style={{ fontSize: 'clamp(40px, 7vw, 64px)', lineHeight: '1.1' }}>
              Why Eurocoin?
            </h1>

            {/* Subtitle */}
            <p className="text-white mb-12" style={{ fontSize: 'clamp(16px, 2.5vw, 20px)', lineHeight: '1.4', opacity: '0.95' }}>
              The Competitive Advantages of Europe's Next-Gen Stablecoin
            </p>

            {/* CTA Button */}
            <button className="group flex items-center justify-center gap-3 px-10 md:px-12 py-4 md:py-5 rounded-full border-2 border-cyan-400/50 text-white hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm text-base md:text-lg w-full sm:w-auto" style={{ marginTop: '2rem' }}>
              <span className="font-medium">Schedule a Demo</span>
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </section>

      {/* Cards Section - Full Image Display */}
      <section className="relative py-24 overflow-hidden">
        {/* Dark Blue Background */}
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: `url(${darkBlueBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        {/* Full Cards Image */}
        <div className="relative z-10 w-full">
          <img 
            src={whyUsCardsFullImage} 
            alt="Why Us Features" 
            className="w-full h-auto"
            style={{ display: 'block' }}
          />
        </div>
      </section>

      {/* CTA Section with Feature Cards Overlay */}
      <section className="relative overflow-hidden pb-32 md:pb-0">
        {/* CTA Background Image - Full Display */}
        <img 
          src={ctaSectionBg} 
          alt="CTA Background" 
          className="w-full h-auto"
          style={{ display: 'block' }}
        />

        {/* Header Content - Overlaid on Background */}
        <div className="absolute top-0 left-0 right-0 z-20 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 pt-12 md:pt-20 pb-12 flex flex-col gap-6 items-center">
          {/* Gradient Heading */}
          <h2 
            className="text-center max-w-4xl mt-8 md:mt-16"
            style={{ 
              fontSize: 'clamp(32px, 6vw, 64px)',
              lineHeight: '1.2',
              fontFamily: 'Inter, sans-serif',
              fontWeight: '700',
              letterSpacing: '-0.02em',
              background: 'linear-gradient(to right, #ffffff 33.946%, #b8d5ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Why Eurocoin is Reshaping Europe's Digital Economy
          </h2>

          {/* Subtitle */}
          <p 
            className="text-center max-w-5xl px-4"
            style={{ 
              fontSize: 'clamp(14px, 2vw, 18px)',
              lineHeight: '1.5',
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 'bold',
              color: '#b8d5ff'
            }}
          >
            Eurocoin isn't just another euro stablecoin—it's Europe's bridge between trusted finance and the digital economy of tomorrow. Built for regulation, speed, and sustainability, Eurocoin delivers the confidence institutions demand and the performance innovators expect.
          </p>
        </div>

        {/* Feature Cards Image Overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-10 w-full px-4 md:px-16 lg:px-24 pb-8 hidden md:block">
          <img 
            src={featureCardsImage} 
            alt="Feature Cards" 
            className="w-full h-auto"
            style={{ display: 'block', maxWidth: '70%', margin: '0 auto', transform: 'translateY(-400px)' }}
          />
        </div>
        
        {/* Mobile Feature Cards - No Overlay, Normal Position */}
        <div className="block md:hidden relative z-10 w-full px-4 -mt-20">
          <img 
            src={featureCardsImage} 
            alt="Feature Cards" 
            className="w-full h-auto mx-auto"
            style={{ maxWidth: '90%' }}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}