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
      className="mb-12"
      style={{
        fontFamily: 'ibrand'
      }}
    >
      {/* Question Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-5 rounded-lg"
        style={{
          backgroundColor: 'rgba(10, 11, 46, 0.6)',
          border: '1.5px solid rgba(138, 99, 255, 0.4)',
          textAlign: 'left',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
      >
        <span 
          className="text-white pr-4"
          style={{
            fontFamily: 'ibrand',
            fontSize: '1.125rem',
            fontWeight: '400'
          }}
        >
          {question}
        </span>
        <ArrowUpRight 
          className="text-white flex-shrink-0"
          style={{
            width: '20px',
            height: '20px',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease'
          }}
        />
      </button>

      {/* Answer Content */}
      {isOpen && (
        <div 
          className="mt-3 px-6 py-6 rounded-lg"
          style={{
            backgroundColor: 'rgba(10, 11, 46, 0.4)',
            border: '1.5px solid rgba(138, 99, 255, 0.2)'
          }}
        >
          <div 
            className="text-gray-300"
            style={{
              fontFamily: 'ibrand',
              fontSize: '1rem',
              lineHeight: '1.8'
            }}
          >
            {answer}
          </div>
        </div>
      )}
    </div>
  );
}