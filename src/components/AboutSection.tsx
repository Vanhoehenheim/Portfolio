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
      className="pb-12 lg:pb-24"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-8 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-mono flex items-center justify-center lg:justify-start gap-3">
            <span className="text-playful-pink text-2xl md:text-3xl">03.</span>
            Get to know me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 items-start lg:items-stretch">
          <div className="order-1 lg:order-1">
            <p className="text-sm lg:text-md mb-4">
            Hi! I'm a CS grad student at the University of Florida (Go Gators! 🐊). I really love building cool software and racing to learn the latest JavaScript framework. I built really cool experiences at Dell and currently, I'm using AI to improve patient care pathways at UF College of Medicine.
            </p>
            
            <p className="text-sm lg:text-md mb-4">
            When not coding (any recruiters reading this, I code all the time 24/7), I game on my PS5 (Hollow Knight is my current obsession) and I always make time for badminton and golf to stay fit.
            </p>
            <p className="text-sm lg:text-md mb-6">
              BTW, if you have a cuter cat than mine, I'll design your website for free (I'll win).{' '}
              <a href="mailto:panangadanprajay@ufl.edu" className="inline-block">
                <Button variant="link" className="p-0 h-auto inline-flex text-sm lg:text-md underline">
                  contact me
                </Button>
              </a>
              {' '}to set up the competition!
            </p>

            <h3 className="text-xl font-bold mb-3">Skills</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                // Programming Languages
                "Angular", "React", "Python", "Java/TypeScript", "Go",
                // Web Frontend
                "Tailwind", "Machine Learning", "NLP", "LLM",
              ].map((skill, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1.5 rounded-full bg-secondary text-foreground text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            <h3 className="text-xl font-bold mb-2 lg:mb-3">Education</h3>
            <div className="space-y-4 text-xs lg:text-sm">
              <div>
                <div className="flex justify-between items-center">
                  <h4 className="font-bold">M.S. in Computer Science</h4>
                  <span className="text-muted-foreground text-sm">Aug 2024 - May 2026</span>
                </div>
                <p className="text-sm">University of Florida</p>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-bold">B.Tech in Computer Science & Engineering</h4>
                  <span className="text-muted-foreground text-sm">July 2018 - May 2022</span>
                </div>
                <p className="text-sm">Manipal University Jaipur</p>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div className="order-2 lg:order-2 flex items-center justify-center">
            {/* Horizontal separator for mobile */}
            <hr className="w-full border-border my-8 block lg:hidden" />
            {/* Vertical separator for desktop */}
            <div className="w-px bg-playful-pink/30 h-auto self-stretch mx-6 hidden lg:block"></div>
          </div>

          <div className="order-3 lg:order-3 flex flex-col items-center w-full">
            <h3 className="text-xl font-bold mb-4 text-center">Let's Connect!</h3>
            <p className="text-muted-foreground mb-6 text-center max-w-md mx-auto">
              Found a bug? Have a project idea? Or just want to chat about cats? Drop me a line!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start max-w-md mx-auto lg:max-w-none lg:mx-0">
              <a
                href="mailto:panangadanprajay@ufl.edu"
                className="flex flex-col items-center gap-2 p-4 rounded-lg border border-transparent hover:border-playful-pink/30 hover:bg-secondary transition-all group w-full sm:w-auto text-center flex-1 min-w-[140px]"
              >
                <div className="h-12 w-12 rounded-full bg-playful-pink/10 flex items-center justify-center border border-playful-pink/20 group-hover:scale-110 transition-transform">
                  <Mail className="h-6 w-6 text-playful-pink" />
                </div>
                <div className="font-medium text-sm group-hover:text-playful-pink transition-colors">Email Me</div>
                <div className="text-xs text-muted-foreground truncate w-full px-1">panangadanprajay@ufl.edu</div>
              </a>
              
              <a 
                href="https://github.com/Vanhoehenheim"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 rounded-lg border border-transparent hover:border-playful-pink/30 hover:bg-secondary transition-all group w-full sm:w-auto text-center flex-1 min-w-[140px]"
                aria-label="GitHub Profile"
              >
                <div className="h-12 w-12 rounded-full bg-muted/50 flex items-center justify-center border border-muted/80 group-hover:scale-110 group-hover:border-playful-pink/30 transition-all">
                  <Github className="h-6 w-6 text-foreground group-hover:text-playful-pink transition-colors" />
                </div>
                 <div className="font-medium text-sm group-hover:text-playful-pink transition-colors">GitHub</div>
                 <div className="text-xs text-muted-foreground">@Vanhoehenheim</div>
              </a>

              <a 
                href="https://www.linkedin.com/in/prajay-prashanth/"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 rounded-lg border border-transparent hover:border-playful-pink/30 hover:bg-secondary transition-all group w-full sm:w-auto text-center flex-1 min-w-[140px]"
                aria-label="LinkedIn Profile"
              >
                 <div className="h-12 w-12 rounded-full bg-muted/50 flex items-center justify-center border border-muted/80 group-hover:scale-110 group-hover:border-playful-pink/30 transition-all">
                  <Linkedin className="h-6 w-6 text-foreground group-hover:text-playful-pink transition-colors" />
                </div>
                <div className="font-medium text-sm group-hover:text-playful-pink transition-colors">LinkedIn</div>
                <div className="text-xs text-muted-foreground">prajay-prashanth</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
