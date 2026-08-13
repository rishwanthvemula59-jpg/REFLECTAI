import { useState, useCallback, useEffect } from 'react';
import { SUBJECTS, getSubjectById, getModuleById } from '../data/syllabus';
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
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('');
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

  // Save history to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('reflectai-history', JSON.stringify(generationHistory.slice(0, 20)));
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
      setError('Please select a subject first.');
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

    // Animate generation progress steps
    const stepInterval = setInterval(() => {
      setCurrentStepIndex(prev => {
        if (prev < GENERATION_STEPS.length - 1) return prev + 1;
        return prev;
      });
    }, 600);

    try {
      const provider = getAIProvider();
      const journalResult = await provider.generateJournal(subject, module, generationHistory);

      clearInterval(stepInterval);
      setCurrentStepIndex(GENERATION_STEPS.length - 1);

      // Brief delay for visual transition smoothness
      await new Promise(r => setTimeout(r, 400));

      setCurrentJournal(journalResult);
      setGenerationHistory(prev => [journalResult, ...prev]);
      setIsGenerating(false);
      showToast('Journal generated successfully!');

      // Gentle celebratory micro-interaction
      try {
        confetti({
          particleCount: 25,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch {
        // ignore if canvas unavailable
      }
    } catch (err: any) {
      clearInterval(stepInterval);
      setIsGenerating(false);
      setError('We couldn\'t generate your journal right now. Please try again.');
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
      showToast('Full journal copied to clipboard!');
      try {
        confetti({ particleCount: 40, spread: 70, origin: { y: 0.8 } });
      } catch {}
    } else {
      showToast('Failed to copy full journal');
    }
  }, [currentJournal, showToast]);

  const currentSubjectObj = getSubjectById(selectedSubjectId);
  const currentModuleObj = selectedSubjectId ? getModuleById(selectedSubjectId, selectedModuleId) : undefined;

  return {
    subjects: SUBJECTS,
    selectedSubjectId,
    selectedModuleId,
    currentSubjectObj,
    currentModuleObj,
    isGenerating,
    currentStepIndex,
    currentJournal,
    error,
    toastMessage,
    selectSubject,
    selectModule,
    handleGenerate,
    handleRegenerate,
    copySectionText,
    copyAllText,
    dismissToast: () => setToastMessage(null),
  };
}
