"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { Dumbbell, HeartHandshake, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const differentiators = [
  {
    icon: HeartHandshake,
    number: "01",
    title: "Coaching that notices you",
    description:
      "Personal cues, intelligent modifications, and coaches who know your nameÃ¢â‚¬â€not just your rep count.",
  },
  {
    icon: Dumbbell,
    number: "02",
    title: "A stronger kind of balance",
    description:
      "Thoughtful programming blends mobility, strength, breathwork, and recovery for a body that lasts.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "An experience worth returning to",
    description:
      "From the first welcome to your post-class reset, every detail is designed to make wellbeing feel effortless.",
  },
];

const statistics = [
  { value: 28, suffix: "+", label: "weekly classes" },
  { value: 14, suffix: "", label: "specialist coaches" },
  { value: 96, suffix: "%", label: "member retention" },
];

function AnimatedStat({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const prefersReducedMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      return;
    }

    if (prefersReducedMotion) {
      return;
    }

    const duration = 900;
    let animationFrame = 0;
    let startTime: number | undefined;

    function updateCount(timestamp: number) {
      startTime ??= timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - (1 - progress) ** 3;
      setDisplayValue(Math.round(value * easedProgress));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(updateCount);
      }
    }

    animationFrame = window.requestAnimationFrame(updateCount);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [isInView, prefersReducedMotion, value]);

  return (
    <div ref={ref}>
      <p className="font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        {prefersReducedMotion ? value : displayValue}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-white/65">{label}</p>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section className="scroll-mt-20 bg-muted/55 py-20 sm:py-24 lg:py-32" aria-labelledby="why-choose-us-title">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.72fr)] lg:items-end lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Why SoulStretch</p>
            <h2 id="why-choose-us-title" className="mt-4 max-w-2xl font-heading text-3xl font-semibold tracking-[-0.035em] text-balance sm:text-4xl lg:text-5xl">
              Progress feels different when every part of you is considered.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Our studio is made for the way you want to liveÃ¢â‚¬â€not just the way you want to look. Come for a class, stay for the energy it gives back.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(19rem,0.72fr)] lg:gap-8">
          <div className="grid gap-4 sm:grid-cols-3">
            {differentiators.map(({ icon: Icon, number, title, description }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm shadow-slate-950/5 transition-shadow duration-300 hover:shadow-lg hover:shadow-slate-950/8"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-heading text-sm font-semibold text-primary/55">{number}</span>
                </div>
                <h3 className="mt-7 font-heading text-xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
              </motion.article>
            ))}
          </div>

          <motion.aside
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[1.75rem] bg-slate-950 p-7 sm:p-8"
            aria-label="SoulStretch studio statistics"
          >
            <div className="absolute -right-16 -top-16 size-56 rounded-full bg-primary/35 blur-3xl" />
            <div className="absolute -bottom-20 -left-12 size-52 rounded-full bg-secondary/20 blur-3xl" />
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">Built to belong</p>
              <p className="mt-4 max-w-sm font-heading text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                A vibrant community, in motion.
              </p>
              <div className="mt-9 grid grid-cols-3 gap-3 border-t border-white/12 pt-6 sm:gap-5">
                {statistics.map((statistic) => (
                  <AnimatedStat key={statistic.label} {...statistic} />
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}