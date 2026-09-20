import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import { useSpotlight } from "../hooks/useSpotlight";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Skills() {
  const { skills } = portfolioData;
  const spotlight = useSpotlight();

  return (
    <section
      id="skills"
      className="relative bg-slate-50 dark:bg-slate-900/40 border-y border-slate-200/70 dark:border-slate-800/70"
    >
      <div className="section-container">
        <SectionHeading
          eyebrow="Toolkit"
          title="Technologies I work with"
          subtitle="The stack I reach for when building mobile apps, web platforms and machine learning prototypes."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {skills.map((group) => (
            <motion.div
              key={group.category}
              variants={item}
              {...spotlight}
              className="group spotlight surface p-6 shadow-soft card-hover"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="grid place-items-center h-11 w-11 rounded-xl bg-gradient-to-br from-brand-500/15 to-accent-500/15 text-brand-600 dark:text-brand-400 group-hover:from-brand-600 group-hover:to-accent-600 group-hover:text-white transition-all duration-300">
                  <group.icon size={21} />
                </span>
                <h3 className="font-bold">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
