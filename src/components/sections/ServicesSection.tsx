import { Card, CardContent } from "../ui/card";
import { ArrowRight } from "lucide-react";

const serviceCards = [
  {
    title: "Artists & Teams",
    description: "Supporting individual artists and music teams with comprehensive mental health services.",
  },
  {
    title: "Global Tours",
    description: "On-site mental health support for touring artists and crew members worldwide.",
  },
  {
    title: "Festivals & Events",
    description: "Specialized mental health services for festival organizers and event staff.",
  },
  {
    title: "Music Companies",
    description: "Corporate wellness programs designed specifically for music industry businesses.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-16">
          OUR SERVICES
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceCards.map((card, index) => (
            <Card
              key={index}
              className="group relative h-[500px] overflow-hidden rounded-xl border-0 shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-red-500 opacity-90"></div>
              <CardContent className="relative h-full flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                <p className="text-sm opacity-90 mb-4">{card.description}</p>
                <div className="flex items-center text-sm font-semibold">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
