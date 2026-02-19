import { motion } from 'framer-motion';
import { DecorativeDivider } from './DecorativeDivider';

interface PageHeaderProps {
  title: string;
  description?: React.ReactNode;
  children?: React.ReactNode;
}

export function PageHeader({ title, description, children }: PageHeaderProps) {
  return ( 
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center pt-28 pb-6"
    >
      <h1 className="font-serif text-4xl md:text-5xl mb-4 text-gradient">
        {title}
      </h1>
      {description && (
        <div className="max-w-lg mx-auto mb-6">
          {typeof description === 'string' ? (
            <p className="text-text-secondary text-base">{description}</p>
          ) : (
            description
          )}
        </div>
      )}
      <DecorativeDivider />
      {children}
    </motion.div>
  );
}
