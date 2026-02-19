import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Instagram, Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navLinks = [
  { name: 'timeline', href: '/timeline', badge: '3' },
  { name: 'work', href: '/work' },
  { name: 'about', href: '/about' },
  { name: 'story', href: '/story' },
];

const moreLinks = [
  { name: 'links', href: '/links' },
  { name: 'tech stack', href: '/stack' },
  { name: 'photos', href: '#' },
  { name: 'contact', href: '/contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
    >
      <nav 
        className={`flex items-center gap-2 px-4 py-3 rounded-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/70 dark:bg-black/70 backdrop-blur-2xl shadow-nav border border-black/5 dark:border-white/10'
            : 'bg-white/50 dark:bg-black/50 backdrop-blur-xl border border-black/5 dark:border-white/5'
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 px-2">
          <span className="font-script text-xl text-text-primary dark:text-text-primary relative inline-block">
            realshetty
            <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-pink via-accent-purple to-accent-blue rounded-full" />
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`relative px-2.5 py-1.5 text-sm transition-colors group ${
                location.pathname === link.href
                  ? 'text-text-primary dark:text-text-primary'
                  : 'text-text-secondary dark:text-text-secondary hover:text-text-primary dark:hover:text-text-primary'
              }`}
            >
              <span className="flex items-center gap-0.5">
                {link.name}
                {link.badge && (
                  <span className="text-[10px] text-accent-pink font-medium -mt-1">
                    {link.badge}
                  </span>
                )}
              </span>
              <span
                className={`absolute bottom-0.5 left-2.5 right-2.5 h-0.5 bg-gradient-to-r from-accent-pink to-accent-purple rounded-full transition-transform origin-center ${
                  location.pathname === link.href
                    ? 'scale-x-100'
                    : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </Link>
          ))}

          {/* More Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-0.5 px-2.5 py-1.5 text-sm text-text-secondary dark:text-text-secondary hover:text-text-primary dark:hover:text-text-primary transition-colors">
                more
                <ChevronDown className="w-3 h-3" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40 bg-white/95 dark:bg-black/95 backdrop-blur-xl border-border">
              {moreLinks.map((link) => (
                <DropdownMenuItem key={link.name} asChild>
                  <Link
                    to={link.href}
                    className="text-sm cursor-pointer text-text-primary dark:text-text-primary"
                  >
                    {link.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-5 bg-border mx-1" />

        {/* Social Icons & Dark Mode */}
        <div className="flex items-center">
          <a
            href="https://github.com/Amit-Shatagar"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-text-secondary dark:text-text-secondary hover:text-text-primary dark:hover:text-text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/amitshetty18"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-text-secondary dark:text-text-secondary hover:text-text-primary dark:hover:text-text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://www.instagram.com/amit_shetty___"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-text-secondary dark:text-text-secondary hover:text-text-primary dark:hover:text-text-primary transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <button
            onClick={toggleTheme}
            className="p-2 text-text-secondary dark:text-text-secondary hover:text-text-primary dark:hover:text-text-primary transition-colors"
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-text-secondary dark:text-text-secondary hover:text-text-primary dark:hover:text-text-primary transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full mt-2 left-4 right-4 bg-white/95 dark:bg-black/95 backdrop-blur-xl rounded-2xl border border-border shadow-lg p-4 md:hidden"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                  location.pathname === link.href
                    ? 'bg-accent text-text-primary'
                    : 'text-text-secondary hover:bg-accent'
                }`}
              >
                <span className="flex items-center gap-1">
                  {link.name}
                  {link.badge && (
                    <span className="text-[10px] text-accent-pink font-medium">
                      {link.badge}
                    </span>
                  )}
                </span>
              </Link>
            ))}
            <div className="border-t border-border my-2" />
            {moreLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-text-secondary hover:bg-accent rounded-lg transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
