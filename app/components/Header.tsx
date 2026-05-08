"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/menu", label: "Menu" },
  { href: "https://tacodelmar.com/locations/", label: "Locations", external: true },
  { href: "https://tacodelmar.com/catering/", label: "Catering", external: true },
  { href: "https://tacodelmar.com/rippinrewards/", label: "Rewards 🏄", external: true },
  { href: "https://tacodelmar.com/story/", label: "Our Story", external: true },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-tdm-teal-dark shadow-xl py-2"
          : "bg-tdm-teal py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://tacodelmar.com/builds/images/layout/logo_white.svg"
              alt="Taco Del Mar"
              className="h-9 w-auto group-hover:scale-105 transition-transform duration-200"
              onError={(e) => {
                const el = e.currentTarget as HTMLImageElement;
                el.style.display = "none";
                const fallback = el.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = "block";
              }}
            />
            <span
              className="hidden font-display text-2xl text-white"
              style={{ display: "none" }}
            >
              Taco Del Mar
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link text-white/85 hover:text-white px-4 py-2 rounded-full text-sm font-semibold font-sans transition-colors duration-200 hover:bg-white/10"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link px-4 py-2 rounded-full text-sm font-semibold font-sans transition-colors duration-200 ${
                    pathname === link.href
                      ? "bg-white/20 text-white"
                      : "text-white/85 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Order CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="https://tacodelmar.olo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block bg-tdm-orange hover:bg-tdm-orange-dark text-white font-bold font-sans px-5 py-2 rounded-full text-sm btn-pop shadow-md"
            >
              Order Now 🌮
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl hover:bg-white/15 transition-colors"
            >
              <span
                className="block w-5 h-0.5 bg-white rounded transition-all duration-250"
                style={{
                  transform: isOpen
                    ? "rotate(45deg) translateY(7px)"
                    : "none",
                }}
              />
              <span
                className="block w-5 h-0.5 bg-white rounded transition-all duration-250"
                style={{ opacity: isOpen ? 0 : 1 }}
              />
              <span
                className="block w-5 h-0.5 bg-white rounded transition-all duration-250"
                style={{
                  transform: isOpen
                    ? "rotate(-45deg) translateY(-7px)"
                    : "none",
                }}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1 pb-4">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold font-sans px-4 py-3 rounded-2xl hover:bg-white/15 transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-semibold font-sans px-4 py-3 rounded-2xl transition-colors ${
                    pathname === link.href
                      ? "bg-white/20 text-white"
                      : "text-white hover:bg-white/15"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href="https://tacodelmar.olo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tdm-orange text-white font-bold font-sans text-center px-4 py-3 rounded-2xl mt-2 btn-pop"
            >
              Order Now 🌮
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
