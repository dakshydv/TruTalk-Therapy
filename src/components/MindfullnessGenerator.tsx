import React, { useState } from 'react';
import { Sparkles, Loader2, Quote } from 'lucide-react';
import { generateMindfulnessTip } from '@/services/geminService';

export const MindfulnessGenerator: React.FC = () => {
  const [tip, setTip] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const newTip = await generateMindfulnessTip();
    setTip(newTip);
    setLoading(false);
  };

  return (
    <div className="mt-12 p-8 max-w-lg mx-auto bg-white/60 backdrop-blur-md rounded-2xl shadow-sm border border-stone-100 text-center animate-fade-in-up">
      <div className="flex justify-center mb-4 text-sage-500">
        <Sparkles size={24} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-serif text-stone-700 mb-2 font-medium">
        A Moment of Calm
      </h3>
      <p className="text-stone-500 text-sm mb-6 font-light">
        While you wait for our doors to open, use our AI wellness companion to find a center for your day.
      </p>

      <div className="min-h-[100px] flex items-center justify-center mb-6">
        {loading ? (
          <div className="flex flex-col items-center gap-2 text-sage-400">
            <Loader2 className="animate-spin" size={20} />
            <span className="text-xs tracking-wider uppercase">Breathing in...</span>
          </div>
        ) : tip ? (
          <div className="relative p-2 animate-fade-in">
             <Quote className="absolute -top-2 -left-2 text-sage-200 w-6 h-6 transform -scale-x-100" />
            <p className="text-lg text-stone-800 font-serif italic leading-relaxed px-4">
              "{tip}"
            </p>
             <Quote className="absolute -bottom-2 -right-2 text-sage-200 w-6 h-6" />
          </div>
        ) : (
          <div className="text-stone-400 text-sm italic">
            Click below to receive a thought.
          </div>
        )}
      </div>

      <button
        onClick={handleGenerate}
        disabled={loading}
        className="px-6 py-2.5 bg-sage-500 hover:bg-sage-600 active:bg-sage-700 text-white text-sm tracking-wide uppercase transition-all duration-300 rounded-full shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed font-sans"
      >
        {tip ? "Receive Another" : "Receive Thought"}
      </button>
    </div>
  );
};