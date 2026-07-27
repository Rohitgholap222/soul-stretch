import { AboutPreview } from "@/components/home/about-preview";
import { FeaturedClasses } from "@/components/home/featured-classes";
import { Hero } from "@/components/home/hero";
import { Trainers } from "@/components/home/trainers";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { Navbar } from "@/components/layout/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutPreview />
        <WhyChooseUs />
        <FeaturedClasses />
        <Trainers />
      </main>
    </>
  );
}