'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BookOpen, Clock, Heart, Bookmark, Search, Filter, PlayCircle, Lock } from 'lucide-react';

// --- Types ---
type Course = {
  id: string;
  title: string;
  description: string;
  modules: number;
  duration: string;
  image: string;
  isFree: boolean;
  price?: string;
  category: string;
};

// --- Mock Data ---
const ALL_COURSES: Course[] = [
  {
    id: '1',
    title: "Understanding Autism: A Parent's Guide",
    description: "A comprehensive introduction to autism spectrum disorder, focusing on understanding your child's perspective and needs.",
    modules: 8,
    duration: "4 weeks",
    image: "/course-autism.png",
    isFree: true,
    category: "Foundations"
  },
  {
    id: '2',
    title: "Effective Communication Strategies",
    description: "Learn practical techniques to enhance communication and connection with your child, reducing frustration and building trust.",
    modules: 6,
    duration: "3 weeks",
    image: "/course-communication.png",
    isFree: false,
    price: "$49",
    category: "Communication"
  },
  {
    id: '3',
    title: "Managing Sensory Sensitivities",
    description: "Strategies for identifying and managing sensory triggers to create a more comfortable environment for your child.",
    modules: 5,
    duration: "2.5 weeks",
    image: "/course-sensory.png",
    isFree: false,
    price: "$39",
    category: "Sensory"
  },
  {
    id: '4',
    title: "Building Social Skills through Play",
    description: "Fun and engaging ways to help your child develop essential social skills through structured and unstructured play.",
    modules: 10,
    duration: "5 weeks",
    image: "/course-autism.png", // Reusing image for demo
    isFree: false,
    price: "$59",
    category: "Social Skills"
  },
  {
    id: '5',
    title: "Navigating School & IEPs",
    description: "A guide to advocating for your child's educational needs and understanding the Individualized Education Program process.",
    modules: 4,
    duration: "2 weeks",
    image: "/course-communication.png", // Reusing image for demo
    isFree: true,
    category: "Advocacy"
  },
  {
    id: '6',
    title: "Self-Care for Caregivers",
    description: "Essential strategies for parents to maintain their own mental health and well-being while caring for a child with special needs.",
    modules: 3,
    duration: "1 week",
    image: "/course-sensory.png", // Reusing image for demo
    isFree: true,
    category: "Wellness"
  }
];

