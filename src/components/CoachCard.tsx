import React from 'react';
import { Coach } from '../data/coaches';
import { Star, Award, Users, Calendar, Sparkles } from 'lucide-react';

interface CoachCardProps {
  coach: Coach;
  onBookSession: (coach: Coach) => void;
}

export const CoachCard: React.FC<CoachCardProps> = ({ coach, onBookSession }) => {
  return (
    <div className="group relative flex flex-col justify-between glass-panel-interactive rounded-2xl p-6 sm:p-7 border border-slate-800/80 hover:border-amber-500/40 transition-all duration-300">
      <div>
        {/* Top Header: Avatar & Rating Badge */}
        <div className="flex items-start gap-4 mb-5">
          <div className="relative shrink-0">
            <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-lg group-hover:scale-105 transition-transform duration-300 bg-neutral-900">
              <img
                src={coach.avatarUrl}
                alt={coach.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Title Badge overlay */}
            <div className="absolute -bottom-2 -right-1 px-2 py-0.5 rounded-md bg-amber-500 text-neutral-950 font-black text-[10px] tracking-wider uppercase shadow-md">
              {coach.title.split(' ')[0]}
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-bold font-cinzel text-white group-hover:text-amber-300 transition-colors truncate">
                {coach.name}
              </h3>
            </div>
            <p className="text-xs text-amber-400 font-medium line-clamp-1 mb-2">
              {coach.title}
            </p>
            
            {/* FIDE Rating badge (Demo data marker) */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] font-semibold">
              <Award className="w-3 h-3 text-amber-400" />
              <span>FIDE Peak: {coach.fideRating}</span>
              <span className="text-[9px] text-slate-400 uppercase tracking-tight">(Demo)</span>
            </div>
          </div>
        </div>

        {/* Experience Stats Row */}
        <div className="grid grid-cols-2 gap-2 py-3 px-3.5 bg-neutral-950/60 rounded-xl border border-slate-800/80 mb-4 text-center">
          <div>
            <div className="text-sm font-bold font-cinzel text-white">
              {coach.experienceYears}+ Years
            </div>
            <div className="text-[10px] text-slate-400">Master Experience</div>
          </div>
          <div>
            <div className="text-sm font-bold font-cinzel text-amber-400">
              {coach.studentsTrained}+
            </div>
            <div className="text-[10px] text-slate-400">Students Coached</div>
          </div>
        </div>

        {/* Coach Bio */}
        <p className="text-xs text-slate-300 leading-relaxed font-light mb-4">
          {coach.bio}
        </p>

        {/* Specializations Tags */}
        <div className="mb-6">
          <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-2">
            Specializations:
          </div>
          <div className="flex flex-wrap gap-1.5">
            {coach.specializations.map((spec, i) => (
              <span
                key={i}
                className="text-[11px] px-2 py-0.5 rounded-md bg-slate-900 border border-slate-700/60 text-slate-300"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Book Session CTA */}
      <button
        onClick={() => onBookSession(coach)}
        className="w-full py-3 px-4 rounded-xl text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-amber-500/20 to-amber-400/20 hover:from-amber-500 hover:to-amber-400 text-amber-300 hover:text-neutral-950 border border-amber-500/40 hover:border-amber-400 transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>Book 1-on-1 Session</span>
      </button>
    </div>
  );
};
