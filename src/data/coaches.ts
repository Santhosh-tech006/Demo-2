export interface Coach {
  id: string;
  name: string;
  title: string;
  fideRating: number; // Demo rating
  experienceYears: number;
  studentsTrained: number;
  specializations: string[];
  bio: string;
  avatarUrl: string;
  achievements: string[];
  isDemoData: boolean;
}

export const coachesData: Coach[] = [
  {
    id: 'coach-1',
    name: 'Alexei Voronov',
    title: 'Grandmaster (GM) & Senior Head Coach',
    fideRating: 2585,
    experienceYears: 14,
    studentsTrained: 620,
    specializations: ['Dynamic Attacking Chess', 'King\'s Indian Defense', 'Calculation Discipline'],
    bio: 'Former Olympiad squad board medalist with over 14 years of coaching prodigies from 1200 to international master norms.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    achievements: ['FIDE Senior Trainer Certificate', 'Coached 3 National Junior Champions', 'European Team Blitz Silver'],
    isDemoData: true
  },
  {
    id: 'coach-2',
    name: 'Elena Rostova',
    title: 'Woman Grandmaster (WGM) & Opening Theorist',
    fideRating: 2435,
    experienceYears: 11,
    studentsTrained: 480,
    specializations: ['Sicilian Complexities', 'Positional Pawn Structures', 'Time Management'],
    bio: 'Specialist in crafting airtight opening books and sharp tactical vision for competitive tournament youth and adult improvers.',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    achievements: ['World Youth Championship Coach', 'WGM Title Holder (2018)', 'Author of Modern Repertoire Guides'],
    isDemoData: true
  },
  {
    id: 'coach-3',
    name: 'Marcus Sterling',
    title: 'International Master (IM) & Tactical Specialist',
    fideRating: 2470,
    experienceYears: 9,
    studentsTrained: 540,
    specializations: ['Tactical Calculation', 'Middlegame Sacrifices', 'Blunder Elimination'],
    bio: 'Known for his analytical rigor and energetic training style. Specializes in transforming 1400-level plateaued players into tournament beasts.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    achievements: ['2x National Open Co-Champion', 'FIDE Trainer License', 'Developer of 15-Minute Daily Calculation Drills'],
    isDemoData: true
  },
  {
    id: 'coach-4',
    name: 'Sarah Chen',
    title: 'FIDE Master (FM) & Junior Prodigy Mentor',
    fideRating: 2340,
    experienceYears: 8,
    studentsTrained: 710,
    specializations: ['Youth Fundamentals', 'Endgame Precision', 'Psychological Resilience'],
    bio: 'Pioneered Checkmate City\'s structured Junior Prodigy syllabus. Passionate about instilling love for classical chess and patience.',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    achievements: ['FIDE Instructor Award', 'Coached 5 National Age-Category Gold Winners', 'State Rapid Champion'],
    isDemoData: true
  }
];
