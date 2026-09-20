import { motion } from "framer-motion";
import { Briefcase, Calendar, ExternalLink } from "lucide-react";
import { portfolioData } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="relative">
      <div className="section-container">
        <SectionHeading
          eyebrow="Career"
          title="Where I have worked"
          subtitle="Building and shipping production Flutter applications for real users on Android and iOS."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Spine */}
          <div
            aria-hidden="true"
            className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-brand-500 via-accent-500/50 to-transparent"
          />

          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.article
                key={job.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12"
              >
                <span className="absolute left-0 top-6 grid place-items-center h-8 w-8 rounded-full bg-white dark:bg-slate-950 ring-4 ring-white dark:ring-slate-950">
                  <span
                    className={`grid place-items-center h-8 w-8 rounded-full text-white ${
                      job.current
                        ? "bg-gradient-to-br from-brand-600 to-accent-600"
                        : "bg-slate-400 dark:bg-slate-700"
                    }`}
                  >
                    <Briefcase size={15} />
                  </span>
                </span>

                <div className="surface p-6 sm:p-7 shadow-soft card-hover">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-brand-300">
                      <Calendar size={13} />
                      {job.duration}
                    </span>
                    <span className="chip">{job.type}</span>
                    {job.current && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Current
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold">{job.role}</h3>
                  <p className="text-brand-600 dark:text-brand-400 font-medium mb-4">
                    {job.company}
                  </p>

                  <ul className="space-y-2.5">
                    {job.description.map((line) => (
                      <li
                        key={line}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400"
                      >
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                        {line}
                      </li>
                    ))}
                  </ul>

                  {job.apps && (
                    <div className="mt-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">
                        Live on Google Play
                      </p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {job.apps.map((app) => (
                          <a
                            key={app.name}
                            href={app.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/app flex items-center gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 p-3 transition-all hover:border-brand-400 dark:hover:border-brand-600 hover:shadow-soft"
                          >
                            <img
                              src={app.icon}
                              alt=""
                              width={44}
                              height={44}
                              loading="lazy"
                              className="h-11 w-11 shrink-0 rounded-xl object-cover ring-1 ring-slate-200 dark:ring-slate-700"
                            />
                            <span className="min-w-0 flex-1">
                              <span className="block text-sm font-semibold text-slate-800 dark:text-slate-100 truncate">
                                {app.name}
                              </span>
                              <span className="block text-xs text-slate-500">{app.subtitle}</span>
                            </span>
                            <ExternalLink
                              size={15}
                              className="shrink-0 text-slate-400 group-hover/app:text-brand-500 transition-colors"
                            />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.tech.map((tech) => (
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
          </div>
        </div>
      </div>
    </section>
  );
}
