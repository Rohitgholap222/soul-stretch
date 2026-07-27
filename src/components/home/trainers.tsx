import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { TrainerCard } from "@/components/shared/trainer-card";
import { featuredTrainers } from "@/data/trainers";

export function Trainers() {
  return (
    <section id="trainers" className="scroll-mt-20 bg-slate-950 py-20 text-white sm:py-24 lg:py-32" aria-labelledby="trainers-title">
      <div className="section-shell">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">Meet your guides</p>
            <h2 id="trainers-title" className="mt-4 max-w-2xl font-heading text-3xl font-semibold tracking-[-0.035em] text-balance sm:text-4xl lg:text-5xl">
              Coaches who meet you where you are.
            </h2>
          </div>
          <Link
            href="/trainers"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-secondary focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-white/60"
          >
            Meet the full team
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredTrainers.map((trainer) => (
            <TrainerCard key={trainer.slug} trainer={trainer} />
          ))}
        </div>
      </div>
    </section>
  );
}