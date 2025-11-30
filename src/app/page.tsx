import { NewsletterForm } from "@/components/newsLetterForm";
import { Facebook, Mail, Twitter, MapPin, Instagram } from "lucide-react";

export default function Home() {
  return (
        <div className="min-h-screen flex flex-col bg-stone-50 selection:bg-sage-200 selection:text-sage-900 overflow-x-hidden">
      
      {/* Navigation / Header */}
      <header className="w-full py-8 px-6 md:px-12 flex justify-between items-center z-10 animate-fade-in">
        <div className="text-xl md:text-2xl font-serif font-extrabold text-stone-800 tracking-tight">
          <span className="text-sage-500">TruTalk</span> Therapy
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-stone-500 uppercase tracking-widest">
          <span className="hover:text-sage-600 cursor-pointer transition-colors">Philosophy</span>
          <span className="hover:text-sage-600 cursor-pointer transition-colors">Therapists</span>
          <span className="hover:text-sage-600 cursor-pointer transition-colors">Contact</span>
        </nav>
        <div className="md:hidden">
            {/* Mobile menu placeholder */}
             <div className="w-6 h-0.5 bg-stone-400 mb-1"></div>
             <div className="w-6 h-0.5 bg-stone-400"></div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 md:px-8 relative">
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-sage-100/50 rounded-full blur-[100px] opacity-60"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-stone-200/40 rounded-full blur-[120px] opacity-50"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center z-10 pt-10 md:pt-0">
          <div className="inline-block mb-4 px-3 py-1 border border-sage-200 rounded-full bg-white/50 backdrop-blur-sm">
            <span className="text-xs font-bold tracking-[0.2em] text-sage-600 uppercase">
              Coming Soon
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-stone-800 mb-8 leading-[1.1] animate-fade-in-up">
            Authentic healing <br/> starts with <span className="text-sage-500 italic">TruTalk.</span>
          </h1>

          <p className="text-lg md:text-xl text-stone-500 max-w-2xl mx-auto mb-12 font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            A modern sanctuary for mental wellness. We combine evidence-based practices with a compassionate, human-first approach to help you find clarity and balance.
          </p>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <NewsletterForm />
          </div>

          {/* <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
             <MindfulnessGenerator />
          </div> */}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 px-6 md:px-12 border-t border-stone-200 mt-20 bg-white/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-col items-center md:items-start gap-2">
            <h4 className="font-serif font-bold text-lg text-stone-800"><span className="text-sage-600">TruTalk</span> Therapy</h4>
            <div className="flex items-center gap-2 text-stone-500 text-sm">
              <MapPin size={16} />
              <span>Toronto Canada</span>
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
