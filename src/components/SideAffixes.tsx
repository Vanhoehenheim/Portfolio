import {
  Github,
  Linkedin,
  Mail // Example, replace if needed
} from 'lucide-react';

const SideAffixes = () => {
  // --- IMPORTANT: Replace with your actual links and email ---
  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/Vanhoehenheim' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/prajay-prashanth/' },
    { name: 'Email', icon: Mail, url: 'mailto:panangadanprajay@ufl.edu' },
  ];
  const email = 'panangadanprajay@ufl.edu';
  // -----------------------------------------------------------

  return (
    <>
      {/* Left Side: Social Links */}
      <div className="hidden lg:flex fixed bottom-0 left-8 xl:left-12 z-30 flex-col items-center space-y-6">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="text-muted-foreground hover:text-playful-pink hover:-translate-y-0.5 transition-all duration-200"
          >
            <link.icon size={20} />
          </a>
        ))}
        {/* Vertical Line */}
        <div className="h-16 w-px bg-muted-foreground/50 mt-6"></div>
      </div>

      {/* Right Side: Email */}
      <div className="hidden lg:flex fixed bottom-0 right-8 xl:right-12 z-30 flex-col items-center space-y-6">
        <a
          href={`mailto:${email}`}
          className="text-xs font-mono tracking-widest text-muted-foreground hover:text-playful-pink hover:-translate-y-0.5 transition-all duration-200"
          style={{ writingMode: 'vertical-rl' }}
        >
          {email}
        </a>
        {/* Vertical Line */}
        <div className="h-16 w-px bg-muted-foreground/50 mt-6"></div>
      </div>
    </>
  );
};

export default SideAffixes; 