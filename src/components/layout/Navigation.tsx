import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { useActiveSection, scrollToSection } from "../../hooks/useActiveSection";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Approach", href: "approach" },
  { label: "Research", href: "research" },
  { label: "Testimonials", href: "testimonials" },
  { label: "Articles", href: "articles" },
  { label: "Get in Touch", href: "contact" },
];

const sectionIds = navItems.map(item => item.href);

export const Navigation = () => {
  const activeSection = useActiveSection(sectionIds);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-white/50 backdrop-blur-sm border-b w-full max-w-full overflow-x-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3 md:py-4 w-full max-w-full">
        <div className="flex items-center justify-between w-full max-w-full">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 sm:gap-3"
          >
            <div className="w-5 sm:w-6 md:w-8 h-5 sm:h-6 md:h-8 bg-gradient-to-br from-yellow-400 to-red-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xs sm:text-sm md:text-base">A</span>
            </div>
            <span className="text-base sm:text-lg md:text-xl font-semibold">Amber Health</span>
          </motion.div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index + 0.3 }}
                >
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className={`px-2 lg:px-3 xl:px-4 py-2 text-sm font-medium transition-colors hover:text-gray-900 cursor-pointer ${
                        activeSection === item.href ? "text-gray-900 font-bold" : "text-gray-500"
                      }`}
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      {item.label}
                      {item.label === "Services" && (
                        <ChevronDown className="inline w-3 h-3 ml-1" />
                      )}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </motion.div>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:hidden p-1 sm:p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </motion.button>

          {/* CTA Button - Desktop */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button 
              className="hidden lg:flex bg-gray-100 text-gray-900 hover:bg-gray-200 text-xs lg:text-sm xl:text-base px-3 lg:px-4 xl:px-6 py-2"
              onClick={() => scrollToSection('research')}
            >
              <span className="hidden xl:inline">Explore Our Research</span>
              <span className="xl:hidden">Research</span>
              <ArrowRight className="w-3 xl:w-4 h-3 xl:h-4 ml-1 xl:ml-2" />
            </Button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-3 sm:mt-4 pb-3 sm:pb-4 border-t overflow-hidden"
            >
              <nav className="flex flex-col space-y-1 pt-3 sm:pt-4">
                {navItems.map((item, index) => (
                    <motion.a
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`px-3 sm:px-4 py-2 sm:py-3 text-sm font-medium transition-colors hover:text-gray-900 cursor-pointer rounded-md hover:bg-gray-50 ${
                      activeSection === item.href ? "text-gray-900 font-bold bg-gray-50" : "text-gray-500"
                    }`}
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleNavClick(e, item.href)}
                    whileTap={{ scale: 0.98 }}
                    >
                    {item.label}
                    </motion.a>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                >
                  <Button 
                    className="mt-3 sm:mt-4 bg-gray-100 text-gray-900 hover:bg-gray-200 self-start w-full text-sm"
                    onClick={() => {
                      scrollToSection('research');
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Explore Our Research
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
