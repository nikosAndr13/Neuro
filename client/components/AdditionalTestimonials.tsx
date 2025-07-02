import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Emma K.",
    text: "I was skeptical at first, but after just one week of the breathing exercises, I noticed I wasn't having those overwhelming anxiety attacks anymore. It's been 3 weeks now and I actually look forward to stressful meetings because I know I can handle them.",
    rating: 5,
    date: "1 week ago",
    location: "Australia",
  },
  {
    name: "Christina P.",
    text: "As a busy mom of three, I didn't think I had time for another program. But these 15-minute sessions fit perfectly into my morning routine, and my kids have even commented that 'mommy doesn't get angry anymore.' Life-changing.",
    rating: 5,
    date: "2 weeks ago",
    location: "United States",
  },
  {
    name: "Rebecca S.",
    text: "I've been in therapy for years but still felt stuck in my body. Neurotoned taught me how to actually feel safe in my own skin again. The somatic approach made all the difference where talk therapy couldn't reach.",
    rating: 5,
    date: "1 month ago",
    location: "United Kingdom",
  },
];

export default function AdditionalTestimonials() {
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            More Real Results from Real Women
          </h3>
          <div className="flex items-center justify-center mb-4">
            <img
              src="https://cdn.worldvectorlogo.com/logos/trustpilot-1.svg"
              alt="Trustpilot"
              className="h-6 md:h-8 mr-3"
            />
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 md:w-6 md:h-6 text-green-500 fill-current"
                />
              ))}
              <span className="ml-2 text-lg md:text-xl font-bold text-gray-900">
                4.8
              </span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-green-500 fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-700 text-sm md:text-base mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>

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
      </div>
    </section>
  );
}
