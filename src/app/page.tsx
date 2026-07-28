import { AboutPreview } from "@/components/home/about-preview";
import { FeaturedClasses } from "@/components/home/featured-classes";
import { Hero } from "@/components/home/hero";
import { Trainers } from "@/components/home/trainers";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { Pricing } from "@/components/home/pricing";
import { Testimonials } from "@/components/home/testimonials";
import { Contact } from "@/components/home/contact";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

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
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}