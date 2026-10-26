import React from 'react';
import { Course } from '../data/courses';
import { Clock, BookOpen, CheckCircle2, ChevronRight, Award } from 'lucide-react';

interface CourseCardProps {
  course: Course;
  onExploreCourse: (course: Course) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onExploreCourse }) => {
  // Piece symbol icon mapping
  const pieceSymbols: Record<string, string> = {
    pawn: '♟',
    knight: '♞',
    bishop: '♝',
    rook: '♜',
    queen: '♛',
    king: '♚'
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30';
      case 'Intermediate':
        return 'bg-blue-500/15 text-blue-300 border-blue-500/30';
      case 'Advanced':
        return 'bg-purple-500/15 text-purple-300 border-purple-500/30';
      case 'Mastery':
        return 'bg-amber-500/15 text-amber-300 border-amber-500/30';
      default:
        return 'bg-slate-500/15 text-slate-300 border-slate-500/30';
    }
  };

  return (
    <div className="group relative flex flex-col justify-between glass-panel-interactive rounded-2xl p-6 sm:p-7 border border-slate-800/80 hover:border-amber-500/40 transition-all duration-300">
      <div>
        {/* Top Header: Chess Symbol & Level Badge */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-13 h-13 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-amber-500/30 flex items-center justify-center text-3xl text-amber-400 group-hover:scale-110 group-hover:text-amber-300 transition-all duration-300 shadow-md shadow-black/60">
            <span>{pieceSymbols[course.icon] || '♟'}</span>
          </div>

          <div className="flex flex-col items-end gap-1.5">
            <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${getLevelColor(course.level)}`}>
              {course.level}
            </span>
            <span className="text-[10px] text-amber-400/90 font-medium tracking-wide">
              {course.badge}
            </span>
          </div>
        </div>

        {/* Course Title */}
        <h3 className="text-xl font-bold font-cinzel text-white group-hover:text-amber-300 transition-colors mb-2">
          {course.title}
        </h3>

        {/* Rating Target */}
        <div className="flex items-center gap-1.5 text-xs text-amber-400/90 font-medium mb-3">
          <Award className="w-3.5 h-3.5" />
          <span>Target: {course.ratingRange}</span>
        </div>

        {/* Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
          {course.description}
        </p>

        {/* Meta Details: Duration & Sessions */}
        <div className="flex items-center gap-4 text-xs text-slate-400 pb-5 mb-5 border-b border-slate-800">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>{course.sessions} Master Sessions</span>
          </div>
        </div>

        {/* Curriculum Highlights */}
        <ul className="space-y-2 mb-6">
          {course.features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Explore Button */}
      <button
        onClick={() => onExploreCourse(course)}
        className="w-full py-3 px-4 rounded-xl text-xs font-semibold tracking-wider uppercase bg-neutral-900/90 hover:bg-amber-500 hover:text-neutral-950 text-amber-300 border border-amber-500/30 hover:border-amber-400 transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md"
      >
        <span>Explore Course</span>
        <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};
