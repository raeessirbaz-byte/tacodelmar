import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

/* ── Shared SVG wave divider ── */
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

/* ── Data ── */
const categories = [
  {
    emoji: "🌮",
    name: "Tacos",
    desc: "Uno, dos, tres, más?",
    bg: "bg-tdm-orange",
    text: "text-white",
    id: "tacos",
  },
  {
    emoji: "🌯",
    name: "Burritos",
    desc: "Roll a Fat One!",
    bg: "bg-tdm-teal",
    text: "text-white",
    id: "burritos",
  },
  {
    emoji: "🥣",
    name: "Burrito Bowls",
    desc: "Pack a Bowl!",
    bg: "bg-tdm-yellow",
    text: "text-tdm-dark",
    id: "burrito-bowls",
  },
  {
    emoji: "🥗",
    name: "Taco Salads",
    desc: "Crispy baked shell",
    bg: "bg-tdm-green",
    text: "text-white",
    id: "taco-salads",
  },
  {
    emoji: "🧀",
    name: "Nachos",
    desc: "Loaded with flavor",
    bg: "bg-tdm-red",
    text: "text-white",
    id: "nachos",
  },
  {
    emoji: "🫔",
    name: "Enchiladas",
    desc: "Smothered in goodness",
    bg: "bg-tdm-teal-dark",
    text: "text-white",
    id: "enchiladas",
  },
  {
    emoji: "🫓",
    name: "Quesadillas",
    desc: "Grilled & golden",
    bg: "bg-amber-500",
    text: "text-white",
    id: "quesadillas",
  },
  {
    emoji: "🥤",
    name: "Drinks & Sides",
    desc: "Complete your meal",
    bg: "bg-purple-600",
    text: "text-white",
    id: "snacks",
  },
];

const popularItems = [
  {
    emoji: "🐟",
    name: "Rippin' Fish Taco",
    desc: "Crispy baked cod, cabbage, pico de gallo & Baja white sauce",
    badge: "🔥 Fan Fave",
    badgeBg: "bg-tdm-orange",
    sectionBg: "from-tdm-teal to-tdm-teal-dark",
  },
  {
    emoji: "🌯",
    name: "Mission Burrito",
    desc: "Rice, beans, coastal filling, cheese & pico de gallo",
    badge: "⭐ Most Popular",
    badgeBg: "bg-tdm-yellow text-tdm-dark",
    sectionBg: "from-tdm-orange to-tdm-orange-dark",
  },
  {
    emoji: "🥣",
    name: "Burrito Bowl",
    desc: "All the flavor, none of the tortilla — fully customizable",
    badge: "💪 Keto Friendly",
    badgeBg: "bg-tdm-green",
    sectionBg: "from-tdm-green to-emerald-800",
  },
  {
    emoji: "🧀",
    name: "Loaded Nachos",
    desc: "Chips, melted cheese, rice, beans, protein & your choice of salsa",
    badge: "🎉 Share it",
    badgeBg: "bg-tdm-red",
    sectionBg: "from-tdm-red to-rose-900",
  },
  {
    emoji: "🐓",
    name: "Chicken Tinga Taco",
    desc: "Slow-cooked with chilies & spices — gluten-free",
    badge: "✅ Gluten-Free",
    badgeBg: "bg-tdm-teal",
    sectionBg: "from-amber-500 to-orange-700",
  },
];

const dietBadges = [
  { label: "🥩 Keto", bg: "bg-red-100 text-red-700 border-red-200" },
  { label: "🌿 Vegetarian", bg: "bg-green-100 text-green-700 border-green-200" },
  { label: "🌱 Vegan", bg: "bg-emerald-100 text-emerald-700 border-emerald-200" },
  { label: "🪨 Paleo", bg: "bg-amber-100 text-amber-700 border-amber-200" },
  { label: "✅ Gluten-Free", bg: "bg-blue-100 text-blue-700 border-blue-200" },
  { label: "🥗 Low-Carb", bg: "bg-teal-100 text-teal-700 border-teal-200" },
  { label: "🌿 Plant-Based", bg: "bg-lime-100 text-lime-700 border-lime-200" },
];