// --- Components ---

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState<'available' | 'my-modules' | 'saved'>('available');
  const [likedCourses, setLikedCourses] = useState<Set<string>>(new Set());
  const [savedCourses, setSavedCourses] = useState<Set<string>>(new Set());
  const [myModules, setMyModules] = useState<Set<string>>(new Set(['1'])); // Assume user has 'bought' course 1

  const toggleLike = (id: string) => {
    const newLiked = new Set(likedCourses);
    if (newLiked.has(id)) {
      newLiked.delete(id);
    } else {
      newLiked.add(id);
    }
    setLikedCourses(newLiked);
  };

  const toggleSave = (id: string) => {
    const newSaved = new Set(savedCourses);
    if (newSaved.has(id)) {
      newSaved.delete(id);
    } else {
      newSaved.add(id);
    }
    setSavedCourses(newSaved);
  };

  const getFilteredCourses = () => {
    switch (activeTab) {
      case 'my-modules':
        return ALL_COURSES.filter(c => myModules.has(c.id));
      case 'saved':
        return ALL_COURSES.filter(c => savedCourses.has(c.id));
      case 'available':
      default:
        return ALL_COURSES;
    }
  };

  const filteredCourses = getFilteredCourses();

  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-20">
      {/* Header Section */}
      <div className="bg-sage-100/50 border-b border-sage-200 mb-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <h1 className="text-4xl md:text-5xl font-serif text-stone-800 mb-4">
            Learning <span className="text-sage-600 italic">Hub</span>
          </h1>
          <p className="text-lg text-stone-600 font-light max-w-2xl">
            Explore our library of expert-led courses designed to support you and your child's journey.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-8 border-b border-stone-200 pb-1">
          <button
            onClick={() => setActiveTab('available')}
            className={`pb-3 px-2 text-sm font-bold uppercase tracking-wider transition-all relative ${
              activeTab === 'available'
                ? 'text-sage-700 border-b-2 border-sage-500'
                : 'text-stone-400 hover:text-stone-600'
            }`}
          >
            Available Modules
          </button>
          <button
            onClick={() => setActiveTab('my-modules')}
            className={`pb-3 px-2 text-sm font-bold uppercase tracking-wider transition-all relative ${
              activeTab === 'my-modules'
                ? 'text-sage-700 border-b-2 border-sage-500'
                : 'text-stone-400 hover:text-stone-600'
            }`}
          >
            My Modules
          </button>
          <button
            onClick={() => setActiveTab('saved')}
            className={`pb-3 px-2 text-sm font-bold uppercase tracking-wider transition-all relative ${
              activeTab === 'saved'
                ? 'text-sage-700 border-b-2 border-sage-500'
                : 'text-stone-400 hover:text-stone-600'
            }`}
          >
            Saved
          </button>
        </div>

        {/* Content Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-stone-100 flex flex-col">
                {/* Image Container */}
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-300"></div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {course.isFree ? (
                      <span className="bg-sage-100/90 backdrop-blur-sm text-sage-700 text-xs font-bold px-3 py-1 rounded-full border border-sage-200">
                        FREE
                      </span>
                    ) : (
                      <span className="bg-stone-100/90 backdrop-blur-sm text-stone-600 text-xs font-bold px-3 py-1 rounded-full border border-stone-200">
                        PREMIUM
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-[-10px] group-hover:translate-y-0">
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleLike(course.id); }}
                      className={`p-2 rounded-full backdrop-blur-md transition-colors ${
                        likedCourses.has(course.id)
                          ? 'bg-red-50 text-red-500 hover:bg-red-100'
                          : 'bg-white/80 text-stone-500 hover:bg-white hover:text-red-500'
                      }`}
                    >
                      <Heart size={18} fill={likedCourses.has(course.id) ? "currentColor" : "none"} />
                    </button>
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleSave(course.id); }}
                      className={`p-2 rounded-full backdrop-blur-md transition-colors ${
                        savedCourses.has(course.id)
                          ? 'bg-sage-100 text-sage-600 hover:bg-sage-200'
                          : 'bg-white/80 text-stone-500 hover:bg-white hover:text-sage-600'
                      }`}
                    >
                      <Bookmark size={18} fill={savedCourses.has(course.id) ? "currentColor" : "none"} />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-xs font-bold text-sage-600 uppercase tracking-wider mb-3">
                    <div className="flex items-center gap-1">
                      <BookOpen size={14} />
                      <span>{course.modules} Modules</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-stone-800 mb-2 group-hover:text-sage-700 transition-colors line-clamp-2">
                    {course.title}
                  </h3>

                  <p className="text-stone-500 font-light text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                    {course.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-stone-100 flex items-center justify-between">
                    <div className="text-stone-800 font-bold">
                      {course.isFree ? 'Free' : course.price}
                    </div>
                    
                    {myModules.has(course.id) ? (
                       <Link href={`/courses/${course.id}`} className="px-4 py-2 bg-sage-100 text-sage-700 rounded-lg text-sm font-bold hover:bg-sage-200 transition-colors flex items-center gap-2">
                         <PlayCircle size={16} />
                         Continue
                       </Link>
                    ) : (
                       <Link href={`/courses/${course.id}`} className="px-4 py-2 border border-sage-200 text-sage-600 rounded-lg text-sm font-bold hover:bg-sage-50 hover:border-sage-300 transition-colors flex items-center gap-2">
                         {course.isFree ? 'Start Learning' : 'Get Access'}
                         {!course.isFree && <Lock size={14} className="opacity-50" />}
                       </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-stone-100">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-stone-100 text-stone-400 mb-4">
              <Search size={32} />
            </div>
            <h3 className="text-xl font-serif font-bold text-stone-800 mb-2">No courses found</h3>
            <p className="text-stone-500 max-w-md mx-auto">
              {activeTab === 'saved' 
                ? "You haven't saved any courses yet. Browse available modules to find something you like!" 
                : "You haven't enrolled in any modules yet."}
            </p>
            <button 
              onClick={() => setActiveTab('available')}
              className="mt-6 px-6 py-2 bg-sage-500 text-white rounded-lg font-bold hover:bg-sage-600 transition-colors"
            >
              Browse Courses
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
