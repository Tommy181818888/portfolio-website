import { motion } from 'framer-motion';
import { ExternalLink, Box, Mail, Palette, Instagram, Linkedin, Github, BookOpen, Phone, MapPin } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Box,
  Mail,
  Palette,
  Instagram,
  Linkedin,
  Github,
  BookOpen,
};

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/Amit-Shatagar', icon: 'Github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/amitshetty18', icon: 'Linkedin' },
  { name: 'Instagram', url: 'https://www.instagram.com/amit_shetty___', icon: 'Instagram' }
];

const featuredProjectsData = [
  { name: 'Trafic Ranger', url: 'https://github.com/Amit-Shatagar/Trafic_Ranger', icon: 'Box', color: 'from-blue-400 to-indigo-500' },
  { name: 'Revenue Intelligence', url: 'https://github.com/Amit-Shatagar/revenue_intelligence_project', icon: 'Mail', color: 'from-green-400 to-teal-500' },
  { name: 'Kigen', url: 'https://kigen.design', icon: 'Palette', color: 'from-purple-400 to-pink-500' },
];

export function Links() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-12 px-4">
        <div className="max-w-md mx-auto">
          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            {/* Avatar */}
            <motion.div 
              className="relative inline-block mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src="src/Pictures/Profile.jpeg"
                alt="Amit Shetty"
                className="w-20 h-20 rounded-full object-cover mx-auto border-4 border-white dark:border-gray-800 shadow-lg"
              />
            </motion.div>

            {/* Name */}
            <h1 className="font-script text-3xl text-text-primary dark:text-text-primary mb-3 relative inline-block">
              Amit Shetty
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-pink via-accent-purple to-accent-blue rounded-full" />
            </h1>

            {/* Bio */}
            <p className="text-text-secondary dark:text-text-secondary text-sm mt-4 leading-relaxed">
              Data Analyst passionate about transforming raw data into actionable insights. Expertise in Python, SQL, Tableau, and machine learning techniques.
            </p>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center gap-2 mb-8"
          >
            {socialLinks.map((link, index) => {
              const Icon = iconMap[link.icon];
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.03 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-border/80 hover:shadow-sm transition-all"
                  aria-label={link.name}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Contact moved to dedicated Contact page */}

          {/* Featured Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8"
          >
            <h2 className="text-[11px] uppercase tracking-[0.2em] text-text-muted font-medium text-center mb-4">
              Featured Projects
            </h2>
            <div className="space-y-2.5">
              {featuredProjectsData.map((project, index) => {
                const Icon = iconMap[project.icon];
                return (
                  <motion.a
                    key={project.name}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                    whileHover={{ x: 3 }}
                    className="flex items-center justify-between p-3.5 bg-background rounded-xl border border-border hover:border-border/80 hover:shadow-sm transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center text-white shadow-sm`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-medium text-text-primary text-sm">{project.name}</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-text-primary transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* More Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-[11px] uppercase tracking-[0.2em] text-text-muted font-medium text-center mb-4">
              More
            </h2>
            <div className="space-y-2.5">
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.45 }}
                whileHover={{ x: 3 }}
                className="flex items-center justify-between p-3.5 bg-background rounded-xl border border-border hover:border-border/80 hover:shadow-sm transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-text-primary text-sm">Projects PPT</span>
                </div>
                <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-text-primary transition-colors" />
              </motion.a>

              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                whileHover={{ x: 3 }}
                className="flex items-center justify-between p-3.5 bg-background rounded-xl border border-border hover:border-border/80 hover:shadow-sm transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                    <Box className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-text-primary text-sm">Project Files</span>
                </div>
                <ExternalLink className="w-4 h-4 text-text-muted group-hover:text-text-primary transition-colors" />
              </motion.a>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-12 pt-8 border-t border-border"
          >
            <p className="text-text-muted text-sm">
              Website (shetty.me)
            </p>
            <p className="text-text-primary font-medium mt-1 text-sm">
              &copy; Amit Shetty <span className="text-accent-purple mx-1">&#10022;</span> Data Analyst
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
