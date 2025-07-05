import { Card, CardContent } from "../ui/card";

const testimonials = [
  {
    quote:
      "Our partnership with Amber Health has been a game-changer for our organization. Their unwavering commitment to mental health initiatives has made a significant impact on our leadership, teams, and employees, and their services have enabled our people to achieve greater happiness and wellness at work and beyond. We couldn't be more grateful for their invaluable support.",
    name: "Shaun Clair",
    title: "CEO",
  },
  {
    quote:
      "Our partnership with Amber Health allows us to prioritize mental health and wellness for our Festivals' artists, crew, and staff. Together, we provide resources on-site that everyone carries with them well after they leave us. We consider them a critical extension of our own team!",
    name: "Kira Karbocus",
    title: "CFO Newport Festivals",
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-2 sm:mb-3 lg:mb-4">
            WHAT CLIENTS SAY
          </h2>
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-black text-gray-900 mb-3 sm:mb-4 lg:mb-8">
            ABOUT OUR SERVICES
          </h3>
          <p className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 max-w-4xl mx-auto">
            Amber Health is backed by groundbreaking research and real-world clinical results:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-4 sm:p-6 lg:p-8 bg-white border-none shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <CardContent className="p-0 space-y-3 sm:space-y-4 lg:space-y-6">
                <blockquote className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                  "{testimonial.quote}"
                </blockquote>
                <div className="space-y-1">
                  <p className="font-black text-gray-900 text-sm sm:text-base lg:text-lg">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-600 font-medium text-xs sm:text-sm lg:text-base">
                    {testimonial.title}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
