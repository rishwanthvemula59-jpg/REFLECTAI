import React from 'react';
import { Sparkles, FileText, BookOpen } from 'lucide-react';

interface NavbarProps {
  onNavigateToGenerator?: () => void;
  onNavigateToHowItWorks?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigateToGenerator,
  onNavigateToHowItWorks,
}) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* LOGO */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-tr from-violet-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-violet-500/20 group-hover:scale-105 transition-transform duration-200">
            <FileText className="w-5 h-5 text-white" />
            <Sparkles className="w-4 h-4 absolute -top-1.5 -right-1.5 text-amber-300 animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-2xl tracking-tight text-slate-900 flex items-center gap-1">
              Reflect<span className="text-violet-600">AI</span>
            </span>
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 -mt-1 hidden sm:inline">
              Powered by Intelligence. Built for Learning.
            </span>
          </div>
        </a>

        {/* NAVIGATION LINKS */}
        <nav className="flex items-center gap-3 sm:gap-6">
          <button
            onClick={onNavigateToHowItWorks}
            className="text-xs sm:text-sm font-semibold text-slate-600 hover:text-violet-600 transition-colors px-3 py-1.5 rounded-xl hover:bg-slate-100 flex items-center gap-1.5"
          >
            <BookOpen className="w-4 h-4 text-slate-400" />
            <span className="hidden sm:inline">How It Works</span>
          </button>

          <button
            onClick={onNavigateToGenerator}
            className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-violet-600 transition-colors px-3 py-1.5 rounded-xl hover:bg-slate-100"
          >
            Generator
          </button>

          {/* CTA BUTTON */}
          <button
            onClick={onNavigateToGenerator}
            className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-violet-600 hover:bg-violet-700 rounded-xl shadow-md shadow-violet-600/20 hover:shadow-violet-600/30 transition-all transform hover:-translate-y-0.5"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Generate Journal</span>
          </button>
        </nav>

      </div>
    </header>
  );
};
