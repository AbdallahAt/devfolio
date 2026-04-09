export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-surface dark:bg-surface-dark border-t border-primary/20 dark:border-primary-90/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-on-surface-variant dark:text-on-surface-variant-dark text-sm uppercase tracking-wider">
            © {new Date().getFullYear()} Abdallah Atouani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
