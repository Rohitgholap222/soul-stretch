import type { FitnessClass } from "@/types/class";

export const fitnessClasses: FitnessClass[] = [
  {
    slug: "slow-flow-yoga",
    title: "Slow Flow Yoga",
    category: "Yoga",
    description:
      "An unhurried, breath-led practice to build mobility, strength, and spaciousness.",
    duration: "60 min",
    intensity: "Gentle",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597",
    imageAlt: "Woman seated in a yoga pose in a bright studio",
  },
  {
    slug: "strength-foundations",
    title: "Strength Foundations",
    category: "Strength",
    description:
      "Smart, full-body training that makes the essentials feel approachable and empowering.",
    duration: "45 min",
    intensity: "Moderate",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
    imageAlt: "Modern gym with strength training equipment",
  },
  {
    slug: "power-pilates",
    title: "Power Pilates",
    category: "Pilates",
    description:
      "A precise, energising mat class that connects deep core control with dynamic movement.",
    duration: "50 min",
    intensity: "Dynamic",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a",
    imageAlt: "Woman exercising on a mat in a fitness studio",
  },
  {
    slug: "vinyasa-flow",
    title: "Vinyasa Flow",
    category: "Yoga",
    description:
      "A creative, continuous flow linking breath with movement to build core strength and heat.",
    duration: "60 min",
    intensity: "Moderate",
    image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b",
    imageAlt: "People practicing vinyasa yoga in a modern studio",
  },
  {
    slug: "kettlebell-conditioning",
    title: "Kettlebell Conditioning",
    category: "Strength",
    description:
      "A dynamic conditioning session focusing on full-body power, coordination, and muscular endurance.",
    duration: "50 min",
    intensity: "Dynamic",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd",
    imageAlt: "Kettlebells lined up on a gym floor",
  },
  {
    slug: "restorative-recovery",
    title: "Restorative Recovery",
    category: "Yoga",
    description:
      "Deep relaxation using supportive props and long holds to release physical and mental tension.",
    duration: "75 min",
    intensity: "Gentle",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    imageAlt: "Zen meditation room setup with pillows",
  },
];

export const featuredClasses = fitnessClasses.slice(0, 3);