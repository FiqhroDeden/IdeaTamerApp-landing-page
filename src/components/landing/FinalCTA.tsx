"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EmailSignupForm } from "@/components/ui/EmailSignupForm";
import { fadeUp, staggerContainer, floatAnimation } from "@/lib/animations";

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white to-hero-blue-bg/30 dark:from-[#0C0C0E] dark:to-hero-blue/5">
      <motion.div
        className="max-w-2xl mx-auto px-5 text-center flex flex-col items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp}>
          <motion.div animate={floatAnimation}>
            <Image
              src="/images/logo-bg.png"
              alt="IdeaTamer"
              width={88}
              height={88}
              className="rounded-2xl shadow-xl shadow-hero-blue/20"
            />
          </motion.div>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="mt-8 text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-primary dark:text-gray-100 leading-tight"
        >
          Be the first to tame your ideas.
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mt-4 text-text-mid dark:text-gray-400 text-lg"
        >
          Get notified when IdeaTamer launches — and start shipping what matters.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8 w-full flex justify-center">
          <EmailSignupForm size="large" />
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="mt-6 text-text-light dark:text-gray-500 text-sm"
        >
          Launching soon on the App Store. iOS 26+. Free to download. No account required.
        </motion.p>
      </motion.div>
    </section>
  );
}
