export default {
  "id": "the-1-percent-method",
  "title": "The 1% Method: The Practical Habit System – James Clear",
  "duration": "27 Min.",
  "description": "The practical implementation playbook for compounding 1% daily improvements — featuring environment architecture, friction manipulation, and habit contract engineering.",
  "content": `
<div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 p-8 sm:p-12 mb-10 shadow-2xl text-white border border-teal-500/20">

  <!-- Hero Animated SVG: The 1% Habit Loop Blueprint -->
  <div class="absolute top-1/2 right-2 sm:right-10 -translate-y-1/2 opacity-30 hover:opacity-50 transition-opacity pointer-events-none w-72 h-72 sm:w-96 sm:h-96">
    <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <defs>
        <linearGradient id="grad-1pct-core" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#14b8a6" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#06b6d4" stop-opacity="0.6"/>
        </linearGradient>
        <filter id="glow-teal" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <!-- 4-Step Habit Loop Nodes -->
      <g transform="translate(150,150)">
        <circle cx="0" cy="0" r="110" fill="none" stroke="#14b8a6" stroke-width="2" stroke-dasharray="10 8">
          <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="20s" repeatCount="indefinite"/>
        </circle>
        <g font-size="10" font-weight="bold" text-anchor="middle">
          <g transform="translate(0,-110)"><circle r="16" fill="#14b8a6"/><text y="4" fill="#fff">Cue</text></g>
          <g transform="translate(110,0)"><circle r="16" fill="#0d9488"/><text y="4" fill="#fff">Craving</text></g>
          <g transform="translate(0,110)"><circle r="16" fill="#0f766e"/><text y="4" fill="#fff">Action</text></g>
          <g transform="translate(-110,0)"><circle r="16" fill="#115e59"/><text y="4" fill="#fff">Reward</text></g>
        </g>
      </g>

      <!-- Core Hub -->
      <g transform="translate(150,150)">
        <circle cx="0" cy="0" r="22" fill="url(#grad-1pct-core)" filter="url(#glow-teal)"/>
        <text x="0" y="5" text-anchor="middle" fill="#ffffff" font-weight="900" font-size="12">1%</text>
      </g>
    </svg>
  </div>

  <div class="relative z-10">
    <span class="inline-block py-1 px-3 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold tracking-widest uppercase mb-6 border border-teal-500/30">Book Summary · Applied Habit Systems</span>
    <h1 class="text-4xl sm:text-5xl font-black mb-4 leading-tight tracking-tight text-white m-0 pb-0">The 1% Method<br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-300">The Practical Implementation System</span></h1>
    <p class="text-xl sm:text-2xl text-teal-100/80 font-medium max-w-2xl mt-4 mb-8">by James Clear · German Edition Deep-Dive ("Die 1%-Methode")</p>
    <div class="flex flex-wrap gap-3">
      <span class="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-semibold text-white/80">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 1 3-3h7z"/></svg>
        Environment Architecture
      </span>
      <span class="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-semibold text-white/80">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        Friction Engineering
      </span>
      <span class="inline-flex items-center gap-1.5 bg-teal-400/20 border border-teal-400/30 rounded-full px-3 py-1 text-xs font-semibold text-teal-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        Field-Tested Protocols
      </span>
    </div>
  </div>
</div>

<p class="text-xl sm:text-2xl text-text/90 font-medium mb-8 leading-relaxed max-w-4xl">
  Motivation is overrated; environment design is what actually dictates human behavior. The 1% Method provides concrete tools for engineering your surroundings so that good choices become the path of least resistance.
</p>

<StatGrid>
  <Stat value="1%" label="Daily Improvement" sub="The power of small compounding steps" color="teal" />
  <Stat value="4 Steps" label="Habit Loop" sub="Cue, Craving, Response, Reward" color="emerald" />
  <Stat value="2 Steps" label="Friction Delta" sub="Removing 2 steps doubles execution" color="cyan" />
  <Stat value="100%" label="System Control" sub="Designing environment over willpower" color="indigo" />
</StatGrid>

<Tabs>
  <Tab title="🧠 Environment Mechanics">
    **Environment is the invisible hand shaping human behavior.**
    <br/><br/>
    We rarely choose our habits consciously; we react to environmental cues:
    - **Visual Prominence** — Humans are visual creatures; cues that are visible dominate action choices.
    - **Friction Engineering** — Increasing friction by just 2-3 extra steps (e.g., placing the TV remote inside a drawer in another room) dramatically lowers bad habit execution.
  </Tab>
  <Tab title="📚 Practical Implementation">
    Follow the **4-Part Blueprint**:
    1. **Cue Redesign:** Make good habit cues obvious; hide bad cues.
    2. **Craving Amplification:** Pair necessary tasks with immediate pleasures.
    3. **Friction Minimization:** Make initiating good actions take under 2 minutes.
    4. **Accountability Contracts:** Enforce external social penalties for breaking commitments.
  </Tab>
</Tabs>

---

## <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">Part 1: The 4-Step Habit Loop in Daily Practice</span>

<!-- SVG: Cue to Reward Flow -->
<div class="not-prose my-10 bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
    <div>
      <h4 class="text-lg font-black text-text mt-0 mb-2">The Friction Differential</h4>
      <p class="text-sm text-text/70 mb-0">Willpower fails when you are tired. Environment wins. By decreasing friction for good habits (0-1 steps) and increasing friction for bad habits (4+ steps), your default automatic choices transform instantly.</p>
    </div>
    <svg viewBox="0 0 350 180" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <g transform="translate(20,30)">
        <rect x="0" y="0" width="140" height="120" rx="16" fill="#10b981" fill-opacity="0.1" stroke="#10b981" stroke-width="1.5"/>
        <text x="70" y="30" text-anchor="middle" font-size="12" font-weight="bold" fill="#10b981">Low Friction (Good)</text>
        <text x="70" y="60" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.8">Gym bag at door</text>
        <text x="70" y="80" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.8">Instant execution!</text>
      </g>
      <g transform="translate(190,30)">
        <rect x="0" y="0" width="140" height="120" rx="16" fill="#ef4444" fill-opacity="0.1" stroke="#ef4444" stroke-width="1.5"/>
        <text x="70" y="30" text-anchor="middle" font-size="12" font-weight="bold" fill="#ef4444">High Friction (Bad)</text>
        <text x="70" y="60" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.8">Phone locked in drawer</text>
        <text x="70" y="80" text-anchor="middle" font-size="10" fill="currentColor" opacity="0.8">Distraction blocked!</text>
      </g>
    </svg>
  </div>
</div>

### Practical Rules for Environment Architecture
- **One Room, One Use:** Assign single primary functions to locations (e.g., bed is ONLY for sleep; desk is ONLY for deep work).
- **The Reset Rule:** At the end of every work session, reset the room so it is clean and ready for the next session's cue.

---

## 🎯 7-Day 1% Method Sprint

<div class="not-prose grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 my-8">
  <div class="p-4 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-text">
    <div class="text-xs font-black uppercase text-teal-400">Day 1 & 2</div>
    <div class="font-bold text-sm mt-1">Friction Audit</div>
    <div class="text-xs text-text/70 mt-1">Add 3 steps of friction to your biggest phone distraction.</div>
  </div>
  <div class="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-text">
    <div class="text-xs font-black uppercase text-emerald-400">Day 3 & 4</div>
    <div class="font-bold text-sm mt-1">Prime Your Environment</div>
    <div class="text-xs text-text/70 mt-1">Place cues for your top habit prominently on your desk.</div>
  </div>
  <div class="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-text">
    <div class="text-xs font-black uppercase text-cyan-400">Day 5 & 6</div>
    <div class="font-bold text-sm mt-1">2-Minute Gateway</div>
    <div class="text-xs text-text/70 mt-1">Execute your habit for exactly 2 minutes, then stop intentionally.</div>
  </div>
  <div class="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-text">
    <div class="text-xs font-black uppercase text-indigo-400">Day 7</div>
    <div class="font-bold text-sm mt-1">Accountability Contract</div>
    <div class="text-xs text-text/70 mt-1">Sign a 1-week habit pact with a colleague or partner.</div>
  </div>
</div>

---

## 🎯 Active Recall Quiz

<div class="bg-gradient-to-br from-slate-900 to-teal-950 p-8 rounded-3xl shadow-2xl border border-white/10 my-10 text-white not-prose space-y-4">
  <details class="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors">
    <summary class="flex items-center font-bold p-5 cursor-pointer text-white list-none [&::-webkit-details-marker]:hidden">
      Why is environment design superior to willpower?
    </summary>
    <div class="p-5 pt-0 pl-14 text-sm text-teal-100/90 border-l-2 border-teal-400">
      Willpower depletes under stress and fatigue; environment dictates automatic default choices effortlessly.
    </div>
  </details>
</div>

---

<Quote author="James Clear" source="Die 1%-Methode">
  "Be the architect of your environment, not the victim of it."
</Quote>

<YouTube videoId="U_bfMyxn8Zg" />
`
};
