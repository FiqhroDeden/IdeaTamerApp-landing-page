"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FORMSPREE_URL } from "@/lib/constants";

interface EmailSignupFormProps {
  size?: "default" | "large";
  variant?: "hero" | "section";
}

export function EmailSignupForm({ size = "default", variant = "section" }: EmailSignupFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const isHero = variant === "hero";
  const isLarge = size === "large";

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || status === "submitting") return;

    setStatus("submitting");

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className={isLarge ? "w-full max-w-md" : "w-full max-w-sm"}>
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`flex items-center gap-2 ${isLarge ? "text-base" : "text-sm"} ${
              isHero ? "text-white" : "text-victory-emerald"
            } font-semibold`}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
            You&apos;re in. I&apos;ll only write when there&apos;s something worth saying.
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className={`flex gap-2 ${isLarge ? "flex-col sm:flex-row" : "flex-col sm:flex-row"}`}
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") setStatus("idle");
              }}
              className={`flex-1 rounded-xl border px-4 font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-hero-blue/50 ${
                isLarge ? "h-13 text-base" : "h-12 text-sm"
              } ${
                isHero
                  ? "bg-white/95 border-white/30 text-text-primary"
                  : "bg-white dark:bg-[#1E1E22] border-gray-200 dark:border-[#2E2E33] text-text-primary dark:text-gray-100"
              } ${status === "error" ? "ring-2 ring-rival-red/50 border-rival-red" : ""}`}
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className={`rounded-xl font-bold text-white transition-all whitespace-nowrap ${
                isLarge ? "h-13 px-7 text-base" : "h-12 px-5 text-sm"
              } ${
                status === "submitting"
                  ? "bg-hero-blue/60 cursor-wait"
                  : "bg-hero-blue hover:bg-hero-blue-dim active:scale-[0.98]"
              }`}
            >
              {status === "submitting" ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Joining...
                </span>
              ) : (
                "Join List"
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>

      {status === "error" && (
        <p className={`mt-2 text-sm ${isHero ? "text-rival-red-lighter" : "text-rival-red"}`}>
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}
