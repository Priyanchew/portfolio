/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

function getInitials(label: string) {
  return label
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export function LogoImage({
  src,
  alt,
  className,
}: {
  src?: string;
  alt: string;
  className?: string;
}) {
  const [imageError, setImageError] = useState(false);

  const baseClassName = cn(
    "size-8 md:size-10 border rounded-full shadow ring-2 ring-border overflow-hidden flex-none",
    className
  );

  if (!src || imageError) {
    return (
      <div
        className={cn(
          baseClassName,
          "bg-muted text-muted-foreground grid place-items-center text-[10px] md:text-xs font-semibold"
        )}
        aria-label={alt}
      >
        {getInitials(alt)}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={cn(baseClassName, "bg-background object-contain p-1")}
      onError={() => setImageError(true)}
    />
  );
}
