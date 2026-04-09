export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-surface-container-lowest dark:bg-surface-container-lowest-dark"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-on-surface dark:text-on-surface-dark mb-4">
            Let's Build Something Together_
          </h2>
          <p className="text-xl text-on-surface-variant dark:text-on-surface-variant-dark">
            Have a project in mind? Let's discuss how I can help bring your vision to life.
          </p>
        </div>

        {/* Contact Form */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="space-y-8"
        >
          {/* Hidden fields for Netlify */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don't fill this out: <input name="bot-field" />
            </label>
          </p>

          {/* The Basics Section */}
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-primary dark:text-primary-90 mb-6">
              The Basics
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-outline-variant dark:border-outline-variant-dark text-on-surface dark:text-on-surface-dark placeholder-on-surface-variant/50 dark:placeholder-on-surface-variant-dark/50 focus:border-primary dark:focus:border-primary-90 focus:outline-none transition-colors text-lg"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-outline-variant dark:border-outline-variant-dark text-on-surface dark:text-on-surface-dark placeholder-on-surface-variant/50 dark:placeholder-on-surface-variant-dark/50 focus:border-primary dark:focus:border-primary-90 focus:outline-none transition-colors text-lg"
                />
              </div>
            </div>
          </div>

          {/* The Project Brief Section */}
          <div>
            <label className="block text-sm font-bold uppercase tracking-wider text-primary dark:text-primary-90 mb-6">
              The Project Brief
            </label>
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              rows="6"
              required
              className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-outline-variant dark:border-outline-variant-dark text-on-surface dark:text-on-surface-dark placeholder-on-surface-variant/50 dark:placeholder-on-surface-variant-dark/50 focus:border-primary dark:focus:border-primary-90 focus:outline-none transition-colors text-lg resize-none"
            ></textarea>
          </div>

          {/* Submit Button and Response Time */}
          <div className="pt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Response Time Note */}
            <p className="text-sm text-on-surface-variant dark:text-on-surface-variant-dark">
              Typical response time is within 24 hours. Looking forward to hearing from you!
            </p>

            <button
              type="submit"
              className="px-12 py-4 bg-primary text-on-primary rounded-full font-semibold text-lg shadow-lg hover:shadow-xl active:scale-95 transition-all"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
