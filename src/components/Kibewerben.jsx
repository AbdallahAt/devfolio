export default function Kibewerben() {
  return (
    <section
      id="kibewerben"
      className="py-20 px-6 bg-surface dark:bg-surface-dark"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-sm font-bold uppercase tracking-wider text-primary dark:text-primary-90 mb-2">
            My SaaS Product
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-on-surface dark:text-on-surface-dark">
            Products I Shipped_
          </h2>
        </div>

        {/* Card */}
        <div className="p-8 bg-surface-container-lowest dark:bg-surface-container-lowest-dark border border-outline-variant/20 dark:border-outline-variant-dark/20 rounded-xl hover:border-primary/50 dark:hover:border-primary-90/50 hover:shadow-lg surface-transition">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-primary dark:bg-primary-90 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-on-primary dark:text-on-primary-dark text-3xl">
                work
              </span>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-on-surface dark:text-on-surface-dark mb-2">
                kibewerben.de
              </h3>
              <p className="text-on-surface-variant dark:text-on-surface-variant-dark mb-6 leading-relaxed max-w-2xl">
                A SaaS platform that helps job seekers create professional resumes and 'Anschreiben' with ease in 60 seconds.
              </p>
              <a
                href="https://kibewerben.de"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary dark:bg-primary-90 text-on-primary dark:text-on-primary-dark font-semibold rounded-lg hover:opacity-90 surface-transition"
              >
                Visit kibewerben.de
                <span className="material-symbols-outlined text-xl">open_in_new</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
