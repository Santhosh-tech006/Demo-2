import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CourseCard } from './components/CourseCard';
import { CoachCard } from './components/CoachCard';
import { AchievementSection } from './components/AchievementSection';
import { LearningJourney } from './components/LearningJourney';
import { Testimonials } from './components/Testimonials';
import { BookingForm } from './components/BookingForm';
import { Footer } from './components/Footer';
import { coursesData, Course } from './data/courses';
import { coachesData, Coach } from './data/coaches';
import {
  Sparkles,
  BookOpen,
  Users,
  Shield,
  Award,
  CheckCircle,
  X,
  Clock,
  ArrowRight,
  Target,
  Brain,
  Zap,
  Globe
} from 'lucide-react';

export default function App() {
  const [selectedCourseForModal, setSelectedCourseForModal] = useState<Course | null>(null);
  const [selectedCoachForBooking, setSelectedCoachForBooking] = useState<Coach | null>(null);
  const [courseFilter, setCourseFilter] = useState<'All' | 'Beginner' | 'Intermediate' | 'Advanced' | 'Mastery'>('All');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookTrialClick = () => {
    scrollToSection('booking');
  };

  const handleStartLearningClick = () => {
    scrollToSection('courses');
  };

  const handleExploreCourse = (course: Course) => {
    setSelectedCourseForModal(course);
  };

  const handleBookCoachSession = (coach: Coach) => {
    setSelectedCoachForBooking(coach);
    scrollToSection('booking');
  };

  const filteredCourses = coursesData.filter((c) => {
    if (courseFilter === 'All') return true;
    return c.level === courseFilter;
  });

  return (
    <div className="min-h-screen text-slate-100 bg-[#07090e] selection:bg-amber-500 selection:text-neutral-950">
      {/* Sticky Navigation */}
      <Navbar onBookTrialClick={handleBookTrialClick} />

      <main>
        {/* Hero Section with 3D Chessboard */}
        <HeroSection
          onStartLearningClick={handleStartLearningClick}
          onBookTrialClick={handleBookTrialClick}
        />

        {/* About Academy Section */}
        <section id="about" className="relative py-20 lg:py-28 overflow-hidden bg-neutral-950/40 border-t border-amber-500/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Visual Pillars */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="glass-panel rounded-2xl p-6 border border-amber-500/20 space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Brain className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold font-cinzel text-white">
                    Cognitive Calculation
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    Train candidate-move discipline, deep visualization, and multi-ply calculation without moving physical pieces.
                  </p>
                </div>

                <div className="glass-panel rounded-2xl p-6 border border-amber-500/20 space-y-3 sm:translate-y-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold font-cinzel text-white">
                    Bespoke Repertoire
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    Move beyond memorizing lines. Grasp underlying pawn structures, strategic plans, and deep endgame transitions.
                  </p>
                </div>

                <div className="glass-panel rounded-2xl p-6 border border-amber-500/20 space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold font-cinzel text-white">
                    Tournament Resilience
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    Master psychological poise under time pressure, overcoming tournament nerves and bouncing back after tough losses.
                  </p>
                </div>

                <div className="glass-panel rounded-2xl p-6 border border-amber-500/20 space-y-3 sm:translate-y-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold font-cinzel text-white">
                    Global Community
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    Spar in weekly internal academy tournaments, review games in live grandmaster clinics, and earn internal Elo ratings.
                  </p>
                </div>
              </div>

              {/* Right Column: Academy Story & Mission */}
              <div className="lg:col-span-6 text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>The Checkmate City Philosophy</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-cinzel text-white mb-6 tracking-tight leading-tight">
                  Where Ancient Strategy Meets{' '}
                  <span className="text-gold-gradient">Modern Mastery</span>
                </h2>

                <p className="text-slate-300 text-base font-light leading-relaxed mb-6">
                  Founded by international titled players and passionate educators, Checkmate City Academy blends the timeless depth of Soviet and modern European chess schools with cutting-edge 3D visualization tools.
                </p>

                <p className="text-slate-400 text-sm font-light leading-relaxed mb-8">
                  We believe chess is more than moving pieces on wood—it is a forge for character, concentration, patience, and fearless decision-making under uncertainty. Whether you are six years old learning the knight’s L-shape or an adult striving to break 1800, you are trained with the same respect and analytical rigor.
                </p>

                {/* Key Points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                  <div className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
                    <CheckCircle className="w-4 h-4 text-amber-400" />
                    <span>FIDE Licensed Trainers & Grandmasters</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
                    <CheckCircle className="w-4 h-4 text-amber-400" />
                    <span>Small Pods (Max 4-6 Students / Group)</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
                    <CheckCircle className="w-4 h-4 text-amber-400" />
                    <span>Stockfish 17 Engine Game Diagnostics</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
                    <CheckCircle className="w-4 h-4 text-amber-400" />
                    <span>Lifetime Access to PGN Repertoires</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="relative py-20 lg:py-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-4">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Structured Curriculum</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-cinzel text-white mb-5 tracking-tight">
                Mastery Courses Designed for{' '}
                <span className="text-gold-gradient">Every Elo Bracket</span>
              </h2>
              <p className="text-slate-300 text-base font-light leading-relaxed">
                Choose a targeted program engineered to solve your specific rating hurdles, from opening traps to clinical endgame execution.
              </p>

              {/* Filter Tabs */}
              <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
                {(['All', 'Beginner', 'Intermediate', 'Advanced', 'Mastery'] as const).map((level) => (
                  <button
                    key={level}
                    onClick={() => setCourseFilter(level)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition ${
                      courseFilter === level
                        ? 'bg-amber-500 text-neutral-950 font-bold shadow-lg shadow-amber-500/20'
                        : 'bg-neutral-900/90 text-slate-300 hover:text-white border border-slate-800'
                    }`}
                  >
                    {level === 'All' ? 'All Programs (6)' : `${level}`}
                  </button>
                ))}
              </div>
            </div>

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  onExploreCourse={handleExploreCourse}
                />
              ))}
            </div>

          </div>
        </section>

        {/* Grandmaster Learning Journey (Interactive 4 Stages) */}
        <LearningJourney />

        {/* Coaches Section */}
        <section id="coaches" className="relative py-20 lg:py-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-4">
                <Users className="w-3.5 h-3.5" />
                <span>World-Class Mentorship</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-cinzel text-white mb-5 tracking-tight">
                Learn Directly From{' '}
                <span className="text-gold-gradient">Titled Grandmasters</span>
              </h2>
              <p className="text-slate-300 text-base font-light leading-relaxed mb-4">
                Our faculty includes active tournament champions and licensed FIDE trainers passionate about individual player growth.
              </p>
              <div className="inline-block px-3 py-1 rounded-md bg-neutral-900 border border-slate-800 text-[11px] text-amber-400 font-mono">
                *Coach profiles showcase demonstration data for academy preview
              </div>
            </div>

            {/* Coaches Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {coachesData.map((coach) => (
                <CoachCard
                  key={coach.id}
                  coach={coach}
                  onBookSession={handleBookCoachSession}
                />
              ))}
            </div>

          </div>
        </section>

        {/* Achievements Section */}
        <AchievementSection />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Trial Booking & Contact Form */}
        <BookingForm selectedCoach={selectedCoachForBooking} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Course Detail Modal (when user clicks Explore Course) */}
      {selectedCourseForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-md animate-fade-in">
          <div className="glass-panel w-full max-w-2xl rounded-3xl p-6 sm:p-8 border border-amber-500/40 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedCourseForModal(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-neutral-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-white hover:border-amber-400 transition"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="pr-8 mb-6">
              <div className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-300 border border-amber-500/30 mb-2">
                {selectedCourseForModal.level} Program
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-cinzel text-white">
                {selectedCourseForModal.title}
              </h3>
              <p className="text-xs text-amber-400 font-medium mt-1">
                Target Rating: {selectedCourseForModal.ratingRange}
              </p>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
              {selectedCourseForModal.description}
            </p>

            <div className="grid grid-cols-2 gap-3 py-3.5 px-4 rounded-xl bg-neutral-900 border border-slate-800 mb-6 text-xs text-slate-300">
              <div>
                <span className="text-slate-400 block">Duration:</span>
                <span className="font-semibold text-white">{selectedCourseForModal.duration}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Structure:</span>
                <span className="font-semibold text-white">{selectedCourseForModal.sessions} Interactive Sessions</span>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-3">
                Curriculum Modules & Deliverables:
              </h4>
              <ul className="space-y-2">
                {selectedCourseForModal.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => {
                  setSelectedCourseForModal(null);
                  handleBookTrialClick();
                }}
                className="w-full sm:w-auto flex-1 py-3 px-6 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-neutral-950 transition flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25"
              >
                <span>Enroll in Course Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setSelectedCourseForModal(null)}
                className="w-full sm:w-auto py-3 px-5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white border border-slate-700 bg-neutral-900 transition"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
