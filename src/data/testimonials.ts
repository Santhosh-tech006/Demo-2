export interface Testimonial {
  id: string;
  studentName: string;
  role: string;
  ratingBefore: number;
  ratingAfter: number;
  ratingSystem: string;
  timeframe: string;
  quote: string;
  avatar: string;
  coachAssigned: string;
  isPlaceholder: boolean;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    studentName: 'Julian Vance (Age 14)',
    role: 'Junior State Under-16 Finalist',
    ratingBefore: 1320,
    ratingAfter: 1845,
    ratingSystem: 'USCF / FIDE',
    timeframe: '9 Months Coaching',
    quote: 'Before joining Checkmate City Academy, I kept blundering in endgames and getting nervous in classical matches. GM Alexei Voronov broke down my thought process completely. The 3D positional board review and personalized tactical drills gave me the confidence to win my state championship bracket.',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
    coachAssigned: 'GM Alexei Voronov',
    isPlaceholder: true
  },
  {
    id: 'test-2',
    studentName: 'Dr. Aris Thorne',
    role: 'Adult Improver & Club Player',
    ratingBefore: 1150,
    ratingAfter: 1690,
    ratingSystem: 'Chess.com Rapid',
    timeframe: '6 Months Coaching',
    quote: 'As a working professional, I thought my chess rating had peaked. The academy’s structured opening repertoire and weekly game diagnostics saved me hundreds of hours of random video watching. The interactive curriculum is world-class.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    coachAssigned: 'IM Marcus Sterling',
    isPlaceholder: true
  },
  {
    id: 'test-3',
    studentName: 'Mira & David K.',
    role: 'Parents of Prodigy Maya (Age 9)',
    ratingBefore: 900,
    ratingAfter: 1530,
    ratingSystem: 'FIDE Rated Youth',
    timeframe: '1 Year Coaching',
    quote: 'FM Sarah Chen is an incredible mentor. She turned Maya\'s playful enthusiasm into disciplined calculation without ever burning her out. Maya now adores tournament weekends and won gold in her age category!',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    coachAssigned: 'FM Sarah Chen',
    isPlaceholder: true
  },
  {
    id: 'test-4',
    studentName: 'Liam O’Connor',
    role: 'College Team Board 1',
    ratingBefore: 1710,
    ratingAfter: 2120,
    ratingSystem: 'FIDE Classical',
    timeframe: '14 Months Coaching',
    quote: 'The deep middlegame strategy modules and anti-Sicilian opening clinics gave me genuine grandmaster preparation tools. Reaching candidate master level was a lifelong dream Checkmate City made a reality.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    coachAssigned: 'WGM Elena Rostova',
    isPlaceholder: true
  }
];
