import { ReactNode } from "react";

const accentClass = "text-gold-500 italic font-normal";

type SectionHeadingProps = {
  label: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  level?: "primary" | "secondary";
  className?: string;
};

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  level = "primary",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";
  const isPrimary = level === "primary";
  const Tag = isPrimary ? "h2" : "h3";

  return (
    <header
      className={`${centered ? "text-center" : ""} ${className}`.trim()}
    >
      <div
        className={`mb-4 flex items-center gap-3 md:mb-5 ${
          centered ? "justify-center" : ""
        }`}
      >
        <span
          className="h-px w-10 shrink-0 bg-gold-400"
          aria-hidden="true"
        />
        <p className="font-serif text-lg italic text-gold-600 md:text-xl">
          {label}
        </p>
        {centered && (
          <span
            className="h-px w-10 shrink-0 bg-gold-400"
            aria-hidden="true"
          />
        )}
      </div>

      <Tag
        className={`font-serif font-semibold text-chocolate-800 tracking-[-0.02em] ${
          isPrimary
            ? "max-w-3xl text-[2.25rem] leading-[1.06] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.5rem]"
            : "max-w-3xl text-[2rem] leading-[1.08] sm:text-[2.5rem] md:text-[2.875rem]"
        } ${centered ? "mx-auto" : ""}`}
      >
        {title}
      </Tag>

      {description && (
        <p
          className={`mt-4 max-w-2xl text-base font-light leading-relaxed text-chocolate-600 md:mt-5 md:text-lg ${
            centered ? "mx-auto" : ""
          } ${isPrimary ? "md:mt-6" : ""}`}
        >
          {description}
        </p>
      )}
    </header>
  );
}

type SubsectionTitleProps = {
  children: ReactNode;
  className?: string;
};

/** Smaller in-section titles — no label line */
export function SubsectionTitle({
  children,
  className = "",
}: SubsectionTitleProps) {
  return (
    <h3
      className={`font-serif text-2xl font-semibold leading-snug tracking-[-0.01em] text-chocolate-800 md:text-[1.75rem] lg:text-3xl ${className}`.trim()}
    >
      {children}
    </h3>
  );
}

/** Re-export for inline gold italic accents in titles */
export { accentClass };
