import React from 'react';
import { GENERATION_STEPS } from '../hooks/useJournalGenerator';
import { Sparkles, CheckCircle2, Loader2, BrainCircuit } from 'lucide-react';

interface GenerationLoaderProps {
  currentStepIndex: number;
}

export const GenerationLoader: React.FC<GenerationLoaderProps> = ({ currentStepIndex }) => {
  const progressPercent = Math.min(100, Math.round(((currentStepIndex + 1) / GENERATION_STEPS.length) * 100));

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-violet-200 max-w-2xl mx-auto my-8 relative overflow-hidden transition-all">
      
      {/* Background Shimmer Glow */}
      <div className="absolute inset-0 shimmer-loading pointer-events-none opacity-40" />

      <div className="relative z-10 flex flex-col items-center text-center">
        
        {/* Animated AI Icon Container */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-violet-600 to-purple-500 flex items-center justify-center text-white shadow-xl shadow-violet-500/30 mb-6 animate-bounce">
          <BrainCircuit className="w-8 h-8 animate-pulse text-white" />
        </div>

        <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
          <span>ReflectAI is thinking</span>
          <Sparkles className="w-5 h-5 text-amber-400 animate-spin" />
        </h3>

        <p className="text-sm font-medium text-slate-500 max-w-md mb-8">
          Analyzing your selected syllabus module and crafting a fresh, multi-perspective reflection...
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 rounded-full h-3 mb-8 overflow-hidden p-0.5 border border-slate-200">
          <div
            className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Steps List */}
        <div className="w-full space-y-3 text-left max-w-md bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80">
          {GENERATION_STEPS.map((stepText, idx) => {
            const isDone = idx < currentStepIndex;
            const isCurrent = idx === currentStepIndex;

            return (
              <div
                key={stepText}
                className={`flex items-center gap-3 transition-all duration-300 ${
                  isCurrent
                    ? 'text-violet-700 font-bold scale-[1.01]'
                    : isDone
                    ? 'text-slate-600 font-medium opacity-80'
                    : 'text-slate-400 font-normal opacity-50'
                }`}
              >
                {isDone ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                ) : isCurrent ? (
                  <Loader2 className="w-4 h-4 text-violet-600 animate-spin shrink-0" />
                ) : (
                  <div className="w-4 h-4 rounded-full border border-slate-300 shrink-0" />
                )}

                <span className="text-xs sm:text-sm">{stepText}</span>
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
};
