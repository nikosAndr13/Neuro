import { Button } from "@/components/ui/button";
import { Heart, Brain, Zap } from "lucide-react";

interface QuizIntroProps {
  onStart: () => void;
  firstQuestion: string;
}

export default function QuizIntro({ onStart, firstQuestion }: QuizIntroProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50 flex flex-col">
      {/* Header */}
      <div className="text-center pt-12 md:pt-16 pb-6 md:pb-8 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 md:py-3 mb-6 shadow-lg">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Ff6586eda61614dcc88d34c477a317a18%2F514c1922ae474457951a8226df106847?format=webp&width=800"
              alt="Neurotoned Logo"
              className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3"
            />
            <span className="text-xs md:text-sm font-medium text-gray-700">
              Free Nervous System Assessment
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Discover Your{" "}
            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              Vagal Tone
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Find out how dysregulated your nervous system is and get your
            personalized roadmap to feeling calm, energized, and in control
          </p>

          {/* Quiz Assessment Preview */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-2xl border border-white/20 mb-12 max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <div className="inline-flex items-center bg-teal-100 text-teal-700 rounded-full px-4 py-2 text-sm font-medium mb-4">
                Question 1 of 30
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                {firstQuestion}
              </h2>
              <p className="text-gray-600 mb-6">
                Tap your answer to begin your assessment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button
                onClick={() => onStart()}
                className="h-14 text-lg font-semibold rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Yes, this describes me
              </Button>

              <Button
                onClick={() => onStart()}
                className="h-14 text-lg font-semibold rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                No, this doesn't describe me
              </Button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                ✨ Free assessment • No credit card required • Instant results
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-4 md:p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg">
              <Brain className="w-10 h-10 md:w-12 md:h-12 text-teal-500 mb-3 md:mb-4" />
              <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">
                2-Minute Assessment
              </h3>
              <p className="text-xs md:text-sm text-gray-600 text-center">
                Quick questions about your current symptoms
              </p>
            </div>

            <div className="flex flex-col items-center p-4 md:p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg">
              <Zap className="w-10 h-10 md:w-12 md:h-12 text-emerald-500 mb-3 md:mb-4" />
              <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">
                Instant Results
              </h3>
              <p className="text-xs md:text-sm text-gray-600 text-center">
                Get your personalized vagal tone score immediately
              </p>
            </div>

            <div className="flex flex-col items-center p-4 md:p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg">
              <Heart className="w-10 h-10 md:w-12 md:h-12 text-teal-600 mb-3 md:mb-4" />
              <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">Custom Plan</h3>
              <p className="text-xs md:text-sm text-gray-600 text-center">
                Receive targeted recommendations for your needs
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* First Question Preview */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-2xl">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-teal-100 text-teal-700 rounded-full px-4 py-2 text-sm font-medium mb-4">
                Question 1 of 30
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                {firstQuestion}
              </h2>
              <p className="text-gray-600 mb-8">
                Tap your answer to begin your assessment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button
                onClick={() => onStart()}
                className="h-16 text-lg font-semibold rounded-xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Yes, this describes me
              </Button>

              <Button
                onClick={() => onStart()}
                className="h-16 text-lg font-semibold rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                No, this doesn't describe me
              </Button>
            </div>

            <div className="mt-8 text-center">
              <p className="text-xs text-gray-500">
                ✨ Free assessment • No credit card required • Instant results
              </p>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="pb-8 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm md:text-base text-gray-500 mb-4">
            Trusted by thousands of women worldwide
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 opacity-60">
            <div className="text-xs md:text-sm font-medium text-gray-400">
              🌟 4.9/5 Rating
            </div>
            <div className="text-xs md:text-sm font-medium text-gray-400">
              🔒 HIPAA Compliant
            </div>
            <div className="text-xs md:text-sm font-medium text-gray-400">
              👩‍⚕️ Doctor Approved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}