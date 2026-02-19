import { motion } from 'framer-motion';

interface FilterTabsProps {
  options: string[];
  active: string;
  onChange: (value: string) => void;
}

export function FilterTabs({ options, active, onChange }: FilterTabsProps) {
  return (
    <div className="inline-flex items-center p-1 bg-muted rounded-full">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`relative px-5 py-1.5 text-sm font-medium rounded-full transition-all ${
            active === option
              ? 'text-white'
              : 'text-text-secondary hover:text-text-primary'
          }`}
        >
          {active === option && (
            <motion.div
              layoutId="activeFilter"
              className="absolute inset-0 rounded-full"
              style={{
                background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #F43F5E 100%)',
              }}
              transition={{ type: 'spring', duration: 0.5, bounce: 0.2 }}
            />
          )}
          <span className="relative z-10">{option}</span>
        </button>
      ))}
    </div>
  );
}
