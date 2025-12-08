import React from "react";
import Link from "next/link";
import { BookOpen, Video, Clock, ArrowRight } from "lucide-react";

const courses = [
  {
    title: "Foundations of ABA for Parents",
    description:
      "Master the core principles of Applied Behavior Analysis to support your child's learning and development at home.",
    modules: 10,
    duration: "5 weeks",
    image: "/course-autism.png",
  },
  {
    title: "Understanding Challenging Behaviours",
    description:
      "Decode the 'why' behind behaviors and learn evidence-based strategies to reduce meltdowns and increase cooperation.",
    modules: 6,
    duration: "4 weeks",
    image: "/course-communication.png",
  },
  {
    title: "Early Learner Skills Bootcamp",
    description:
      "Jumpstart communication, play, and imitation skills for young children with autism using fun, play-based ABA techniques.",
    modules: 8,
    duration: "4 weeks",
    image: "/course-sensory.png",
  },
  {
    title: "Communication Building 101",
    description:
      "Practical strategies to encourage speech, gestures, and functional communication in everyday family routines.",
    modules: 5,
    duration: "3 weeks",
    image: "/course-communication.png",
  },
  {
    title: "Art Therapy–Inspired Emotional Regulation for Kids",
    description:
      "Creative and sensory-friendly art activities designed to help children express feelings and manage big emotions.",
    modules: 4,
    duration: "2 weeks",
    image: "/course-sensory.png",
  },
  {
    title: "Toilet Training Using ABA Strategies",
    description:
      "A step-by-step, data-driven approach to successful potty training, tailored for children with autism and sensory needs.",
    modules: 4,
    duration: "2 weeks",
    image: "/course-autism.png",
  },
  {
    title: "Picky Eating & Mealtime Behaviour Basics",
    description:
      "Reduce mealtime stress and expand your child's diet using gradual exposure and positive reinforcement.",
    modules: 5,
    duration: "3 weeks",
    image: "/course-communication.png",
  },
  {
    title: "Building Daily Routines for Autism & ADHD",
    description:
      "Create structured, visual-supported routines that make mornings, bedtimes, and transitions smoother for the whole family.",
    modules: 6,
    duration: "3 weeks",
    image: "/course-autism.png",
  },
  {
    title: "Transition Skills Without Meltdowns",
    description:
      "Learn effective priming, visual aids, and countdown strategies to help your child move easily between activities.",
    modules: 3,
    duration: "1 week",
    image: "/course-sensory.png",
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
              Empowering you with{" "}
              <span className="text-sage-500 italic">knowledge.</span>
            </h2>
            <p className="text-lg text-stone-600 font-light">
              Our expert-led courses provide you with the tools and
              understanding to support your child's development at home.
            </p>
          </div>

          <Link
            href="/courses"
            className="hidden md:flex items-center gap-2 text-sage-600 font-bold hover:text-sage-800 transition-colors group"
          >
            View All Courses
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.slice(0, 3).map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-stone-100"
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
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

        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 border border-sage-100 shadow-sm text-center">
          <h3 className="text-2xl font-serif font-bold text-stone-800 mb-8">
            Each course includes:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Clear video lessons",
              "Printable worksheets",
              "Practical strategies",
              "Action plans for real home settings",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-3 text-stone-600 font-medium p-4 bg-sage-50 rounded-xl"
              >
                <span className="w-2 h-2 rounded-full bg-sage-400"></span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-sage-600 font-bold hover:text-sage-800 transition-colors group"
          >
            View All Courses
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
