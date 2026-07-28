import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ClassesList } from "@/components/classes/classes-list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classes",
  description: "Browse our weekly yoga, Pilates, and strength training classes.",
};

export default function ClassesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Banner Section */}
        <section className="relative overflow-hidden bg-muted/40 py-16 sm:py-20 border-b border-border/50">
          <div className="absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(circle_at_top_left,_color-mix(in_srgb,var(--primary)_10%,transparent),_transparent_45%)]" />
          <div className="section-shell">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Studio Schedule
            </p>
            <h1 className="mt-4 font-heading text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Our Classes
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Explore our diverse, expert-guided movement options. From gentle flow yoga to high-energy conditioning classes, we have a practice for you.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 sm:py-20">
          <div className="section-shell">
            <ClassesList />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
