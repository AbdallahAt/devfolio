export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-neutral-99 dark:bg-background-dark"
    >
      <div className="max-w-7xl mx-auto px-6 py-2 md:py-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content Column - Order 2 on mobile, 1 on desktop */}
          <div className="order-2 md:order-1 space-y-6">
            {/* Subtitle */}
            <p className="text-sm font-semibold uppercase tracking-wider text-primary dark:text-primary-90">
              Senior Backend Engineer & Technical Consultant
            </p>

            {/* Large Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-on-background dark:text-on-background-dark leading-tight">
              Abdallah{' '}
              <span className="text-primary dark:text-primary-90">
                Atouani
              </span>
            </h1>

            {/* Value Proposition */}
            <p className="text-xl md:text-2xl text-on-surface-variant dark:text-on-surface-variant-dark leading-relaxed">
              I build scalable backend systems and provide strategic technical leadership
              to help businesses grow. From microservices architecture to performance optimization,
              I turn complex technical challenges into competitive advantages.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/abdallahat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface-variant dark:text-on-surface-variant-dark hover:text-primary dark:hover:text-primary-90 transition-colors"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a
                href="https://git.rwth-aachen.de/abdallah.atouani"
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface-variant dark:text-on-surface-variant-dark hover:text-primary dark:hover:text-primary-90 transition-colors"
                aria-label="GitLab"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/abdallahat/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface-variant dark:text-on-surface-variant-dark hover:text-primary dark:hover:text-primary-90 transition-colors"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="mailto:hello@abdallah.at"
                className="text-on-surface-variant dark:text-on-surface-variant-dark hover:text-primary dark:hover:text-primary-90 transition-colors"
                aria-label="Email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>

          {/* Profile Image Column - Order 1 on mobile, 2 on desktop */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              {/* Profile Image */}
              <img
                src="/images/profile.png"
                alt="Abdallah Atouani"
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl"
              />

              {/* Status Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                <div className="px-6 py-3 bg-surface dark:bg-surface-dark border-2 border-primary dark:border-primary-90 rounded-full shadow-lg flex items-center gap-2">
                  <span className="w-3 h-3 bg-primary dark:bg-primary-90 rounded-full animate-pulse-green"></span>
                  <span className="text-sm font-semibold text-on-surface dark:text-on-surface-dark whitespace-nowrap">
                    Available for new projects
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
