import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import { Award, GraduationCap } from "lucide-react";

export default function About() {
  const { about, education, certifications } = portfolioData;

  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Bio Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Who I Am
            </h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
              {about.bio}
            </p>
            <div className="pt-4">
              <h4 className="font-medium mb-3">Interests</h4>
              <div className="flex flex-wrap gap-2">
                {about.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm text-slate-700 dark:text-slate-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Certs */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-blue-200 dark:border-blue-900 pl-4 py-1"
                  >
                    <h4 className="font-medium text-lg">{edu.degree}</h4>
                    <p className="text-slate-500 text-sm">
                      {edu.institution} | {edu.year}
                    </p>
                    <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mt-1">
                      {edu.score}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <Award className="text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-semibold">Certifications</h3>
              </div>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-slate-700 dark:text-slate-300"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
