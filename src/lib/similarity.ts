import type { JournalOutput, GeneratedJournal } from '../types/syllabus';

/**
 * Extracts normalized word n-grams (bigrams) from text.
 */
function extractGrams(text: string, n: number = 2): Set<string> {
  const words = text.toLowerCase().replace(/[^a-z0-9\s]/g, '').split(/\s+/).filter(Boolean);
  const grams = new Set<string>();
  for (let i = 0; i <= words.length - n; i++) {
    grams.add(words.slice(i, i + n).join(' '));
  }
  return grams;
}

/**
 * Calculates Jaccard similarity index between two texts based on bigrams.
 */
export function calculateTextSimilarity(text1: string, text2: string): number {
  const grams1 = extractGrams(text1, 2);
  const grams2 = extractGrams(text2, 2);

  if (grams1.size === 0 || grams2.size === 0) return 0;

  let intersection = 0;
  for (const g of grams1) {
    if (grams2.has(g)) intersection++;
  }

  const union = grams1.size + grams2.size - intersection;
  return union === 0 ? 0 : intersection / union;
}

/**
 * Calculates overall journal similarity comparing all 5 sections.
 */
export function calculateJournalSimilarity(j1: JournalOutput, j2: JournalOutput): number {
  const simExp = calculateTextSimilarity(j1.experience, j2.experience);
  const simFeel = calculateTextSimilarity(j1.feelings, j2.feelings);
  const simIns = calculateTextSimilarity(j1.keyInsights, j2.keyInsights);
  const simApp = calculateTextSimilarity(j1.applications, j2.applications);
  const simConc = calculateTextSimilarity(j1.conclusion, j2.conclusion);

  return (simExp + simFeel + simIns + simApp + simConc) / 5;
}

/**
 * Checks whether a candidate journal output is too similar to recent generation history.
 * Default threshold is 0.60 (60% similarity).
 */
export function isTooSimilar(
  candidate: JournalOutput,
  history: GeneratedJournal[],
  threshold: number = 0.60
): boolean {
  if (!history || history.length === 0) return false;

  for (const pastItem of history) {
    const similarity = calculateJournalSimilarity(candidate, pastItem.journal);
    if (similarity >= threshold) {
      return true;
    }
  }

  return false;
}
