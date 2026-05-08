/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

/* ── Real food images from tacodelmar.com ── */
const FOOD_IMG: Record<string, string> = {
  burritos:
    "https://i0.wp.com/tacodelmar.com/wp-content/uploads/2020/01/Taco_Del_Mar_Entrees-23-RT-scaled.jpg",
  tacos:
    "https://i0.wp.com/tacodelmar.com/wp-content/uploads/2020/01/Taco_Del_Mar_Entrees-106_RT-scaled.jpg",
  "burrito-bowls":
    "https://i0.wp.com/tacodelmar.com/wp-content/uploads/2020/01/Taco_Del_Mar_Entrees-151-RT-scaled.jpg",
  "taco-salads":
    "https://i0.wp.com/tacodelmar.com/wp-content/uploads/2020/01/Taco_Del_Mar_Entrees-46_RT-scaled.jpg",
  nachos:
    "https://i0.wp.com/tacodelmar.com/wp-content/uploads/2020/01/Taco_Del_Mar_Entrees-229_RT-scaled.jpg",
  enchiladas:
    "https://i0.wp.com/tacodelmar.com/wp-content/uploads/2020/01/Taco_Del_Mar_Entrees-161_web_RT-scaled.jpg",
  quesadillas:
    "https://i0.wp.com/tacodelmar.com/wp-content/uploads/2020/01/Taco_Del_Mar_Entrees-209-RT-scaled.jpg",
  snacks:
    "https://i0.wp.com/tacodelmar.com/wp-content/uploads/2020/02/snack-time-square-1.png",
  kids:
    "https://i0.wp.com/tacodelmar.com/wp-content/uploads/2020/01/Ingredients.png",
  hero:
    "https://i0.wp.com/tacodelmar.com/wp-content/uploads/2021/02/Fish-Tacos_2-small.png?fit=1200%2C900&ssl=1",
  heroMain:
    "https://i0.wp.com/tacodelmar.com/wp-content/uploads/2026/01/IMG_3249.png?fit=1536%2C775&ssl=1",
};

/* ── Wave divider ── */
function WaveDivider({ fill }: { fill: string }) {
  return (
    <svg
      viewBox="0 0 1440 64"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="w-full h-10 md:h-14 block"
      aria-hidden="true"
    >
      <path
        d={
          "M0,64 L0,32 Q90,0 180,32 Q270,64 360,32 Q450,0 540,32 " +
          "Q630,64 720,32 Q810,0 900,32 Q990,64 1080,32 " +
          "Q1170,0 1260,32 Q1350,64 1440,32 L1440,64 Z"
        }
        fill={fill}
      />
    </svg>
  );
}

/* ── Menu Data ── */
interface MenuItem {
  name: string;
  desc: string;
  tags?: string[];
}

interface MenuCategory {
  id: string;
  name: string;
  tagline: string;
  accentBg: string;
  accentText: string;
  rowBg: string;
  desc: string;
  items: MenuItem[];
}

