import { BookOpen, Code, Coffee, Heart, Github, Linkedin, Mail } from "lucide-react";
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  // Variants for the overall section entrance
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <motion.section 
      id="about" 
      className="pb-20 lg:pb-32"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 lg:px-36">
        <div className="mb-8 lg:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 font-mono flex items-center justify-center gap-3">
            <span className="text-playful-pink text-2xl md:text-3xl">03.</span>
            Get to know me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: Introduction */}
          <div className="space-y-4">
            <p className="text-sm lg:text-md">
            Hi! I'm a CS grad student at the University of Florida (Go Gators! 🐊). I really love building cool software and racing to learn the latest JavaScript framework. I built really cool experiences at <span className="text-playful-pink">Dell</span> and currently, I'm using AI to improve patient care pathways at <span className="text-playful-pink">UF College of Medicine</span>.
            </p>
            
            <p className="text-sm lg:text-md">
            When not coding (any recruiters reading this, I code all the time 24/7), I game on my PS5 (Hollow Knight is my current obsession) and I always make time for badminton and golf to stay fit.
            </p>
            <p className="text-sm lg:text-md">
              BTW, if you have a cuter cat than mine, I'll design your website for <span className="text-playful-pink">free</span> (I'll win).{' '}
              <a href="mailto:panangadanprajay@ufl.edu" className="inline-block group">
                <Button
                  variant="link"
                  className="p-0 h-auto text-playful-pink inline-flex text-sm lg:text-md relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-playful-pink after:transition-all after:duration-500 group-hover:after:w-full"
                >
                  contact me
                </Button>
              </a>
              {' '}to set up the competition!
            </p>
          </div>

          {/* Right Column: Skills and Education */}
          <div className="space-y-8">
            <div>
              <h3 className="text-md lg:text-lg font-bold mb-3">Skills</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {[
                  // Programming Languages
                  "Angular", "React", "Python", "Java/TypeScript", "Go",
                  // Web Frontend
                  "Tailwind", "Machine Learning", "NLP", "LLM",
                ].map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="text-foreground text-xs underline decoration-playful-pink underline-offset-4"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-md lg:text-lg font-bold mb-2 lg:mb-3">Education</h3>
              <div className="space-y-2 text-xs">
                <div>
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold">University of Florida</h4>
                    <span className="text-muted-foreground text-xs">Aug 2024 - Dec 2025</span>
                  </div>
                  <p className="text-xs text-playful-pink">M.S. in Computer Science</p>
                </div>
                <div className="border-t pt-2">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold">Manipal University Jaipur</h4>
                    <span className="text-muted-foreground text-xs">July 2018 - May 2022</span>
                  </div>
                  <p className="text-xs text-playful-pink">B.Tech in Computer Science & Engineering</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
