import { motion } from 'framer-motion';

export function Logo() {
  return (
    <motion.div
      className="relative w-20 h-20"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Dark charcoal moody background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-full opacity-80" />

      <svg
        viewBox="0 0 120 120"
        className="w-full h-full drop-shadow-2xl relative z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Enhanced glow filter for ray-tracing effect */}
          <filter id="rayTraceGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMorphology operator="dilate" radius="2"/>
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.8 0"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Deep transparency glass gradient */}
          <linearGradient id="glassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.08)" />
            <stop offset="30%" stopColor="rgba(255,255,255,0.03)" />
            <stop offset="70%" stopColor="rgba(255,255,255,0.05)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.08)" />
          </linearGradient>

          {/* Intense electric white and cyan neon gradient */}
          <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1"/>
            <stop offset="50%" stopColor="#00ffff" stopOpacity="1"/>
            <stop offset="100%" stopColor="#ffffff" stopOpacity="1"/>
          </linearGradient>

          {/* Inner reflection gradient */}
          <radialGradient id="reflection" cx="30%" cy="30%" r="50%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.1)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>

        {/* Main geometric glass shard formation */}
        <motion.g
          animate={{
            y: [0, -3, 0],
            rotate: [0, 2, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Primary central shard - sophisticated geometric */}
          <path
            d="M60 25 L75 40 L70 60 L60 55 L50 60 L45 40 Z"
            fill="url(#glassGradient)"
            stroke="url(#neonGradient)"
            strokeWidth="2"
            filter="url(#rayTraceGlow)"
            className="backdrop-blur-sm"
          />

          {/* Secondary floating shards */}
          <motion.path
            d="M35 45 L48 52 L42 65 L30 58 Z"
            fill="url(#glassGradient)"
            stroke="url(#neonGradient)"
            strokeWidth="1.5"
            filter="url(#rayTraceGlow)"
            animate={{
              y: [0, 2, 0],
              x: [0, -1, 0],
              rotate: [0, -1, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />

          <motion.path
            d="M85 45 L90 58 L78 65 L72 52 Z"
            fill="url(#glassGradient)"
            stroke="url(#neonGradient)"
            strokeWidth="1.5"
            filter="url(#rayTraceGlow)"
            animate={{
              y: [0, -2, 0],
              x: [0, 1, 0],
              rotate: [0, 1, 0]
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />

          {/* Tertiary accent shards */}
          <motion.path
            d="M25 55 L32 62 L28 68 L21 61 Z"
            fill="url(#glassGradient)"
            stroke="url(#neonGradient)"
            strokeWidth="1"
            filter="url(#rayTraceGlow)"
            animate={{
              y: [0, 1.5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />

          <motion.path
            d="M95 55 L102 62 L98 68 L91 61 Z"
            fill="url(#glassGradient)"
            stroke="url(#neonGradient)"
            strokeWidth="1"
            filter="url(#rayTraceGlow)"
            animate={{
              y: [0, -1.5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          />

          {/* Micro shards for detail */}
          <motion.circle
            cx="52"
            cy="30"
            r="2.5"
            fill="url(#glassGradient)"
            stroke="url(#neonGradient)"
            strokeWidth="0.8"
            filter="url(#rayTraceGlow)"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <motion.circle
            cx="68"
            cy="30"
            r="2"
            fill="url(#glassGradient)"
            stroke="url(#neonGradient)"
            strokeWidth="0.8"
            filter="url(#rayTraceGlow)"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.4, 1, 0.4]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </motion.g>

        {/* Realistic reflections and highlights */}
        <ellipse
          cx="60"
          cy="35"
          rx="12"
          ry="4"
          fill="url(#reflection)"
          opacity="0.7"
        />

        <ellipse
          cx="58"
          cy="50"
          rx="6"
          ry="2.5"
          fill="url(#reflection)"
          opacity="0.5"
        />

        {/* Edge highlights for 3D effect */}
        <path
          d="M60 25 L62 27 L60 29 L58 27 Z"
          fill="rgba(255,255,255,0.3)"
          opacity="0.8"
        />

        <path
          d="M45 40 L47 42 L45 44 L43 42 Z"
          fill="rgba(255,255,255,0.2)"
          opacity="0.6"
        />

        <path
          d="M75 40 L77 42 L75 44 L73 42 Z"
          fill="rgba(255,255,255,0.2)"
          opacity="0.6"
        />
      </svg>

      {/* Enhanced ambient cyber-corporate glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-transparent to-cyan-500/10 rounded-full blur-2xl animate-pulse" />
      <div className="absolute inset-2 bg-gradient-to-r from-white/5 via-cyan-500/5 to-white/5 rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }} />
    </motion.div>
  );
}