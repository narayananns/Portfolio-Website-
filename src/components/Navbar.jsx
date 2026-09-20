import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import BrandMark from "./BrandMark";
import { useActiveSection } from "../hooks/useActiveSection";
import resume from "../assets/resume.pdf";

const navLinks = [
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Experience", to: "experience" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

const sectionIds = ["hero", ...navLinks.map((l) => l.to)];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keep the page from scrolling behind the open mobile sheet.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/70 dark:border-slate-800/70 shadow-soft"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="hero"
            smooth
            duration={600}
            aria-label="Back to top"
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <span className="transition-transform group-hover:scale-105">
              <BrandMark size={36} />
            </span>
            <span className="font-display font-bold text-lg hidden sm:block">
              Narayanan
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth
                duration={600}
                offset={-70}
                className={`relative px-4 py-2 text-sm font-medium cursor-pointer rounded-full transition-colors ${
                  active === link.to
                    ? "text-brand-600 dark:text-brand-400"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {active === link.to && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-brand-500/10 dark:bg-brand-400/15"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{link.name}</span>
              </Link>
            ))}

            <div className="mx-2 h-5 w-px bg-slate-200 dark:bg-slate-800" />
            <ThemeToggle />
            <a
              href={resume}
              download="Narayanan_M_S_Resume.pdf"
              className="ml-2 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-brand-600 to-accent-600 hover:shadow-glow transition-all"
            >
              <Download size={15} />
              Resume
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen((open) => !open)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800"
          >
            <div className="px-5 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth
                  duration={600}
                  offset={-70}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3.5 rounded-xl text-base font-medium cursor-pointer transition-colors ${
                    active === link.to
                      ? "bg-brand-500/10 text-brand-600 dark:text-brand-400"
                      : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={resume}
                download="Narayanan_M_S_Resume.pdf"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full mt-3"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
