"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { useState, useTransition } from "react";
import { fitnessClasses } from "@/data/classes";
import { ClassCard } from "@/components/shared/class-card";

const categories = ["All", "Yoga", "Strength", "Pilates"];

export function ClassesList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [, startTransition] = useTransition();

  const handleCategoryChange = (category: string) => {
    startTransition(() => {
      setSelectedCategory(category);
    });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setSearchQuery(e.target.value);
    });
  };

  const filteredClasses = fitnessClasses.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-10">
      {/* Controls: Search + Categories */}
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between border-b border-border/70 pb-8">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2.5">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`relative rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer ${
                  isActive
                    ? "text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-class-category"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full max-w-xs">
          <Search className="absolute left-3.5 top-1/2 size-4.5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search classes..."
            defaultValue={searchQuery}
            onChange={handleSearchChange}
            className="w-full h-10 pl-10 pr-4 text-sm rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/45 transition-shadow placeholder:text-muted-foreground/60"
          />
        </div>
      </div>

      {/* Classes Grid */}
      {filteredClasses.length > 0 ? (
        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredClasses.map((fitnessClass) => (
              <motion.div
                key={fitnessClass.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ClassCard fitnessClass={fitnessClass} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20 border border-dashed border-border rounded-2xl bg-card/30"
        >
          <p className="text-muted-foreground">No classes found matching your criteria.</p>
        </motion.div>
      )}
    </div>
  );
}
