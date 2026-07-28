"use client";

import { Dumbbell, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { primaryNavigation } from "@/data/navigation";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
      aria-hidden="true"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-card/50">
      <div className="section-shell py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-4 md:grid-cols-2">
          {/* Logo & Intro */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-flex items-center gap-2.5 outline-none">
              <span className="flex size-9 items-center justify-center rounded-xl bg-linear-to-br from-primary to-blue-500 text-primary-foreground shadow-lg shadow-primary/25">
                <Dumbbell className="size-4" aria-hidden="true" />
              </span>
              <span className="font-heading text-xl font-semibold tracking-tight">
                SoulStretch
              </span>
            </Link>
            <p className="text-sm leading-6 text-muted-foreground mt-2 max-w-xs">
              A premium, refined space for functional strength, movement coaching, and mindful recovery.
            </p>
            <div className="flex gap-4.5 mt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="size-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon className="size-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="size-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Explore</h3>
            <ul className="mt-4 space-y-3.5">
              {primaryNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/classes"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  All Classes
                </Link>
              </li>
              <li>
                <Link
                  href="/trainers"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Our Trainers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Visit Us</h3>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              120 Wellness Way, Suite B <br /> Portland, OR 97204
            </p>
            <div className="mt-4 space-y-1.5 text-sm text-muted-foreground">
              <p>
                Email:{" "}
                <a href="mailto:hello@soulstretch.com" className="text-foreground hover:text-primary transition-colors">
                  hello@soulstretch.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a href="tel:+15035550199" className="text-foreground hover:text-primary transition-colors">
                  +1 (503) 555-0199
                </a>
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Newsletter</h3>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Subscribe to receive weekly wellness insights, studio news, and special event details.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="you@email.com"
                required
                className="w-full min-w-0 h-9.5 px-3 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-1.5 focus:ring-primary/45 placeholder:text-muted-foreground/60"
              />
              <button
                type="submit"
                className="inline-flex size-9.5 items-center justify-center rounded-lg bg-primary text-primary-foreground hover:bg-primary/95 transition-colors cursor-pointer shrink-0 shadow-sm"
                aria-label="Subscribe"
              >
                <ArrowUpRight className="size-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} SoulStretch. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
