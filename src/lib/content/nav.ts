import type { NavLink } from "./types";

export const primaryNav: NavLink[] = [
  { label: "Services", href: "/#services" },
  { label: "Service Areas", href: "/#areas" },
  { label: "Reviews", href: "/#reviews" },
  { label: "About", href: "/#about" },
  { label: "FAQ", href: "/#faq" },
];

export const footerNav: NavLink[] = [
  ...primaryNav,
  { label: "Request a Quote", href: "/#quote" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];
