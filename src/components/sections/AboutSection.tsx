import { Card, CardContent } from "../ui/card";

const teamMembers = [
  {
    name: "Dr. Chayim Newman",
    title: "Psychologist",
    description: "Licensed psychologist with extensive experience in the music industry.",
    image: "/chayim.png"
  },
  {
    name: "Zack Borer",
    title: "Psychotherapist, LMFT",
    description: "Licensed Marriage and Family Therapist specializing in industry professionals.",
    image: "/zack.png"
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading with fade-in-up animation */}
        <h2 className="scroll-trigger animate-fadeInUp text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-center lg:text-left">
          HEALING FROM THE INSIDE
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12 lg:mb-16">
          {/* First paragraph with slide-in-left animation */}
          <div className="scroll-trigger animate-slideInLeft space-y-4 lg:space-y-6">
            <p className="text-sm sm:text-base md:text-lg font-bold text-gray-900 leading-relaxed">
              Founded in 2020 by Dr. Chayim Newman and Zack Borer as an expansion
              of their work with music industry professionals, Amber Health
              provides comprehensive, evidence-based mental health services for
              all sectors of the music industry, highlighting the human experience
              of those who work in it.
            </p>
          </div>
          {/* Second paragraph with slide-in-right animation */}
          <div className="scroll-trigger animate-slideInRight space-y-4 lg:space-y-6">
            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              The Amber Health team consists of licensed professionals: mental
              health clinicians, certified trainers, nutritionists/dietitians and
              health experts, all who have spent extensive time within the music
              industry and understand its unique environment.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className={`scroll-trigger animate-revealCard ${index === 1 ? 'animate-revealCard-delay-1' : ''} group relative min-h-[280px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-[400px] overflow-hidden rounded-xl border-0 shadow-lg hover-scale hover-glow transition-all duration-300 ease-out transform hover:shadow-2xl hover:-translate-y-2`}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${member.image})` }}
              ></div>
              {/* Orange Gradient Overlay with hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 opacity-50 group-hover:opacity-40 transition-opacity duration-300"></div>
              <CardContent className="relative h-full flex flex-col justify-end p-4 sm:p-6 lg:p-8 text-white z-10 transform transition-transform duration-300 group-hover:translate-y-[-4px]">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 transform transition-all duration-300 group-hover:scale-105">{member.name}</h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-2 sm:mb-3 lg:mb-4 transition-colors duration-300 group-hover:text-orange-100">{member.title}</p>
                <p className="text-xs sm:text-sm opacity-90 leading-relaxed transition-opacity duration-300 group-hover:opacity-100">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
