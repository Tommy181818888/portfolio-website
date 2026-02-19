import { motion } from 'framer-motion';

export function GradientBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Pink blob - top left */}
      <motion.div
        className="absolute -top-[30%] -left-[20%] w-[80%] h-[80%] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,182,193,0.3) 0%, rgba(255,182,193,0) 60%)',
          filter: 'blur(100px)',
        }}
        animate={{
          y: [0, 22, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Purple blob - top center */}
      <motion.div
        className="absolute -top-[20%] left-[20%] w-[60%] h-[60%] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(200,180,255,0.25) 0%, rgba(200,180,255,0) 60%)',
          filter: 'blur(100px)',
        }}
        animate={{
          y: [0, -15, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
      
      {/* Blue blob - top right */}
      <motion.div
        className="absolute -top-[10%] right-[-10%] w-[50%] h-[50%] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(180,220,255,0.25) 0%, rgba(180,220,255,0) 60%)',
          filter: 'blur(100px)',
        }}
        animate={{
          y: [0, -20, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />
      
      {/* Yellow blob - right side */}
      <motion.div
        className="absolute top-[10%] right-[0%] w-[40%] h-[40%] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,240,180,0.2) 0%, rgba(255,240,180,0) 60%)',
          filter: 'blur(100px)',
        }}
        animate={{
          y: [0, 15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      />
      
      {/* Cyan blob - bottom */}
      <motion.div
        className="absolute bottom-[0%] left-[10%] w-[50%] h-[50%] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(180,250,255,0.2) 0%, rgba(180,250,255,0) 60%)',
          filter: 'blur(100px)',
        }}
        animate={{
          y: [0, 15, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
      />
    </div>
  );
}
