"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";
import { business, primaryNav } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-4 z-40 px-4 sm:top-5 sm:px-6">
      <div className="container-page flex items-center justify-between rounded-full border border-ink/10 bg-paper/90 px-4 py-2.5 shadow-sm backdrop-blur-md sm:px-5">
        <Link href="/" className="shrink-0" aria-label={`${business.name} home`}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {primaryNav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/75 transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={business.phoneHref} className="flex items-center gap-1.5 text-sm font-semibold text-ink">
            <Phone className="h-4 w-4 text-copper" aria-hidden="true" />
            {business.phone}
          </a>
          {/* Plain <a>, not <Link>: Next's client router doesn't scroll to same-page hash anchors. */}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/#quote" className={cn(buttonVariants({ size: "sm" }))}>
            Request a Quote
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-ink lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="container-page mt-2 lg:hidden"
          >
            <nav
              className="flex flex-col gap-1 rounded-2xl border border-ink/10 bg-paper p-4 shadow-lg"
              aria-label="Mobile"
            >
              {primaryNav.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-base font-medium text-ink hover:bg-ink/5"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 flex flex-col gap-2 border-t border-ink/10 pt-3">
                <a href={business.phoneHref} className={cn(buttonVariants({ variant: "outline" }))}>
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {business.phone}
                </a>
                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                <a href="/#quote" onClick={() => setOpen(false)} className={cn(buttonVariants())}>
                  Request a Quote
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
