import { Header } from './Header';
import { Footer } from './Footer';
import heroBgImage from 'figma:asset/bd0441ceed50fa86e14b4efeeb402a009be331dd.png';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function Visionaries() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Eurocoin (EURDT)?",
      answer: "Eurocoin (EURDT) is a fully regulated, euro-pegged stablecoin built on enterprise-grade blockchain technology. It's designed to provide instant, secure, and compliant digital euro transactions for businesses, institutions, and individuals across Europe."
    },
    {
      question: "How is Eurocoin different from other stablecoins?",
      answer: "Eurocoin is built specifically for European compliance, backed 1:1 by euro reserves held in regulated European banks. It's powered by Billon's enterprise-grade distributed ledger technology, ensuring institutional-level security, instant settlement, and full regulatory compliance with EU standards including MiCA and AML regulations."
    },
    {
      question: "Is Eurocoin regulated?",
      answer: "Yes, Eurocoin is fully compliant with EU financial regulations, including MiCA (Markets in Crypto-Assets) and AML (Anti-Money Laundering) standards. Our reserves are held in regulated European banks with full transparency and regular audits."
    },
    {
      question: "How does the 1:1 euro backing work?",
      answer: "Every EURDT token is backed by one euro held in reserve in regulated European banks. This ensures price stability and allows users to redeem their EURDT for euros at any time, maintaining a consistent 1:1 peg."
    },
    {
      question: "What are the transaction fees?",
      answer: "Eurocoin offers minimal transaction fees compared to traditional banking and legacy payment systems. Fees vary based on transaction volume and type, but are designed to be significantly lower than conventional cross-border payment methods."
    },
    {
      question: "How fast are Eurocoin transactions?",
      answer: "Eurocoin transactions settle instantly, typically within seconds. Unlike traditional banking systems that can take days for cross-border transfers, Eurocoin enables real-time settlement 24/7/365."
    },
    {
      question: "Who can use Eurocoin?",
      answer: "Eurocoin is designed for a wide range of users including financial institutions, banks, fintech companies, enterprises, DeFi platforms, remittance services, and government infrastructure. Both businesses and individuals can benefit from fast, compliant digital euro transactions."
    },
    {
      question: "What technology powers Eurocoin?",
      answer: "Eurocoin is built on Billon's enterprise-grade distributed ledger technology (DLT). This blockchain infrastructure has been audited, proven at scale, and specifically designed for regulatory compliance and institutional use."
    },
    {
      question: "How do I integrate Eurocoin into my business?",
      answer: "We provide flexible APIs and integration tools that make it easy to embed Eurocoin into your existing infrastructure. Contact our team for onboarding support and access to our technical documentation."
    },
    {
      question: "Where are Eurocoin's reserves held?",
      answer: "All euro reserves backing EURDT tokens are held in regulated European banks, ensuring full compliance with EU banking regulations and providing maximum security and transparency."
    },
    {
      question: "Can I redeem EURDT for euros?",
      answer: "Yes, EURDT tokens can be redeemed for euros at any time, maintaining the 1:1 peg. The redemption process is designed to be fast and straightforward for authorized users."
    },
    {
      question: "Is Eurocoin available for retail users?",
      answer: "While Eurocoin is primarily designed for institutional and business use, we are expanding access to retail users through authorized partners and platforms. Contact us to learn more about early access opportunities."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0e27]">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="pt-40 pb-20 px-6 md:px-12 lg:px-24 relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(10, 14, 39, 0.7) 0%, rgba(10, 14, 39, 0.9) 100%), url(${heroBgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(36px, 6vw, 56px)',
              fontWeight: 'bold',
              color: '#FFFFFF',
              marginBottom: '24px',
              lineHeight: '1.2'
            }}
          >
            Frequently Asked Questions
          </h1>
          <p 
            style={{
              fontFamily: 'ibrand, sans-serif',
              fontSize: 'clamp(16px, 2vw, 18px)',
              color: '#B8D4F1',
              lineHeight: '1.6'
            }}
          >
            Everything you need to know about Eurocoin (EURDT)
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  backgroundColor: '#0f1937',
                  border: '1px solid rgba(91, 159, 255, 0.2)'
                }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-200"
                >
                  <h3 
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: 'clamp(16px, 2.5vw, 20px)',
                      fontWeight: '600',
                      color: '#FFFFFF',
                      lineHeight: '1.4',
                      paddingRight: '20px'
                    }}
                  >
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className="flex-shrink-0 w-6 h-6 text-cyan-400 transition-transform duration-300"
                    style={{
                      transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                  />
                </button>
                
                {openFaq === index && (
                  <div 
                    className="px-6 md:px-8 pb-6 animate-fadeIn"
                    style={{
                      fontFamily: 'ibrand, sans-serif',
                      fontSize: 'clamp(14px, 2vw, 16px)',
                      color: '#B8D4F1',
                      lineHeight: '1.7'
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div 
          className="max-w-4xl mx-auto text-center rounded-3xl p-12 md:p-16"
          style={{
            background: 'linear-gradient(135deg, #5B9FFF 0%, #0a0e27 100%)',
            border: '1px solid rgba(91, 159, 255, 0.3)'
          }}
        >
          <h2 
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 'bold',
              color: '#FFFFFF',
              marginBottom: '16px'
            }}
          >
            Still have questions?
          </h2>
          <p 
            style={{
              fontFamily: 'ibrand, sans-serif',
              fontSize: 'clamp(16px, 2vw, 18px)',
              color: '#B8D4F1',
              marginBottom: '32px'
            }}
          >
            Our team is here to help you understand how Eurocoin can work for you.
          </p>
          <button 
            className="px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            style={{
              fontFamily: 'ibrand, sans-serif',
              fontSize: 'clamp(14px, 2vw, 16px)',
              backgroundColor: '#FFFFFF',
              color: '#0a0e27',
              fontWeight: '600',
              border: 'none'
            }}
          >
            Contact Us
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
