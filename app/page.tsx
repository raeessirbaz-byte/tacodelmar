"use client";
/* eslint-disable @next/next/no-img-element */

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";

/* ── Images ── */
const IMG = {
  heroSlider:
    "https://i0.wp.com/tacodelmar.com/wp-content/uploads/2021/02/Fish-Tacos_2-small.png?fit=1200%2C900&ssl=1",
  fishTacos2:
    "https://i0.wp.com/tacodelmar.com/wp-content/uploads/2020/02/Fish-Tacos.png",
  story:
    "https://i0.wp.com/tacodelmar.com/wp-content/uploads/2020/01/shutterstock_47874331-scaled.jpg?fit=1536%2C1222&ssl=1",
  storyBlock:
    "https://i0.wp.com/tacodelmar.com/wp-content/uploads/2020/01/Our-story-block.png?fit=1536%2C918&ssl=1",
  catering:
    "https://i0.wp.com/tacodelmar.com/wp-content/uploads/2020/01/Catering-block.png?fit=1471%2C1536&ssl=1",
  mealKits:
    "https://i0.wp.com/tacodelmar.com/wp-content/uploads/2020/03/meal-kits-block.png?fit=1471%2C1536&ssl=1",
  rewards:
    "https://i0.wp.com/tacodelmar.com/wp-content/uploads/2022/03/ImageBlock_Rectangle_Template-Rewards-2.png",
  ingredients:
    "https://i0.wp.com/tacodelmar.com/wp-content/uploads/2020/01/Ingredients.png",
  burrito:
    "https://i0.wp.com/tacodelmar.com/wp-content/uploads/2020/01/Taco_Del_Mar_Entrees-23-RT-scaled.jpg",
  tacos:
    "https://i0.wp.com/tacodelmar.com/wp-content/uploads/2020/01/Taco_Del_Mar_Entrees-106_RT-scaled.jpg",
  bowl:
    "https://i0.wp.com/tacodelmar.com/wp-content/uploads/2020/01/Taco_Del_Mar_Entrees-151-RT-scaled.jpg",
  salad:
    "https://i0.wp.com/tacodelmar.com/wp-content/uploads/2020/01/Taco_Del_Mar_Entrees-46_RT-scaled.jpg",
  nachos:
    "https://i0.wp.com/tacodelmar.com/wp-content/uploads/2020/01/Taco_Del_Mar_Entrees-229_RT-scaled.jpg",
  enchiladas:
    "https://i0.wp.com/tacodelmar.com/wp-content/uploads/2020/01/Taco_Del_Mar_Entrees-161_web_RT-scaled.jpg",
  quesadilla:
    "https://i0.wp.com/tacodelmar.com/wp-content/uploads/2020/01/Taco_Del_Mar_Entrees-209-RT-scaled.jpg",
  snack:
    "https://i0.wp.com/tacodelmar.com/wp-content/uploads/2020/02/snack-time-square-1.png",
};

