import React from 'react';
import { Heart, Users, Brain, Sparkles } from 'lucide-react';

const services = [
  {
    title: "Child Counseling",
    description: "Individualized therapy sessions tailored to your child's unique needs, fostering emotional growth and resilience.",
    icon: Heart,
  },
  {
    title: "Parent Coaching",
    description: "Empowering parents with strategies and tools to support their child's development and navigate challenges with confidence.",
    icon: Users,
  },
  {
    title: "Autism Assessments",
    description: "Comprehensive evaluations to understand your child's developmental profile and identify their strengths and areas for support.",
    icon: Brain,
  },
  {
    title: "Social Skills Groups",
    description: "Small group sessions designed to help children build meaningful connections and practice social interaction in a supportive environment.",
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
            Holistic care for <span className="text-sage-500 italic">growing minds.</span>
          </h2>
          <p className="text-lg text-stone-500 max-w-2xl mx-auto font-light">
            We offer a range of specialized services designed to support children and families on their journey towards well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:border-sage-200 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center text-sage-600 mb-6 group-hover:bg-sage-500 group-hover:text-white transition-colors duration-300">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-800 mb-3 group-hover:text-sage-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-stone-500 font-light leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
