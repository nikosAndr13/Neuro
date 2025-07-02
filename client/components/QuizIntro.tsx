import { Button } from "@/components/ui/button";
import { Heart, Brain, Zap } from "lucide-react";

interface QuizIntroProps {
  onStart: () => void;
  firstQuestion: string;
}

export default function QuizIntro({ onStart, firstQuestion }: QuizIntroProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-violet-50 flex flex-col">
      {/* Header */}
      <div className="text-center pt-16 pb-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg">
            <Heart className="w-5 h-5 text-rose-500 mr-2" />
            <span className="text-sm font-medium text-gray-700">
              Free Nervous System Assessment
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Discover Your{" "}
            <span className="bg-gradient-to-r from-violet-600 to-rose-600 bg-clip-text text-transparent">
              Vagal Tone
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Find out how dysregulated your nervous system is and get your
            personalized roadmap to feeling calm, energized, and in control
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg">
              <Brain className="w-12 h-12 text-violet-500 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                2-Minute Assessment
              </h3>
              <p className="text-sm text-gray-600 text-center">
                Quick questions about your current symptoms
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg">
              <Zap className="w-12 h-12 text-rose-500 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">
                Instant Results
              </h3>
              <p className="text-sm text-gray-600 text-center">
                Get your personalized vagal tone score immediately
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg">
              <Heart className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Custom Plan</h3>
              <p className="text-sm text-gray-600 text-center">
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
              <div className="inline-flex items-center bg-violet-100 text-violet-700 rounded-full px-4 py-2 text-sm font-medium mb-4">
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
                className="h-16 text-lg font-semibold rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Yes, this describes me
              </Button>

              <Button
                onClick={() => onStart()}
                className="h-16 text-lg font-semibold rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white shadow-lg transform hover:scale-105 transition-all duration-200"
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
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="pb-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-500 mb-4">
            Trusted by thousands of women worldwide
          </p>
          <div className="flex items-center justify-center space-x-8 opacity-60">
            <div className="text-xs font-medium text-gray-400">
              🌟 4.9/5 Rating
            </div>
            <div className="text-xs font-medium text-gray-400">
              🔒 HIPAA Compliant
            </div>
            <div className="text-xs font-medium text-gray-400">
              👩‍⚕️ Doctor Approved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
