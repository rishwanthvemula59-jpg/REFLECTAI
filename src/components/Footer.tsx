import React from 'react';
import { FileText, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigateHome: () => void;
  onNavigateGenerator: () => void;
  onNavigateHowItWorks: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateHome,
  onNavigateGenerator,
  onNavigateHowItWorks,
}) => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800 text-center md:text-left">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-violet-600 to-purple-500 flex items-center justify-center text-white">
                <FileText className="w-4 h-4" />
                <Sparkles className="w-3 h-3 absolute -top-1 -right-1 text-amber-300" />
              </div>
              <span className="font-extrabold text-xl tracking-tight">
                Reflect<span className="text-violet-400">AI</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium">
              AI-Powered Reflections, Built Around Your Learning.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-xs font-semibold text-slate-300">
            <button onClick={onNavigateHome} className="hover:text-violet-400 transition-colors">
              Home
            </button>
            <button onClick={onNavigateGenerator} className="hover:text-violet-400 transition-colors">
              Generator
            </button>
            <button onClick={onNavigateHowItWorks} className="hover:text-violet-400 transition-colors">
              How It Works
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          <span className="font-semibold text-slate-300">Your Syllabus. Your Learning. Your Reflection.</span>
          <span className="font-semibold text-slate-300">
            Powered by Intelligence. Built for Learning.
          </span>
        </div>

      </div>
    </footer>
  );
};
