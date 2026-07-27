import { ArrowUpRight, Clock3, Flame } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { FitnessClass } from "@/types/class";

type ClassCardProps = {
  fitnessClass: FitnessClass;
};

export function ClassCard({ fitnessClass }: ClassCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm shadow-slate-950/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/10">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={fitnessClass.image}
          alt={fitnessClass.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 backdrop-blur-sm dark:bg-slate-950/80 dark:text-white">
          {fitnessClass.category}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-heading text-xl font-semibold tracking-tight">{fitnessClass.title}</h3>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{fitnessClass.description}</p>
          </div>
          <Link
            href={`/classes/${fitnessClass.slug}`}
            aria-label={`Learn more about ${fitnessClass.title}`}
            className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-6 flex items-center gap-4 border-t border-border pt-4 text-xs font-medium text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Clock3 className="size-3.5 text-primary" aria-hidden="true" />
            {fitnessClass.duration}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Flame className="size-3.5 text-accent" aria-hidden="true" />
            {fitnessClass.intensity}
          </span>
        </div>
      </div>
    </article>
  );
}