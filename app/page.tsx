/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

/* ── Images ── */
const IMG = {
  heroSlider:
    "https://i0.wp.com/tacodelmar.com/wp-content/uploads/2024/04/TDM-Fish-HOMEPAGE-SLIDER-1200x900-1023.png?fit=1200%2C900&ssl=1",
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
  { name: "Tacos",        desc: "Uno, dos, tres, más?",    id: "tacos",        img: IMG.tacos,       tint: "bg-tdm-orange/40" },
  { name: "Burritos",     desc: "Roll a Fat One!",         id: "burritos",     img: IMG.burrito,     tint: "bg-tdm-teal/40" },
  { name: "Burrito Bowls",desc: "Pack a Bowl!",            id: "burrito-bowls",img: IMG.bowl,        tint: "bg-yellow-600/40" },
  { name: "Taco Salads",  desc: "Crispy baked shell",      id: "taco-salads",  img: IMG.salad,       tint: "bg-tdm-green/40" },
  { name: "Nachos",       desc: "Loaded with flavor",      id: "nachos",       img: IMG.nachos,      tint: "bg-tdm-red/40" },
  { name: "Enchiladas",   desc: "Smothered in goodness",   id: "enchiladas",   img: IMG.enchiladas,  tint: "bg-tdm-teal-dark/40" },
  { name: "Quesadillas",  desc: "Grilled & golden",        id: "quesadillas",  img: IMG.quesadilla,  tint: "bg-amber-600/40" },
  { name: "Snacks & Sides",desc:"Little bites, big flavor",id: "snacks",       img: IMG.snack,       tint: "bg-purple-700/40" },
];

const popularItems = [
  {
    name: "Rippin' Fish Taco",
    desc: "Crispy baked cod, cabbage, pico de gallo & Baja white sauce",
    badge: "Fan Favorite",
    badgeBg: "bg-tdm-orange",
    img: IMG.tacos,
    gradientFrom: "from-tdm-teal",
    gradientTo: "to-tdm-teal-dark",
  },
  {
    name: "Mission Burrito",
    desc: "Rice, beans, coastal filling, cheese & pico de gallo",
    badge: "Most Popular",
    badgeBg: "bg-tdm-yellow text-tdm-dark",
    img: IMG.burrito,
    gradientFrom: "from-tdm-orange",
    gradientTo: "to-tdm-orange-dark",
  },
  {
    name: "Burrito Bowl",
    desc: "All the flavor, none of the tortilla — fully customizable",
    badge: "Keto Friendly",
    badgeBg: "bg-tdm-green",
    img: IMG.bowl,
    gradientFrom: "from-tdm-green",
    gradientTo: "to-emerald-800",
  },
  {
    name: "Loaded Nachos",
    desc: "Chips, melted cheese, rice, beans, protein & your choice of salsa",
    badge: "Great to Share",
    badgeBg: "bg-tdm-red",
    img: IMG.nachos,
    gradientFrom: "from-tdm-red",
    gradientTo: "to-rose-900",
  },
  {
    name: "Taco Salad",
    desc: "Crispy in-house baked shell loaded with rice, beans & toppings",
    badge: "Fresh & Crispy",
    badgeBg: "bg-tdm-green",
    img: IMG.salad,
    gradientFrom: "from-amber-500",
    gradientTo: "to-orange-700",
  },
];

const stats = [
  { num: "30+", label: "Years of flavor" },
  { num: "100%", label: "Fresh daily" },
  { num: "7", label: "Protein options" },
  { num: "Endless", label: "Customizations" },
];

