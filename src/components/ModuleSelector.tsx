import React, { useState } from 'react';
import type { Subject } from '../types/syllabus';
import { ChevronDown, BookOpen, Layers, Lock, Check } from 'lucide-react';

interface ModuleSelectorProps {
  subject?: Subject;
  selectedModuleId: string;
  onSelectModule: (moduleId: string) => void;
}

export const ModuleSelector: React.FC<ModuleSelectorProps> = ({
  subject,
  selectedModuleId,
  onSelectModule,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedModule = subject?.modules.find(m => m.id === selectedModuleId);

  if (!subject) {
    return (
      <div className="bg-slate-100/70 rounded-3xl p-6 sm:p-8 border border-dashed border-slate-300 transition-colors flex flex-col items-center justify-center text-center min-h-[220px]">
        <div className="w-12 h-12 rounded-2xl bg-slate-200/60 flex items-center justify-center text-slate-400 mb-3">
          <Lock className="w-6 h-6" />
        </div>
        <div className="flex items-center gap-2 mb-1">
          <span className="px-3 py-1 rounded-full bg-slate-200 text-slate-500 text-xs font-extrabold uppercase">
            STEP 02
          </span>
          <span className="text-xs font-bold text-slate-400">Select Module</span>
        </div>
        <h3 className="text-lg font-bold text-slate-700 mb-1">
          Select a Subject First
        </h3>
        <p className="text-xs text-slate-500 max-w-sm">
          Please pick a subject in Step 1 above to load its 10 syllabus modules.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80 transition-colors relative z-20">
      
      {/* Header Badge & Title */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-extrabold uppercase tracking-wider">
            STEP 02
          </span>
          <span className="text-xs font-semibold text-slate-400">
            {subject.name}
          </span>
        </div>
        <span className="text-xs font-semibold text-purple-600 flex items-center gap-1">
          <Layers className="w-3.5 h-3.5" /> 10 Modules Ready
        </span>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mb-2">
        Select Module
      </h2>
      <p className="text-sm text-slate-600 mb-6">
        Choose the exact syllabus module you want ReflectAI to analyze and reflect on.
      </p>

      {/* Selected Module Button / Trigger */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(prev => !prev)}
          className={`w-full p-4 sm:p-5 rounded-2xl border text-left flex items-center justify-between transition-all duration-200 ${
            selectedModule
              ? 'bg-purple-50/80 border-purple-500 shadow-md ring-2 ring-purple-500/20'
              : 'bg-slate-50 border-slate-200 hover:border-slate-300'
          }`}
        >
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-purple-100 text-purple-600 mt-0.5">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              {selectedModule ? (
                <>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-extrabold text-purple-700 uppercase tracking-wider bg-purple-100 px-2 py-0.5 rounded-md">
                      {selectedModule.number}
                    </span>
                    <span className="text-base font-bold text-slate-900">
                      {selectedModule.name}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-1 italic mt-1">
                    "{selectedModule.syllabusPreview}"
                  </p>
                </>
              ) : (
                <>
                  <span className="text-base font-semibold text-slate-500">
                    Click to choose a module...
                  </span>
                  <p className="text-xs text-slate-400 mt-0.5">
                    10 modules available for {subject.name}
                  </p>
                </>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </div>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden z-30 max-h-[380px] overflow-y-auto divide-y divide-slate-100 animate-in fade-in slide-in-from-top-2 duration-200">
            {subject.modules.map(mod => {
              const isSelected = mod.id === selectedModuleId;
              return (
                <button
                  key={mod.id}
                  type="button"
                  onClick={() => {
                    onSelectModule(mod.id);
                    setIsOpen(false);
                  }}
                  className={`w-full p-4 text-left transition-colors flex items-start justify-between gap-3 ${
                    isSelected
                      ? 'bg-purple-50 text-purple-950 font-medium'
                      : 'hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-purple-600 bg-purple-100 px-2 py-0.5 rounded">
                        {mod.number}
                      </span>
                      <span className="text-sm font-bold text-slate-900">
                        {mod.name}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-1 italic pl-1">
                      "{mod.syllabusPreview}"
                    </p>
                  </div>

                  {isSelected && (
                    <div className="p-1 rounded-full bg-purple-600 text-white mt-1">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>

    </div>
  );
};
