"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Intro Pack",
    priceMonthly: 49,
    priceAnnually: 49,
    period: "one-time",
    description: "Perfect for testing the waters and finding your rhythm.",
    features: [
      "5 classes of your choice",
      "Valid for 30 days",
      "Access to all studio styles",
      "Complimentary mat rental",
      "1-on-1 goal setting check-in",
    ],
    cta: "Buy intro pack",
    popular: false,
  },
  {
    name: "Monthly Unlimited",
    priceMonthly: 149,
    priceAnnually: 119,
    period: "month",
    description: "Our most popular option for dedicated movement practitioners.",
    features: [
      "Unlimited weekly classes",
      "Priority online booking",
      "2 guest passes per month",
      "10% off workshops & retail",
      "Access to video on-demand library",
      "Free towel & mat service",
    ],
    cta: "Join unlimited",
    popular: true,
  },
  {
    name: "Class Pack",
    priceMonthly: 199,
    priceAnnually: 199,
    period: "10 classes",
    description: "Maximum flexibility to fit your busy or unpredictable schedule.",
    features: [
      "10 class credits",
      "Valid for 12 full months",
      "Access to all class types",
      "Flexible booking & cancellations",
      "Mat rental included",
    ],
    cta: "Buy class pack",
    popular: false,
  },
];

export function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">("monthly");

  return (
    <section id="pricing" className="scroll-mt-20 py-20 sm:py-24 lg:py-32 bg-muted/30">
      <div className="section-shell">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Membership & Pricing
          </p>
          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-semibold tracking-[-0.035em] text-balance sm:text-4xl lg:text-5xl">
            Choose your pace of practice.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Simple, transparent plans designed to support consistency. Start with an intro trial or choose unlimited access.
          </p>

          {/* Toggle */}
          <div className="mt-10 flex items-center gap-3 rounded-full border border-border bg-card p-1">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase transition-all cursor-pointer ${
                billingPeriod === "monthly"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("annually")}
              className={`relative rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase transition-all cursor-pointer ${
                billingPeriod === "annually"
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Annually
              <span className="absolute -top-3 -right-3 rounded-full bg-secondary px-1.5 py-0.5 text-[9px] font-bold text-secondary-foreground uppercase shadow-sm">
                -20%
              </span>
            </button>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan, index) => {
            const isRecurring = plan.period === "month";
            const price = billingPeriod === "annually" ? plan.priceAnnually : plan.priceMonthly;
            const savings = plan.priceMonthly - plan.priceAnnually;

            return (
              <motion.article
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col rounded-[2rem] border p-8 shadow-sm transition-all duration-300 hover:shadow-xl ${
                  plan.popular
                    ? "border-primary bg-slate-900 text-white shadow-primary/5 dark:bg-card dark:text-foreground dark:border-primary/50"
                    : "border-border bg-card text-foreground"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-primary px-4 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-md">
                    <Sparkles className="size-3" /> Most Popular
                  </span>
                )}

                <div className="mb-6">
                  <h3 className="font-heading text-2xl font-semibold tracking-tight">{plan.name}</h3>
                  <p
                    className={`mt-2.5 text-sm leading-6 ${
                      plan.popular ? "text-slate-300 dark:text-muted-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                <div className="flex items-baseline gap-1.5 border-b border-border pb-6">
                  <span className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
                    ${price}
                  </span>
                  <span
                    className={`text-sm font-medium ${
                      plan.popular ? "text-slate-400 dark:text-muted-foreground" : "text-muted-foreground"
                    }`}
                  >
                    /{" "}
                    {isRecurring
                      ? billingPeriod === "annually"
                        ? "month, billed annually"
                        : "month"
                      : plan.period}
                  </span>
                </div>

                {isRecurring && billingPeriod === "annually" && savings > 0 && (
                  <p className="mt-3 text-xs font-semibold text-secondary uppercase tracking-wider">
                    Save ${savings * 12} per year
                  </p>
                )}

                <ul className="my-8 flex-1 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <span
                        className={`flex size-5 shrink-0 items-center justify-center rounded-full ${
                          plan.popular ? "bg-primary/20 text-primary" : "bg-secondary/15 text-secondary"
                        }`}
                      >
                        <Check className="size-3.5" strokeWidth={3} />
                      </span>
                      <span
                        className={
                          plan.popular ? "text-slate-200 dark:text-foreground" : "text-foreground"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`mt-4 w-full h-11 rounded-xl font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.01]"
                      : "bg-muted text-foreground hover:bg-muted/80 border border-border"
                  }`}
                >
                  <a href="/#contact">{plan.cta}</a>
                </Button>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
