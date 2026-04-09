export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-surface-container-low dark:bg-surface-container-low-dark"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Column - Title */}
          <div className="md:w-1/3">
            <h2 className="text-4xl md:text-5xl font-bold text-on-surface dark:text-on-surface-dark">
              About Me_
            </h2>
            <div className="h-1 w-12 bg-primary dark:bg-primary-90 mt-4 rounded-full"></div>
          </div>

          {/* Right Column - Content */}
          <div className="md:w-2/3">
            <div className="text-xl text-on-surface-variant dark:text-on-surface-variant-dark leading-relaxed space-y-6">
              <p>
                Hey 👋, I'm Abdallah, a Senior Software Engineer passionate about building scalable systems that drive business impact. I work in the Transport & Logistics department at Zalando, designing high-performance software solutions to optimize operations.
              </p>
              <p>
                With an M.Sc. in Computer Science from RWTH Aachen, I focus on backend engineering, distributed systems, and cloud technologies—bridging tech and business goals.
              </p>
              <p className="font-semibold text-primary dark:text-primary-90">
                Let's connect and build something impactful! 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
