"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-[#0C0C0E]/95 backdrop-blur-md shadow-sm dark:shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/logo-bg.png"
            alt="IdeaTamer"
            width={36}
            height={36}
            className="rounded-lg"
          />
          <span
            className={`font-bold text-lg transition-colors duration-300 ${
              scrolled ? "text-text-primary dark:text-gray-100" : "text-white"
            }`}
          >
            IdeaTamer
          </span>
        </Link>

        {/* Desktop links + theme toggle */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 hover:opacity-80 ${
                scrolled ? "text-text-mid dark:text-gray-400" : "text-white/90"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle scrolled={scrolled} />
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle scrolled={scrolled} />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block w-5 h-0.5 rounded-full transition-all duration-300 ${
                scrolled ? "bg-text-primary dark:bg-gray-100" : "bg-white"
              } ${
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
            className="md:hidden bg-white/95 dark:bg-[#18181B]/95 backdrop-blur-md border-t border-gray-100 dark:border-[#2E2E33] overflow-hidden"
          >
            <div className="px-5 py-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-text-mid dark:text-gray-300 font-medium py-2"
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
