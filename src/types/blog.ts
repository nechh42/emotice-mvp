// src/types/blog.ts
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  category: string;
  tags: string[];
  readTime: number;
  imageUrl?: string;
  slug: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  count: number;
}