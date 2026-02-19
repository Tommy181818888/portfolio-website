import { motion } from 'framer-motion';
import type { TimelineEvent } from '@/types';

interface TimelineItemProps {
  event: TimelineEvent;
  index?: number;
  isLast?: boolean;
}

const tagColors: Record<string, string> = {
  newsletter: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  youtube: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
  devlog: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  release: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  launch: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
};

export function TimelineItem({ event, index = 0, isLast = false }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative flex gap-5"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[5px] top-6 w-px h-[calc(100%+16px)] bg-gradient-to-b from-border to-transparent" />
      )}

      {/* Date column */}
      <div className="flex-shrink-0 w-20 pt-1">
        <span className="text-text-muted text-xs">{event.date}</span>
      </div>

      {/* Content */}
      <div className="flex-1 pb-8">
        {/* Dot */}
        <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-background border-2 border-accent-purple shadow-sm" />

        {/* Card */}
        <a
          href={event.link || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-muted/50 rounded-xl p-4 hover:bg-muted transition-colors border border-border/50"
        >
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {event.tags.map((tag) => (
              <span
                key={tag}
                className={`text-[10px] uppercase font-medium px-2 py-0.5 rounded-full ${tagColors[tag] || 'bg-muted text-text-muted'}`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="font-medium text-text-primary dark:text-text-primary text-sm mb-1">{event.title}</h3>

          {/* Description */}
          <p className="text-text-secondary dark:text-text-secondary text-xs leading-relaxed">
            {event.description}
          </p>

          {/* Image */}
          {event.image && (
            <div className="mt-3 rounded-lg overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-40 object-cover"
                loading="lazy"
              />
            </div>
          )}
        </a>
      </div>
    </motion.div>
  );
}
