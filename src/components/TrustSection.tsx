import React from 'react';
import { RefreshCcw, ShieldCheck, ClipboardCheck, Zap } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const features = [
    {
      title: 'Fresh Every Time',
      description: 'Each generation uses a different perspective matrix and avoids repetitive sentence structures.',
      icon: <RefreshCcw className="w-6 h-6 text-violet-600" />,
    },
    {
      title: 'Syllabus Grounded',
      description: 'Reflections are strictly generated from the exact selected module syllabus—no off-topic hallucinations.',
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
    },
    {
      title: 'Copy Ready',
      description: 'Copy single sections or the complete journal formatted for Microsoft Word & Google Docs.',
      icon: <ClipboardCheck className="w-6 h-6 text-blue-600" />,
    },
    {
      title: '350–400 Words Target',
      description: 'Guaranteed word count constraint to meet typical university journal rubric guidelines.',
      icon: <Zap className="w-6 h-6 text-amber-500" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-extrabold uppercase tracking-wider">
            Academic Engineering
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 mb-4 tracking-tight">
            Your Syllabus. Your Learning. Your Reflection.
          </h2>
          <p className="text-base text-slate-600">
            Engineered specifically to solve weekly reflection assignments with academic precision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map(f => (
            <div
              key={f.title}
              className="bg-slate-50/80 rounded-3xl p-6 border border-slate-200/60 hover:border-violet-300 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-200/60 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {f.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
