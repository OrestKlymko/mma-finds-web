"use client";

import { useState, useRef } from "react";
import { FAQS } from "./mock/FAQs";
import { Button } from "@nextui-org/button";
import clsx from "clsx";
import { MdArrowForwardIos } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";

function Page() {
  const [selectedType, setSelectedType] = useState(0);
  return (
    <div className="w-full flex flex-col gap-8">
      <p className="max-w-[500px]">
        We understand that sometimes you may have questions or encounter
        challenges, and we're here to help! Before reaching out to our support
        team, consider checking our FAQs below.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {FAQS.map((faq, i) => (
          <Button
            key={i}
            fullWidth
            onPress={() => setSelectedType(i)}
            className={clsx({
              "bg-green text-white": i === selectedType,
              "bg-gray-light": i !== selectedType,
            })}
          >
            {faq.type}
          </Button>
        ))}
      </div>
      <div className="flex flex-col gap-6">
        <h6>My Account FAQs</h6>
        <div className="flex flex-col gap-4">
          {FAQS[selectedType].questions.map((question, i) => (
            <FAQBox
              key={i}
              question={question.question}
              answer={question.answer}
            />
          ))}
        </div>
      </div>
      <button className="text-green text-base font-medium text-start">
        Can't find what you're looking for?
      </button>
    </div>
  );
}

function FAQBox({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null); // To measure the height of the content

  return (
    <div
      className="py-4 px-6 cursor-pointer bg-gray-light rounded-md"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className="flex items-center justify-between">
        <h6 className="text-green">{question}</h6>
        <MdArrowForwardIos
          className={clsx({
            "transform rotate-90": isOpen,
            "transform rotate-0": !isOpen,
          })}
        />
      </div>
      <div
        className={`overflow-hidden transition-all duration-[300ms] ease-out `}
        style={{
          height: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
          marginTop: isOpen ? "1rem" : "0rem",
        }}
      >
        <div ref={contentRef}>
          <p className=" text-sm font-light">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default Page;
