import Link from "next/link";
import Image from "next/image";
import { APP_STORE_URL, PRODUCTHUNT_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-text-primary text-white">
      <div className="max-w-6xl mx-auto px-5 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-bg.png"
              alt="IdeaTamer"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="font-bold text-lg">IdeaTamer</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-white/70">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/support" className="hover:text-white transition-colors">
              Support
            </Link>
            <Link href="/accessibility" className="hover:text-white transition-colors">
              Accessibility
            </Link>
            <a
              href={PRODUCTHUNT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Product Hunt
            </a>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              App Store
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-sm text-white/40">
          &copy; 2026 IdeaTamer. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
