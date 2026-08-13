import React from 'react';
import { BookOpen, Layers, Sparkles, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Choose Subject',
      description: 'Pick one of your enrolled courses from Probability & Stats, AI, C++ Data Structures, or Advanced DBMS.',
      icon: <BookOpen className="w-6 h-6 text-violet-600" />,
    },
    {
      number: '02',
      title: 'Choose Module',
      description: 'Select the exact module you want to reflect on. ReflectAI dynamically loads its full syllabus content.',
      icon: <Layers className="w-6 h-6 text-purple-600" />,
    },
    {
      number: '03',
      title: 'Generate & Copy',
      description: 'Receive a fresh 5-section reflection (350–400 words) in seconds. Copy single sections or copy all in one click.',
      icon: <Sparkles className="w-6 h-6 text-amber-500" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-violet-100 text-violet-700 text-xs font-extrabold uppercase tracking-wider">
            Simple Academic Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-4 tracking-tight">
            How ReflectAI Works
          </h2>
          <p className="text-base text-slate-600">
            No complicated forms or AI prompts required. Three simple steps to a complete, submission-ready journal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-black text-slate-200 tracking-wider">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
