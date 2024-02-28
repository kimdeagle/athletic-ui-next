"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const H1 = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <h1
      ref={ref}
      className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)}
      {...props}
    />
  ),
);
H1.displayName = "H1";

const H2 = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn("scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl", className)}
      {...props}
    />
  ),
);
H2.displayName = "H2";

const H3 = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("scroll-m-20 text-2xl font-semibold tracking-tight lg:text-3xl", className)}
      {...props}
    />
  ),
);
H3.displayName = "H3";

const H4 = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <h4
      ref={ref}
      className={cn("scroll-m-20 text-xl font-semibold tracking-tight lg:text-2xl", className)}
      {...props}
    />
  ),
);
H4.displayName = "H4";

export { H1, H2, H3, H4 };
