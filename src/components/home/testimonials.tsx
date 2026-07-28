"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Member since 2021",
    tag: "Yoga & Mindfulness",
    rating: 5,
    quote: "Finding SoulStretch changed my entire routine. Maya's yoga classes aren't just workouts—they are deep, nourishing resets. I feel calmer and more mobile than I have in a decade.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    imageAlt: "Portrait of Sarah Jenkins",
  },
  {
    name: "David K.",
    role: "Member since 2023",
    tag: "Strength Foundations",
    rating: 5,
    quote: "As someone who was intimidated by strength training, Marcus made everything feel approachable. His cues are spot on, and the focus on form is exactly what my back needed.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    imageAlt: "Portrait of David K.",
  },
  {
    name: "Elena M.",
    role: "Member since 2022",
    tag: "Power Pilates",
    rating: 5,
    quote: "The Pilates classes here are exceptional. Every instructor pays so much attention to alignment. It's challenging but in a way that respects your body. The studio is a real sanctuary.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    imageAlt: "Portrait of Elena M.",
  },
  {
    name: "Robert Chen",
    role: "Member since 2024",
    tag: "Functional Training",
    rating: 5,
    quote: "The community vibe here is what keeps me coming back. People actually talk to each other and support each other. It feels less like a gym and more like a club of people who value movement.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    imageAlt: "Portrait of Robert Chen",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20 py-20 sm:py-24 lg:py-32">
      <div className="section-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Member Stories
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.035em] text-balance sm:text-4xl lg:text-5xl">
              What it feels like to stretch your limits.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Read from members of our community who have built sustainable routines and found balance in their lives.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-1 text-accent mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="size-3.5 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <Quote className="absolute right-6 top-6 size-8 text-primary/10 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                <p className="text-sm leading-6 text-foreground italic">&ldquo;{item.quote}&rdquo;</p>
              </div>

              <div className="mt-8 flex items-center gap-3 border-t border-border pt-4">
                <div className="relative size-10 shrink-0 overflow-hidden rounded-full bg-muted">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground leading-none">{item.name}</h3>
                  <p className="mt-1 text-[11px] text-muted-foreground leading-none">{item.role}</p>
                  <span className="mt-2 inline-block rounded-full bg-primary/8 px-2 py-0.5 text-[9px] font-semibold text-primary">
                    {item.tag}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
