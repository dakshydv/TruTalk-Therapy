import React from 'react';
import { BookOpen, Video, Clock, ArrowRight } from 'lucide-react';

const courses = [
  {
    title: "Understanding Autism: A Parent's Guide",
    description: "A comprehensive introduction to autism spectrum disorder, focusing on understanding your child's perspective and needs.",
    modules: 8,
    duration: "4 weeks",
    image: "bg-sage-100", // Placeholder class
  },
  {
    title: "Effective Communication Strategies",
    description: "Learn practical techniques to enhance communication and connection with your child, reducing frustration and building trust.",
    modules: 6,
    duration: "3 weeks",
    image: "bg-stone-200", // Placeholder class
  },
  {
    title: "Managing Sensory Sensitivities",
    description: "Strategies for identifying and managing sensory triggers to create a more comfortable environment for your child.",
    modules: 5,
    duration: "2.5 weeks",
    image: "bg-sage-200", // Placeholder class
  },
];

export function CoursesSection() {
  return (
    <section id="courses" className="py-20 px-6 md:px-12 bg-sage-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-block mb-4 px-3 py-1 border border-sage-200 rounded-full bg-white/50 backdrop-blur-sm">
              <span className="text-xs font-bold tracking-[0.2em] text-sage-600 uppercase">
                Parent Resources
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">
              Empowering you with <span className="text-sage-500 italic">knowledge.</span>
            </h2>
            <p className="text-lg text-stone-600 font-light">
              Our expert-led courses provide you with the tools and understanding to support your child's development at home.
            </p>
          </div>
          
          <button className="hidden md:flex items-center gap-2 text-sage-600 font-bold hover:text-sage-800 transition-colors group">
            View All Courses
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-stone-100">
              <div className={`h-48 ${course.image} relative overflow-hidden`}>
                 <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300"></div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs font-bold text-sage-600 uppercase tracking-wider mb-4">
                  <div className="flex items-center gap-1">
                    <BookOpen size={14} />
                    <span>{course.modules} Modules</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{course.duration}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-stone-800 mb-3 group-hover:text-sage-600 transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-stone-500 font-light leading-relaxed mb-6 text-sm">
                  {course.description}
                </p>
                
                <button className="w-full py-3 hover:cursor-pointer border border-sage-200 text-sage-600 rounded-lg font-bold hover:bg-sage-50 hover:border-sage-300 transition-all duration-300 flex items-center justify-center gap-2">
                  <Video size={18} />
                  Start Learning
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
           <button className="inline-flex items-center gap-2 text-sage-600 font-bold hover:text-sage-800 transition-colors group">
            View All Courses
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
