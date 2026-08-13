import React from 'react';
import { Wand2, ArrowRight } from 'lucide-react';

interface GenerateButtonProps {
  isDisabled: boolean;
  isGenerating: boolean;
  onGenerate: () => void;
}

export const GenerateButton: React.FC<GenerateButtonProps> = ({
  isDisabled,
  isGenerating,
  onGenerate,
}) => {
  return (
    <div className="flex flex-col items-center justify-center my-8">
      <button
        type="button"
        disabled={isDisabled || isGenerating}
        onClick={onGenerate}
        className={`w-full max-w-md py-4 px-8 rounded-2xl text-base font-extrabold flex items-center justify-center gap-3 transition-all duration-300 transform shadow-xl relative overflow-hidden group ${
          isDisabled || isGenerating
            ? 'bg-slate-200 text-slate-400 cursor-not-allowed border border-slate-300 shadow-none'
            : 'bg-gradient-to-r from-violet-700 via-purple-700 to-indigo-700 hover:from-violet-600 hover:via-purple-600 hover:to-indigo-600 text-white shadow-violet-600/30 hover:shadow-violet-600/50 hover:-translate-y-1 active:translate-y-0'
        }`}
      >
        {!isDisabled && !isGenerating && (
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
        )}

        <Wand2 className={`w-5 h-5 text-amber-300 ${isGenerating ? 'animate-spin' : 'group-hover:rotate-12 transition-transform'}`} />

        <span>{isGenerating ? 'Reflecting on your module...' : 'Generate Journal'}</span>

        {!isDisabled && !isGenerating && (
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        )}
      </button>

      {isDisabled && (
        <span className="text-xs font-medium text-slate-400 mt-2">
          Select both subject & module above to enable generation
        </span>
      )}
    </div>
  );
};
