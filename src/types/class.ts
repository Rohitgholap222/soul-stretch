export type FitnessClass = {
  slug: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  intensity: "Gentle" | "Moderate" | "Dynamic";
  image: string;
  imageAlt: string;
};