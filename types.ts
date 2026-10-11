// Add missing React import for ReactNode namespace
import React from 'react';

export interface Stat {
  label: string;
  value: string;
}

export interface Value {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  tagline: string;
  benefits: string[];
  cta: string;
  image: string;
  color: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}