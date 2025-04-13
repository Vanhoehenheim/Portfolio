import { useState } from 'react';
import { Play } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';

interface Role {
  id: number;
  title: string;
  period: string;
  description: string[];
}

interface CompanyExperience {
  companyName: string;
  location?: string;
  roles: Role[];
}

const companyExperiencesData: CompanyExperience[] = [
  {
    companyName: "University of Florida - College of Medicine",
    location: "Florida, USA",
    roles: [
      {
        id: 1,
        title: "Healthcare AI/NLP Intern",
        period: "Jan 2025 – Present",
        description: [
          "Implemented graph-based anomaly detection for Heart-Failure patient records.",
          "Improved healthcare feedback analysis using sentiment analysis and BERTopic models.",
          "Developed an interactive dashboard to visualize patient satisfaction metrics."
        ],
      },
    ]
  },
  {
    companyName: "Dell Technologies",
    location: "Bengaluru, India",
    roles: [
      {
        id: 2,
        title: "Software Engineer 2",
        period: "Feb 2024 – Aug 2024",
        description: [
          "Engineered a Digital Inventory EOQ Projection solution with dynamic visualizations.",
          "Led transition to Micro Frontend architecture using reusable Angular components.",
          "Streamlined feature delivery by migrating from Springboot REST APIs to FastAPI."
        ],
      },
      {
        id: 3,
        title: "Software Engineer 1",
        period: "Aug 2022 – Jan 2024",
        description: [
          "Enhanced Service Anomaly Detection accuracy using NLP and ensemble modeling.",
          "Improved model training speed by migrating to Dell's Cloud GPU environment.",
        ],
      },
      {
        id: 4,
        title: "Software Engineer Intern",
        period: "Feb 2022 – May 2022",
        description: [
          "Optimized Dell Sales Application development with responsive Angular components.",
          "Engineered an accessibility solution for dyslexic users using Gesture Detection."
        ],
      }
    ]
  }
];

const ExperienceSection = () => {
  const [selectedCompany, setSelectedCompany] = useState<string>(
    companyExperiencesData[0].companyName
  );

  const activeExperience = companyExperiencesData.find(
    exp => exp.companyName === selectedCompany
  );

  // Variants for the overall section entrance
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Variants for the content switching animation
  const contentVariants = {
    initial: { opacity: 0, x: -20 }, // Start faded out and slightly to the left
    animate: { 
      opacity: 1, 
      x: 0, // Fade in and move to original position
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      x: 20, // Fade out and move slightly to the right
      transition: { duration: 0.2, ease: "easeIn" }
    }
  };

  return (
    <motion.section 
      id="experience" 
      className="pb-12 lg:pb-24 bg-background"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-8 lg:mb-16 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 font-mono flex items-center justify-center lg:justify-start gap-3">
            <span className="text-playful-pink text-xl sm:text-2xl md:text-3xl">01.</span>
            Where I've Worked
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10 max-w-4xl mx-auto">
          <div className="flex-col md:border-l-2 border-border md:overflow-x-visible">
            {companyExperiencesData.map((exp) => (
              <button
                key={exp.companyName}
                onClick={() => setSelectedCompany(exp.companyName)}
                className={`
                  px-3 md:px-4 py-3 w-full text-left text-xs md:text-sm font-medium transition-colors duration-200 
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-playful-pink/50 border-l-2
                  ${selectedCompany === exp.companyName
                    ? 'bg-playful-pink/10 text-playful-pink border-playful-pink md:border-playful-pink md:border-l-2 md:border-b-0 md:-ml-px'
                    : 'text-muted-foreground hover:bg-playful-pink/5 hover:text-playful-pink border-transparent md:border-transparent md:border-b-0 md:border-l-2'
                  }
                `}
              >
                {exp.companyName}
              </button>
            ))}
          </div>

          <div className="md:flex-grow md:min-h-[300px]">
            <AnimatePresence mode="wait">
              {activeExperience && (
                <motion.div 
                  key={activeExperience.companyName}
                  variants={contentVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {activeExperience.roles.map((role, index) => (
                    <div key={role.id} className={`${index > 0 ? 'mt-6 pt-6 border-t border-border/50' : ''}`}>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-1">
                        {role.title} 
                        <span className="text-playful-pink group">
                          {" @ "}
                          <span className="group-hover:underline decoration-playful-pink/50 underline-offset-4 transition-all duration-200 cursor-pointer">
                            {activeExperience.companyName}
                          </span>
                        </span>
                      </h3>
                      <p className="text-xs sm:text-sm font-mono text-muted-foreground mb-4 tracking-wider">
                        {role.period}
                      </p>
                      <ul className="space-y-2.5">
                        {role.description.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                            <Play size={12} className="fill-playful-pink text-playful-pink mt-1 sm:mt-1.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;
