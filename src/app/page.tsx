import { AboutPreview } from "@/components/home/about-preview";
import { FeaturedClasses } from "@/components/home/featured-classes";
import { Hero } from "@/components/home/hero";
import { Trainers } from "@/components/home/trainers";
import { WhyChooseUs } from "@/components/home/why-choose-us";
import { Pricing } from "@/components/home/pricing";
import { Testimonials } from "@/components/home/testimonials";
import { Feedback } from "@/components/home/feedback";
import { Contact } from "@/components/home/contact";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col gap-10 pb-10 sm:gap-12 sm:pb-12 lg:gap-16 lg:pb-16">
        <Hero />
        <AboutPreview />
        <WhyChooseUs />
        <FeaturedClasses />
        <Trainers />
        <Pricing />
        <Testimonials />
        <Feedback />
        <Contact />
      </main>
      <Footer />
    </>
  );
}