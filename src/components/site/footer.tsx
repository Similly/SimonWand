import { portfolioData } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="py-12">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-6 text-center">
          <p className="text-sm text-zinc-100">{portfolioData.person.name}</p>
          <p className="mt-2 text-sm text-zinc-400">{portfolioData.person.role}</p>
          <p className="mt-3 text-xs text-zinc-500">
            © {new Date().getFullYear()} {portfolioData.person.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
