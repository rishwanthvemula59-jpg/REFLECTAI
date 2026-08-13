export interface Module {
  id: string;
  number: string; // e.g. "Module I" or "Module 1"
  name: string;
  syllabusPreview: string;
  contentDetails: string;
}

export interface Subject {
  id: string;
  name: string;
  code: string;
  category: string;
  description: string;
  iconName: string;
  modules: Module[];
}

export type JournalSectionKey = 'experience' | 'feelings' | 'keyInsights' | 'applications' | 'conclusion';

export interface JournalOutput {
  experience: string;
  feelings: string;
  keyInsights: string;
  applications: string;
  conclusion: string;
}

export interface GeneratedJournal {
  id: string;
  subjectId: string;
  subjectName: string;
  moduleId: string;
  moduleName: string;
  moduleNumber: string;
  journal: JournalOutput;
  perspective: {
    experience: string;
    feelings: string;
    keyInsights: string;
    applications: string;
    conclusion: string;
  };
  timestamp: number;
}

export interface VariationPerspective {
  experience: string;
  feelings: string;
  keyInsights: string;
  applications: string;
  conclusion: string;
}
