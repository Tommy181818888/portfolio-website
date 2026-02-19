import { motion } from 'framer-motion';
import {
  Figma,
  Calendar,
  MessageSquare,
  Code,
  Music,
  LineChart,
  FileText,
  MessageCircle,
  ShoppingBag,
  Video,
  Film,
  Monitor,
  Lock,
  Camera,
  Image,
  Layout,
  Grid3X3,
  Triangle,
  Globe,
  Box,
  Gamepad2,
  Chrome,
  Gamepad,
  BookOpen,
  Palette,
  Layers,
  Brush,
  Focus,
  Target,
  Laptop,
  Tablet,
  Smartphone,
  Watch,
  Headphones,
  Keyboard,
  MousePointer,
  Lightbulb,
  Square,
  Database,
  BarChart3,
  Github,
  Table,
  Brain,
  BarChart,
  FileSpreadsheet,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react';
import type { App, Device } from '@/types';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const iconMap: Record<string, LucideIcon> = {
  Figma,
  Calendar,
  MessageSquare,
  Code,
  Music,
  LineChart,
  FileText,
  MessageCircle,
  ShoppingBag,
  Video,
  Film,
  Monitor,
  Lock,
  Camera,
  Image,
  Layout,
  Grid3X3,
  Triangle,
  Globe,
  Box,
  Gamepad2,
  Chrome,
  Gamepad,
  BookOpen,
  Palette,
  Layers,
  Brush,
  Focus,
  Target,
  Laptop,
  Tablet,
  Smartphone,
  Watch,
  Headphones,
  Keyboard,
  Mouse: MousePointer,
  Lightbulb,
  Square,
  Database,
  BarChart3,
  Github,
  Table,
  Brain,
  BarChart,
  FileSpreadsheet,
  TrendingUp,
};

interface AppIconProps {
  app?: App;
  device?: Device;
  index?: number;
}

export function AppIcon({ app, device, index = 0 }: AppIconProps) {
  if (app) {
    const Icon = iconMap[app.icon] || Box;

    return (
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <motion.a
              href={app.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1, y: [0, -3, 0] }}
              transition={{ 
                duration: 0.3, 
                delay: index * 0.01,
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              whileHover={{ scale: 1.08 }}
              className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-muted transition-colors"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg backdrop-blur-sm border border-white/20"
                style={{ 
                  backgroundColor: app.color,
                  boxShadow: `0 0 20px ${app.color}40, 0 0 40px ${app.color}20, 0 0 60px rgba(0,255,255,0.1)`
                }}
              >
                <Icon className="w-6 h-6" />
              </div>
            </motion.a>
          </TooltipTrigger>
          <TooltipContent
            side="top"
            className="max-w-[200px] p-3 bg-background border shadow-lg"
          >
            <div className="space-y-1">
              <p className="font-medium text-sm text-text-primary">{app.name}</p>
              <p className="text-[10px] text-text-muted uppercase tracking-wide">
                {app.category}
              </p>
              <p className="text-xs text-text-secondary leading-relaxed">
                {app.description}
              </p>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  if (device) {
    const Icon = iconMap[device.icon] || Laptop;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: index * 0.01 }}
        whileHover={{ scale: 1.08 }}
        className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-muted transition-colors cursor-pointer"
      >
        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md text-text-secondary shadow-lg border border-white/20">
          <Icon className="w-6 h-6" />
        </div>
      </motion.div>
    );
  }

  return null;
}
