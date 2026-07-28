import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { fitnessClasses } from "@/data/classes";
import { trainers } from "@/data/trainers";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Flame, ShieldAlert, Sparkles, User } from "lucide-react";
import { Button } from "@/components/ui/button";

type ClassPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

// Generate static params for build pre-rendering
export async function generateStaticParams() {
  return fitnessClasses.map((item) => ({
    slug: item.slug,
  }));
}

export default async function ClassDetailPage({ params }: ClassPageProps) {
  const { slug } = await params;
  const fitnessClass = fitnessClasses.find((item) => item.slug === slug);

  if (!fitnessClass) {
    notFound();
  }

  // Find trainer
  let classTrainer = trainers[0]; // fallback
  if (slug === "strength-foundations" || slug === "kettlebell-conditioning") {
    classTrainer = trainers.find((t) => t.slug === "marcus-reed") || classTrainer;
  } else if (slug === "power-pilates") {
    classTrainer = trainers.find((t) => t.slug === "elena-rossi") || classTrainer;
  } else {
    classTrainer = trainers.find((t) => t.slug === "maya-chen") || classTrainer;
  }

  // Define class benefits & recommendations based on category
  let benefits: string[] = [];
  let requirements: string[] = [];

  if (fitnessClass.category === "Yoga") {
    benefits = [
      "Increase spinal flexibility and muscular range of motion",
      "Lower stress levels and cortisol production through breathwork",
      "Improve postural alignment and balance control",
      "Develop greater mental clarity and mindfulness",
    ];
    requirements = [
      "Comfortable, stretchable clothing",
      "A personal yoga mat (we also rent them at the desk)",
      "A water bottle to stay hydrated",
    ];
  } else if (fitnessClass.category === "Strength") {
    benefits = [
      "Increase lean muscular mass and functional strength",
      "Boost metabolic rate and cardiovascular endurance",
      "Strengthen bone density and protect joint health",
      "Improve lifting form and coordination",
    ];
    requirements = [
      "Athletic attire and clean indoor sports shoes",
      "A water bottle (filtered water available in-studio)",
      "Sweat towel (complimentary towel service available)",
    ];
  } else {
    // Pilates
    benefits = [
      "Strengthen deep stabilizing core muscles",
      "Improve spine articulation and muscle balance",
      "Enhance muscular endurance and muscle toning",
      "Boost coordination and body awareness",
    ];
    requirements = [
      "Form-fitting fitness clothes",
      "Grip socks (mandatory for safety and stability)",
      "Water bottle",
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
              href="/classes"
              className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
            >
              <ArrowLeft className="size-4" /> Back to all classes
            </Link>
          </div>
        </div>

        <div className="section-shell mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Main Info Side */}
          <div>
            <span className="rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
              {fitnessClass.category}
            </span>
            <h1 className="mt-4 font-heading text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              {fitnessClass.title}
            </h1>
            <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {fitnessClass.description}
            </p>

            {/* Meta attributes */}
            <div className="mt-8 grid grid-cols-2 gap-4 border-y border-border py-6">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Clock className="size-5" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider leading-none">
                    Duration
                  </p>
                  <p className="mt-1.5 font-heading text-sm font-semibold text-foreground leading-none">
                    {fitnessClass.duration}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <Flame className="size-5" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider leading-none">
                    Intensity
                  </p>
                  <p className="mt-1.5 font-heading text-sm font-semibold text-foreground leading-none">
                    {fitnessClass.intensity} Level
                  </p>
                </div>
              </div>
            </div>

            {/* Class overview image */}
            <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-2xl bg-muted shadow-lg">
              <Image
                src={fitnessClass.image}
                alt={fitnessClass.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            {/* Benefits */}
            <div className="mt-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground">
                What you will gain
              </h2>
              <ul className="mt-6 space-y-3.5">
                {benefits.map((benefit, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary mt-0.5">
                      <Sparkles className="size-3" />
                    </span>
                    <span className="leading-6">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What to bring */}
            <div className="mt-10">
              <h2 className="font-heading text-2xl font-semibold text-foreground">
                What to bring & wear
              </h2>
              <ul className="mt-6 space-y-3.5">
                {requirements.map((req, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-muted-foreground/15 text-muted-foreground mt-0.5">
                      <ShieldAlert className="size-3" />
                    </span>
                    <span className="leading-6">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Booking & Instructor Side */}
          <div className="space-y-8">
            {/* Class instructor card */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-heading text-base font-semibold text-foreground">
                Class Guide
              </h3>
              <div className="mt-5 flex items-center gap-4">
                <div className="relative size-12 shrink-0 overflow-hidden rounded-full bg-muted">
                  <Image
                    src={classTrainer.image}
                    alt={classTrainer.imageAlt}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-heading text-base font-semibold text-foreground">
                    {classTrainer.name}
                  </h4>
                  <p className="text-xs text-muted-foreground">{classTrainer.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-6">
                {classTrainer.bio}
              </p>
              <Button asChild variant="outline" className="mt-6 w-full h-10 rounded-xl cursor-pointer">
                <Link href={`/trainers/${classTrainer.slug}`} className="flex items-center gap-2">
                  <User className="size-4" /> View Trainer Profile
                </Link>
              </Button>
            </div>

            {/* Registration Card */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-md shadow-slate-950/5">
              <h3 className="font-heading text-xl font-semibold text-foreground">
                Reserve your spot
              </h3>
              <p className="mt-2.5 text-xs text-muted-foreground leading-5">
                Sign up for an individual class pass or join with a subscription. Spots are limited and reserve quickly.
              </p>

              <form onSubmit={(e) => e.preventDefault()} className="mt-6 space-y-4">
                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Select Date
                  </label>
                  <select className="w-full h-10 px-3 mt-1.5 text-sm rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/45 transition-shadow cursor-pointer text-foreground">
                    <option>Tuesday, 6:00 AM (Upcoming)</option>
                    <option>Thursday, 6:00 AM</option>
                    <option>Saturday, 8:30 AM</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full h-10 px-3 mt-1.5 text-sm rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/45 transition-shadow placeholder:text-muted-foreground/60"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full h-10 px-3 mt-1.5 text-sm rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/45 transition-shadow placeholder:text-muted-foreground/60"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    className="w-full h-11 rounded-xl font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-lg shadow-primary/10"
                  >
                    Confirm Reservation
                  </Button>
                  <p className="mt-3.5 text-[10px] text-center text-muted-foreground leading-relaxed">
                    First class is free for local residents. No credit card required.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
