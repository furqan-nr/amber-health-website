import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const approachCards = [
  {
    title: "Customized Support",
    description:
      "Our solutions are custom designed to match the needs of your organization. We take time, we hold space, we listen — to you.",
  },
  {
    title: "From the Bottom Up",
    description:
      "We aim to inspire systemic change one organization, one tour, and one live event at a time.",
  },
  {
    title: "Driven by Research",
    description:
      "Our solutions are backed by scientific research, including proprietary data collected from thousands of crew members, artists, and industry professionals.",
  },
];

export const ApproachSection = () => {
  return (
    <section id="approach" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start lg:items-center">
          <div className="space-y-6 sm:space-y-8 lg:space-y-12">
            <div className="text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-3 sm:mb-4 lg:mb-6">
                OUR APPROACH
              </h2>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-black text-gray-900 leading-tight">
                WE ARE DEDICATED TO THE WELL-BEING OF THE HUMANS WHO MAKE THE MUSIC HAPPEN.
              </h3>
            </div>

            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              {approachCards.map((card, index) => (
                <Card key={index} className="p-3 sm:p-4 md:p-6 bg-white shadow-sm hover-scale transition-shadow duration-300">
                  <CardHeader className="p-0 mb-2 sm:mb-3 md:mb-4">
                    <CardTitle className="text-base sm:text-lg md:text-xl font-bold text-gray-900">
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center">
            <div className="relative w-full max-w-md">
              <img 
                src="/rings 1.png" 
                alt="Approach visual" 
                className="w-full h-auto object-contain"
              />
              {/* Simple decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 opacity-60 rounded"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-red-400 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
