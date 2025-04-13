import { useEffect } from 'react';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import SideAffixes from '../components/SideAffixes';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.reveal');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      <NavBar />
      <main>
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
      <SideAffixes />
    </div>
  );
};

export default Index;
