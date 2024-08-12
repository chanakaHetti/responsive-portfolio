import Layout from '@/components/layout';
import HeroSection from './sections/hero-section';
import AboutSection from './sections/about-section';
import ProjectsSection from './sections/project-section';
import ContactSection from './sections/contact-section';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  );
}
