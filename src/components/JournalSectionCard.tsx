import React, { useState } from 'react';
import { Copy, Check, BookOpen, Heart, Lightbulb, Compass, Award } from 'lucide-react';

interface JournalSectionCardProps {
  sectionKey: 'experience' | 'feelings' | 'keyInsights' | 'applications' | 'conclusion';
  title: string;
  subtitle: string;
  content: string;
  onCopy: (sectionTitle: string, text: string) => void;
}

export const JournalSectionCard: React.FC<JournalSectionCardProps> = ({
  sectionKey,
  title,
  subtitle,
  content,
  onCopy,
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const getSectionIcon = () => {
    switch (sectionKey) {
      case 'experience':
        return <BookOpen className="w-5 h-5 text-violet-600" />;
      case 'feelings':
        return <Heart className="w-5 h-5 text-rose-500" />;
      case 'keyInsights':
        return <Lightbulb className="w-5 h-5 text-amber-500" />;
      case 'applications':
        return <Compass className="w-5 h-5 text-emerald-600" />;
      case 'conclusion':
        return <Award className="w-5 h-5 text-indigo-600" />;
    }
  };

  const handleCopyClick = () => {
    onCopy(title, content);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  const charCount = content.length;
  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80 transition-all duration-300 hover:shadow-2xl hover:border-slate-300 relative group">
      
      {/* Top Header Row */}
      <div className="flex items-start justify-between gap-4 mb-4 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-slate-100">
            {getSectionIcon()}
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              {title}
            </h3>
            <p className="text-xs font-medium text-slate-500 mt-0.5">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Copy Section Button */}
        <button
          onClick={handleCopyClick}
          type="button"
          aria-label={`Copy ${title} section`}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 border ${
            isCopied
              ? 'bg-emerald-50 border-emerald-500 text-emerald-600'
              : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-violet-50 hover:border-violet-300 hover:text-violet-600'
          }`}
        >
          {isCopied ? (
            <>
              <Check className="w-3.5 h-3.5 stroke-[3] text-emerald-500" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Generated Content Text */}
      <div className="text-base text-slate-800 leading-relaxed font-normal whitespace-pre-line mb-4">
        {content}
      </div>

      {/* Card Footer Metadata */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-[11px] font-medium text-slate-400">
        <span>Student Reflection</span>
        <span>{wordCount} words ({charCount} characters)</span>
      </div>

    </div>
  );
};
