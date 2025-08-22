import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from 'framer-motion';

const ContactSection = () => {
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
      id="contact" 
      className="pb-10 lg:pb-12" // Added padding
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 lg:px-32 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center font-mono flex items-center gap-3">
           <span className="text-playful-pink text-2xl md:text-3xl">04.</span>
           Let's Connect!
        </h2>
        <p className="text-muted-foreground mb-8 text-center max-w-md mx-auto">
          Found a bug? Have a project idea? Or just want to chat about cats? Drop me a line!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md">
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
             <div className="text-xs text-muted-foreground truncate w-full px-1">@Vanhoehenheim</div>
          </a>

          <a 
            href="https://www.linkedin.com/in/prajay-panangadan/"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 p-4 rounded-lg border border-transparent hover:border-playful-pink/30 hover:bg-secondary transition-all group w-full sm:w-auto text-center flex-1 min-w-[140px]"
            aria-label="LinkedIn Profile"
          >
             <div className="h-12 w-12 rounded-full bg-muted/50 flex items-center justify-center border border-muted/80 group-hover:scale-110 group-hover:border-playful-pink/30 transition-all">
              <Linkedin className="h-6 w-6 text-foreground group-hover:text-playful-pink transition-colors" />
            </div>
            <div className="font-medium text-sm group-hover:text-playful-pink transition-colors">LinkedIn</div>
            <div className="text-xs text-muted-foreground truncate w-full px-1">prajay-panangadan</div>
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
