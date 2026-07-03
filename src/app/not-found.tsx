import { siteContent } from "@/content/siteContent";
import { whatsappUrl } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-pearl text-ink">
      <section className="section-shell flex min-h-screen items-center justify-center py-20">
        <div className="max-w-xl rounded-[28px] bg-white p-8 text-center shadow-soft sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-sage">{siteContent.notFound.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-black sm:text-5xl">{siteContent.notFound.title}</h1>
          <p className="mt-5 text-base leading-7 text-ink/70">{siteContent.notFound.text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a className="cta-primary" href="/">
              {siteContent.notFound.primaryCta}
            </a>
            <a className="cta-secondary" href={whatsappUrl()} target="_blank" rel="noreferrer">
              {siteContent.contact.whatsappLabel}
            </a>
          </div>
          <p className="mt-6 text-sm font-semibold text-ink/50">{siteContent.contact.contactLine}</p>
        </div>
      </section>
    </main>
  );
}
