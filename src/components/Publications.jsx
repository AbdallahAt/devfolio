export default function Publications() {
  return (
    <section
      id="publications"
      className="py-20 px-6 bg-surface-container-low dark:bg-surface-container-low-dark"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-sm font-bold uppercase tracking-wider text-primary dark:text-primary-90 mb-2">
            Research & Insights
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-on-surface dark:text-on-surface-dark">
            Publications_
          </h2>
        </div>

        {/* Publication Card */}
        <div className="p-8 bg-surface dark:bg-surface-dark border border-outline-variant/20 dark:border-outline-variant-dark/20 rounded-xl hover:shadow-lg surface-transition">
          <div className="flex items-start gap-4 mb-4">
            <span className="material-symbols-outlined text-primary dark:text-primary-90 text-4xl">
              article
            </span>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-on-surface dark:text-on-surface-dark mb-3 leading-tight">
                Artifact and reference models for generative machine learning frameworks and build systems
              </h3>
              <p className="text-on-surface-variant dark:text-on-surface-variant-dark mb-4">
                Proceedings of the 20th ACM SIGPLAN International Conference on Generative Programming: Concepts and Experiences · 1. Okt. 2021
              </p>
              <a
                href="https://doi.org/10.1145/3486609.3487199"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary dark:text-primary-90 font-semibold hover:underline"
              >
                Read Publication
                <span className="material-symbols-outlined text-xl">open_in_new</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
