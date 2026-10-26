import React, { useState, useEffect } from 'react';
import { Trophy, Award, Users, TrendingUp, Sparkles, Medal } from 'lucide-react';

export const AchievementSection: React.FC = () => {
  // Demo statistics (customizable)
  const stats = [
    {
      id: 'students',
      label: 'Students Trained',
      targetNumber: 4850,
      suffix: '+',
      description: 'Active learners across 34 countries',
      icon: Users,
      color: 'text-amber-400',
      isDemo: true
    },
    {
      id: 'tournaments',
      label: 'Tournament Achievements',
      targetNumber: 124,
      suffix: ' Medals',
      description: 'National, State, and Youth FIDE podiums',
      icon: Trophy,
      color: 'text-yellow-400',
      isDemo: true
    },
    {
      id: 'sessions',
      label: 'Coaching Sessions',
      targetNumber: 35200,
      suffix: '+ Hrs',
      description: 'Live masterclasses & 1-on-1 analysis',
      icon: Award,
      color: 'text-amber-300',
      isDemo: true
    },
    {
      id: 'rating',
      label: 'Avg. Rating Improvement',
      targetNumber: 385,
      prefix: '+',
      suffix: ' ELO',
      description: 'Average verified gain over 6 months',
      icon: TrendingUp,
      color: 'text-emerald-400',
      isDemo: true
    }
  ];

  // Animated counter effect
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    students: 0,
    tournaments: 0,
    sessions: 0,
    rating: 0
  });

  useEffect(() => {
    const duration = 1800; // ms
    const steps = 40;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = Math.min(step / steps, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);

      setCounts({
        students: Math.floor(4850 * ease),
        tournaments: Math.floor(124 * ease),
        sessions: Math.floor(35200 * ease),
        rating: Math.floor(385 * ease)
      });

      if (step >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="achievements" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-4">
            <Trophy className="w-3.5 h-3.5" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-cinzel text-white mb-5 tracking-tight">
            Excellence Forged On{' '}
            <span className="text-gold-gradient">The 64 Squares</span>
          </h2>
          <p className="text-slate-300 text-base font-light leading-relaxed">
            From grassroots club beginners to international master norm seekers, our structured methodology turns aspiration into measurable tournament triumphs.
          </p>
        </div>

        {/* 4 Big Animated Stat Counters */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="glass-panel-interactive rounded-2xl p-7 border border-slate-800 text-center relative overflow-hidden group"
              >
                {/* Glow ring */}
                <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className={`w-7 h-7 ${stat.color}`} />
                </div>

                <div className="text-3xl sm:text-4xl font-black font-cinzel text-white mb-2 tracking-tight">
                  {stat.prefix || ''}
                  {counts[stat.id]?.toLocaleString()}
                  <span className="text-amber-400 text-2xl font-bold">{stat.suffix}</span>
                </div>

                <div className="text-sm font-semibold text-slate-200 mb-2">
                  {stat.label}
                </div>

                <p className="text-xs text-slate-400 font-light">
                  {stat.description}
                </p>

                {/* Demo Marker Tag */}
                <div className="mt-4 pt-3 border-t border-slate-800/80">
                  <span className="text-[10px] text-amber-400/80 uppercase tracking-widest font-mono">
                    • Demo Verified Metric •
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Special Honors Showcase Banner */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-amber-500/25 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-400 to-amber-700 p-0.5 shrink-0 shadow-lg shadow-amber-500/20">
              <div className="w-full h-full bg-neutral-950 rounded-[10px] flex items-center justify-center">
                <Medal className="w-7 h-7 text-amber-400" />
              </div>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold font-cinzel text-white">
                FIDE Recognized Syllabus & Title Path
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 font-light">
                Our curriculum aligns with the International Chess Federation (FIDE) training framework for accelerated title norm progression.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <div className="px-4 py-2 rounded-xl bg-neutral-900 border border-slate-700/80 text-xs font-semibold text-slate-300">
              Official Demo Hub
            </div>
            <a
              href="#booking"
              className="px-5 py-2.5 rounded-xl bg-amber-500 text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition shadow-md shadow-amber-500/20"
            >
              Join Champions
            </a>
          </div>
        </div>

        {/* Demo Notice Note */}
        <p className="text-center text-[11px] text-slate-500 font-mono mt-6">
          *Note: All achievement figures above represent sample academy showcase data and can be easily customized in code.
        </p>
      </div>
    </section>
  );
};
