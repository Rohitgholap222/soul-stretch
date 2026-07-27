import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { Trainer } from "@/types/trainer";

type TrainerCardProps = {
  trainer: Trainer;
};

export function TrainerCard({ trainer }: TrainerCardProps) {
  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted">
        <Image
          src={trainer.image}
          alt={trainer.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-slate-950/0 to-transparent" />
        <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3 text-white">
          <div>
            <p className="font-heading text-2xl font-semibold tracking-tight">{trainer.name}</p>
            <p className="mt-1 text-sm text-white/75">{trainer.role}</p>
          </div>
          <Link
            href={`/trainers/${trainer.slug}`}
            aria-label={`View ${trainer.name}'s profile`}
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-slate-950 transition-transform duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-white/80"
          >
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-muted-foreground">{trainer.bio}</p>
      <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${trainer.name}'s specialties`}>
        {trainer.specialties.map((specialty) => (
          <li key={specialty} className="rounded-full bg-primary/8 px-3 py-1 text-xs font-medium text-primary">
            {specialty}
          </li>
        ))}
      </ul>
    </article>
  );
}