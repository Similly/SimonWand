type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <header className={centered ? "text-center" : ""}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--text-muted)]">{eyebrow}</p>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
          {description}
        </p>
      ) : null}
    </header>
  );
}