/* ── Animation variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const staggerSlow = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60, rotateY: 10 },
  visible: { opacity: 1, x: 0, rotateY: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60, rotateY: -10 },
  visible: { opacity: 1, x: 0, rotateY: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const pop = {
  hidden: { opacity: 0, scale: 0.7, rotate: -8 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 260, damping: 18 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, rotateX: 12, scale: 0.95 },
  visible: { opacity: 1, y: 0, rotateX: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

function WaveDivider({ fill }: { fill: string }) {
  return (
    <svg
      viewBox="0 0 1440 64"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="w-full h-12 md:h-16 block"
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

const categories = [
  { name: "Tacos",         desc: "Uno, dos, tres, más?",     id: "tacos",         img: IMG.tacos,       tint: "bg-tdm-orange/40" },
  { name: "Burritos",      desc: "Roll a Fat One!",          id: "burritos",      img: IMG.burrito,     tint: "bg-tdm-teal/40" },
  { name: "Burrito Bowls", desc: "Pack a Bowl!",             id: "burrito-bowls", img: IMG.bowl,        tint: "bg-yellow-600/40" },
  { name: "Taco Salads",   desc: "Crispy baked shell",       id: "taco-salads",   img: IMG.salad,       tint: "bg-tdm-green/40" },
  { name: "Nachos",        desc: "Loaded with flavor",       id: "nachos",        img: IMG.nachos,      tint: "bg-tdm-red/40" },
  { name: "Enchiladas",    desc: "Smothered in goodness",    id: "enchiladas",    img: IMG.enchiladas,  tint: "bg-tdm-teal-dark/40" },
  { name: "Quesadillas",   desc: "Grilled & golden",         id: "quesadillas",   img: IMG.quesadilla,  tint: "bg-amber-600/40" },
  { name: "Snacks & Sides",desc: "Little bites, big flavor", id: "snacks",        img: IMG.snack,       tint: "bg-purple-700/40" },
];

const popularItems = [
  { name: "Rippin' Fish Taco",  desc: "Crispy baked cod, cabbage, pico de gallo & Baja white sauce", badge: "Fan Favorite",   badgeBg: "bg-tdm-orange",                   img: IMG.tacos,   gradientFrom: "from-tdm-teal",    gradientTo: "to-tdm-teal-dark" },
  { name: "Mission Burrito",    desc: "Rice, beans, coastal filling, cheese & pico de gallo",         badge: "Most Popular",   badgeBg: "bg-tdm-yellow text-tdm-dark",     img: IMG.burrito, gradientFrom: "from-tdm-orange",  gradientTo: "to-tdm-orange-dark" },
  { name: "Burrito Bowl",       desc: "All the flavor, none of the tortilla — fully customizable",    badge: "Keto Friendly",  badgeBg: "bg-tdm-green",                    img: IMG.bowl,    gradientFrom: "from-tdm-green",   gradientTo: "to-emerald-800" },
  { name: "Loaded Nachos",      desc: "Chips, melted cheese, rice, beans, protein & your choice of salsa", badge: "Great to Share", badgeBg: "bg-tdm-red",              img: IMG.nachos,  gradientFrom: "from-tdm-red",     gradientTo: "to-rose-900" },
  { name: "Taco Salad",         desc: "Crispy in-house baked shell loaded with rice, beans & toppings", badge: "Fresh & Crispy", badgeBg: "bg-tdm-green",               img: IMG.salad,   gradientFrom: "from-amber-500",   gradientTo: "to-orange-700" },
];

const stats = [
  { num: "30+",     label: "Years of flavor" },
  { num: "100%",    label: "Fresh daily" },
  { num: "7",       label: "Protein options" },
  { num: "Endless", label: "Customizations" },
];

const storyBadges = ["Beach-Inspired", "Fresh Daily", "Made Your Way", "Bold Flavor"];

const rewardsBenefits = [
  "Earn points on every order",
  "Redeem for free food",
  "Exclusive app-only deals",
  "First to know about new items",
  "Daily specials — Get Hooked Up!",
];

const dietBadges = [
  { label: "Keto",        bg: "bg-red-100 text-red-700 border-red-200" },
  { label: "Vegetarian",  bg: "bg-green-100 text-green-700 border-green-200" },
  { label: "Vegan",       bg: "bg-emerald-100 text-emerald-700 border-emerald-200" },
  { label: "Paleo",       bg: "bg-amber-100 text-amber-700 border-amber-200" },
  { label: "Gluten-Free", bg: "bg-blue-100 text-blue-700 border-blue-200" },
  { label: "Low-Carb",    bg: "bg-teal-100 text-teal-700 border-teal-200" },
  { label: "Plant-Based", bg: "bg-lime-100 text-lime-700 border-lime-200" },
];

export default function HomePage() {
  /* ── Hero parallax ── */
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const rawImgY   = useTransform(heroScroll, [0, 1], ["0%", "35%"]);
  const heroImgY  = useSpring(rawImgY,  { stiffness: 80, damping: 20 });
  const heroScale = useTransform(heroScroll, [0, 1], [1, 1.08]);
  const heroOpacity = useTransform(heroScroll, [0, 0.7], [1, 0]);
  const heroTextY = useTransform(heroScroll, [0, 1], ["0%", "20%"]);

  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ═══════════════════════════════════════
            HERO — parallax + 3D text entrance
        ═══════════════════════════════════════ */}
        <section
          ref={heroRef}
          className="relative min-h-screen flex items-center overflow-hidden pt-16"
          style={{ perspective: "1200px" }}
        >
          {/* Parallax background */}
          <motion.img
            src={IMG.heroSlider}
            alt="Taco Del Mar fish taco"
            style={{ y: heroImgY, scale: heroScale }}
            className="absolute inset-0 w-full h-full object-cover will-change-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />

          {/* Center-aligned content — parallax up + fade out */}
          <motion.div
            style={{ y: heroTextY, opacity: heroOpacity, textShadow: "0 2px 16px rgba(0,0,0,0.55)" }}
            className="relative w-full z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 py-24"
          >
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center"
            >
              {/* Badge */}
              <motion.div variants={pop}>
                <div className="inline-flex items-center gap-2 bg-tdm-yellow text-tdm-dark px-4 py-2 rounded-full text-sm font-bold font-sans mb-7 shadow-md">
                  NEW — Rippin&apos; Fish: juicier &amp; crispier than ever!
                </div>
              </motion.div>

              {/* Headline — each line has 3D flip-in */}
              <motion.h1
                variants={fadeUp}
                className="font-display text-6xl sm:text-7xl lg:text-8xl text-white leading-tight mb-6"
                style={{ transformStyle: "preserve-3d" }}
              >
                Born on{" "}
                <motion.span
                  className="text-tdm-yellow inline-block"
                  initial={{ rotateX: 90, opacity: 0 }}
                  animate={{ rotateX: 0, opacity: 1 }}
                  transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  style={{ display: "inline-block", transformOrigin: "center bottom" }}
                >
                  the Beach.
                </motion.span>
                <br />
                <motion.span
                  className="inline-block"
                  initial={{ rotateX: 90, opacity: 0 }}
                  animate={{ rotateX: 0, opacity: 1 }}
                  transition={{ delay: 0.55, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  style={{ display: "inline-block", transformOrigin: "center bottom" }}
                >
                  Live Baja!
                </motion.span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-white/85 font-sans text-lg md:text-xl leading-relaxed mb-10 max-w-2xl"
              >
                Fresh, delicious Mexican food made your way. Tacos, burritos,
                bowls and more — real coastal flavor in every bite.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
                <motion.a
                  href="https://tacodelmar.olo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-tdm-orange hover:bg-tdm-orange-dark text-white font-bold font-sans px-8 py-4 rounded-full text-lg shadow-2xl"
                  whileHover={{ scale: 1.07, rotateZ: -1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  Order Now
                </motion.a>
                <motion.div
                  whileHover={{ scale: 1.07, rotateZ: 1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <Link
                    href="/menu"
                    className="bg-white/15 hover:bg-white/25 border-2 border-white/50 text-white font-bold font-sans px-8 py-4 rounded-full text-lg backdrop-blur-sm block"
                  >
                    View Menu →
                  </Link>
                </motion.div>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={stagger}
                className="flex flex-wrap justify-center gap-10 mt-16"
              >
                {stats.map((s) => (
                  <motion.div key={s.num} variants={fadeUp} className="text-center">
                    <div className="font-display text-3xl text-tdm-yellow">{s.num}</div>
                    <div className="text-white/65 text-xs font-sans uppercase tracking-wider">{s.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Made Fresh badge — spin in */}
            <motion.div
              className="absolute top-24 right-8 sm:right-16 bg-tdm-yellow text-tdm-dark rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-xl text-center"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.9, type: "spring", stiffness: 200, damping: 14 }}
              whileHover={{ rotate: 15, scale: 1.12 }}
            >
              <span className="font-display text-sm leading-tight px-2">Made Fresh!</span>
            </motion.div>
          </motion.div>

          <div className="absolute bottom-0 left-0 right-0 z-10">
            <WaveDivider fill="#FFFDF5" />
          </div>
        </section>

        {/* ═══════════════════════════════════════
            CATEGORIES — 3D card grid
        ═══════════════════════════════════════ */}
        <section className="bg-tdm-cream py-24 px-4" style={{ perspective: "1000px" }}>
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-14"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
            >
              <motion.span variants={fadeUp} className="inline-block bg-tdm-teal text-white text-xs font-bold font-sans uppercase tracking-widest px-4 py-2 rounded-full mb-5">
                The Menu
              </motion.span>
              <motion.h2 variants={fadeUp} className="font-display text-5xl md:text-6xl text-tdm-dark mb-4">
                What are you feeling?
              </motion.h2>
              <motion.p variants={fadeUp} className="text-tdm-muted font-sans text-lg max-w-2xl mx-auto">
                From tacos to bowls to loaded nachos — build it your way with your choice of coastal filling.
              </motion.p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={staggerSlow}
            >
              {categories.map((cat) => (
                <motion.div
                  key={cat.id}
                  variants={cardVariant}
                  whileHover={{
                    rotateY: 6,
                    rotateX: -4,
                    scale: 1.04,
                    z: 40,
                    transition: { type: "spring", stiffness: 300, damping: 18 },
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Link
                    href={`/menu#${cat.id}`}
                    className="relative rounded-3xl overflow-hidden h-52 sm:h-56 shadow-lg block"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <img
                      src={cat.img}
                      alt={cat.name}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                    <div className={`absolute inset-0 ${cat.tint}`} />
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <h3 className="font-display text-xl leading-tight">{cat.name}</h3>
                      <p className="text-white/75 text-xs font-sans mt-0.5">{cat.desc}</p>
                    </div>
                    <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            BRAND STORY — split 3D slide-in
        ═══════════════════════════════════════ */}
        <section className="relative bg-tdm-teal py-28 px-4 overflow-hidden" style={{ perspective: "1200px" }}>
          <div className="absolute top-0 left-0 right-0 z-10 rotate-180">
            <WaveDivider fill="#FFFDF5" />
          </div>
          <div className="absolute inset-0 bg-dots pointer-events-none" />

          <div className="relative max-w-7xl mx-auto z-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={stagger}
              >
                <motion.span variants={fadeLeft} className="inline-block bg-tdm-yellow text-tdm-dark text-xs font-bold font-sans uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  Our Story
                </motion.span>
                <motion.h2 variants={fadeLeft} className="font-display text-5xl md:text-6xl text-white mb-7">
                  Escape to{" "}
                  <span className="text-tdm-yellow">Baja.</span>
                </motion.h2>
                <motion.p variants={fadeLeft} className="text-white/80 font-sans text-lg leading-relaxed mb-5">
                  We brought the laid-back vibes of Baja California straight to your neighborhood. Fresh ingredients, bold coastal flavors, and made-your-way customization — that&apos;s the Taco Del Mar way.
                </motion.p>
                <motion.p variants={fadeLeft} className="text-white/75 font-sans text-base leading-relaxed mb-8">
                  Keto? Vegan? Gluten-free? Paleo? Every item is fully customizable with your choice of protein, salsa, and toppings.
                </motion.p>
                <motion.div variants={stagger} className="flex flex-wrap gap-3 mb-8">
                  {storyBadges.map((badge) => (
                    <motion.span
                      key={badge}
                      variants={fadeUp}
                      whileHover={{ scale: 1.08, rotateZ: -2 }}
                      className="bg-white/15 border border-white/30 text-white text-sm font-bold font-sans px-4 py-2 rounded-full cursor-default"
                    >
                      {badge}
                    </motion.span>
                  ))}
                </motion.div>
                <motion.a
                  variants={fadeLeft}
                  href="https://tacodelmar.com/story/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-tdm-yellow text-tdm-dark font-bold font-sans px-7 py-3 rounded-full shadow-lg"
                  whileHover={{ scale: 1.06, rotateZ: 1 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 280, damping: 16 }}
                >
                  Read Our Story →
                </motion.a>
              </motion.div>

              <motion.div
                className="relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeRight}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/20"
                  whileHover={{ rotateY: -5, rotateX: 3, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <img
                    src={IMG.story}
                    alt="Taco Del Mar — Baja beach vibes"
                    className="w-full h-[420px] object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tdm-teal-dark/50 to-transparent" />
                  <div className="absolute bottom-5 left-5 text-white">
                    <span className="font-display text-2xl drop-shadow-lg">Born on the Beach</span>
                  </div>
                </motion.div>
                <motion.div
                  className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl overflow-hidden shadow-xl ring-2 ring-white/30"
                  initial={{ opacity: 0, scale: 0.6, rotate: 12 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 18 }}
                  whileHover={{ rotate: -4, scale: 1.1 }}
                >
                  <img
                    src={IMG.storyBlock}
                    alt="Surf board and beach lifestyle"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-10">
            <WaveDivider fill="#FFFDF5" />
          </div>
        </section>

        {/* ═══════════════════════════════════════
            POPULAR ITEMS — horizontal scroll + stagger
        ═══════════════════════════════════════ */}
        <section className="bg-tdm-cream py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
            >
              <div>
                <motion.span variants={fadeUp} className="inline-block bg-tdm-orange text-white text-xs font-bold font-sans uppercase tracking-widest px-4 py-2 rounded-full mb-4">
                  Fan Favorites
                </motion.span>
                <motion.h2 variants={fadeUp} className="font-display text-5xl md:text-6xl text-tdm-dark">Popular picks</motion.h2>
              </div>
              <motion.div variants={fadeUp} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/menu"
                  className="bg-tdm-teal hover:bg-tdm-teal-dark text-white font-bold font-sans px-6 py-3 rounded-full text-sm whitespace-nowrap shadow-md block"
                >
                  Full Menu →
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex gap-5 overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={staggerSlow}
            >
              {popularItems.map((item) => (
                <motion.div
                  key={item.name}
                  variants={cardVariant}
                  whileHover={{
                    y: -8,
                    rotateY: 4,
                    rotateX: -3,
                    scale: 1.03,
                    transition: { type: "spring", stiffness: 280, damping: 18 },
                  }}
                  style={{ transformStyle: "preserve-3d", perspective: "800px" }}
                  className="rounded-3xl overflow-hidden min-w-[280px] max-w-[300px] flex-shrink-0 shadow-lg"
                >
                  <div className="relative h-48">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <span className={`absolute top-3 left-3 ${item.badgeBg} text-xs font-bold font-sans px-3 py-1.5 rounded-full shadow-md`}>
                      {item.badge}
                    </span>
                  </div>
                  <div className={`bg-gradient-to-br ${item.gradientFrom} ${item.gradientTo} p-5 text-white relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
                    <div className="relative">
                      <h3 className="font-display text-2xl mb-2 leading-tight">{item.name}</h3>
                      <p className="text-white/80 text-sm font-sans leading-relaxed mb-5">{item.desc}</p>
                      <a
                        href="https://tacodelmar.olo.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white/20 hover:bg-white/35 text-white font-bold font-sans px-5 py-2.5 rounded-full text-sm transition-colors"
                      >
                        Order Now →
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            DIETARY OPTIONS
        ═══════════════════════════════════════ */}
        <section className="bg-tdm-sand py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
            >
              <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl text-tdm-dark mb-4">Eating your way?</motion.h2>
              <motion.p variants={fadeUp} className="text-tdm-muted font-sans text-lg mb-10 max-w-2xl mx-auto">
                Every item is fully customizable to fit your lifestyle.
              </motion.p>
              <motion.div variants={stagger} className="flex flex-wrap justify-center gap-3">
                {dietBadges.map((d, i) => (
                  <motion.span
                    key={d.label}
                    variants={fadeUp}
                    whileHover={{ scale: 1.1, rotateZ: i % 2 === 0 ? -3 : 3, y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 14 }}
                    className={`${d.bg} border text-sm font-bold font-sans px-5 py-2.5 rounded-full cursor-default`}
                  >
                    {d.label}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            ORDER CTA
        ═══════════════════════════════════════ */}
        <section className="relative bg-tdm-orange py-28 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
          <div className="absolute inset-0 opacity-10 overflow-hidden">
            <img src={IMG.fishTacos2} alt="" className="w-full h-full object-cover" aria-hidden="true" />
          </div>

          <motion.div
            className="relative max-w-4xl mx-auto text-center z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={pop} className="inline-block bg-white/20 border border-white/30 text-white text-sm font-bold font-sans px-4 py-2 rounded-full mb-7">
              Ready in minutes
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-display text-6xl md:text-7xl text-white mb-6">Ready for tacos?</motion.h2>
            <motion.p variants={fadeUp} className="text-white/85 font-sans text-xl mb-10 max-w-xl mx-auto">
              Order online for pickup or delivery. Skip the wait — your Baja feast is just a click away.
            </motion.p>
            <motion.div variants={stagger} className="flex flex-wrap justify-center gap-4">
              <motion.a
                variants={fadeUp}
                href="https://tacodelmar.olo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-tdm-orange font-bold font-sans px-10 py-4 rounded-full text-xl shadow-2xl block"
                whileHover={{ scale: 1.07, rotateZ: -1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 280, damping: 15 }}
              >
                Order Online Now
              </motion.a>
              <motion.div
                variants={fadeUp}
                whileHover={{ scale: 1.07, rotateZ: 1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 280, damping: 15 }}
              >
                <Link
                  href="/menu"
                  className="bg-white/20 border-2 border-white text-white font-bold font-sans px-10 py-4 rounded-full text-xl block"
                >
                  Browse Menu
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════
            REWARDS
        ═══════════════════════════════════════ */}
        <section className="bg-tdm-yellow py-24 px-4" style={{ perspective: "1000px" }}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={stagger}
              >
                <motion.span variants={fadeLeft} className="inline-block bg-tdm-dark text-white text-xs font-bold font-sans uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  Loyalty Program
                </motion.span>
                <motion.h2 variants={fadeLeft} className="font-display text-5xl md:text-6xl text-tdm-dark mb-6">
                  Rippin&apos; Rewards
                </motion.h2>
                <motion.p variants={fadeLeft} className="text-tdm-charcoal font-sans text-lg leading-relaxed mb-8">
                  Earn points every time you order. Redeem them for free food. Get exclusive app-only deals and be the first to know about new menu items.
                </motion.p>
                <motion.ul variants={stagger} className="space-y-2 mb-8">
                  {rewardsBenefits.map((item) => (
                    <motion.li key={item} variants={fadeLeft} className="text-tdm-charcoal font-sans flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-tdm-teal flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.a
                  variants={fadeLeft}
                  href="https://tacodelmar.com/rippinrewards/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-tdm-dark text-white font-bold font-sans px-8 py-4 rounded-full shadow-lg"
                  whileHover={{ scale: 1.06, rotateZ: -1 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 280, damping: 15 }}
                >
                  Get Hooked Up!
                </motion.a>
              </motion.div>

              <motion.div
                className="relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeRight}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className="rounded-3xl overflow-hidden shadow-2xl"
                  whileHover={{ rotateY: -6, rotateX: 3, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <img
                    src={IMG.rewards}
                    alt="Rippin' Rewards loyalty app"
                    className="w-full object-cover"
                  />
                </motion.div>
                <motion.div
                  className="absolute -top-4 -left-4 bg-tdm-dark text-white rounded-2xl px-4 py-3 shadow-xl font-sans text-sm font-bold"
                  initial={{ opacity: 0, x: -20, rotate: -6 }}
                  whileInView={{ opacity: 1, x: 0, rotate: -3 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 16 }}
                  whileHover={{ rotate: 0, scale: 1.05 }}
                >
                  Earn on every order
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            CATERING
        ═══════════════════════════════════════ */}
        <section className="bg-tdm-cream py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="bg-gradient-to-r from-tdm-teal to-tdm-teal-dark rounded-3xl overflow-hidden relative shadow-xl"
              initial={{ opacity: 0, y: 60, rotateX: 8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
            >
              <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
              <div className="grid grid-cols-1 md:grid-cols-5 items-center">
                <motion.div
                  className="md:col-span-3 p-10 md:p-14 relative z-10"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={stagger}
                >
                  <motion.span variants={fadeUp} className="inline-block bg-tdm-yellow text-tdm-dark text-xs font-bold font-sans uppercase tracking-widest px-4 py-2 rounded-full mb-4">
                    Catering
                  </motion.span>
                  <motion.h2 variants={fadeUp} className="font-display text-4xl md:text-5xl text-white mb-3">Feed the crew!</motion.h2>
                  <motion.p variants={fadeUp} className="text-white/80 font-sans text-lg max-w-md mb-8">
                    Meal kits for 4–8 people, full catering packages, and Build-Your-Own Taco Bars. Perfect for any event.
                  </motion.p>
                  <motion.div variants={stagger} className="flex flex-col sm:flex-row gap-3">
                    <motion.a
                      variants={fadeUp}
                      href="https://tacodelmar.com/catering/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-tdm-teal font-bold font-sans px-7 py-3 rounded-full text-center shadow-lg"
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Catering Info →
                    </motion.a>
                    <motion.a
                      variants={fadeUp}
                      href="https://tacodelmar.olo.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-tdm-orange text-white font-bold font-sans px-7 py-3 rounded-full text-center"
                      whileHover={{ scale: 1.06 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Order Meal Kits
                    </motion.a>
                  </motion.div>
                </motion.div>
                <div className="md:col-span-2 flex gap-2 p-4 md:pr-6">
                  <motion.img
                    src={IMG.catering}
                    alt="Catering mexican food"
                    className="w-1/2 rounded-2xl object-cover h-48 md:h-64 shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    whileHover={{ scale: 1.04, rotateZ: -1 }}
                  />
                  <motion.img
                    src={IMG.mealKits}
                    alt="Meal kits"
                    className="w-1/2 rounded-2xl object-cover h-48 md:h-64 shadow-lg mt-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35, duration: 0.6 }}
                    whileHover={{ scale: 1.04, rotateZ: 1 }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            FIND A LOCATION
        ═══════════════════════════════════════ */}
        <section className="bg-tdm-sand py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
            >
              <motion.h2 variants={fadeUp} className="font-display text-5xl md:text-6xl text-tdm-dark mb-4">
                Find Your<br />Taco Del Mar
              </motion.h2>
              <motion.p variants={fadeUp} className="text-tdm-muted font-sans text-lg mb-10">
                We&apos;re closer than you think. Find the nearest location and get your Baja fix today.
              </motion.p>
              <motion.div
                variants={fadeUp}
                className="bg-white rounded-3xl shadow-lg p-8 max-w-xl mx-auto"
                whileHover={{ y: -4, boxShadow: "0 24px 50px rgba(0,0,0,0.12)" }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
              >
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Enter city or zip code…"
                    className="flex-1 border-2 border-tdm-teal/30 rounded-full px-5 py-3 font-sans text-tdm-dark placeholder:text-gray-400 transition-colors"
                  />
                  <motion.a
                    href="https://tacodelmar.com/locations/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-tdm-teal hover:bg-tdm-teal-dark text-white font-bold font-sans px-6 py-3 rounded-full whitespace-nowrap shadow-md"
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.96 }}
                  >
                    Find It →
                  </motion.a>
                </div>
                <p className="text-tdm-muted text-sm font-sans mt-4">
                  Or{" "}
                  <a
                    href="https://tacodelmar.com/locations/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-tdm-teal font-bold hover:underline"
                  >
                    browse all locations
                  </a>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
