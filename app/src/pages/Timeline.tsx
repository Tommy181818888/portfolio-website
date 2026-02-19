import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { PageHeader } from '@/components/shared/PageHeader';
import { TimelineItem } from '@/components/shared/TimelineItem';
import { timelineEvents } from '@/lib/data';

const socialButtons = [
  { name: 'GitHub', url: 'https://github.com/Amit-Shatagar', icon: Github, color: 'from-gray-700 to-gray-900' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/realvjy', icon: Linkedin, color: 'from-blue-600 to-blue-700' },
  { name: 'Instagram', url: 'https://instagram.com/realvjy', icon: Instagram, color: 'from-pink-500 to-rose-500' },
];

export function Timeline() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Timeline"
        description="The linear view of some milestones and notable moments that happened so far (151 key moments). And you can always find more information on GitHub and LinkedIn."
      />
      
      {/* Social Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center gap-3 mb-10 -mt-2"
      >
        {socialButtons.map((button, index) => {
          const Icon = button.icon;
          return (
            <motion.a
              key={button.name}
              href={button.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${button.color} text-white text-sm font-medium shadow-md hover:shadow-lg transition-shadow`}
            >
              <Icon className="w-4 h-4" />
              {button.name}
            </motion.a>
          );
        })}
      </motion.div>

      <section className="py-8 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {timelineEvents.map((event, index) => (
              <TimelineItem
                key={event.id}
                event={event}
                index={index}
                isLast={index === timelineEvents.length - 1}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
