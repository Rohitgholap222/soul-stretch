"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Dumbbell, Menu, X, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { primaryNavigation } from "@/data/navigation";
import { Button } from "@/components/ui/button";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="size-9 rounded-xl border border-border bg-card/50" />
    );
  }

  return (
    <button
      type="button"
      className="inline-flex size-9 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 cursor-pointer"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="size-4 text-amber-500 fill-amber-500" />
      ) : (
        <Moon className="size-4 text-slate-700 fill-slate-700" />
      )}
    </button>
  );
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="section-shell flex h-18 items-center justify-between gap-4">
        <Link
          href="/"
          className="group inline-flex items-center gap-2.5 rounded-md outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          aria-label="SoulStretch home"
        >
          <span className="flex size-9 items-center justify-center rounded-xl bg-linear-to-br from-primary to-blue-500 text-primary-foreground shadow-lg shadow-primary/25 transition-transform duration-300 group-hover:-rotate-6">
            <Dumbbell className="size-4" aria-hidden="true" />
          </span>
          <span className="font-heading text-xl font-semibold tracking-tight">
            SoulStretch
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {primaryNavigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <div className="hidden lg:block">
            <Button asChild className="h-10 rounded-full px-5 shadow-lg shadow-primary/20">
              <Link href="/#contact">
                Start your journey
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 lg:hidden cursor-pointer"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
          {isMenuOpen ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>
      </div>
    </div>

    <AnimatePresence initial={false}>
        {isMenuOpen ? (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <div className="section-shell flex flex-col gap-1 py-4">
              {primaryNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="mt-3 h-11 w-full rounded-xl">
                <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>
                  Start your journey
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}