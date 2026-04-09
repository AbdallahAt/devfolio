import { useState, useEffect } from 'react';

export default function Navigation() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'experience', 'tech-stack', 'publications', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/80 dark:bg-surface-dark/80 backdrop-blur-lg border-b border-outline-variant/20 dark:border-outline-variant-dark/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <a
            href="#hero"
            className="text-xl font-bold text-on-surface dark:text-on-surface-dark hover:text-primary transition-colors"
          >
            Abdallah Atouani
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'text-primary dark:text-primary-90'
                    : 'text-on-surface-variant dark:text-on-surface-variant-dark hover:text-primary dark:hover:text-primary-90'
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-surface-container dark:hover:bg-surface-container-dark transition-colors"
              aria-label="Toggle dark mode"
            >
              <span className="material-symbols-outlined text-on-surface-variant dark:text-on-surface-variant-dark">
                {darkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>

            {/* CTA Button */}
            <a
              href="#contact"
              className="px-6 py-2.5 bg-primary text-on-primary rounded-full font-medium shadow-lg hover:shadow-xl active:scale-95 transition-all"
            >
              Work With Me
            </a>
          </div>

          {/* Mobile Menu Button (simplified for now) */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-surface-container dark:hover:bg-surface-container-dark transition-colors"
              aria-label="Toggle dark mode"
            >
              <span className="material-symbols-outlined text-on-surface-variant dark:text-on-surface-variant-dark">
                {darkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
