import React from 'react';
import { Sparkles, FileText, ArrowUp } from 'lucide-react';

export const EmptyState: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/80 text-center max-w-xl mx-auto my-8 transition-colors relative overflow-hidden">
      
      <div className="w-16 h-16 rounded-3xl bg-violet-100 text-violet-600 flex items-center justify-center mx-auto mb-6 shadow-inner relative">
        <FileText className="w-8 h-8 text-violet-600" />
        <Sparkles className="w-4 h-4 text-amber-400 absolute -top-1 -right-1 animate-bounce" />
      </div>

      <h3 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">
        Your reflection starts here.
      </h3>

      <p className="text-sm text-slate-500 max-w-md mx-auto mb-6 leading-relaxed">
        Select a subject and module above, then click <strong className="text-violet-600 font-semibold">Generate Journal</strong> to craft your 5-section reflection (constrained to 350–400 words).
      </p>

      <div className="inline-flex items-center gap-2 text-xs font-semibold text-violet-600 bg-violet-50 px-4 py-2 rounded-full border border-violet-200">
        <ArrowUp className="w-3.5 h-3.5 animate-bounce" />
        <span>Step 1 & Step 2 Selectors Above</span>
      </div>

    </div>
  );
};
