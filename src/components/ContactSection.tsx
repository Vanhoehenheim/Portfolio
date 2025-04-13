import { useState } from 'react';
import { Github, Linkedin, Mail, MessageSquare, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({ name: '', email: '', message: '' });
      
      // Reset success message after a few seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

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
      className="py-16"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Contact Me
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          Let's work together 🚀
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-card rounded-xl border shadow-sm p-4 md:p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <MessageSquare className="text-playful-pink" />
              Send me a message
            </h3>

            {submitSuccess ? (
              <div className="bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 rounded-lg p-4 animate-fade-in">
                <p className="font-medium">Thanks for your message!</p>
                <p>I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1.5 font-medium">
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full bg-background focus:ring-2 focus:ring-playful-pink/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-1.5 font-medium">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full bg-background focus:ring-2 focus:ring-playful-pink/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-1.5 font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Your message..."
                    className="w-full bg-background focus:ring-2 focus:ring-playful-pink/50 resize-y"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 rounded-full border-2 border-t-transparent animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={18} />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-4">Connect with me</h3>
              <p className="text-lg mb-6">
                Feel free to reach out for collaboration opportunities, project inquiries, 
                or just to say hello! I'm always open to discussing new projects and ideas.
              </p>

              <div className="space-y-3 mb-8">
                <a
                  href="mailto:hello@example.com"
                  className="flex items-center gap-3 p-3 rounded-lg group transition-colors"
                >
                  <div className="h-10 w-10 rounded-full bg-playful-pink/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-playful-pink transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="font-medium group-hover:text-playful-pink transition-colors">hello@example.com</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="border-t pt-6">
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full border border-muted flex items-center justify-center hover:border-playful-pink/30 transition-colors group"
                  aria-label="GitHub"
                >
                  <Github className="group-hover:text-playful-pink transition-colors" />
                </a>
                <a 
                  href="https://linkedin.com"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full border border-muted flex items-center justify-center hover:border-playful-pink/30 transition-colors group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="group-hover:text-playful-pink transition-colors" />
                </a>
                <a 
                  href="mailto:hello@example.com"
                  className="h-10 w-10 rounded-full border border-muted flex items-center justify-center hover:border-playful-pink/30 transition-colors group"
                  aria-label="Email"
                >
                  <Mail className="group-hover:text-playful-pink transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
