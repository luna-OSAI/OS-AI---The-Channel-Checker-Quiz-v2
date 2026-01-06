export enum Channel {
  SEO = 'SEO',
  PaidAds = 'PaidAds',
  ContentMarketing = 'ContentMarketing',
  Referrals = 'Referrals',
  Partnerships = 'Partnerships',
}

export interface Question {
  id: string;
  text: string;
  sectionTitle: string;
  sectionIndex: number;
  channels: Channel[]; // Channels this question influences
}

export interface QuizState {
  status: 'intro' | 'active' | 'results';
  currentQuestionIndex: number;
  answers: Record<string, boolean>; // questionId -> yes/no
}

export interface ResultContent {
  identity: string;
  headline: string;
  insight: string;
  hiddenProblem: string;
  quickWin: string;
  aiAngle: string;
}