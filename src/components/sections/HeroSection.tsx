import { motion } from 'framer-motion';
import { Instagram, Linkedin, Github, Brain, BarChart3, FileSpreadsheet, Presentation, PieChart } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/Amitsha1818', icon: Github },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/amitshetty18', icon: Linkedin },
  { name: 'Instagram', url: 'https://www.instagram.com/amit_shetty___', icon: Instagram },
];

export function HeroSection() {
  return (
    <section className="pt-28 pb-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-serif text-4xl sm:text-5xl text-text-primary dark:text-text-primary leading-[1.15] mb-6 tracking-tight"
        >
          Hi, I'm{' '}
          <span className="inline-flex items-center align-middle mx-1">
            <img
              src="src/Pictures/Profile.jpeg"
              alt="Amit Shetty"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover inline-block border-2 border-white dark:border-gray-800 shadow-md"
            />
          </span>{' '}
          Amit Shetty, {' '}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gradient hover:opacity-80 transition-opacity"
          >
            Data Analyst
          </a>
          .
        </motion.h1>

        {/* Social Links with Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-4 mb-6 flex-wrap"
        >
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                className="flex items-center gap-1.5 text-text-secondary dark:text-text-secondary hover:text-text-primary dark:hover:text-text-primary transition-colors group"
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm">{link.name}</span>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-text-secondary dark:text-text-secondary text-base leading-relaxed mb-3"
        >
         Data Analyst | TCS (Client: Apple)
High-performing Data Analyst currently driving business intelligence for Apple's global operations via TCS Hyderabad. Expert in architecting scalable data solutions and transforming complex datasets into executive-level insights. Focused on enhancing data integrity and leveraging predictive analytics to support high-stakes decision-making for one of the world's leading technology brands.
        </motion.p>

        {/* Studio Link */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-text-secondary dark:text-text-secondary"
        >
          Building what I love at{' '}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-purple hover:underline font-medium"
          >
            @fearless          </a>{' '}
          studio
        </motion.p>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-10 overflow-hidden"
        >
          <div className="relative flex whitespace-nowrap">
            <motion.div
              className="flex gap-14"
              animate={{ x: [0, -1200] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              <span className="flex items-center gap-2 text-lg font-extrabold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent tracking-wide drop-shadow-sm">
                <Brain className="w-5 h-5 text-purple-600" />
                Artificial Intelligence
              </span>
              <span className="flex items-center gap-2 text-lg font-extrabold bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent tracking-wide drop-shadow-sm">
                <BarChart3 className="w-5 h-5 text-blue-600" />
                Data Analyst
              </span>
              <span className="flex items-center gap-2 text-lg font-extrabold bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent tracking-wide drop-shadow-sm">
                <FileSpreadsheet className="w-5 h-5 text-green-600" />
                Microsoft Excel
              </span>
              <span className="flex items-center gap-2 text-lg font-extrabold bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 bg-clip-text text-transparent tracking-wide drop-shadow-sm">
                <Presentation className="w-5 h-5 text-orange-600" />
                Microsoft PowerPoint
              </span>
              <span className="flex items-center gap-2 text-lg font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-wide drop-shadow-sm">
                <PieChart className="w-5 h-5 text-indigo-600" />
                Power BI
              </span>
              {/* Duplicate for seamless loop */}
              <span className="flex items-center gap-2 text-lg font-extrabold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent tracking-wide drop-shadow-sm">
                <Brain className="w-5 h-5 text-purple-600" />
                Artificial Intelligence
              </span>
              <span className="flex items-center gap-2 text-lg font-extrabold bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent tracking-wide drop-shadow-sm">
                <BarChart3 className="w-5 h-5 text-blue-600" />
                Data Analyst
              </span>
              <span className="flex items-center gap-2 text-lg font-extrabold bg-gradient-to-r from-green-600 via-emerald-500 to-teal-600 bg-clip-text text-transparent tracking-wide drop-shadow-sm">
                <FileSpreadsheet className="w-5 h-5 text-green-600" />
                Microsoft Excel
              </span>
              <span className="flex items-center gap-2 text-lg font-extrabold bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 bg-clip-text text-transparent tracking-wide drop-shadow-sm">
                <Presentation className="w-5 h-5 text-orange-600" />
                Microsoft PowerPoint
              </span>
              <span className="flex items-center gap-2 text-lg font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-wide drop-shadow-sm">
                <PieChart className="w-5 h-5 text-indigo-600" />
                Power BI
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
