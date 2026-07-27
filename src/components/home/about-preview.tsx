import { ArrowRight, Award, HeartPulse, Users } from "lucide-react";
import Link from "next/link";

const highlights = [
  {
    icon: HeartPulse,
    title: "Whole-body wellbeing",
    description: "Build strength, mobility, and a calmer state of mind in one place.",
  },
  {
    icon: Users,
    title: "A welcoming community",
    description: "Feel supported by coaches and members who celebrate every step forward.",
  },
  {
    icon: Award,
    title: "Thoughtful coaching",
    description: "Move with confidence through intelligent, adaptable instruction.",
  },
];

export function AboutPreview() {
  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-24 lg:py-32">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="relative mx-auto w-full max-w-md lg:mx-0">
          <div className="absolute inset-0 -rotate-6 rounded-[2rem] bg-secondary/15" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-7 shadow-xl shadow-slate-950/5 sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Since 2014
            </p>
            <p className="mt-8 font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Movement is a practice of coming home to yourself.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4 border-t border-border pt-6">
              <div>
                <p className="font-heading text-3xl font-semibold text-primary">10+</p>
                <p className="mt-1 text-sm text-muted-foreground">years of movement</p>
              </div>
              <div>
                <p className="font-heading text-3xl font-semibold text-primary">8k</p>
                <p className="mt-1 text-sm text-muted-foreground">members empowered</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">The SoulStretch way</p>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-semibold tracking-[-0.035em] text-balance sm:text-4xl lg:text-5xl">
            More than a workout. A place to feel stronger in every sense.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            SoulStretch brings yoga, functional strength, and restorative recovery
            together in a beautifully considered studio experience. Our approach is
            personal, progressive, and designed for real life.
          </p>

          <div className="mt-9 grid gap-5 sm:grid-cols-3">
            {highlights.map(({ icon: Icon, title, description }) => (
              <article key={title} className="group">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:-translate-y-1">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>

          <Link
            href="/#classes"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            Explore our approach
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}