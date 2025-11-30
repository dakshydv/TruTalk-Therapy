import { NewsletterForm } from "@/components/newsLetterForm";
import { Facebook, Mail, Twitter, MapPin, Instagram, ArrowDown } from "lucide-react";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { CoursesSection } from "@/components/CoursesSection";
import { BookingSection } from "@/components/BookingSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50 selection:bg-sage-200 selection:text-sage-900 overflow-x-hidden">
      
      {/* Navigation / Header */}
      <header className="w-full py-8 px-6 md:px-12 flex justify-between items-center z-50 absolute top-0 left-0 bg-transparent">
        <div className="text-xl md:text-2xl font-serif font-extrabold text-stone-800 tracking-tight">
          <span className="text-sage-500">TruTalk</span> Therapy
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-stone-500 uppercase tracking-widest">
          <a href="#about" className="hover:text-sage-600 cursor-pointer transition-colors">About</a>
          <a href="#services" className="hover:text-sage-600 cursor-pointer transition-colors">Services</a>
          <a href="#courses" className="hover:text-sage-600 cursor-pointer transition-colors">Courses</a>
          <a href="#contact" className="hover:text-sage-600 cursor-pointer transition-colors">Contact</a>
        </nav>
        <div className="md:hidden">
            {/* Mobile menu placeholder */}
             <div className="w-6 h-0.5 bg-stone-400 mb-1"></div>
             <div className="w-6 h-0.5 bg-stone-400"></div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col relative">
        
        <section className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 relative pt-20 overflow-hidden bg-gradient-to-br from-sage-100 via-sage-50 to-stone-100">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-0 pointer-events-none">
              {/* Subtle Grid Pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
              
              <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-sage-100/50 rounded-full blur-[100px] opacity-60 animate-pulse" style={{ animationDuration: '8s' }}></div>
              <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-stone-200/40 rounded-full blur-[120px] opacity-50 animate-pulse" style={{ animationDuration: '10s' }}></div>
              <div className="absolute top-[40%] left-[-5%] w-[30%] h-[30%] bg-sage-50/60 rounded-full blur-[80px] opacity-40 animate-pulse" style={{ animationDuration: '12s' }}></div>
              
              {/* Floating Icons */}
              <div className="absolute top-[20%] left-[10%] text-sage-300 opacity-60 animate-bounce hidden md:block" style={{ animationDuration: '6s' }}>
                 <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.74 5.88a.996.996 0 0 1 .29.71c0 .55-.45.99-1 .99H15v3.18c0 .89.74 1.63 1.63 1.63h2.55c.55 0 .99.45.99 1 0 .27-.11.52-.29.71l-5.88 5.74a.996.996 0 0 1-.71.29c-.55 0-.99-.45-1-.99v-3.18c0-.89-.74-1.63-1.63-1.63h-2.55a.996.996 0 0 1-.71-.29l-5.74-5.88a.996.996 0 0 1-.29-.71c0-.55.45-.99 1-.99h2.04v-3.18c0-.89.74-1.63 1.63-1.63h2.55c.55 0 .99-.45.99-1 0-.27-.11-.52-.29-.71L12.71 2.98c-.19-.18-.44-.29-.71-.29zm0 0"/></svg>
              </div>
              <div className="absolute top-[15%] right-[15%] text-sage-200 opacity-50 animate-bounce hidden md:block" style={{ animationDuration: '7s', animationDelay: '1s' }}>
                 <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute top-[30%] left-[5%] lg:left-[15%] bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 animate-float hidden lg:block" style={{ animationDuration: '5s' }}>
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-sage-100 rounded-full flex items-center justify-center text-sage-500">
                       <span className="text-xl">🌱</span>
                    </div>
                    <div>
                       <p className="text-xs font-bold text-stone-500 uppercase tracking-wider">Daily Affirmation</p>
                       <p className="text-sm font-serif text-stone-800 italic">"I am growing every day."</p>
                    </div>
                 </div>
              </div>

              <div className="absolute bottom-[25%] right-[5%] lg:right-[15%] bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 animate-float hidden lg:block" style={{ animationDuration: '7s', animationDelay: '2s' }}>
                 <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                       <div className="w-8 h-8 rounded-full bg-stone-200 border-2 border-white"></div>
                       <div className="w-8 h-8 rounded-full bg-sage-200 border-2 border-white"></div>
                       <div className="w-8 h-8 rounded-full bg-stone-300 border-2 border-white flex items-center justify-center text-[10px] text-stone-600 font-bold">+2k</div>
                    </div>
                    <div>
                       <p className="text-sm font-bold text-stone-800">Happy Families</p>
                       <div className="flex text-yellow-400 text-xs">★★★★★</div>
                    </div>
                 </div>
              </div>

            </div>

            <div className="max-w-4xl mx-auto text-center z-10">
            <div className="inline-block mb-6 px-4 py-1.5 border border-sage-200 rounded-full bg-white/60 backdrop-blur-md shadow-sm animate-fade-in-up hover:scale-105 transition-transform duration-300 cursor-default">
                <span className="text-xs font-bold tracking-[0.2em] text-sage-600 uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sage-400 animate-pulse"></span>
                Child Psychology & Parent Support
                </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-stone-800 mb-8 leading-[1.1] animate-fade-in-up relative" style={{ animationDelay: '0.1s' }}>
                Authentic healing <br/> starts with <span className="text-sage-500 italic relative inline-block">
                  TruTalk.
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-sage-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </svg>
                </span>
            </h1>

            <p className="text-lg md:text-xl text-stone-500 max-w-2xl mx-auto mb-12 font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                A modern sanctuary for mental wellness. We combine evidence-based practices with a compassionate, human-first approach to help your child find clarity and balance.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <a href="#contact" className="px-8 py-4 bg-sage-600 text-white rounded-full font-bold hover:bg-sage-700 transition-all shadow-lg shadow-sage-200 hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2 group">
                Book a Consultation
                <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
                </a>
                <a href="#courses" className="px-8 py-4 bg-white text-sage-600 border border-sage-200 rounded-full font-bold hover:bg-sage-50 transition-all hover:border-sage-300 hover:shadow-md">
                View Parent Courses
                </a>
            </div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-sage-400 cursor-pointer hover:text-sage-600 transition-colors">
                <a href="#about">
                  <ArrowDown size={32} />
                </a>
            </div>
        </section>

        <AboutSection />
        <ServicesSection />
        <CoursesSection />
        <BookingSection />
        
        <section className="py-20 px-6 md:px-12 bg-sage-50 text-center">
             <div className="max-w-2xl mx-auto">
                <h3 className="text-3xl font-serif font-bold text-stone-800 mb-6">Stay Connected</h3>
                <p className="text-stone-500 mb-8 font-light">Join our newsletter for weekly tips on child development and parenting strategies.</p>
                <NewsletterForm />
             </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full py-12 px-6 md:px-12 border-t border-stone-200 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-col items-center md:items-start gap-2">
            <h4 className="font-serif font-bold text-lg text-stone-800"><span className="text-sage-600">TruTalk</span> Therapy</h4>
            <div className="flex items-center gap-2 text-stone-500 text-sm">
              <MapPin size={16} />
              <span>Toronto, Canada</span>
            </div>
            <div className="flex items-center gap-2 text-stone-500 text-sm">
              <Mail size={16} />
              <span>hello@trutalktherapy.com</span>
            </div>
          </div>

          <div className="flex gap-6">
            <a href="https://www.instagram.com/trutalktherapy?igsh=MWI1NTF4bnZtcGQwaQ==" target="_blank" className="text-stone-400 hover:text-sage-600 transition-colors transform hover:-translate-y-1 duration-300">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-stone-400 hover:text-sage-600 transition-colors transform hover:-translate-y-1 duration-300">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-stone-400 hover:text-sage-600 transition-colors transform hover:-translate-y-1 duration-300">
              <Twitter size={20} />
            </a>
          </div>

          <div className="text-stone-400 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} TruTalk Therapy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

