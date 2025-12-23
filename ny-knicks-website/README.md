# NY Knicks Modern Website

A modern, animated website for the New York Knicks built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion, GSAP, Lenis
- **State Management**: Zustand
- **Database**: Supabase
- **Video Player**: React Player

## Brand Colors

The project uses official NY Knicks brand colors:

- Knicks Blue: `#006BB6`
- Knicks Orange: `#F58426`
- Silver: `#BEC0C2`
- Black: `#000000`

## Project Structure

```
ny-knicks-website/
├── app/                    # Next.js 14 App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles with Knicks colors
├── components/
│   ├── ui/                # Reusable UI components (Button, etc.)
│   ├── layout/            # Layout components (Header, Footer)
│   └── sections/          # Page sections (Hero, Roster, etc.)
├── lib/
│   ├── utils/             # Utility functions
│   └── constants/         # Constants (colors, etc.)
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript type definitions
├── styles/                # Additional styles if needed
└── public/                # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) to see the result.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## Features

- Modern, responsive design
- Smooth scroll animations with Lenis
- Advanced animations with Framer Motion and GSAP
- Type-safe development with TypeScript
- Optimized performance with Next.js 14
- Knicks brand colors integrated throughout

## Development Guidelines

- All components should be typed with TypeScript interfaces
- Use Tailwind CSS utility classes for styling
- Follow the component structure in `/components`
- Export components from index.ts barrel files
- Use custom hooks for reusable logic

## Contributing

Please ensure all code passes TypeScript checks and follows the established patterns before submitting PRs.

## License

Private project for NY Knicks.
