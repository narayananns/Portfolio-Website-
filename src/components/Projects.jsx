import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";
import { portfolioData } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// Placeholder links in the data file are stored as "#".
const isLive = (url) => Boolean(url) && url !== "#";

export default function Projects() {
  const { projects, projectFilters } = portfolioData;
  const [filter, setFilter] = useState("All");

  const visible =
    filter === "All" ? projects : projects.filter((p) => p.type === filter);

  return (
    <section
      id="projects"
      className="relative bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200/70 dark:border-slate-800/70"
    >
      <div className="section-container">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured projects"
          subtitle="From cross-platform mobile apps to full-stack web platforms and machine learning models."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {projectFilters.map((option) => (
            <button
              key={option}
              onClick={() => setFilter(option)}
              aria-pressed={filter === option}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                filter === option
                  ? "text-white"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              }`}
            >
              {filter === option && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-600 to-accent-600"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">{option}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.article
                key={project.title}
                layout
                variants={item}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.2 } }}
                className="group relative surface overflow-hidden shadow-soft card-hover flex flex-col"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-500 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity"
                />

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-brand-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-brand-700 dark:text-brand-300">
                        {project.type}
                      </span>
                      {project.featured && (
                        <span
                          title="Featured project"
                          className="grid place-items-center h-6 w-6 rounded-full bg-amber-500/10 text-amber-500"
                        >
                          <Star size={12} fill="currentColor" />
                        </span>
                      )}
                    </div>

                    <div className="flex gap-2">
                      {isLive(project.github) && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`${project.title} source code`}
                          aria-label={`${project.title} source code`}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 dark:hover:bg-slate-700 transition-colors"
                        >
                          <Github size={17} />
                        </a>
                      )}
                      {isLive(project.link) && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`${project.title} live demo`}
                          aria-label={`${project.title} live demo`}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-brand-600 transition-colors"
                        >
                          <ExternalLink size={17} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold mb-2 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-1 font-mono text-[11px] text-slate-600 dark:text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <p className="mt-12 text-center text-sm text-slate-500 dark:text-slate-400">
          More work lives on{" "}
          <a
            href="https://github.com/narayananns"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brand-600 dark:text-brand-400 hover:underline underline-offset-4"
          >
            my GitHub
          </a>
          .
        </p>
      </div>
    </section>
  );
}
