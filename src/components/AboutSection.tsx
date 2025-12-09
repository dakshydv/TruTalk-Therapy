"use client";
import React, { useState } from "react";
import { User, BookHeart } from "lucide-react";

export function AboutSection() {
  const [activeTab, setActiveTab] = useState<"about" | "brand">("about");

  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-sage-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
        <div className="w-full md:w-1/2 sticky top-24">
          <div className="aspect-3/4 bg-stone-200 rounded-2xl overflow-hidden shadow-xl relative">
            {/* Placeholder for Therapist Image */}
            <div className="absolute inset-0 flex items-center justify-center bg-stone-100 text-stone-400">
              <img
                src="/profile-colored.jpg"
                alt="Prerna - Lead ABA Therapist"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-sage-200 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-sage-100 rounded-full -z-10"></div>
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-8">
          <div className="flex space-x-4 border-b border-stone-200 pb-1">
            <button
              onClick={() => setActiveTab("about")}
              className={`pb-3 text-sm font-bold tracking-widest uppercase transition-colors relative ${
                activeTab === "about"
                  ? "text-sage-600 border-b-2 border-sage-500"
                  : "text-stone-400 hover:text-stone-600"
              }`}
            >
              About Me
            </button>
            <button
              onClick={() => setActiveTab("brand")}
              className={`pb-3 text-sm font-bold tracking-widest uppercase transition-colors relative ${
                activeTab === "brand"
                  ? "text-sage-600 border-b-2 border-sage-500"
                  : "text-stone-400 hover:text-stone-600"
              }`}
            >
              Brand Story
            </button>
          </div>

          <div className="min-h-[400px] transition-opacity duration-300">
            {activeTab === "about" ? (
              <div className="space-y-6 animate-fade-in">
                <div className="inline-block px-3 py-1 border border-sage-200 rounded-full bg-white/50 backdrop-blur-sm">
                  <span className="text-xs font-bold tracking-[0.2em] text-sage-600 uppercase flex items-center gap-2">
                    <User size={14} />
                    The Therapist
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif text-stone-800 leading-tight">
                  Guiding families with{" "}
                  <span className="text-sage-500 italic">compassion</span> and
                  expertise.
                </h2>
                <div className="text-stone-600 leading-relaxed font-light space-y-4">
                  <p>
                    Hi, I&#39;m{" "}
                    <span className="bg-sage-100/80 px-1 py-0.5 rounded box-decoration-clone text-stone-800">
                      Prerna
                    </span>
                    —a{" "}
                    <span className="bg-sage-100/80 px-1 py-0.5 rounded box-decoration-clone text-stone-800">
                      psychology graduate, ABA therapist, and art-therapy
                      trained practitioner
                    </span>{" "}
                    with more than five years of experience working across
                    diverse mental health and behavioural settings.
                  </p>
                  <p>
                    My professional journey began in New Delhi, where I worked
                    in a drug de-addiction and rehabilitation centre supporting
                    children, adolescents, and young adults facing substance use
                    and mental health challenges. During this time, I
                    facilitated group and individual counselling sessions,
                    conducted psychological assessments, and participated in
                    therapeutic interventions. I gained deep exposure to
                    different disorders, their symptoms, behavioural patterns,
                    and evidence-based treatment approaches.
                  </p>
                  <p>
                    Alongside my formal education—a{" "}
                    <span className="bg-sage-100/80 px-1 py-0.5 rounded box-decoration-clone text-stone-800">
                      Bachelor&#39;s in Applied Psychology (Honours)
                    </span>
                    , a{" "}
                    <span className="bg-sage-100/80 px-1 py-0.5 rounded box-decoration-clone text-stone-800">
                      diploma in Autism and Behavioural Science
                    </span>
                    , and an{" "}
                    <span className="bg-sage-100/80 px-1 py-0.5 rounded box-decoration-clone text-stone-800">
                      Art Therapy diploma
                    </span>
                    —I also completed professional training in{" "}
                    <span className="bg-sage-100/80 px-1 py-0.5 rounded box-decoration-clone text-stone-800">
                      Cognitive Behavioural Therapy (CBT), Psychotherapy, and
                      Hypnotherapy
                    </span>
                    . These additional skills strengthened my therapeutic
                    foundation and helped me understand the complexities of
                    human behaviour from multiple perspectives.
                  </p>
                  <p>
                    Today, I am a{" "}
                    <span className="bg-sage-100/80 px-1 py-0.5 rounded box-decoration-clone text-stone-800">
                      supervised Lead ABA Therapist in Canada
                    </span>{" "}
                    with extensive experience supporting autistic children and
                    their families through structured skill-building, behaviour
                    strategies, emotional regulation support, and parent
                    training. My approach remains{" "}
                    <span className="bg-sage-100/80 px-1 py-0.5 rounded box-decoration-clone text-stone-800">
                      warm, holistic, and practical
                    </span>
                    —combining behavioural principles, psychological insight,
                    and creative therapeutic tools to help families feel
                    confident and supported.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-6 animate-fade-in">
                <div className="inline-block px-3 py-1 border border-sage-200 rounded-full bg-white/50 backdrop-blur-sm">
                  <span className="text-xs font-bold tracking-[0.2em] text-sage-600 uppercase flex items-center gap-2">
                    <BookHeart size={14} />
                    Our Story
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif text-stone-800 leading-tight">
                  Honest, accessible conversations around{" "}
                  <span className="text-sage-500 italic">mental health.</span>
                </h2>
                <div className="text-stone-600 leading-relaxed font-light space-y-4">
                  <p>
                    <span className="bg-sage-100/80 px-1 py-0.5 rounded box-decoration-clone text-stone-800">
                      TruTalk Therapy began in 2021
                    </span>{" "}
                    with a simple intention: to create{" "}
                    <span className="bg-sage-100/80 px-1 py-0.5 rounded box-decoration-clone text-stone-800">
                      honest, accessible conversations around mental health
                    </span>
                    . At that time, my focus was on raising awareness, providing
                    emotional support, and helping people understand
                    psychological well-being through relatable content and
                    practical guidance.
                  </p>
                  <p>
                    As I continued growing professionally—from psychology
                    training to ABA therapy, art-based emotional support,
                    counselling experience, and parent coaching—Trutalktherapy
                    evolved with me. I realized that families needed a space
                    where behavioural science, emotional education, and
                    practical tools come together in a simple, empowering way.
                  </p>
                  <p>
                    In Canada, while working closely with autistic children and
                    their caregivers, I saw parents overwhelmed with behaviour
                    challenges, communication barriers, routines breaking down,
                    and a lack of guidance outside therapy hours. Many felt
                    alone, pressured, or unsure how to support their child at
                    home.
                  </p>
                  <p>That is when TruTalk Therapy found its new purpose.</p>
                  <p>
                    What started as a mental health awareness platform has now
                    grown into a full{" "}
                    <span className="bg-sage-100/80 px-1 py-0.5 rounded box-decoration-clone text-stone-800">
                      caregiver-focused learning hub
                    </span>
                    —a place where parents can{" "}
                    <span className="bg-sage-100/80 px-1 py-0.5 rounded box-decoration-clone text-stone-800">
                      understand behaviour, learn evidence-informed ABA
                      strategies, explore art-based emotional regulation
                    </span>
                    , and access structured programs that make daily life{" "}
                    <span className="bg-sage-100/80 px-1 py-0.5 rounded box-decoration-clone text-stone-800">
                      calmer and more predictable
                    </span>
                    .
                  </p>
                  <p className="font-medium text-sage-700 italic">
                    TruTalk Therapy stands for truth, education, and support—a
                    safe learning space that empowers caregivers through
                    compassion, clarity, and practical tools they can apply
                    every day.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
