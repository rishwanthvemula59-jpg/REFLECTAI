import { useState, useCallback, useEffect, useMemo } from 'react';
import {
  ACADEMIC_YEARS,
  getSubjectsByYearAndTerm,
  getSubjectById,
  getModuleById,
  getTermById,
} from '../data/syllabus';
import type { GeneratedJournal } from '../types/syllabus';
import { getAIProvider } from '../lib/aiProvider';
import { copyToClipboard, formatFullJournal } from '../lib/clipboard';
import confetti from 'canvas-confetti';

export const GENERATION_STEPS = [
  'Analyzing module syllabus...',
  'Selecting key core concepts...',
  'Creating student-perspective reflection...',
  'Verifying semantic uniqueness...',
  'Finalizing journal output...'
];

export function useJournalGenerator() {
  const [selectedYearId, setSelectedYearId] = useState<string>('year-1');
  const [selectedTermId, setSelectedTermId] = useState<string>('term-1');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('python-prog');
  const [selectedModuleId, setSelectedModuleId] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [currentJournal, setCurrentJournal] = useState<GeneratedJournal | null>(null);
  const [generationHistory, setGenerationHistory] = useState<GeneratedJournal[]>(() => {
    try {
      const saved = localStorage.getItem('reflectai-history');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [error, setError] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Active subjects filtered by Year & Term
  const availableSubjects = useMemo(() => {
    return getSubjectsByYearAndTerm(selectedYearId, selectedTermId);
  }, [selectedYearId, selectedTermId]);

  const currentYearObj = useMemo(() => {
    return ACADEMIC_YEARS.find(y => y.id === selectedYearId);
  }, [selectedYearId]);

  const currentTermObj = useMemo(() => {
    return getTermById(selectedYearId, selectedTermId);
  }, [selectedYearId, selectedTermId]);

  // Persist history to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('reflectai-history', JSON.stringify(generationHistory.slice(0, 30)));
    } catch (err) {
      console.error('Failed to persist history:', err);
    }
  }, [generationHistory]);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(prev => (prev === msg ? null : prev));
    }, 3000);
  }, []);

  const selectYear = useCallback((yearId: string) => {
    setSelectedYearId(yearId);
    const targetYear = ACADEMIC_YEARS.find(y => y.id === yearId);
    const firstTermId = targetYear?.terms[0]?.id || (yearId === 'year-2' ? 'term-2' : 'term-1');
    setSelectedTermId(firstTermId);

    const termSubjects = getSubjectsByYearAndTerm(yearId, firstTermId);
    setSelectedSubjectId(termSubjects.length > 0 ? termSubjects[0].id : '');
    setSelectedModuleId('');
    setError(null);
  }, []);

  const selectTerm = useCallback((termId: string) => {
    setSelectedTermId(termId);
    const termSubjects = getSubjectsByYearAndTerm(selectedYearId, termId);
    setSelectedSubjectId(termSubjects.length > 0 ? termSubjects[0].id : '');
    setSelectedModuleId('');
    setError(null);
  }, [selectedYearId]);

  const selectSubject = useCallback((subjectId: string) => {
    setSelectedSubjectId(subjectId);
    setSelectedModuleId(''); // Reset dependent module selection when subject changes!
    setError(null);
  }, []);

  const selectModule = useCallback((moduleId: string) => {
    setSelectedModuleId(moduleId);
    setError(null);
  }, []);

  const handleGenerate = useCallback(async () => {
    if (!selectedSubjectId) {
      setError('Please select an active subject first.');
      return;
    }
    if (!selectedModuleId) {
      setError('Please select a module first.');
      return;
    }

    const subject = getSubjectById(selectedSubjectId);
    const module = getModuleById(selectedSubjectId, selectedModuleId);

    if (!subject || !module) {
      setError('Invalid subject or module selection.');
      return;
    }

    setIsGenerating(true);
    setError(null);
    setCurrentStepIndex(0);

    // Animate generation progress steps quickly and smoothly
    const stepInterval = setInterval(() => {
      setCurrentStepIndex(prev => {
        if (prev < GENERATION_STEPS.length - 1) return prev + 1;
        return prev;
      });
    }, 80);

    try {
      const provider = getAIProvider();
      const journalResult = await provider.generateJournal(subject, module, generationHistory);

      clearInterval(stepInterval);
      setCurrentStepIndex(GENERATION_STEPS.length - 1);

      // Snappy delay for visual transition smoothness
      await new Promise(r => setTimeout(r, 100));

      setCurrentJournal(journalResult);
      setGenerationHistory(prev => [journalResult, ...prev]);
      setIsGenerating(false);
      showToast('Unique journal reflection generated!');

      // Celebratory micro-interaction
      try {
        confetti({
          particleCount: 30,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch {
        // ignore if canvas unavailable
      }
    } catch (err: any) {
      clearInterval(stepInterval);
      setIsGenerating(false);
      setError('Could not generate reflection right now. Please try again.');
      console.error('Generation error:', err);
    }
  }, [selectedSubjectId, selectedModuleId, generationHistory, showToast]);

  const handleRegenerate = useCallback(async () => {
    if (!currentJournal) return;
    await handleGenerate();
  }, [currentJournal, handleGenerate]);

  const copySectionText = useCallback(async (sectionName: string, text: string) => {
    const success = await copyToClipboard(text);
    if (success) {
      showToast(`${sectionName} copied!`);
    } else {
      showToast('Failed to copy to clipboard');
    }
  }, [showToast]);

  const copyAllText = useCallback(async () => {
    if (!currentJournal) return;
    const formatted = formatFullJournal(currentJournal);
    const success = await copyToClipboard(formatted);
    if (success) {
      showToast('Full 5-section journal copied!');
      try {
        confetti({ particleCount: 45, spread: 75, origin: { y: 0.8 } });
      } catch {}
    } else {
      showToast('Failed to copy full journal');
    }
  }, [currentJournal, showToast]);

  const currentSubjectObj = getSubjectById(selectedSubjectId);
  const currentModuleObj = selectedSubjectId ? getModuleById(selectedSubjectId, selectedModuleId) : undefined;

  return {
    academicYears: ACADEMIC_YEARS,
    selectedYearId,
    selectedTermId,
    currentYearObj,
    currentTermObj,
    subjects: availableSubjects,
    selectedSubjectId,
    selectedModuleId,
    currentSubjectObj,
    currentModuleObj,
    isGenerating,
    currentStepIndex,
    currentJournal,
    error,
    toastMessage,
    selectYear,
    selectTerm,
    selectSubject,
    selectModule,
    handleGenerate,
    handleRegenerate,
    copySectionText,
    copyAllText,
    dismissToast: () => setToastMessage(null),
  };
}
