import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, BookOpen, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

interface HeroProps {
  onStartGenerator: () => void;
  onLearnMore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartGenerator, onLearnMore }) => {
  const [activePreviewSection, setActivePreviewSection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePreviewSection(prev => (prev + 1) % 5);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  const previewSections = [
    { title: 'Experience', snippet: 'While analyzing stack operations, I explored array-based stack pushing and popping...' },
    { title: 'Feelings', snippet: 'Initially LIFO order seemed straightforward, but practical implementation deepened my grasp...' },
    { title: 'Key Insights', snippet: 'Top-of-stack pointer bounds prevent overflow and maintain algorithmic efficiency...' },
    { title: 'Applications', snippet: 'Essential for call-stack execution, undo mechanisms, and expression evaluation...' },
    { title: 'Conclusion', snippet: 'Building stacks from scratch consolidated my C++ data structures foundation...' },
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-28 bg-slate-50 transition-colors">
      
      {/* Subtle Soft Background Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-violet-500/10 via-purple-500/10 to-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT: MAIN HERO TEXT */}
          <div className="lg:col-span-7 flex flex-col text-center lg:text-left items-center lg:items-start">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-100 border border-violet-200 text-violet-700 text-xs font-bold tracking-wide mb-6">
              <Sparkles className="w-3.5 h-3.5 text-violet-600" />
              <span>AI-Powered Reflections, Built Around Your Learning.</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
              Turn Your Syllabus Into a{' '}
              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Reflective Journal.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mb-8">
              Select your subject and module. ReflectAI creates a natural, copy-paste-ready reflection in seconds—grounded strictly in your actual syllabus and constrained to <strong className="text-violet-700 font-semibold">350–400 words</strong>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onStartGenerator}
                className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-violet-600 hover:bg-violet-700 rounded-2xl shadow-lg shadow-violet-600/25 hover:shadow-violet-600/35 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2.5 group"
              >
                <Sparkles className="w-5 h-5 text-amber-300 group-hover:rotate-12 transition-transform" />
                <span>Generate My Journal</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onLearnMore}
                className="w-full sm:w-auto px-7 py-4 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <BookOpen className="w-4 h-4 text-slate-500" />
                <span>How It Works</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-semibold text-slate-500 border-t border-slate-200 pt-6 w-full">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Zero Chat Forms</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-violet-500" />
                <span>100% Syllabus Grounded</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-500" />
                <span>350–400 Words Guaranteed</span>
              </div>
            </div>

          </div>

          {/* RIGHT: DESKTOP FLOATING PREVIEW CARD */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl border border-slate-200 relative animate-float-preview">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-violet-600 animate-ping" />
                  <span className="text-xs font-bold uppercase tracking-wider text-violet-600">
                    AI Reflective Journal
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-slate-400">
                  Live Preview
                </span>
              </div>

              {/* Subject & Module Badge */}
              <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/60 mb-5">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Subject
                </div>
                <div className="text-sm font-bold text-slate-900">
                  Data Structures Using C++
                </div>
                <div className="text-[11px] font-semibold text-violet-600 mt-1">
                  Module VIII — Stacks
                </div>
              </div>

              {/* 5 Miniature Sections Preview */}
              <div className="space-y-2.5">
                {previewSections.map((sec, idx) => {
                  const isActive = idx === activePreviewSection;
                  return (
                    <div
                      key={sec.title}
                      className={`p-3 rounded-xl border transition-all duration-300 ${
                        isActive
                          ? 'bg-violet-50 border-violet-300 shadow-sm translate-x-1'
                          : 'bg-slate-50/50 border-slate-100 opacity-70'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-xs font-bold ${isActive ? 'text-violet-700' : 'text-slate-700'}`}>
                          {sec.title}
                        </span>
                        {isActive && (
                          <span className="text-[10px] font-bold text-violet-600 bg-violet-100 px-2 py-0.5 rounded-full">
                            Active
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-600 line-clamp-1 leading-snug">
                        {sec.snippet}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Card Footer Tag */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                <span>372 Words Generated</span>
                <span className="text-emerald-600 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Direct Paste Ready
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
