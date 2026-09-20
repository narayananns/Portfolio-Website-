import { useState } from "react";
import { portfolioData } from "../data/portfolio";
import { profilePhoto } from "../lib/profilePhoto";

/** Small circular avatar used as the site mark in the navbar and footer. */
export default function BrandMark({ size = 36 }) {
  const [broken, setBroken] = useState(false);
  const { name, initials } = portfolioData.personalInfo;
  const showPhoto = profilePhoto && !broken;

  return (
    <span
      style={{ width: size, height: size }}
      className="relative grid shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-600 to-accent-600 p-[2px] shadow-soft"
    >
      {showPhoto ? (
        <img
          src={profilePhoto}
          alt={name}
          width={size}
          height={size}
          onError={() => setBroken(true)}
          className="h-full w-full rounded-full object-cover object-center"
        />
      ) : (
        <span className="grid h-full w-full place-items-center rounded-full bg-gradient-to-br from-brand-600 to-accent-600 font-display text-[0.7rem] font-bold tracking-tight text-white">
          {initials}
        </span>
      )}
    </span>
  );
}
