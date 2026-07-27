{/*
  DIRECTION CONTRACT
  THESIS: A warm, hand-drawn world rooted in the banner's golden sunrise and playful
  children — the landing page feels like opening a sun-filled storybook, not a clinical
  portal. It refuses the sterile hero + stats template.
  OWN-WORLD: Golden yellow (#e5a817), chocolate brown (#5e3a1e), warm cream (#fefcf5),
  charcoal (#302c24). Hand-illustrated banner as hero centrepiece. Cormorant Garamond
  display, Lato body.
  STORY: A parent lands, sees joyful children in golden light, reads "your child's
  brightest chapter starts here," feels hope, scrolls to social proof, and books a
  consultation or browses courses.
  FIRST VIEWPORT: Full-bleed warm cream ground. The banner illustration dominates the
  upper two-thirds. Below it, the headline in chocolate brown with "TruTalk" in gold.
  A single CTA button in gold. Star reviews float beneath.
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

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <SiteHeader />

      <main className="flex-grow flex flex-col">
        {/* ═══════════════ HERO SECTION ═══════════════ */}
        <section className="min-h-screen flex flex-col justify-center px-5 sm:px-8 lg:px-12 pt-32 pb-20 relative bg-white">
          <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] xl:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-10 xl:gap-12 items-center relative z-10">
            {/* Left Column: Typography & CTA */}
            <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-10 animate-fade-in-up mt-4 lg:mt-0">
              <h1 className="max-w-xl font-serif text-[2.625rem] sm:text-[3.25rem] lg:text-[3.75rem] xl:text-[4.25rem] font-semibold text-chocolate-800 leading-[1.02] tracking-[-0.02em]">
                Your child&apos;s brightest chapter{" "}
                <span className="relative inline-block text-gold-600 italic font-normal">
                  starts here.
                  <svg
                    className="absolute -bottom-0.5 left-0 w-full h-2 text-gold-300/90 pointer-events-none"
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
              
              <p className="hidden md:block text-lg sm:text-xl text-chocolate-600/90 leading-relaxed max-w-lg font-sans font-light">
                A warm, supportive environment designed to help every child find their voice, build confidence, and thrive at their own pace.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-6 pt-2 lg:pt-6 w-full sm:w-auto">
                <Link
                  href="#contact"
                  className="w-full sm:w-auto relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-chocolate-800 text-gold-50 rounded-full font-semibold text-base sm:text-lg tracking-wide shadow-md hover:bg-chocolate-700 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Start Your Journey
                  <ArrowRight size={20} />
                </Link>
                
                <div className="flex flex-col items-center lg:items-start gap-1.5 w-full sm:w-auto mt-2 sm:mt-0">
                  <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className="fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                  <p className="text-sm font-medium text-chocolate-700">
                    Trusted by 2,000+ families
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Minimal Banner Integration */}
            <div className="order-1 lg:order-2 relative w-full flex items-center justify-center animate-fade-in lg:justify-end" style={{ animationDelay: '0.2s' }}>
               {/* Banner Illustration Only */}
               <div className="relative w-full max-w-[480px] sm:max-w-2xl md:max-w-3xl lg:max-w-full xl:max-w-[44rem] 2xl:max-w-[48rem] mx-auto lg:mx-0">
                  <img 
                    src="/banner.png" 
                    alt="Trutalk Therapy — children playing joyfully" 
                    className="w-full h-auto object-contain"
                    draggable={false}
                  />
               </div>
            </div>
          </div>

          {/* Scroll hint */}
          <a
            href="#about"
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-chocolate-300 hover:text-gold-600 transition-colors z-20"
            style={{ animation: "gentle-bob 2.5s ease-in-out infinite" }}
          >
            <ChevronDown size={28} />
          </a>
        </section>

        {/* Remaining sections — will be redesigned next */}
        <AboutSection />
        <ServicesSection />
        <FaqSection />
        <ContactSection />
      </main>
    </div>
  );
}
