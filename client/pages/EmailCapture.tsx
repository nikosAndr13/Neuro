import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Mail, User } from "lucide-react";

interface EmailCaptureProps {
  onSubmit: (name: string, email: string) => void;
  onBack: () => void;
}

export default function EmailCapture({ onSubmit, onBack }: EmailCaptureProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      onSubmit(name.trim(), email.trim());
    }, 1000);
  };

  const isValid =
    name.trim().length > 0 && email.trim().length > 0 && email.includes("@");

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50 flex flex-col">
      {/* Header */}
      <div className="w-full bg-white/50 backdrop-blur-sm">
        <div className="max-w-2xl mx-auto px-6 py-4">
          <Button
            variant="ghost"
            onClick={onBack}
            className="text-teal-600 hover:text-teal-700 hover:bg-teal-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Quiz
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Almost There!
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              Get your personalized vagal tone assessment
            </p>
            <p className="text-sm text-gray-500">
              We'll send your detailed results and personalized recommendations
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Your first name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="pl-12 h-14 text-lg rounded-xl border-gray-200 focus:ring-teal-500 focus:border-teal-500"
                required
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-12 h-14 text-lg rounded-xl border-gray-200 focus:ring-teal-500 focus:border-teal-500"
                required
              />
            </div>

            <Button
              type="submit"
              disabled={!isValid || isSubmitting}
              className="w-full h-14 text-lg font-semibold rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  Analyzing Your Results...
                </div>
              ) : (
                "Get My Results"
              )}
            </Button>
          </form>

          <div className="mt-6 text-xs text-gray-500 text-center">
            <p>🔒 Your information is secure and will never be shared.</p>
            <p className="mt-1">We respect your privacy and hate spam too.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
