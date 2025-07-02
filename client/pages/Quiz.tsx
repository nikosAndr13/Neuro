import { useState } from "react";
import {
  quizQuestions,
  QuizResponse,
  calculateResult,
  QuizResult,
} from "@/lib/quizData";
import QuizQuestion from "@/components/QuizQuestion";
import QuizIntro from "@/components/QuizIntro";
import EmailCapture from "./EmailCapture";
import Results from "./Results";

export default function Quiz() {
  const [showIntro, setShowIntro] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<QuizResponse[]>([]);
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [result, setResult] = useState<QuizResult | null>(null);

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const canGoBack = currentQuestionIndex > 0;

  const handleStartQuiz = () => {
    setShowIntro(false);
  };

  const handleAnswer = (answer: boolean) => {
    const newResponse: QuizResponse = {
      questionId: currentQuestion.id,
      answer,
    };

    const updatedResponses = [
      ...responses.filter((r) => r.questionId !== currentQuestion.id),
      newResponse,
    ];
    setResponses(updatedResponses);

    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Quiz complete, show email capture
      setShowEmailCapture(true);
    }
  };

  const handleBack = () => {
    if (canGoBack) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleEmailSubmit = (name: string, email: string) => {
    setUserName(name);
    setUserEmail(email);
    const quizResult = calculateResult(responses);
    setResult(quizResult);
    setShowEmailCapture(false);
    setShowResults(true);
  };

  const handleBackFromEmail = () => {
    setShowEmailCapture(false);
    setCurrentQuestionIndex(quizQuestions.length - 1);
  };

  if (showResults && result) {
    return (
      <Results result={result} userName={userName} userEmail={userEmail} />
    );
  }

  if (showEmailCapture) {
    return (
      <EmailCapture onSubmit={handleEmailSubmit} onBack={handleBackFromEmail} />
    );
  }

  if (showIntro) {
    return (
      <QuizIntro
        onStart={handleStartQuiz}
        firstQuestion={quizQuestions[0].question}
      />
    );
  }

  return (
    <QuizQuestion
      question={currentQuestion}
      questionNumber={currentQuestionIndex + 1}
      totalQuestions={quizQuestions.length}
      onAnswer={handleAnswer}
      onBack={handleBack}
      canGoBack={canGoBack}
    />
  );
}
