import type { VariationPerspective } from '../types/syllabus';

export const EXPERIENCE_PERSPECTIVES = [
  'Classroom explanation & core theory',
  'Understanding through step-by-step examples',
  'Solving numerical and analytical problem sets',
  'Learning through practical implementation',
  'Connecting fundamental concepts with existing knowledge',
  'Tackling initially difficult theoretical concepts',
  'Interactive learning and conceptual walkthroughs',
  'Comprehensive module learning and syllabus review'
];

export const FEELINGS_PERSPECTIVES = [
  'Initially confusing but gradually becoming much clearer',
  'Genuinely interesting and intellectually engaging',
  'Challenging yet rewarding once the core mechanics clicked',
  'Deeply satisfying after solving key example problems',
  'Curious to see how these theories extend into advanced topics',
  'Noticeably more confident in applying these concepts',
  'Slightly overwhelmed at first by the terminology, but now comfortable',
  'Energized by seeing concrete practical instances'
];

export const KEY_INSIGHTS_PERSPECTIVES = [
  'Core structural concepts and foundational definitions',
  'Critical mathematical/logical relationships between components',
  'Algorithmic methods and systematic procedures',
  'Problem-solving strategies and edge-case handling',
  'Practical significance and real-world trade-offs',
  'Comparative analysis of alternative approaches',
  'Internal mechanics and working principles',
  'Systemic relevance across computer science and engineering'
];

export const APPLICATIONS_PERSPECTIVES = [
  'Software development and software architecture design',
  'Artificial intelligence and intelligent decision systems',
  'Data science pipeline optimization and statistical modeling',
  'Database query execution and data storage systems',
  'Algorithm efficiency and computational problem solving',
  'Academic coursework, research papers, and lab reports',
  'Real-world production backend and infrastructure systems',
  'Future engineering projects and technical interview preparation'
];

export const CONCLUSION_PERSPECTIVES = [
  'Solid overall understanding of the entire module scope',
  'Enhanced confidence for upcoming exams and lab implementations',
  'Long-term practical utility in professional engineering',
  'Clear connections established with complementary coursework',
  'Appreciation of the underlying academic foundation',
  'Readiness to build upon these principles in advanced modules'
];

export function getRandomPerspective(): VariationPerspective {
  const pick = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
  return {
    experience: pick(EXPERIENCE_PERSPECTIVES),
    feelings: pick(FEELINGS_PERSPECTIVES),
    keyInsights: pick(KEY_INSIGHTS_PERSPECTIVES),
    applications: pick(APPLICATIONS_PERSPECTIVES),
    conclusion: pick(CONCLUSION_PERSPECTIVES),
  };
}
