import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { StoryItem } from '@/components/shared/StoryItem';
import { stories } from '@/lib/data';

export function StoriesSection() {
  const recentStories = stories.slice(0, 5);

  return (
    <section className="py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-6"
        >
          <h2 className="text-[11px] uppercase tracking-[0.2em] text-text-muted font-medium">
            Recent Stories
          </h2>
          <Link
            to="/story"
            className="text-sm text-accent-purple hover:text-accent-pink transition-colors inline-flex items-center gap-1 group"
          >
            All Stories
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Stories List */}
        <div>
          {recentStories.map((story, index) => (
            <StoryItem key={story.id} story={story} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
