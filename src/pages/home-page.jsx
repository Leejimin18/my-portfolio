import HeroSection from '../components/home/hero-section';
import AboutSection from '../components/home/about-section';
import SkillTreeSection from '../components/home/skill-tree-section';
import ProjectsSection from '../components/home/projects-section';
import ContactSection from '../components/home/contact-section';

/**
 * HomePage 컴포넌트
 *
 * Props: 없음
 *
 * Example usage:
 * <HomePage />
 */
function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillTreeSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}

export default HomePage;
