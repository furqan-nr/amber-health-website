export const ContactSection = () => {
  return (
    <section id="contact" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 mb-4 sm:mb-6 lg:mb-8">
          GET IN TOUCH
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-6 sm:mb-8 lg:mb-12 max-w-2xl mx-auto leading-relaxed">
          Ready to prioritize mental health in your music organization? 
          Let's start a conversation about how we can support your team.
        </p>
        <div className="bg-white p-4 sm:p-6 md:p-8 rounded-3xl shadow-lg max-w-xs sm:max-w-sm md:max-w-md mx-auto">
          <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 md:mb-4">Contact Us</p>
          <p className="text-gray-600 mb-1 sm:mb-2 text-xs sm:text-sm md:text-base">hello@amberhealth.com</p>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base">+1 (555) 123-4567</p>
        </div>
      </div>
    </section>
  );
};
