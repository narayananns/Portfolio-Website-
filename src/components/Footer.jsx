import { Link } from "react-scroll";
import { portfolioData } from "../data/portfolio";
import BrandMark from "./BrandMark";
import SocialLinks from "./SocialLinks";

const links = [
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Experience", to: "experience" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

export default function Footer() {
  const { name } = portfolioData.personalInfo;

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Link
            to="hero"
            smooth
            duration={600}
            className="flex items-center gap-2.5 cursor-pointer"
          >
            <BrandMark size={36} />
            <span className="font-display font-bold">{name}</span>
          </Link>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth
                duration={600}
                offset={-70}
                className="text-sm text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 cursor-pointer transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <SocialLinks
            containerClassName="flex gap-2"
            iconSize={18}
            className="grid place-items-center h-9 w-9 rounded-lg text-slate-500 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
          />
        </div>

        <div className="mt-10 pt-6 border-t border-slate-100 dark:border-slate-900 text-center text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
