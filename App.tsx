import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  CheckCircle2, 
  Clock, 
  ChevronDown, 
  Menu, 
  X, 
  Download, 
  Star, 
  ArrowRight,
  PenTool,
  Zap,
  Layout,
  Heart,
  Wallet
} from 'lucide-react';

// --- Configuration ---
const BRAND_NAME = "INSPIREX";
const PRODUCT_NAME = "All‑in‑One Digital Planner 2026";
const CTA_TEXT = "Get Instant Download";
const PRICE = "$24.99";
const CHECKOUT_URL = "YOUR_PAYMENT_LINK_HERE";

const NAV_LINKS = [
  { id: 'overview', label: 'Overview' },
  { id: 'how-it-works', label: 'How it Works' },
  { id: 'included', label: 'Included' },
  { id: 'templates', label: 'Templates' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'faq', label: 'FAQ' },
];

const TESTIMONIALS = [
  { name: "Sarah M.", role: "Grad Student", rating: 5, text: "Finally a pretty planner that actually syncs! The Apple Calendar integration is a total game changer for my lecture schedule." },
  { name: "Liam K.", role: "Freelance Designer", rating: 5, text: "The hyperlinks make it so fast to navigate. I've used dozens of digital planners, but this is the most intuitive by far." },
  { name: "Jessica P.", role: "Busy Mom", rating: 5, text: "Daily + weekly + finance templates replaced multiple notebooks. I have everything in one place on my iPad now." },
  { name: "David L.", role: "Software Engineer", rating: 5, text: "The aesthetic is beautiful but the functionality is where it shines. Google Reminders sync works perfectly." },
  { name: "Aria R.", role: "Yoga Instructor", rating: 5, text: "I love the wellness and habit trackers. It's so much more than just a calendar; it's a life organizer." },
  { name: "Marc T.", role: "Project Manager", rating: 5, text: "Professional enough for work but pretty enough for journaling. The sticker pack is actually useful, not just fluff." }
];

const FAQS = [
  { question: "Which apps are compatible?", answer: "The planner works with any PDF annotation app that supports hyperlinks. We recommend GoodNotes, Notability, or Noteshelf for the best experience on iPad and Android tablets." },
  { question: "Does it sync automatically?", answer: "The planner is a PDF, so it doesn't 'auto-sync' like a cloud app. However, it features built-in shortcuts and icons that link directly to your Google and Apple Calendars for easy event creation." },
  { question: "How do I add events to my calendar?", answer: "Every dated page contains calendar icons. Tap them to trigger your device to open a new event or reminder with the correct date pre-filled." },
  { question: "Is it dated?", answer: "Yes! All 365 days of 2026 are fully dated and hyperlinked. You get both Sunday and Monday start versions." },
  { question: "Can I use it on Android or Windows?", answer: "Absolutely. Any PDF annotation app (like Penly on Android or Xodo on Windows) will work perfectly." },
  { question: "Is this a physical product?", answer: "No, this is an instant digital download. You will receive the files immediately after purchase via email." }
];

// --- Sub-components ---

const AnnouncementBar = () => (
  <div className="bg-pastel-accent text-white py-2 text-center text-sm font-medium tracking-wide">
    ✨ LIMITED TIME OFFER: 50% OFF 2026 EDITION ✨
  </div>
);

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      NAV_LINKS.forEach(link => {
        const el = document.getElementById(link.id);
        if (el && scrollPosition >= el.offsetTop && scrollPosition < el.offsetTop + el.offsetHeight) {
          setActiveSection(link.id);
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/80 border-b border-purple-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-10 h-10 bg-pastel-accent rounded-xl flex items-center justify-center text-white font-serif font-bold italic shadow-lg shadow-purple-200 group-hover:rotate-6 transition-transform">I</div>
          <span className="text-2xl font-serif font-bold text-pastel-accent tracking-tight">{BRAND_NAME}</span>
        </div>

        <div className="hidden md:flex items-center space-x-10">
          {NAV_LINKS.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-sm font-semibold tracking-tight transition-all relative py-2 ${activeSection === link.id ? 'text-pastel-accent' : 'text-slate-500 hover:text-pastel-accent'}`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pastel-accent rounded-full" />
              )}
            </a>
          ))}
          <a
            href="#buy"
            className="px-6 py-3 bg-pastel-accent text-white rounded-full text-sm font-bold hover:shadow-xl hover:shadow-purple-200 transition-all active:scale-95"
          >
            Buy Now
          </a>
        </div>

        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-pastel-accent p-2">
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-purple-100 py-6 px-4 space-y-4 shadow-2xl">
          {NAV_LINKS.map(link => (
            <a key={link.id} href={`#${link.id}`} onClick={() => setIsMobileMenuOpen(false)} className="block py-3 text-xl font-medium text-slate-700">
              {link.label}
            </a>
          ))}
          <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-4 bg-pastel-accent text-white rounded-2xl font-bold text-lg">
            {CTA_TEXT}
          </a>
        </div>
      )}
    </nav>
  );
};

