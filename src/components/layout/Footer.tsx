import { ArrowRight, Globe, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { homeNavigationItems } from "@/data/home";
import { navigationItems } from "@/data/navigation";
import { CtaLink } from "@/components/ui/CtaLink";
import { InstagramIcon, LinkedInIcon, WhatsAppIcon } from "@/components/ui/SocialIcons";
import { Container } from "@/components/ui/Container";

type FooterProps = {
  onePage?: boolean;
};

export function Footer({ onePage = false }: FooterProps) {
  const items = onePage ? homeNavigationItems : navigationItems;
  const currentYear = new Date().getFullYear();
  const companyItems = onePage
    ? [
        { href: "/#top", label: "Home" },
        { href: "/#company", label: "About Us" },
        { href: "/#contact", label: "Contact Us" },
      ]
    : [
        { href: "/", label: "Home" },
        { href: "/company", label: "About Us" },
        { href: "/contact", label: "Contact Us" },
      ];
  const exploreItems = onePage
    ? [
        { href: "/#products", label: "What We Trade" },
        { href: "/#services", label: "Services" },
        { href: "/#markets", label: "Global Reach" },
      ]
    : [
        { href: "/products", label: "What We Trade" },
        { href: "/capabilities", label: "Services" },
        { href: "/markets", label: "Global Reach" },
      ];

  return (
    <footer className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_10%,rgba(26,59,104,0.18),transparent_38%),linear-gradient(180deg,#041a35_0%,#031427_100%)] font-sans text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/footer.png"
          alt=""
          fill
          sizes="100vw"
          className="footer-bg-image object-cover object-center"
        />
        <div className="footer-bg-overlay absolute inset-0 bg-[linear-gradient(180deg,rgba(4,20,39,0.9)_0%,rgba(4,20,39,0.82)_35%,rgba(3,20,39,0.88)_100%)]" />
      </div>

      <Container className="max-w-none px-0 sm:px-0 lg:px-0">
        <div className="footer-shell relative mx-auto w-full max-w-[1440px] px-5 pt-8 sm:px-6 sm:pt-9 lg:px-8 lg:pt-10">
          <div className="grid gap-7 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.35fr)_minmax(0,1.15fr)] lg:gap-8">
            <div className="min-w-0">
              <p className="font-sans text-[1.32rem] font-medium uppercase leading-none tracking-[0.12em] text-white sm:text-[1.32rem]">
                RONGXING
              </p>
              <p className="mt-1 block whitespace-nowrap pl-[0.08rem] text-[0.44rem] font-semibold uppercase tracking-[0.52em] text-white/72">
                Trading Co., Ltd.
              </p>
              <div className="mt-4 h-[2px] w-9 bg-[color:var(--color-gold-500)]" />
              <p className="mt-5 max-w-[11rem] text-[0.72rem] leading-6 text-white/78">
                Connecting quality products with markets worldwide.
              </p>

              <div className="mt-6 flex items-center gap-2.5">
                {[
                  {
                    href: "mailto:info@rongxingtrading.com",
                    label: "Email Rongxing Trading",
                    icon: Mail,
                  },
                  {
                    href: "/contact",
                    label: "Open WhatsApp contact",
                    icon: (props: { className?: string }) => (
                      <WhatsAppIcon {...props} white />
                    ),
                  },
                  {
                    href: "/#top",
                    label: "Visit Instagram profile",
                    icon: InstagramIcon,
                  },
                  {
                    href: "/company",
                    label: "Visit LinkedIn profile",
                    icon: LinkedInIcon,
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      aria-label={item.label}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--color-gold-500)]/45 text-white/88 transition hover:border-[color:var(--color-gold-500)] hover:text-[color:var(--color-gold-500)]"
                    >
                      <Icon className="h-3.5 w-3.5" strokeWidth={1.7} />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-6 border-y border-white/10 py-5 lg:grid-cols-2 lg:border-y-0 lg:border-l lg:border-r lg:border-white/12 lg:px-8 lg:py-1">
              <div>
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--color-gold-500)]">
                  Company
                </p>
                <ul className="mt-5 space-y-3.5">
                  {companyItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block pb-2 text-[0.76rem] text-white/88 transition hover:text-[color:var(--color-gold-500)]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[color:var(--color-gold-500)]">
                  Explore
                </p>
                <ul className="mt-5 space-y-3.5">
                  {exploreItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block pb-2 text-[0.76rem] text-white/88 transition hover:text-[color:var(--color-gold-500)]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative min-w-0">
              <div className="grid gap-y-4">
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 shrink-0 text-[color:var(--color-gold-500)]" strokeWidth={1.6} />
                  <h2 className="text-[1.12rem] font-semibold leading-[1.05] tracking-[-0.02em] text-white">
                    Let&apos;s talk business.
                  </h2>
                </div>
                <p className="col-span-2 max-w-[13rem] text-[0.72rem] leading-6 text-white/74">
                  We&apos;re here to support your sourcing, shipping, and long-term growth.
                </p>
              </div>

              <div className="mt-6 space-y-3.5">
                <div className="flex items-center gap-3 text-[0.74rem] text-white/88">
                  <Mail className="h-3.5 w-3.5 shrink-0 text-[color:var(--color-gold-500)]" strokeWidth={1.8} />
                  <span>info@rongxingtrading.com</span>
                </div>
                <div className="flex items-center gap-3 text-[0.74rem] text-white/88">
                  <Phone className="h-3.5 w-3.5 shrink-0 text-[color:var(--color-gold-500)]" strokeWidth={1.8} />
                  <span>+86 20 1234 5678</span>
                </div>
                <div className="flex items-center gap-3 text-[0.74rem] text-white/88">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-[color:var(--color-gold-500)]" strokeWidth={1.8} />
                  <span>Guangzhou, China</span>
                </div>
              </div>

              <CtaLink
                href={onePage ? "/#contact" : "/contact"}
                variant="outline"
                icon={<ArrowRight className="h-4 w-4" strokeWidth={1.8} />}
                className="mt-7 w-fit border-[color:var(--color-gold-500)]/66"
              >
                Get In Touch
              </CtaLink>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-[color:var(--color-gold-500)]/55 py-4 text-white/72 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[0.68rem]">
              {"\u00A9"} {currentYear} Rongxing Trading Co., Ltd. All Rights Reserved.
            </p>

            <div className="flex items-center gap-2.5 text-[0.72rem] text-white/78">
              <Globe className="h-4.5 w-4.5 text-[color:var(--color-gold-500)]" strokeWidth={1.6} />
              <span>Global Trade</span>
              <span className="text-[color:var(--color-gold-500)]">•</span>
              <span>Trusted Partner.</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
