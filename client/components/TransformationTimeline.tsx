import { QuizResult } from "@/lib/quizData";

interface TransformationTimelineProps {
  result: QuizResult;
}

export default function TransformationTimeline({
  result,
}: TransformationTimelineProps) {
  const currentDysregulation = Math.round(
    (result.score / result.totalQuestions) * 100,
  );
  const targetDysregulation = Math.max(
    9,
    Math.round(currentDysregulation * 0.2),
  ); // Significant improvement but realistic

  const timelinePoints = [
    { day: 0, label: "Today", dysregulation: currentDysregulation },
    {
      day: 7,
      label: "Week 1",
      dysregulation: Math.round(currentDysregulation * 0.85),
    },
    {
      day: 14,
      label: "Week 2",
      dysregulation: Math.round(currentDysregulation * 0.65),
    },
    {
      day: 21,
      label: "Week 3",
      dysregulation: Math.round(currentDysregulation * 0.45),
    },
    { day: 30, label: "30 Days", dysregulation: targetDysregulation },
  ];

  return (
    <div className="bg-white rounded-2xl p-4 md:p-8 shadow-lg">
      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center leading-tight">
        Your 30-Day Transformation Timeline
      </h3>

      <div className="relative">
        {/* Progress Line */}
        <div className="absolute top-8 left-8 right-8 h-0.5 bg-gradient-to-r from-red-300 via-yellow-300 to-emerald-300"></div>

        {/* Timeline Points */}
        <div className="grid grid-cols-5 gap-1 md:gap-2">
          {timelinePoints.map((point, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-1 md:space-y-2"
            >
              {/* Circle */}
              <div
                className={`w-5 h-5 md:w-6 md:h-6 rounded-full border-3 md:border-4 bg-white ${
                  index === 0
                    ? "border-red-500"
                    : index === timelinePoints.length - 1
                      ? "border-emerald-500"
                      : "border-yellow-500"
                } z-10`}
              ></div>

              {/* Day Label */}
              <div className="text-xs md:text-sm font-medium text-gray-600 text-center leading-tight">
                {point.label}
              </div>

              {/* Dysregulation Percentage */}
              <div
                className={`text-sm md:text-base font-bold ${
                  index === 0
                    ? "text-red-600"
                    : index === timelinePoints.length - 1
                      ? "text-emerald-600"
                      : "text-yellow-600"
                }`}
              >
                {point.dysregulation}%
              </div>

              {/* Dysregulated label */}
              <div className="text-xs text-gray-500 text-center leading-tight">
                dysregulated
              </div>
            </div>
          ))}
        </div>

        {/* Improvement Callout */}
        <div className="mt-8 bg-emerald-50 border border-emerald-200 rounded-lg p-4 text-center">
          <p className="text-emerald-800 font-semibold">
            That's a {currentDysregulation - targetDysregulation}% improvement
            in nervous system regulation!
          </p>
          <p className="text-emerald-700 text-sm mt-1">
            From feeling overwhelmed to calm and controlled
          </p>
        </div>
      </div>
    </div>
  );
}
