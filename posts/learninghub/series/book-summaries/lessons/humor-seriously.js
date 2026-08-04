export default {
  "id": "humor-seriously",
  "title": "Humor, Seriously – Dr. Jennifer Aaker & Naomi Bagdonas",
  "duration": "25 Min.",
  "description": "Why humor is a secret weapon in business and life — master the 4 humor styles, the anatomy of levity, and how to build psychological safety without crossing boundaries.",
  "content": `
<div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900 p-8 sm:p-12 mb-10 shadow-2xl text-white border border-amber-500/20">

  <!-- Hero Animated SVG: The Levity Spark & Humor Spectrum -->
  <div class="absolute top-1/2 right-2 sm:right-10 -translate-y-1/2 opacity-30 hover:opacity-50 transition-opacity pointer-events-none w-72 h-72 sm:w-96 sm:h-96">
    <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <defs>
        <linearGradient id="grad-humor-core" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#ec4899" stop-opacity="0.6"/>
        </linearGradient>
        <filter id="glow-amber" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <!-- Pulsing Humor Waves -->
      <circle cx="150" cy="150" r="120" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="6 6" opacity="0.4">
        <animate attributeName="r" values="100;130;100" dur="5s" repeatCount="indefinite"/>
      </circle>

      <!-- Central Smiley Spark -->
      <g transform="translate(150,150)">
        <circle cx="0" cy="0" r="24" fill="url(#grad-humor-core)" filter="url(#glow-amber)"/>
        <path d="M-8 -4 A4 4 0 0 1 -4 -4 M4 -4 A4 4 0 0 1 8 -4 M-10 4 Q0 14 10 4" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
      </g>
    </svg>
  </div>

  <div class="relative z-10">
    <span class="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold tracking-widest uppercase mb-6 border border-amber-500/30">Book Summary · Organizational Behavior</span>
    <h1 class="text-4xl sm:text-5xl font-black mb-4 leading-tight tracking-tight text-white m-0 pb-0">Humor, Seriously<br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-300 to-fuchsia-300">Why Humor is a Secret Weapon in Business</span></h1>
    <p class="text-xl sm:text-2xl text-amber-100/80 font-medium max-w-2xl mt-4 mb-8">by Stanford Professors Jennifer Aaker & Naomi Bagdonas</p>
    <div class="flex flex-wrap gap-3">
      <span class="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-semibold text-white/80">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 1 3-3h7z"/></svg>
        4 Humor Styles
      </span>
      <span class="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-semibold text-white/80">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        The Age-23 Humor Cliff
      </span>
      <span class="inline-flex items-center gap-1.5 bg-amber-400/20 border border-amber-400/30 rounded-full px-3 py-1 text-xs font-semibold text-amber-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        Stanford Graduate School of Business
      </span>
    </div>
  </div>
</div>

<p class="text-xl sm:text-2xl text-text/90 font-medium mb-8 leading-relaxed max-w-4xl">
  At age 23, humans fall off a global "humor cliff" — we stop laughing and start taking everything deadly seriously. Stanford professors Aaker and Bagdonas show how levity unlocks trust, creativity, resilience, and leadership influence.
</p>

<StatGrid>
  <Stat value="Age 23" label="Humor Cliff" sub="Global drop-off in daily laughter" color="amber" />
  <Stat value="4 Styles" label="Humor Matrix" sub="Stand-up, Magnetizer, Sweetheart, Sniper" color="rose" />
  <Stat value="23%" label="Leadership Rating" sub="Increase in leader competence rating" color="emerald" />
  <Stat value="Dopamine" label="Neurochemistry" sub="Laughter drops cortisol & spikes oxytocin" color="indigo" />
</StatGrid>

<Tabs>
  <Tab title="🧠 The Humor Cliff Science">
    **Why we stop laughing when we enter the workforce.**
    <br/><br/>
    Surveys across 166 countries reveal that laughter frequency plummets around age 23:
    - 4-year-olds laugh up to **300 times a day**.
    - The average 40-year-old laughs just **4 times a day**.
    - **The Business Misconception:** People fear humor makes them look unprofessional. Research proves the opposite: leaders with a sense of humor are rated 27% more motivating and 23% more respected.
  </Tab>
  <Tab title="📚 How to Use This Summary">
    Follow the **3-Step Levity Framework**:
    1. **Identify Your Humor Style:** Stand-up, Magnetizer, Sweetheart, or Sniper.
    2. **Master the Humor Formula:** Truth + Misdirection / Contrast.
    3. **Enforce Safety Boundaries:** Never punch down; always punch up or at shared situations.
  </Tab>
</Tabs>

---

## <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-rose-500">Part 1: The 4 Humor Styles Matrix</span>

<!-- SVG: 4 Humor Styles Matrix -->
<div class="not-prose my-10 bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
    <div>
      <h4 class="text-lg font-black text-text mt-0 mb-2">The 4 Humor Styles</h4>
      <p class="text-sm text-text/70 mb-0">Every person uses humor differently based on two axes: Expressive vs. Subdued, and In-group/Warm vs. Bold/Aggressive. Know your style and honor others' styles.</p>
    </div>
    <svg viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <grid stroke="#94a3b8" stroke-width="1"/>
      <line x1="175" y1="20" x2="175" y2="180" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 4"/>
      <line x1="20" y1="100" x2="330" y2="100" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 4"/>
      
      <!-- Quadrants -->
      <g text-anchor="middle" font-size="11" font-weight="bold">
        <text x="95" y="60" fill="#f59e0b">Stand-Up</text>
        <text x="255" y="60" fill="#ec4899">Magnetizer</text>
        <text x="95" y="150" fill="#10b981">Sweetheart</text>
        <text x="255" y="150" fill="#6366f1">Sniper</text>
      </g>
    </svg>
  </div>
</div>

<Accordion title="1. The Stand-Up" badge="Expressive & Bold">
  Natural storytellers who use expressive, physical, and self-deprecating humor. Unafraid to cross boundaries for a big laugh, but must watch out for hurting feelings.
</Accordion>

<Accordion title="2. The Magnetizer" badge="Expressive & Warm">
  High-energy, contagious warmth, smiles easily, uses humor to unite rooms and lower social tension. High psychological safety.
</Accordion>

<Accordion title="3. The Sweetheart" badge="Subdued & Warm">
  Gentle, subtle, uplifting humor. Uses self-deprecation and quiet observational wit to make people feel safe.
</Accordion>

<Accordion title="4. The Sniper" badge="Subdued & Bold">
  Dry, sarcastic, unexpected deadpan one-liners. Highly effective when timed right, but risks coming across as biting if misunderstood.
</Accordion>

---

## 🎯 7-Day Levity Challenge

<div class="not-prose grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 my-8">
  <div class="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-text">
    <div class="text-xs font-black uppercase text-amber-400">Day 1 & 2</div>
    <div class="font-bold text-sm mt-1">Humor Audit</div>
    <div class="text-xs text-text/70 mt-1">Notice how many times you laugh today and identify your primary style.</div>
  </div>
  <div class="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-text">
    <div class="text-xs font-black uppercase text-rose-400">Day 3 & 4</div>
    <div class="font-bold text-sm mt-1">Email Levity PS</div>
    <div class="text-xs text-text/70 mt-1">Add a warm, humorous P.S. to 2 professional emails today.</div>
  </div>
  <div class="p-4 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/20 text-text">
    <div class="text-xs font-black uppercase text-fuchsia-400">Day 5 & 6</div>
    <div class="font-bold text-sm mt-1">Notice the Truth</div>
    <div class="text-xs text-text/70 mt-1">Find the funny absurd truth in a stressful situation at work.</div>
  </div>
  <div class="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-text">
    <div class="text-xs font-black uppercase text-indigo-400">Day 7</div>
    <div class="font-bold text-sm mt-1">Self-Deprecating Win</div>
    <div class="text-xs text-text/70 mt-1">Share a small harmless mistake you made to lower team tension.</div>
  </div>
</div>

---

## 🎯 Active Recall Quiz

<div class="bg-gradient-to-br from-slate-900 to-amber-950 p-8 rounded-3xl shadow-2xl border border-white/10 my-10 text-white not-prose space-y-4">
  <details class="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors">
    <summary class="flex items-center font-bold p-5 cursor-pointer text-white list-none [&::-webkit-details-marker]:hidden">
      What is the Humor Cliff?
    </summary>
    <div class="p-5 pt-0 pl-14 text-sm text-amber-100/90 border-l-2 border-amber-400">
      The dramatic worldwide drop in daily laughter around age 23 when people enter formal corporate careers.
    </div>
  </details>
</div>

---

<Quote author="Jennifer Aaker & Naomi Bagdonas" source="Humor, Seriously">
  "Levity isn't a distraction from serious work — it is the oil that keeps the engine running without burning out."
</Quote>

<YouTube videoId="41jN6r-5xR8" />
`
};
