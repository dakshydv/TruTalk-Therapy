"use client";

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
} from "lucide-react";

const SERVICES = [
  {
    title: "1:1 ABA Therapy",
    description:
      "Individualized Applied Behaviour Analysis sessions tailored to your child's goals — communication, social skills, daily living, and more.",
    icon: Brain,
  },
  {
    title: "Respite Services",
    description:
      "Reliable support that gives caregivers a break while your child is cared for in a safe, structured environment.",
    icon: HeartHandshake,
  },
  {
    title: "Early Intervention",
    description:
      "Targeted support for young children during critical developmental windows — available where clinically appropriate.",
    icon: Baby,
    note: "If applicable to your child's age and needs",
  },
  {
    title: "Social Skills Groups",
    description:
      "Small-group sessions that help children practise interaction, turn-taking, and friendship skills with peers.",
    icon: Users,
  },
  {
    title: "Parent / Caregiver Training",
    description:
      "Hands-on coaching so families can use ABA strategies confidently at home, school, and in the community.",
    icon: GraduationCap,
  },
  {
    title: "School Shadowing & Consultation",
    description:
      "Collaboration with educators to support your child's success in the classroom — offered where available.",
    icon: School,
    note: "If offered for your child's program",
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
  return (
    <section id="services" className="relative scroll-mt-24 bg-white">
      <div className="px-5 sm:px-8 lg:px-12 py-20 md:py-28">
        <div className="max-w-6xl mx-auto space-y-16 md:space-y-20">
          {/* Header */}
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

          {/* Trust strip */}
          <div className="flex flex-wrap gap-6 md:gap-10 py-6 border-y border-gold-200/60">
            <div className="flex items-center gap-3">
              <Award className="text-gold-600 shrink-0" size={22} />
              <span className="text-sm md:text-base text-chocolate-700 font-medium">
                BCBA-led clinical team
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CalendarDays className="text-gold-600 shrink-0" size={22} />
              <span className="text-sm md:text-base text-chocolate-700 font-medium">
                Serving families since 2021
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="text-gold-600 shrink-0" size={22} />
              <span className="text-sm md:text-base text-chocolate-700 font-medium">
                Ages birth – 18 years
              </span>
            </div>
          </div>

          {/* Services list */}
          <div>
            <SubsectionTitle className="mb-8">
              Services at a glance
            </SubsectionTitle>
            <ul className="divide-y divide-gold-200/60 border-t border-gold-200/60">
              {SERVICES.map((service) => (
                <li
                  key={service.title}
                  className="py-7 md:py-8 grid md:grid-cols-[auto_1fr] gap-4 md:gap-8 items-start"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-100 text-gold-700 shrink-0">
                    <service.icon size={22} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-chocolate-800 mb-2">
                      {service.title}
                    </h4>
                    <p className="text-chocolate-600 font-light leading-relaxed max-w-2xl">
                      {service.description}
                    </p>
                    {"note" in service && service.note && (
                      <p className="mt-2 text-sm text-gold-700/90 italic">
                        {service.note}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Delivery + sessions */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <SubsectionTitle className="mb-6">
                How we deliver care
              </SubsectionTitle>
              <ul className="space-y-6">
                {DELIVERY.map((option) => (
                  <li key={option.title} className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-100 text-gold-700 shrink-0 mt-0.5">
                      <option.icon size={20} strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="font-semibold text-chocolate-800 mb-1">
                        {option.title}
                      </p>
                      <p className="text-sm md:text-base text-chocolate-600 font-light leading-relaxed">
                        {option.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <SubsectionTitle className="mb-6">
                Sessions &amp; scheduling
              </SubsectionTitle>
              <div className="space-y-5 text-chocolate-600 font-light leading-relaxed">
                <p className="flex gap-3">
                  <Clock className="text-gold-600 shrink-0 mt-1" size={20} />
                  <span>
                    <strong className="font-medium text-chocolate-800">
                      Length &amp; frequency vary by child.
                    </strong>{" "}
                    Some families benefit from a few hours per week; others from
                    more intensive support. After assessment, we recommend a
                    schedule that fits your child&apos;s goals and your family.
                  </span>
                </p>
                <p>
                  Typical sessions range from 1–3 hours depending on the program.
                  Frequency is individualized — we&apos;ll walk you through
                  options at your free consultation.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
