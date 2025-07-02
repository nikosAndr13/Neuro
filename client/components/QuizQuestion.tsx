import { useState, useEffect } from "react";
import { QuizQuestion as QuizQuestionType } from "@/lib/quizData";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface QuizQuestionProps {
  question: QuizQuestionType;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (answer: boolean) => void;
  onBack: () => void;
  canGoBack: boolean;
}

export default function QuizQuestion({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  onBack,
  canGoBack,
}: QuizQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);

  useEffect(() => {
    setSelectedAnswer(null);
  }, [question.id]);

  const handleAnswer = (answer: boolean) => {
    setSelectedAnswer(answer);
    setTimeout(() => {
      onAnswer(answer);
    }, 300);
  };

  const progress = (questionNumber / totalQuestions) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-violet-50 flex flex-col">
      {/* Progress Bar */}
      <div className="w-full bg-white/50 backdrop-blur-sm">
        <div className="max-w-2xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-violet-700">
              Question {questionNumber} of {totalQuestions}
            </span>
            <span className="text-sm text-violet-600">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full bg-violet-100 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-violet-500 to-rose-500 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-2xl">
          {/* Back Button */}
          {canGoBack && (
            <Button
              variant="ghost"
              onClick={onBack}
              className="mb-8 text-violet-600 hover:text-violet-700 hover:bg-violet-50"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          )}

          {/* Question */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {question.question}
            </h2>
            <p className="text-lg text-gray-600">Tap your answer to continue</p>
          </div>

          {/* Answer Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button
              onClick={() => handleAnswer(true)}
              className={`group relative p-8 rounded-2xl text-center transition-all duration-300 transform hover:scale-105 ${
                selectedAnswer === true
                  ? "bg-gradient-to-br from-rose-500 to-pink-600 text-white shadow-2xl scale-105"
                  : "bg-white hover:bg-rose-50 text-gray-900 shadow-lg hover:shadow-xl border border-rose-100"
              }`}
            >
              <div className="text-2xl md:text-3xl font-bold mb-2">Yes</div>
              <div className="text-sm opacity-75">This describes me</div>
            </button>

            <button
              onClick={() => handleAnswer(false)}
              className={`group relative p-8 rounded-2xl text-center transition-all duration-300 transform hover:scale-105 ${
                selectedAnswer === false
                  ? "bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-2xl scale-105"
                  : "bg-white hover:bg-violet-50 text-gray-900 shadow-lg hover:shadow-xl border border-violet-100"
              }`}
            >
              <div className="text-2xl md:text-3xl font-bold mb-2">No</div>
              <div className="text-sm opacity-75">This doesn't describe me</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
