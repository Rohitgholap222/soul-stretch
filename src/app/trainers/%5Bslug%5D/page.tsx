import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { trainers } from "@/data/trainers";
import { fitnessClasses } from "@/data/classes";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Award, Calendar, Check, GraduationCap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

type TrainerPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// Generate static params for build pre-rendering
export async function generateStaticParams() {
  return trainers.map((item) => ({
    slug: item.slug,
  }));
}

export default async function TrainerDetailPage({ params }: TrainerPageProps) {
  const { slug } = await params;
  const trainer = trainers.find((item) => item.slug === slug);

  if (!trainer) {
    notFound();
  }

  // Filter classes taught by this trainer
  const taughtClasses = fitnessClasses.filter((c) => {
    if (slug === "maya-chen") {
      return c.slug === "slow-flow-yoga" || c.slug === "vinyasa-flow" || c.slug === "restorative-recovery";
    }
    if (slug === "marcus-reed") {
      return c.slug === "strength-foundations" || c.slug === "kettlebell-conditioning";
    }
    if (slug === "elena-rossi") {
      return c.slug === "power-pilates";
    }
    return false;
  });

  // Trainer extra profile info based on specialty
  let trainingPhilosophy = "";
  let certifications: string[] = [];

  if (slug === "maya-chen") {
    trainingPhilosophy =
      "I believe movement should be a sanctuary—a mindful space to explore physical boundaries, align the body with the breath, and build long-term joint health and resilience.";
    certifications = [
      "500-hour Registered Yoga Teacher (RYT)",
      "Functional Range Conditioning (FRC) Mobility Specialist",
      "Advanced Pranayama & Meditation Certification",
    ];
  } else if (slug === "marcus-reed") {
    trainingPhilosophy =
      "Strength training isn't about complexity; it's about consistency, precise form, and smart load management. I focus on fundamental patterns that translate to an active, pain-free life.";
    certifications = [
      "NSCA Certified Strength & Conditioning Specialist (CSCS)",
      "USA Weightlifting Level 1 Coach (USAW)",
      "FMS (Functional Movement Screen) Certified",
    ];
  } else {
    // elena-rossi
    trainingPhilosophy =
      "True control comes from deep core activation, precision, and mindful spinal articulation. I help clients connect with their bodies to build dynamic core support and functional flexibility.";
    certifications = [
      "Polestar Comprehensive Reformer & Mat Pilates Certification",
      "Stott Pilates Advanced Matwork Specialist",
      "Pre & Post-Natal Pilates Specialist",
    ];
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pb-20">
        {/* Navigation back bar */}
        <div className="border-b border-border/50 py-4 bg-muted/20">
          <div className="section-shell">
            <Link
              href="/trainers"
              className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
            >
              <ArrowLeft className="size-4" /> Back to all trainers
            </Link>
          </div>
        </div>

        <div className="section-shell mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Photo Side */}
          <div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted shadow-lg">
              <Image
                src={trainer.image}
                alt={trainer.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>

            {/* Private coaching box */}
            <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-md shadow-slate-950/5">
              <h3 className="font-heading text-lg font-semibold text-foreground flex items-center gap-2">
                <Calendar className="size-4.5 text-primary" /> Book 1-on-1 Session
              </h3>
              <p className="mt-2.5 text-xs text-muted-foreground leading-5">
                Work privately with {trainer.name.split(" ")[0]} to establish your movement assessment, target specific mobility or strength goals, and construct a bespoke custom routine.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="mt-5 space-y-3.5">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full h-10 px-3 text-xs rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/45 transition-shadow placeholder:text-muted-foreground/60"
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email Address"
                  className="w-full h-10 px-3 text-xs rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/45 transition-shadow placeholder:text-muted-foreground/60"
                />
                <Button type="submit" className="w-full h-10 rounded-xl font-semibold uppercase tracking-wider text-xs cursor-pointer shadow-lg shadow-primary/10">
                  Request Consultation
                </Button>
              </form>
            </div>
          </div>

          {/* Bio Info Side */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                {trainer.role}
              </p>
              <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
                {trainer.name}
              </h1>
              <div className="mt-6 flex flex-wrap gap-2">
                {trainer.specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="rounded-full bg-primary/8 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* Philosophy */}
            <div className="border-t border-border pt-6">
              <h2 className="font-heading text-xl font-semibold text-foreground flex items-center gap-2">
                <Heart className="size-4.5 text-primary" /> Training Philosophy
              </h2>
              <p className="mt-4 text-sm leading-6 text-muted-foreground italic">
                &ldquo;{trainingPhilosophy}&rdquo;
              </p>
            </div>

            {/* Bio */}
            <div className="border-t border-border pt-6">
              <h2 className="font-heading text-xl font-semibold text-foreground flex items-center gap-2">
                <Award className="size-4.5 text-primary" /> Biography
              </h2>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {trainer.bio}
              </p>
            </div>

            {/* Certifications */}
            <div className="border-t border-border pt-6">
              <h2 className="font-heading text-xl font-semibold text-foreground flex items-center gap-2">
                <GraduationCap className="size-4.5 text-primary" /> Qualifications & Certs
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-center gap-2.5">
                    <span className="flex size-4.5 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            {/* Classes Taught */}
            <div className="border-t border-border pt-6">
              <h2 className="font-heading text-xl font-semibold text-foreground">
                Classes taught by {trainer.name.split(" ")[0]}
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {taughtClasses.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/classes/${item.slug}`}
                    className="flex flex-col justify-between rounded-xl border border-border bg-card p-4 hover:border-primary/50 hover:shadow-md transition-all group"
                  >
                    <div>
                      <span className="text-[10px] font-semibold text-primary uppercase tracking-wider">
                        {item.category}
                      </span>
                      <h3 className="font-heading text-sm font-semibold text-foreground mt-1 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                    <span className="text-[10px] font-medium text-muted-foreground border-t border-border pt-2 mt-4 block">
                      {item.duration} &bull; {item.intensity}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