// --- Main Page Sections ---

const Hero = () => (
  <section id="overview" className="relative pt-20 pb-32 md:pt-32 md:pb-48 bg-[radial-gradient(circle_at_70%_30%,#F5F3FF_0%,transparent_50%)]">
    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
      <div className="space-y-10">
        <div className="inline-block px-4 py-1 bg-pastel-lavender text-pastel-accent rounded-full text-sm font-bold tracking-widest uppercase">
          Best Seller for 2026
        </div>
        <h1 className="text-6xl md:text-8xl font-serif text-slate-800 leading-[1.05] tracking-tight">
          Master your <span className="italic text-pastel-accent decoration-pastel-purple/50 underline underline-offset-8">intent</span>.
        </h1>
        <p className="text-xl md:text-2xl text-slate-500 max-w-lg leading-relaxed font-light">
          The all-in-one digital planner that bridges the gap between aesthetic journaling and smart productivity.
        </p>

        <div className="space-y-4">
          <a 
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-12 py-6 bg-slate-900 text-white rounded-[2rem] font-bold text-2xl shadow-2xl hover:bg-pastel-accent hover:-translate-y-2 transition-all duration-300 items-center gap-4 group"
          >
            {CTA_TEXT} <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </a>
          <div className="flex items-center gap-2 px-6 text-[#6B7280] text-[0.9rem] font-medium">
             <CheckCircle2 size={16} className="text-pastel-accent" /> Join 5,000+ Happy Planners • Instant Email Delivery
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-10 bg-pastel-accent/10 blur-[100px] rounded-full"></div>
        <figure className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] border-8 border-white">
          <img src="https://placehold.co/800x800/EEE/31343C?text=Premium+2026+Planner+Cover" alt="INSPIREX 2026 Hero" className="w-full h-auto" />
        </figure>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section className="py-32 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-20 space-y-4">
        <h2 className="text-5xl font-serif italic">Every tool you need to thrive.</h2>
        <p className="text-slate-500 text-lg">Meticulously designed layouts for a balanced digital life.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { icon: <PenTool size={32} />, title: "Precision Hyperlinks", desc: "Instantly jump between 400+ pages with our smart index tabs." },
          { icon: <Calendar size={32} />, title: "Calendar Sync", desc: "One tap opens your Google or Apple Calendar to create events." },
          { icon: <Layout size={32} />, title: "Sun & Mon Start", desc: "Both versions included in your download for personal preference." },
          { icon: <Wallet size={32} />, title: "Finance HQ", desc: "Comprehensive budget trackers, expense logs, and savings goals." },
          { icon: <Heart size={32} />, title: "Wellness Suite", desc: "Mood trackers, sleep logs, and gratitude sections on every page." },
          { icon: <Zap size={32} />, title: "Goal Frameworks", desc: "Proprietary yearly, quarterly, and monthly goal-setting templates." }
        ].map((f, i) => (
          <div key={i} className="group p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:border-pastel-accent hover:-translate-y-2 transition-all duration-300 cursor-default">
            <div className="w-16 h-16 bg-pastel-lavender rounded-2xl flex items-center justify-center text-pastel-accent mb-8 group-hover:scale-110 transition-transform">{f.icon}</div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">{f.title}</h3>
            <p className="text-slate-500 leading-relaxed text-lg">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ReviewsCarousel = () => {
  const tripleTestimonials = [...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="reviews" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <div className="flex justify-center gap-1 mb-6">
          {Array(5).fill(0).map((_, i) => <Star key={i} className="fill-yellow-400 text-yellow-400 w-8 h-8" />)}
        </div>
        <h2 className="text-5xl font-serif italic tracking-tight">Community Love</h2>
      </div>

      <div className="relative w-full mask-fade">
        <div className="flex w-fit animate-scroll hover:[animation-play-state:paused] py-12">
          {tripleTestimonials.map((t, i) => (
            <div key={i} className="w-[320px] md:w-[480px] shrink-0 px-6">
              <div className="p-10 bg-white rounded-[2.5rem] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] border border-purple-50 h-full flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-xl text-slate-800">{t.name}</h4>
                      <p className="text-xs text-pastel-accent uppercase font-bold tracking-widest">{t.role}</p>
                    </div>
                    <div className="flex gap-1">
                      {Array(t.rating).fill(0).map((_, j) => <Star key={j} className="fill-yellow-400 text-yellow-400 w-4 h-4" />)}
                    </div>
                  </div>
                  <p className="text-slate-600 italic text-xl leading-relaxed">"{t.text}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => (
  <section id="buy" className="py-32 bg-gradient-to-br from-pastel-lavender via-white to-pastel-pink/30">
    <div className="max-w-4xl mx-auto px-4">
      <div className="bg-white rounded-[4rem] p-16 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.15)] border-8 border-white relative text-center">
        <div className="absolute top-10 right-10 bg-pastel-accent text-white px-6 py-2 rounded-full font-bold animate-pulse text-sm">SAVE 50% NOW</div>
        
        <div className="space-y-4 mb-12">
          <p className="uppercase tracking-[0.4em] text-pastel-accent font-bold text-xs">Lifetime Access • 2026 Edition</p>
          <h2 className="text-5xl md:text-6xl font-serif">{BRAND_NAME} All‑in‑One</h2>
          <div className="flex items-center justify-center gap-6 pt-4">
            <span className="text-3xl text-slate-300 line-through font-light">$49.99</span>
            <span className="text-8xl font-serif text-slate-900 leading-none">{PRICE}</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-y-5 gap-x-12 text-left max-w-2xl mx-auto mb-16">
          {["Fully dated 365+ Page PDF", "Sunday & Monday Starts", "500+ Aesthetic Stickers", "12 Premium Cover Designs", "Direct Calendar Integration", "Step-by-step Video Guide"].map((item, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <CheckCircle2 size={24} className="text-pastel-accent group-hover:scale-110 transition-transform" />
              <span className="text-slate-600 font-medium text-lg">{item}</span>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <a 
            href={CHECKOUT_URL} 
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-8 bg-[#8A2BE2] text-white rounded-[3rem] text-3xl font-bold shadow-2xl hover:bg-[#D946EF] hover:-translate-y-2 active:scale-[0.98] transition-all flex items-center justify-center gap-4 group"
          >
            <Download size={32} className="group-hover:rotate-12 transition-transform" /> {CTA_TEXT}
          </a>
          <div className="flex items-center justify-center gap-2 text-[#6B7280] text-[0.9rem] mt-[10px] font-medium tracking-tight">
             <CheckCircle2 size={18} className="text-pastel-accent" /> Join 5,000+ Happy Planners • Instant Email Delivery • Works with GoodNotes & Notability
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-24 bg-slate-900 text-slate-400">
    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-16 border-b border-slate-800 pb-24">
      <div className="space-y-8">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-pastel-accent rounded-xl flex items-center justify-center text-white font-serif font-bold italic">I</div>
          <span className="text-2xl font-serif font-bold text-white tracking-tight">{BRAND_NAME}</span>
        </div>
        <p className="text-lg leading-relaxed font-light">
          Empowering your digital focus through meticulous design and intelligent functionality.
        </p>
      </div>

      <div className="space-y-8">
        <h4 className="text-white font-bold uppercase tracking-widest text-sm">Navigation</h4>
        <ul className="space-y-4 text-lg">
          {NAV_LINKS.map(l => (
            <li key={l.id}><a href={`#${l.id}`} className="hover:text-pastel-accent transition-colors">{l.label}</a></li>
          ))}
        </ul>
      </div>

      <div className="space-y-8">
        <h4 className="text-white font-bold uppercase tracking-widest text-sm">Company</h4>
        <ul className="space-y-4 text-lg">
          <li><a href="#" className="hover:text-pastel-accent transition-colors">Affiliates</a></li>
          <li><a href="#" className="hover:text-pastel-accent transition-colors">Contact Support</a></li>
          <li><a href="#" className="hover:text-pastel-accent transition-colors">Terms of Service</a></li>
        </ul>
      </div>

      <div className="space-y-8">
        <h4 className="text-white font-bold uppercase tracking-widest text-sm">Newsletter</h4>
        <p className="text-slate-500">Get free sticker packs and planning tips delivered to your inbox.</p>
        <div className="flex gap-2">
          <input type="email" placeholder="Email address" className="bg-slate-800 border-none rounded-xl px-4 py-3 w-full focus:ring-2 focus:ring-pastel-accent" />
          <button className="bg-pastel-accent text-white p-3 rounded-xl hover:scale-105 transition-transform"><ArrowRight /></button>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-600">
      <p>&copy; 2025 {BRAND_NAME} Digital Products. All Rights Reserved.</p>
      <p>Not affiliated with Apple Inc. or Google LLC.</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <Features />
      <ReviewsCarousel />
      <Pricing />
      
      <section className="py-24 text-center bg-pastel-lavender/10 border-t border-purple-50">
        <h3 className="text-4xl font-serif text-slate-800 mb-8 italic">Ready to make 2026 your most intentional year?</h3>
        <a href="#buy" className="text-pastel-accent font-bold text-xl border-b-2 border-pastel-accent pb-2 hover:text-purple-700 transition-colors">
          Download your complete planner suite today
        </a>
      </section>

      <Footer />
    </div>
  );
}