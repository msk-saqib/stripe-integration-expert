export interface Testimonial {
  author: string;
  location: string;
  rating: number;
  quote: string;
  service: string;
}

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    author: "Roland Gashi",
    location: "Belgium",
    rating: 5,
    quote:
      "Absolutely outstanding experience! The communication was smooth, fast, and professional from start to finish. He understood exactly what I needed for my Shopify integration and delivered results that exceeded my expectations. The work was clean, efficient, and perfectly executed. I'm genuinely impressed by his skills and attention to detail. If you need someone reliable who knows what they're doing, look no further. I highly recommend him. Will definitely order again.",
    service: "Shopify Integration",
  },
  {
    author: "Eagleboarder128",
    location: "United States",
    rating: 5,
    quote: "Great service! Apple Pay & Google Pay setup with no issues on our website.",
    service: "Apple Pay & Google Pay Integration",
  },
  {
    author: "Christophe Caill",
    location: "France",
    rating: 5,
    quote: "Great work — professional, efficient, and exactly what we needed. Highly recommend!",
    service: "Payment Integration",
  },
  {
    author: "Thomas B.",
    location: "United States",
    rating: 5,
    quote: "Great job as always. Very professional and responsive. Highly recommend.",
    service: "Payment Integration",
  },
] as const;
