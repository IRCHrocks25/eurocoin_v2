import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="mb-8"
      style={{
        fontFamily: 'ibrand'
      }}
    >
      {/* Question Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between rounded-xl group"
        style={{
          backgroundColor: isOpen ? 'rgba(10, 11, 46, 0.8)' : 'rgba(10, 11, 46, 0.6)',
          border: isOpen ? '2px solid rgba(138, 99, 255, 0.6)' : '2px solid rgba(138, 99, 255, 0.4)',
          textAlign: 'left',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          padding: 'clamp(1.75rem, 4vw, 2.5rem) clamp(2rem, 5vw, 3rem)',
          boxShadow: isOpen 
            ? '0 8px 24px rgba(138, 99, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)' 
            : '0 4px 12px rgba(0, 0, 0, 0.2)'
        }}
        onMouseEnter={(e) => {
          if (!isOpen) {
            e.currentTarget.style.backgroundColor = 'rgba(10, 11, 46, 0.7)';
            e.currentTarget.style.borderColor = 'rgba(138, 99, 255, 0.5)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(138, 99, 255, 0.2)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isOpen) {
            e.currentTarget.style.backgroundColor = 'rgba(10, 11, 46, 0.6)';
            e.currentTarget.style.borderColor = 'rgba(138, 99, 255, 0.4)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
          }
        }}
      >
        <span 
          className="text-white"
          style={{
            fontFamily: 'ibrand',
            fontSize: 'clamp(1.5rem, 3vw, 2rem) !important',
            fontWeight: '500',
            lineHeight: '1.4',
            letterSpacing: '0.01em',
            paddingRight: 'clamp(1.5rem, 3vw, 2rem)'
          }}
        >
          {question}
        </span>
        <ArrowUpRight 
          className="text-white flex-shrink-0"
          style={{
            width: '28px',
            height: '28px',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
            opacity: isOpen ? 1 : 0.8
          }}
        />
      </button>

      {/* Answer Content */}
      {isOpen && (
        <div 
          className="mt-4 rounded-xl overflow-hidden"
          style={{
            backgroundColor: 'rgba(10, 11, 46, 0.5)',
            border: '2px solid rgba(138, 99, 255, 0.3)',
            boxShadow: '0 4px 16px rgba(138, 99, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
            animation: 'fadeIn 0.3s ease'
          }}
        >
          <div 
            className="faq-answer-content"
            style={{
              fontFamily: 'ibrand',
              fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem) !important',
              lineHeight: '1.9',
              color: 'rgba(255, 255, 255, 0.9)',
              letterSpacing: '0.01em',
              padding: 'clamp(2rem, 5vw, 3rem) clamp(2rem, 5vw, 3rem)',
              paddingTop: 'clamp(2rem, 5vw, 3rem)',
              paddingBottom: 'clamp(2rem, 5vw, 3rem)',
              paddingLeft: 'clamp(2rem, 5vw, 3rem)',
              paddingRight: 'clamp(2rem, 5vw, 3rem)'
            }}
          >
            {answer}
          </div>
        </div>
      )}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .faq-answer-content p,
        .faq-answer-content ul,
        .faq-answer-content ol,
        .faq-answer-content li,
        .faq-answer-content div,
        .faq-answer-content strong {
          font-size: clamp(1.25rem, 2.5vw, 1.5rem) !important;
        }
        .faq-answer-content p {
          margin-bottom: clamp(1rem, 2vw, 1.5rem) !important;
        }
        .faq-answer-content li {
          margin-bottom: clamp(0.75rem, 1.5vw, 1rem) !important;
        }
      `}</style>
    </div>
  );
}