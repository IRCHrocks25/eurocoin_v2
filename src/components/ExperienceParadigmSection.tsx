import { ArrowRight } from 'lucide-react';
import backgroundImage from 'figma:asset/91a3e0ebffcb5425d7df357211afe01571ecf353.png';
import coinImage from 'figma:asset/74f80e2b27170a1ecf5b59a7c9a3d68a99635253.png';

export function ExperienceParadigmSection() {
  return (
    <section 
      className="relative overflow-hidden" 
      style={{ 
        paddingTop: '120px',
        paddingBottom: '120px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#0a0e27'
      }}
    >
      <div className="relative w-full px-4 md:px-8">
        <div className="w-full mx-auto">
          
          <div className="relative flex flex-col items-center justify-center">
            <div className="w-full max-w-6xl px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Left Content */}
                <div className="flex flex-col justify-center">
                  {/* Main Heading */}
                  <h2 
                    className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl"
                    style={{ 
                      fontWeight: '700',
                      lineHeight: '1.1',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    Experience the new Paradigm
                  </h2>

                  {/* First Paragraph */}
                  <p 
                    className="text-white mb-4 text-base md:text-lg"
                    style={{ 
                      fontWeight: '600',
                      lineHeight: '1.6',
                      opacity: '0.95'
                    }}
                  >
                    Ready to invest in the euro stablecoin built for tomorrow?
                  </p>

                  {/* Second Paragraph */}
                  <p 
                    className="text-white mb-4 text-sm md:text-base"
                    style={{ 
                      fontWeight: '400',
                      lineHeight: '1.6',
                      opacity: '0.85'
                    }}
                  >
                    Eurocoin is raising capital to capture the European stablecoin market. This is your opportunity to invest in the infrastructure layer of Finance 2.0.
                  </p>

                  {/* Third Paragraph */}
                  <p 
                    className="text-white mb-8 text-sm md:text-base"
                    style={{ 
                      fontWeight: '400',
                      lineHeight: '1.6',
                      opacity: '0.85'
                    }}
                  >
                    The paradigm shift is here. The architecture is built. The market is ready.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-6 items-start" style={{ marginTop: '32px' }}>
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

                    {/* Schedule a Demo Button - Premium Style */}
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

                {/* Right Content - Coin Image */}
                <div className="flex items-center justify-center lg:justify-end">
                  <img 
                    src={coinImage} 
                    alt="Eurocoin - Gold Euro Coin" 
                    className="w-full max-w-sm md:max-w-md h-auto object-contain"
                    style={{
                      filter: 'drop-shadow(0 20px 60px rgba(255, 215, 0, 0.3))'
                    }}
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}