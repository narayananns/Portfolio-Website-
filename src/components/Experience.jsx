import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>

        <div className="max-w-3xl mx-auto">
          {experience.map((job, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-slate-200 dark:bg-slate-700 top-0" />
              
              <div className="md:flex justify-between items-start w-full mb-12 relative">
                {/* Mobile Line */}
                <div className="md:hidden absolute left-0 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700" />
                
                {/* Dot */}
                <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 top-0 w-3 h-3 rounded-full bg-blue-600 ring-4 ring-white dark:ring-slate-900" />

                {/* Left Side (Date) */}
                <div className="md:w-1/2 md:pr-12 md:text-right mb-2 md:mb-0">
                  <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full text-sm">
                    <Calendar size={14} />
                    {job.duration}
                  </div>
                </div>

                {/* Right Side (Content) */}
                <div className="md:w-1/2 md:pl-12">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                    {job.role}
                  </h3>
                  <div className="text-slate-600 dark:text-slate-400 font-medium mb-3 flex items-center gap-1">
                     <Briefcase size={16} /> @ {job.company}
                  </div>
                  <ul className="space-y-2">
                    {job.description.map((desc, i) => (
                      <li key={i} className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 min-w-[6px] min-h-[6px] rounded-full bg-slate-400" />
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
