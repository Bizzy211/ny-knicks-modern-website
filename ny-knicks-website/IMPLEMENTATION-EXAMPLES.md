# Implementation Examples

This document provides code examples showing how to use the implemented components and utilities.

## Using the Button Component

```tsx
import { Button } from "@/components/ui";

// Primary button (Knicks Blue)
<Button variant="primary" size="md">
  Click Me
</Button>

// Secondary button (Knicks Orange)
<Button variant="secondary" size="lg">
  Learn More
</Button>

// Outline button
<Button variant="outline" size="sm">
  View Details
</Button>

// Ghost button
<Button variant="ghost" onClick={handleClick}>
  Cancel
</Button>

// Full width button
<Button fullWidth variant="primary">
  Submit
</Button>

// With custom classes
<Button className="shadow-lg" variant="primary">
  Enhanced Button
</Button>
```

## Using Brand Colors

### In Tailwind CSS Classes

```tsx
// Background colors
<div className="bg-knicks-blue">Blue background</div>
<div className="bg-knicks-orange">Orange background</div>
<div className="bg-knicks-silver">Silver background</div>

// Text colors
<h1 className="text-knicks-blue">Blue text</h1>
<p className="text-knicks-orange">Orange text</p>

// Border colors
<div className="border-2 border-knicks-blue">Blue border</div>

// Hover effects
<button className="bg-knicks-blue hover:bg-knicks-orange">
  Hover me
</button>
```

### Using Color Constants in TypeScript

```tsx
import { KNICKS_COLORS } from "@/lib/constants";

// Access colors programmatically
const buttonStyle = {
  backgroundColor: KNICKS_COLORS.blue,
  color: "white",
};

// Use in components
function CustomComponent() {
  return (
    <div style={{ borderColor: KNICKS_COLORS.orange }}>
      Content here
    </div>
  );
}
```

## Using the cn() Utility

The `cn()` function merges Tailwind classes intelligently:

```tsx
import { cn } from "@/lib/utils";

function Card({ className, isActive }: { className?: string; isActive: boolean }) {
  return (
    <div
      className={cn(
        "p-4 rounded-lg shadow",
        isActive && "bg-knicks-blue text-white",
        !isActive && "bg-gray-100",
        className
      )}
    >
      Card content
    </div>
  );
}
```

## Layout Components

### Using Header

```tsx
import { Header } from "@/components/layout";

export default function Page() {
  return (
    <div>
      <Header />
      <main>{/* Your content */}</main>
    </div>
  );
}
```

### Using Footer

```tsx
import { Footer } from "@/components/layout";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">{/* Your content */}</main>
      <Footer />
    </div>
  );
}
```

### Complete Layout

```tsx
import { Header, Footer } from "@/components/layout";

export default function PageWithLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Your page content */}
      </main>
      <Footer />
    </div>
  );
}
```

## TypeScript Types

### Using Defined Types

```tsx
import type { Player, Game, NewsArticle } from "@/types";

// Player type
const player: Player = {
  id: "1",
  name: "Jalen Brunson",
  number: 11,
  position: "Point Guard",
  image: "/players/brunson.jpg",
};

// Game type
const upcomingGame: Game = {
  id: "game-1",
  opponent: "Brooklyn Nets",
  date: "2024-12-25",
  time: "19:30",
  location: "Madison Square Garden",
  isHome: true,
};

// NewsArticle type
const article: NewsArticle = {
  id: "news-1",
  title: "Knicks Win Big",
  excerpt: "The Knicks dominated last night...",
  publishedAt: "2024-12-22T10:00:00Z",
  author: "John Doe",
  slug: "knicks-win-big",
};
```

## Animation Libraries

### Framer Motion Example

```tsx
"use client";
import { motion } from "framer-motion";

export function AnimatedSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-knicks-blue text-white p-8"
    >
      <h2>Animated Content</h2>
    </motion.div>
  );
}
```

### GSAP Example (for future use)

```tsx
"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function GSAPAnimation() {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      gsap.from(elementRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
      });
    }
  }, []);

  return (
    <div ref={elementRef} className="bg-knicks-orange p-8">
      <h2>GSAP Animated Content</h2>
    </div>
  );
}
```

## Path Aliases

The project supports clean imports using path aliases:

```tsx
// Components
import { Button } from "@/components/ui";
import { Header, Footer } from "@/components/layout";

// Utilities
import { cn } from "@/lib/utils";
import { KNICKS_COLORS } from "@/lib/constants";

// Types
import type { Player, Game } from "@/types";

// Hooks (when added)
import { useCustomHook } from "@/hooks";
```

## Responsive Design Examples

```tsx
// Mobile-first responsive design
<div className="
  p-4                    // Default (mobile)
  md:p-6                 // Tablet
  lg:p-8                 // Desktop
  bg-knicks-blue
  text-white
">
  Responsive padding
</div>

// Responsive grid
<div className="
  grid
  grid-cols-1            // 1 column on mobile
  md:grid-cols-2         // 2 columns on tablet
  lg:grid-cols-3         // 3 columns on desktop
  gap-4
">
  {/* Grid items */}
</div>

// Responsive text
<h1 className="
  text-3xl               // Default
  md:text-5xl            // Tablet
  lg:text-7xl            // Desktop
  font-bold
  text-knicks-blue
">
  Responsive Heading
</h1>
```

## Next Steps: Component Creation

When creating new components, follow this pattern:

```tsx
// components/sections/HeroSection.tsx
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  className?: string;
}

/**
 * Hero section component for the homepage
 */
export function HeroSection({ title, subtitle, className }: HeroSectionProps) {
  return (
    <section className={cn(
      "bg-gradient-to-br from-knicks-blue to-blue-800",
      "text-white py-24",
      className
    )}>
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl mb-8">
            {subtitle}
          </p>
        )}
        <Button variant="secondary" size="lg">
          Get Started
        </Button>
      </div>
    </section>
  );
}
```

Then export from index:

```tsx
// components/sections/index.ts
export * from "./HeroSection";
```

---

These examples demonstrate the foundation that's been set up. All components are typed, styled with Knicks branding, and ready for further development.
