"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { CheckCircle2, MessageSquareHeart, Star } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  feedbackCategories,
  feedbackSchema,
  type FeedbackFormValues,
} from "@/lib/feedback-schema";

const ratingLabels = ["Poor", "Fair", "Good", "Great", "Excellent"] as const;

function StarRating({
  value,
  onChange,
  error,
}: {
  value: number;
  onChange: (rating: number) => void;
  error?: string;
}) {
  const [hovered, setHovered] = useState(0);
  const active = hovered || value;

  return (
    <div>
      <div
        className="flex items-center gap-1.5"
        role="radiogroup"
        aria-label="Overall experience rating"
      >
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            role="radio"
            aria-checked={value === star}
            aria-label={`${star} star${star > 1 ? "s" : ""} — ${ratingLabels[star - 1]}`}
            onClick={() => onChange(star)}
            onMouseEnter={() => setHovered(star)}
            onMouseLeave={() => setHovered(0)}
            onFocus={() => setHovered(star)}
            onBlur={() => setHovered(0)}
            className="rounded-md p-1 transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/45 cursor-pointer"
          >
            <Star
              className={`size-7 transition-colors ${
                star <= active
                  ? "fill-accent text-accent"
                  : "fill-transparent text-muted-foreground/35"
              }`}
              aria-hidden="true"
            />
          </button>
        ))}
        {active > 0 && (
          <span className="ml-2 text-sm font-medium text-muted-foreground">
            {ratingLabels[active - 1]}
          </span>
        )}
      </div>
      {error && <p className="mt-1 text-xs font-medium text-destructive">{error}</p>}
    </div>
  );
}

export function Feedback() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<FeedbackFormValues>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      name: "",
      email: "",
      rating: 0,
      category: "",
      message: "",
      wouldRecommend: true,
    },
  });

  async function onSubmit(data: FeedbackFormValues) {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setIsSubmitted(true);
      reset();
    } catch {
      setSubmitError("Something went wrong. Please try again in a moment.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="feedback" className="scroll-mt-20 py-20 sm:py-24 lg:py-32 bg-muted/20">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Your Voice Matters
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.035em] text-balance sm:text-4xl lg:text-5xl">
              Help us grow with you.
            </h2>
            <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Whether you loved a class, have a suggestion for our studio, or want to share how we can improve — your feedback shapes the SoulStretch experience for everyone.
            </p>

            <ul className="mt-10 space-y-4">
              {[
                "Share what worked well in your last visit",
                "Tell us how we can improve classes or facilities",
                "Suggest ideas for new programs or events",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-secondary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative rounded-3xl border border-border bg-card p-6 shadow-xl shadow-slate-950/5 sm:p-10">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <div className="flex size-16 items-center justify-center rounded-full bg-secondary/15 text-secondary">
                  <CheckCircle2 className="size-10" />
                </div>
                <h3 className="mt-6 font-heading text-2xl font-semibold">Thank you!</h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
                  We appreciate you taking the time to share your thoughts. Your feedback helps us create a better experience for our community.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 cursor-pointer rounded-xl px-6 font-semibold uppercase tracking-wide"
                >
                  Share more feedback
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MessageSquareHeart className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-heading text-2xl font-semibold text-foreground">
                    Share your feedback
                  </h3>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="feedback-name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Your Name
                    </label>
                    <input
                      id="feedback-name"
                      type="text"
                      {...register("name")}
                      placeholder="Enter your name"
                      className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm transition-shadow placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/45"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs font-medium text-destructive">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="feedback-email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Email Address
                    </label>
                    <input
                      id="feedback-email"
                      type="email"
                      {...register("email")}
                      placeholder="you@example.com"
                      className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm transition-shadow placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/45"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs font-medium text-destructive">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Overall experience
                  </span>
                  <Controller
                    name="rating"
                    control={control}
                    render={({ field }) => (
                      <StarRating
                        value={field.value}
                        onChange={field.onChange}
                        error={errors.rating?.message}
                      />
                    )}
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="feedback-category" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Feedback about
                  </label>
                  <select
                    id="feedback-category"
                    {...register("category")}
                    className="h-11 w-full cursor-pointer rounded-xl border border-border bg-background px-4 text-sm text-foreground transition-shadow focus:outline-none focus:ring-2 focus:ring-primary/45"
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    {feedbackCategories.map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="mt-1 text-xs font-medium text-destructive">{errors.category.message}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="feedback-message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Your feedback
                  </label>
                  <textarea
                    id="feedback-message"
                    rows={4}
                    {...register("message")}
                    placeholder="Tell us about your experience, what you enjoyed, or what we could do better..."
                    className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm transition-shadow placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/45"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs font-medium text-destructive">{errors.message.message}</p>
                  )}
                </div>

                <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-border bg-muted/30 px-4 py-3">
                  <input
                    type="checkbox"
                    {...register("wouldRecommend")}
                    className="mt-0.5 size-4 rounded border-border text-primary focus:ring-primary/45"
                  />
                  <span className="text-sm leading-6 text-muted-foreground">
                    I would recommend SoulStretch to a friend or colleague
                  </span>
                </label>

                {submitError && (
                  <p className="text-sm font-medium text-destructive">{submitError}</p>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-11 w-full cursor-pointer rounded-xl font-semibold uppercase tracking-wider shadow-lg shadow-primary/10 transition-all duration-200 disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit feedback"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
