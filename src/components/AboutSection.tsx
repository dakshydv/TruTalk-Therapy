import React from 'react';
import { User } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-sage-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 relative">
          <div className="aspect-3/4 bg-stone-200 rounded-2xl overflow-hidden shadow-xl relative">
             {/* Placeholder for Therapist Image */}
             <div className="absolute inset-0 flex items-center justify-center bg-stone-100 text-stone-400">
                <User size={64} />
             </div>
             {/* Decorative element */}
             <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-sage-200 rounded-full -z-10"></div>
             <div className="absolute -top-6 -left-6 w-32 h-32 bg-sage-100 rounded-full -z-10"></div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 space-y-6">
          <div className="inline-block px-3 py-1 border border-sage-200 rounded-full bg-white/50 backdrop-blur-sm">
            <span className="text-xs font-bold tracking-[0.2em] text-sage-600 uppercase">
              About The Therapist
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-stone-800 leading-tight">
            Guiding families with <span className="text-sage-500 italic">compassion</span> and expertise.
          </h2>
          
          <p className="text-lg text-stone-600 leading-relaxed font-light">
            Dr. Sarah Bennett is a dedicated child psychologist specializing in autism spectrum disorders. With over 15 years of experience, she believes in a holistic approach that empowers both children and their parents.
          </p>
          
          <p className="text-lg text-stone-600 leading-relaxed font-light">
            "My mission is to create a safe space where every child's unique voice is heard and understood. I work closely with families to build bridges of communication and understanding."
          </p>

          <div className="pt-4">
             <h3 className="font-serif text-xl text-stone-800 mb-2">Credentials</h3>
             <ul className="space-y-2 text-stone-600 font-light">
                <li className="flex items-center gap-2">
                   <span className="w-1.5 h-1.5 bg-sage-400 rounded-full"></span>
                   Ph.D. in Child Psychology
                </li>
                 <li className="flex items-center gap-2">
                   <span className="w-1.5 h-1.5 bg-sage-400 rounded-full"></span>
                   Certified Autism Specialist (CAS)
                </li>
                 <li className="flex items-center gap-2">
                   <span className="w-1.5 h-1.5 bg-sage-400 rounded-full"></span>
                   Member of the American Psychological Association
                </li>
             </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
