import { Card, CardContent } from "@/components/ui/card";

const practitioners = [
  {
    name: "Dr. Sarah Chen",
    title: "Nervous System Specialist",
    credentials: "PhD in Neuroscience, Certified Somatic Therapist",
    bio: "Dr. Chen has over 15 years of experience in nervous system research and has helped thousands of women overcome chronic stress and trauma responses through evidence-based nervous system regulation techniques.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
    specialty: "Trauma-informed nervous system healing",
  },
  {
    name: "Dr. Michelle Rodriguez",
    title: "Integrative Medicine Physician",
    credentials: "MD, Functional Medicine Certified",
    bio: "A board-certified physician specializing in the intersection of nervous system health and women's wellness. Dr. Rodriguez combines traditional medicine with cutting-edge nervous system science.",
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
    specialty: "Functional medicine approach to nervous system health",
  },
  {
    name: "Lisa Thompson",
    title: "Certified Breathwork Specialist",
    credentials:
      "Certified Breathwork Facilitator, Somatic Experiencing Practitioner",
    bio: "Lisa has guided over 10,000 women through transformative breathwork journeys. Her gentle, trauma-informed approach helps women reconnect with their bodies and nervous systems safely.",
    image:
      "https://images.unsplash.com/photo-1594824388664-28462a5045b3?w=400&h=400&fit=crop&crop=face",
    specialty: "Breathwork and somatic regulation",
  },
  {
    name: "Dr. Amanda Foster",
    title: "Clinical Psychologist",
    credentials: "PhD in Clinical Psychology, Trauma Specialist",
    bio: "Dr. Foster specializes in the psychological aspects of nervous system dysregulation. She brings deep expertise in helping women understand and heal from the mental and emotional impacts of chronic stress.",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
    specialty: "Psychology of nervous system regulation",
  },
];

export default function PractitionersSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Your Expert Team
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            You'll be guided by a team of world-class nervous system
            specialists, trauma-informed practitioners, and women's wellness
            experts who understand exactly what you're going through.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
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
        <div className="mt-12 bg-gray-50 rounded-2xl p-8 text-center">
          <h4 className="text-2xl font-bold text-gray-900 mb-4">
            Collectively Our Team Has:
          </h4>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">50+</div>
              <div className="text-sm text-gray-600">
                Years Combined Experience
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">25K+</div>
              <div className="text-sm text-gray-600">Women Helped</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">100+</div>
              <div className="text-sm text-gray-600">Research Studies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">15+</div>
              <div className="text-sm text-gray-600">Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
