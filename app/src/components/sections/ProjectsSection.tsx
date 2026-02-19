import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ProjectCard } from '@/components/shared/ProjectCard';
import { projects } from '@/lib/data';

export function ProjectsSection() {
  const featuredProjects = projects.slice(0, 6);

  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-8"
        >
          <h2 className="text-[11px] uppercase tracking-[0.2em] text-text-muted font-medium">
            Current Projects
          </h2>
          <Link
            to="/work"
            className="text-sm text-accent-purple hover:text-accent-pink transition-colors inline-flex items-center gap-1 group"
          >
            All Works
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
