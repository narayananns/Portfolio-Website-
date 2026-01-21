export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500 dark:text-slate-400">
        <p>© {new Date().getFullYear()} Narayanan M S. All rights reserved.</p>
        <p className="text-sm mt-2">Built with React, Tailwind CSS & Framer Motion</p>
      </div>
    </footer>
  );
}
