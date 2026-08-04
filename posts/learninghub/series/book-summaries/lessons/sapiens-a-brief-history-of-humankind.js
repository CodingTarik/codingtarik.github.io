export default {
  "id": "sapiens-a-brief-history-of-humankind",
  "title": "Sapiens: A Brief History of Humankind – Yuval Noah Harari",
  "duration": "32 Min.",
  "description": "A sweeping 70,000-year epic of human evolution — exploring how Cognitive, Agricultural, and Scientific Revolutions enabled Sapiens to rule Planet Earth through shared myths.",
  "content": `
<div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900 p-8 sm:p-12 mb-10 shadow-2xl text-white border border-amber-500/20">

  <!-- Hero Animated SVG: The Tree of Human Revolutions -->
  <div class="absolute top-1/2 right-2 sm:right-10 -translate-y-1/2 opacity-30 hover:opacity-50 transition-opacity pointer-events-none w-72 h-72 sm:w-96 sm:h-96">
    <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <defs>
        <linearGradient id="grad-sapiens-core" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#d97706" stop-opacity="0.6"/>
        </linearGradient>
        <filter id="glow-gold" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <!-- Revolutions Timeline Rings -->
      <circle cx="150" cy="150" r="130" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="8 8" opacity="0.3">
        <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="25s" repeatCount="indefinite"/>
      </circle>
      <circle cx="150" cy="150" r="90" fill="none" stroke="#fbbf24" stroke-width="2" opacity="0.5"/>

      <!-- Core Globe Hub -->
      <g transform="translate(150,150)">
        <circle cx="0" cy="0" r="24" fill="url(#grad-sapiens-core)" filter="url(#glow-gold)"/>
        <path d="M-10 -10 Q0 -20 10 -10 Q20 0 10 10 Q0 20 -10 10 Q-20 0 -10 -10 Z" fill="none" stroke="#ffffff" stroke-width="1.5"/>
      </g>
    </svg>
  </div>

  <div class="relative z-10">
    <span class="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold tracking-widest uppercase mb-6 border border-amber-500/30">Book Summary · Anthropological History</span>
    <h1 class="text-4xl sm:text-5xl font-black mb-4 leading-tight tracking-tight text-white m-0 pb-0">Sapiens<br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-orange-400">A Brief History of Humankind</span></h1>
    <p class="text-xl sm:text-2xl text-amber-100/80 font-medium max-w-2xl mt-4 mb-8">by Yuval Noah Harari · Global Multi-Million Bestseller</p>
    <div class="flex flex-wrap gap-3">
      <span class="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-semibold text-white/80">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 1 3-3h7z"/></svg>
        3 Great Revolutions
      </span>
      <span class="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-semibold text-white/80">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        Inter-subjective Myths
      </span>
      <span class="inline-flex items-center gap-1.5 bg-amber-400/20 border border-amber-400/30 rounded-full px-3 py-1 text-xs font-semibold text-amber-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        70,000 Years of History
      </span>
    </div>
  </div>
</div>

<p class="text-xl sm:text-2xl text-text/90 font-medium mb-8 leading-relaxed max-w-4xl">
  70,000 years ago, Homo sapiens was an insignificant ape in East Africa. Today, we control the planet. Yuval Noah Harari reveals the secret of our dominance: Sapiens is the only animal capable of believing in **shared fictions** like money, nations, laws, and corporations.
</p>

<StatGrid>
  <Stat value="70,000 Yrs" label="Cognitive Rev" sub="Language mutation & shared fiction" color="amber" />
  <Stat value="12,000 Yrs" label="Agricultural Rev" sub="Wheat domestication & settlement" color="emerald" />
  <Stat value="500 Yrs" label="Scientific Rev" sub="Admitting ignorance & imperial growth" color="indigo" />
  <Stat value="150" label="Dunbar's Number" sub="Max natural human group size without myth" color="rose" />
</StatGrid>

<Tabs>
  <Tab title="🧠 The Superpower of Fiction">
    **Why Sapiens conquered the planet.**
    <br/><br/>
    Chimpanzees cannot organize groups larger than 50 because they rely on personal intimacy. Humans scale cooperation to millions of strangers through **Inter-subjective Constructs**:
    - **Money** — The most universal system of mutual trust ever invented.
    - **Nations & Laws** — Shared stories that exist only in our collective imagination (e.g., Peugeot, the US Constitution, Human Rights).
    - **Religions & Corporations** — Legal and spiritual entities that coordinate global resources.
  </Tab>
  <Tab title="📚 The 3 Revolutions">
    1. **Cognitive Revolution (70,000 BP):** Language allows us to talk about things that don't physically exist.
    2. **Agricultural Revolution (12,000 BP):** Wheat domesticates Sapiens, creating cities and luxury traps.
    3. **Scientific Revolution (500 BP):** The willingness to admit ignorance unlocks exponential technological power.
  </Tab>
</Tabs>

---

## <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-500">Part 1: The 3 Great Revolutions of Humankind</span>

<!-- SVG: 3 Revolutions Timeline -->
<div class="not-prose my-10 bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
    <div>
      <h4 class="text-lg font-black text-text mt-0 mb-2">The Arc of Human History</h4>
      <p class="text-sm text-text/70 mb-0">From foraging bands to global networks: each revolution fundamentally reshaped human biology, societal structure, and environmental impact.</p>
    </div>
    <svg viewBox="0 0 350 180" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <line x1="30" y1="90" x2="320" y2="90" stroke="#f59e0b" stroke-width="2"/>
      <g transform="translate(50,90)">
        <circle r="12" fill="#f59e0b"/>
        <text x="0" y="-20" text-anchor="middle" font-size="10" font-weight="bold" fill="currentColor">70k BP</text>
        <text x="0" y="30" text-anchor="middle" font-size="9" fill="currentColor" opacity="0.8">Cognitive</text>
      </g>
      <g transform="translate(175,90)">
        <circle r="12" fill="#10b981"/>
        <text x="0" y="-20" text-anchor="middle" font-size="10" font-weight="bold" fill="currentColor">12k BP</text>
        <text x="0" y="30" text-anchor="middle" font-size="9" fill="currentColor" opacity="0.8">Agricultural</text>
      </g>
      <g transform="translate(300,90)">
        <circle r="12" fill="#6366f1"/>
        <text x="0" y="-20" text-anchor="middle" font-size="10" font-weight="bold" fill="currentColor">500 BP</text>
        <text x="0" y="30" text-anchor="middle" font-size="9" fill="currentColor" opacity="0.8">Scientific</text>
      </g>
    </svg>
  </div>
</div>

### The Agricultural Trap: Did We Domesticate Wheat, or Did Wheat Domesticate Us?
Harari provocatively argues that the Agricultural Revolution was **history's biggest fraud**. Foragers enjoyed varied diets, worked fewer hours, and suffered less disease. Wheat required hard backbreaking labor, caused arthritis, and created permanent vulnerability to famines.

---

## 🎯 7-Day Sapiens Perspective Challenge

<div class="not-prose grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 my-8">
  <div class="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-text">
    <div class="text-xs font-black uppercase text-amber-400">Day 1 & 2</div>
    <div class="font-bold text-sm mt-1">Audit Your Shared Myths</div>
    <div class="text-xs text-text/70 mt-1">Identify 3 inter-subjective constructs (money, brands, titles) you rely on daily.</div>
  </div>
  <div class="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-text">
    <div class="text-xs font-black uppercase text-emerald-400">Day 3 & 4</div>
    <div class="font-bold text-sm mt-1">Luxury Trap Check</div>
    <div class="text-xs text-text/70 mt-1">Spot one modern "convenience" that actually added labor to your life.</div>
  </div>
  <div class="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-text">
    <div class="text-xs font-black uppercase text-indigo-400">Day 5 & 6</div>
    <div class="font-bold text-sm mt-1">Admit Ignorance Protocol</div>
    <div class="text-xs text-text/70 mt-1">Say "I don't know" openly in a meeting and seek empirical truth.</div>
  </div>
  <div class="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-text">
    <div class="text-xs font-black uppercase text-rose-400">Day 7</div>
    <div class="font-bold text-sm mt-1">Dunbar Radius Audit</div>
    <div class="text-xs text-text/70 mt-1">Map out your true ~150 personal relationships vs digital connections.</div>
  </div>
</div>

---

## 🎯 Active Recall Quiz

<div class="bg-gradient-to-br from-slate-900 to-amber-950 p-8 rounded-3xl shadow-2xl border border-white/10 my-10 text-white not-prose space-y-4">
  <details class="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors">
    <summary class="flex items-center font-bold p-5 cursor-pointer text-white list-none [&::-webkit-details-marker]:hidden">
      What unique cognitive ability allowed Sapiens to out-compete other human species?
    </summary>
    <div class="p-5 pt-0 pl-14 text-sm text-amber-100/90 border-l-2 border-amber-400">
      The ability to communicate about abstract, non-existent things — creating shared myths (religions, laws, money, corporations) that enable mass cooperation among strangers.
    </div>
  </details>
</div>

---

<Quote author="Yuval Noah Harari" source="Sapiens">
  "You could never convince a monkey to give you a banana by promising him limitless bananas after death in monkey heaven."
</Quote>

<YouTube videoId="nzj7Wg4DAbs" />
`
};
