import { motion } from 'framer-motion';

export function DecorativeDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      animate={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex items-center justify-center gap-3 max-w-xs mx-auto my-6"
    >
      {/* Left swirl */}
      <svg
        width="50"
        height="10"
        viewBox="0 0 50 10"
        fill="none"
        className="text-border"
      >
        <path
          d="M50 5C42 5 42 1 34 1C26 1 26 9 18 9C10 9 10 5 0 5"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
        <circle cx="2" cy="5" r="1.5" fill="currentColor" />
      </svg>

      {/* Diamond */}
      <div className="w-1.5 h-1.5 bg-text-primary dark:bg-text-primary transform rotate-45" />

      {/* Center dot */}
      <div className="w-1 h-1 rounded-full bg-text-primary dark:bg-text-primary" />

      {/* Right swirl */}
      <svg
        width="50"
        height="10"
        viewBox="0 0 50 10"
        fill="none"
        className="text-border"
      >
        <path
          d="M0 5C8 5 8 1 16 1C24 1 24 9 32 9C40 9 40 5 50 5"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
        <circle cx="48" cy="5" r="1.5" fill="currentColor" />
      </svg>
    </motion.div>
  );
}
