export default {
  "id": "atomic-habits",
  "title": "Atomic Habits – James Clear",
  "duration": "35 Min.",
  "description": "The complete engineering manual for behavior change: the compounding curve, the identity pyramid, the Cue–Craving–Response–Reward loop, all 4 Laws with their 4 inversions, environment design, and the habit tracker — everything to build systems that make good habits inevitable.",
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

      <circle cx="150" cy="150" r="125" fill="none" stroke="#10b981" stroke-width="1.5" stroke-dasharray="8 6" opacity="0.4">
        <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="30s" repeatCount="indefinite"/>
      </circle>
      <circle cx="150" cy="150" r="90" fill="none" stroke="#34d399" stroke-width="2" stroke-dasharray="12 12" opacity="0.6">
        <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="20s" repeatCount="indefinite"/>
      </circle>

      <path d="M 40 230 Q 150 230 250 50" fill="none" stroke="#fbbf24" stroke-width="3" filter="url(#glow-atomic)"/>
      <circle cx="250" cy="50" r="7" fill="#fbbf24" filter="url(#glow-atomic)">
        <animate attributeName="r" values="5;9;5" dur="2s" repeatCount="indefinite"/>
      </circle>

      <g transform="translate(150,150)">
        <circle cx="0" cy="0" r="24" fill="url(#grad-atomic-flywheel)" filter="url(#glow-atomic)"/>
        <text x="0" y="5" text-anchor="middle" fill="#ffffff" font-weight="900" font-size="14">1%</text>
      </g>
    </svg>
  </div>

  <div class="relative z-10">
    <span class="inline-block py-1 px-3 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold tracking-widest uppercase mb-6 border border-emerald-500/30">Book Summary · Systems Engineering Edition</span>
    <h1 class="text-4xl sm:text-5xl font-black mb-4 leading-tight tracking-tight text-white m-0 pb-0">Atomic Habits<br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">An Easy & Proven Way to Build Good Habits</span></h1>
    <p class="text-xl sm:text-2xl text-emerald-100/80 font-medium max-w-2xl mt-4 mb-8">by James Clear · Over 15 Million Copies Sold</p>
    <div class="flex flex-wrap gap-3">
      <span class="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-semibold text-white/80">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7z"/></svg>
        The Habit Engineering Blueprint
      </span>
      <span class="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-semibold text-white/80">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        4 Laws + 4 Inversions
      </span>
      <span class="inline-flex items-center gap-1.5 bg-amber-400/20 border border-amber-400/30 rounded-full px-3 py-1 text-xs font-semibold text-amber-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        #1 NYT Bestseller
      </span>
    </div>
  </div>
</div>

<p class="text-xl sm:text-2xl text-text/90 font-medium mb-8 leading-relaxed max-w-4xl">
  <span class="text-primary font-bold">"You do not rise to the level of your goals — you fall to the level of your systems."</span> Success isn't about willpower or ambition; it's about designing a loop so small you can't fail, so automatic you don't think, and so reinforcing it compounds. This is the complete blueprint for engineering habits — and breaking the ones that own you.
</p>

<StatGrid>
  <Stat value="37.78x" label="Yearly Growth" sub="1% better × 365 days" color="emerald" />
  <Stat value="4 Laws" label="Behavior Change" sub="Obvious · Attractive · Easy · Satisfying" color="indigo" />
  <Stat value="2 Min" label="The Entry Rule" sub="Scale any habit down to start" color="amber" />
  <Stat value="66 Days" label="Avg. Formation" sub="Lally et al. (2010) median window" color="rose" />
</StatGrid>

<Tabs>
  <Tab title="🧠 The Science Context">
    **Habits are the brain's energy-saving mode.**
    <br/><br/>
    Your brain is roughly <b>2% of your body mass but burns ~20% of your energy</b>. It is ruthlessly lazy: whenever a behavior is repeated enough, the <b>basal ganglia</b> — the deep, automatic part of the brain — takes over from the effortful prefrontal cortex and encodes a loop.
    <br/><br/>
    Every habit is a four-stage neurological circuit:
    - **Cue** → a trigger that signals a reward is available
    - **Craving** → dopamine spikes *before* the action (anticipation)
    - **Response** → the action itself
    - **Reward** → satisfaction that strengthens the whole loop
    <br/><br/>
    Because the trigger (dopamine) fires on *anticipation*, the brain learns to crave the cue long before the outcome — which is why notifications are addictive and why framing a habit as rewarding matters so much.
  </Tab>
  <Tab title="📚 How to Use This Summary">
    Apply the **System Over Goals** lens in three moves:
    1. **Decide who you want to be** (identity), not just what you want (outcome).
    2. **Design the environment** so the right cue is obvious and the wrong one invisible.
    3. **Run all four laws** — a habit fails if any stage of the loop is broken.
    <br/><br/>
    Read one Law, apply it for a few days, then return. The summary ends with a 7-day build challenge and an active-retrieval quiz — don't skip them.
  </Tab>
  <Tab title="⚠️ The Latent Potential Trap">
    > [!WARNING]
    > **Habit effects are not linear — and this is where most people quit.** Results are delayed-exponential. Like ice warming from 26°F to 31°F: you see nothing, nothing, nothing — then at 32°F it melts. In the <b>Plateau of Latent Potential</b>, every invisible day is still compounding. The "Valley of Disappointment" between expectation and reality kills more habits than laziness ever does. Trust the math, not your mood.
  </Tab>
  <Tab title="👤 Who This Is For">
    - 🏋️ **Athletes & high performers** chasing compound health and execution gains
    - 📚 **Builders & knowledge workers** designing distraction-proof focus routines
    - 🔄 **Anyone** battling procrastination, poor eating, or screen addiction
    - 👨‍👩‍👧 **Parents & coaches** wanting to install good routines in others
    - 🧠 **Anyone** who's "tried discipline" and learned willpower is a terrible long-term strategy
  </Tab>
</Tabs>

---

## 📈 The Compounding Curve: Why You Feel Like You're Getting Nowhere

The single most important graph in the book — and the reason most people quit. Your expectation is a straight line; reality is an arc that stays flat for a dangerously long time before it takes off.

<!-- SVG: Compounding Curve with Valley of Disappointment -->
<div class="not-prose my-10 bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
  <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
    <div class="lg:col-span-3">
      <svg viewBox="0 0 520 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
        <defs>
          <linearGradient id="curveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#10b981"/>
            <stop offset="100%" stop-color="#f59e0b"/>
          </linearGradient>
        </defs>
        <!-- Axes -->
        <line x1="40" y1="260" x2="500" y2="260" stroke="currentColor" stroke-width="2" opacity="0.25"/>
        <line x1="40" y1="260" x2="40" y2="30" stroke="currentColor" stroke-width="2" opacity="0.25"/>
        <text x="270" y="285" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor" opacity="0.6">TIME</text>
        <text x="20" y="150" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor" opacity="0.6" transform="rotate(-90 20 150)">PROGRESS</text>

        <!-- Linear expectation -->
        <line x1="40" y1="230" x2="480" y2="60" stroke="#94a3b8" stroke-width="2.5" stroke-dasharray="6 5"/>
        <text x="470" y="40" text-anchor="end" font-size="10" font-weight="700" fill="#94a3b8">EXPECTATION</text>

        <!-- Real exponential curve -->
        <path d="M40 240 C 150 240 250 232 300 200 C 360 155 430 110 485 45" fill="none" stroke="url(#curveGrad)" stroke-width="4" stroke-linecap="round"/>
        <text x="360" y="120" font-size="10" font-weight="700" fill="#10b981">REALITY</text>

        <!-- Valley of Disappointment -->
        <rect x="150" y="225" width="140" height="28" rx="14" fill="#ef4444" fill-opacity="0.12" stroke="#ef4444" stroke-opacity="0.4"/>
        <text x="220" y="244" text-anchor="middle" font-size="10" font-weight="800" fill="#ef4444">VALLEY OF DISAPPOINTMENT</text>
        <line x1="220" y1="223" x2="220" y2="205" stroke="#ef4444" stroke-width="2"/>
        <path d="M220 200 l-8 6 l16 0 z" fill="#ef4444"/>

        <!-- Breakthrough point -->
        <circle cx="430" cy="110" r="7" fill="#f59e0b">
          <animate attributeName="r" values="5;9;5" dur="2.2s" repeatCount="indefinite"/>
        </circle>
        <text x="430" y="98" text-anchor="middle" font-size="10" font-weight="800" fill="#f59e0b">BREAKTHROUGH</text>

        <!-- Plateau zone label -->
        <text x="140" y="160" text-anchor="middle" font-size="10" font-weight="700" fill="currentColor" opacity="0.5">Plateau of Latent Potential</text>
      </svg>
    </div>
    <div class="lg:col-span-2 space-y-3">
      <div class="p-4 rounded-2xl bg-slate-500/10 border border-slate-500/30">
        <div class="font-bold text-sm text-slate-500 dark:text-slate-400 mb-1">Your expectation</div>
        <p class="text-xs text-text/70 m-0">Linear: "I worked out 3 weeks — where are my abs?" The gap between effort and visible result feels like failure.</p>
      </div>
      <div class="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30">
        <div class="font-bold text-sm text-amber-500 mb-1">The reality check</div>
        <p class="text-xs text-text/70 m-0">Every habit cleanly executed is stored work. Two sessions in the same week won't change your body; 200 will be undeniable. You're unfreezing ice.</p>
      </div>
      <div class="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
        <div class="font-bold text-sm text-emerald-500 mb-1">The fix</div>
        <p class="text-xs text-text/70 m-0">Judge the process, not the outcome. <b>1% better daily = 37× in a year; 1% worse daily ≈ zero.</b> The direction matters more than the speed.</p>
      </div>
    </div>
  </div>
</div>

---

## 🪜 The Identity Pyramid: Change From the Inside Out

Most people try to change habits by setting *outcomes* — and the outcome is the *last* thing that changes. Behavior change works in three layers, and the deepest one is the strongest:

<!-- SVG: Identity Pyramid -->
<div class="not-prose my-10 bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
    <svg viewBox="0 0 460 360" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <!-- Pyramid shapes: outcome (top, small), process (mid), identity (base, wide) -->
      <defs>
        <linearGradient id="pyramidTop" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#f59e0b"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
        <linearGradient id="pyramidMid" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#14b8a6"/><stop offset="100%" stop-color="#2dd4bf"/></linearGradient>
        <linearGradient id="pyramidBase" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" stop-color="#059669"/><stop offset="100%" stop-color="#10b981"/></linearGradient>
      </defs>
      <!-- Base: Identity -->
      <path d="M70 200 L390 200 L330 300 L130 300 Z" fill="url(#pyramidBase)" opacity="0.9"/>
      <text x="230" y="245" text-anchor="middle" font-size="16" font-weight="900" fill="#ffffff">IDENTITY</text>
      <text x="230" y="266" text-anchor="middle" font-size="11" fill="#ecfdf5">who you believe you are</text>
      <!-- Mid: Process -->
      <path d="M110 110 L350 110 L390 200 L70 200 Z" fill="url(#pyramidMid)" opacity="0.85"/>
      <text x="230" y="145" text-anchor="middle" font-size="15" font-weight="900" fill="#ffffff">PROCESS</text>
      <text x="230" y="164" text-anchor="middle" font-size="11" fill="#f0fdfa">what you do</text>
      <!-- Top: Outcome -->
      <path d="M160 30 L300 30 L350 110 L110 110 Z" fill="url(#pyramidTop)" opacity="0.9"/>
      <text x="230" y="63" text-anchor="middle" font-size="14" font-weight="900" fill="#78350f">OUTCOME</text>
      <text x="230" y="82" text-anchor="middle" font-size="11" fill="#78350f">what you get</text>
      <!-- Side annotation -->
      <text x="60" y="340" font-size="11" font-weight="700" fill="currentColor" opacity="0.6">Behavior change is identity change — it flows bottom-up.</text>
    </svg>
    <div class="space-y-3">
      <div class="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30">
        <div class="font-bold text-sm text-amber-500 mb-1">🎯 Outcome-based (weakest)</div>
        <p class="text-xs text-text/70 m-0">"I want to lose 10 kg." Every day the goal feels heavy and the result feels far away. When one bad day arrives, the identity is untouched — so quitting is painless.</p>
      </div>
      <div class="p-4 rounded-2xl bg-teal-500/10 border border-teal-500/30">
        <div class="font-bold text-sm text-teal-500 mb-1">⚙️ Process-based</div>
        <p class="text-xs text-text/70 m-0">"I run 3× a week." Better — repeatable, measurable. But it still lives outside you; skip a week and there's nothing holding the loop together.</p>
      </div>
      <div class="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
        <div class="font-bold text-sm text-emerald-500 mb-1">🧬 Identity-based (strongest)</div>
        <p class="text-xs text-text/70 m-0">"I am a runner. I am a reader." Now a skipped run isn't a missed goal — it's a betrayal of who you are. Your identity defends the habit instead of fighting it.</p>
      </div>
      <div class="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30">
        <div class="font-bold text-sm text-cyan-500 mb-1">The mechanism</div>
        <p class="text-xs text-text/70 m-0">Every action is a <b>vote</b> for the person you want to be. Two votes prove nothing; 200 create indisputable evidence. You don't need to "become" the identity first — you become it by behaving like it, one vote at a time.</p>
      </div>
    </div>
  </div>
</div>

> [!TIP]
> **Identity reboot script:** Write your identity as a present-tense statement ("I'm the kind of person who ____"). Then list the smallest behavior that identity performs. That behavior is now your daily vote. Ask before each choice: *"What would someone with this identity do?"*

---

## 🔁 The Habit Loop: The Engine You're Rebuilding

The whole book is an instruction manual for one machine — the four-stage loop. Change any stage and the habit changes. To build a habit: make each stage easier. To break one: invert each stage.

<div class="not-prose my-10 bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
  <h4 class="text-lg font-black text-text mt-0 mb-6 text-center">The Cue → Craving → Response → Reward Circuit</h4>
  <svg viewBox="0 0 720 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
    <defs>
      <linearGradient id="loop1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#10b981"/><stop offset="100%" stop-color="#34d399"/></linearGradient>
      <linearGradient id="loop2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#14b8a6"/><stop offset="100%" stop-color="#2dd4bf"/></linearGradient>
      <linearGradient id="loop3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#f59e0b"/><stop offset="100%" stop-color="#fbbf24"/></linearGradient>
      <linearGradient id="loop4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#6366f1"/><stop offset="100%" stop-color="#818cf8"/></linearGradient>
    </defs>
    <!-- Arrow loop -->
    <g stroke="currentColor" stroke-width="2" fill="none" opacity="0.4">
      <path d="M640 120 C 690 120 690 90 650 60" />
    </g>
    <!-- Four stages arranged in a circuit -->
    <g transform="translate(20,60)">
      <rect x="0" y="0" width="150" height="120" rx="18" fill="url(#loop1)"/>
      <text x="75" y="40" text-anchor="middle" font-size="11" font-weight="800" fill="#064e3b">① CUE</text>
      <text x="75" y="58" text-anchor="middle" font-size="10" font-weight="700" fill="#064e3b">trigger</text>
      <text x="75" y="78" text-anchor="middle" font-size="9" fill="#064e3b" opacity="0.85">Make it OBVIOUS</text>
      <text x="75" y="94" text-anchor="middle" font-size="8" fill="#064e3b" opacity="0.7">1st Law</text>
    </g>
    <g transform="translate(190,60)">
      <rect x="0" y="0" width="150" height="120" rx="18" fill="url(#loop2)"/>
      <text x="75" y="40" text-anchor="middle" font-size="11" font-weight="800" fill="#042f2e">② CRAVING</text>
      <text x="75" y="58" text-anchor="middle" font-size="10" font-weight="700" fill="#042f2e">dopamine desire</text>
      <text x="75" y="78" text-anchor="middle" font-size="9" fill="#042f2e" opacity="0.85">Make it ATTRACTIVE</text>
      <text x="75" y="94" text-anchor="middle" font-size="8" fill="#042f2e" opacity="0.7">2nd Law</text>
    </g>
    <g transform="translate(360,60)">
      <rect x="0" y="0" width="150" height="120" rx="18" fill="url(#loop3)"/>
      <text x="75" y="40" text-anchor="middle" font-size="11" font-weight="800" fill="#451a03">③ RESPONSE</text>
      <text x="75" y="58" text-anchor="middle" font-size="10" font-weight="700" fill="#451a03">the action</text>
      <text x="75" y="78" text-anchor="middle" font-size="9" fill="#451a03" opacity="0.85">Make it EASY</text>
      <text x="75" y="94" text-anchor="middle" font-size="8" fill="#451a03" opacity="0.7">3rd Law</text>
    </g>
    <g transform="translate(530,60)">
      <rect x="0" y="0" width="150" height="120" rx="18" fill="url(#loop4)"/>
      <text x="75" y="40" text-anchor="middle" font-size="11" font-weight="800" fill="#312e81">④ REWARD</text>
      <text x="75" y="58" text-anchor="middle" font-size="10" font-weight="700" fill="#312e81">satisfaction</text>
      <text x="75" y="78" text-anchor="middle" font-size="9" fill="#312e81" opacity="0.85">Make it SATISFYING</text>
      <text x="75" y="94" text-anchor="middle" font-size="8" fill="#312e81" opacity="0.7">4th Law</text>
    </g>
    <!-- connecting directional chips -->
    <g>
      <path d="M170 120 L190 120" stroke="#14b8a6" stroke-width="3" marker-end="url(#arr)"/>
      <path d="M340 120 L360 120" stroke="#f59e0b" stroke-width="3"/>
      <path d="M510 120 L530 120" stroke="#818cf8" stroke-width="3"/>
      <path d="M665 120 Q 700 120 700 120 L 665 60 M665 60 Q 680 120 700 120" stroke="#10b981" stroke-width="3" fill="none"/>
      <text x="620" y="200" text-anchor="middle" font-size="9" font-weight="700" fill="#10b981">REWARD reinforces CUE (loop closes)</text>
    </g>
  </svg>
  <p class="text-center text-xs text-text/60 mt-4 mb-0">A habit is stable only when all four stages run. Break one stage and the loop stalls.</p>
</div>

\`\`\`mermaid
graph LR
    A[① CUE<br/>Make it Obvious] --> B[② CRAVING<br/>Make it Attractive]
    B --> C[③ RESPONSE<br/>Make it Easy]
    C --> D[④ REWARD<br/>Make it Satisfying]
    D -->|reinforces the cue| A
    E[Break a bad habit: invert each step →] -.-> A
    style A fill:#10b981,stroke:#fff,color:#fff
    style B fill:#14b8a6,stroke:#fff,color:#fff
    style C fill:#f59e0b,stroke:#fff,color:#fff
    style D fill:#6366f1,stroke:#fff,color:#fff
\`\`\`

---

## 🏗️ The 4 Laws of Behavior Change: The Blueprint

Each law has a job: it makes one stage of the loop automatic. Apply all four and a good habit becomes more than likely — it becomes hard to *not* do.

<div class="not-prose my-10 grid grid-cols-1 md:grid-cols-2 gap-5">

  <!-- Law 1 -->
  <div class="bg-gradient-to-b from-emerald-500/10 to-transparent border border-emerald-500/40 rounded-3xl p-6 relative overflow-hidden">
    <div class="absolute right-4 top-2 text-[90px] font-black leading-none text-emerald-500/10 select-none">1</div>
    <div class="flex items-center gap-3 mb-3">
      <div class="w-11 h-11 rounded-2xl bg-emerald-500 text-white flex items-center justify-center font-black text-lg shadow-lg shadow-emerald-500/30">1</div>
      <div>
        <div class="text-[10px] font-black uppercase tracking-widest text-emerald-500">Cue · 1st Law</div>
        <h3 class="font-black text-xl text-text m-0">Make It Obvious</h3>
      </div>
    </div>
    <p class="text-sm text-text/80 mb-4">The cue must be undeniable. If you have to remember, you've already lost — memory is a terrible trigger. Put the cue in the world, on the path.</p>
    <div class="space-y-2.5 text-sm text-text/80">
      <Accordion title="Implementation Intentions" badge="The formula">
        Name the time and place *in advance*: <b>"I will [BEHAVIOR] at [TIME] in [LOCATION]."</b> Studies show people who specify when/where are ~2× more likely to follow through. The decision is made once, not re-fought daily.
      </Accordion>
      <Accordion title="Habit Stacking" badge="Anchor to existing">
        Bolt the new habit onto an automatic one: <b>"After [CURRENT HABIT], I will [NEW HABIT]."</b> "After I pour my coffee, I will write my top 3 priorities." Your morning routine carries the new habit for free.
      </Accordion>
      <Accordion title="Environment Design" badge="Make cues visible">
        The most powerful cue is the one you see. Want to read more? Put the book on your pillow. Want water? Filled bottles everywhere. <b>Design your environment so good cues are obvious and bad cues are invisible.</b>
      </Accordion>
    </div>
  </div>

  <!-- Law 2 -->
  <div class="bg-gradient-to-b from-teal-500/10 to-transparent border border-teal-500/40 rounded-3xl p-6 relative overflow-hidden">
    <div class="absolute right-4 top-2 text-[90px] font-black leading-none text-teal-500/10 select-none">2</div>
    <div class="flex items-center gap-3 mb-3">
      <div class="w-11 h-11 rounded-2xl bg-teal-500 text-white flex items-center justify-center font-black text-lg shadow-lg shadow-teal-500/30">2</div>
      <div>
        <div class="text-[10px] font-black uppercase tracking-widest text-teal-500">Craving · 2nd Law</div>
        <h3 class="font-black text-xl text-text m-0">Make It Attractive</h3>
      </div>
    </div>
    <p class="text-sm text-text/80 mb-4">Dopamine runs on anticipation. Stack your desired habit with something you genuinely want — so you *crave* the cue, not avoid it.</p>
    <div class="space-y-2.5 text-sm text-text/80">
      <Accordion title="Temptation Bundling" badge="Need × Want">
        Pair an action you <b>should</b> do with an action you <b>want</b> to do. "I will only listen to my favorite podcast while on the treadmill." The want pulls the need.
      </Accordion>
      <Accordion title="Join a Culture Where It's Normal" badge="Social gravity">
        We imitate the close, the many, and the powerful. Surround yourself with people who already do the habit — in that tribe, the behavior is the path to belonging, and belonging is deeply attractive.
      </Accordion>
      <Accordion title="Reframe the Craving" badge="Framing">
        The mind doesn't crave the habit — it craves the *feeling* it promises. "I have to" becomes "I get to." "I need to run" becomes "I get to feel strong and clear-headed." Same task, different dopamine.
      </Accordion>
    </div>
  </div>

  <!-- Law 3 -->
  <div class="bg-gradient-to-b from-amber-500/10 to-transparent border border-amber-500/40 rounded-3xl p-6 relative overflow-hidden">
    <div class="absolute right-4 top-2 text-[90px] font-black leading-none text-amber-500/10 select-none">3</div>
    <div class="flex items-center gap-3 mb-3">
      <div class="w-11 h-11 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-black text-lg shadow-lg shadow-amber-500/30">3</div>
      <div>
        <div class="text-[10px] font-black uppercase tracking-widest text-amber-500">Response · 3rd Law</div>
        <h3 class="font-black text-xl text-text m-0">Make It Easy</h3>
      </div>
    </div>
    <p class="text-sm text-text/80 mb-4">Habits form by repetition, and repetition needs the least resistance possible. "Easy" is the on-ramp to "automatic."</p>
    <div class="space-y-2.5 text-sm text-text/80">
      <Accordion title="Reduce Friction" badge="Fewer steps">
        Every step between you and the habit is a chance to quit. Lay out workout clothes tonight. Keep the guitar on a stand, not in its case. <b>Prime the environment so the first step is already done.</b>
      </Accordion>
      <Accordion title="The 2-Minute Rule" badge="The entry rule">
        Scale the habit until it takes under two minutes to start. "Read 30 books a year" → "Read one page." "Run a marathon" → "Put on running shoes." <b>Nail showing up first; optimize the intensity later.</b> You can't improve what you don't start.
      </Accordion>
      <Accordion title="Automate What You Can" badge="One-time decisions">
        Commit your future self: automatic bill pay, standing meetings, meal delivery, app blockers. Automation is the ultimate friction removal — done once, repeated forever.
      </Accordion>
    </div>
  </div>

  <!-- Law 4 -->
  <div class="bg-gradient-to-b from-indigo-500/10 to-transparent border border-indigo-500/40 rounded-3xl p-6 relative overflow-hidden">
    <div class="absolute right-4 top-2 text-[90px] font-black leading-none text-indigo-500/10 select-none">4</div>
    <div class="flex items-center gap-3 mb-3">
      <div class="w-11 h-11 rounded-2xl bg-indigo-500 text-white flex items-center justify-center font-black text-lg shadow-lg shadow-indigo-500/30">4</div>
      <div>
        <div class="text-[10px] font-black uppercase tracking-widest text-indigo-500">Reward · 4th Law</div>
        <h3 class="font-black text-xl text-text m-0">Make It Satisfying</h3>
      </div>
    </div>
    <p class="text-sm text-text/80 mb-4">What is immediately rewarded is repeated; what is immediately punished is avoided. The brain is terrible with 10-year timelines — give it an immediate hit.</p>
    <div class="space-y-2.5 text-sm text-text/80">
      <Accordion title="Use Reinforcement" badge="Immediate reward">
        Add a short-term payoff to a long-term payoff habit, especially the avoidant kind. "I'll stretch, then I get 10 guilt-free minutes of a show." The immediate reward bridges the delay.
      </Accordion>
      <Accordion title="Habit Tracking" badge="Visual proof">
        "Don't break the chain." A calendar of checkmarks is a *progress satisfaction* engine — seeing the chain grow is itself the reward. Add a "tracker for the tracker" if recording starts to slip.
      </Accordion>
      <Accordion title="Never Miss Twice" badge="The golden rule">
        Missing once is an accident. Missing twice is the beginning of a new (bad) habit. <b>Whatever happens, never let one miss become two.</b> Perfection isn't required; rebound speed is.
      </Accordion>
    </div>
  </div>
</div>

---

## ⛓️ The 4 Inversions: How to Break a Bad Habit

Flip each law and the loop un-builds itself. If you can't eliminate the bad habit, engineer it out of existence:

<div class="not-prose my-10 grid grid-cols-1 md:grid-cols-2 gap-4">
  <div class="bg-card border border-red-500/30 rounded-2xl p-5">
    <div class="flex items-center gap-2 mb-2">
      <span class="text-lg">🚫</span>
      <h4 class="font-black text-sm text-red-500 m-0">Inversion 1: Make It Invisible</h4>
    </div>
    <p class="text-xs text-text/70 leading-relaxed m-0"><b>Reduce exposure to the cue.</b> The #1 predictor of willpower success is not mental strength — it's <b>self-control by avoidance</b>. Move the junk food to the top shelf or out of the house; delete the app. If you never see the cue, there's nothing to resist. Environment beats discipline.</p>
  </div>
  <div class="bg-card border border-red-500/30 rounded-2xl p-5">
    <div class="flex items-center gap-2 mb-2">
      <span class="text-lg">🧊</span>
      <h4 class="font-black text-sm text-red-500 m-0">Inversion 2: Make It Unattractive</h4>
    </div>
    <p class="text-xs text-text/70 leading-relaxed m-0"><b>Reframe the craving.</b> Every bad habit promises a feeling — name what it *really* costs. "That cigarette gives me a 5-minute hit and costs me my wind, my skin, my money." Highlight the true cost loudly and the craving loses its glamour.</p>
  </div>
  <div class="bg-card border border-red-500/30 rounded-2xl p-5">
    <div class="flex items-center gap-2 mb-2">
      <span class="text-lg">🧱</span>
      <h4 class="font-black text-sm text-red-500 m-0">Inversion 3: Make It Difficult</h4>
    </div>
    <p class="text-xs text-text/70 leading-relaxed m-0"><b>Increase friction.</b> Where the 3rd law reduces steps for good habits, add steps to bad ones. A "commitment device": e.g., leave social media logged out with a long password; keep the TV unplugged. The more friction, the fewer automatic slips.
    <div class="mt-2 text-[11px] bg-red-500/10 rounded-lg p-2 text-text/70"><b>Pro-level:</b> Onetime commitment devices that lock in future behavior — delete, block, donate, or physically remove the temptation while you're still motivated.</div>
  </div>
  <div class="bg-card border border-red-500/30 rounded-2xl p-5">
    <div class="flex items-center gap-2 mb-2">
      <span class="text-lg">👎</span>
      <h4 class="font-black text-sm text-red-500 m-0">Inversion 4: Make It Unsatisfying</h4>
    </div>
    <p class="text-xs text-text/70 leading-relaxed m-0"><b>Make the cost immediate.</b> Delayed punishment is invisible. Use a <b>habit contract</b>: someone you'll text, a posted consequence, a financial stake. An accountability partner or a public commitment makes the bad habit immediately costly — and therefore avoidable.</p>
  </div>
</div>

---

## 🌍 Environment Design: The Invisible Architect

Discipline is not a personality trait — it's a design problem. The people who look "self-disciplined" simply live in environments that do the heavy lifting for them.

<div class="not-prose my-10 bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Before -->
    <div>
      <div class="text-xs font-black uppercase tracking-widest text-red-500 mb-3 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-red-500"></span> A high-friction room</div>
      <div class="space-y-2 text-xs text-text/70">
        <div class="flex items-center gap-2 bg-red-500/5 border border-red-500/20 rounded-lg px-3 py-2"><span>📱</span> Phone pinging on the desk while you work</div>
        <div class="flex items-center gap-2 bg-red-500/5 border border-red-500/20 rounded-lg px-3 py-2"><span>🍪</span> Visible snacks next to the laptop</div>
        <div class="flex items-center gap-2 bg-red-500/5 border border-red-500/20 rounded-lg px-3 py-2"><span>🛋️</span> Gym bag buried in the closet</div>
        <div class="flex items-center gap-2 bg-red-500/5 border border-red-500/20 rounded-lg px-3 py-2"><span>🌙</span> Alarm clock beside your bed at thumb-reach</div>
      </div>
      <p class="text-[11px] text-red-500 mt-3 font-semibold">Every slip here is a design failure, not a character flaw.</p>
    </div>
    <!-- After -->
    <div>
      <div class="text-xs font-black uppercase tracking-widest text-emerald-500 mb-3 flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-emerald-500"></span> The same person, redesigned</div>
      <div class="space-y-2 text-xs text-text/70">
        <div class="flex items-center gap-2 bg-emerald-500/5 border border-emerald-500/20 rounded-lg px-3 py-2"><span>📵</span> Phone in another room during deep work</div>
        <div class="flex items-center gap-2 bg-emerald-500/5 border border-emerald-500/20 rounded-lg px-3 py-2"><span>🥗</span> One visible bowl of fruit; junk moved upstairs</div>
        <div class="flex items-center gap-2 bg-emerald-500/5 border border-emerald-500/20 rounded-lg px-3 py-2"><span>🏃</span> Shoes and outfit laid out by the door</div>
        <div class="flex items-center gap-2 bg-emerald-500/5 border border-emerald-500/20 rounded-lg px-3 py-2"><span>☀️</span> Alarm across the room — you must stand to kill it</div>
      </div>
      <p class="text-[11px] text-emerald-500 mt-3 font-semibold">Same person, different results — zero extra willpower used.</p>
    </div>
  </div>
</div>

---

## 📅 The Tracker: Visual Momentum

"Don't break the chain." A visible record turns every tiny win into a satisfying neural reward — and makes a missed day impossible to ignore.

<div class="not-prose my-8 bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div>
      <h4 class="text-lg font-black text-text mt-0 mb-3">Habit Tracker (June)</h4>
      <div class="grid grid-cols-7 gap-2">
        <div class="text-center text-[9px] font-bold text-text/40">M</div><div class="text-center text-[9px] font-bold text-text/40">T</div><div class="text-center text-[9px] font-bold text-text/40">W</div><div class="text-center text-[9px] font-bold text-text/40">T</div><div class="text-center text-[9px] font-bold text-text/40">F</div><div class="text-center text-[9px] font-bold text-text/40">S</div><div class="text-center text-[9px] font-bold text-text/40">S</div>
        <!-- Week 1 -->
        <div class="aspect-square rounded-lg bg-emerald-500/80 ring-emerald-500 flex items-center justify-center text-white text-xs font-black">✓</div>
        <div class="aspect-square rounded-lg bg-emerald-500/80 ring-emerald-500 flex items-center justify-center text-white text-xs font-black">✓</div>
        <div class="aspect-square rounded-lg bg-emerald-500/80 ring-emerald-500 flex items-center justify-center text-white text-xs font-black">✓</div>
        <div class="aspect-square rounded-lg bg-emerald-500/80 ring-emerald-500 flex items-center justify-center text-white text-xs font-black">✓</div>
        <div class="aspect-square rounded-lg bg-emerald-500/80 ring-emerald-500 flex items-center justify-center text-white text-xs font-black">✓</div>
        <div class="aspect-square rounded-lg bg-emerald-500/80 ring-emerald-500 flex items-center justify-center text-white text-xs font-black">✓</div>
        <div class="aspect-square rounded-lg bg-emerald-500/40 ring-emerald-500 flex items-center justify-center text-white text-xs font-black">✓</div>
        <!-- Week 2 -->
        <div class="aspect-square rounded-lg bg-emerald-500/80 ring-emerald-500 flex items-center justify-center text-white text-xs font-black">✓</div>
        <div class="aspect-square rounded-lg bg-red-500/80 ring-red-500 flex items-center justify-center text-white text-xs font-black">✗</div>
        <div class="aspect-square rounded-lg bg-emerald-500/80 ring-emerald-500 flex items-center justify-center text-white text-xs font-black">✓</div>
        <div class="aspect-square rounded-lg bg-emerald-500/80 ring-emerald-500 flex items-center justify-center text-white text-xs font-black">✓</div>
        <div class="aspect-square rounded-lg bg-emerald-500/80 ring-emerald-500 flex items-center justify-center text-white text-xs font-black">✓</div>
        <div class="aspect-square rounded-lg bg-emerald-500/80 ring-emerald-500 flex items-center justify-center text-white text-xs font-black">✓</div>
        <div class="aspect-square rounded-lg bg-emerald-500/40 ring-emerald-500 flex items-center justify-center text-white text-xs font-black">✓</div>
        <!-- Week 3 -->
        <div class="aspect-square rounded-lg bg-emerald-500/80 ring-emerald-500 flex items-center justify-center text-white text-xs font-black">✓</div>
        <div class="aspect-square rounded-lg bg-emerald-500/80 ring-emerald-500 flex items-center justify-center text-white text-xs font-black">✓</div>
        <div class="aspect-square rounded-lg bg-emerald-500/80 ring-emerald-500 flex items-center justify-center text-white text-xs font-black">✓</div>
        <div class="aspect-square rounded-lg bg-emerald-500/80 ring-emerald-500 flex items-center justify-center text-white text-xs font-black">✓</div>
        <div class="aspect-square rounded-lg bg-emerald-500/80 ring-emerald-500 flex items-center justify-center text-white text-xs font-black">✓</div>
        <div class="aspect-square rounded-lg bg-emerald-500/80 ring-emerald-500 flex items-center justify-center text-white text-xs font-black">✓</div>
        <div class="aspect-square rounded-lg bg-emerald-500/80 ring-emerald-500 flex items-center justify-center text-white text-xs font-black">✓</div>
        <!-- Week 4 -->
        <div class="aspect-square rounded-lg bg-emerald-500/80 ring-emerald-500 flex items-center justify-center text-white text-xs font-black">✓</div>
        <div class="aspect-square rounded-lg bg-emerald-500/80 ring-emerald-500 flex items-center justify-center text-white text-xs font-black">✓</div>
        <div class="aspect-square rounded-lg bg-emerald-500/80 ring-emerald-500 flex items-center justify-center text-white text-xs font-black">✓</div>
        <div class="aspect-square rounded-lg bg-emerald-500/80 ring-emerald-500 flex items-center justify-center text-white text-xs font-black">✓</div>
        <div class="aspect-square rounded-lg bg-emerald-500/80 ring-emerald-500 flex items-center justify-center text-white text-xs font-black">✓</div>
        <div class="aspect-square rounded-lg bg-emerald-500/80 ring-emerald-500 flex items-center justify-center text-white text-xs font-black">✓</div>
        <div class="aspect-square rounded-lg bg-emerald-500/80 ring-emerald-500 flex items-center justify-center text-white text-xs font-black">✓</div>
      </div>
      <p class="text-[11px] text-text/50 mt-3"><span class="text-red-500 font-bold">✗</span> = the one miss (day 9). The rule: never let it become two. The chain resumes the next day.</p>
    </div>
    <div class="space-y-3">
      <div class="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
        <div class="font-bold text-sm text-emerald-500 mb-1">Why it works</div>
        <p class="text-xs text-text/70 m-0">Each checkmark is immediate, tangible satisfaction. The growing chain becomes its own reward — you hesitate before breaking it because breaking it *feels* costly.</p>
      </div>
      <div class="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30">
        <div class="font-bold text-sm text-amber-500 mb-1">The golden rule</div>
        <p class="text-xs text-text/70 m-0"><b>Never miss twice.</b> One miss is a random event. Two is a new pattern forming. Rebound immediately — the chain resets, not the identity.</p>
      </div>
      <div class="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/30">
        <div class="font-bold text-sm text-indigo-500 mb-1">Add a commitment device</div>
        <p class="text-xs text-text/70 m-0">Combine the tracker with an accountability partner or a habit contract. When tracking slips, that's a signal to measure more, not to quit — track the tracker.</p>
      </div>
    </div>
  </div>
</div>

---

## 🚀 The 7-Day Habit Architecture Challenge

Build one complete habit loop this week — one layer per day:

<div class="my-8 not-prose bg-gradient-to-br from-slate-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl">
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
    <div class="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col justify-between hover:bg-white/10 transition-colors">
      <div>
        <div class="text-[10px] font-black uppercase text-emerald-400 tracking-wider">Day 1</div>
        <div class="font-bold text-sm text-white mt-1 mb-1">Habit Scorecard</div>
        <p class="text-[11px] text-slate-300">Write out your daily automatic behaviors and label each as (+), (−), or (=). Awareness is the first law.</p>
      </div>
      <div class="mt-3 text-[10px] text-slate-400 border-t border-white/10 pt-1.5 font-mono">Law 1 · awareness</div>
    </div>
    <div class="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col justify-between hover:bg-white/10 transition-colors">
      <div>
        <div class="text-[10px] font-black uppercase text-teal-400 tracking-wider">Day 2</div>
        <div class="font-bold text-sm text-white mt-1 mb-1">Choose ONE Atomic Habit</div>
        <p class="text-[11px] text-slate-300">Pick a single 2-minute habit and write its Identity statement: "I'm someone who ____."</p>
      </div>
      <div class="mt-3 text-[10px] text-slate-400 border-t border-white/10 pt-1.5 font-mono">Identity layer</div>
    </div>
    <div class="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col justify-between hover:bg-white/10 transition-colors">
      <div>
        <div class="text-[10px] font-black uppercase text-amber-400 tracking-wider">Day 3 & 4</div>
        <div class="font-bold text-sm text-white mt-1 mb-1">Stack & Design</div>
        <p class="text-[11px] text-slate-300">Write the Implementation Intention ("I will ___ at ___ in ___"), stack it after an existing habit, and make the cue visible.</p>
      </div>
      <div class="mt-3 text-[10px] text-slate-400 border-t border-white/10 pt-1.5 font-mono">Laws 1–2</div>
    </div>
    <div class="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col justify-between hover:bg-white/10 transition-colors">
      <div>
        <div class="text-[10px] font-black uppercase text-indigo-400 tracking-wider">Day 5, 6 & 7</div>
        <div class="font-bold text-sm text-white mt-1 mb-1">Reduce Friction & Track</div>
        <p class="text-[11px] text-slate-300">Remove two steps from starting, sweeten it with an immediate reward, and start the chain — never miss twice.</p>
      </div>
      <div class="mt-3 text-[10px] text-slate-400 border-t border-white/10 pt-1.5 font-mono">Laws 3–4</div>
    </div>
  </div>
</div>

---

## 🧘 Reflection: Your System Audit

> [!TIP]
> 1. **Votes:** What daily action are you casting that votes for an identity you don't actually want?
> 2. **Friction:** What is the single step you could remove to make your best habit start in under two minutes?
> 3. **Cue visibility:** Where is your good cue invisible, and your bad cue obvious? Move one of each this week.
> 4. **The plateau:** Are you in the Valley of Disappointment right now? Write your best piece of evidence that you're still compounding.
> 5. **Commitment device:** What accountability (person, contract, consequence) would make your 4th Law unbreakable?

---

## 🎯 Active Recall Quiz

Retrieve before you reveal — that's where the wiring happens:

<div class="bg-gradient-to-br from-slate-900 to-emerald-950 p-8 sm:p-12 rounded-[2.5rem] shadow-2xl border border-white/10 my-10 relative overflow-hidden text-white not-prose">
  <div class="absolute -right-20 -top-20 opacity-5 pointer-events-none">
    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
  </div>
  <div class="relative z-10 space-y-4">
    <details class="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors">
      <summary class="flex items-center font-bold p-5 cursor-pointer text-white list-none [&::-webkit-details-marker]:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-4 text-emerald-400 group-open:rotate-90 transition-transform"><path d="m9 18 6-6-6-6"/></svg>
        What are the four stages of the habit loop — and the four Laws that optimize them?
      </summary>
      <div class="p-5 pt-0 pl-14">
        <div class="border-l-2 border-emerald-400 pl-4 py-1 text-emerald-100/90 text-sm">
          <b>Cue → Make it Obvious</b> · <b>Craving → Make it Attractive</b> · <b>Response → Make it Easy</b> · <b>Reward → Make it Satisfying</b>. Break a stage and the loop stalls.
        </div>
      </div>
    </details>

    <details class="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors">
      <summary class="flex items-center font-bold p-5 cursor-pointer text-white list-none [&::-webkit-details-marker]:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-4 text-emerald-400 group-open:rotate-90 transition-transform"><path d="m9 18 6-6-6-6"/></svg>
        What is the formula for an Implementation Intention?
      </summary>
      <div class="p-5 pt-0 pl-14">
        <div class="border-l-2 border-emerald-400 pl-4 py-1 text-emerald-100/90 text-sm">
          <b>"I will [BEHAVIOR] at [TIME] in [LOCATION]."</b> Deciding when and where in advance roughly doubles follow-through.
        </div>
      </div>
    </details>

    <details class="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors">
      <summary class="flex items-center font-bold p-5 cursor-pointer text-white list-none [&::-webkit-details-marker]:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-4 text-emerald-400 group-open:rotate-90 transition-transform"><path d="m9 18 6-6-6-6"/></svg>
        What is the 2-Minute Rule and why does it work?
      </summary>
      <div class="p-5 pt-0 pl-14">
        <div class="border-l-2 border-emerald-400 pl-4 py-1 text-emerald-100/90 text-sm">
          Scale any habit until it takes <b>under two minutes to start</b> ("read one page"). It works because habits form through <b>repetition, not duration</b> — establish the identity of showing up first, then raise intensity. You can't optimize a habit you don't start.
        </div>
      </div>
    </details>

    <details class="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors">
      <summary class="flex items-center font-bold p-5 cursor-pointer text-white list-none [&::-webkit-details-marker]:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-4 text-emerald-400 group-open:rotate-90 transition-transform"><path d="m9 18 6-6-6-6"/></svg>
        What is the "Plateau of Latent Potential," and why do most people quit there?
      </summary>
      <div class="p-5 pt-0 pl-14">
        <div class="border-l-2 border-emerald-400 pl-4 py-1 text-emerald-100/90 text-sm">
          Habit gains are <b>delayed-exponential</b> — for weeks you see almost nothing (like ice warming from 26° to 31°). People quit in the <b>Valley of Disappointment</b> because visible results lag real accumulated work. Trust the process and keep the loop running.
        </div>
      </div>
    </details>

    <details class="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors">
      <summary class="flex items-center font-bold p-5 cursor-pointer text-white list-none [&::-webkit-details-marker]:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-4 text-emerald-400 group-open:rotate-90 transition-transform"><path d="m9 18 6-6-6-6"/></svg>
        How do you keep a bad habit "unsatisfying" — and what tool enforces it?
      </summary>
      <div class="p-5 pt-0 pl-14">
        <div class="border-l-2 border-emerald-400 pl-4 py-1 text-emerald-100/90 text-sm">
          Make the cost <b>immediate</b> with a <b>habit contract</b> or commitment device — an accountability partner, a posted consequence, a financial stake. Delayed punishment is invisible; immediate cost is avoidable.
        </div>
      </div>
    </details>

    <details class="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors">
      <summary class="flex items-center font-bold p-5 cursor-pointer text-white list-none [&::-webkit-details-marker]:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-4 text-emerald-400 group-open:rotate-90 transition-transform"><path d="m9 18 6-6-6-6"/></svg>
        What's the difference between outcome-, process-, and identity-based change — and which is strongest?
      </summary>
      <div class="p-5 pt-0 pl-14">
        <div class="border-l-2 border-emerald-400 pl-4 py-1 text-emerald-100/90 text-sm">
          <b>Outcome</b> = what you get ("lose 10 kg"), <b>process</b> = what you do ("run 3×/week"), <b>identity</b> = who you are ("I'm a runner"). <b>Identity is strongest</b> because it turns a skipped habit from a missed goal into a betrayal of self.
        </div>
      </div>
    </details>
  </div>
</div>

---

## 🧰 The Blueprint: All Laws & Inversions at a Glance

<div class="not-prose my-8 overflow-x-auto border border-border rounded-2xl shadow-sm">
  <table class="min-w-full text-sm">
    <thead class="bg-card">
      <tr>
        <th class="px-5 py-3 text-left text-xs font-bold text-text uppercase tracking-wider">Stage</th>
        <th class="px-5 py-3 text-left text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Build a good habit</th>
        <th class="px-5 py-3 text-left text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider">Break a bad habit</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-border">
      <tr class="hover:bg-card/50 transition-colors">
        <td class="px-5 py-3 font-semibold text-text">① Cue</td>
        <td class="px-5 py-3"><span class="text-emerald-600 dark:text-emerald-400 font-semibold">Make it obvious.</span> <span class="text-text/70">Implementation intentions, habit stacking, environment design.</span></td>
        <td class="px-5 py-3"><span class="text-red-600 dark:text-red-400 font-semibold">Make it invisible.</span> <span class="text-text/70">Reduce exposure; remove the cue from your environment.</span></td>
      </tr>
      <tr class="hover:bg-card/50 transition-colors">
        <td class="px-5 py-3 font-semibold text-text">② Craving</td>
        <td class="px-5 py-3"><span class="text-emerald-600 dark:text-emerald-400 font-semibold">Make it attractive.</span> <span class="text-text/70">Temptation bundling, join the tribe, reframe the craving.</span></td>
        <td class="px-5 py-3"><span class="text-red-600 dark:text-red-400 font-semibold">Make it unattractive.</span> <span class="text-text/70">Highlight the real cost; name what it truly costs you.</span></td>
      </tr>
      <tr class="hover:bg-card/50 transition-colors">
        <td class="px-5 py-3 font-semibold text-text">③ Response</td>
        <td class="px-5 py-3"><span class="text-emerald-600 dark:text-emerald-400 font-semibold">Make it easy.</span> <span class="text-text/70">Reduce friction, 2-minute rule, automate, prime the environment.</span></td>
        <td class="px-5 py-3"><span class="text-red-600 dark:text-red-400 font-semibold">Make it difficult.</span> <span class="text-text/70">Increase friction, add steps, use commitment devices.</span></td>
      </tr>
      <tr class="hover:bg-card/50 transition-colors">
        <td class="px-5 py-3 font-semibold text-text">④ Reward</td>
        <td class="px-5 py-3"><span class="text-emerald-600 dark:text-emerald-400 font-semibold">Make it satisfying.</span> <span class="text-text/70">Immediate reinforcement, habit tracking, never miss twice.</span></td>
        <td class="px-5 py-3"><span class="text-red-600 dark:text-red-400 font-semibold">Make it unsatisfying.</span> <span class="text-text/70">Habit contract, accountability, immediate consequences.</span></td>
      </tr>
    </tbody>
  </table>
</div>

<Quote author="James Clear" source="Atomic Habits">
  "You do not rise to the level of your goals. You fall to the level of your systems."
</Quote>

<Quote author="James Clear" source="Atomic Habits">
  "Every action you take is a vote for the type of person you wish to become."
</Quote>

<YouTube videoId="U_bfMyxn8Zg" />
`
};
