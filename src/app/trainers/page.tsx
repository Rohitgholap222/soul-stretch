import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { TrainersList } from "@/components/trainers/trainers-list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trainers",
  description: "Meet our dedicated group of certified movement, yoga, and strength instructors.",
};

export default function TrainersPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Banner Section */}
        <section className="relative overflow-hidden bg-muted/40 py-16 sm:py-20 border-b border-border/50">
          <div className="absolute inset-x-0 top-0 -z-10 h-full bg-[radial-gradient(circle_at_top_left,_color-mix(in_srgb,var(--primary)_10%,transparent),_transparent_45%)]" />
          <div className="section-shell">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              The SoulStretch Team
            </p>
            <h1 className="mt-4 font-heading text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Meet Your Guides
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Our specialists focus on alignment, mindful progression, and supportive instruction. We are here to help you move with confidence and build sustainable strength.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 sm:py-20">
          <div className="section-shell">
            <TrainersList />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
