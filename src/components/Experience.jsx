import { motion } from "framer-motion";
import { Briefcase, Calendar, Star } from "lucide-react";
import { portfolioData } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import AppShowcase from "./AppShowcase";
import appStats from "../data/appStats.json";
import googlePlayBadge from "../assets/google-play-badge.png";
import appStoreBadge from "../assets/app-store-badge.svg";

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
                        Live on Google Play &amp; the App Store
                      </p>
                      <div className="grid sm:grid-cols-2 gap-3 [&>*]:min-w-0">
                        {job.apps.map((app) => {
                          const stats = appStats[app.slug] ?? {};
                          const listings = [
                            {
                              store: "Google Play",
                              href: app.play,
                              badge: googlePlayBadge,
                              badgeAlt: "Get it on Google Play",
                              rating: stats.play?.rating,
                              detail: stats.play && `${stats.play.downloads} downloads`,
                            },
                            {
                              store: "App Store",
                              href: app.appStore,
                              badge: appStoreBadge,
                              badgeAlt: "Download on the App Store",
                              rating: stats.ios?.rating,
                              detail: stats.ios && `${stats.ios.ratings} ratings`,
                            },
                          ].filter((listing) => listing.href);

                          return (
                            <div
                              key={app.name}
                              className="flex min-w-0 flex-col rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 p-4"
                            >
                              <div className="flex items-center gap-3">
                                <img
                                  src={app.icon}
                                  alt=""
                                  width={44}
                                  height={44}
                                  loading="lazy"
                                  className="h-11 w-11 shrink-0 rounded-xl object-cover ring-1 ring-slate-200 dark:ring-slate-700"
                                />
                                <div className="min-w-0 flex-1">
                                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-100 truncate">
                                    {app.name}
                                  </p>
                                  <p className="text-xs text-slate-500">{app.subtitle}</p>
                                </div>
                              </div>

                              <dl className="mt-4 space-y-1.5 text-xs">
                                {listings.map((listing) => (
                                  <div key={listing.store} className="flex items-center gap-2">
                                    <dt className="w-[4.75rem] shrink-0 text-slate-500">{listing.store}</dt>
                                    <dd className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                                      {listing.rating && (
                                        <span className="inline-flex items-center gap-1 font-semibold text-slate-800 dark:text-slate-200">
                                          <Star size={12} className="text-amber-500" fill="currentColor" />
                                          {listing.rating}
                                        </span>
                                      )}
                                      {listing.detail && <span>{listing.detail}</span>}
                                    </dd>
                                  </div>
                                ))}
                              </dl>

                              <div className="mt-4 flex flex-wrap items-center gap-2.5">
                                {listings.map((listing) => (
                                  <a
                                    key={listing.store}
                                    href={listing.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${app.name} on the ${listing.store}`}
                                    className="inline-block transition-transform hover:scale-[1.04] focus-visible:scale-[1.04]"
                                  >
                                    <img
                                      src={listing.badge}
                                      alt={listing.badgeAlt}
                                      loading="lazy"
                                      className="h-10 w-auto"
                                    />
                                  </a>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <AppShowcase apps={job.apps} />
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
