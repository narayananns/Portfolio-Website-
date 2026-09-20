import { Link } from "react-scroll";
import { portfolioData } from "../data/portfolio";

/**
 * The social row, rendered identically in the hero, contact and footer.
 *
 * Entries carrying `scrollTo` (the mail icon) scroll to that section rather than
 * navigating away, so the message arrives through the contact form instead of
 * depending on the visitor having a mail client configured.
 */
export default function SocialLinks({ className = "", iconSize = 20, containerClassName = "" }) {
  const { socials } = portfolioData.personalInfo;

  return (
    <div className={containerClassName}>
      {socials.map((social) => {
        const Icon = social.icon;

        if (social.scrollTo) {
          return (
            <Link
              key={social.name}
              to={social.scrollTo}
              smooth
              duration={600}
              offset={-70}
              tabIndex={0}
              role="link"
              aria-label={`${social.name} — go to the contact form`}
              title={`${social.name} — go to the contact form`}
              className={`cursor-pointer ${className}`}
            >
              <Icon size={iconSize} />
            </Link>
          );
        }

        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            title={social.name}
            className={className}
          >
            <Icon size={iconSize} />
          </a>
        );
      })}
    </div>
  );
}
