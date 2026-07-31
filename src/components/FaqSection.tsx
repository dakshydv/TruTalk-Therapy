"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeading, accentClass } from "@/components/SectionHeading";
import { FAQ_ITEMS } from "@/lib/seo";

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
                  className="rounded-2xl border border-gold-300 bg-gold-100 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setExpanded(isExpanded ? null : index)}
                    aria-expanded={isExpanded}
                    className="w-full flex items-start justify-between gap-4 px-5 py-4 md:px-6 md:py-5 text-left hover:bg-gold-200/50 transition-colors"
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
        </div>
      </div>
    </section>
  );
}
