"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  SectionHeading,
  SubsectionTitle,
  accentClass,
} from "@/components/SectionHeading";
import {
  Brain,
  Home,
  Building2,
  Video,
  Clock,
  Users,
  GraduationCap,
  School,
  HeartHandshake,
  Baby,
  Award,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

const AUTO_ADVANCE_MS = 5000;

const SERVICES = [
  {
    title: "1:1 ABA Therapy",
    description:
      "Individualized Applied Behaviour Analysis sessions tailored to your child's goals. Every program is designed by a BCBA and delivered by trained clinical staff who get to know your child — their interests, strengths, and what motivates them to learn.",
    focusAreas: [
      "Communication and language development",
      "Social interaction and play skills",
      "Daily living and independence skills",
      "School readiness and classroom behaviour",
      "Behaviour support tailored to your child's needs",
    ],
    icon: Brain,
  },
  {
    title: "Respite Services",
    description:
      "Reliable support that gives caregivers a meaningful break while your child is cared for in a safe, structured environment. Our team maintains familiar routines and positive engagement so you can rest knowing your child is in capable hands.",
    focusAreas: [
      "Supervised care in a welcoming clinic setting",
      "Continuity with your child's existing routines and preferences",
      "Structured activities that support comfort and engagement",
      "Flexible scheduling to fit your family's needs",
    ],
    icon: HeartHandshake,
  },
  {
    title: "Early Intervention",
    description:
      "Targeted support for young children during critical developmental windows. Early intervention focuses on building foundational skills through play-based teaching and positive reinforcement — helping little ones communicate, connect, and grow during their most formative years.",
    focusAreas: [
      "Early communication and language foundations",
      "Play-based learning and natural environment teaching",
      "Social engagement with caregivers and peers",
      "Daily routines such as feeding, dressing, and transitions",
    ],
    note: "If applicable to your child's age and needs",
    icon: Baby,
  },
  {
    title: "Social Skills Groups",
    description:
      "Small-group sessions that help children practise interaction, turn-taking, and friendship skills with peers in a supportive setting. Groups are carefully matched by age and skill level so every child can participate at their own pace.",
    focusAreas: [
      "Turn-taking, sharing, and cooperative play",
      "Conversation skills and understanding social cues",
      "Making and maintaining friendships",
      "Managing emotions in group settings",
    ],
    icon: Users,
  },
  {
    title: "Parent / Caregiver Training",
    description:
      "Hands-on coaching so families can use ABA strategies confidently at home, school, and in the community. We believe caregivers are essential partners in therapy — not spectators — and we equip you with practical tools you can use every day.",
    focusAreas: [
      "Strategies for reinforcing skills outside of sessions",
      "Managing challenging moments with confidence",
      "Collaborating with teachers and other professionals",
      "Tracking progress and celebrating milestones together",
    ],
    icon: GraduationCap,
  },
  {
    title: "School Shadowing & Consultation",
    description:
      "Collaboration with educators to support your child's success in the classroom. Our clinical team works alongside school staff to help skills learned in therapy transfer to the school environment — where they matter most.",
    focusAreas: [
      "Classroom behaviour support and skill generalization",
      "Collaboration with teachers and support staff",
      "Transition planning between home, clinic, and school",
      "Consultation on strategies that fit the school day",
    ],
    note: "If offered for your child's program",
    icon: School,
  },
] as const;

const DELIVERY = [
  {
    title: "Center-Based",
    description:
      "Structured clinic setting with specialized materials and opportunities to interact with other children.",
    icon: Building2,
  },
  {
    title: "In-Home",
    description:
      "Therapy in the comfort of your home, so skills are learned in your child's everyday environment.",
    icon: Home,
  },
  {
    title: "Telehealth",
    description:
      "Virtual sessions for parent training, consultations, and select therapy components when appropriate.",
    icon: Video,
  },
] as const;

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const activeService = SERVICES[activeIndex];
  const ActiveIcon = activeService.icon;
  const resumeTimeoutRef = useRef<number | null>(null);
  const preferReducedMotion = useRef(false);

  useEffect(() => {
    preferReducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  useEffect(() => {
    if (paused || preferReducedMotion.current) return;

    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % SERVICES.length);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(id);
  }, [paused, activeIndex]);

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current !== null) {
        window.clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  const selectService = (index: number) => {
    setActiveIndex(index);
    setPaused(true);
    if (resumeTimeoutRef.current !== null) {
      window.clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = window.setTimeout(() => {
      setPaused(false);
      resumeTimeoutRef.current = null;
    }, AUTO_ADVANCE_MS * 2);
  };

  return (
    <section id="services" className="relative scroll-mt-24 bg-white">
      <div className="px-5 sm:px-8 lg:px-12 pt-8 pb-20 md:pt-10 md:pb-28">
        <div className="max-w-6xl mx-auto space-y-16 md:space-y-20">
          <SectionHeading
            label="Our Services"
            title={
              <>
                Compassionate ABA support for children{" "}
                <span className={accentClass}>up to 18.</span>
              </>
            }
            description="BCBA-led programs for autism and developmental needs — personalized, family-centred, and designed to help your child build skills that last across home, school, and community."
          />

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 py-2 border-y border-gold-300">
            <div className="flex items-center gap-2.5">
              <Award className="text-gold-500 shrink-0" size={22} />
              <span className="text-base text-chocolate-800 font-semibold">
                BCBA-led clinical team
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <CalendarDays className="text-gold-500 shrink-0" size={22} />
              <span className="text-base text-chocolate-800 font-semibold">
                Serving families since 2021
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <Users className="text-gold-500 shrink-0" size={22} />
              <span className="text-base text-chocolate-800 font-semibold">
                Ages birth – 18 years
              </span>
            </div>
          </div>

          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                setPaused(false);
              }
            }}
          >
            <SubsectionTitle className="mb-8 md:mb-10">
              Services at a glance
            </SubsectionTitle>

            <div className="grid lg:grid-cols-[minmax(0,17rem)_1fr] gap-8 lg:gap-12 xl:gap-16">
              <nav
                className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 lg:overflow-visible snap-x snap-mandatory lg:snap-none"
                aria-label="Services"
              >
                {SERVICES.map((service, index) => {
                  const isActive = activeIndex === index;
                  const Icon = service.icon;

                  return (
                    <button
                      key={service.title}
                      type="button"
                      onClick={() => selectService(index)}
                      aria-current={isActive ? "true" : undefined}
                      className={`group flex shrink-0 snap-start items-center gap-3 rounded-2xl px-4 py-3.5 text-left transition-colors duration-200 lg:w-full ${
                        isActive
                          ? "bg-gold-100 text-chocolate-800"
                          : "text-chocolate-600 hover:bg-gold-50 hover:text-chocolate-800"
                      }`}
                    >
                      <Icon
                        size={20}
                        strokeWidth={1.75}
                        className={
                          isActive ? "text-gold-500" : "text-gold-400"
                        }
                      />
                      <span
                        className={`font-serif text-base leading-snug ${
                          isActive ? "font-semibold" : "font-medium"
                        }`}
                      >
                        {service.title}
                      </span>
                    </button>
                  );
                })}
              </nav>

              <article
                key={activeService.title}
                className="animate-fade-in"
                aria-live="polite"
              >
                <div className="flex items-start gap-5 md:gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold-300 bg-gold-100 text-gold-500">
                    <ActiveIcon size={26} strokeWidth={1.75} />
                  </div>
                  <div className="pt-1 flex-1">
                    <p className="mb-2 font-serif text-sm italic text-gold-600">
                      {String(activeIndex + 1).padStart(2, "0")} /{" "}
                      {String(SERVICES.length).padStart(2, "0")}
                    </p>
                    <h4 className="font-serif text-2xl md:text-3xl text-chocolate-800 leading-snug mb-4">
                      {activeService.title}
                    </h4>
                    <p className="max-w-2xl text-base md:text-lg text-chocolate-700 font-light leading-relaxed">
                      {activeService.description}
                    </p>

                    <div className="mt-6 md:mt-8">
                      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-chocolate-800">
                        What we focus on
                      </p>
                      <ul className="grid gap-2 sm:grid-cols-2 max-w-2xl">
                        {activeService.focusAreas.map((area) => (
                          <li
                            key={area}
                            className="flex items-start gap-2.5 text-sm md:text-base text-chocolate-700 font-light leading-snug"
                          >
                            <span
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500"
                              aria-hidden="true"
                            />
                            {area}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {"note" in activeService && activeService.note && (
                      <p className="mt-6 text-sm md:text-base text-gold-600 italic font-medium">
                        {activeService.note}
                      </p>
                    )}
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <SubsectionTitle className="mb-8">
                How we deliver care
              </SubsectionTitle>
              <ul className="space-y-7">
                {DELIVERY.map((option) => (
                  <li key={option.title} className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-500 mt-0.5">
                      <option.icon size={20} strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="font-serif text-xl text-chocolate-800 mb-1.5">
                        {option.title}
                      </p>
                      <p className="text-sm md:text-base text-chocolate-700 font-light leading-relaxed">
                        {option.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SubsectionTitle className="mb-8">
                Sessions &amp; scheduling
              </SubsectionTitle>
              <div className="space-y-5 text-chocolate-700 font-light leading-relaxed">
                <p className="flex gap-3">
                  <Clock className="text-gold-500 shrink-0 mt-1" size={20} />
                  <span>
                    <strong className="font-semibold text-chocolate-800">
                      Length &amp; frequency vary by child.
                    </strong>{" "}
                    Some families benefit from a few hours per week; others from
                    more intensive support. After assessment, we recommend a
                    schedule that fits your child&apos;s goals and your family.
                  </span>
                </p>
                <p>
                  Typical sessions range from{" "}
                  <span className="font-semibold text-chocolate-800">
                    1–3 hours
                  </span>{" "}
                  depending on the program. Frequency is individualized — we&apos;ll
                  walk you through options at your{" "}
                  <span className="font-semibold text-chocolate-800">
                    free consultation
                  </span>
                  .
                </p>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 pt-2 font-semibold text-chocolate-800 hover:text-gold-600 transition-colors duration-200"
                >
                  Book a free consultation
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
