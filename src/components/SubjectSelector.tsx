import React, { useState } from 'react';
import type { Subject } from '../types/syllabus';
import { Search, Check, BarChart3, BrainCircuit, Code2, Database, BookOpen } from 'lucide-react';

interface SubjectSelectorProps {
  subjects: Subject[];
  selectedSubjectId: string;
  onSelectSubject: (id: string) => void;
}

export const SubjectSelector: React.FC<SubjectSelectorProps> = ({
  subjects,
  selectedSubjectId,
  onSelectSubject,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const getSubjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-violet-600" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-purple-600" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-indigo-600" />;
      case 'Database':
        return <Database className="w-5 h-5 text-blue-600" />;
      default:
        return <BookOpen className="w-5 h-5 text-violet-600" />;
    }
  };

  const filteredSubjects = subjects.filter(s =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    s.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80 transition-colors">
      
      {/* Header Badge & Title */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-extrabold uppercase tracking-wider">
            STEP 01
          </span>
          <span className="text-xs font-semibold text-slate-400">
            Syllabus Foundation
          </span>
        </div>
        <span className="text-xs font-semibold text-slate-500">
          {subjects.length} Enrolled Courses
        </span>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mb-2">
        Select Subject
      </h2>
      <p className="text-sm text-slate-600 mb-6">
        Choose your course syllabus to unlock its corresponding 10 modules.
      </p>

      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Search subject by title or course code..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all"
        />
      </div>

      {/* Subject Options Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredSubjects.map(subject => {
          const isSelected = subject.id === selectedSubjectId;

          return (
            <button
              key={subject.id}
              onClick={() => onSelectSubject(subject.id)}
              className={`p-5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between relative group ${
                isSelected
                  ? 'bg-violet-50/90 border-violet-600 shadow-md shadow-violet-500/10 ring-2 ring-violet-500/20'
                  : 'bg-slate-50/60 border-slate-200/80 hover:bg-slate-100/80 hover:border-slate-300'
              }`}
            >
              <div className="flex items-start justify-between mb-3 w-full">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-white shadow-sm' : 'bg-slate-200/60'}`}>
                    {getSubjectIcon(subject.iconName)}
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-violet-600 uppercase tracking-wider block">
                      {subject.code}
                    </span>
                    <span className="text-xs font-medium text-slate-500">
                      {subject.category}
                    </span>
                  </div>
                </div>

                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center border transition-all ${
                    isSelected
                      ? 'bg-violet-600 border-violet-600 text-white'
                      : 'border-slate-300 bg-transparent group-hover:border-slate-400'
                  }`}
                >
                  {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
              </div>

              <h3 className={`text-base font-bold mb-2 transition-colors ${isSelected ? 'text-violet-950' : 'text-slate-900'}`}>
                {subject.name}
              </h3>

              <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                {subject.description}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                <span>{subject.modules.length} Modules</span>
                <span className={isSelected ? 'text-violet-600 font-bold' : ''}>
                  {isSelected ? 'Selected' : 'Click to select'}
                </span>
              </div>
            </button>
          );
        })}
      </div>

    </div>
  );
};
