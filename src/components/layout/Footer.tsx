import Link from "next/link";
import Image from "next/image";
import { APP_STORE_URL, PRODUCTHUNT_URL } from "@/lib/constants";

const FOOTER_LINKS = {
  Product: [
    { label: "Features", href: "/#features" },
    { label: "Compare", href: "/compare" },
    { label: "App Store", href: APP_STORE_URL, external: true },
    { label: "Product Hunt", href: PRODUCTHUNT_URL, external: true },
  ],
  "Use Cases": [
    { label: "Indie Developers", href: "/use-cases/indie-developers" },
    { label: "Creators & Designers", href: "/use-cases/creators" },
  ],
  Resources: [
    { label: "Why IdeaTamer", href: "/blog/why-ideatamer" },
    { label: "Privacy-First Productivity", href: "/blog/privacy-first-productivity" },
    { label: "Support", href: "/support" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Accessibility", href: "/accessibility" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#2E2F2F] dark:bg-[#111113] text-white">
      <div className="max-w-6xl mx-auto px-5 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/images/logo-bg.png"
                alt="IdeaTamer"
                width={28}
                height={28}
                className="rounded-lg"
              />
              <span className="font-bold">IdeaTamer</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Stop collecting ideas. Start finishing them.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white/70 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-white/70 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-sm text-white/40">
          &copy; 2026 IdeaTamer. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
