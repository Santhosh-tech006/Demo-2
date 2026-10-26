import React, { useState } from 'react';
import { Crown, Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim() && newsletterEmail.includes('@')) {
      setSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 2000);
    }
  };

  return (
    <footer className="relative bg-neutral-950 border-t border-amber-500/20 pt-16 pb-12 overflow-hidden text-slate-400 text-xs">
      {/* Decorative top gold gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-700 p-0.5 flex items-center justify-center shadow-lg shadow-amber-500/20">
                <div className="w-full h-full bg-neutral-950 rounded-[10px] flex items-center justify-center">
                  <Crown className="w-5 h-5 text-amber-400" />
                </div>
              </div>
              <div>
                <span className="font-cinzel text-lg font-bold tracking-wider text-white">
                  CHECKMATE <span className="text-amber-400">CITY</span>
                </span>
                <span className="block text-[9px] tracking-[0.2em] uppercase text-amber-200/70 font-semibold">
                  CHESS ACADEMY
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed mb-6 font-light max-w-sm">
              Empowering the next generation of grandmasters and passionate strategic thinkers through interactive 3D tactical analysis, bespoke repertoires, and classical tournament discipline.
            </p>

            {/* Social Media Links (Placeholders) */}
            <div className="flex items-center gap-2.5">
              {[
                { name: 'YouTube', icon: '▶' },
                { name: 'Twitch', icon: '♟' },
                { name: 'Discord', icon: '💬' },
                { name: 'X / Twitter', icon: '𝕏' },
                { name: 'Instagram', icon: '📷' }
              ].map((social) => (
                <a
                  key={social.name}
                  href={`#${social.name.toLowerCase()}`}
                  className="w-8 h-8 rounded-lg bg-neutral-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition"
                  title={social.name}
                >
                  <span className="text-xs font-mono">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 text-left">
            <h4 className="text-sm font-bold font-cinzel text-white uppercase tracking-wider mb-4">
              Curriculum
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#courses" className="hover:text-amber-400 transition">Chess Fundamentals</a></li>
              <li><a href="#courses" className="hover:text-amber-400 transition">Opening Repertoire</a></li>
              <li><a href="#courses" className="hover:text-amber-400 transition">Middlegame Strategy</a></li>
              <li><a href="#courses" className="hover:text-amber-400 transition">Endgame Precision</a></li>
              <li><a href="#courses" className="hover:text-amber-400 transition">Tournament Prep</a></li>
              <li><a href="#courses" className="hover:text-amber-400 transition">Grandmaster Track</a></li>
            </ul>
          </div>

          {/* Col 3: Academy & Community (2 cols) */}
          <div className="lg:col-span-2 text-left">
            <h4 className="text-sm font-bold font-cinzel text-white uppercase tracking-wider mb-4">
              Academy
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#about" className="hover:text-amber-400 transition">About Academy</a></li>
              <li><a href="#coaches" className="hover:text-amber-400 transition">Faculty of Coaches</a></li>
              <li><a href="#journey" className="hover:text-amber-400 transition">Student Journey</a></li>
              <li><a href="#achievements" className="hover:text-amber-400 transition">Medals & Honors</a></li>
              <li><a href="#testimonials" className="hover:text-amber-400 transition">Success Stories</a></li>
              <li><a href="#booking" className="hover:text-amber-400 transition">Free Evaluation</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Contact (4 cols) */}
          <div className="lg:col-span-4 text-left">
            <h4 className="text-sm font-bold font-cinzel text-white uppercase tracking-wider mb-4">
              Grandmaster Gazette
            </h4>
            <p className="text-slate-400 mb-4 leading-relaxed font-light">
              Receive weekly tactical puzzle diagnostics, master game analyses, and tournament updates directly to your inbox.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-2 mb-5">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter email for weekly puzzles..."
                  className="flex-1 px-3.5 py-2 rounded-xl bg-neutral-900 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-amber-400 text-xs"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold flex items-center justify-center transition"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <div className="text-emerald-400 text-[11px] flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Subscribed to the Grandmaster Gazette!
                </div>
              )}
            </form>

            <div className="space-y-1.5 text-[11px] text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>64 Grandmaster Way, Suite 400, New York, NY (Demo)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>+1 (800) 555-CHESS • Mon - Sat 9am - 8pm EST</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright and Legal disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © 2026 Checkmate City Academy. All rights reserved. Master the Game. Shape Your Future.
          </div>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-400 transition">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-400 transition">Terms of Enrollment</a>
            <a href="#safeguarding" className="hover:text-slate-400 transition">Youth Safety Charter</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
