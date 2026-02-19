import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const statusConfig = {
    wip: { bg: 'bg-badge-wip', label: 'wip' },
    new: { bg: 'bg-badge-new', label: 'new' },
    v2: { bg: 'bg-badge-v2', label: 'v2' },
  };

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group block"
    >
      <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted shadow-card group-hover:shadow-card-hover transition-all duration-300">
        {/* Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Status Badge */}
        {project.status && (
          <div className="absolute top-3 left-3">
            <span
              className={`${statusConfig[project.status].bg} text-white text-[10px] uppercase font-semibold px-2.5 py-1 rounded-full shadow-sm`}
            >
              {statusConfig[project.status].label}
            </span>
          </div>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
          <p className="font-medium text-white text-base mb-1">{project.title}</p>
          {project.description && (
            <p className="text-sm text-white/80 line-clamp-2 mb-3">
              {project.description}
            </p>
          )}
          <p className="text-xs text-white/60 mb-3">{project.year}</p>
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <ExternalLink className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>

      {/* Title and Year */}
      <div className="mt-3 text-center">
        <h3 className="font-medium text-text-primary dark:text-text-primary text-sm group-hover:text-accent-purple transition-colors">
          {project.title}
        </h3>
        <p className="text-text-muted text-xs mt-0.5">{project.year}</p>
      </div>
    </motion.a>
  );
}
