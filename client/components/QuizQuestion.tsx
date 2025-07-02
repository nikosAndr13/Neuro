import { useState, useEffect } from "react";
import { QuizQuestion as QuizQuestionType } from "@/lib/quizData";
import { getPopupForQuestion } from "@/lib/popupData";
import { getQuestionIcon, getQuestionColor } from "@/lib/questionImages";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import SuccessPopup from "./SuccessPopup";

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
  const [showPopup, setShowPopup] = useState(false);
  const [pendingAnswer, setPendingAnswer] = useState<boolean | null>(null);

  useEffect(() => {
    setSelectedAnswer(null);
    setShowPopup(false);
    setPendingAnswer(null);
  }, [question.id]);

  const handleAnswer = (answer: boolean) => {
    setSelectedAnswer(answer);

    // Check if this question has a popup and the answer is "yes"
    const popup = getPopupForQuestion(question.id);
    if (answer && popup) {
      setPendingAnswer(answer);
      setTimeout(() => {
        setShowPopup(true);
      }, 300);
    } else {
      setTimeout(() => {
        onAnswer(answer);
      }, 300);
    }
  };

  const handleContinueFromPopup = () => {
    setShowPopup(false);
    if (pendingAnswer !== null) {
      setTimeout(() => {
        onAnswer(pendingAnswer);
      }, 100);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedAnswer(null);
    setPendingAnswer(null);
  };

  const progress = (questionNumber / totalQuestions) * 100;

  const popupInfo = getPopupForQuestion(question.id);

  return (
    <>
      {showPopup && popupInfo && (
        <SuccessPopup
          message={popupInfo.message}
          testimonial={popupInfo.testimonial}
          onContinue={handleContinueFromPopup}
          onClose={handleClosePopup}
        />
      )}
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50 flex flex-col">
        {/* Progress Bar */}
        <div className="w-full bg-white/50 backdrop-blur-sm">
          <div className="max-w-2xl mx-auto px-4 md:px-6 py-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm md:text-base font-medium text-teal-700">
                Question {questionNumber} of {totalQuestions}
              </span>
              <span className="text-sm md:text-base text-teal-600">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="w-full bg-teal-100 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-teal-500 to-emerald-500 h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-4 md:px-6">
          <div className="w-full max-w-2xl">
            {/* Back Button */}
            {canGoBack && (
              <Button
                variant="ghost"
                onClick={onBack}
                className="mb-6 md:mb-8 text-teal-600 hover:text-teal-700 hover:bg-teal-50"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            )}

            {/* Question */}
            <div className="text-center mb-8 md:mb-12">
              <div className="mb-4 md:mb-6">
                {(() => {
                  const IconComponent = getQuestionIcon(question.id);
                  const iconColor = getQuestionColor(question.id);
                  return (
                    <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 flex items-center justify-center bg-white rounded-full shadow-lg">
                      <IconComponent
                        className={`w-7 h-7 md:w-8 md:h-8 ${iconColor}`}
                      />
                    </div>
                  );
                })()}
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight px-2">
                {question.question}
              </h2>
              <p className="text-base md:text-lg text-gray-600">
                Tap your answer to continue
              </p>
            </div>

            {/* Answer Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 px-4 max-w-lg md:max-w-none mx-auto">
              <button
                onClick={() => handleAnswer(true)}
                className={`group relative p-4 md:p-8 rounded-2xl text-center transition-all duration-300 transform hover:scale-105 ${
                  selectedAnswer === true
                    ? "bg-gradient-to-br from-teal-500 to-emerald-600 text-white shadow-2xl scale-105"
                    : "bg-white hover:bg-teal-50 text-gray-900 shadow-lg hover:shadow-xl border border-teal-100"
                }`}
              >
                <div className="text-lg md:text-2xl lg:text-3xl font-bold mb-2">
                  Yes
                </div>
                <div className="text-xs md:text-base opacity-75">
                  This describes me
                </div>
              </button>

              <button
                onClick={() => handleAnswer(false)}
                className={`group relative p-4 md:p-8 rounded-2xl text-center transition-all duration-300 transform hover:scale-105 ${
                  selectedAnswer === false
                    ? "bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-2xl scale-105"
                    : "bg-white hover:bg-emerald-50 text-gray-900 shadow-lg hover:shadow-xl border border-emerald-100"
                }`}
              >
                <div className="text-lg md:text-2xl lg:text-3xl font-bold mb-2">
                  No
                </div>
                <div className="text-xs md:text-base opacity-75">
                  This doesn't describe me
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
