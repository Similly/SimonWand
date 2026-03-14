import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-zinc-900 py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at 15% 20%, rgba(250, 250, 250, 0.08), transparent 30%), radial-gradient(circle at 80% 18%, rgba(250, 250, 250, 0.09), transparent 24%), linear-gradient(145deg, rgba(10,10,10,1), rgba(10,10,10,0.94))",
        }}
      />
      <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden>
        <div className="mx-auto grid h-full max-w-6xl grid-cols-6 border-x border-zinc-800/70 md:grid-cols-12">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="border-r border-zinc-800/70" />
          ))}
        </div>
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:gap-20">
        <div>
          <span className="inline-flex items-center rounded-md border border-zinc-700 bg-zinc-900/60 px-3 py-1 text-xs font-medium text-zinc-200">
            {portfolioData.person.availability}
          </span>
          <h1 className="mt-6 text-4xl font-medium tracking-tight text-zinc-50 sm:text-6xl">
            Hello, I&apos;m <br />
            <span className="bg-gradient-to-r from-zinc-50 to-zinc-300 bg-clip-text text-transparent">
              {portfolioData.person.name}
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-8 text-zinc-300 sm:text-lg">
            {portfolioData.person.tagline}
          </p>
          <p className="mt-3 max-w-xl text-pretty text-sm leading-7 text-zinc-500 sm:text-base">
            {portfolioData.person.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={portfolioData.person.resumeUrl}
              className="inline-flex items-center justify-center rounded-md bg-zinc-100 px-5 py-2.5 text-sm font-medium text-zinc-900 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
            >
              Download Resume
            </Link>
            <Link
              href="#projects"
              className="inline-flex items-center justify-center rounded-md border border-zinc-700 bg-zinc-900/60 px-5 py-2.5 text-sm font-medium text-zinc-100 transition-colors duration-200 hover:border-zinc-500 hover:bg-zinc-800/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
            >
              View My Work
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {portfolioData.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex size-10 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900/70 text-xs font-semibold text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                aria-label={link.label}
              >
                {link.short}
              </a>
            ))}
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-zinc-800/80 pt-6">
            {portfolioData.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-xs text-zinc-500">{stat.label}</dt>
                <dd className="mt-1 text-2xl text-zinc-100">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="justify-self-center lg:justify-self-end">
          <div className="relative size-76 rounded-full border-4 border-zinc-900 bg-gradient-to-br from-zinc-700 to-zinc-950 p-1 shadow-[0_25px_80px_rgba(0,0,0,0.6)] sm:size-88">
            <Image
              src={portfolioData.person.profileImage}
              alt={portfolioData.person.profileAlt}
              fill
              sizes="(max-width: 768px) 304px, 352px"
              className="rounded-full object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
