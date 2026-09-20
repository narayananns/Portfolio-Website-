import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, subtitle, align = "center" }) {
  const centered = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`mb-14 ${centered ? "text-center" : ""}`}
    >
      {eyebrow && (
        <span className="eyebrow">
          <span className="h-px w-8 bg-brand-500/60" />
          {eyebrow}
        </span>
      )}
      <h2 className="section-title mt-4">{title}</h2>
      {subtitle && (
        <p
          className={`mt-4 text-slate-600 dark:text-slate-400 leading-relaxed ${
            centered ? "max-w-2xl mx-auto" : "max-w-2xl"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
