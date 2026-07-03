import { siteContent } from "@/content/siteContent";

export const site = {
  name: siteContent.brand.name,
  fullName: siteContent.brand.fullName,
  domain: siteContent.brand.domain,
  url: siteContent.brand.url,
  email: siteContent.contact.email,
  phone: siteContent.contact.phone,
  telHref: siteContent.contact.telHref,
  whatsappUrl: siteContent.contact.whatsappUrl,
  location: siteContent.brand.location
};

export function whatsappUrl() {
  return site.whatsappUrl;
}

export function mailtoUrl(subject: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}
