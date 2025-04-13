import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Gator Swamp",
    description: "Reddit-inspired social platform with real-time messaging.",
    image: "/assets/gatorSwamp.png", // Placeholder image
    tags: ["React", "Tailwind CSS", "Go", "MongoDB", "Vercel", "Railway", "JWT"],
    liveUrl: "https://gator-swamp.vercel.app/login", // Added the provided project link
    githubUrl: "https://github.com/Vanhoehenheim/Gator_Swamp_Frontend", // No GitHub link provided
  },
  {
    id: 2,
    title: "Abhivarta",
    description: "Website for the Annual Sports Festival of Manipal University Jaipur.",
    image: "/assets/abhivarta.png", // Placeholder image
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "Firebase"],
    liveUrl: 'https://abhivarta2020.web.app/', // No live link provided
    githubUrl: undefined, // No GitHub link provided
  },
  {
    id: 3,
    title: "Portfolio",
    description: "My personal portfolio website :)",
    image: "/assets/portfolio.png", // Placeholder image
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://prajay.dev", // Example URL
    githubUrl: "https://github.com/yourusername/portfolio", // Example GitHub link
  },
];

const ProjectsSection = () => {
  // Variants for each project card
  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, // Start hidden and 50px down
    visible: {
      opacity: 1,
      y: 0, // Animate to visible and original position
      transition: { duration: 0.5 } // Animation duration
    }
  };

  return (
    <section
      id="projects"
      className="pb-12 lg:pb-24 relative bg-background dark:bg-gradient-to-b dark:from-background dark:to-background/90"
    >
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="mb-8 lg:mb-16 ">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 font-mono flex items-center justify-center lg:justify-start gap-3">
            <span className="text-playful-pink text-2xl md:text-3xl">02.</span>
            Projects
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-center lg:text-left">
            Some things I'm proud of!
          </p>
        </div>

        {/* Removed mobile/medium spacing, kept lg spacing */}
        <div className="lg:space-y-28 lg:px-40">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              // Added border and padding for mobile/tablet separation
              className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-0 items-center border-b border-border pb-4 last:border-none last:pb-0 lg:border-none lg:pb-0"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the card is visible
            >
              {/* Hide image on mobile */}
              <div className={`relative group lg:col-span-5 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} hidden lg:block`}>
                <a
                  href={project.liveUrl || project.githubUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg overflow-hidden shadow-lg hover:shadow-xl border-4 border-white transition-all duration-300"
                  aria-label={`View project ${project.title}`}
                >
                  <div className="w-full aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain"
                      width={1920}
                      height={1080}
                      loading="lazy"
                    />
                  </div>
                </a>
              </div>

              {/* Ensure text is left-aligned on mobile, apply lg alignment */}
              <div className={`relative lg:col-span-5 text-left ${index % 2 === 0 ? 'lg:order-2 lg:text-right' : 'lg:order-1 lg:text-left'}`}>
                <div className={`${index % 2 === 0 ? 'lg:pl-0' : 'lg:pr-0'} py-6`}>
                  <p className="text-xs font-semibold text-playful-pink mb-1 uppercase tracking-wider">
                    Featured Project
                  </p>
                  {/* Reduced title font size on mobile */}
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2 lg:mb-6 hover:text-playful-pink transition-colors">
                    <a
                      href={project.liveUrl || project.githubUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title}
                    </a>
                  </h3>

                  {/* Restore absolute positioning, width, offset, and z-index for lg */}
                  <div
                    className={`relative lg:absolute lg:w-[120%] ${index % 2 === 0 ? 'lg:-left-16' : 'lg:-right-16'} z-10 mb-5 lg:bg-card lg:border lg:border-white lg:rounded-lg lg:p-6 lg:shadow-lg`}
                  >
                    <p className="text-sm lg:text-base text-muted-foreground text-left">{project.description}</p>
                  </div>

                  {/* Restore original margins for lg */}
                  <div className={`flex flex-wrap gap-3 mt-3 mb-5 lg:mt-28 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-3 py-1 rounded-full bg-secondary text-secondary-foreground shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className={`flex gap-4 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-playful-pink transition-colors"
                        aria-label={`View ${project.title} source code on GitHub`}
                      >
                        <Github size={24} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-playful-pink transition-colors"
                        aria-label={`Visit ${project.title} live site`}
                      >
                        <ExternalLink size={24} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;