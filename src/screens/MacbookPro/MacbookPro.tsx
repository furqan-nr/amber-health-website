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
import { motion } from "framer-motion";

export const MacbookPro = (): JSX.Element => {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen bg-white relative overflow-x-hidden w-full max-w-full"
      >
        {/* Simple Background circle */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.75 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="hero-background-circle absolute top-0 right-0 w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[650px] md:h-[650px] lg:w-[800px] lg:h-[800px] xl:w-[950px] xl:h-[950px] bg-gradient-to-br from-yellow-500 to-red-600 rounded-full z-0 transform translate-x-[120px] sm:translate-x-[150px] md:translate-x-[200px] lg:translate-x-[250px] xl:translate-x-[300px] -translate-y-[120px] sm:-translate-y-[150px] md:-translate-y-[200px] lg:-translate-y-[250px] xl:-translate-y-[300px] pointer-events-none"
        ></motion.div>
        
        {/* Simple decorative elements */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute top-20 left-10 w-8 h-8 bg-yellow-400 rounded-full z-0"
        ></motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="absolute top-40 right-20 w-6 h-6 bg-red-400 rounded-full z-0"
        ></motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute top-60 left-1/4 w-4 h-4 bg-orange-400 rounded-full z-0"
        ></motion.div>
        
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
      </motion.div>
    </div>
  );
};
