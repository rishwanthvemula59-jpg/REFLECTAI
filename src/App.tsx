import { useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SubjectSelector } from './components/SubjectSelector';
import { ModuleSelector } from './components/ModuleSelector';
import { GenerateButton } from './components/GenerateButton';
import { GenerationLoader } from './components/GenerationLoader';
import { JournalResult } from './components/JournalResult';
import { EmptyState } from './components/EmptyState';
import { HowItWorks } from './components/HowItWorks';
import { TrustSection } from './components/TrustSection';
import { Toast } from './components/Toast';
import { Footer } from './components/Footer';
import { useJournalGenerator } from './hooks/useJournalGenerator';
import { AlertCircle, RefreshCw } from 'lucide-react';

export function App() {
  const generatorRef = useRef<HTMLDivElement>(null);

  const {
    subjects,
    selectedSubjectId,
    selectedModuleId,
    currentSubjectObj,
    isGenerating,
    currentStepIndex,
    currentJournal,
    error,
    toastMessage,
    selectSubject,
    selectModule,
    handleGenerate,
    handleRegenerate,
    copySectionText,
    copyAllText,
    dismissToast,
  } = useJournalGenerator();

  const scrollToGenerator = () => {
    generatorRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isFormIncomplete = !selectedSubjectId || !selectedModuleId;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-violet-500 selection:text-white">
      
      {/* NAVBAR */}
      <Navbar
        onNavigateToGenerator={scrollToGenerator}
        onNavigateToHowItWorks={scrollToHowItWorks}
      />

      {/* HERO SECTION */}
      <Hero
        onStartGenerator={scrollToGenerator}
        onLearnMore={scrollToHowItWorks}
      />

      {/* MAIN GENERATOR CONTAINER */}
      <main ref={generatorRef} className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Generator Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-xs font-extrabold uppercase tracking-wider mb-3">
            <span>Journal Generator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
            Create Your Journal
          </h2>
          <p className="text-base text-slate-600">
            Choose your subject and module. ReflectAI will handle the rest.
          </p>
        </div>

        {/* ERROR STATE ALERT BANNER */}
        {error && (
          <div className="max-w-2xl mx-auto mb-8 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-sm font-semibold flex items-center justify-between gap-3 animate-in fade-in">
            <div className="flex items-center gap-2.5">
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
              <span>{error}</span>
            </div>
            <button
              onClick={handleGenerate}
              className="px-3 py-1 rounded-xl bg-rose-600 text-white text-xs font-bold hover:bg-rose-700 transition-colors flex items-center gap-1"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Retry
            </button>
          </div>
        )}

        {/* 2-STEP SELECTOR CONTAINER */}
        <div className="max-w-4xl mx-auto space-y-8 mb-8">
          
          {/* STEP 1: SUBJECT SELECTOR */}
          <SubjectSelector
            subjects={subjects}
            selectedSubjectId={selectedSubjectId}
            onSelectSubject={selectSubject}
          />

          {/* STEP 2: MODULE SELECTOR (DEPENDENT ON SUBJECT) */}
          <ModuleSelector
            subject={currentSubjectObj}
            selectedModuleId={selectedModuleId}
            onSelectModule={selectModule}
          />

          {/* GENERATE CTA BUTTON */}
          <GenerateButton
            isDisabled={isFormIncomplete}
            isGenerating={isGenerating}
            onGenerate={handleGenerate}
          />

        </div>

        {/* GENERATION STATE / RESULT DISPLAY / EMPTY STATE */}
        <div className="mt-12">
          {isGenerating ? (
            <GenerationLoader currentStepIndex={currentStepIndex} />
          ) : currentJournal ? (
            <JournalResult
              journal={currentJournal}
              isRegenerating={isGenerating}
              onCopySection={copySectionText}
              onCopyAll={copyAllText}
              onRegenerate={handleRegenerate}
            />
          ) : (
            <EmptyState />
          )}
        </div>

      </main>

      {/* HOW IT WORKS SECTION */}
      <HowItWorks />

      {/* TRUST / VALUE HIGHLIGHTS SECTION */}
      <TrustSection />

      {/* FOOTER */}
      <Footer
        onNavigateHome={scrollToHome}
        onNavigateGenerator={scrollToGenerator}
        onNavigateHowItWorks={scrollToHowItWorks}
      />

      {/* TOAST FEEDBACK NOTIFICATIONS */}
      <Toast message={toastMessage} onDismiss={dismissToast} />

    </div>
  );
}

export default App;
