{/*
  DIRECTION CONTRACT
  THESIS: A warm, hand-drawn world rooted in the banner's golden sunrise and playful
  children — the landing page feels like opening a sun-filled storybook, not a clinical
  portal. It refuses the sterile hero + stats template.
  OWN-WORLD: Golden yellow (#e5a817), chocolate brown (#5e3a1e), warm cream (#fefcf5),
  charcoal (#302c24). Hand-illustrated banner as hero centrepiece. Cormorant Garamond
  display, Lato body.
  STORY: Mobile — banner then headline and CTA in one flow. Desktop — banner-only
  first viewport; scroll reveals intro, then About, Services, FAQ, Contact.
  FIRST VIEWPORT: Mobile stacked hero; desktop banner-only full screen.
  FORM: Storybook-cover landing with the illustration as the hero artifact, not a
  background. Warm, approachable, bold.
*/}

import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SiteHeader } from "@/components/SiteHeader";
import { FaqSection } from "@/components/FaqSection";
import { ContactSection } from "@/components/ContactSection";
import Link from "next/link";
import { ArrowRight, Star, ChevronDown } from "lucide-react";

function HeroIntro() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center text-center space-y-6 md:space-y-8">
      <h1 className="font-serif text-[2.625rem] sm:text-[3.25rem] lg:text-[3.75rem] font-semibold text-chocolate-800 leading-[1.05] tracking-[-0.02em]">
        Your child&apos;s brightest chapter{" "}
        <span className="relative inline-block text-gold-500 italic font-normal">
          starts here.
          <svg
            className="absolute -bottom-0.5 left-0 w-full h-2 text-gold-400 pointer-events-none"
            viewBox="0 0 120 8"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0 4 Q 30 7 60 4 T 120 4"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </h1>

      <p className="text-lg sm:text-xl text-chocolate-600 leading-relaxed max-w-xl font-sans font-light">
        A warm, supportive environment designed to help every child find{" "}
        <span className="font-medium text-chocolate-800">their voice</span>,{" "}
        <span className="font-medium text-chocolate-800">build confidence</span>, and{" "}
        <span className="font-medium text-chocolate-800">thrive</span> at their own
        pace.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-2 md:pt-4 w-full sm:w-auto">
        <Link
          href="#contact"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-chocolate-800 text-gold-50 rounded-full font-semibold text-base sm:text-lg tracking-wide shadow-md hover:bg-chocolate-700 hover:-translate-y-0.5 transition-all duration-300"
        >
          Start Your Journey
          <ArrowRight size={20} />
        </Link>

        <div className="flex flex-col items-center gap-1.5">
          <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={18}
                className="fill-gold-500 text-gold-500"
              />
            ))}
          </div>
          <p className="text-sm font-medium text-chocolate-700">
            Trusted by 2,000+ families
          </p>
        </div>
      </div>
    </div>
  );
}

function HeroBanner({ className = "" }: { className?: string }) {
  return (
    <div
      className={`w-full max-w-5xl mx-auto flex items-center justify-center animate-fade-in ${className}`.trim()}
    >
      <img
        src="/banner.png"
        alt="Trutalk Therapy — children playing joyfully"
        className="w-full h-auto object-contain"
        draggable={false}
      />
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <SiteHeader />

      <main className="grow flex flex-col">
        {/* Mobile: banner + intro stacked */}
        <section className="lg:hidden px-5 sm:px-8 pt-28 pb-16 bg-white">
          <HeroBanner />
          <div className="mt-8 sm:mt-10">
            <HeroIntro />
          </div>
        </section>

        {/* Desktop: banner-only first viewport */}
        <section className="hidden lg:flex min-h-screen flex-col justify-center items-center px-8 xl:px-12 pt-28 pb-16 relative bg-white">
          <HeroBanner />
          <a
            href="#intro"
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-chocolate-300 hover:text-gold-600 transition-colors z-20"
            style={{ animation: "gentle-bob 2.5s ease-in-out infinite" }}
            aria-label="Scroll to introduction"
          >
            <ChevronDown size={28} />
          </a>
        </section>

        {/* Desktop: intro on scroll */}
        <section
          id="intro"
          className="hidden lg:block scroll-mt-24 px-8 xl:px-12 py-20 xl:py-28 bg-white"
        >
          <HeroIntro />
        </section>

        <AboutSection />
        <ServicesSection />
        <FaqSection />
        <ContactSection />
      </main>
    </div>
  );
}
