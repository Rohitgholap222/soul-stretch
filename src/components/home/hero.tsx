"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Play, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const heroImage =
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b";

const trustPoints = ["Expert-led classes", "Flexible membership", "First class on us"];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-background pb-16 pt-14 sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top_right,_color-mix(in_srgb,var(--primary)_16%,transparent),_transparent_45%),radial-gradient(circle_at_10%_30%,_color-mix(in_srgb,var(--secondary)_14%,transparent),_transparent_35%)]" />
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/8 px-3.5 py-1.5 text-sm font-medium text-primary">
            <Sparkles className="size-4" aria-hidden="true" />
            Movement that meets you where you are
          </div>
          <h1 className="font-heading text-4xl font-semibold tracking-[-0.04em] text-balance text-slate-950 sm:text-5xl lg:text-6xl xl:text-7xl dark:text-white">
            Train your body.
            <span className="block text-primary">Restore your energy.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            A refined space for yoga, strength, and sustainable wellbeing.
            Move with expert guidance and feel at home in your body again.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/#classes"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/25 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              Explore classes
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/#about"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-card/80 px-6 text-sm font-semibold text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <Play className="size-4 fill-current" aria-hidden="true" />
              Discover SoulStretch
            </Link>
          </div>
          <ul className="mt-8 flex flex-col gap-2.5 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:gap-x-5">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <span className="flex size-5 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                  <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
        >
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-linear-to-tr from-primary/20 via-secondary/10 to-accent/20 blur-2xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/70 shadow-2xl shadow-slate-950/15 dark:border-white/10 sm:aspect-[5/6]">
            <Image
              src={heroImage}
              alt="Woman practising yoga in a sunlit studio"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, (min-width: 640px) 80vw, 100vw"
              className="object-cover object-[58%_center]"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/45 via-slate-950/0 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/25 bg-white/15 px-4 py-3 text-white backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-auto sm:min-w-58">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/70">
                  This week
                </p>
                <p className="mt-1 font-heading text-base font-medium">Find your flow</p>
              </div>
              <ArrowRight className="size-5" aria-hidden="true" />
            </div>
          </div>
          <div className="glass-card absolute -bottom-6 -left-3 hidden rounded-2xl px-4 py-3 sm:block lg:-left-8">
            <p className="font-heading text-2xl font-semibold text-primary">4.9/5</p>
            <p className="text-xs font-medium text-muted-foreground">Loved by members</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}