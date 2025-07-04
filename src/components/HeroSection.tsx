import { ArrowDown, Contact, Dock, Download, File, Hand, Handshake } from "lucide-react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { SplashCursor } from "./ui/splash-cursor";
import { MagneticButton } from "./ui/magnetic-button";

const HeroSection = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="relative overflow-hidden" id="hero">    
      <LampContainer className="pt-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-md lg:text-lg font-playful text-playful-pink lg:mb-2"
          >
            Hello, I'm
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-3xl md:text-5xl font-bold mb-2 lg:mb-4 text-black dark:text-white"
          >
            Prajay<span className="text-playful-pink">.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-sm md:text-base lg:text-xl text-muted-foreground mb-4 lg:mb-8"
          >
            software engineer ~ building cool experiences with code.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.9 }}
            className="flex flex-col gap-4 w-1/2 lg:flex-wrap lg:flex-row lg:w-full"
          >
            <MagneticButton>
              <button 
                className="button-playful primary flex items-center justify-center gap-2 text-xs sm:text-base"
                onClick={scrollToContact}
              >
                Get in Touch <Handshake size={16} className="sm:w-[18px] sm:h-[18px]" />
              </button>
            </MagneticButton>
            <MagneticButton>
              <button 
                onClick={() => window.open('https://drive.google.com/file/d/1acxnBnkiKUorf_jpmct3E7DPTEPHBZ0K/view?usp=sharing', '_blank')}
                className="button-playful outline flex items-center justify-center gap-2 text-xs sm:text-base"
              >
                My Resume <File size={18} className="sm:w-[18px] sm:h-[18px]" />
              </button>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </LampContainer>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
