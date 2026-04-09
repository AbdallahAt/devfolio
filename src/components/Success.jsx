export default function Success() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-99 dark:bg-background-dark px-6">
      <div className="max-w-2xl text-center">
        <div className="mb-8">
          <span className="material-symbols-outlined text-primary dark:text-primary-90 text-8xl">
            check_circle
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-on-surface dark:text-on-surface-dark mb-4">
          Message Sent Successfully!
        </h1>

        <p className="text-xl text-on-surface-variant dark:text-on-surface-variant-dark mb-8 leading-relaxed">
          Thank you for reaching out. I'll get back to you within 24 hours.
        </p>

        <a
          href="/"
          className="inline-block px-8 py-4 bg-primary text-on-primary rounded-full font-semibold text-lg shadow-lg hover:shadow-xl active:scale-95 transition-all"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
