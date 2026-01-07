import { Header } from './Header';
import { Footer } from './Footer';
import faqHeroBg from 'figma:asset/375520f6434b39ea51325efa559eca027ff4a8fc.png';
import { FAQItem } from './FAQItem';
import { CommonMythsBusted } from './CommonMythsBusted';
import { FAQClosingCTA } from './FAQClosingCTA';

export function FAQ() {
  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{
        backgroundColor: '#020219'
      }}
    >
      <Header />
      
      {/* Hero Section */}
      <div 
        className="w-full flex items-center justify-center"
        style={{
          backgroundImage: `url(${faqHeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          minHeight: '500px',
          paddingTop: '120px',
          paddingBottom: '120px'
        }}
      >
        {/* Dotted pattern overlay */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.4,
            backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 1.5px, transparent 1.5px)',
            backgroundSize: '30px 30px',
            pointerEvents: 'none'
          }}
        />
        
        <div className="w-full max-w-7xl mx-auto px-4 flex items-center justify-center" style={{ position: 'relative', zIndex: 10 }}>
          <div className="flex flex-col items-center text-center max-w-5xl w-full">
            {/* FAQ Badge */}
            <div 
              className="inline-block px-5 py-2 rounded-full mb-8"
              style={{
                border: '1px solid rgba(255, 255, 255, 0.3)',
                backgroundColor: 'transparent'
              }}
            >
              <span className="text-white" style={{ fontFamily: 'ibrand', fontSize: '0.875rem' }}>FAQ</span>
            </div>
            
            {/* Heading */}
            <h1 
              className="text-white leading-tight"
              style={{ 
                fontFamily: 'ibrand',
                fontSize: 'clamp(2.5rem, 6vw, 4rem)'
              }}
            >
              Everything You Need to Know
            </h1>
          </div>
        </div>
      </div>
      
      {/* Content will go here */}
      <div className="flex-1 flex justify-center" style={{ backgroundColor: '#020219' }}>
        <div className="w-full max-w-[1200px] mx-auto px-4 py-20" style={{ paddingBottom: '120px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="w-full" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <FAQItem 
                question="What is Eurocoin (EURDT)?"
                answer={
                  <div>
                    <p style={{ marginBottom: '1.25rem' }}>
                      Eurocoin is a fully MiCA-compliant, euro-pegged stablecoin designed for instant, gas-free transactions and built to exceed the toughest regulatory, security, and audit standards in Europe.
                    </p>
                    <p>
                      It's powered by the Billon Unified DLT System enabling true 1:1 euro backing, instant minting, and seamless integration with both legacy banks and DeFi platforms.
                    </p>
                  </div>
                }
              />
              
              <FAQItem 
                question="How is Eurocoin different from other stablecoins like USDT or Circle's EuroC?"
                answer={
                  <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                    <li style={{ marginBottom: '1rem' }}>
                      <strong>True 1:1 Fiat Backing:</strong> Every Eurocoin is fully backed by real euros held in legally segregated accounts—not just equivalents or algorithmic promises.
                    </li>
                    <li style={{ marginBottom: '1rem' }}>
                      <strong>Not Debt-Driven:</strong> Unlike Tether (USDT), which is backed primarily by non-bank assets like US Treasuries, Eurocoin is a pure fiat instrument with no debt exposure.
                    </li>
                    <li style={{ marginBottom: '1rem' }}>
                      <strong>No Pre-Minting:</strong> Thanks to "mint-on-the-fly" technology tokens are only created when funds are received — eliminating liquidity bottlenecks and reserves.
                    </li>
                    <li>
                      <strong>MiCA-Ready:</strong> Eurocoin meets the highest regulatory standards under the Markets in Crypto-Assets (MiCA) framework and holds an EMI license.
                    </li>
                  </ul>
                }
              />
              
              <FAQItem 
                question="Is Eurocoin really as fast as advertised?"
                answer={
                  <div>
                    <p style={{ marginBottom: '1.25rem' }}><strong>Yes.</strong></p>
                    <p style={{ marginBottom: '1.25rem' }}>
                      Eurocoin's Billon DLT system is audited and certified at 530,000 transactions per second with real-world settlement from initiation to completion in just 7-19 seconds.
                    </p>
                    <p>
                      This is orders of magnitude faster than most blockchain competitors.
                    </p>
                  </div>
                }
              />
              
              <FAQItem 
                question="Who are Eurocoin's partners and backers?"
                answer={
                  <div>
                    <p style={{ marginBottom: '1.25rem' }}>
                      Eurocoin is powered by the Billon Group and benefits from proven enterprise technology adoption by:
                    </p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                      <li style={{ marginBottom: '0.5rem' }}>Raiffeisen Bank International (RBI)</li>
                      <li style={{ marginBottom: '0.5rem' }}>FIS Global</li>
                      <li style={{ marginBottom: '0.5rem' }}>Philip Morris International</li>
                      <li style={{ marginBottom: '0.5rem' }}>Tauron</li>
                      <li style={{ marginBottom: '0.5rem' }}>BIK</li>
                      <li>Ergo Hestia</li>
                    </ul>
                  </div>
                }
              />
              
              <FAQItem 
                question="What about taxes and reporting?"
                answer={
                  <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                    <li style={{ marginBottom: '1rem' }}>
                      Eurocoin's issuance under Polish jurisdiction may offer favorable tax capital gains tax interpretations for users to check with your tax advisor for jurisdiction-specific guidance.
                    </li>
                    <li>
                      All transactions are transparent and fully auditable for compliance and reporting needs.
                    </li>
                  </ul>
                }
              />
            </div>

            {/* Right Column */}
            <div className="w-full" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <FAQItem 
                question="Is Eurocoin safe and legally protected?"
                answer={
                  <div>
                    <p style={{ marginBottom: '1.5rem' }}><strong>Absolutely.</strong></p>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', lineHeight: '2' }}>
                      <li style={{ marginBottom: '1.25rem' }}>
                        Funds are 100% legally segregated using EU trust law your euros remain protected, even in the event of operator insolvency.
                      </li>
                      <li style={{ marginBottom: '1.25rem' }}>
                        Monthly audits are performed by Big Four accounting firms to verify reserves.
                      </li>
                      <li style={{ marginBottom: '1.25rem' }}>
                        Protocol-level compliance (AML, KYC, GDPR) is embedded in every transaction.
                      </li>
                      <li>
                        Multi-signature security, insurance coverage, and real-time monitoring provide multiple layers of protection.
                      </li>
                    </ul>
                  </div>
                }
              />
              
              <FAQItem 
                question="How do I buy and use Eurocoin?"
                answer={
                  <ol style={{ listStyleType: 'decimal', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                    <li style={{ marginBottom: '1rem' }}>
                      <strong>Initiate a transfer:</strong> Send euros to Eurocoin via supported channels (SEPA, SWIFT, integrated banks, or on-ramp partners).
                    </li>
                    <li style={{ marginBottom: '1rem' }}>
                      <strong>Receive instantly:</strong> Eurocoin is minted on the fly and delivered directly to your wallet either Web3 (like MetaMask via ERC-20) or supported custodial wallets.
                    </li>
                    <li>
                      <strong>Transact, pay, redeem:</strong> Use Eurocoin for P2P payments, e-commerce, DeFi, payroll, or convert back to euros at any time.
                    </li>
                  </ol>
                }
              />
              
              <FAQItem 
                question="Can I use Eurocoin with DeFi platforms or traditional banks?"
                answer={
                  <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', lineHeight: '2' }}>
                    <li style={{ marginBottom: '1.25rem' }}><strong>Yes!</strong></li>
                    <li style={{ marginBottom: '1.25rem' }}>
                      <strong>DeFi Ready:</strong> Eurocoin is available on both the native Billon DLT and Ethereum (ERC-20), making it compatible with all major DeFi wallets and platforms.
                    </li>
                    <li>
                      <strong>Institutional Integration:</strong> Directly connected to SEPA, SWIFT, and a vast network of European banks for business, treasury, and settlement use.
                    </li>
                  </ul>
                }
              />
              
              <FAQItem 
                question="How does Eurocoin protect my privacy and data?"
                answer={
                  <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                    <li style={{ marginBottom: '1rem' }}>
                      <strong>GDPR compliance</strong> is built into the protocol.
                    </li>
                    <li style={{ marginBottom: '1rem' }}>
                      All personal data is <strong>encrypted and stored client-side</strong> you control consent and data sharing in every transaction.
                    </li>
                    <li>
                      <strong>No personal data is ever sold or repurposed.</strong>
                    </li>
                  </ul>
                }
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Common Myths Busted Section */}
      <CommonMythsBusted />
      
      {/* Closing CTA Section */}
      <FAQClosingCTA />
      
      <Footer />
    </div>
  );
}