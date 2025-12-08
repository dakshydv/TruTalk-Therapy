import React from "react";
import { Heart, Users, Brain, Sparkles, Check } from "lucide-react";

const services = [
  {
    title: "Parent & Caregiver Coaching (Non-Clinical)",
    description: [
      "Understanding behaviours",
      "Prevention strategies",
      "Home routines",
      "Building communication",
      "Supporting emotional needs",
    ],
    icon: Heart,
  },
  {
    title: "Online Courses",
    description: [
      "Self-paced learning modules",
      "Downloadable tools and visuals",
      "Step-by-step guidance for home use",
    ],
    icon: Users,
  },
  {
    title: "Monthly Membership for Parents",
    description: [
      "Two live webinars per month",
      "Weekly micro-lessons",
      "Printable visuals and checklists",
      "Peer support community",
      "Group Q&A sessions",
    ],
    icon: Brain,
  },
  {
    title: "Art-Based Emotional Regulation (Non-Clinical)",
    description: [
      "Creative calming tools",
      "Emotion mapping",
      "Sensory-friendly art activities",
    ],
    icon: Sparkles,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-3 py-1 border border-sage-200 rounded-full bg-sage-50">
            <span className="text-xs font-bold tracking-[0.2em] text-sage-600 uppercase">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6">
            Holistic care for{" "}
            <span className="text-sage-500 italic">growing minds.</span>
          </h2>
          <p className="text-lg text-stone-500 max-w-2xl mx-auto font-light">
            We offer a range of specialized services designed to support
            children and families on their journey towards well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:border-sage-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center text-sage-600 mb-6 group-hover:bg-sage-500 group-hover:text-white transition-colors duration-300">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-800 mb-3 group-hover:text-sage-600 transition-colors">
                {service.title}
              </h3>
              <ul className="space-y-3">
                {service.description.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-stone-500 font-light text-sm"
                  >
                    <Check className="w-4 h-4 mr-3 text-sage-500 mt-0.5 shrink-0" />
                    <span className="flex-1 text-left leading-tight">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
