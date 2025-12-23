/**
 * Global type definitions for NY Knicks website
 */

export interface Player {
  id: string;
  name: string;
  number: number;
  position: string;
  image?: string;
}

export interface Game {
  id: string;
  opponent: string;
  date: string;
  time: string;
  location: string;
  isHome: boolean;
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  image?: string;
  publishedAt: string;
  author?: string;
  slug: string;
}
