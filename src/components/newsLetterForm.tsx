"use client"
import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="flex items-center justify-center gap-2 text-sage-600 bg-sage-50 py-3 px-6 rounded-full animate-fade-in">
        <CheckCircle size={18} />
        <span className="text-sm font-medium">Thank you. We'll be in touch soon.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto relative group">
      <div className="relative flex items-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email for updates"
          className="w-full px-6 py-4 bg-white border border-stone-200 text-stone-700 placeholder:text-stone-300 rounded-full focus:outline-none focus:ring-1 focus:ring-sage-300 focus:border-sage-300 transition-all duration-300 pr-14 shadow-sm"
          disabled={status === 'loading'}
          required
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="absolute right-2 p-2 bg-sage-600 text-white rounded-full hover:bg-sage-700 transition-colors disabled:opacity-70"
          aria-label="Subscribe"
        >
          {status === 'loading' ? (
             <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <ArrowRight size={20} strokeWidth={1.5} />
          )}
        </button>
      </div>
      <p className="text-xs text-stone-400 mt-3 text-center">
        Notify me when appointments become available. No spam, ever.
      </p>
    </form>
  );
};