const menuCategories: MenuCategory[] = [
  {
    id: "burritos",
    name: "Burritos",
    tagline: "Roll a Fat One!",
    accentBg: "bg-tdm-teal",
    accentText: "text-white",
    rowBg: "bg-tdm-cream",
    desc: "Mission-style burritos packed with rice, beans, your choice of coastal protein, cheese, and fresh pico de gallo. Choose from flour, whole wheat, spinach, or tomato basil tortillas.",
    items: [
      { name: "Chicken Tinga Burrito", desc: "Slow-cooked chicken with chilies & spices", tags: ["GF*"] },
      { name: "Rippin' Fish Burrito", desc: "Crispy baked cod, cabbage & Baja white sauce", tags: ["Popular"] },
      { name: "Ground Beef Burrito", desc: "Seasoned ground beef simmered with spices", tags: ["GF*"] },
      { name: "Carnitas Burrito", desc: "Slow-cooked pulled pork carnitas", tags: ["GF*"] },
      { name: "Crispy Shrimp Burrito", desc: "Whole seasoned crispy shrimp", tags: ["GF*"] },
      { name: "Vegetarian Burrito", desc: "Guacamole and beans, fully plant-based", tags: ["V", "VG", "GF"] },
    ],
  },
  {
    id: "tacos",
    name: "Tacos",
    tagline: "Uno, dos, tres, más?",
    accentBg: "bg-tdm-orange",
    accentText: "text-white",
    rowBg: "bg-tdm-sand",
    desc: "Crispy or soft corn tortillas loaded with your choice of coastal filling, cabbage, pico de gallo, and Baja white sauce. Order one or a whole pile.",
    items: [
      { name: "Rippin' Fish Taco", desc: "Crispy baked cod, cabbage, pico de gallo & Baja sauce", tags: ["Fan Fave"] },
      { name: "Chicken Tinga Taco", desc: "Slow-cooked chicken with chilies & spices", tags: ["GF"] },
      { name: "Carnitas Taco", desc: "Slow-cooked shredded pork carnitas", tags: ["GF"] },
      { name: "Ground Beef Taco", desc: "Seasoned ground beef with spices", tags: ["GF"] },
      { name: "Crispy Shrimp Taco", desc: "Whole seasoned crispy shrimp", tags: ["GF"] },
      { name: "Vegetarian Taco", desc: "Guacamole and beans — satisfying & fresh", tags: ["V", "VG", "GF"] },
    ],
  },
  {
    id: "burrito-bowls",
    name: "Burrito Bowls",
    tagline: "Pack a Bowl!",
    accentBg: "bg-yellow-500",
    accentText: "text-white",
    rowBg: "bg-tdm-cream",
    desc: "All the bold flavors of our Mission burrito — deconstructed and served in a bowl. Rice, beans, protein, and toppings. Great for keto, low-carb & gluten-free diets.",
    items: [
      { name: "Chicken Tinga Bowl", desc: "Rice, beans, slow-cooked chicken, cheese, pico & salsa", tags: ["GF", "Keto"] },
      { name: "Rippin' Fish Bowl", desc: "Rice, beans, crispy cod, cabbage & Baja sauce", tags: ["Popular"] },
      { name: "Carnitas Bowl", desc: "Rice, beans, pulled pork, cheese, pico & salsa", tags: ["GF"] },
      { name: "Ground Beef Bowl", desc: "Rice, beans, seasoned beef, cheese, pico & salsa", tags: ["GF"] },
      { name: "Shrimp Bowl", desc: "Rice, beans, crispy shrimp, cheese, pico & salsa", tags: ["GF"] },
      { name: "Vegetarian Bowl", desc: "Rice, beans, guacamole, cheese, pico & salsa", tags: ["V", "VG", "GF"] },
    ],
  },
  {
    id: "taco-salads",
    name: "Taco Salads",
    tagline: "Crispy & Fresh",
    accentBg: "bg-tdm-green",
    accentText: "text-white",
    rowBg: "bg-tdm-sand",
    desc: "A crispy in-house baked tortilla shell filled with rice, beans, your choice of coastal protein, cheese, pico de gallo, and your choice of salsa.",
    items: [
      { name: "Chicken Tinga Salad", desc: "Crispy shell, rice, beans, chicken, cheese & pico", tags: [] },
      { name: "Rippin' Fish Salad", desc: "Crispy shell, rice, beans, crispy cod & Baja sauce", tags: ["Popular"] },
      { name: "Carnitas Salad", desc: "Crispy shell, rice, beans, carnitas, cheese & pico", tags: [] },
      { name: "Ground Beef Salad", desc: "Crispy shell, rice, beans, beef, cheese & pico", tags: [] },
      { name: "Vegetarian Salad", desc: "Crispy shell, rice, beans, guac, cheese & pico", tags: ["V"] },
    ],
  },
  {
    id: "nachos",
    name: "Loaded Nachos",
    tagline: "Go Big!",
    accentBg: "bg-tdm-red",
    accentText: "text-white",
    rowBg: "bg-tdm-cream",
    desc: "Tortilla chips piled high with melted cheese, rice, beans, your choice of protein, and salsa. Add guac for extra awesome.",
    items: [
      { name: "Chicken Tinga Nachos", desc: "Chips, melted cheese, rice, beans, chicken & salsa", tags: [] },
      { name: "Rippin' Fish Nachos", desc: "Chips, melted cheese, rice, beans, crispy cod & salsa", tags: [] },
      { name: "Carnitas Nachos", desc: "Chips, melted cheese, rice, beans, carnitas & salsa", tags: [] },
      { name: "Ground Beef Nachos", desc: "Chips, melted cheese, rice, beans, beef & salsa", tags: [] },
      { name: "Vegetarian Nachos", desc: "Chips, melted cheese, rice, beans, guac & salsa", tags: ["V"] },
    ],
  },
  {
    id: "enchiladas",
    name: "Enchiladas",
    tagline: "Smothered in Goodness",
    accentBg: "bg-tdm-teal-dark",
    accentText: "text-white",
    rowBg: "bg-tdm-sand",
    desc: "Choose 2 enchiladas, or mix it up with 1 enchilada + 1 taco. Served with rice, beans, sour cream, pico de gallo, and guacamole.",
    items: [
      { name: "2 Enchiladas", desc: "Two enchiladas with protein, rice, beans, sour cream, pico & guac", tags: [] },
      { name: "1 Enchilada + 1 Taco", desc: "One enchilada, one taco, rice, beans, sour cream, pico & guac", tags: [] },
      { name: "Chicken Tinga Enchiladas", desc: "Slow-cooked chicken wrapped in enchilada sauce", tags: [] },
      { name: "Ground Beef Enchiladas", desc: "Seasoned beef wrapped in enchilada sauce", tags: [] },
      { name: "Carnitas Enchiladas", desc: "Pulled pork wrapped in enchilada sauce", tags: [] },
    ],
  },
  {
    id: "quesadillas",
    name: "Quesadillas",
    tagline: "Grilled & Golden",
    accentBg: "bg-amber-500",
    accentText: "text-white",
    rowBg: "bg-tdm-cream",
    desc: "Grilled flour tortillas with melted cheese and your choice of coastal protein. Choose from regular, whole wheat, spinach, or tomato basil tortillas.",
    items: [
      { name: "Chicken Tinga Quesadilla", desc: "Grilled tortilla, melted cheese & slow-cooked chicken", tags: [] },
      { name: "Carnitas Quesadilla", desc: "Grilled tortilla, melted cheese & pulled pork", tags: [] },
      { name: "Ground Beef Quesadilla", desc: "Grilled tortilla, melted cheese & seasoned beef", tags: [] },
      { name: "Shrimp Quesadilla", desc: "Grilled tortilla, melted cheese & crispy shrimp", tags: [] },
      { name: "Cheese Quesadilla", desc: "Grilled tortilla with melted cheese — pure simplicity", tags: ["V"] },
    ],
  },
  {
    id: "snacks",
    name: "Snack Attack",
    tagline: "Little bites, big flavor",
    accentBg: "bg-purple-600",
    accentText: "text-white",
    rowBg: "bg-tdm-sand",
    desc: "Perfect for snacking, sharing, or when you just need a little something extra on the side.",
    items: [
      { name: "Chips & Salsa", desc: "Tortilla chips with your choice of 5 salsas", tags: ["V", "VG", "GF"] },
      { name: "Chips & Guacamole", desc: "Tortilla chips with fresh house-made guacamole", tags: ["V", "VG", "GF"] },
      { name: "Chips & Queso", desc: "Tortilla chips with warm creamy queso", tags: ["V", "GF"] },
      { name: "Rice & Beans", desc: "Side of seasoned rice and pinto beans", tags: ["V", "GF"] },
      { name: "Mondito Burrito", desc: "A small burrito — great for a quick bite", tags: [] },
      { name: "Single Taco", desc: "One taco with your choice of filling", tags: [] },
    ],
  },
  {
    id: "kids",
    name: "Los Niños",
    tagline: "Little Baja fans",
    accentBg: "bg-pink-500",
    accentText: "text-white",
    rowBg: "bg-tdm-cream",
    desc: "Kid-sized favorites the little Baja fans will love. Simple, fresh, and delicious.",
    items: [
      { name: "Cheese Quesadilla", desc: "Small grilled tortilla with melted cheese", tags: ["V"] },
      { name: "Bean & Cheese Burrito", desc: "Small burrito with beans and cheese", tags: ["V"] },
      { name: "Kid's Taco", desc: "Single taco with your choice of filling", tags: ["GF"] },
    ],
  },
];

