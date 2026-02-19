import { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, Github, Linkedin, Instagram } from 'lucide-react';
import { PageHeader } from '@/components/shared/PageHeader';
import { StoryItem } from '@/components/shared/StoryItem';
import { stories as allStories } from '@/lib/data';
import { Button } from '@/components/ui/button';

const socialButtons = [
  { name: 'GitHub', url: 'https://github.com/Amit-Shatagar', icon: Github, color: 'from-gray-700 to-gray-900' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/amitshetty18', icon: Linkedin, color: 'from-blue-600 to-blue-700' },
  { name: 'Instagram', url: 'https://www.instagram.com/amit_shetty___', icon: Instagram, color: 'from-pink-500 to-purple-600' },
];

export function Story() {
  const [stories, setStories] = useState(allStories.slice(0, 10));
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const truncateWords = (text: string, maxWords = 40) => {
    const words = text.split(/\s+/).filter(Boolean);
    if (words.length <= maxWords) return words.join(' ');
    return words.slice(0, maxWords).join(' ') + '...';
  };

  const fullDescription = `Welcome to story section, It's not story it's feelings From NCC trainee to Lance Corporal leader; I launched a thrift-store startup, earned the University Gold Medal (BCA), and progressed into professional data work—building impactful analytics and ML solutions.`;

  const shortDescription = truncateWords(fullDescription, 40);

  const loadMore = () => {
    setLoading(true);
    setTimeout(() => {
      const currentLength = stories.length;
      const moreStories = allStories.slice(currentLength, currentLength + 5);
      if (moreStories.length > 0) {
        setStories([...stories, ...moreStories]);
      } else {
        setHasMore(false);
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Story"
        description={<p className="neon-text text-center">{shortDescription}</p>}
      />
      
      {/* Social Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center gap-3 mb-8 -mt-2"
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

      <section className="py-6 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Stories List */}
          <div>
            {stories.map((story, index) => (
              <StoryItem key={story.id} story={story} index={index} />
            ))}
          </div>

          {/* Load More */}
          {hasMore && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-center mt-8"
            >
              <Button
                onClick={loadMore}
                disabled={loading}
                variant="ghost"
                className="text-text-muted hover:text-text-primary text-sm"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Loading more stories...
                  </>
                ) : (
                  'Loading more stories...'
                )}
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