const storyBadges = [
  "Beach-Inspired",
  "Fresh Daily",
  "Made Your Way",
  "Bold Flavor",
];

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
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ═══════════════════════════════════════
            HERO
        ═══════════════════════════════════════ */}
        <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
          {/* Edge-to-edge background photo */}
          <img
            src={IMG.heroSlider}
            alt="Taco Del Mar fish taco"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark teal overlay for readability */}
          <div className="absolute inset-0 bg-tdm-teal/70" />
          <div className="absolute inset-0 bg-dots pointer-events-none" />

          {/* Center-aligned content */}
          <div className="relative w-full z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 py-24">
            <div className="inline-flex items-center gap-2 bg-tdm-yellow text-tdm-dark px-4 py-2 rounded-full text-sm font-bold font-sans mb-7 shadow-md">
              NEW — Rippin&apos; Fish: juicier &amp; crispier than ever!
            </div>
            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl text-white leading-tight mb-6">
              Born on{" "}
              <span className="text-tdm-yellow">the Beach.</span>
              <br />
              Live Baja!
            </h1>
            <p className="text-white/85 font-sans text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              Fresh, delicious Mexican food made your way. Tacos, burritos,
              bowls and more — real coastal flavor in every bite.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://tacodelmar.olo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-tdm-orange hover:bg-tdm-orange-dark text-white font-bold font-sans px-8 py-4 rounded-full text-lg btn-pop shadow-2xl"
              >
                Order Now
              </a>
              <Link
                href="/menu"
                className="bg-white/15 hover:bg-white/25 border-2 border-white/50 text-white font-bold font-sans px-8 py-4 rounded-full text-lg btn-pop backdrop-blur-sm"
              >
                View Menu →
              </Link>
            </div>

            {/* Stats strip */}
            <div className="flex flex-wrap justify-center gap-10 mt-16">
              {stats.map((s) => (
                <div key={s.num} className="text-center">
                  <div className="font-display text-3xl text-tdm-yellow">{s.num}</div>
                  <div className="text-white/65 text-xs font-sans uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Made Fresh badge */}
            <div className="absolute top-24 right-8 sm:right-16 bg-tdm-yellow text-tdm-dark rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-xl text-center">
              <span className="font-display text-sm leading-tight px-2">Made Fresh!</span>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-10">
            <WaveDivider fill="#FFFDF5" />
          </div>
        </section>

        {/* ═══════════════════════════════════════
            CATEGORIES
        ═══════════════════════════════════════ */}
        <section className="bg-tdm-cream py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block bg-tdm-teal text-white text-xs font-bold font-sans uppercase tracking-widest px-4 py-2 rounded-full mb-5">
                The Menu
              </span>
              <h2 className="font-display text-5xl md:text-6xl text-tdm-dark mb-4">
                What are you feeling?
              </h2>
              <p className="text-tdm-muted font-sans text-lg max-w-2xl mx-auto">
                From tacos to bowls to loaded nachos — build it your way with
                your choice of coastal filling.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/menu#${cat.id}`}
                  className="relative rounded-3xl overflow-hidden h-52 sm:h-56 card-lift group block"
                >
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                  <div className={`absolute inset-0 ${cat.tint}`} />
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="font-display text-xl leading-tight">{cat.name}</h3>
                    <p className="text-white/75 text-xs font-sans mt-0.5">{cat.desc}</p>
                  </div>
                  <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white font-bold text-sm">
                    →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            BRAND STORY
        ═══════════════════════════════════════ */}
        <section className="relative bg-tdm-teal py-28 px-4 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 z-10 rotate-180">
            <WaveDivider fill="#FFFDF5" />
          </div>
          <div className="absolute inset-0 bg-dots pointer-events-none" />

          <div className="relative max-w-7xl mx-auto z-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div>
                <span className="inline-block bg-tdm-yellow text-tdm-dark text-xs font-bold font-sans uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  Our Story
                </span>
                <h2 className="font-display text-5xl md:text-6xl text-white mb-7">
                  Escape to{" "}
                  <span className="text-tdm-yellow">Baja.</span>
                </h2>
                <p className="text-white/80 font-sans text-lg leading-relaxed mb-5">
                  We brought the laid-back vibes of Baja California straight to
                  your neighborhood. Fresh ingredients, bold coastal flavors, and
                  made-your-way customization — that&apos;s the Taco Del Mar way.
                </p>
                <p className="text-white/75 font-sans text-base leading-relaxed mb-8">
                  Keto? Vegan? Gluten-free? Paleo? Every item is fully
                  customizable with your choice of protein, salsa, and toppings.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {storyBadges.map((badge) => (
                    <span
                      key={badge}
                      className="bg-white/15 border border-white/30 text-white text-sm font-bold font-sans px-4 py-2 rounded-full"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <a
                  href="https://tacodelmar.com/story/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-tdm-yellow text-tdm-dark font-bold font-sans px-7 py-3 rounded-full btn-pop shadow-lg"
                >
                  Read Our Story →
                </a>
              </div>

              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/20">
                  <img
                    src={IMG.story}
                    alt="Taco Del Mar — Baja beach vibes"
                    className="w-full h-[420px] object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tdm-teal-dark/50 to-transparent" />
                  <div className="absolute bottom-5 left-5 text-white">
                    <span className="font-display text-2xl drop-shadow-lg">Born on the Beach</span>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl overflow-hidden shadow-xl ring-2 ring-white/30 transform rotate-3">
                  <img
                    src={IMG.storyBlock}
                    alt="Surf board and beach lifestyle"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-10">
            <WaveDivider fill="#FFFDF5" />
          </div>
        </section>

        {/* ═══════════════════════════════════════
            POPULAR ITEMS
        ═══════════════════════════════════════ */}
        <section className="bg-tdm-cream py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 mb-12">
              <div>
                <span className="inline-block bg-tdm-orange text-white text-xs font-bold font-sans uppercase tracking-widest px-4 py-2 rounded-full mb-4">
                  Fan Favorites
                </span>
                <h2 className="font-display text-5xl md:text-6xl text-tdm-dark">Popular picks</h2>
              </div>
              <Link
                href="/menu"
                className="bg-tdm-teal hover:bg-tdm-teal-dark text-white font-bold font-sans px-6 py-3 rounded-full btn-pop text-sm whitespace-nowrap shadow-md"
              >
                Full Menu →
              </Link>
            </div>

            <div className="flex gap-5 overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4">
              {popularItems.map((item) => (
                <div
                  key={item.name}
                  className="rounded-3xl overflow-hidden min-w-[280px] max-w-[300px] flex-shrink-0 card-lift shadow-lg"
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            DIETARY OPTIONS
        ═══════════════════════════════════════ */}
        <section className="bg-tdm-sand py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl text-tdm-dark mb-4">Eating your way?</h2>
            <p className="text-tdm-muted font-sans text-lg mb-10 max-w-2xl mx-auto">
              Every item is fully customizable to fit your lifestyle.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {dietBadges.map((d) => (
                <span
                  key={d.label}
                  className={`${d.bg} border text-sm font-bold font-sans px-5 py-2.5 rounded-full`}
                >
                  {d.label}
                </span>
              ))}
            </div>
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

          <div className="relative max-w-4xl mx-auto text-center z-10">
            <div className="inline-block bg-white/20 border border-white/30 text-white text-sm font-bold font-sans px-4 py-2 rounded-full mb-7">
              Ready in minutes
            </div>
            <h2 className="font-display text-6xl md:text-7xl text-white mb-6">Ready for tacos?</h2>
            <p className="text-white/85 font-sans text-xl mb-10 max-w-xl mx-auto">
              Order online for pickup or delivery. Skip the wait — your Baja feast is just a click away.
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
              <Link
                href="/menu"
                className="bg-white/20 border-2 border-white text-white font-bold font-sans px-10 py-4 rounded-full text-xl btn-pop"
              >
                Browse Menu
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            REWARDS
        ═══════════════════════════════════════ */}
        <section className="bg-tdm-yellow py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-tdm-dark text-white text-xs font-bold font-sans uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  Loyalty Program
                </span>
                <h2 className="font-display text-5xl md:text-6xl text-tdm-dark mb-6">
                  Rippin&apos; Rewards
                </h2>
                <p className="text-tdm-charcoal font-sans text-lg leading-relaxed mb-8">
                  Earn points every time you order. Redeem them for free food. Get
                  exclusive app-only deals and be the first to know about new menu items.
                </p>
                <ul className="space-y-2 mb-8">
                  {rewardsBenefits.map((item) => (
                    <li key={item} className="text-tdm-charcoal font-sans flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-tdm-teal flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://tacodelmar.com/rippinrewards/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-tdm-dark text-white font-bold font-sans px-8 py-4 rounded-full btn-pop shadow-lg"
                >
                  Get Hooked Up!
                </a>
              </div>

              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={IMG.rewards}
                    alt="Rippin' Rewards loyalty app"
                    className="w-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -left-4 bg-tdm-dark text-white rounded-2xl px-4 py-3 shadow-xl font-sans text-sm font-bold">
                  Earn on every order
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            CATERING
        ═══════════════════════════════════════ */}
        <section className="bg-tdm-cream py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-tdm-teal to-tdm-teal-dark rounded-3xl overflow-hidden relative shadow-xl">
              <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
              <div className="grid grid-cols-1 md:grid-cols-5 items-center">
                <div className="md:col-span-3 p-10 md:p-14 relative z-10">
                  <span className="inline-block bg-tdm-yellow text-tdm-dark text-xs font-bold font-sans uppercase tracking-widest px-4 py-2 rounded-full mb-4">
                    Catering
                  </span>
                  <h2 className="font-display text-4xl md:text-5xl text-white mb-3">Feed the crew!</h2>
                  <p className="text-white/80 font-sans text-lg max-w-md mb-8">
                    Meal kits for 4–8 people, full catering packages, and Build-Your-Own
                    Taco Bars. Perfect for any event.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://tacodelmar.com/catering/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-tdm-teal font-bold font-sans px-7 py-3 rounded-full btn-pop text-center shadow-lg"
                    >
                      Catering Info →
                    </a>
                    <a
                      href="https://tacodelmar.olo.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-tdm-orange text-white font-bold font-sans px-7 py-3 rounded-full btn-pop text-center"
                    >
                      Order Meal Kits
                    </a>
                  </div>
                </div>
                <div className="md:col-span-2 flex gap-2 p-4 md:pr-6">
                  <img
                    src={IMG.catering}
                    alt="Catering mexican food"
                    className="w-1/2 rounded-2xl object-cover h-48 md:h-64 shadow-lg"
                  />
                  <img
                    src={IMG.mealKits}
                    alt="Meal kits"
                    className="w-1/2 rounded-2xl object-cover h-48 md:h-64 shadow-lg mt-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            FIND A LOCATION
        ═══════════════════════════════════════ */}
        <section className="bg-tdm-sand py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-5xl md:text-6xl text-tdm-dark mb-4">
              Find Your<br />Taco Del Mar
            </h2>
            <p className="text-tdm-muted font-sans text-lg mb-10">
              We&apos;re closer than you think. Find the nearest location and get your Baja fix today.
            </p>
            <div className="bg-white rounded-3xl shadow-lg p-8 max-w-xl mx-auto">
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Enter city or zip code…"
                  className="flex-1 border-2 border-tdm-teal/30 rounded-full px-5 py-3 font-sans text-tdm-dark placeholder:text-gray-400 transition-colors"
                />
                <a
                  href="https://tacodelmar.com/locations/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-tdm-teal hover:bg-tdm-teal-dark text-white font-bold font-sans px-6 py-3 rounded-full btn-pop whitespace-nowrap shadow-md"
                >
                  Find It →
                </a>
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
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
