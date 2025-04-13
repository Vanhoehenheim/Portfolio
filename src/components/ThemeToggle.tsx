import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

    // Determine the initial theme: default dark unless explicitly light
    let initialIsDarkMode;
    if (savedTheme === 'light') {
      initialIsDarkMode = false;
    } else if (savedTheme === 'dark') {
      initialIsDarkMode = true;
    } else {
      // No saved theme, check system preference
      initialIsDarkMode = !prefersLight; // Default to dark unless system prefers light
    }

    // Apply the theme
    setIsDarkMode(initialIsDarkMode);
    if (initialIsDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative h-10 w-10 rounded-full flex items-center justify-center 
      transition-colors hover:bg-secondary group"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 transition-all group-hover:text-playful-yellow" />
      ) : (
        <Moon className="h-5 w-5 transition-all group-hover:text-playful-purple" />
      )}
      <span className="sr-only">{isDarkMode ? 'Light mode' : 'Dark mode'}</span>
    </button>
  );
};

export default ThemeToggle;
