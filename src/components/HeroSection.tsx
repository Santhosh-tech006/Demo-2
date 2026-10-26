import React from 'react';
import { ChessScene3D } from './ChessScene3D';
import { Sparkles, Trophy, ArrowRight, ShieldCheck, PlayCircle } from 'lucide-react';

interface HeroSectionProps {
  onStartLearningClick: () => void;
  onBookTrialClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartLearningClick,
  onBookTrialClick
}) => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden flex flex-col justify-center">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-blue-900/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Premium Typography & CTAs */}
          <div className="lg:col-span-5 text-left z-10">
            {/* Elite Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wide mb-6 shadow-lg shadow-black/40">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Premier International Chess Academy</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold font-cinzel tracking-tight text-white leading-[1.1] mb-6">
              Master the Game.{' '}
              <span className="block text-gold-gradient drop-shadow-sm">
                Shape Your Future.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-8 max-w-xl">
              Professional chess coaching for beginners, tournament players, and future champions.
              Elevate your tactical calculation, positional mastery, and tournament resilience with Grandmasters.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onBookTrialClick}
                className="px-7 py-3.5 rounded-xl font-bold text-sm tracking-wide bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-neutral-950 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition flex items-center justify-center gap-2 group"
              >
                Book a Free Trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onStartLearningClick}
                className="px-7 py-3.5 rounded-xl font-semibold text-sm tracking-wide bg-neutral-900/80 hover:bg-neutral-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-amber-400/50 backdrop-blur-md transition flex items-center justify-center gap-2"
              >
                <PlayCircle className="w-4 h-4 text-amber-400" />
                Start Learning
              </button>
            </div>

            {/* Trust Metrics Bar */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4">
              <div>
                <div className="text-2xl font-bold font-cinzel text-white">4,850+</div>
                <div className="text-xs text-slate-400">Students Trained</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-cinzel text-amber-400">+380</div>
                <div className="text-xs text-slate-400">Avg. ELO Gain</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-cinzel text-white">99.4%</div>
                <div className="text-xs text-slate-400">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Chessboard */}
          <div className="lg:col-span-7 relative">
            {/* Subtle decorative glow circle behind board */}
            <div className="absolute inset-0 bg-radial from-amber-500/10 via-transparent to-transparent blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <ChessScene3D theme="gold" interactive={true} />
            </div>

            {/* Interactive hint */}
            <div className="mt-3 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span>Interactive 3D Board: Drag to rotate view • Click any piece to inspect</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
