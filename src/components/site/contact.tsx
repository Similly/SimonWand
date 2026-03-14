import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export function Contact() {
  return (
    <section id="contact" className="border-b border-zinc-900 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let&apos;s Work Together"
          description="Tell me about your goals and timeline. I&apos;ll get back to you soon."
          centered
        />

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            {portfolioData.contactDetails.map((detail) => (
              <article
                key={detail.label}
                className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4 transition-colors hover:border-zinc-700"
              >
                <p className="text-xs uppercase tracking-[0.12em] text-zinc-500">{detail.label}</p>
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="mt-2 inline-block text-sm text-zinc-200 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className="mt-2 text-sm text-zinc-200">{detail.value}</p>
                )}
              </article>
            ))}
          </div>

          <form
            action="#"
            method="post"
            className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4 sm:p-5"
            aria-label="Contact form"
          >
            <h3 className="text-sm font-medium text-zinc-100">Send a Message</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="sr-only">
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full rounded-md border border-zinc-700 bg-zinc-900/70 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Your email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full rounded-md border border-zinc-700 bg-zinc-900/70 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300"
                />
              </div>
            </div>

            <div className="mt-3">
              <label htmlFor="subject" className="sr-only">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Subject"
                required
                className="w-full rounded-md border border-zinc-700 bg-zinc-900/70 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300"
              />
            </div>

            <div className="mt-3">
              <label htmlFor="message" className="sr-only">
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Your Message"
                required
                className="w-full rounded-md border border-zinc-700 bg-zinc-900/70 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300"
              />
            </div>

            <button
              type="submit"
              className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-zinc-100 px-4 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
