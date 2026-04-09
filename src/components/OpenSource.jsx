export default function OpenSource() {
  return (
    <section
      id="open-source"
      className="py-20 px-6 bg-surface-container-lowest dark:bg-surface-container-lowest-dark"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-sm font-bold uppercase tracking-wider text-primary dark:text-primary-90 mb-2">
            Open Source
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-on-surface dark:text-on-surface-dark">
            Community Contributions_
          </h2>
        </div>

        {/* Open Source Card */}
        <div className="p-8 bg-surface dark:bg-surface-dark border border-outline-variant/20 dark:border-outline-variant-dark/20 rounded-xl hover:shadow-lg surface-transition">
          <div className="flex items-start gap-4 mb-4">
            <span className="material-symbols-outlined text-primary dark:text-primary-90 text-4xl">
              code
            </span>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-on-surface dark:text-on-surface-dark mb-2 leading-tight">
                JGraphT - Java Graph Library
              </h3>
              <p className="text-on-surface-variant dark:text-on-surface-variant-dark mb-1">
                Summer 2018 · Aachen, Germany
              </p>
              <p className="text-on-surface-variant dark:text-on-surface-variant-dark mb-4 leading-relaxed">
                Extended the Java open-source graph library JGraphT by implementing Color Refinement and a Color Refinement Isomorphism Inspector. These algorithms are fundamental for graph isomorphism testing and have applications in various domains including network analysis and computational chemistry.
              </p>
              <a
                href="https://github.com/jgrapht/jgrapht"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary dark:text-primary-90 font-semibold hover:underline"
              >
                View Project
                <span className="material-symbols-outlined text-xl">open_in_new</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
