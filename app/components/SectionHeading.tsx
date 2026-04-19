"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <span className="inline-block font-display font-semibold text-xs uppercase tracking-[0.2em] text-gold mb-3">
        {label}
      </span>
      <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground max-w-xl mx-auto">{description}</p>
      )}
    </motion.div>
  );
}
