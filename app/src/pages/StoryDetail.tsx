import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, ExternalLink } from 'lucide-react';
import { PageHeader } from '@/components/shared/PageHeader';
import { stories } from '@/lib/data';
import { Button } from '@/components/ui/button';

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

export function StoryDetail() {
  const { id } = useParams<{ id: string }>();
  const story = stories.find(s => s.id === id);

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-primary mb-4">Story not found</h1>
          <Link to="/story">
            <Button variant="ghost">Back to Stories</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Mock content for demonstration - in a real app, this would come from a CMS or database
  const getStoryContent = (storyId: string) => {
    const contents: Record<string, { content: string; readTime: string }> = {
      '1': {
        content: `
# National Cadet Corps | First Step

My journey with the National Cadet Corps began in 2022, marking the start of a transformative experience that shaped my leadership skills and discipline.

## The Beginning

Joining NCC was one of the most significant decisions I made during my college years. The program offered me opportunities to develop leadership qualities, physical fitness, and a sense of responsibility towards the nation.

## Key Learnings

- Discipline: The structured environment taught me the importance of punctuality and organization
- Teamwork: Working with diverse groups of cadets from different backgrounds
- Leadership: Taking on responsibilities and guiding fellow cadets
- Attended 2 state lvl ARMY Camp's
- Achieved NCC C Certificate from & KAr & GOA Directorate

## Achievements

- Successfully completed basic training modules
- Participated in various NCC camps and activities
- Developed strong camaraderie with fellow cadets

This experience laid the foundation for my future leadership roles and continues to influence my approach to challenges in life.
        `,
        readTime: '3 min read'
      },
      '2': {
        content: `
# Lance Corporal @NCC | TeamLead

Achieving the rank of Lance Corporal and taking on team leadership responsibilities was a pivotal moment in my NCC journey.

## Leadership Journey

Being promoted to Lance Corporal meant taking on greater responsibilities. I was now not just participating in activities but leading teams and mentoring junior cadets.

## Responsibilities

- Leading a squad of 10-15 cadets during training sessions
- Organizing and conducting team-building activities
- Mentoring new recruits and helping them adapt to NCC life
- Coordinating with senior officers for camp preparations

## Challenges Overcome

The role came with its share of challenges, from managing team dynamics to ensuring everyone met the required standards. Each challenge was an opportunity to grow and learn.

## Impact

This leadership experience was invaluable and prepared me for future professional roles where team management and leadership would be crucial.
        `,
        readTime: '4 min read'
      },
      '3': {
        content: `
# Thrift Store | Startup

Entrepreneurship called, and I answered with the launch of a thrift store startup in 2023.

## The Vision

The idea was born from observing the growing trend of sustainable fashion and the need for affordable, quality second-hand clothing in our community.

## Building from Scratch

-Market Research: Understanding local demand and competition
- Sourcing: Establishing relationships with suppliers and donors
- Operations: Setting up the physical store and online presence
- Marketing: Building brand awareness and customer loyalty

## Challenges Faced

Starting a business is never easy. From inventory management to customer service, every aspect required careful planning and execution.

## Growth & Learning

The experience taught me valuable lessons in business operations, customer relations, and the importance of adapting to market needs.

Though the journey had its ups and downs, it was incredibly rewarding and shaped my entrepreneurial mindset.
        `,
        readTime: '5 min read'
      },
      '4': {
        content: `
# University Gold Medalist | BCA

Achieving the Gold Medal in BCA was the culmination of years of dedication, hard work, and academic excellence.

## Academic Journey

The Bachelor of Computer Applications program challenged me in numerous ways, from complex algorithms to real-world application development.

## Key Achievements

- Consistent Performance**: Maintaining high grades throughout the program
- Project Work: Developing innovative solutions and applications
- Research: Contributing to academic projects and papers
- Leadership: Taking active roles in student organizations

## The Gold Medal Moment

Standing on stage to receive the gold medal was a moment of pure joy and validation. It represented not just academic success, but the countless hours of study, the late nights, and the unwavering commitment to excellence.

## Beyond the Medal

While the medal is a tangible recognition, the true value lies in the knowledge gained, the skills developed, and the confidence built during this journey.
        `,
        readTime: '3 min read'
      },
      '5': {
        content: `
# Tata Consultancy Services | Journey with TCS

Joining Tata Consultancy Services marked the beginning of my professional career in the IT industry.

## The Beginning

Starting as a fresh graduate, TCS provided the perfect platform to apply my academic knowledge in real-world scenarios.

## Learning & Growth

- Technology Stack: Working with cutting-edge technologies and frameworks
- Project Management: Understanding SDLC and agile methodologies
- Client Interaction: Developing communication and presentation skills
- Team Collaboration: Working in diverse, global teams

## Key Projects

Throughout my journey with TCS, I've had the opportunity to work on various projects across different domains, each teaching me something new and valuable.

## Professional Development

TCS invested heavily in employee development through training programs, certifications, and learning opportunities. This commitment to growth has been instrumental in my professional development.

## Current Role

Today, I continue to grow and contribute to meaningful projects, always learning and adapting to the evolving technology landscape.
        `,
        readTime: '4 min read'
      }
    };

    return contents[storyId] || {
      content: `# ${story.title}\n\nThis is a detailed story about ${story.title}. More content coming soon...`,
      readTime: '2 min read'
    };
  };

  const storyContent = getStoryContent(story.id);

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Story"
        description="Detailed insights and experiences from my journey"
      />

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 py-8"
      >
        {/* Back Button */}
        <Link to="/story" className="inline-flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Stories
        </Link>

        {/* Story Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className={`text-xs uppercase font-medium px-3 py-1 rounded-full ${categoryColors[story.category] || 'bg-muted text-text-muted'}`}>
              {story.category}
            </span>
            <div className="flex items-center gap-1 text-text-muted text-sm">
              <Calendar className="w-4 h-4" />
              {story.date}
            </div>
            <span className="text-text-muted text-sm">{storyContent.readTime}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-serif font-bold text-text-primary mb-4 leading-tight">
            {story.title}
          </h1>

          <div className="flex items-center justify-between">
            <p className="text-text-muted">By Amit Shetty</p>
            <a
              href={story.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent-purple hover:text-accent-pink transition-colors text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              View Original
            </a>
          </div>
        </header>

        {/* Story Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="whitespace-pre-line leading-relaxed">
            {storyContent.content.split('\n').map((line, index) => {
              if (line.startsWith('# ')) {
                return <h1 key={index} className="text-2xl font-bold mb-4 mt-8 first:mt-0">{line.substring(2)}</h1>;
              } else if (line.startsWith('## ')) {
                return <h2 key={index} className="text-xl font-semibold mb-3 mt-6">{line.substring(3)}</h2>;
              } else if (line.startsWith('- ')) {
                return <li key={index} className="ml-4">{line.substring(2)}</li>;
              } else if (line.trim() === '') {
                return <br key={index} />;
              } else {
                return <p key={index} className="mb-4">{line}</p>;
              }
            })}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="text-sm text-text-muted">
              Published on {story.date}
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <a href={story.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Original
                </a>
              </Button>
            </div>
          </div>
        </footer>
      </motion.article>
    </div>
  );
}