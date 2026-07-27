import type { Trainer } from "@/types/trainer";

export const trainers: Trainer[] = [
  {
    slug: "maya-chen",
    name: "Maya Chen",
    role: "Yoga & Mobility Lead",
    bio: "Maya blends attentive alignment with a quietly energising flow, helping members feel at home in their bodies.",
    specialties: ["Vinyasa", "Mobility"],
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    imageAlt: "Portrait of a smiling woman against a softly lit background",
  },
  {
    slug: "marcus-reed",
    name: "Marcus Reed",
    role: "Strength Coach",
    bio: "Marcus makes strength training feel clear, progressive, and genuinely rewarding—whatever your starting point.",
    specialties: ["Functional strength", "Conditioning"],
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    imageAlt: "Portrait of a man against a softly lit background",
  },
  {
    slug: "elena-rossi",
    name: "Elena Rossi",
    role: "Pilates Instructor",
    bio: "Elena teaches purposeful movement with warmth and precision, creating powerful sessions that leave you reset.",
    specialties: ["Mat Pilates", "Recovery"],
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
    imageAlt: "Portrait of a woman against a softly lit background",
  },
];

export const featuredTrainers = trainers.slice(0, 3);