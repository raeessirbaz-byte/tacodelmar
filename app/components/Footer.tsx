import Link from "next/link";

const exploreLinks = [
  { href: "/menu", label: "Menu", internal: true },
  { href: "https://tacodelmar.com/locations/", label: "Locations" },
  { href: "https://tacodelmar.com/catering/", label: "Catering" },
  { href: "https://tacodelmar.com/story/", label: "Our Story" },
  { href: "https://tacodelmar.com/rippinrewards/", label: "Rippin' Rewards" },
];

const infoLinks = [
  { href: "https://tacodelmar.com/franchise/", label: "Franchise" },
  { href: "https://tacodelmar.com/nutrition/", label: "Nutrition Info" },
  { href: "https://tacodelmar.com/talkto/", label: "Talk to Us" },
  { href: "https://tacodelmar.com/legal/", label: "Legal" },
  { href: "https://tacodelmar.com/privacy/", label: "Privacy Policy" },
];

const socialLinks = [
  { label: "Instagram", icon: "IG", href: "https://instagram.com/official_tacodelmar" },
  { label: "Facebook", icon: "FB", href: "https://facebook.com/tacodelmar" },
  { label: "Twitter / X", icon: "𝕏", href: "https://twitter.com/tacodelmar" },
];

export default function Footer() {
  return (
    <footer className="bg-tdm-charcoal text-white">
      {/* Top wave */}
      <div className="bg-tdm-cream">
        <svg
          viewBox="0 0 1440 56"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-10 block"
        >
          <path
            d="M0,0 L0,28 Q90,56 180,28 Q270,0 360,28 Q450,56 540,28 Q630,0 720,28 Q810,56 900,28 Q990,0 1080,28 Q1170,56 1260,28 Q1350,0 1440,28 L1440,0 Z"
            fill="#2D2D2D"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://tacodelmar.com/builds/images/layout/logo_white.svg"
              alt="Taco Del Mar"
              className="h-11 w-auto mb-5"
            />
            <p className="text-white/60 font-sans text-sm leading-relaxed mb-6 max-w-xs">
              Born on the beach. Live Baja! Fresh, delicious Mexican food
              made exactly your way — every single time.
            </p>
            {/* Social */}
            <div className="flex gap-3 mb-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-tdm-orange flex items-center justify-center transition-colors duration-200 font-bold text-xs"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            {/* App badge */}
            <a
              href="https://tacodelmar.com/rippinrewards/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-tdm-teal hover:bg-tdm-teal-dark text-white text-sm font-bold font-sans px-4 py-2.5 rounded-full transition-colors btn-pop"
            >
              🏄 Get the Rippin' Rewards App
            </a>
          </div>

          {/* Explore links */}
          <div>
            <h4 className="font-display text-xl text-tdm-yellow mb-5">Explore</h4>
            <ul className="space-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  {link.internal ? (
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-white font-sans text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white font-sans text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Info links */}
          <div>
            <h4 className="font-display text-xl text-tdm-yellow mb-5">Info</h4>
            <ul className="space-y-2.5">
              {infoLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white font-sans text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs font-sans text-center sm:text-left">
            ©2026 Taco Del Mar; TDM IP HOLDER, LLC. All rights reserved.
          </p>
          <a
            href="https://tacodelmar.olo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-tdm-orange hover:bg-tdm-orange-dark text-white font-bold font-sans px-6 py-2.5 rounded-full text-sm btn-pop"
          >
            Order Online →
          </a>
        </div>
      </div>
    </footer>
  );
}
