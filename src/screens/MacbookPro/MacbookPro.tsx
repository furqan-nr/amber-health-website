import { Navigation, Footer } from "../../components/layout";
import {
  HeroSection,
  AboutSection,
  ApproachSection,
  ResearchSection,
  TestimonialsSection,
  ArticlesSection,
  ContactSection,
} from "../../components/sections";

export const MacbookPro = (): JSX.Element => {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <div className="min-h-screen bg-white relative overflow-x-hidden w-full max-w-full">
        {/* Simple Background circle */}
        <div className="hero-background-circle absolute top-0 right-0 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[650px] md:h-[650px] lg:w-[800px] lg:h-[800px] xl:w-[950px] xl:h-[950px] bg-gradient-to-br from-yellow-500 to-red-600 rounded-full opacity-75 z-0 transform translate-x-[120px] sm:translate-x-[150px] md:translate-x-[200px] lg:translate-x-[250px] xl:translate-x-[300px] -translate-y-[120px] sm:-translate-y-[150px] md:-translate-y-[200px] lg:-translate-y-[250px] xl:-translate-y-[300px] pointer-events-none"></div>
        
        {/* Simple decorative elements */}
        <div className="absolute top-20 left-10 w-8 h-8 bg-yellow-400 rounded-full opacity-60 z-0"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-red-400 rounded-full opacity-50 z-0"></div>
        <div className="absolute top-60 left-1/4 w-4 h-4 bg-orange-400 rounded-full opacity-40 z-0"></div>
        
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ApproachSection />
          <ResearchSection />
          <TestimonialsSection />
          <ArticlesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};
