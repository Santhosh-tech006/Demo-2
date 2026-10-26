import React, { useState } from 'react';
import { Compass, CheckCircle2, ChevronRight, Target, Zap, Shield, Trophy } from 'lucide-react';

interface Stage {
  id: string;
  stageNumber: string;
  title: string;
  pieceIcon: string;
  pieceName: string;
  ratingRange: string;
  duration: string;
  tagline: string;
  keySkills: string[];
  tacticalFocus: string;
  milestoneTest: string;
  deliverables: string;
}

export const LearningJourney: React.FC = () => {
  const stages: Stage[] = [
    {
      id: 'beginner',
      stageNumber: '01',
      title: 'Beginner Foundations',
      pieceIcon: '♟',
      pieceName: 'The Brave Pawn',
      ratingRange: '500 – 1100 ELO',
      duration: '8 Weeks',
      tagline: 'From rules of movement to board vision and basic checkmating nets.',
      keySkills: [
        'Complete rule mastery & legal tournament mechanics',
        'Direct checkmate patterns (Ladder mate, Queen & King, Two Rooks)',
        'Basic tactics: Forks, Pins, Skewers & Discovered Attacks',
        'The 3 Golden Opening Principles: Center control, rapid piece development, King safety'
      ],
      tacticalFocus: '1-to-2 move tactical puzzles & hanging piece radar',
      milestoneTest: 'Pass the 50-puzzle foundational tactic sprint without blunders',
      deliverables: 'Personalized Opening Starter Guide & Notation Workbook'
    },
    {
      id: 'intermediate',
      stageNumber: '02',
      title: 'Intermediate Tactics & Repertoire',
      pieceIcon: '♞',
      pieceName: 'The Agile Knight & Bishop',
      ratingRange: '1100 – 1600 ELO',
      duration: '12 Weeks',
      tagline: 'Deep tactical combinations, tailored opening repertoire, and positional awareness.',
      keySkills: [
        'Structured opening repertoire for White (1.e4 or 1.d4) and Black (vs 1.e4 & 1.d4)',
        'Calculation tree building: candidate moves and forcing sequences',
        'Pawn structure recognition (isolated pawns, doubled pawns, pawn chains)',
        'Essential Rook & King endgames (Lucena and Philidor basics)'
      ],
      tacticalFocus: 'Multi-step combinations, deflections, sacrifices & decoy attacks',
      milestoneTest: 'Win 3 rated rapid matches against Academy Training Bot at 1500 ELO',
      deliverables: 'Comprehensive PGN Repertoire Database & Weekly Drill Packs'
    },
    {
      id: 'advanced',
      stageNumber: '03',
      title: 'Advanced Positional Mastery',
      pieceIcon: '♜',
      pieceName: 'The Dominant Rook & Queen',
      ratingRange: '1600 – 2000 ELO',
      duration: '16 Weeks',
      tagline: 'Prophylactic intuition, exchange sacrifices, and deep endgame conversion.',
      keySkills: [
        'Prophylaxis: Karpov & Petrosian methods of dismantling enemy counterplay',
        'Complex endgame conversion: Minor piece battles, opposition & pawn breakthrough geometry',
        'Dynamic unbalanced positions: Exchange sacrifices and king hunts',
        'Clock management, emotional control & psychological resilience'
      ],
      tacticalFocus: '3-to-5 ply deep visualization, quiet moves & counter-intuitive sacrifices',
      milestoneTest: 'Survive and draw/win in a simultaneous master exhibition',
      deliverables: 'Deep Positional Diagnostic Report & Engine Tree Analyses'
    },
    {
      id: 'tournament',
      stageNumber: '04',
      title: 'Tournament Ready Champion',
      pieceIcon: '♚',
      pieceName: 'The Sovereign King',
      ratingRange: '2000+ FIDE / Titled Track',
      duration: 'Ongoing Mentorship',
      tagline: 'Classical tournament simulation, FIDE rating preparation, and direct title norms.',
      keySkills: [
        'Custom opponent scouting and pre-game psychological preparation',
        'Classical 90+30 minute game stamina and physical endurance strategies',
        'Novelty creation in modern opening systems with Stockfish 17 & Leela',
        'Direct preparation for Candidate Master (CM), FM, and IM title standards'
      ],
      tacticalFocus: 'Grandmaster level intuition, blindfold calculation & deep strategic planning',
      milestoneTest: 'Achieve official podium placement or FIDE norm benchmark',
      deliverables: '1-on-1 Grandmaster Sparring & Official FIDE Tournament Support'
    }
  ];

  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const activeStage = stages[activeStageIndex];

  return (
    <section id="journey" className="relative py-20 lg:py-28 overflow-hidden bg-neutral-950/60 border-y border-amber-500/10">
      {/* Background chess accent */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Structured Progression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-cinzel text-white mb-5 tracking-tight">
            The Grandmaster <span className="text-gold-gradient">Learning Path</span>
          </h2>
          <p className="text-slate-300 text-base font-light leading-relaxed">
            Every grandmaster once pushed their first pawn. Our 4-stage systematic roadmap transforms casual enthusiasts into confident tournament competitors.
          </p>
        </div>

        {/* Desktop Horizontal Timeline / Mobile Tabs */}
        <div className="mb-12">
          {/* Progress Connecting Line on Desktop */}
          <div className="hidden lg:block relative mb-8">
            <div className="absolute top-1/2 left-12 right-12 h-1 -translate-y-1/2 bg-slate-800 rounded-full z-0" />
            <div
              className="absolute top-1/2 left-12 h-1 -translate-y-1/2 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full transition-all duration-500 z-0"
              style={{ width: `${(activeStageIndex / (stages.length - 1)) * 82}%` }}
            />

            <div className="grid grid-cols-4 relative z-10">
              {stages.map((stage, idx) => {
                const isActive = idx === activeStageIndex;
                const isPassed = idx < activeStageIndex;

                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveStageIndex(idx)}
                    className="flex flex-col items-center group text-center cursor-pointer focus:outline-none"
                  >
                    {/* Circle Node */}
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 shadow-xl ${
                        isActive
                          ? 'bg-amber-400 text-neutral-950 scale-110 shadow-amber-400/30 ring-4 ring-amber-500/20'
                          : isPassed
                          ? 'bg-amber-500/20 border border-amber-500 text-amber-400'
                          : 'bg-neutral-900 border border-slate-700 text-slate-500 hover:text-slate-300 hover:border-slate-500'
                      }`}
                    >
                      <span>{stage.pieceIcon}</span>
                    </div>

                    <div className="mt-4">
                      <div className="text-[11px] font-mono tracking-widest text-amber-400 uppercase font-semibold">
                        Stage {stage.stageNumber}
                      </div>
                      <div className={`text-sm font-bold font-cinzel transition-colors ${
                        isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'
                      }`}>
                        {stage.title}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {stage.ratingRange}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile Vertical / Pill Navigation */}
          <div className="flex lg:hidden overflow-x-auto pb-4 gap-2 scrollbar-none">
            {stages.map((stage, idx) => {
              const isActive = idx === activeStageIndex;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageIndex(idx)}
                  className={`shrink-0 px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 border transition ${
                    isActive
                      ? 'bg-amber-500 text-neutral-950 border-amber-400 shadow-md'
                      : 'bg-neutral-900 text-slate-300 border-slate-800'
                  }`}
                >
                  <span className="text-base">{stage.pieceIcon}</span>
                  <span>{stage.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Stage Card for the active selection */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-amber-500/30 shadow-2xl relative overflow-hidden animate-fade-in">
          {/* Watermark Piece */}
          <div className="absolute -right-8 -bottom-10 text-[180px] sm:text-[240px] text-amber-500/[0.04] select-none pointer-events-none font-serif leading-none">
            {activeStage.pieceIcon}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Left summary */}
            <div className="lg:col-span-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/15 text-amber-400 text-xs font-mono font-bold tracking-wider uppercase mb-3">
                Stage {activeStage.stageNumber} • {activeStage.pieceName}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-cinzel text-white mb-3">
                {activeStage.title}
              </h3>

              <p className="text-amber-200/90 text-sm font-medium mb-6">
                {activeStage.tagline}
              </p>

              <div className="space-y-3 py-4 border-y border-slate-800/80 mb-6 text-xs text-slate-300">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Target Rating:</span>
                  <span className="font-semibold text-amber-300">{activeStage.ratingRange}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Duration:</span>
                  <span className="font-semibold text-white">{activeStage.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Tactical Focus:</span>
                  <span className="font-semibold text-slate-200 text-right max-w-[65%]">{activeStage.tacticalFocus}</span>
                </div>
              </div>

              <a
                href="#booking"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition shadow-lg shadow-amber-500/20"
              >
                Enroll in Stage {activeStage.stageNumber}
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right: Key Skills & Milestone Exam */}
            <div className="lg:col-span-7 space-y-6">
              {/* Core Competencies */}
              <div className="bg-neutral-950/70 rounded-2xl p-6 border border-slate-800">
                <h4 className="text-sm font-bold font-cinzel text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  Key Skills & Competencies Mastered
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeStage.keySkills.map((skill, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Milestone Test & Deliverables */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-neutral-900/50 rounded-2xl p-5 border border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wide mb-2">
                    <Target className="w-4 h-4" />
                    Milestone Gateway Test
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeStage.milestoneTest}
                  </p>
                </div>

                <div className="bg-neutral-900/50 rounded-2xl p-5 border border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wide mb-2">
                    <Trophy className="w-4 h-4" />
                    Student Materials
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeStage.deliverables}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
