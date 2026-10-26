import React from 'react';
import { testimonialsData, Testimonial } from '../data/testimonials';
import { Star, Quote, TrendingUp, Sparkles, AlertCircle } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background accent */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-cinzel text-white mb-5 tracking-tight">
            Voices From <span className="text-gold-gradient">The Arena</span>
          </h2>
          <p className="text-slate-300 text-base font-light leading-relaxed">
            Discover how our structured mentorship helps young prodigies and adult improvers shatter their rating ceilings.
          </p>

          {/* Explicit Placeholder Notice Banner */}
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-700/80 text-[11px] text-amber-300/80 font-mono">
            <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Sample testimonials provided as editable placeholder content for website preview.</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {testimonialsData.map((item: Testimonial) => (
            <div
              key={item.id}
              className="glass-panel-interactive rounded-2xl p-7 sm:p-8 border border-slate-800 flex flex-col justify-between relative group"
            >
              <div>
                {/* Top Quote & Rating Stars */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Rating Gain Pill */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
                    <TrendingUp className="w-3 h-3" />
                    <span>
                      {item.ratingBefore} → {item.ratingAfter} ({item.ratingSystem})
                    </span>
                  </div>
                </div>

                {/* Quote Content */}
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-amber-500/20 absolute -top-2 -left-2 -z-0" />
                  <p className="text-slate-200 text-sm leading-relaxed relative z-10 font-light italic">
                    "{item.quote}"
                  </p>
                </div>
              </div>

              {/* Author Row */}
              <div className="pt-5 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-amber-500/40 shrink-0">
                    <img
                      src={item.avatar}
                      alt={item.studentName}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold font-cinzel text-white">
                      {item.studentName}
                    </h4>
                    <p className="text-xs text-amber-400/90 font-medium">
                      {item.role}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Coached by {item.coachAssigned}
                    </p>
                  </div>
                </div>

                <div className="text-right hidden sm:block">
                  <span className="text-[10px] text-slate-400 font-mono block">
                    {item.timeframe}
                  </span>
                  <span className="text-[9px] text-amber-400/80 uppercase font-mono tracking-wider">
                    • Placeholder Demo •
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
