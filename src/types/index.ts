export interface NavItem {
  label: string
  href: string
  external?: boolean
  submenu?: NavItem[]
}

export interface CompanyInfo {
  name: string
  tagline: string
  description: string
  foundedYear: number
  address: {
    street: string
    city: string
    state: string
    zip: string
    country: string
  }
  contact: {
    email: string
    phone: string
  }
}

export interface Product {
  id: string
  name: string
  category: string
  description: string
  features: string[]
  specs: {
    accuracy: string
    range: string
    speed: string
    weight: string
  }
  image?: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon?: string
  features: string[]
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image?: string
  social?: {
    linkedin?: string
    twitter?: string
    github?: string
  }
}

export interface Testimonial {
  id: string
  author: string
  company: string
  role: string
  content: string
  rating: number
  image?: string
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: Date
  tags: string[]
  image?: string
  readTime: number
}