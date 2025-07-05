export const Footer = () => {
  return (
    <footer className="py-6 sm:py-8 md:py-10 lg:py-12 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-gray-600 text-center md:text-left">
            © 2024 Amber Health. All rights reserved.
          </p>
          <div className="order-first md:order-last">
            <img 
              src="/set-of.png" 
              alt="Set of logos" 
              className="h-6 sm:h-8 md:h-10 lg:h-12 object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
