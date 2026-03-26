"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FEATURES } from "@/lib/constants";
import { fadeUp, slideFromLeft, slideFromRight } from "@/lib/animations";

export function FeatureHighlights() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary dark:text-gray-100">
            Everything you need to ship
          </h2>
          <p className="mt-3 text-text-mid dark:text-gray-400 text-lg">
            Built for makers who have too many ideas and not enough shipped projects
          </p>
        </motion.div>

        <div className="flex flex-col gap-24 md:gap-32">
          {FEATURES.map((feature, i) => {
            const isEven = i % 2 === 1;
            return (
              <div
                key={feature.id}
                className={`flex flex-col ${
                  isEven ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-10 md:gap-16`}
              >
                {/* Text */}
                <motion.div
                  className="flex-1"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={isEven ? slideFromRight : slideFromLeft}
                >
                  <span
                    className={`inline-block text-xs font-bold tracking-widest text-white px-3 py-1 rounded-full ${feature.badgeColor} mb-4`}
                  >
                    {feature.badge}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-text-primary dark:text-gray-100 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-text-mid dark:text-gray-400 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>

                {/* Screenshot */}
                <motion.div
                  className="flex-1 flex justify-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  variants={fadeUp}
                >
                  <Image
                    src={feature.screenshot}
                    alt={feature.title}
                    width={300}
                    height={650}
                    className="rounded-[2rem] shadow-2xl"
                  />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
