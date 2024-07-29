"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="pb-40 rounded-md flex flex-col antialiased my-4 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "This is the place where my wife and I always shop wholesale. The quality of the products is excellent. The employees are very friendly and professional.",
    name: "Gurhan Perindag",
    title: "Google reviews",
  },
  {
    quote:
      "I love you Istanbul Darkmen, the best shop.",
    name: "Gavhar G'ofurova",
    title: "Google reviews",
  },
  {
    quote: "Güzel bir firma mardinlılar başarılı.",
    name: "Ilker Dogan",
    title: "Google reviews",
  },
  {
    quote:
      "Harika !",
    name: "Huseyin Yenal",
    title: "Google reviews",
  },
  {
    quote:
      "Super.",
    name: "Monika Bozsik",
    title: "Google reviews",
  },
];
