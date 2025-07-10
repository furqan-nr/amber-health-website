import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="py-6 sm:py-8 md:py-10 lg:py-12 bg-gray-100"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xs sm:text-sm text-gray-600 text-center md:text-left"
          >
            © 2024 Amber Health. All rights reserved.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="order-first md:order-last"
          >
            <img 
              src="/set-of.png" 
              alt="Set of logos" 
              className="h-6 sm:h-8 md:h-10 lg:h-12 object-contain"
            />
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};
