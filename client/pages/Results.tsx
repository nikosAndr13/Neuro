import { useState } from "react";
import { QuizResult } from "@/lib/quizData";
import { getResultContent, faqs } from "@/lib/resultsData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import TransformationTimeline from "@/components/TransformationTimeline";
import TrustpilotTestimonials from "@/components/TrustpilotTestimonials";
import AdditionalTestimonials from "@/components/AdditionalTestimonials";
import ProgramBreakdown from "@/components/ProgramBreakdown";
import PractitionersSection from "@/components/PractitionersSection";
import USPsSection from "@/components/USPsSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import {
  CheckCircle,
  Star,
  Shield,
  Clock,
  Users,
  ArrowRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface ResultsProps {
  result: QuizResult;
  userName: string;
  userEmail: string;
}

export default function Results({ result, userName }: ResultsProps) {
  const content = getResultContent(result);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const ctaUrl =
    "https://www.neurotoned.com/offers/sPjut2p7/checkout?coupon_code=49OFFNEUROTONEDWELCOME";

  const ScoreVisualization = () => {
    const dysregulationPercentage =
      (result.score / result.totalQuestions) * 100;
    const circumference = 2 * Math.PI * 45;
    const strokeDasharray = circumference;
    const strokeDashoffset =
      circumference - (dysregulationPercentage / 100) * circumference;

    return (
      <div className="relative w-32 h-32 mx-auto">
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#e5e7eb"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke={content.graphColor}
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">
              {Math.round(dysregulationPercentage)}%
            </div>
            <div className="text-xs text-gray-600">Dysregulated</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-emerald-50">
      {/* Hero Section */}
      <section className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 md:mb-12">
            <Badge
              className={`bg-${content.color}-100 text-${content.color}-800 text-base md:text-lg px-4 py-2 mb-4`}
            >
              Your Results Are In
            </Badge>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Hi {userName}! 👋
            </h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {content.title}
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              {content.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12">
            <div className="order-2 md:order-1">
              <ScoreVisualization />
              <p className="text-sm md:text-base text-gray-600 mt-4">
                You answered "yes" to {result.score} out of{" "}
                {result.totalQuestions} symptoms
              </p>
            </div>
            <div className="order-1 md:order-2 text-left">
              <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                {content.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-white/70 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center leading-tight">
            What This Means For You
          </h3>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <Card className="border-teal-200">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 text-teal-500 mr-2" />
                  Your Current State
                </h4>
                <ul className="space-y-3">
                  {content.insights.map((insight, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{insight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-emerald-200">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <Star className="w-5 h-5 text-emerald-500 mr-2" />
                  Immediate Steps
                </h4>
                <ul className="space-y-3">
                  {content.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{rec}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transformation Timeline */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <TransformationTimeline result={result} />
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-16 px-6 bg-white/70 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-teal-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Your 30-Day Transformation
            </h3>
            <p className="text-lg md:text-xl leading-relaxed mb-8 opacity-95">
              {content.transformation}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-teal-600 hover:bg-gray-50 text-lg px-8 py-6 rounded-xl font-semibold"
            >
              <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
                {content.ctaTitle}
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-16 px-6 bg-white/70 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            {content.ctaTitle}
          </h3>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            {content.ctaDescription}
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 text-teal-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">
                  30-Day Nervous System Reset
                </h4>
                <p className="text-gray-600">
                  Complete nervous system transformation in just one month
                </p>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">Expert Support</h4>
                <p className="text-gray-600">
                  Guided by nervous system specialists and trauma-informed
                  coaches
                </p>
              </CardContent>
            </Card>

            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">
                  Guaranteed Results
                </h4>
                <p className="text-gray-600">
                  100% money-back guarantee if you don't see improvement
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white text-lg px-8 py-6 rounded-xl font-semibold"
            >
              <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
                Start Your Transformation Today - $49 Off
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              Special offer ends soon • 30-day money-back guarantee
            </p>
          </div>
        </div>
      </section>

      {/* Week-by-week breakdown */}
      <ProgramBreakdown result={result} />

      {/* 3 reviews */}
      <TrustpilotTestimonials />

      {/* 30-Day Transformation Guarantee */}
      <GuaranteeSection />

      {/* First CTA */}
      <section className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-br from-teal-600 to-emerald-600 rounded-3xl p-6 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              Ready to Transform Your Nervous System?
            </h3>
            <p className="text-lg md:text-xl mb-8 opacity-95 leading-relaxed">
              Join thousands of women who have already reclaimed their calm,
              energy, and joy.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-teal-600 hover:bg-gray-50 text-lg md:text-xl px-8 py-4 md:py-6 rounded-xl font-semibold"
            >
              <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
                Get Started Today - $49 Off
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <div className="mt-6 flex items-center justify-center space-x-6 text-sm opacity-90">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-1" />
                30-Day Guarantee
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                Instant Access
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USPs */}
      <USPsSection />

      {/* 3 more reviews */}
      <AdditionalTestimonials />

      {/* Experts featured */}
      <PractitionersSection />

      {/* 2nd CTA */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-white/70 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-center leading-tight">
            {content.ctaTitle}
          </h3>
          <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-12 text-center max-w-2xl mx-auto leading-relaxed">
            {content.ctaDescription}
          </p>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 text-teal-500 mx-auto mb-4" />
                <h4 className="text-lg md:text-xl font-semibold mb-2">
                  30-Day Nervous System Reset
                </h4>
                <p className="text-gray-600 text-sm md:text-base">
                  Complete nervous system transformation in just one month
                </p>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                <h4 className="text-lg md:text-xl font-semibold mb-2">
                  Expert Support
                </h4>
                <p className="text-gray-600 text-sm md:text-base">
                  Guided by nervous system specialists and trauma-informed
                  coaches
                </p>
              </CardContent>
            </Card>

            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h4 className="text-lg md:text-xl font-semibold mb-2">
                  Guaranteed Results
                </h4>
                <p className="text-gray-600 text-sm md:text-base">
                  100% money-back guarantee if you don't see improvement
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-600 hover:to-emerald-600 text-white text-lg md:text-xl px-8 py-4 md:py-6 rounded-xl font-semibold"
            >
              <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
                Start Your Transformation Today - $49 Off
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <p className="text-sm text-gray-500 mt-4">
              Special offer ends soon • 30-day money-back guarantee
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-white/70 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center leading-tight">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="p-0">
                  <button
                    onClick={() =>
                      setExpandedFaq(expandedFaq === index ? null : index)
                    }
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900">
                      {faq.question}
                    </span>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3rd CTA */}
      <section className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-br from-teal-600 to-emerald-600 rounded-3xl p-6 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              Don't Wait Another Day to Feel Better
            </h3>
            <p className="text-lg md:text-xl mb-8 opacity-95 leading-relaxed">
              Your nervous system can't wait. Every day you stay dysregulated is
              another day of unnecessary suffering.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-teal-600 hover:bg-gray-50 text-lg md:text-xl px-8 py-4 md:py-6 rounded-xl font-semibold"
            >
              <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
                Start Healing Today - $49 Off
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </Button>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm opacity-90">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-1" />
                30-Day Guarantee
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                Instant Access
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                Join 25,000+ Women
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
