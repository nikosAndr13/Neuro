import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    text: "After 30 days with Neurotoned, I went from constant anxiety and exhaustion to feeling calm and energized. My sleep improved dramatically and I finally feel like myself again.",
    rating: 5,
    date: "2 weeks ago",
    location: "United States",
  },
  {
    name: "Jennifer L.",
    text: "I thought feeling overwhelmed was just part of being a busy mom. Neurotoned taught me it doesn't have to be. I'm now managing stress so much better.",
    rating: 5,
    date: "1 month ago",
    location: "Canada",
  },
  {
    name: "Maria R.",
    text: "The transformation has been incredible. My digestion improved, my mood stabilized, and I have energy to actually enjoy my life again.",
    rating: 5,
    date: "3 weeks ago",
    location: "United Kingdom",
  },
];

export default function TrustpilotTestimonials() {
  return (
    <section className="py-16 px-6 max-sm:pt-[19px]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <img
              src="https://cdn.worldvectorlogo.com/logos/trustpilot-1.svg"
              alt="Trustpilot"
              className="h-6 md:h-8 mr-3"
            />
            <div className="flex items-center">
              {[...Array(4)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 md:w-6 md:h-6 text-green-500 fill-current"
                />
              ))}
              <Star className="w-5 h-5 md:w-6 md:h-6 text-green-500 fill-current opacity-50" />
              <span className="ml-2 text-lg md:text-xl font-bold text-gray-900">
                4.5
              </span>
            </div>
          </div>
          <p className="text-gray-600 text-sm md:text-base">
            Based on 40+ verified reviews
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-green-500 fill-current"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Reviewer Info */}
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {testimonial.location}
                      </p>
                    </div>
                    <div className="text-xs text-gray-400">
                      {testimonial.date}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 mb-2">
            ✓ Verified reviews from real customers
          </p>
          <p className="text-xs text-gray-400">
            We invite all our customers to review their experience
          </p>
        </div>
      </div>
    </section>
  );
}
