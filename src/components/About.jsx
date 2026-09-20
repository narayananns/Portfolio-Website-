import { motion } from "framer-motion";
import { Award, GraduationCap, Trophy, CheckCircle2, Sparkle } from "lucide-react";
import { portfolioData } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import ListenButton from "./ListenButton";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  const { about, education, certifications, achievements } = portfolioData;

  return (
    <section id="about" className="relative">
      <div className="section-container">
        <SectionHeading
          eyebrow="About me"
          title="Turning ideas into shipped products"
          subtitle="A quick look at who I am, where I studied, and what I have earned along the way."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Story */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 surface p-7 sm:p-9 shadow-soft"
          >
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Sparkle className="text-brand-500" size={20} />
                Who I am
              </h3>
              <ListenButton text={`${about.bio} ${about.bioSecondary}`} />
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{about.bio}</p>
            <p className="mt-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              {about.bioSecondary}
            </p>

            <div className="mt-7 grid sm:grid-cols-2 gap-3">
              {about.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 p-3.5"
                >
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 shrink-0 text-emerald-500"
                  />
                  <span className="text-sm text-slate-700 dark:text-slate-300 leading-snug">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                Interests
              </h4>
              <div className="flex flex-wrap gap-2">
                {about.interests.map((interest) => (
                  <span key={interest} className="chip">
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                Strengths
              </h4>
              <div className="flex flex-wrap gap-2">
                {about.softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="chip bg-brand-500/10 text-brand-700 dark:text-brand-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education, certs, awards */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="surface p-7 shadow-soft">
              <div className="flex items-center gap-2.5 mb-5">
                <span className="grid place-items-center h-9 w-9 rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400">
                  <GraduationCap size={19} />
                </span>
                <h3 className="text-lg font-bold">Education</h3>
              </div>
              <div className="space-y-5">
                {education.map((edu) => (
                  <div
                    key={edu.degree}
                    className="relative pl-5 border-l-2 border-slate-200 dark:border-slate-800"
                  >
                    <span className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-brand-500" />
                    <h4 className="font-semibold leading-snug">{edu.degree}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {edu.location} &middot; {edu.year}
                    </p>
                    <p className="mt-2 inline-block rounded-md bg-emerald-500/10 px-2 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      {edu.score}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface p-7 shadow-soft">
              <div className="flex items-center gap-2.5 mb-5">
                <span className="grid place-items-center h-9 w-9 rounded-lg bg-accent-500/10 text-accent-600 dark:text-accent-400">
                  <Award size={19} />
                </span>
                <h3 className="text-lg font-bold">Certifications</h3>
              </div>
              <ul className="space-y-3">
                {certifications.map((cert) => (
                  <li key={cert.name} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                    <div>
                      <p className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-snug">
                        {cert.name}
                      </p>
                      <p className="text-xs text-slate-500">{cert.issuer}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="surface p-7 shadow-soft">
              <div className="flex items-center gap-2.5 mb-5">
                <span className="grid place-items-center h-9 w-9 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <Trophy size={19} />
                </span>
                <h3 className="text-lg font-bold">Achievements</h3>
              </div>
              <ul className="space-y-3">
                {achievements.map((item) => (
                  <li key={item.title}>
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
