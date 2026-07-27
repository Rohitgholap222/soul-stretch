import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { ClassCard } from "@/components/shared/class-card";
import { featuredClasses } from "@/data/classes";

export function FeaturedClasses() {
  return (
    <section id="classes" className="scroll-mt-20 py-20 sm:py-24 lg:py-32" aria-labelledby="featured-classes-title">
      <div className="section-shell">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Find your rhythm</p>
            <h2 id="featured-classes-title" className="mt-4 max-w-2xl font-heading text-3xl font-semibold tracking-[-0.035em] text-balance sm:text-4xl lg:text-5xl">
              Classes that move with your life.
            </h2>
          </div>
          <Link
            href="/classes"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            View all classes
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredClasses.map((fitnessClass) => (
            <ClassCard key={fitnessClass.slug} fitnessClass={fitnessClass} />
          ))}
        </div>
      </div>
    </section>
  );
}