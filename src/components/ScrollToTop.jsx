import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 flex items-center justify-center bg-primary dark:bg-primary-90 text-on-primary dark:text-on-primary-dark rounded-full shadow-lg hover:shadow-xl active:scale-95 transition-all z-50 animate-fade-in"
          aria-label="Scroll to top"
        >
          <span className="material-symbols-outlined text-2xl">
            arrow_upward
          </span>
        </button>
      )}
    </>
  );
}
