export default function Experience() {
  const experiences = [
    {
      position: 'Senior Software Engineer',
      company: 'Zalando SE',
      time: 'July 2021 - Present',
      location: 'Germany',
      description:
        'Led the design and development of robust and scalable backend software systems to optimize key transport infrastructure at Zalando, including transport network optimization and carrier configuration. Played a key role in the backend system design and successful launch of Zalando\'s transport portal using TypeScript/Node.js, Python, Kubernetes, and Docker on AWS.',
    },
    {
      position: 'Software Engineer Intern',
      company: 'Trifacta',
      time: 'Oct 2019 - Jan 2020',
      location: 'Berlin, Germany',
      description:
        'Contributed to software projects to enhance cloud-based data integration, including a key project focused on integrating with Databricks. Worked closely with engineers, UI/UX designers, product managers, and QA testers to deliver new features, focusing on backend development with Java and Spring Boot.',
    },
    {
      position: 'Working Student - Software Engineer',
      company: 'VEDA GmbH',
      time: 'Apr 2018 - Apr 2019',
      location: 'Aachen, Germany',
      description:
        'Worked within the engineering team to build robust HR software solutions using Java and the Spring Framework. Developed customized applications tailored to unique client needs while ensuring seamless integration with core software products. Contributed to the Innovation Lab, researching and engineering new ideas to enhance HR solutions.',
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 px-6 bg-surface-container-low dark:bg-surface-container-low-dark"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-sm font-bold uppercase tracking-wider text-primary dark:text-primary-90 mb-2">
            Track Record
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-on-surface dark:text-on-surface-dark">
            Professional Journey_
          </h2>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-8 bg-surface-container-lowest dark:bg-surface-container-lowest-dark border border-outline-variant/20 dark:border-outline-variant-dark/20 rounded-xl hover:shadow-md surface-transition"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-on-surface dark:text-on-surface-dark">
                    {exp.position}
                  </h3>
                  <p className="text-lg font-semibold text-primary dark:text-primary-90">
                    {exp.company}
                  </p>
                </div>
                <div className="text-on-surface-variant dark:text-on-surface-variant-dark md:text-right">
                  <p className="font-medium">{exp.time}</p>
                  <p className="text-sm">{exp.location}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-on-surface-variant dark:text-on-surface-variant-dark leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
