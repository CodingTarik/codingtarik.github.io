export default {
  "id": "atomic-habits",
  "title": "Atomic Habits – James Clear",
  "duration": "30 Min.",
  "description": "The definitive framework for building tiny habits that compound into massive life transformations — featuring the 4 Laws of Behavior Change, environment design, and identity shifting.",
  "content": `
<div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 p-8 sm:p-12 mb-10 shadow-2xl text-white border border-emerald-500/20">

  <!-- Hero Animated SVG: The Compounding Flywheel -->
  <div class="absolute top-1/2 right-2 sm:right-10 -translate-y-1/2 opacity-30 hover:opacity-50 transition-opacity pointer-events-none w-72 h-72 sm:w-96 sm:h-96">
    <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <defs>
        <linearGradient id="grad-atomic-flywheel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#10b981" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#059669" stop-opacity="0.6"/>
        </linearGradient>
        <filter id="glow-atomic" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <!-- Compounding Spiral / Concentric Circles -->
      <circle cx="150" cy="150" r="125" fill="none" stroke="#10b981" stroke-width="1.5" stroke-dasharray="8 6" opacity="0.4">
        <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="30s" repeatCount="indefinite"/>
      </circle>
      <circle cx="150" cy="150" r="90" fill="none" stroke="#34d399" stroke-width="2" stroke-dasharray="12 12" opacity="0.6">
        <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="20s" repeatCount="indefinite"/>
      </circle>

      <!-- Exponential Growth Curve Path -->
      <path d="M 40 230 Q 150 230 250 50" fill="none" stroke="#fbbf24" stroke-width="3" filter="url(#glow-atomic)"/>
      <circle cx="250" cy="50" r="7" fill="#fbbf24" filter="url(#glow-atomic)">
        <animate attributeName="r" values="5;9;5" dur="2s" repeatCount="indefinite"/>
      </circle>

      <!-- Core Hub -->
      <g transform="translate(150,150)">
        <circle cx="0" cy="0" r="24" fill="url(#grad-atomic-flywheel)" filter="url(#glow-atomic)"/>
        <text x="0" y="5" text-anchor="middle" fill="#ffffff" font-weight="900" font-size="14">1%</text>
      </g>
    </svg>
  </div>

  <div class="relative z-10">
    <span class="inline-block py-1 px-3 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold tracking-widest uppercase mb-6 border border-emerald-500/30">Book Summary · Habit Architecture</span>
    <h1 class="text-4xl sm:text-5xl font-black mb-4 leading-tight tracking-tight text-white m-0 pb-0">Atomic Habits<br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">Tiny Changes, Remarkable Results</span></h1>
    <p class="text-xl sm:text-2xl text-emerald-100/80 font-medium max-w-2xl mt-4 mb-8">by James Clear · Over 15 Million Copies Sold Worldwide</p>
    <div class="flex flex-wrap gap-3">
      <span class="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-semibold text-white/80">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7z"/></svg>
        4 Laws of Behavior Change
      </span>
      <span class="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-semibold text-white/80">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        37.78x Yearly Compounding
      </span>
      <span class="inline-flex items-center gap-1.5 bg-amber-400/20 border border-amber-400/30 rounded-full px-3 py-1 text-xs font-semibold text-amber-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        #1 New York Times Bestseller
      </span>
    </div>
  </div>
</div>

<p class="text-xl sm:text-2xl text-text/90 font-medium mb-8 leading-relaxed max-w-4xl">
  You do not rise to the level of your goals — you fall to the level of your systems. James Clear presents a proven system for getting 1% better every day by mastering the 4 Laws of Behavior Change and designing an environment where good habits are inevitable.
</p>

<StatGrid>
  <Stat value="37.78x" label="Yearly Growth" sub="Improving 1% daily for 365 days" color="emerald" />
  <Stat value="4 Laws" label="Behavior Change" sub="Obvious, Attractive, Easy, Satisfying" color="indigo" />
  <Stat value="2 Min" label="Entry Rule" sub="Scale down any habit initiation" color="amber" />
  <Stat value="66 Days" label="Avg Formation" sub="Lally et al. habit automation window" color="rose" />
</StatGrid>

<Tabs>
  <Tab title="🧠 The Science Context">
    **Habits are brain shortcuts for energy optimization.**
    <br/><br/>
    The brain consumes roughly 20% of the body's energy while accounting for just 2% of body mass. To conserve energy, the **basal ganglia** automates repeated routines into neurological loops:
    - **Cue** → Triggers anticipation of reward.
    - **Craving** → Dopamine spikes *before* the action (anticipation).
    - **Response** → The action or thought executed.
    - **Reward** → Satisfies craving and reinforces the cue loop.
    <br/><br/>
    Understanding this neurological loop allows you to engineer any habit at will.
  </Tab>
  <Tab title="📚 How to Use This Summary">
    Apply the **System Over Goals Framework**:
    1. **Identity Shift** — Focus on *who* you want to become, not just *what* you want to achieve.
    2. **Environment Engineering** — Design your room, desk, and phone to make good cues obvious and bad cues invisible.
    3. **Habit Stacking** — Anchor new habits to existing automatic daily routines.
  </Tab>
  <Tab title="⚠️ The Latent Potential Trap">
> [!WARNING]
> **Habits do not yield linear results.** Work accumulates in what Clear calls the **Plateau of Latent Potential**. For weeks or months, you see no visible change — like ice heating from 26°F to 31°F. At 32°F, the ice melts. Don't quit during the plateau!
  </Tab>
  <Tab title="👤 Who This Is For">
    - 🏋️ **High Performers & Athletes** seeking compound gains in health and execution.
    - 📚 **Knowledge Workers & Builders** designing distraction-free focus routines.
    - 🔄 **Anyone** struggling to break procrastination, bad eating, or screen addiction.
  </Tab>
</Tabs>

---

<!-- Master Navigation Roadmap -->
<div class="my-10 not-prose">
  <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
    <div class="flex flex-col items-center text-center p-4 rounded-2xl bg-gradient-to-b from-emerald-500/10 to-transparent border border-emerald-500/20">
      <div class="w-10 h-10 rounded-full bg-emerald-500 text-white font-black text-lg flex items-center justify-center mb-2 shadow-lg shadow-emerald-500/30">1</div>
      <div class="font-bold text-sm text-text">1st Law: Obvious</div>
      <div class="text-xs text-text/60 mt-1">Cues & Implementation Intentions</div>
    </div>
    <div class="flex flex-col items-center text-center p-4 rounded-2xl bg-gradient-to-b from-teal-500/10 to-transparent border border-teal-500/20">
      <div class="w-10 h-10 rounded-full bg-teal-500 text-white font-black text-lg flex items-center justify-center mb-2 shadow-lg shadow-teal-500/30">2</div>
      <div class="font-bold text-sm text-text">2nd Law: Attractive</div>
      <div class="text-xs text-text/60 mt-1">Temptation Bundling & Social Norms</div>
    </div>
    <div class="flex flex-col items-center text-center p-4 rounded-2xl bg-gradient-to-b from-amber-500/10 to-transparent border border-amber-500/20">
      <div class="w-10 h-10 rounded-full bg-amber-500 text-white font-black text-lg flex items-center justify-center mb-2 shadow-lg shadow-amber-500/30">3</div>
      <div class="font-bold text-sm text-text">3rd Law: Easy</div>
      <div class="text-xs text-text/60 mt-1">Friction Reduction & 2-Minute Rule</div>
    </div>
    <div class="flex flex-col items-center text-center p-4 rounded-2xl bg-gradient-to-b from-indigo-500/10 to-transparent border border-indigo-500/20">
      <div class="w-10 h-10 rounded-full bg-indigo-500 text-white font-black text-lg flex items-center justify-center mb-2 shadow-lg shadow-indigo-500/30">4</div>
      <div class="font-bold text-sm text-text">4th Law: Satisfying</div>
      <div class="text-xs text-text/60 mt-1">Immediate Rewards & Habit Tracking</div>
    </div>
  </div>
</div>

---

## <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">Part 1: The Core Mechanics of Atomic Habits</span>

### The 1% Compounding Math
If you get 1% better each day for one year, you end up **37.78 times better** ($1.01^{365} = 37.78$). Conversely, if you get 1% worse each day, you decline down to nearly zero ($0.99^{365} = 0.03$).

<!-- SVG: Exponential Compounding vs Linear Fallacy -->
<div class="not-prose my-10 bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
    <div>
      <h4 class="text-lg font-black text-text mt-0 mb-2">The Plateau of Latent Potential</h4>
      <p class="text-sm text-text/70 mb-0">Most people expect linear progress. But habit benefits are delayed exponential curves. The gap between expectation and reality is the "Valley of Disappointment" where most people give up right before the breakthrough.</p>
    </div>
    <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <!-- Linear Expectation line -->
      <line x1="40" y1="180" x2="360" y2="40" stroke="#94a3b8" stroke-width="2" stroke-dasharray="5 5"/>
      <!-- Exponential Curve -->
      <path d="M 40 180 Q 220 180 360 20" stroke="#10b981" stroke-width="3.5" fill="none"/>
      <!-- Labels -->
      <text x="240" y="70" font-size="10" font-weight="bold" fill="#94a3b8">What you THINK should happen</text>
      <text x="260" y="150" font-size="10" font-weight="bold" fill="#10b981">What ACTUALLY happens</text>
      <!-- Valley of Disappointment -->
      <path d="M 180 130 L 180 170" stroke="#ef4444" stroke-width="1.5" marker-end="url(#arrow)"/>
      <text x="120" y="150" font-size="9" font-weight="bold" fill="#ef4444">Valley of Disappointment</text>
    </svg>
  </div>
</div>

### Identity-Based Habits: The 3 Layers of Change
1. **Outcome Change:** Focuses on what you get (e.g., losing 10 pounds).
2. **Process Change:** Focuses on what you do (e.g., running 3x a week).
3. **Identity Change:** Focuses on *who you believe you are* (e.g., "I am a runner").

> [!TIP]
> **Rule:** True habit change is identity change. Every action you take is a vote for the type of person you wish to become. Two votes don't change your identity, but 200 votes create indisputable proof.

---

## <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-amber-500">Part 2: The 4 Laws of Behavior Change</span>

\`\`\`mermaid
graph LR
    A[1. Cue: Make it Obvious] --> B[2. Craving: Make it Attractive]
    B --> C[3. Response: Make it Easy]
    C --> D[4. Reward: Make it Satisfying]
    D -->|Reinforces| A
    style A fill:#10b981,stroke:#fff,color:#fff
    style B fill:#14b8a6,stroke:#fff,color:#fff
    style C fill:#f59e0b,stroke:#fff,color:#fff
    style D fill:#6366f1,stroke:#fff,color:#fff
\`\`\`

### The 1st Law: Make It Obvious (Cue)
- **Implementation Intentions:** State explicitly: *"I will [BEHAVIOR] at [TIME] in [LOCATION]."* (e.g., *"I will meditate for 5 minutes at 7:00 AM in my living room."*)
- **Habit Stacking:** Anchor new routines onto established habits: *"After [CURRENT HABIT], I will [NEW HABIT]."*
- **Environment Design:** Make cues visual. If you want to drink more water, place filled water bottles in every room.

### The 2nd Law: Make It Attractive (Craving)
- **Temptation Bundling:** Pair an action you *need* to do with an action you *want* to do. (e.g., Only listen to your favorite podcast while riding the stationary bike).
- **Social Norms:** Join a culture where your desired behavior is the normal behavior.

### The 3rd Law: Make It Easy (Response)
- **Reduce Friction:** Decrease the number of steps between you and the good habit. Put workout clothes out the night before.
- **The 2-Minute Rule:** Scale down any habit so it takes two minutes or less to start. *"Read 30 books a year"* becomes *"Read one page."* Establish the habit of showing up first; optimize later.

### The 4th Law: Make It Satisfying (Reward)
- **Immediate Reinforcement:** What is immediately rewarded is repeated. What is immediately punished is avoided.
- **Don't Break the Chain:** Use a visual Habit Tracker (calendar checkmarks). If you miss one day, apply the golden rule: **Never miss twice.** Missing once is an accident; missing twice is the start of a new bad habit.

---

## 🎯 7-Day Habit Architecture Challenge

<div class="not-prose grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 my-8">
  <div class="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-text">
    <div class="text-xs font-black uppercase text-emerald-400">Day 1</div>
    <div class="font-bold text-sm mt-1">Habit Scorecard</div>
    <div class="text-xs text-text/70 mt-1">List every daily automatic action and label each as (+), (-), or (=).</div>
  </div>
  <div class="p-4 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-text">
    <div class="text-xs font-black uppercase text-teal-400">Day 2 & 3</div>
    <div class="font-bold text-sm mt-1">Habit Stack & 2-Min Rule</div>
    <div class="text-xs text-text/70 mt-1">Write 1 Implementation Intention scaled to under 2 minutes.</div>
  </div>
  <div class="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-text">
    <div class="text-xs font-black uppercase text-amber-400">Day 4 & 5</div>
    <div class="font-bold text-sm mt-1">Environment Audit</div>
    <div class="text-xs text-text/70 mt-1">Remove 1 negative cue and add 2 obvious positive visual cues.</div>
  </div>
  <div class="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-text">
    <div class="text-xs font-black uppercase text-indigo-400">Day 6 & 7</div>
    <div class="font-bold text-sm mt-1">Tracker & Never Miss Twice</div>
    <div class="text-xs text-text/70 mt-1">Set up a paper or digital tracker and commit to immediate satisfaction rewards.</div>
  </div>
</div>

---

## 🧘 Reflection: Five Questions for Personal Audit

> [!TIP]
> 1. What small action are you taking daily that is casting votes for an identity you don't want?
> 2. How can you redesign your desk or room so that your best habit requires zero willpower to initiate?
> 3. What is your current 2-Minute version of your most ambitious goal?
> 4. Are you stuck in the Valley of Disappointment? What evidence shows you are accumulating latent potential?
> 5. What habit contract or social accountability measure can you set up to enforce your 4th Law?

---

## 🎯 Active Recall Quiz

<div class="bg-gradient-to-br from-slate-900 to-emerald-950 p-8 rounded-3xl shadow-2xl border border-white/10 my-10 text-white not-prose space-y-4">
  <details class="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors">
    <summary class="flex items-center font-bold p-5 cursor-pointer text-white list-none [&::-webkit-details-marker]:hidden">
      What is the formula for an Implementation Intention?
    </summary>
    <div class="p-5 pt-0 pl-14 text-sm text-emerald-100/90 border-l-2 border-emerald-400">
      "I will [BEHAVIOR] at [TIME] in [LOCATION]."
    </div>
  </details>

  <details class="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors">
    <summary class="flex items-center font-bold p-5 cursor-pointer text-white list-none [&::-webkit-details-marker]:hidden">
      What are the 4 Laws of Behavior Change?
    </summary>
    <div class="p-5 pt-0 pl-14 text-sm text-emerald-100/90 border-l-2 border-emerald-400">
      1. Make it Obvious (Cue), 2. Make it Attractive (Craving), 3. Make it Easy (Response), 4. Make it Satisfying (Reward).
    </div>
  </details>

  <details class="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors">
    <summary class="flex items-center font-bold p-5 cursor-pointer text-white list-none [&::-webkit-details-marker]:hidden">
      What is the rule of "Never Miss Twice"?
    </summary>
    <div class="p-5 pt-0 pl-14 text-sm text-emerald-100/90 border-l-2 border-emerald-400">
      If you miss a habit execution one day due to unforeseen events, get back on track immediately the next day. Missing once is an accident; missing twice starts a bad habit.
    </div>
  </details>
</div>

---

<Quote author="James Clear" source="Atomic Habits">
  "You do not rise to the level of your goals. You fall to the level of your systems."
</Quote>

<YouTube videoId="U_bfMyxn8Zg" />
`
};
