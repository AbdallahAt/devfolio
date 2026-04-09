export default function TechStack() {
  const technologies = [
    'Node.js',
    'TypeScript',
    'Python',
    'Java',
    'PostgreSQL',
    'Docker',
    'Kubernetes',
    'AWS',
    'Linux',
    'Claude Code',
    'npm',
    'Git',
  ];

  return (
    <section
      id="tech-stack"
      className="py-20 px-6 bg-surface-container-lowest dark:bg-surface-container-lowest-dark"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-sm font-bold uppercase tracking-wider text-primary dark:text-primary-90 mb-2">
            Competencies
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-on-surface dark:text-on-surface-dark">
            Technical Ecosystem_
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Cloud Infrastructure - Spans 2 columns */}
          <div className="md:col-span-2 p-8 bg-surface dark:bg-surface-dark border border-outline-variant/20 dark:border-outline-variant-dark/20 rounded-xl hover:shadow-md surface-transition">
            <span className="material-symbols-outlined text-primary dark:text-primary-90 text-4xl mb-4">
              cloud
            </span>
            <h3 className="text-2xl font-bold text-on-surface dark:text-on-surface-dark mb-3">
              Cloud Infrastructure
            </h3>
            <p className="text-on-surface-variant dark:text-on-surface-variant-dark mb-4 leading-relaxed">
              Building and managing scalable cloud architectures with modern DevOps practices
            </p>
            <div className="flex flex-wrap gap-2">
              {['AWS', 'Kubernetes', 'Docker', 'Linux'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-surface-container dark:bg-surface-container-dark text-on-surface dark:text-on-surface-dark text-sm font-medium rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Data Modeling - Primary colored */}
          <div className="md:col-span-1 p-8 bg-primary dark:bg-primary-90 text-on-primary dark:text-on-primary-dark rounded-xl hover:shadow-md surface-transition">
            <span className="material-symbols-outlined text-on-primary dark:text-on-primary-dark text-4xl mb-4">
              storage
            </span>
            <h3 className="text-2xl font-bold mb-3">Data Modeling</h3>
            <p className="text-on-primary/90 dark:text-on-primary-dark/90 leading-relaxed">
              SQL & PostgreSQL optimization at scale
            </p>
          </div>

          {/* API Design */}
          <div className="md:col-span-1 p-8 bg-neutral-95 dark:bg-neutral-20 rounded-xl hover:shadow-md surface-transition">
            <span className="material-symbols-outlined text-primary dark:text-primary-90 text-4xl mb-4">
              api
            </span>
            <h3 className="text-2xl font-bold text-on-surface dark:text-on-surface-dark mb-3">
              API Design
            </h3>
            <p className="text-on-surface-variant dark:text-on-surface-variant-dark leading-relaxed">
              REST endpoints that developers love
            </p>
          </div>

          {/* Performance */}
          <div className="md:col-span-1 p-8 bg-neutral-95 dark:bg-neutral-20 rounded-xl hover:shadow-md surface-transition">
            <span className="material-symbols-outlined text-primary dark:text-primary-90 text-4xl mb-4">
              speed
            </span>
            <h3 className="text-2xl font-bold text-on-surface dark:text-on-surface-dark mb-3">
              Performance
            </h3>
            <p className="text-on-surface-variant dark:text-on-surface-variant-dark leading-relaxed">
              Latency reduction and caching strategies
            </p>
          </div>

          {/* Core Technology Stack - Spans 3 columns */}
          <div className="md:col-span-3 p-8 bg-surface dark:bg-surface-dark border border-outline-variant/20 dark:border-outline-variant-dark/20 rounded-xl hover:shadow-md surface-transition">
            <h3 className="text-2xl font-bold text-on-surface dark:text-on-surface-dark mb-6">
              Core Technology Stack
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {technologies.map((tech) => (
                <div
                  key={tech}
                  className="p-4 bg-surface-container dark:bg-surface-container-dark rounded-lg text-center hover:bg-primary-container dark:hover:bg-primary-container-dark surface-transition"
                >
                  <span className="font-semibold text-on-surface dark:text-on-surface-dark">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
