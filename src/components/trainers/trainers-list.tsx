"use client";

import { motion } from "framer-motion";
import { trainers } from "@/data/trainers";
import { TrainerCard } from "@/components/shared/trainer-card";

export function TrainersList() {
  return (
    <div className="space-y-12">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {trainers.map((trainer, index) => (
          <motion.div
            key={trainer.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <TrainerCard trainer={trainer} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