const ingredientHighlights = [
  { emoji: "🐟", label: "Fresh Fish" },
  { emoji: "🐓", label: "Chicken Tinga" },
  { emoji: "🥑", label: "Guacamole" },
  { emoji: "🌶️", label: "3 Salsas" },
  { emoji: "🫘", label: "Beans & Rice" },
  { emoji: "🧀", label: "Cheese" },
];

const stats = [
  { num: "30+", label: "Years of flavor" },
  { num: "100%", label: "Fresh daily" },
  { num: "7", label: "Protein options" },
  { num: "∞", label: "Customizations" },
];

const rewardsBenefits = [
  "✅ Earn points on every order",
  "🎁 Redeem for free food",
  "📱 Exclusive app-only deals",
  "🔔 First to know about new items",
  "🌮 Daily specials — Get Hooked Up!",
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ═══════════════════════════════════════
            HERO
        ═══════════════════════════════════════ */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-tdm-teal pt-16">
          {/* Dot pattern overlay */}
          <div className="absolute inset-0 bg-dots pointer-events-none" />

          {/* Right-side color block */}
          <div
            className="absolute top-0 right-0 h-full w-1/2 bg-tdm-orange opacity-15"
            style={{ clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)" }}
          />

          {/* Floating food decorations */}
          <span
            className="absolute top-24 right-6 text-7xl md:text-9xl animate-float select-none pointer-events-none opacity-75"
            aria-hidden="true"
          >
            🌮
          </span>
          <span
            className="absolute bottom-36 right-1/4 text-4xl md:text-6xl animate-float-slow select-none pointer-events-none opacity-60"
            aria-hidden="true"
          >
            🌶️
          </span>
          <span
            className="absolute top-1/3 right-10 text-3xl md:text-5xl animate-float-delay select-none pointer-events-none opacity-50"
            aria-hidden="true"
          >
            🍋
          </span>
          <span
            className="absolute bottom-20 left-6 text-4xl animate-float-delay2 select-none pointer-events-none opacity-45"
            aria-hidden="true"
          >
            🌿
          </span>
          <span
            className="absolute top-36 left-1/4 text-2xl animate-float select-none pointer-events-none opacity-40"
            aria-hidden="true"
          >
            ⭐
          </span>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
            <div className="max-w-2xl">
              {/* New item badge */}
              <div className="inline-flex items-center gap-2 bg-tdm-yellow text-tdm-dark px-4 py-2 rounded-full text-sm font-bold font-sans mb-7 animate-pulse-badge shadow-md">
                🆕 NEW Rippin&apos; Fish — juicier &amp; crispier than ever!
              </div>

              <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl text-white leading-tight mb-6">
                Born on
                <br />
                <span className="text-tdm-yellow">the Beach.</span>
                <br />
                Live Baja!
              </h1>

              <p className="text-white/85 font-sans text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
                Fresh, delicious Mexican food made your way. Tacos, burritos,
                bowls and more — real coastal flavor in every bite.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://tacodelmar.olo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-tdm-orange hover:bg-tdm-orange-dark text-white font-bold font-sans px-8 py-4 rounded-full text-lg btn-pop shadow-2xl"
                >
                  Order Now 🌮
                </a>
                <Link
                  href="/menu"
                  className="bg-white/15 hover:bg-white/25 border-2 border-white/50 text-white font-bold font-sans px-8 py-4 rounded-full text-lg btn-pop backdrop-blur-sm"
                >
                  View Menu →
                </Link>
              </div>

              {/* Stats strip */}
              <div className="flex flex-wrap gap-8 mt-14">
                {stats.map((s) => (
                  <div key={s.num}>
                    <div className="font-display text-3xl text-tdm-yellow">
                      {s.num}
                    </div>
                    <div className="text-white/65 text-xs font-sans uppercase tracking-wider">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Torn bottom edge */}
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
                From tacos to bowls to loaded nachos — we&apos;ve got something
                for everyone. Build it your way.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/menu#${cat.id}`}
                  className={`${cat.bg} ${cat.text} rounded-3xl p-6 card-lift group cursor-pointer block`}
                >
                  <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                    {cat.emoji}
                  </div>
                  <h3 className="font-display text-xl mb-1">{cat.name}</h3>
                  <p
                    className={`text-sm font-sans mb-4 ${
                      cat.text === "text-white" ? "opacity-75" : "opacity-65"
                    }`}
                  >
                    {cat.desc}
                  </p>
                  <div className="text-sm font-bold opacity-90 group-hover:translate-x-1 transition-transform duration-200">
                    View items →
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
          {/* Top torn edge */}
          <div className="absolute top-0 left-0 right-0 z-10 rotate-180">
            <WaveDivider fill="#FFFDF5" />
          </div>

          <div className="absolute inset-0 bg-dots pointer-events-none" />

          <div className="relative max-w-7xl mx-auto z-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              {/* Text */}
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
                  your neighborhood. Fresh ingredients, bold coastal flavors,
                  and made-your-way customization — that&apos;s the Taco Del Mar
                  way.
                </p>
                <p className="text-white/75 font-sans text-base leading-relaxed mb-8">
                  Keto? Vegan? Gluten-free? Paleo? We&apos;ve got you covered. Every
                  item is fully customizable with your choice of protein, salsa,
                  and toppings.
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "🌊 Beach-Inspired",
                    "🌿 Fresh Daily",
                    "💚 Made Your Way",
                    "🌶️ Bold Flavor",
                  ].map((badge) => (
                    <span
                      key={badge}
                      className="bg-white/15 border border-white/30 text-white text-sm font-bold font-sans px-4 py-2 rounded-full"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visual panel */}
              <div className="relative">
                <div className="bg-tdm-teal-dark rounded-3xl p-8 overflow-hidden relative shadow-2xl">
                  <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
                  <div className="relative text-center">
                    <div className="text-8xl mb-6 animate-float inline-block">
                      🌮
                    </div>
                    <p className="font-display text-2xl text-white mb-6">
                      Choice Ingredients
                    </p>
                    <div className="grid grid-cols-3 gap-3">
                      {ingredientHighlights.map((item) => (
                        <div
                          key={item.label}
                          className="bg-white/10 hover:bg-white/20 rounded-2xl p-3 text-center transition-colors"
                        >
                          <div className="text-2xl mb-1">{item.emoji}</div>
                          <div className="text-white/80 text-xs font-sans font-semibold">
                            {item.label}
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-white/60 text-xs font-sans mt-5">
                      + Guac, Queso, Pico de Gallo &amp; more
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom torn edge */}
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
                <h2 className="font-display text-5xl md:text-6xl text-tdm-dark">
                  Popular picks
                </h2>
              </div>
              <Link
                href="/menu"
                className="bg-tdm-teal hover:bg-tdm-teal-dark text-white font-bold font-sans px-6 py-3 rounded-full btn-pop text-sm whitespace-nowrap shadow-md"
              >
                Full Menu →
              </Link>
            </div>

            {/* Horizontal scroll */}
            <div className="flex gap-5 overflow-x-auto hide-scrollbar pb-4 -mx-4 px-4">
              {popularItems.map((item) => (
                <div
                  key={item.name}
                  className={`bg-gradient-to-br ${item.sectionBg} rounded-3xl p-6 min-w-[268px] max-w-[290px] flex-shrink-0 card-lift text-white relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
                  <div className="relative flex flex-col h-full">
                    <span
                      className={`inline-block ${item.badgeBg} text-xs font-bold font-sans px-3 py-1.5 rounded-full mb-5 self-start`}
                    >
                      {item.badge}
                    </span>
                    <div className="text-7xl mb-4 animate-float inline-block">
                      {item.emoji}
                    </div>
                    <h3 className="font-display text-2xl mb-2">{item.name}</h3>
                    <p className="text-white/80 text-sm font-sans leading-relaxed mb-6 flex-1">
                      {item.desc}
                    </p>
                    <a
                      href="https://tacodelmar.olo.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-white/20 hover:bg-white/35 text-white font-bold font-sans px-5 py-2.5 rounded-full text-sm transition-colors self-start"
                    >
                      Order Now →
                    </a>
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
            <h2 className="font-display text-4xl md:text-5xl text-tdm-dark mb-4">
              Eating your way?
            </h2>
            <p className="text-tdm-muted font-sans text-lg mb-10 max-w-2xl mx-auto">
              Every item is fully customizable to fit your lifestyle. We make
              eating well easy and delicious.
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
          <span
            className="absolute -right-10 top-1/2 -translate-y-1/2 text-[220px] opacity-15 select-none pointer-events-none"
            aria-hidden="true"
          >
            🌮
          </span>
          <span
            className="absolute -left-10 top-1/2 -translate-y-1/2 text-[160px] opacity-15 select-none pointer-events-none -rotate-12"
            aria-hidden="true"
          >
            🌯
          </span>

          <div className="relative max-w-4xl mx-auto text-center z-10">
            <div className="inline-block bg-white/20 border border-white/30 text-white text-sm font-bold font-sans px-4 py-2 rounded-full mb-7">
              🔥 Ready in minutes
            </div>
            <h2 className="font-display text-6xl md:text-7xl text-white mb-6">
              Ready for tacos?
            </h2>
            <p className="text-white/85 font-sans text-xl mb-10 max-w-xl mx-auto">
              Order online for pickup or delivery. Skip the wait — your Baja
              feast is just a click away.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://tacodelmar.olo.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-tdm-orange font-bold font-sans px-10 py-4 rounded-full text-xl btn-pop shadow-2xl"
              >
                Order Online Now 🌮
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
                  Rippin&apos;
                  <br />
                  Rewards 🏄
                </h2>
                <p className="text-tdm-charcoal font-sans text-lg leading-relaxed mb-8">
                  Earn points every time you order. Redeem them for free food.
                  Get exclusive app-only deals and be the first to know about
                  new menu items.
                </p>
                <a
                  href="https://tacodelmar.com/rippinrewards/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-tdm-dark text-white font-bold font-sans px-8 py-4 rounded-full btn-pop shadow-lg"
                >
                  Get Hooked Up! 🎉
                </a>
              </div>

              <div className="bg-tdm-dark rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-dots opacity-10 pointer-events-none" />
                <div className="relative">
                  <div className="text-6xl mb-5">🏆</div>
                  <h3 className="font-display text-3xl mb-5">
                    Earn. Redeem. Repeat.
                  </h3>
                  <ul className="space-y-3">
                    {rewardsBenefits.map((item) => (
                      <li key={item} className="text-white/80 font-sans">
                        {item}
                      </li>
                    ))}
                  </ul>
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
            <div className="bg-gradient-to-r from-tdm-teal to-tdm-teal-dark rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" />
              <span
                className="absolute -right-6 -top-6 text-[120px] opacity-20 select-none pointer-events-none"
                aria-hidden="true"
              >
                🎉
              </span>
              <div className="relative z-10">
                <span className="inline-block bg-tdm-yellow text-tdm-dark text-xs font-bold font-sans uppercase tracking-widest px-4 py-2 rounded-full mb-4">
                  Catering
                </span>
                <h2 className="font-display text-4xl md:text-5xl text-white mb-3">
                  Feed the crew!
                </h2>
                <p className="text-white/80 font-sans text-lg max-w-md">
                  Meal kits for 4–8 people, full catering packages, and
                  Build-Your-Own Taco Bars. Perfect for any event.
                </p>
              </div>
              <div className="relative z-10 flex flex-col gap-3 flex-shrink-0">
                <a
                  href="https://tacodelmar.com/catering/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-tdm-teal font-bold font-sans px-8 py-4 rounded-full btn-pop text-center whitespace-nowrap shadow-lg"
                >
                  Catering Info →
                </a>
                <a
                  href="https://tacodelmar.olo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-tdm-orange text-white font-bold font-sans px-8 py-4 rounded-full btn-pop text-center whitespace-nowrap"
                >
                  Order Meal Kits 🌮
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            FIND A LOCATION
        ═══════════════════════════════════════ */}
        <section className="bg-tdm-sand py-24 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-5xl mb-5">📍</div>
            <h2 className="font-display text-5xl md:text-6xl text-tdm-dark mb-4">
              Find Your
              <br />
              Taco Del Mar
            </h2>
            <p className="text-tdm-muted font-sans text-lg mb-10">
              We&apos;re closer than you think. Find the nearest location and get
              your Baja fix today.
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
