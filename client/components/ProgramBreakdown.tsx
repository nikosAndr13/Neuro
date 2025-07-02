import { Card, CardContent } from "@/components/ui/card";
import { QuizResult } from "@/lib/quizData";
import { CheckCircle, Calendar, Target, Zap } from "lucide-react";

interface ProgramBreakdownProps {
  result: QuizResult;
}

export default function ProgramBreakdown({ result }: ProgramBreakdownProps) {
  // Customize week content based on quiz results
  const getWeekContent = (week: number) => {
    const baseWeeks = [
      {
        week: 1,
        title: "Foundation & Safety",
        subtitle: "Building Your Nervous System Foundation",
        focus: "Understanding Your Nervous System",
        activities: [
          "Nervous system assessment and mapping",
          "Introduction to vagus nerve activation",
          "Basic breathwork foundations",
          "Creating safety in your body",
        ],
        outcome: "Feel more grounded and begin to understand your triggers",
      },
      {
        week: 2,
        title: "Regulation Techniques",
        subtitle: "Learning Core Regulation Skills",
        focus: "Building Your Toolkit",
        activities: [
          "Advanced breathwork techniques",
          "Cold exposure protocols",
          "Vagal toning exercises",
          "Stress response interruption",
        ],
        outcome: "Start interrupting stress responses in real-time",
      },
      {
        week: 3,
        title: "Integration & Habits",
        subtitle: "Making Regulation Automatic",
        focus: "Daily Practice Integration",
        activities: [
          "Morning and evening routines",
          "Micro-practices for busy schedules",
          "Environmental optimization",
          "Movement for nervous system health",
        ],
        outcome: "Feel regulation becoming natural and effortless",
      },
      {
        week: 4,
        title: "Mastery & Future",
        subtitle: "Long-term Nervous System Health",
        focus: "Advanced Techniques & Maintenance",
        activities: [
          "Advanced vagal toning protocols",
          "Relationship and boundary work",
          "Long-term maintenance strategies",
          "Community connection and support",
        ],
        outcome: "Master your nervous system and maintain lasting change",
      },
    ];

    const weekData = baseWeeks[week - 1];

    // Customize based on dysregulation level
    if (result.level === "dysregulated") {
      if (week === 1) {
        weekData.activities.unshift("Trauma-informed safety practices");
        weekData.outcome = "Experience your first moments of genuine calm";
      }
    } else if (result.level === "optimal") {
      if (week === 4) {
        weekData.activities.push("Advanced optimization techniques");
        weekData.outcome = "Achieve peak nervous system performance";
      }
    }

    return weekData;
  };

  return (
    <section className="py-12 md:py-16 px-4 md:px-6 bg-white/70 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Your 30-Day Nervous System Reset Journey
          </h3>

          {/* Hero Image */}
          <div className="mb-8">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Ff6586eda61614dcc88d34c477a317a18%2Ff72deaef67154289a48134e2e272735b?format=webp&width=800"
              alt="30-Day Neurotoned Program Overview"
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg"
            />
          </div>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A scientifically-designed program that guides you step-by-step from
            dysregulation to optimal nervous system function
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[1, 2, 3, 4].map((weekNum) => {
            const week = getWeekContent(weekNum);
            return (
              <Card
                key={weekNum}
                className="border-teal-200 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6">
                  {/* Week Header */}
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      Week {week.week}
                    </h4>
                    <h5 className="text-md font-semibold text-teal-600 mb-2">
                      {week.title}
                    </h5>
                    <p className="text-sm text-gray-600">{week.subtitle}</p>
                  </div>

                  {/* Focus Area */}
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <Target className="w-4 h-4 text-emerald-500 mr-2" />
                      <span className="text-sm font-semibold text-gray-700">
                        Focus
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 pl-6">{week.focus}</p>
                  </div>

                  {/* Activities */}
                  <div className="mb-4">
                    <h6 className="text-sm font-semibold text-gray-700 mb-2">
                      What You'll Learn:
                    </h6>
                    <ul className="space-y-1">
                      {week.activities.map((activity, index) => (
                        <li key={index} className="flex items-start text-xs">
                          <CheckCircle className="w-3 h-3 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcome */}
                  <div className="bg-teal-50 rounded-lg p-3">
                    <div className="flex items-center mb-1">
                      <Zap className="w-4 h-4 text-teal-600 mr-2" />
                      <span className="text-sm font-semibold text-teal-700">
                        Expected Outcome
                      </span>
                    </div>
                    <p className="text-sm text-teal-700">{week.outcome}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Program Guarantee */}
        <div className="mt-12 text-center">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 max-w-3xl mx-auto">
            <h4 className="text-2xl font-bold text-emerald-800 mb-4">
              30-Day Transformation Guarantee
            </h4>
            <p className="text-emerald-700 leading-relaxed">
              If you don't experience significant improvement in your nervous
              system regulation within 30 days of following the program, we'll
              refund every penny. That's how confident we are in this
              scientifically-backed approach.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
