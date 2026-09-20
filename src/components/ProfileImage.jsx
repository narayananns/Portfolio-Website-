import { useState } from "react";
import { portfolioData } from "../data/portfolio";
import { profilePhoto } from "../lib/profilePhoto";

export default function ProfileImage({ className = "" }) {
  const [broken, setBroken] = useState(false);
  const { name, initials } = portfolioData.personalInfo;

  if (profilePhoto && !broken) {
    return (
      <img
        src={profilePhoto}
        alt={name}
        loading="eager"
        onError={() => setBroken(true)}
        className={`h-full w-full object-cover object-center ${className}`}
      />
    );
  }

  return (
    <div
      className={`h-full w-full flex items-center justify-center bg-gradient-to-br from-brand-600 via-brand-500 to-accent-600 ${className}`}
      aria-label={name}
      role="img"
    >
      <span className="font-display text-6xl md:text-7xl font-extrabold text-white/95 tracking-tight">
        {initials}
      </span>
    </div>
  );
}
