export interface Course {
  id: string;
  title: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Mastery';
  ratingRange: string;
  duration: string;
  sessions: number;
  description: string;
  features: string[];
  icon: 'pawn' | 'knight' | 'bishop' | 'rook' | 'queen' | 'king';
  badge: string;
}

export const coursesData: Course[] = [
  {
    id: 'fundamentals',
    title: 'Chess Fundamentals',
    level: 'Beginner',
    ratingRange: '500 – 1100 FIDE / Chess.com',
    duration: '8 Weeks',
    sessions: 16,
    description: 'Master piece coordination, core tactical motifs (pins, forks, skewers), board vision, and fundamental checkmating nets.',
    features: [
      'Rules & piece movement mastery',
      'Essential opening principles (center, development, king safety)',
      'Basic tactical motifs & mate patterns',
      'Introduction to clock management & notation'
    ],
    icon: 'pawn',
    badge: 'Best for Starters'
  },
  {
    id: 'openings',
    title: 'Opening Preparation',
    level: 'Intermediate',
    ratingRange: '1100 – 1600 FIDE',
    duration: '10 Weeks',
    sessions: 20,
    description: 'Build a personalized opening repertoire for White and Black tailored to your playing style, avoiding passive sidelines.',
    features: [
      '1.e4 vs 1.d4 structural masterclasses',
      'Anti-Sicilian & French defense weaponries',
      'Repertoire cheat-sheets & PGN database',
      'Modern move-order psychology & traps'
    ],
    icon: 'knight',
    badge: 'Popular'
  },
  {
    id: 'middlegame',
    title: 'Middlegame Strategy',
    level: 'Intermediate',
    ratingRange: '1300 – 1800 FIDE',
    duration: '10 Weeks',
    sessions: 20,
    description: 'Unlock deep positional concepts: pawn structures, outposts, pawn storms, weak complexes, and candidate calculation.',
    features: [
      'Carlsen & Kasparov pawn chain strategies',
      'Prophylactic thinking (preventing opponent ideas)',
      'Piece sacrifice & dynamic calculation technique',
      'Active piece play vs static weaknesses'
    ],
    icon: 'bishop',
    badge: 'Strategy Focus'
  },
  {
    id: 'endgame',
    title: 'Endgame Mastery',
    level: 'Advanced',
    ratingRange: '1500 – 2100 FIDE',
    duration: '12 Weeks',
    sessions: 24,
    description: 'Transform drawn or equal positions into clinical victories. Study rook endgames, king opposition, and fortress breakthroughs.',
    features: [
      'Lucena & Philidor positions made effortless',
      'Rook & Pawn fundamental masterclass',
      'Pawn breakthrough geometry & square rule',
      'Minor piece endings (Knight vs Bishop nuances)'
    ],
    icon: 'rook',
    badge: 'Game Decider'
  },
  {
    id: 'tournament',
    title: 'Tournament Preparation',
    level: 'Advanced',
    ratingRange: '1600 – 2200 FIDE',
    duration: '12 Weeks',
    sessions: 24,
    description: 'Psychological conditioning, time-pressure simulations, deep opening refutations, and classical tournament resilience.',
    features: [
      'Full classical time-control match simulations',
      'Opponent scouting & psychological preparation',
      'Overcoming time trouble and blunders',
      'FIDE tournament rules & physical endurance'
    ],
    icon: 'queen',
    badge: 'Competitive'
  },
  {
    id: 'advanced-coaching',
    title: 'Advanced Grandmaster Coaching',
    level: 'Mastery',
    ratingRange: '2000+ FIDE / Titled Track',
    duration: '16 Weeks',
    sessions: 32,
    description: 'One-on-one intensive mentorship designed for candidate masters, national champions, and ambitious titled pursuers.',
    features: [
      'Private 1-on-1 Grandmaster analysis',
      'Customized engine analysis (Stockfish 17 deep trees)',
      'Elite opening novelties & secret preparations',
      'Direct road to FM / IM title norms'
    ],
    icon: 'king',
    badge: 'Elite Tier'
  }
];
