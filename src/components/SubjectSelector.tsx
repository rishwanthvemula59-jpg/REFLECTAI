import React, { useState } from 'react';
import type { Subject, AcademicYear } from '../types/syllabus';
import {
  Search,
  Check,
  BarChart3,
  BrainCircuit,
  Code2,
  Database,
  BookOpen,
  GraduationCap,
  Calendar,
  CalendarClock,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface SubjectSelectorProps {
  academicYears: AcademicYear[];
  selectedYearId: string;
  selectedTermId: string;
  onSelectYear: (yearId: string) => void;
  onSelectTerm: (termId: string) => void;
  subjects: Subject[];
  selectedSubjectId: string;
  onSelectSubject: (id: string) => void;
}

export const SubjectSelector: React.FC<SubjectSelectorProps> = ({
  academicYears,
  selectedYearId,
  selectedTermId,
  onSelectYear,
  onSelectTerm,
  subjects,
  selectedSubjectId,
  onSelectSubject,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const activeYear = academicYears.find(y => y.id === selectedYearId) || academicYears[0];
  const activeTerm = activeYear?.terms.find(t => t.id === selectedTermId) || activeYear?.terms[0];

  const getSubjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-emerald-600" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-violet-600" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-cyan-600" />;
      case 'Database':
        return <Database className="w-5 h-5 text-indigo-600" />;
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
      
      {/* Step Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-extrabold uppercase tracking-wider">
            STEP 01
          </span>
          <span className="text-xs font-semibold text-slate-400">
            Academic Year & Subject Selection
          </span>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
          {subjects.length} Course{subjects.length === 1 ? '' : 's'} in {activeTerm?.name || 'Selected Term'}
        </span>
      </div>

      {/* ACADEMIC YEAR TOGGLE BAR */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2.5">
          <GraduationCap className="w-4 h-4 text-violet-600" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Select Academic Year
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 p-1.5 bg-slate-100/80 rounded-2xl border border-slate-200/60">
          {academicYears.map(year => {
            const isYearSelected = year.id === selectedYearId;
            return (
              <button
                key={year.id}
                type="button"
                onClick={() => onSelectYear(year.id)}
                className={`py-3 px-4 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 relative ${
                  isYearSelected
                    ? 'bg-white text-violet-900 shadow-sm border border-slate-200/70'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                <span>{year.name}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                    isYearSelected
                      ? year.id === 'year-1'
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-amber-100 text-amber-700'
                      : 'bg-slate-200 text-slate-500'
                  }`}
                >
                  {year.badge}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* TERM SELECTION PILLS */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2.5">
          <Calendar className="w-4 h-4 text-violet-600" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Academic Term
          </span>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {activeYear.terms.map(term => {
            const isTermSelected = term.id === selectedTermId;
            return (
              <button
                key={term.id}
                type="button"
                onClick={() => onSelectTerm(term.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border ${
                  isTermSelected
                    ? 'bg-violet-600 text-white border-violet-600 shadow-sm shadow-violet-500/20'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span>{term.name}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-md font-semibold ${
                    isTermSelected
                      ? 'bg-violet-700/60 text-violet-100'
                      : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {term.statusBadge}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* MAIN CONTENT AREA: SUBJECT LIST OR EMPTY 2ND YEAR TERM 2 NOTIFICATION */}
      {selectedYearId === 'year-2' || subjects.length === 0 ? (
        /* 2ND YEAR TERM 2 PENDING NOTIFICATION CARD */
        <div className="mt-4 p-8 rounded-2xl bg-gradient-to-br from-amber-50/60 via-slate-50 to-indigo-50/40 border border-amber-200/80 text-center relative overflow-hidden">
          <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-4 shadow-sm">
            <CalendarClock className="w-7 h-7" />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/90 text-amber-800 text-xs font-bold uppercase tracking-wide mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>2nd Year • Term 2 (Upcoming)</span>
          </div>

          <h3 className="text-xl font-extrabold text-slate-900 mb-2">
            Term 2 Syllabus Will Be Added Soon
          </h3>

          <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed mb-6">
            All previous subjects have been cleared. Term 2 subjects and syllabus will be added right after the commencement of Term 2.
          </p>

          <button
            type="button"
            onClick={() => onSelectYear('year-1')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-violet-600 text-white text-xs font-bold hover:bg-violet-700 transition-all shadow-md shadow-violet-500/20 group"
          >
            <span>Switch to 1st Year (Term 1) to generate journals</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      ) : (
        /* 1ST YEAR TERM 1 SUBJECT SELECTION */
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Select Course Subject
              </h2>
              <p className="text-xs text-slate-500">
                Choose your enrolled course to load all 10 syllabus modules.
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search subject by title, course code, or category..."
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
      )}

    </div>
  );
};
