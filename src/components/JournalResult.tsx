import React from 'react';
import type { GeneratedJournal } from '../types/syllabus';
import { JournalSectionCard } from './JournalSectionCard';
import { countTotalJournalWords } from '../lib/aiProvider';
import { Copy, RefreshCw, CheckCircle2, BookOpen, FileCheck2 } from 'lucide-react';

interface JournalResultProps {
  journal: GeneratedJournal;
  isRegenerating: boolean;
  onCopySection: (title: string, text: string) => void;
  onCopyAll: () => void;
  onRegenerate: () => void;
}

export const JournalResult: React.FC<JournalResultProps> = ({
  journal,
  isRegenerating,
  onCopySection,
  onCopyAll,
  onRegenerate,
}) => {
  const { journal: content } = journal;
  const totalWords = countTotalJournalWords(content);
  const isWithinConstraint = totalWords >= 350 && totalWords <= 400;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-4xl mx-auto">
      
      {/* Result Container Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80 transition-colors">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Fresh Reflection</span>
              </div>

              {/* TOTAL WORDS BADGE */}
              <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold tracking-wider ${
                isWithinConstraint
                  ? 'bg-violet-100 text-violet-700 border border-violet-200'
                  : 'bg-amber-100 text-amber-700'
              }`}>
                <FileCheck2 className="w-3.5 h-3.5 text-violet-600" />
                <span>TOTAL WORDS: {totalWords} WORDS</span>
                <span className="text-[10px] font-medium opacity-80">(Target: 350–400)</span>
              </div>
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Your Reflective Journal
            </h2>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-600 mt-2 font-medium">
              <span className="flex items-center gap-1.5 font-bold text-violet-700">
                <BookOpen className="w-4 h-4 text-violet-500" />
                {journal.subjectName}
              </span>
              <span>•</span>
              <span className="font-semibold text-slate-800">
                {journal.moduleNumber}: {journal.moduleName}
              </span>
            </div>
          </div>

          {/* Top Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onCopyAll}
              type="button"
              className="px-5 py-3 rounded-2xl bg-violet-600 hover:bg-violet-700 text-white text-xs font-extrabold shadow-lg shadow-violet-600/20 hover:shadow-violet-600/30 transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <Copy className="w-4 h-4" />
              <span>COPY ALL</span>
            </button>

            <button
              onClick={onRegenerate}
              disabled={isRegenerating}
              type="button"
              className="px-4 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold border border-slate-200 transition-all flex items-center gap-2 disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isRegenerating ? 'animate-spin' : ''}`} />
              <span>Regenerate</span>
            </button>
          </div>

        </div>
      </div>

      {/* 5 Journal Section Cards */}
      <div className="space-y-6">
        <JournalSectionCard
          sectionKey="experience"
          title="Experience"
          subtitle="What happened — the learning experience and class content."
          content={content.experience}
          onCopy={onCopySection}
        />

        <JournalSectionCard
          sectionKey="feelings"
          title="Feelings"
          subtitle="How the learning felt and how my understanding developed."
          content={content.feelings}
          onCopy={onCopySection}
        />

        <JournalSectionCard
          sectionKey="keyInsights"
          title="Key Insights"
          subtitle="What I understood — concepts, principles and connections."
          content={content.keyInsights}
          onCopy={onCopySection}
        />

        <JournalSectionCard
          sectionKey="applications"
          title="Applications"
          subtitle="How I can apply this learning in practical situations."
          content={content.applications}
          onCopy={onCopySection}
        />

        <JournalSectionCard
          sectionKey="conclusion"
          title="Conclusion"
          subtitle="Overall learning, takeaways and future usefulness."
          content={content.conclusion}
          onCopy={onCopySection}
        />
      </div>

    </div>
  );
};
