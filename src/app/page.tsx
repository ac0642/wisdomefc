import { siteContent } from "@/content/siteContent";
import { mailtoUrl, site, whatsappUrl } from "@/lib/site";

function SectionIntro({
  eyebrow,
  title,
  text,
  invert = false
}: {
  eyebrow: string;
  title: string;
  text: string;
  invert?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className={`text-sm font-bold uppercase tracking-[0.18em] ${invert ? "text-copper" : "text-sage"}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-3 text-3xl font-bold sm:text-4xl ${invert ? "text-white" : "text-ink"}`}>{title}</h2>
      <p className={`mt-4 text-base leading-7 ${invert ? "text-white/70" : "text-ink/70"}`}>{text}</p>
    </div>
  );
}

function PlaceholderImage({
  label,
  title,
  text
}: {
  label: string;
  title: string;
  text: string;
}) {
  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-[28px] border border-white/30 bg-navy shadow-soft">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(180,122,60,0.45),transparent_30%),linear-gradient(135deg,#14213d,#243142_48%,#6d8b74)]" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[linear-gradient(135deg,transparent_0_42%,rgba(255,255,255,0.14)_42%_44%,transparent_44%_100%)]" />
      <div className="absolute left-6 top-6 rounded-full border border-white/30 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/80">
        {label}
      </div>
      <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur">
        <p className="text-lg font-bold">{title}</p>
        <p className="mt-2 text-sm leading-6 text-white/75">{text}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-navy/88 text-white backdrop-blur-xl">
        <div className="section-shell flex min-h-16 items-center justify-between gap-4">
          <a href="#top" className="focus-ring rounded-md text-base font-extrabold">
            {siteContent.brand.name}
          </a>
          <nav aria-label="Primary navigation" className="hidden items-center gap-6 text-sm font-semibold text-white/78 lg:flex">
            {siteContent.navigation.map((link) => (
              <a key={link.href} className="hover:text-white" href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <a className="cta-primary bg-copper text-white hover:bg-white hover:text-navy" href={whatsappUrl()} target="_blank" rel="noreferrer">
            {siteContent.contact.whatsappLabelWithPhone}
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero-backdrop relative isolate overflow-hidden pt-28 text-white">
          <div className="absolute inset-x-0 bottom-0 -z-10 h-36 bg-gradient-to-t from-pearl to-transparent" />
          <div className="section-shell grid min-h-[760px] gap-12 py-14 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
            <div>
              <p className="inline-flex min-h-11 items-center rounded-full border border-white/25 bg-white/10 px-4 text-sm font-bold text-white backdrop-blur">
                {siteContent.hero.eyebrow}
              </p>
              <h1 className="mt-8 max-w-5xl text-4xl font-black leading-tight sm:text-6xl">
                {siteContent.hero.headline}
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-white/82 sm:text-xl">
                {siteContent.hero.subheadline}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a className="cta-primary" href="#contact">
                  {siteContent.hero.primaryCta}
                </a>
                <a className="cta-secondary" href={whatsappUrl()} target="_blank" rel="noreferrer">
                  {siteContent.hero.secondaryCta}
                </a>
              </div>
              <p className="mt-5 text-sm font-semibold text-white/72">{siteContent.contact.contactLine}</p>
            </div>
            <PlaceholderImage label={siteContent.hero.imageLabel} title={siteContent.hero.imageTitle} text={siteContent.hero.imageText} />
          </div>
        </section>

        <section aria-label="Trust metrics" className="section-shell -mt-12 relative z-10">
          <div className="grid overflow-hidden rounded-[28px] border border-ink/10 bg-white shadow-soft sm:grid-cols-2 lg:grid-cols-4">
            {siteContent.metrics.map((metric) => (
              <div key={metric.label} className="border-b border-ink/10 p-6 sm:border-r lg:border-b-0">
                <p className="text-3xl font-black text-navy">{metric.value}</p>
                <p className="mt-2 text-sm font-semibold leading-6 text-ink/66">{metric.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="bg-pearl py-20">
          <div className="section-shell">
            <SectionIntro eyebrow={siteContent.services.eyebrow} title={siteContent.services.title} text={siteContent.services.text} />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {siteContent.services.items.map((service) => (
                <article key={service.title} className="card p-6">
                  <h3 className="text-lg font-bold text-ink">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink/68">{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="founder" className="section-shell py-20">
          <div className="grid gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
            <div className="relative min-h-[420px] overflow-hidden rounded-[28px] border border-ink/10 bg-ink shadow-soft">
              <img
                src="/images/ahmet-canli.jpeg"
                alt="Ahmet Canli"
                className="h-full min-h-[420px] w-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-sage">{siteContent.founder.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">{siteContent.founder.title}</h2>
              <p className="mt-5 text-base leading-8 text-ink/70">{siteContent.founder.text}</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {siteContent.founder.credentials.map((item) => (
                  <div key={item} className="rounded-2xl border border-ink/10 bg-white p-4 text-sm font-semibold leading-6 text-ink/70 shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-sage">{siteContent.institutional.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">{siteContent.institutional.title}</h2>
            </div>
            <div className="rounded-[28px] bg-mist p-6 sm:p-8">
              <p className="text-base leading-8 text-ink/72">{siteContent.institutional.text}</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {siteContent.institutional.points.map((point) => (
                  <div key={point} className="rounded-2xl bg-white p-4 text-sm font-semibold leading-6 text-ink/70">
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="why-uae" className="bg-navy py-20 text-white">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-copper">{siteContent.whyUae.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{siteContent.whyUae.title}</h2>
              <p className="mt-5 text-base leading-8 text-white/72">{siteContent.whyUae.text}</p>
              <p className="mt-5 rounded-2xl border border-white/10 bg-white/10 p-4 text-sm leading-6 text-white/70">
                {siteContent.whyUae.disclaimer}
              </p>
            </div>
            <div className="grid gap-3">
              {siteContent.whyUae.bullets.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-5 text-sm font-semibold leading-6 text-white/82">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="packages" className="bg-pearl py-20">
          <div className="section-shell">
            <SectionIntro eyebrow={siteContent.packages.eyebrow} title={siteContent.packages.title} text={siteContent.packages.text} />
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {siteContent.packages.items.map((item) => (
                <article key={item.name} className="card p-6">
                  <h3 className="text-xl font-bold text-ink">{item.name}</h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-sage">{item.audience}</p>
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-ink/70">
                    {item.items.map((detail) => (
                      <li key={detail} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-copper" aria-hidden="true" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section-shell py-20">
          <SectionIntro eyebrow={siteContent.faq.eyebrow} title={siteContent.faq.title} text={siteContent.faq.text} />
          <div className="mx-auto mt-12 grid max-w-4xl gap-4">
            {siteContent.faq.items.map((item) => (
              <details key={item.question} className="group rounded-2xl border border-ink/10 bg-white p-5 shadow-soft">
                <summary className="cursor-pointer list-none text-base font-bold text-ink">
                  {item.question}
                </summary>
                <p className="mt-4 text-sm leading-7 text-ink/70">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-navy py-20 text-white">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-copper">{siteContent.contactSection.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{siteContent.contactSection.title}</h2>
              <p className="mt-5 text-base leading-8 text-white/72">{siteContent.contactSection.text}</p>
              <div className="mt-8 grid gap-3 text-sm font-semibold text-white/82">
                <a className="focus-ring rounded-xl bg-white/10 p-4 hover:bg-white/18" href={whatsappUrl()} target="_blank" rel="noreferrer">
                  WhatsApp: {site.phone}
                </a>
                <a className="focus-ring rounded-xl bg-white/10 p-4 hover:bg-white/18" href={`mailto:${site.email}`}>
                  Email: {site.email}
                </a>
                <a className="focus-ring rounded-xl bg-white/10 p-4 hover:bg-white/18" href={`tel:${site.telHref}`}>
                  Phone: {site.phone}
                </a>
                <p className="rounded-xl bg-white/10 p-4">Location: {site.location}</p>
              </div>
            </div>
            <form action={mailtoUrl(siteContent.contactSection.formSubject)} method="post" encType="text/plain" className="rounded-[28px] bg-white p-6 text-ink shadow-soft sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-ink/75">
                  {siteContent.contactSection.labels.name}
                  <input className="input" name="name" autoComplete="name" required />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-ink/75">
                  {siteContent.contactSection.labels.company}
                  <input className="input" name="company" placeholder={siteContent.contactSection.placeholders.company} />
                </label>
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-ink/75">
                  {siteContent.contactSection.labels.email}
                  <input className="input" name="email" type="email" autoComplete="email" required />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-ink/75">
                  {siteContent.contactSection.labels.phone}
                  <input className="input" name="phone" autoComplete="tel" />
                </label>
              </div>
              <label className="mt-4 grid gap-2 text-sm font-semibold text-ink/75">
                {siteContent.contactSection.labels.message}
                <textarea className="input min-h-36 resize-y" name="message" placeholder={siteContent.contactSection.placeholders.message} required />
              </label>
              <button className="cta-primary mt-5 w-full" type="submit">
                {siteContent.contactSection.submit}
              </button>
              <p className="mt-4 text-sm font-semibold text-ink/60">{siteContent.contact.contactLine}</p>
              <p className="mt-4 text-xs leading-5 text-ink/55">{siteContent.contactSection.privacy}</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-navy pb-24 text-white sm:pb-8">
        <div className="section-shell border-t border-white/10 pt-8 text-sm text-white/60">
          <div className="grid gap-3 md:grid-cols-[1.2fr_0.9fr_0.9fr] md:items-center">
            <p>{siteContent.footer.copyright}</p>
            <p>{siteContent.footer.text}</p>
            <p>{siteContent.contact.contactLine}</p>
          </div>
        </div>
      </footer>

      <a
        className="focus-ring fixed inset-x-4 bottom-4 z-50 flex min-h-12 items-center justify-center rounded-full bg-copper px-5 py-3 text-center text-sm font-black text-white shadow-lift sm:hidden"
        href={whatsappUrl()}
        target="_blank"
        rel="noreferrer"
      >
        {siteContent.contact.whatsappLabelWithPhone}
      </a>
    </>
  );
}
