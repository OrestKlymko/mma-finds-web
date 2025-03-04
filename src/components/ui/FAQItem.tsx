'use client';

import { useState, useRef } from 'react';
import { GoPlus } from 'react-icons/go';
import { LuMinus } from 'react-icons/lu';

function FAQBox({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null); // To measure the height of the content

  return (
    <div
      className="py-8 border-b-1 border-gray-dark cursor-pointer mb:p-4"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className="flex items-center justify-between">
        <p className="text-base">{question}</p>
        {isOpen ? (
          <LuMinus className="w-5 h-5 shrink-0" />
        ) : (
          <GoPlus className="w-5 h-5 shrink-0" />
        )}
      </div>
      <div
        className={`overflow-hidden transition-all duration-[300ms] ease-out `}
        style={{
          height: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
          marginTop: isOpen ? '1rem' : '0rem',
        }}
      >
        <div ref={contentRef}>
          <p className=" text-sm font-light">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default FAQBox;
