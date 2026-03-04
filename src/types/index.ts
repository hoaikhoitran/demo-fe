export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  review: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export type ButtonVariant = "primary" | "secondary" | "outline";
export type ButtonSize = "sm" | "md" | "lg";
