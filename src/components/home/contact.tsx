"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Calendar, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  interest: z.string().min(1, "Please select an area of interest."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      interest: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    reset();
  }

  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-24 lg:py-32 bg-muted/20">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Info Side */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Get In Touch
              </p>
              <h2 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.035em] text-balance sm:text-4xl lg:text-5xl">
                Ready to find your strength?
              </h2>
              <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Reach out to schedule your first complimentary class, inquire about membership, or just ask a question. We would love to hear from you.
              </p>

              <dl className="mt-10 space-y-6">
                <div className="flex gap-4">
                  <dt className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="size-5" aria-hidden="true" />
                  </dt>
                  <dd className="text-sm leading-6">
                    <strong className="block font-semibold text-foreground">Our Location</strong>
                    <span className="text-muted-foreground">120 Wellness Way, Suite B, Portland, OR</span>
                  </dd>
                </div>
                <div className="flex gap-4">
                  <dt className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Phone className="size-5" aria-hidden="true" />
                  </dt>
                  <dd className="text-sm leading-6">
                    <strong className="block font-semibold text-foreground">Phone Number</strong>
                    <a href="tel:+15035550199" className="text-muted-foreground hover:text-primary transition-colors">
                      +1 (503) 555-0199
                    </a>
                  </dd>
                </div>
                <div className="flex gap-4">
                  <dt className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Mail className="size-5" aria-hidden="true" />
                  </dt>
                  <dd className="text-sm leading-6">
                    <strong className="block font-semibold text-foreground">Email Address</strong>
                    <a href="mailto:hello@soulstretch.com" className="text-muted-foreground hover:text-primary transition-colors">
                      hello@soulstretch.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-12 rounded-2xl border border-border bg-card p-5">
              <h3 className="font-heading text-base font-semibold flex items-center gap-2 text-foreground">
                <Calendar className="size-4.5 text-primary" /> Studio Hours
              </h3>
              <ul className="mt-4 space-y-2 text-xs text-muted-foreground">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium text-foreground">6:00 AM - 8:30 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium text-foreground">7:30 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium text-foreground">8:00 AM - 2:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form Side */}
          <div className="relative rounded-3xl border border-border bg-card p-6 shadow-xl shadow-slate-950/5 sm:p-10">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12"
              >
                <div className="flex size-16 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                  <CheckCircle2 className="size-10" />
                </div>
                <h3 className="mt-6 font-heading text-2xl font-semibold">Message sent!</h3>
                <p className="mt-3 max-w-sm text-sm text-muted-foreground leading-6">
                  Thank you for reaching out. We will get back to you within 24 hours to help you start your journey.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 rounded-xl font-semibold tracking-wide uppercase px-6 cursor-pointer"
                >
                  Send another message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <h3 className="font-heading text-2xl font-semibold text-foreground">
                  Send us a message
                </h3>

                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name")}
                    placeholder="Enter your name"
                    className="w-full h-11 px-4 text-sm rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/45 transition-shadow placeholder:text-muted-foreground/60"
                  />
                  {errors.name && (
                    <p className="text-xs font-medium text-destructive mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="you@example.com"
                    className="w-full h-11 px-4 text-sm rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/45 transition-shadow placeholder:text-muted-foreground/60"
                  />
                  {errors.email && (
                    <p className="text-xs font-medium text-destructive mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="interest" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Interest
                  </label>
                  <select
                    id="interest"
                    {...register("interest")}
                    className="w-full h-11 px-4 text-sm rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/45 transition-shadow cursor-pointer text-foreground"
                  >
                    <option value="" disabled>Select a focus</option>
                    <option value="yoga">Slow Flow Yoga</option>
                    <option value="strength">Strength Foundations</option>
                    <option value="pilates">Power Pilates</option>
                    <option value="membership">Memberships / General Inquiry</option>
                  </select>
                  {errors.interest && (
                    <p className="text-xs font-medium text-destructive mt-1">{errors.interest.message}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register("message")}
                    placeholder="Tell us what you are looking for..."
                    className="w-full py-3 px-4 text-sm rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/45 transition-shadow resize-none placeholder:text-muted-foreground/60"
                  />
                  {errors.message && (
                    <p className="text-xs font-medium text-destructive mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-11 rounded-xl font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-lg shadow-primary/10 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Submit message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
