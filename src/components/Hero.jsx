import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowDown, Download } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function Hero() {
  const { name, title, socials } = portfolioData.personalInfo;

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm font-medium mb-6">
            Available for Hire
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">{name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            {title}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="projects"
              smooth={true}
              offset={-70}
              className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors cursor-pointer"
            >
              View My Work
            </Link>
            <a
              href="/resume.pdf"
              download="Narayanan_Resume.pdf"
              className="px-8 py-3 rounded-full border border-slate-300 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors flex items-center gap-2 font-medium"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>

          <div className="flex justify-center gap-6 text-slate-500 dark:text-slate-400">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110"
                aria-label={social.name}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="text-slate-400" />
        </motion.div>
      </div>
    </section>
  );
}
