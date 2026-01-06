import React, { useState, useMemo, useEffect } from 'react';
import { ArrowRight, CheckCircle, AlertCircle, RefreshCcw } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { QUESTIONS, RESULTS } from './data';
import { Channel, QuizState, ResultContent } from './types';

// --- Sub-components defined in same file for simplicity as requested by "handful of files" constraint ---

const IntroScreen: React.FC<{ onStart: () => void }> = ({ onStart }) => (
  <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-orange-50 via-rose-50 to-amber-50">
    <div className="max-w-md w-full text-center space-y-8 animate-fade-in-up">
      
      {/* Floating 3D Character */}
      <div className="relative flex justify-center mb-8">
        <div className="relative w-48 h-48 animate-float">
          {/* Main Character Image */}
          <img 
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Technologist.png" 
            alt="3D Character" 
            className="w-full h-full object-contain drop-shadow-2xl z-10 relative"
          />
          {/* Subtle Glow Behind */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-orange-300 rounded-full blur-3xl opacity-30 -z-10"></div>
        </div>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold font-display text-slate-900 tracking-tight">
        The Channel Checker Quiz
      </h1>
      <p className="text-lg text-slate-600 leading-relaxed">
        Discover your #1 growth channel and get a diagnostic score on your marketing health. No jargon, just results.
      </p>
      
      <div className="pt-4">
        <button
          onClick={onStart}
          className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-200 bg-os-blue rounded-full hover:bg-os-sapphire hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-os-blue w-full sm:w-auto"
        >
          Start Quiz
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
      <p className="text-sm text-slate-400">Takes less than 2 minutes</p>
    </div>
  </div>
);

const QuestionScreen: React.FC<{
  question: typeof QUESTIONS[0];
  totalQuestions: number;
  currentIndex: number;
  onAnswer: (yes: boolean) => void;
}> = ({ question, totalQuestions, currentIndex, onAnswer }) => {
  // Determine progress percentage
  const progress = ((currentIndex) / totalQuestions) * 100;
  
  // Local state for selection animation
  const [selection, setSelection] = useState<'yes' | 'no' | null>(null);

  useEffect(() => {
    // Reset selection when question changes
    setSelection(null);
  }, [currentIndex]);

  const handleSelection = (isYes: boolean) => {
    if (selection !== null) return; // Prevent double clicks
    
    setSelection(isYes ? 'yes' : 'no');
    
    // Delay to show animation before moving to next question
    setTimeout(() => {
      onAnswer(isYes);
    }, 400);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-orange-50 via-rose-50 to-amber-50">
      {/* Progress Header */}
      <div className="w-full bg-white/50 backdrop-blur-sm h-2 sticky top-0 z-10">
        <div 
          className="h-full bg-os-blue transition-all duration-500 ease-out shadow-[0_0_10px_rgba(0,128,255,0.5)]" 
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center p-6 max-w-2xl mx-auto w-full">
        <div className="w-full space-y-8 animate-fade-in">
           <span className="inline-block px-3 py-1 bg-white/60 backdrop-blur-md border border-white text-os-blue text-xs font-bold tracking-wider uppercase rounded-full shadow-sm">
            {question.sectionTitle} • Q{currentIndex + 1}/{totalQuestions}
          </span>
          
          <h2 className="text-2xl md:text-3xl font-bold font-display text-slate-900 leading-tight min-h-[120px] flex items-center drop-shadow-sm">
            {question.text}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {/* YES BUTTON */}
            <button
              onClick={() => handleSelection(true)}
              className={`flex items-center justify-center px-8 py-6 text-xl font-bold rounded-xl shadow-sm border-2 transition-all duration-200 group relative overflow-hidden
                ${selection === 'yes' 
                  ? 'bg-os-blue border-os-blue text-white ring-4 ring-blue-100 scale-[0.98]' 
                  : selection === 'no'
                    ? 'bg-white/50 border-white text-slate-300 opacity-50'
                    : 'bg-white/80 backdrop-blur-sm border-white text-slate-700 hover:border-os-blue hover:text-os-blue hover:shadow-lg hover:-translate-y-0.5'
                }
              `}
            >
              <div className={`w-8 h-8 rounded-full border-2 mr-3 flex items-center justify-center transition-all duration-200
                  ${selection === 'yes'
                    ? 'border-white bg-transparent'
                    : 'border-slate-200 group-hover:border-os-blue'
                  }
              `}>
                 <div className={`w-4 h-4 rounded-full transition-all duration-200
                    ${selection === 'yes'
                      ? 'bg-white opacity-100'
                      : 'bg-os-blue opacity-0 group-hover:opacity-100'
                    }
                 `} />
              </div>
              YES
            </button>

            {/* NO BUTTON */}
            <button
              onClick={() => handleSelection(false)}
              className={`flex items-center justify-center px-8 py-6 text-xl font-bold rounded-xl shadow-sm border-2 transition-all duration-200 group relative overflow-hidden
                ${selection === 'no' 
                  ? 'bg-slate-700 border-slate-700 text-white ring-4 ring-slate-200 scale-[0.98]' 
                  : selection === 'yes'
                    ? 'bg-white/50 border-white text-slate-300 opacity-50'
                    : 'bg-white/80 backdrop-blur-sm border-white text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow-lg hover:-translate-y-0.5'
                }
              `}
            >
              <div className={`w-8 h-8 rounded-full border-2 mr-3 flex items-center justify-center transition-all duration-200
                  ${selection === 'no'
                    ? 'border-white bg-transparent'
                    : 'border-slate-200 group-hover:border-slate-400'
                  }
              `}>
                <div className={`w-4 h-4 rounded-full transition-all duration-200
                    ${selection === 'no'
                      ? 'bg-white opacity-100'
                      : 'bg-slate-400 opacity-0 group-hover:opacity-100'
                    }
                 `} />
              </div>
              NO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ScoreGauge: React.FC<{ score: number }> = ({ score }) => {
  const data = [
    { name: 'Score', value: score },
    { name: 'Remaining', value: 100 - score },
  ];

  let color = '#EF4444'; // Red
  let status = 'Low';
  let message = 'Significant Opportunity';
  
  if (score >= 80) {
    color = '#10B981'; // Green
    status = 'High';
    message = 'Strong Foundation';
  } else if (score >= 50) {
    color = '#F59E0B'; // Amber
    status = 'Medium';
    message = 'Room to Grow';
  }

  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="w-48 h-48 relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              startAngle={90}
              endAngle={-270}
              dataKey="value"
              stroke="none"
              cornerRadius={10}
              paddingAngle={2}
            >
              <Cell fill={color} />
              <Cell fill="#E2E8F0" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-bold font-display text-slate-900">{Math.round(score)}%</span>
        </div>
      </div>
      <div className="mt-2 text-center">
        <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide text-white" style={{ backgroundColor: color }}>
          {status} Status
        </span>
        <p className="text-slate-500 text-sm mt-2 font-medium">{message}</p>
      </div>
    </div>
  );
};

const ResultScreen: React.FC<{ 
  answers: Record<string, boolean>;
  onReset: () => void; 
}> = ({ answers, onReset }) => {
  
  const calculateResult = useMemo(() => {
    let yesCount = 0;
    const channelCounts: Record<string, number> = {
      [Channel.SEO]: 0,
      [Channel.PaidAds]: 0,
      [Channel.ContentMarketing]: 0,
      [Channel.Referrals]: 0,
      [Channel.Partnerships]: 0,
    };

    // Tie-breaker tracking (Section 2 counts)
    const section2Counts: Record<string, number> = {
       [Channel.SEO]: 0,
      [Channel.PaidAds]: 0,
      [Channel.ContentMarketing]: 0,
      [Channel.Referrals]: 0,
      [Channel.Partnerships]: 0,
    };

    QUESTIONS.forEach(q => {
      if (answers[q.id]) {
        yesCount++;
        q.channels.forEach(ch => {
          channelCounts[ch]++;
          if (q.sectionIndex === 2) {
            section2Counts[ch]++;
          }
        });
      }
    });

    const scorePercentage = (yesCount / QUESTIONS.length) * 100;

    // Find winner
    let maxVal = -1;
    let winners: Channel[] = [];

    (Object.keys(channelCounts) as Channel[]).forEach(ch => {
      if (channelCounts[ch] > maxVal) {
        maxVal = channelCounts[ch];
        winners = [ch];
      } else if (channelCounts[ch] === maxVal) {
        winners.push(ch);
      }
    });

    let winner = winners[0];

    // Handle Tie using Section 2 logic
    if (winners.length > 1) {
      // Find which winner has highest sec 2 score
      let maxSec2 = -1;
      let sec2Winners: Channel[] = [];
       winners.forEach(w => {
         if (section2Counts[w] > maxSec2) {
           maxSec2 = section2Counts[w];
           sec2Winners = [w];
         } else if (section2Counts[w] === maxSec2) {
           sec2Winners.push(w);
         }
       });
       if (sec2Winners.length > 0) {
         winner = sec2Winners[0];
       }
    }

    return {
      score: scorePercentage,
      identity: winner,
      content: RESULTS[winner]
    };
  }, [answers]);

  const { score, content } = calculateResult;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-rose-50 to-amber-50 py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto space-y-8 animate-fade-in-up">
        
        {/* Floating Character for Result */}
        <div className="flex justify-center -mb-2">
           <div className="relative w-40 h-40 animate-float">
            <img 
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Technologist.png" 
              alt="3D Character" 
              className="w-full h-full object-contain drop-shadow-2xl z-10 relative"
            />
            {/* Subtle Glow Behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-orange-300 rounded-full blur-3xl opacity-30 -z-10"></div>
          </div>
        </div>

        {/* Score Card */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 flex flex-col md:flex-row items-center md:items-start gap-8 border border-white">
          <div className="flex-shrink-0">
            <ScoreGauge score={score} />
          </div>
          <div className="flex-1 text-center md:text-left space-y-4">
             <div className="inline-block px-3 py-1 bg-blue-100 text-os-blue text-xs font-bold tracking-wider uppercase rounded-full mb-2">
                Your Primary Identity
              </div>
            <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900">
              {content.identity}
            </h2>
            <p className="text-lg font-medium text-slate-600">
              {content.headline}
            </p>
          </div>
        </div>

        {/* Detailed Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Insight */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 border-t-4 border-os-blue">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-50 p-2 rounded-lg text-os-blue">
                <CheckCircle size={24} />
              </div>
              <h3 className="font-bold text-lg text-slate-800">Why This Fits</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              {content.insight}
            </p>
          </div>

          {/* Hidden Problem */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 border-t-4 border-amber-400">
             <div className="flex items-center gap-3 mb-4">
              <div className="bg-amber-50 p-2 rounded-lg text-amber-500">
                <AlertCircle size={24} />
              </div>
              <h3 className="font-bold text-lg text-slate-800">The Hidden Trap</h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              {content.hiddenProblem}
            </p>
          </div>

        </div>

        {/* Actionable Sections */}
        <div className="space-y-6">
           {/* Quick Win */}
           <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-100 shadow-sm">
            <h3 className="font-bold text-lg text-emerald-900 mb-2">⚡ Your Quick Win</h3>
            <p className="text-emerald-800">
              {content.quickWin}
            </p>
          </div>

          {/* AI Angle */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-6 border border-indigo-100 shadow-sm">
            <h3 className="font-bold text-lg text-indigo-900 mb-2">🤖 The AI Advantage</h3>
            <p className="text-indigo-800">
              {content.aiAngle}
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center pt-8 pb-12">
          <button 
            className="group relative inline-flex items-center justify-center px-8 py-5 text-xl font-bold text-white transition-all duration-200 bg-os-blue rounded-full hover:bg-os-sapphire hover:shadow-2xl hover:-translate-y-1 w-full md:w-auto"
            onClick={() => window.alert("Redirecting to booking page...")}
          >
            Book Your Free AI Strategy Session
            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
           <p className="mt-4 text-sm text-slate-400">
            Get a custom roadmap based on your score.
          </p>
          <button 
            onClick={onReset}
            className="mt-8 flex items-center justify-center mx-auto text-slate-500 hover:text-slate-800 text-sm font-medium transition-colors"
          >
            <RefreshCcw className="w-4 h-4 mr-2" />
            Retake Quiz
          </button>
        </div>

      </div>
    </div>
  );
};

// --- Main App Component ---

const App: React.FC = () => {
  const [quizState, setQuizState] = useState<QuizState>({
    status: 'intro',
    currentQuestionIndex: 0,
    answers: {},
  });

  const handleStart = () => {
    setQuizState(prev => ({ ...prev, status: 'active', currentQuestionIndex: 0 }));
  };

  const handleAnswer = (yes: boolean) => {
    const currentQuestion = QUESTIONS[quizState.currentQuestionIndex];
    const newAnswers = { ...quizState.answers, [currentQuestion.id]: yes };
    
    if (quizState.currentQuestionIndex < QUESTIONS.length - 1) {
      setQuizState({
        ...quizState,
        answers: newAnswers,
        currentQuestionIndex: quizState.currentQuestionIndex + 1
      });
    } else {
      setQuizState({
        ...quizState,
        answers: newAnswers,
        status: 'results'
      });
    }
  };

  const handleReset = () => {
    setQuizState({
      status: 'intro',
      currentQuestionIndex: 0,
      answers: {}
    });
  };

  useEffect(() => {
    // Scroll to top on status change
    window.scrollTo(0,0);
  }, [quizState.status, quizState.currentQuestionIndex]);

  return (
    <div className="font-sans text-slate-900 bg-slate-50 min-h-screen">
      {quizState.status === 'intro' && (
        <IntroScreen onStart={handleStart} />
      )}
      
      {quizState.status === 'active' && (
        <QuestionScreen 
          question={QUESTIONS[quizState.currentQuestionIndex]}
          totalQuestions={QUESTIONS.length}
          currentIndex={quizState.currentQuestionIndex}
          onAnswer={handleAnswer}
        />
      )}

      {quizState.status === 'results' && (
        <ResultScreen 
          answers={quizState.answers} 
          onReset={handleReset}
        />
      )}
    </div>
  );
};

export default App;