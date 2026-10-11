
export interface Author {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface BlogPostData {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  content?: string; // Optional full content for Detail view
}

export const authors: Record<string, Author> = {
  mario: {
    name: "Mario Sanchez",
    role: "Lead Systems Architect",
    bio: "Mario is a Senior Staff Engineer specializing in high-performance digital architectures at KlyroByte. Prior to this, he was a Senior Engineer at Google and focused on distributed scaling.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  adrian: {
    name: "Adrian Klyro",
    role: "CEO & Founder",
    bio: "Adrian is the visionary behind KlyroByte, bringing a decade of experience from top-tier tech firms to simplify digital complexity.",
    image: "https://picsum.photos/seed/member1/150/150"
  }
};

export const blogPosts: BlogPostData[] = [
  {
    id: 0,
    title: "The Future of OTP: Moving Beyond SMS",
    excerpt: "Why WhatsApp and app-based authentication are becoming the new standard for digital security.",
    date: "Oct 12, 2024",
    category: "Security",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1633265485768-3069c3614068?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 1,
    title: "Building a Code-First Culture",
    excerpt: "How startups are using code bounty platforms to accelerate development and discover talent.",
    date: "Sep 28, 2024",
    category: "Startup",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Optimizing API Performance",
    excerpt: "Technical deep-dive into how we achieved 18ms latency across our global edge network.",
    date: "Sep 15, 2024",
    category: "Engineering",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1551288049-bbbda501b3f5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Architectural Engineering Wonders of the modern era",
    excerpt: "Exploring the intersection of physical design principles and modern software architecture.",
    date: "Oct 21, 2024",
    category: "Technology",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "Designing for Human Intuition",
    excerpt: "The psychology behind why some interfaces feel 'natural' while others feel like a chore.",
    date: "Aug 30, 2024",
    category: "Design",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "The Rise of Distributed Ledger in Supply Chains",
    excerpt: "Beyond crypto: how blockchain is solving real-world tracking problems for enterprise logistics.",
    date: "Aug 12, 2024",
    category: "Enterprise",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1561414927-6d86591d0c4f?auto=format&fit=crop&q=80&w=800"
  }
];