const proteins = [
  { name: "Chicken Tinga", badges: ["GF"] },
  { name: "Rippin' Fish", badges: [] },
  { name: "Ground Beef", badges: ["GF"] },
  { name: "Carnitas", badges: ["GF"] },
  { name: "Crispy Shrimp", badges: ["GF"] },
  { name: "Vegetarian", badges: ["V", "VG", "GF"] },
  { name: "Shredded Beef", badges: ["GF", "Select locations"] },
];

const salsas = [
  { name: "Tangy Verde", heat: "Mild" },
  { name: "Roasted Chipotle", heat: "Medium" },
  { name: "Mango Salsa", heat: "Medium" },
  { name: "Habanero", heat: "Hot" },
  { name: "Pico de Gallo", heat: "Fresh Daily" },
];

const tagColors: Record<string, string> = {
  GF: "bg-blue-100 text-blue-700",
  "GF*": "bg-blue-100 text-blue-700",
  V: "bg-green-100 text-green-700",
  VG: "bg-emerald-100 text-emerald-700",
  "Fan Fave": "bg-orange-100 text-orange-700",
  Popular: "bg-orange-100 text-orange-700",
  Keto: "bg-red-100 text-red-700",
  "Select locations": "bg-gray-100 text-gray-600",
};

export default function MenuPage() {
  const [activeId, setActiveId] = useState(menuCategories[0].id);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  /* Track which section is in view */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    menuCategories.forEach((cat) => {
      const el = sectionRefs.current[cat.id];
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(cat.id);
        },
        { rootMargin: "-25% 0px -65% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    const el = sectionRefs.current[id];
    if (!el) return;
    const offset = 130;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ═══════════════════════════════════════
            MENU HERO — real food photo split
        ═══════════════════════════════════════ */}
        <section className="relative bg-tdm-dark min-h-[60vh] flex items-center overflow-hidden pt-16">
          {/* Full-bleed photo background at 25% opacity */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={FOOD_IMG.heroMain}
              alt=""
              className="w-full h-full object-cover object-center"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-tdm-dark/80" />
          </div>
          <div className="absolute inset-0 bg-dots opacity-15 pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text */}
              <div>
                <span className="inline-block bg-tdm-orange text-white text-xs font-bold font-sans uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  Fresh &amp; Delicious
                </span>
                <h1 className="font-display text-7xl sm:text-8xl text-white mb-6 leading-tight">
                  The Menu
                </h1>
                <p className="text-white/75 font-sans text-xl max-w-lg mb-10">
                  Made your way, every time. Choose your base, pick your coastal
                  filling, and load it up with fresh toppings.
                </p>
                <a
                  href="https://tacodelmar.olo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-tdm-orange text-white font-bold font-sans px-8 py-4 rounded-full text-lg btn-pop shadow-xl"
                >
                  Order Online →
                </a>
              </div>

              {/* Hero food photo */}
              <div className="hidden lg:block relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/15 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img
                    src={FOOD_IMG.hero}
                    alt="Rippin' Fish Tacos"
                    className="w-full h-[340px] object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tdm-dark/40 to-transparent" />
                </div>
                <div className="absolute -top-4 -right-4 bg-tdm-orange text-white rounded-full w-20 h-20 flex flex-col items-center justify-center shadow-xl text-center font-display text-xs">
                  <span>Fan Fave</span>
                </div>
              </div>
            </div>
          </div>

          {/* Wave bottom */}
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <WaveDivider fill="#FFFDF5" />
          </div>
        </section>

        {/* ═══════════════════════════════════════
            STICKY CATEGORY NAV
        ═══════════════════════════════════════ */}
        <div className="sticky top-[52px] sm:top-[56px] z-40 bg-white border-b border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex gap-2 overflow-x-auto hide-scrollbar py-3">
              {menuCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => scrollTo(cat.id)}
                  className={`flex items-center gap-1.5 whitespace-nowrap px-4 py-2 rounded-full text-sm font-bold font-sans transition-all duration-200 flex-shrink-0 ${
                    activeId === cat.id
                      ? `${cat.accentBg} ${cat.accentText} shadow-md scale-105`
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════
            PROTEINS BAR
        ═══════════════════════════════════════ */}
        <section className="bg-tdm-cream py-14 px-4 border-b border-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-3xl text-tdm-dark mb-2 text-center">
              Coastal Fillings
            </h2>
            <p className="text-tdm-muted font-sans text-center mb-8">
              Choose your protein — mix and match across any item
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {proteins.map((p) => (
                <div
                  key={p.name}
                  className="bg-white rounded-2xl p-4 text-center shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="font-bold font-sans text-xs text-tdm-dark leading-tight mb-2">
                    {p.name}
                  </div>
                  {p.badges.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-1">
                      {p.badges.map((b) => (
                        <span
                          key={b}
                          className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${tagColors[b] || "bg-gray-100 text-gray-600"}`}
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            MENU SECTIONS
        ═══════════════════════════════════════ */}
        {menuCategories.map((cat) => (
          <section
            key={cat.id}
            id={cat.id}
            ref={(el) => {
              sectionRefs.current[cat.id] = el;
            }}
            className={`${cat.rowBg} py-20 px-4`}
          >
            <div className="max-w-7xl mx-auto">
              {/* Category header */}
              <div className="flex flex-col sm:flex-row sm:items-start gap-5 mb-12">
                {/* Accent color card */}
                <div
                  className={`${cat.accentBg} ${cat.accentText} rounded-3xl px-7 py-6 flex-shrink-0 relative overflow-hidden min-w-[180px]`}
                >
                  <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
                  <div className="relative">
                    <h2 className="font-display text-3xl">{cat.name}</h2>
                    <p className="opacity-80 font-sans text-base">{cat.tagline}</p>
                  </div>
                </div>

                {/* Real food photo */}
                {FOOD_IMG[cat.id] && (
                  <div className="relative rounded-3xl overflow-hidden flex-shrink-0 w-full sm:w-52 h-44 shadow-lg img-zoom">
                    <img
                      src={FOOD_IMG[cat.id]}
                      alt={cat.name}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                )}

                {/* Description + CTA */}
                <div className="flex flex-col justify-between gap-4 flex-1">
                  <p className="text-tdm-muted font-sans text-base leading-relaxed">
                    {cat.desc}
                  </p>
                  <a
                    href="https://tacodelmar.olo.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 ${cat.accentBg} ${cat.accentText} font-bold font-sans px-6 py-3 rounded-full text-sm btn-pop self-start shadow-md`}
                  >
                    Order {cat.name} →
                  </a>
                </div>
              </div>

              {/* Items grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 card-lift group"
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="font-display text-xl text-tdm-dark group-hover:text-tdm-teal transition-colors leading-tight">
                        {item.name}
                      </h3>
                      {item.tags && item.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 flex-shrink-0 justify-end">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className={`text-[10px] font-bold px-2 py-1 rounded-full whitespace-nowrap ${
                                tagColors[tag] || "bg-gray-100 text-gray-600"
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <p className="text-tdm-muted font-sans text-sm leading-relaxed mb-5 line-clamp-2">
                      {item.desc}
                    </p>
                    <a
                      href="https://tacodelmar.olo.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-tdm-teal hover:text-tdm-teal-dark font-bold font-sans text-sm transition-colors group-hover:underline"
                    >
                      Order Now →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* ═══════════════════════════════════════
            SALSA BAR
        ═══════════════════════════════════════ */}
        <section className="relative bg-tdm-teal py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
          {/* Top wave */}
          <div className="absolute top-0 left-0 right-0 rotate-180 z-10">
            <WaveDivider fill="#F5E6C8" />
          </div>

          <div className="relative max-w-7xl mx-auto z-20">
            <div className="text-center mb-12">
              <h2 className="font-display text-5xl text-white mb-4">
                Pick Your Heat
              </h2>
              <p className="text-white/80 font-sans text-lg">
                5 salsas. Mild to wild. All made in-house.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {salsas.map((salsa) => (
                <div
                  key={salsa.name}
                  className="bg-white/15 border border-white/30 hover:bg-white/25 rounded-2xl px-6 py-5 text-white text-center min-w-[150px] transition-colors"
                >
                  <div className="font-display text-xl mb-1">{salsa.name}</div>
                  <div className="text-white/70 text-sm font-sans">{salsa.heat}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <WaveDivider fill="#FFFDF5" />
          </div>
        </section>

        {/* ═══════════════════════════════════════
            DIETARY OPTIONS
        ═══════════════════════════════════════ */}
        <section className="bg-tdm-cream py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-tdm-sand rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-dots-dark pointer-events-none" />
              <div className="relative">
                <h2 className="font-display text-4xl md:text-5xl text-tdm-dark mb-4">
                  Eating your way?
                </h2>
                <p className="text-tdm-muted font-sans text-lg mb-8 max-w-2xl mx-auto">
                  Every menu item is fully customizable. Mix and match proteins,
                  tortillas, salsas, and toppings to fit any diet.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    { label: "🥩 Keto", c: "bg-red-100 text-red-700 border-red-200" },
                    { label: "🌿 Vegetarian", c: "bg-green-100 text-green-700 border-green-200" },
                    { label: "🌱 Vegan", c: "bg-emerald-100 text-emerald-700 border-emerald-200" },
                    { label: "🪨 Paleo", c: "bg-amber-100 text-amber-700 border-amber-200" },
                    { label: "✅ Gluten-Free", c: "bg-blue-100 text-blue-700 border-blue-200" },
                    { label: "🥗 Low-Carb", c: "bg-teal-100 text-teal-700 border-teal-200" },
                    { label: "🌿 Plant-Based", c: "bg-lime-100 text-lime-700 border-lime-200" },
                  ].map((d) => (
                    <span
                      key={d.label}
                      className={`${d.c} border text-sm font-bold font-sans px-5 py-2.5 rounded-full`}
                    >
                      {d.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            FINAL CTA
        ═══════════════════════════════════════ */}
        <section className="relative bg-tdm-orange py-28 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />

          <div className="relative max-w-4xl mx-auto text-center z-10">
            <h2 className="font-display text-6xl md:text-7xl text-white mb-6">
              Ready to order?
            </h2>
            <p className="text-white/85 font-sans text-xl mb-10 max-w-xl mx-auto">
              Skip the line — order online for pickup, or find your nearest
              Taco Del Mar for that fresh Baja fix.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://tacodelmar.olo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-tdm-orange font-bold font-sans px-10 py-4 rounded-full text-xl btn-pop shadow-2xl"
              >
                Order Online Now
              </a>
              <a
                href="https://tacodelmar.com/locations/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 border-2 border-white text-white font-bold font-sans px-10 py-4 rounded-full text-xl btn-pop"
              >
                Find a Location
              </a>
            </div>
            <div className="mt-8">
              <Link
                href="/"
                className="text-white/70 hover:text-white font-sans text-sm transition-colors hover:underline"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
