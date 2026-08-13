import type { GeneratedJournal } from '../types/syllabus';

/**
 * Formats a complete generated journal into clean plain-text suitable for direct pasting
 * into Word / Google Docs / college journal submissions.
 */
export function formatFullJournal(item: GeneratedJournal): string {
  const { journal } = item;
  return `Experience

${journal.experience}

Feelings

${journal.feelings}

Key Insights

${journal.keyInsights}

Applications

${journal.applications}

Conclusion

${journal.conclusion}`;
}

/**
 * Copies plain text to clipboard using standard Navigator API with fallback.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback for older browsers or non-secure contexts
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      textArea.remove();
      return successful;
    }
  } catch (err) {
    console.error('Failed to copy to clipboard:', err);
    return false;
  }
}
