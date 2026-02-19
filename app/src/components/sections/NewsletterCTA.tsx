import { motion } from 'framer-motion';
import { ChevronRight, Mail } from 'lucide-react';

export function NewsletterCTA() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.01 }}
          className="block relative overflow-hidden rounded-2xl p-5 group bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 dark:from-gray-800 dark:via-gray-900 dark:to-black border border-yellow-200 dark:border-gray-700 shadow-lg dark:shadow-gray-900/50"
        >
          <div className="flex items-center gap-4">
            {/* Icon */}
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 dark:from-orange-600 dark:to-red-600 flex items-center justify-center text-white shadow-md">
              <Mail className="w-6 h-6" />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="font-script text-xl text-text-primary dark:text-text-primary mb-0.5">
                Side Notes
              </h3>
              <p className="text-text-secondary dark:text-text-secondary text-sm">
                New here? You can also follow me on LinkedIn for more updates
              </p>
            </div>

            {/* Arrow */}
            <ChevronRight className="w-5 h-5 text-text-muted dark:text-text-muted flex-shrink-0 transition-transform group-hover:translate-x-1" />
          </div>
        </motion.a>
      </div>
    </section>
  );
}
