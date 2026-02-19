import { HeroSection } from '@/components/sections/HeroSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { StoriesSection } from '@/components/sections/StoriesSection';
import { NewsletterCTA } from '@/components/sections/NewsletterCTA';

export function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProjectsSection />
      <StoriesSection />
      <NewsletterCTA />
    </div>
  );
}
