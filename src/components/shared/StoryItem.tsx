import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Story } from '@/types';

interface StoryItemProps {
  story: Story;
  index?: number;
}

const categoryColors: Record<string, string> = {
  Devlog: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
  Blog: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
  Insight: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  Traine: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  Lead: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
  Startup: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400',
  GoldMedlist: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
  Professional: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
};

export function StoryItem({ story, index = 0 }: StoryItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="group block py-4 border-b border-border last:border-b-0"
    >
      <Link to={`/story/${story.id}`} className="block">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-text-muted text-xs w-32 flex-shrink-0">{story.date}</span>
              <span className="text-border">&bull;</span>
              <span className={`text-[10px] uppercase font-medium px-2 py-0.5 rounded-full ${categoryColors[story.category] || 'bg-muted text-text-muted'}`}>
                {story.category}
              </span>
            </div>
            <h3 className="font-serif text-lg text-text-primary dark:text-text-primary group-hover:text-accent-purple transition-colors line-clamp-2 leading-snug">
              {story.title}
            </h3>
          </div>
          <span className="text-text-muted text-xs flex-shrink-0 hidden sm:block opacity-60">
            story.shetty.me
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
