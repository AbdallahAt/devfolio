export default function Services() {
  const services = [
    {
      icon: 'architecture',
      title: 'Custom Backend Architecture & Development',
      description:
        'Designing and building scalable, high-performance systems with Node.js, TypeScript, Python, and Java. Leveraging AI-assisted development for enhanced productivity and code quality, I specialize in microservices and event-driven architectures that deliver exceptional performance.',
    },
    {
      icon: 'cloud',
      title: 'Cloud Infrastructure & DevOps',
      description:
        'Building and optimizing cloud environments on AWS. From container orchestration with Kubernetes and Docker to infrastructure automation, I create reliable, cost-effective cloud solutions that scale with your business.',
    },
    {
      icon: 'strategy',
      title: 'Fractional CTO / Consulting',
      description:
        'Strategic technical leadership for growing companies. Making critical architecture decisions, supervising project progress, and providing technical guidance to ensure your engineering initiatives stay on track and deliver results.',
    },
  ];

  return (
    <section
      id="services"
      className="py-20 px-6 bg-surface-container-lowest dark:bg-surface-container-lowest-dark"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-sm font-bold uppercase tracking-wider text-primary dark:text-primary-90 mb-2">
            Freelance Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-on-surface dark:text-on-surface-dark">
            How I Can Help Your Business_
          </h2>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-surface dark:bg-surface-dark border border-outline-variant/20 dark:border-outline-variant-dark/20 rounded-xl hover:border-primary/50 dark:hover:border-primary-90/50 hover:shadow-md surface-transition"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-primary dark:bg-primary-90 group-hover:bg-primary-container dark:group-hover:bg-primary-container-dark flex items-center justify-center mb-6 surface-transition">
                <span className="material-symbols-outlined text-on-primary dark:text-on-primary-dark group-hover:text-on-primary-container dark:group-hover:text-on-primary-container-dark text-3xl">
                  {service.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-on-surface dark:text-on-surface-dark mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-on-surface-variant dark:text-on-surface-variant-dark leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
