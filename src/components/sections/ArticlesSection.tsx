import { Card, CardContent } from "../ui/card";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Presenting Evelyn Burke live in London UK",
    image: "/marcela.png"
  },
  {
    title: "Presenting Evelyn Burke live in London UK",
    image: "/aditya.png"
  },
  {
    title: "Presenting Evelyn Burke live in London UK",
    image: "/joshua.png"
  },
];

export const ArticlesSection = () => {
  return (
    <section id="articles" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading with fade-in-up animation */}
        <h2 className="scroll-trigger animate-fadeInUp text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-8 sm:mb-12 lg:mb-16 text-center">
          OUR LATEST ARTICLES
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <Card 
              key={index} 
              className={`scroll-trigger animate-revealCard ${
                index === 1 ? 'animate-revealCard-delay-1' : index === 2 ? 'animate-revealCard-delay-2' : ''
              } group overflow-hidden border-none shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 transform hover:scale-[1.02] cursor-pointer`}
            >
              {/* Background Image with zoom effect */}
              <div 
                className="h-40 sm:h-48 md:h-60 lg:h-80 bg-cover bg-center bg-no-repeat overflow-hidden transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${article.image})` }}
              ></div>
              <CardContent className="p-3 sm:p-4 md:p-6 space-y-2 sm:space-y-3 md:space-y-4 bg-white group-hover:bg-gray-50 transition-colors duration-300">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 leading-tight group-hover:text-orange-600 transition-colors duration-300">
                  {article.title}
                </h3>
                <button className="flex items-center text-gray-900 font-semibold hover:text-orange-600 transition-colors duration-300 text-sm sm:text-base group-hover:translate-x-1 transform">
                  Read More
                  <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
