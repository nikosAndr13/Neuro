import { Card, CardContent } from "@/components/ui/card";

const practitioners = [
  {
    name: "Jeri Silverman",
    title: "Somatic Experiencing™ Practitioner",
    credentials: "Alexander Technique Teacher, Trauma Resolution Specialist",
    bio: "Jeri is a Somatic Experiencing™ practitioner and Alexander Technique teacher in Cape Town. She offers trauma resolution sessions focused on breath, voice, and movement, influenced by Archetypal Psychology, Roy Hart, mindfulness, and meditation. Jeri has released two albums and holds a BCOM from UCT.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff6586eda61614dcc88d34c477a317a18%2F7a89e2f5536c4754a89e9a066b5faeec?format=webp&width=800",
    specialty: "Trauma resolution through breath, voice, and movement",
  },
  {
    name: "Taryn Elise Herselman",
    title: "Yoga Teacher and Therapist",
    credentials: "15+ Years Experience, MA in Psychology",
    bio: "Taryn Elise is a Yoga Teacher and Therapist with 15+ years of experience. With extensive training in India and an MA in Psychology, she offers a compassionate, therapeutic approach using Hatha, Yin, and Restorative Yoga to support emotional health and treat stress-related conditions.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff6586eda61614dcc88d34c477a317a18%2F6f69913c902c4ac39580056ed6b72578?format=webp&width=800",
    specialty: "Therapeutic yoga for emotional health and stress relief",
  },
  {
    name: "Demi-Gea Hart",
    title: "Holistic Psychologist",
    credentials: "Integrative Therapy Specialist",
    bio: "Demi-Gea Hart is a Holistic Psychologist offering integrative therapy combining traditional and non-traditional approaches like hypnosis, breath therapy, yoga, and meditation. She focuses on mental, physical, and spiritual factors to guide individuals toward healing, growth, and transformation, helping them align with their true potential.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff6586eda61614dcc88d34c477a317a18%2F2c0484ba8a824f23b31b9e24933cc32f?format=webp&width=800",
    specialty: "Integrative healing and spiritual transformation",
  },
  {
    name: "Dr. Kim DiRe'",
    title: "Doctor of Behavioral Health",
    credentials:
      "Master's in Education and Counseling, Somatic Experiencing™ Practitioner",
    bio: "Dr. Kim DiRe' is a doctor of behavioral health with a master's in education and counseling. She's certified in hypnotherapy, childhood obesity, and is a Somatic Experiencing™ practitioner. Dr. Kim has created two original trainings, authored two books, and developed a healing guide journal.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Ff6586eda61614dcc88d34c477a317a18%2Fb260a69a2e92413dbd4cf25573884005?format=webp&width=800",
    specialty: "Behavioral health and somatic healing approaches",
  },
];

export default function PractitionersSection() {
  return (
    <section className="py-12 md:py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Meet Your Expert Team
          </h3>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            You'll be guided by a team of world-class nervous system
            specialists, trauma-informed practitioners, and women's wellness
            experts who understand exactly what you're going through.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {practitioners.map((practitioner, index) => (
            <Card
              key={index}
              className="border-teal-200 hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  {/* Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={practitioner.image}
                      alt={practitioner.name}
                      className="w-20 h-20 rounded-full object-cover border-2 border-teal-200"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-1">
                      {practitioner.name}
                    </h4>
                    <h5 className="text-teal-600 font-semibold mb-2">
                      {practitioner.title}
                    </h5>
                    <p className="text-sm text-gray-600 mb-3">
                      {practitioner.credentials}
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">
                      {practitioner.bio}
                    </p>
                    <div className="bg-teal-50 rounded-lg p-3">
                      <p className="text-sm font-medium text-teal-700">
                        Specialty: {practitioner.specialty}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Credentials */}
        <div className="mt-8 md:mt-12 bg-gray-50 rounded-2xl p-6 md:p-8 text-center">
          <h4 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            Collectively Our Team Has:
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-teal-600 mb-2">
                50+
              </div>
              <div className="text-xs md:text-sm text-gray-600">
                Years Combined Experience
              </div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-teal-600 mb-2">
                25K+
              </div>
              <div className="text-xs md:text-sm text-gray-600">
                Women Helped
              </div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-teal-600 mb-2">
                100+
              </div>
              <div className="text-xs md:text-sm text-gray-600">
                Research Studies
              </div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-teal-600 mb-2">
                15+
              </div>
              <div className="text-xs md:text-sm text-gray-600">
                Certifications
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
