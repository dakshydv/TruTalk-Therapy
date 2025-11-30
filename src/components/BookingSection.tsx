import React from 'react';
import { Calendar, Send } from 'lucide-react';

export function BookingSection() {
  return (
    <section id="contact" className="py-20 px-6 md:px-12 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-sage-50/50 z-0 rounded-l-[100px]"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2">
            <div className="inline-block mb-4 px-3 py-1 border border-sage-200 rounded-full bg-white">
              <span className="text-xs font-bold tracking-[0.2em] text-sage-600 uppercase">
                Get in Touch
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6 leading-tight">
              Ready to start your <br/> <span className="text-sage-500 italic">journey?</span>
            </h2>
            <p className="text-lg text-stone-500 font-light mb-8 leading-relaxed">
              We understand that taking the first step can be the hardest. We're here to answer your questions and help you find the right support for your family.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center text-sage-600 shrink-0">
                  <Calendar size={20} />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-stone-800 text-lg">Book a Free Consultation</h4>
                  <p className="text-stone-500 font-light text-sm">
                    Schedule a 15-minute introductory call to discuss your needs and see if we're a good fit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-stone-100">
              <h3 className="text-2xl font-serif font-bold text-stone-800 mb-6">Request an Appointment</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-xs font-bold text-stone-500 uppercase tracking-wider">Name</label>
                    <input type="text" id="name" className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent transition-all" placeholder="Your Name" />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-xs font-bold text-stone-500 uppercase tracking-wider">Email</label>
                    <input type="email" id="email" className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent transition-all" placeholder="your@email.com" />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="service" className="text-xs font-bold text-stone-500 uppercase tracking-wider">Service of Interest</label>
                  <select id="service" className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent transition-all text-stone-600">
                    <option value="">Select a service...</option>
                    <option value="counseling">Child Counseling</option>
                    <option value="coaching">Parent Coaching</option>
                    <option value="assessment">Autism Assessment</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="space-y-1">
                  <label htmlFor="message" className="text-xs font-bold text-stone-500 uppercase tracking-wider">Message</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent transition-all resize-none" placeholder="How can we help you?"></textarea>
                </div>
                
                <button type="button" className="w-full py-4 bg-sage-600 text-white rounded-lg font-bold text-lg hover:bg-sage-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-sage-200 flex items-center justify-center gap-2">
                  Send Request
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
