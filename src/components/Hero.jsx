import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowDown, Download, MapPin, Sparkles } from "lucide-react";
import { portfolioData } from "../data/portfolio";
import ProfileImage from "./ProfileImage";
import StatCounter from "./StatCounter";
import resume from "../assets/resume.pdf";

const rise = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  const { name, tagline, location, availability, socials } = portfolioData.personalInfo;
  const { specializations, stats } = portfolioData;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20"
    >
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 grid-backdrop" />
        <div className="absolute -top-24 -left-16 h-[26rem] w-[26rem] rounded-full bg-brand-400/25 dark:bg-brand-600/20 blur-3xl animate-blob" />
        <div className="absolute -bottom-32 -right-10 h-[28rem] w-[28rem] rounded-full bg-accent-400/20 dark:bg-accent-600/20 blur-3xl animate-blob [animation-delay:6s]" />
      </div>

      <div className="section-container w-full py-0">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-16 items-center">
          <motion.div
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.11 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.div variants={rise} transition={{ duration: 0.5 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-700 dark:text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                {availability}
              </span>
            </motion.div>

            <motion.h1
              variants={rise}
              transition={{ duration: 0.5 }}
              className="mt-7 font-extrabold leading-[1.18] pb-1"
            >
              <span className="block font-display text-lg sm:text-xl font-semibold text-slate-500 dark:text-slate-400 mb-1.5">
                Hi, I&apos;m
              </span>
              <span className="gradient-text block text-4xl/[1.22] sm:text-5xl/[1.22] lg:text-[3.5rem]/[1.22] pb-[0.06em] whitespace-nowrap">
                {name}
              </span>
            </motion.h1>

            <motion.div variants={rise} transition={{ duration: 0.5 }} className="mt-4">
              <p className="text-xl sm:text-2xl lg:text-3xl font-display font-semibold leading-snug">
                <span className="font-mono text-slate-400 dark:text-slate-600">&lt;/&gt;</span>{" "}
                <span className="text-brand-600 dark:text-brand-400">Full Stack Developer</span>
              </p>

              <ul className="mt-4 flex flex-wrap justify-center lg:justify-start items-center gap-x-3 gap-y-2">
                {specializations.map((item, index) => (
                  <li key={item} className="flex items-center gap-3">
                    {index > 0 && (
                      <span aria-hidden="true" className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                    )}
                    <span className="text-sm sm:text-base font-medium text-slate-600 dark:text-slate-400">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.p
              variants={rise}
              transition={{ duration: 0.5 }}
              className="mt-6 text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0"
            >
              {tagline}
            </motion.p>

            <motion.div
              variants={rise}
              transition={{ duration: 0.5 }}
              className="mt-4 flex items-center justify-center lg:justify-start gap-2 text-sm text-slate-500 dark:text-slate-400"
            >
              <MapPin size={16} className="text-brand-500" />
              {location}
            </motion.div>

            <motion.div
              variants={rise}
              transition={{ duration: 0.5 }}
              className="mt-9 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              <Link to="projects" smooth duration={600} offset={-70} className="btn-primary w-full sm:w-auto">
                <Sparkles size={18} />
                View My Work
              </Link>
              <a href={resume} download="Narayanan_M_S_Resume.pdf" className="btn-ghost w-full sm:w-auto">
                <Download size={18} />
                Download Resume
              </a>
            </motion.div>

            <motion.div
              variants={rise}
              transition={{ duration: 0.5 }}
              className="mt-9 flex justify-center lg:justify-start gap-3"
            >
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.url.startsWith("mailto") ? undefined : "_blank"}
                  rel={social.url.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  aria-label={social.name}
                  className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-white hover:border-transparent hover:bg-gradient-to-br hover:from-brand-600 hover:to-accent-600 hover:-translate-y-1 transition-all duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="order-1 lg:order-2 relative mx-auto w-44 sm:w-64 lg:w-full lg:max-w-sm"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-brand-500/30 to-accent-500/30 blur-2xl" aria-hidden="true" />
            <div className="relative aspect-square rounded-[2rem] p-[3px] bg-gradient-to-tr from-brand-500 via-accent-500 to-brand-400 shadow-lift animate-float">
              <div className="h-full w-full overflow-hidden rounded-[1.85rem] bg-slate-100 dark:bg-slate-900">
                <ProfileImage />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="glass rounded-2xl px-5 py-6 text-center shadow-soft">
              <div className="font-display text-3xl font-extrabold gradient-text">
                <StatCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <Link
        to="about"
        smooth
        duration={600}
        offset={-70}
        aria-label="Scroll to about section"
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer text-slate-400 hover:text-brand-500 transition-colors"
      >
        <ArrowDown className="animate-bounce" />
      </Link>
    </section>
  );
}
