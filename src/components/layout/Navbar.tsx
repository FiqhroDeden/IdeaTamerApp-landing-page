"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const solid = scrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-paper/85 dark:bg-paper/85 backdrop-blur-md border-b border-ink/10 dark:border-chalk/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/logo-bg.png"
            alt="IdeaTamer"
            width={32}
            height={32}
            className="rounded-md"
          />
          <span className="font-serif-display italic text-xl text-ink dark:text-chalk">
            IdeaTamer
          </span>
          <span className="hidden sm:inline font-mono text-[10px] tracking-[0.2em] uppercase text-ink-soft dark:text-chalk-mid ml-1 pl-3 border-l border-ink/15 dark:border-chalk/15">
            Est. Ambon ’26
          </span>
        </Link>

        {/* Desktop links + theme toggle */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] tracking-[0.22em] uppercase text-ink-mid dark:text-chalk-mid hover:text-ink dark:hover:text-chalk transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle scrolled={true} />
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle scrolled={true} />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block w-5 h-0.5 rounded-full transition-all duration-300 bg-ink dark:bg-chalk ${
                  mobileOpen && i === 0
                    ? "rotate-45 translate-y-2"
                    : mobileOpen && i === 1
                    ? "opacity-0"
                    : mobileOpen && i === 2
                    ? "-rotate-45 -translate-y-2"
                    : ""
                }`}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-paper/95 dark:bg-paper/95 backdrop-blur-md border-t border-ink/15 dark:border-chalk/15 overflow-hidden"
          >
            <div className="px-5 py-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-mono text-[11px] tracking-[0.22em] uppercase text-ink-mid dark:text-chalk-mid py-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
