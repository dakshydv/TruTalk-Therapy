"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { SectionHeading, accentClass } from "@/components/SectionHeading";

const FAQ_ITEMS = [
  {
    question: "What is ABA therapy?",
    answer:
      "ABA (Applied Behavior Analysis) is a type of therapy that helps children learn important life skills. It focuses on building communication, social, play, and daily living skills while reducing behaviours that may make learning or everyday activities more difficult. Every therapy plan is personalized to meet your child's unique needs and goals.",
  },
  {
    question: "How long are sessions and how often?",
    answer:
      "Session length and frequency depend on your child's needs and goals. Some children may have a few hours of therapy each week, while others benefit from more intensive support. After an assessment, we'll recommend a schedule that's right for your family.",
  },
  {
    question: "What's the difference between center-based and in-home therapy?",
    answer:
      "Center-based therapy takes place in a structured clinic setting with access to specialized materials and opportunities to interact with other children. In-home therapy happens in the comfort of your home, allowing your child to learn skills in their everyday environment. Both options are effective, and we'll help you choose the one that best fits your child's needs.",
  },
  {
    question: "What ages and diagnoses do you treat?",
    answer:
      "We work with children up to 18 years old and support a wide range of developmental and behavioural needs. While ABA therapy is most commonly used for children with autism, it can also help children with other developmental or behavioural challenges. If you're unsure whether your child is a good fit, we'd be happy to talk with you.",
  },
  {
    question: "What's your caregiver involvement like?",
    answer:
      "We believe parents and caregivers are an important part of the therapy process. We regularly share updates, teach strategies you can use at home, and work together to help your child make progress both during therapy and in everyday life.",
  },
] as const;

export function FaqSection() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-24 bg-white">
      <div className="px-5 sm:px-8 lg:px-12 py-20 md:py-28">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            label="FAQ"
            title={
              <>
                Common parent{" "}
                <span className={accentClass}>questions.</span>
              </>
            }
            description="Straightforward answers about how we work, what to expect, and how we partner with families."
          />

          <div className="mt-12 md:mt-16 space-y-3">
            {FAQ_ITEMS.map((item, index) => {
              const isExpanded = expanded === index;
              return (
                <div
                  key={item.question}
                  className="rounded-2xl border border-gold-300/80 bg-gold-50/30 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setExpanded(isExpanded ? null : index)}
                    aria-expanded={isExpanded}
                    className="w-full flex items-start justify-between gap-4 px-5 py-4 md:px-6 md:py-5 text-left hover:bg-gold-50/60 transition-colors"
                  >
                    <span className="font-serif text-base md:text-lg font-semibold text-chocolate-800 leading-snug">
                      {item.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-gold-600 mt-0.5 transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isExpanded && (
                    <p className="px-5 pb-5 md:px-6 md:pb-6 text-chocolate-600 font-light leading-relaxed">
                      {item.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 md:mt-16 rounded-3xl border border-gold-200/60 bg-gold-50/40 px-6 py-8 md:px-10 md:py-10 text-center">
            <p className="text-chocolate-600 font-light leading-relaxed max-w-lg mx-auto">
              For more information and OAP funding related queries, book a free
              consultation.
            </p>
            <Link
              href="#contact"
              className="mt-6 inline-flex items-center justify-center gap-2 px-8 py-4 bg-chocolate-800 text-gold-50 rounded-full font-semibold text-base hover:bg-chocolate-700 transition-colors duration-200"
            >
              Book a free consultation
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
