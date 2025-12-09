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
                <div className="text-stone-600 leading-relaxed font-light space-y-4 text-justify">
                  <p>
                    Prerna is a{" "}
                    <span className="bg-sage-100/80 px-1 py-0.5 rounded box-decoration-clone text-stone-800">
                      supervised Lead ABA Therapist
                    </span>{" "}
                    and{" "}
                    <span className="bg-sage-100/80 px-1 py-0.5 rounded box-decoration-clone text-stone-800">
                      Art-Therapy trained practitioner
                    </span>{" "}
                    with a rich background in psychology. Holding a{" "}
                    <span className="bg-sage-100/80 px-1 py-0.5 rounded box-decoration-clone text-stone-800">
                      Bachelor’s in Applied Psychology
                    </span>{" "}
                    and{" "}
                    <span className="bg-sage-100/80 px-1 py-0.5 rounded box-decoration-clone text-stone-800">
                      diplomas in Autism and Behavioural Science
                    </span>
                    , she has further specialized in{" "}
                    <span className="bg-sage-100/80 px-1 py-0.5 rounded box-decoration-clone text-stone-800">
                      CBT, Psychotherapy, and Hypnotherapy
                    </span>
                    . Her varied qualifications allow her to approach mental
                    health from multiple angles, ensuring comprehensive support
                    for her clients.
                  </p>
                  <p>
                    Her professional journey began in New Delhi, working in
                    rehabilitation centers with youth facing complex addiction
                    and mental health challenges. Today, based in Canada, she
                    focuses on{" "}
                    <span className="bg-sage-100/80 px-1 py-0.5 rounded box-decoration-clone text-stone-800">
                      supporting autistic children and their families
                    </span>
                    . Prerna’s approach is{" "}
                    <span className="bg-sage-100/80 px-1 py-0.5 rounded box-decoration-clone text-stone-800">
                      warm, holistic, and practical
                    </span>
                    —blending evidence-based behavioral strategies with creative
                    therapeutic tools to help parents build skills, manage
                    behaviors, and find confidence in their daily parenting
                    journey.
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
                <div className="text-stone-600 leading-relaxed font-light space-y-4 text-justify">
                  <p>
                    TruTalk Therapy was founded in 2021 with a simple but
                    powerful mission: to{" "}
                    <span className="bg-sage-100/80 px-1 py-0.5 rounded box-decoration-clone text-stone-800">
                      foster honest, accessible conversations about mental
                      health
                    </span>
                    . Initially focused on raising awareness and providing
                    emotional support, the platform has evolved alongside
                    Prerna’s own professional growth. It has transformed from a
                    general mental health space into a{" "}
                    <span className="bg-sage-100/80 px-1 py-0.5 rounded box-decoration-clone text-stone-800">
                      specialized, caregiver-focused learning hub
                    </span>
                    .
                  </p>
                  <p>
                    We recognized that parents often feel overwhelmed by
                    behavioral challenges and a lack of guidance outside
                    clinical settings. TruTalk Therapy bridges this gap by
                    providing{" "}
                    <span className="bg-sage-100/80 px-1 py-0.5 rounded box-decoration-clone text-stone-800">
                      evidence-informed ABA strategies
                    </span>
                    ,{" "}
                    <span className="bg-sage-100/80 px-1 py-0.5 rounded box-decoration-clone text-stone-800">
                      emotional regulation techniques
                    </span>
                    , and structured programs. Our goal is to demystify
                    behavioral science and offer{" "}
                    <span className="bg-sage-100/80 px-1 py-0.5 rounded box-decoration-clone text-stone-800">
                      practical, actionable support
                    </span>
                    —making daily family life{" "}
                    <span className="bg-sage-100/80 px-1 py-0.5 rounded box-decoration-clone text-stone-800">
                      calmer, more predictable, and deeply supportive
                    </span>{" "}
                    for both children and their caregivers.
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
