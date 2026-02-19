import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from '@/components/shared/ProjectCard';
import { FilterTabs } from '@/components/shared/FilterTabs';
import { projects } from '@/lib/data';

const filterOptions = ['All', 'Work'];

export function WorksGrid() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Work') return project.category === 'work';
    return true;
  });

  return (
    <section className="py-6 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Filter Tabs */}
        <div className="flex justify-center mb-10">
          <FilterTabs
            options={filterOptions}
            active={activeFilter}
            onChange={setActiveFilter}
          />
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
