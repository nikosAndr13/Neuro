import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Award } from "lucide-react";

export default function USPsSection() {
  const usps = [
    {
      icon: Shield,
      title: "Body-First Healing (Not Talk-First)",
      description:
        "Most solutions—like therapy, meditation apps, or coaching—start with the mind. Neurotoned starts with the nervous system.",
      details:
        "It helps your body feel safe first, which makes everything else—like therapy, relationships, and daily life—easier. The tools are somatic, science-backed, and designed to calm the actual root cause of dysregulation: a stuck vagus nerve.",
      color: "text-teal-500",
      bgColor: "bg-teal-50",
    },
    {
      icon: Clock,
      title: "15 Minutes a Day, No Overwhelm",
      description:
        'No journaling for hours. No hard-to-follow lessons. No pressure to "process everything."',
      details:
        'Neurotoned gives you short, guided sessions—like gentle movements, breathwork, and expressive release—that can shift your state in minutes. It\'s made for people who feel too tired to "do the work" but still want to feel better, fast.',
      color: "text-emerald-500",
      bgColor: "bg-emerald-50",
    },
    {
      icon: Award,
      title: "Trauma-Informed Experts, Not Wellness Influencers",
      description:
        "Every session is created by real trauma therapists, somatic practitioners, and psychologists—not random content creators or wellness influencers.",
      details:
        "You're getting safe, carefully designed healing practices made for people who've tried everything else and still feel stuck.",
      color: "text-teal-600",
      bgColor: "bg-teal-50",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Neurotoned Works When Nothing Else Has
          </h3>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            The first nervous system program designed specifically for women who
            feel stuck, overwhelmed, and tired of trying everything else.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {usps.map((usp, index) => (
            <Card
              key={index}
              className="border-teal-200 hover:shadow-lg transition-shadow h-full"
            >
              <CardContent className="p-6 md:p-8 text-center h-full flex flex-col">
                <div
                  className={`w-16 h-16 ${usp.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}
                >
                  <usp.icon className={`w-8 h-8 ${usp.color}`} />
                </div>

                <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {usp.title}
                </h4>

                <p className="text-base md:text-lg font-medium text-gray-700 mb-4 flex-grow">
                  {usp.description}
                </p>

                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {usp.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
