export interface Testimony {
  id: number;
  name: string;
  title: string;
  quote: string;
}

export const testimonials: Testimony[] = [
  {
    id: 1,
    name: "Sarah L.",
    title: "Marketing Manager",
    quote:
      "I've never felt better! SEA Catering delivers fresh, delicious meals right to my office hassle-free, just healthy food that keeps me energized all day.",
  },
  {
    id: 2,
    name: "Rina M.",
    title: "Mother of Two",
    quote:
      "As a busy mom, I love knowing I can count on SEA Catering for nutritious meals that my whole family enjoys. Truly healthy meals, anytime, anywhere!",
  },
  {
    id: 3,
    name: "David P.",
    title: "Startup Founder",
    quote:
      "SEA Catering changed the way our team eats at work. We've replaced takeout with balanced, tasty meals that actually make us feel good.",
  },
  {
    id: 4,
    name: "Andi K.",
    title: "Freelance Designer",
    quote:
      "From portion size to flavor, everything is on point. SEA Catering makes healthy eating easy, no matter where I am.",
  },
  {
    id: 5,
    name: "Lina S.",
    title: "Fitness Coach",
    quote:
      "I've tried other meal services, but none match the quality and convenience of SEA Catering. The slogan says it all—healthy meals, anytime, anywhere!",
  },
];
