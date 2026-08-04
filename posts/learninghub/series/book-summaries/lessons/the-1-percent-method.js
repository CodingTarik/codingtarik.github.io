export default {
  "id": "the-1-percent-method",
  "title": "The 1% Method – James Clear",
  "duration": "36 Min.",
  "description": "The operational companion to habit science: the origin story of marginal gains, the science of why compounding feels silent, and a pilot's pre-flight system for environment architecture, friction, and habit contracts.",
  "content": `
<div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 p-8 sm:p-12 mb-10 shadow-2xl text-white border border-teal-500/20">

  <!-- Hero Animated SVG: The 1% Flight Instrument -->
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

      <g transform="translate(150,150)">
        <circle cx="0" cy="0" r="115" fill="none" stroke="#14b8a6" stroke-width="2" stroke-dasharray="6 10">
          <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="24s" repeatCount="indefinite"/>
        </circle>
        <circle cx="0" cy="0" r="85" fill="none" stroke="#2dd4bf" stroke-width="1.5" stroke-dasharray="2 6" opacity="0.7"/>
        <g stroke="#34d399" stroke-width="1.5" opacity="0.5">
          <line x1="-60" y1="0" x2="-70" y2="0"/><line x1="60" y1="0" x2="70" y2="0"/>
          <line x1="0" y1="-60" x2="0" y2="-70"/><line x1="0" y1="60" x2="0" y2="70"/>
        </g>
        <path d="M0 25 C 40 0 40 -45 20 -70" fill="none" stroke="#fbbf24" stroke-width="3" stroke-linecap="round" stroke-dasharray="5 4">
          <animate attributeName="stroke-dashoffset" values="0;-18" dur="1.5s" repeatCount="indefinite"/>
        </path>
        <circle cx="20" cy="-70" r="6" fill="#fbbf24" filter="url(#glow-teal)">
          <animate attributeName="cy" values="-60;-78;-60" dur="3s" repeatCount="indefinite"/>
        </circle>
        <circle cx="0" cy="0" r="24" fill="url(#grad-1pct-core)" filter="url(#glow-teal)"/>
        <text x="0" y="5" text-anchor="middle" fill="#ffffff" font-weight="900" font-size="13">1%</text>
      </g>
    </svg>
  </div>

  <div class="relative z-10">
    <span class="inline-block py-1 px-3 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold tracking-widest uppercase mb-6 border border-teal-500/30">Book Summary · The Habit Flight-Desk</span>
    <h1 class="text-4xl sm:text-5xl font-black mb-4 leading-tight tracking-tight text-white m-0 pb-0">The 1% Method<br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-cyan-300">Take the Controls of Your Behavior</span></h1>
    <p class="text-xl sm:text-2xl text-teal-100/80 font-medium max-w-2xl mt-4 mb-8">by James Clear · The Practical Implementation System</p>
    <div class="flex flex-wrap gap-3">
      <span class="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-semibold text-white/80">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 1 3-3h7z"/></svg>
        Pre-Flight Checklists
      </span>
      <span class="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-semibold text-white/80">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        Friction Engineering
      </span>
      <span class="inline-flex items-center gap-1.5 bg-teal-400/20 border border-teal-400/30 rounded-full px-3 py-1 text-xs font-semibold text-teal-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        The Latent-Potential Cruise
      </span>
    </div>
  </div>
</div>

<p class="text-xl sm:text-2xl text-text/90 font-medium mb-8 leading-relaxed max-w-4xl">
  Ever notice how an airline pilot doesn't rely on willpower to fly? She runs a <span class="text-primary font-bold">checklist</span>, adjusts the <span class="text-primary font-bold">throttle</span>, and lets the <span class="text-primary font-bold">systems</span> carry the aircraft. The 1% Method applies the same logic to your life: you don't need more discipline — you need a cockpit. Build the systems, set the controls, and the compounding takes care of itself.
</p>

<div class="not-prose my-8 bg-gradient-to-br from-teal-500/10 to-transparent border border-teal-500/30 rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
  <div class="absolute right-4 top-4 opacity-10">
    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4Z"/></svg>
  </div>
  <h3 class="text-2xl font-black text-text mt-0 mb-2">The Core Equation of the 1% Method</h3>
  <div class="flex flex-col sm:flex-row items-center gap-3 text-xl font-black text-text/90 my-4">
    <span class="text-teal-500">1% daily stack</span><span class="text-text/50">+</span><span class="text-teal-500">systems not goals</span><span class="text-text/50">+</span><span class="text-teal-500">a designed environment</span><span class="text-text/50">=</span><span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">37× in a year</span>
  </div>
  <p class="text-sm text-text/70 mb-0 mt-0">Getting 1% better at something every day compounds to a <b>37.78×</b> improvement over a year ($1.01<sup>365</sup>). The entire book is the engineering that makes that daily 1% possible without burning out.</p>
</div>

<StatGrid>
  <Stat value="37.78x" label="Yearly Multiple" sub="1.01^365 compounding" color="teal" />
  <Stat value="66 Days" label="Avg. Latency" sub="How long until a habit feels automatic" color="emerald" />
  <Stat value="4" label="Controls" sub="Obvious · Attractive · Easy · Satisfying" color="indigo" />
  <Stat value="0" label="Willpower Needed" sub="None once the cockpit is set" color="amber" />
</StatGrid>

<Tabs>
  <Tab title="🧠 The Environment Equation">
    **Behavior is mostly a reaction to the environment, not a decision.**
    <br/><br/>
    The 1% Method's foundation is a simple, powerful claim backed by social psychology: we don't choose most of our actions — we <b>react to cues</b>:
    - <b>Visual prominence:</b> humans are visual creatures; the cue you see dominates the action you take.
    - <b>Friction:</b> every extra step between you and a habit is a tax on it. A 2-step difference routinely decides whether it happens.
    - <b>Defaults:</b> the path of least resistance is the one your exhausted brain will choose. Design the path you <em>want</em> to be easiest.
    <br/><br/>
    So the question is never "are you motivated?" — it's <b>"did you design your environment so the right thing is easy and the wrong thing is hard?"</b>
  </Tab>
  <Tab title="📚 How to Use This Flight Plan">
    Treat your behavior like a flight:
    1. <b>Pre-flight:</b> run the checklist — make each stage of the loop easy/obvious; add friction to bad habits.
    2. <b>In-flight:</b> trust the systems; don't rely on motivation mid-trip.
    3. <b>Post-flight:</b> review what worked and reset the environment for tomorrow.
    <br/><br/>
    Read the origin story and the science below, then the four Control Panels, and finish with the 7-day build. The checklist at the end is designed to be printed and used daily.
  </Tab>
  <Tab title="⚠️ Don't Judge Yourself on Goals">
    > [!WARNING]
    > Fixating on outcomes ("I must be X by June") erodes motivation the moment you fall behind — the <b>fallacy of hope-as-a-long-term-strategy</b>. The 1% Method inverts the focus: judge yourself on the <b>system</b>, not the result. Hit the reps, keep the loop running, and let the outcome be a side effect. The only dangerous failure is abandoning the system — not a single missed day.
  </Tab>
  <Tab title="👤 Who This Is For">
    - 🧭 **People who've failed at New Year's resolutions** because they aimed at outcomes, not systems
    - 🏋️ **Builders & creators** wanting sustainable deep-work and creative routines
    - 🧠 **Anyone who trusts engineering more than exhortation**
    - 🔄 **Those quitting distractions / procrastination** who've heard "just be disciplined" one too many times
    - 🧑‍🔬 **Experimenters** who like measurable, reviewable progress
  </Tab>
</Tabs>

---

## 📖 Where the 1% Idea Comes From: Stories Behind the Method

The core isn't new — it's ancient, proven, and re-armed with data. Three stories anchor everything that follows.

### Story 1 — Dave Brailsford & the British cycling revolution 🇬🇧
In 2003, British track cycling was a laughing stock: the team had won a single gold medal in 76 years. New performance director Dave Brailsford decided to stop chasing one big win and instead hunt a thousand tiny ones. He <b>"aggregated marginal gains"</b> — the 1% improvements nobody else thought worth doing:

- Redesigned racing saddles and wiped tires with alcohol for better grip
- Painted the inside of the team truck white to spot dust more easily
- Tested different pillows and mattresses — and taught riders the <b>correct way to wash their hands</b> to reduce infection
- Even switched to the best massage gel

None of these was a breakthrough. Together, they were. Within five years, British cyclists won <b>178 world championships, 66 Olympic golds, and five Tour de France titles</b>. The lesson: <b>1% improvements accumulate into an unassailable whole</b> — but only if you treat them as systems, not luck.

<KeyTakeaway>The origin of the method: Brailsford didn't find one magic fix — he built a system of hundreds of 1% fixes. Focus on the system of small wins, not the single big swing.</KeyTakeaway>

### Story 2 — Benjamin Franklin's 13 virtues: the first habit cockpit 🇺🇸
Fifty years before "self-improvement" was a genre, Franklin built a literal flight-deck for his character. He chose <b>13 virtues</b> (temperance, order, frugality, industry, silence, etc.), gave each a clear definition, and made a <b>weekly checklist</b> — marking a black dot every day he failed a virtue, focusing on one virtue per week, and reviewing his "book" each evening.

It's a staggeringly modern system: clear cues (the chart), immediate feedback (the dots), a review loop (the evening check), and a "never miss twice" resilience (a week refocuses). Franklin credited "this little artifice" with much of his success. The 1% Method is, built on a 300-year-old template: <b>a visible tracker + a scheduled review = compounding self-direction.</b>

### Story 3 — Kaizen: the one-centimeter philosophy 🇯🇵
Post-war Japan rebuilt with a management philosophy called <b>kaizen</b> — "continuous improvement" through small, consistent changes rather than dramatic leaps. The famous framing: <b>1 cm a day</b>, not 1 meter at a time. Small enough to be non-threatening (so people don't resist), consistent enough to compound. It turned Japanese industry into a global powerhouse. The 1% Method simply applies kaizen to your own behavior and neurology.

---

## 🔬 The Science: Why It Works (and Why It Feels Like It Doesn't)

The anecdotes are lovely; the science is why you can trust them. Four findings underwrite the whole method:

<div class="not-prose my-10 grid grid-cols-1 md:grid-cols-2 gap-4">
  <div class="bg-card border border-t-4 border-t-emerald-500 border-border rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
    <div class="font-black text-sm text-emerald-500 mb-1">🧠 Compounding is delayed-exponential</div>
    <p class="text-xs text-text/70 leading-relaxed m-0">Growth-by-habits isn't linear; it's an <b>S-curve</b> — flat for a long time, then steep. Philippa Lally's 2009 University College London study tracked 96 people forming habits and found the average time to automaticity was <b>66 days</b> (range 18–254), with missed days barely slowing the process <em>until</em> two were missed in a row. Translation: you can be consistent for two months and see nothing, then suddenly everything "clicks." Don't quit in the flat zone.</p>
  </div>
  <div class="bg-card border border-t-4 border-t-teal-500 border-border rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
    <div class="font-black text-sm text-teal-500 mb-1">🗓️ Implementation intentions ≈ 2× follow-through</div>
    <p class="text-xs text-text/70 leading-relaxed m-0">Psychologist Peter Gollwitzer's research showed that deciding <b>"when, where, and how"</b> in advance ("I will meditate at 7:00 in the living room") roughly <b>doubles</b> the odds of doing it. The reason: you're not re-deciding under conditions of exhaustion and temptation — the decision was made once, when you were strong. Your future self just executes a stored plan.</p>
  </div>
  <div class="bg-card border border-t-4 border-t-amber-500 border-border rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
    <div class="font-black text-sm text-amber-500 mb-1">🔋 Willpower is a depleting resource</div>
    <p class="text-xs text-text/70 leading-relaxed m-0">Roy Baumeister's "ego depletion" studies (and decades of follow-up debate) established the practical truth behind it: <b>willpower doesn't scale to every decision</b>. You have a finite reservoir each day, and it dries up under stress, tiredness, and hunger. The 1% Method's answer is structural: <b>take the decision off your plate</b> so your depleted evening self never has to "choose" — it just follows the environment you built when you were strong.</p>
  </div>
  <div class="bg-card border border-t-4 border-t-cyan-500 border-border rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
    <div class="font-black text-sm text-cyan-500 mb-1">🚪 Choice architecture is real</div>
    <p class="text-xs text-text/70 leading-relaxed m-0">Nobel laureate Richard Thaler's <b>nudge</b> research showed that <em>how choices are arranged</em> silently steers behavior — with no coercion and no extra willpower. Moving the fruit to eye level changes eating; making the healthy option the default changes outcomes. Set your <b>defaults</b> (environment, app blockers, standing meetings) and your least-resistance path becomes your best path.</p>
  </div>
</div>

> [!NOTE]
> **The last-mile compounding effect.** The famous 1.01<sup>365</sup> = 37.78 hides something important: most of that 37× is earned in the <em>final stretch</em> of the year. Progress "suddenly" appears because compounding spends most of its time quietly — then erupts. This is precisely why outcome-fixation is so dangerous: people quit in the flat zone <em>right before</em> the payoff. Trust the math over your mood.

---

## 🕹️ The Control Panel: Four Controls, One Cockpit

Every habit is a loop of Cue → Craving → Response → Reward. On this flight-deck you have four controls — tune each one to make the good loop fly itself:

<div class="not-prose my-10 grid grid-cols-1 md:grid-cols-2 gap-5">
  <div class="bg-gradient-to-b from-teal-500/10 to-transparent border border-teal-500/40 rounded-3xl p-6 relative overflow-hidden">
    <div class="absolute right-4 top-2 text-[90px] font-black leading-none text-teal-500/10 select-none">1</div>
    <div class="flex items-center gap-3 mb-3">
      <div class="w-11 h-11 rounded-2xl bg-teal-500 text-white flex items-center justify-center font-black text-lg shadow-lg shadow-teal-500/30">1</div>
      <div><h3 class="font-black text-xl text-text m-0">Obviousness</h3><div class="text-[10px] font-black uppercase tracking-widest text-teal-500">the cue control</div></div>
    </div>
    <p class="text-sm text-text/80 mb-3">If the cue isn't visible, the loop never starts. Make the good cue loud and the bad cue invisible.</p>
    <div class="space-y-2 text-sm text-text/80">
      <div class="bg-card border border-border rounded-xl p-3"><b class="text-teal-500">Implementation Intention:</b> "I will [BEHAVIOR] at [TIME] in [LOCATION]."</div>
      <div class="bg-card border border-border rounded-xl p-3"><b class="text-teal-500">Stimulus Control:</b> remove the bad cue from sight entirely (marshmallow-easier when you can't see it).</div>
    </div>
  </div>
  <div class="bg-gradient-to-b from-cyan-500/10 to-transparent border border-cyan-500/40 rounded-3xl p-6 relative overflow-hidden">
    <div class="absolute right-4 top-2 text-[90px] font-black leading-none text-cyan-500/10 select-none">2</div>
    <div class="flex items-center gap-3 mb-3">
      <div class="w-11 h-11 rounded-2xl bg-cyan-500 text-white flex items-center justify-center font-black text-lg shadow-lg shadow-cyan-500/30">2</div>
      <div><h3 class="font-black text-xl text-text m-0">Attractiveness</h3><div class="text-[10px] font-black uppercase tracking-widest text-cyan-500">the craving control</div></div>
    </div>
    <p class="text-sm text-text/80 mb-3">Bolt the habit to something you already desire so the craving pulls you in.</p>
    <div class="space-y-2 text-sm text-text/80">
      <div class="bg-card border border-border rounded-xl p-3"><b class="text-cyan-500">Temptation Bundling:</b> only allow the podcast/treat while you do the habit.</div>
      <div class="bg-card border border-border rounded-xl p-3"><b class="text-cyan-500">Reframe:</b> "I have to" → "I get to" (you crave the feeling, not the task).</div>
    </div>
  </div>
  <div class="bg-gradient-to-b from-amber-500/10 to-transparent border border-amber-500/40 rounded-3xl p-6 relative overflow-hidden">
    <div class="absolute right-4 top-2 text-[90px] font-black leading-none text-amber-500/10 select-none">3</div>
    <div class="flex items-center gap-3 mb-3">
      <div class="w-11 h-11 rounded-2xl bg-amber-500 text-white flex items-center justify-center font-black text-lg shadow-lg shadow-amber-500/30">3</div>
      <div><h3 class="font-black text-xl text-text m-0">Ease</h3><div class="text-[10px] font-black uppercase tracking-widest text-amber-500">the throttle control</div></div>
    </div>
    <p class="text-sm text-text/80 mb-3">Friction is the throttle. Push it forward for good habits, pull it back for bad ones.</p>
    <div class="space-y-2 text-sm text-text/80">
      <div class="bg-card border border-border rounded-xl p-3"><b class="text-amber-500">2-Minute Rule:</b> any habit can start in under 2 minutes.</div>
      <div class="bg-card border border-border rounded-xl p-3"><b class="text-amber-500">Prime & reset:</b> set it up tonight so starting tomorrow is trivial.</div>
    </div>
  </div>
  <div class="bg-gradient-to-b from-indigo-500/10 to-transparent border border-indigo-500/40 rounded-3xl p-6 relative overflow-hidden">
    <div class="absolute right-4 top-2 text-[90px] font-black leading-none text-indigo-500/10 select-none">4</div>
    <div class="flex items-center gap-3 mb-3">
      <div class="w-11 h-11 rounded-2xl bg-indigo-500 text-white flex items-center justify-center font-black text-lg shadow-lg shadow-indigo-500/30">4</div>
      <div><h3 class="font-black text-xl text-text m-0">Satisfaction</h3><div class="text-[10px] font-black uppercase tracking-widest text-indigo-500">the reward control</div></div>
    </div>
    <p class="text-sm text-text/80 mb-3">Delayed rewards don't register. Give the loop an immediate hit so it repeats.</p>
    <div class="space-y-2 text-sm text-text/80">
      <div class="bg-card border border-border rounded-xl p-3"><b class="text-indigo-500">Reinforcement:</b> pair the habit with a short-term pleasure (<i>the hot bath after the workout</i>).</div>
      <div class="bg-card border border-border rounded-xl p-3"><b class="text-indigo-500">Tracking:</b> a visible chain of checkmarks is itself the reward.</div>
    </div>
  </div>
</div>

---

## 🎚️ The Throttle: Friction Engineering

This is the most actionable idea in the book — you can change behavior without changing motivation, by simply moving the friction dial:

<div class="not-prose my-10 bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
  <h4 class="text-lg font-black text-text mt-0 mb-6 text-center">The Friction Slider — push good, pull bad</h4>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <div class="flex items-center justify-between mb-1">
        <span class="text-xs font-black uppercase tracking-widest text-emerald-500">GOOD HABIT → go LOW friction</span>
        <span class="text-[10px] text-text/40 font-bold">0–1 steps</span>
      </div>
      <svg viewBox="0 0 320 40" class="w-full mb-2">
        <rect x="10" y="10" width="300" height="16" rx="8" fill="#10b981" fill-opacity="0.15"/>
        <rect x="10" y="10" width="70" height="16" rx="8" fill="#10b981"/>
        <text x="12" y="40" font-size="9" font-weight="700" fill="#10b981">Shoes by the door · app open · book on the pillow</text>
      </svg>
      <div class="space-y-1.5 text-xs text-text/70">
        <div class="bg-emerald-500/5 border border-emerald-500/20 rounded-lg px-3 py-2">✅ Gear laid out the night before</div>
        <div class="bg-emerald-500/5 border border-emerald-500/20 rounded-lg px-3 py-2">✅ Phone charger across the room for wake-up</div>
        <div class="bg-emerald-500/5 border border-emerald-500/20 rounded-lg px-3 py-2">✅ The first tiny step is already done</div>
      </div>
    </div>
    <div>
      <div class="flex items-center justify-between mb-1">
        <span class="text-xs font-black uppercase tracking-widest text-red-500">BAD HABIT → go HIGH friction</span>
        <span class="text-[10px] text-text/40 font-bold">4+ steps</span>
      </div>
      <svg viewBox="0 0 320 40" class="w-full mb-2">
        <rect x="10" y="10" width="300" height="16" rx="8" fill="#ef4444" fill-opacity="0.15"/>
        <rect x="240" y="10" width="70" height="16" rx="8" fill="#ef4444"/>
        <text x="12" y="40" font-size="9" font-weight="700" fill="#ef4444">Log out · put device in another room · add a barrier</text>
      </svg>
      <div class="space-y-1.5 text-xs text-text/70">
        <div class="bg-red-500/5 border border-red-500/20 rounded-lg px-3 py-2">🚫 Social media logged out, long password</div>
        <div class="bg-red-500/5 border border-red-500/20 rounded-lg px-3 py-2">🚫 Junk food on a high shelf, out of sight</div>
        <div class="bg-red-500/5 border border-red-500/20 rounded-lg px-3 py-2">🚫 TV unplugged / remote stored separately</div>
      </div>
    </div>
  </div>
  <p class="text-xs text-text/60 text-center mt-6 mb-0">Your tired, busy, default brain always takes the path of least resistance. <b>Make the path you want be the easy one.</b></p>
</div>

### Anecdote: the piano-lid trick 🎹
Want someone (or yourself) to practise more? Don't ask for more willpower — lower the friction. In one famous demonstration of environment design, a music school simply <b>left the piano lids open</b> versus closed. When the lids stayed open, students' practice time roughly doubled — <b>with zero change in motivation</b>. The visible instrument was a cue; the closed lid was friction. One detail reshaped behavior. That's the whole philosophy in a single piano lid.

### The 2-Minute Gateway & Habit Stacking

<Accordion title="The 2-Minute Rule" badge="The throttle, triaged">
  Scale any habit down until it takes under two minutes to start: <b>"Read 20 pages" → "Read one page"; "Run 5km" → "Put on running shoes."</b> Why it works: habits are built by <em>frequency</em>, not duration. By making the start trivial, you stack reps and build the identity of "a person who shows up." You can always do more once airborne — but only if you take off. (It's also the low-friction on-ramp that gets you <em>into</em> the 66-day latency window every single day.)
</Accordion>

<Accordion title="Habit Stacking" badge="Bolt to existing">
  Attach the new habit onto an existing automatic one: <b>"After [CURRENT HABIT], I will [NEW HABIT]."</b> "After I pour my morning coffee, I write my top 3 priorities." The existing behavior becomes the runway — the new habit takes off from something already in motion, so you never have to "remember" to start it.
</Accordion>

<Accordion title="One Space, One Function" badge="Context design">
  Assign each location a single primary job: bed = sleep only, desk = deep work only, couch = rest only. Training your environment this way makes cues fire instantly and reliably — your brain knows what a room is <em>for</em>, and starts the right loop the moment you enter it (this is choice architecture applied to yourself).
</Accordion>

---

## ✈️ The Cruise Phase: Trusting the Plateau

The 1% Method hinges on one psychological fact many people never survive: <b>the benefits arrive late, and they arrive suddenly.</b>

<!-- SVG: Cruise Altitude (plateau → climb) -->
<div class="not-prose my-10 bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <svg viewBox="0 0 520 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <defs>
        <linearGradient id="altGrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#14b8a6"/><stop offset="100%" stop-color="#f59e0b"/></linearGradient>
      </defs>
      <line x1="40" y1="230" x2="490" y2="230" stroke="currentColor" stroke-width="2" opacity="0.2"/>
      <path d="M40 210 C 160 208 250 205 300 195 C 360 182 430 130 485 40" fill="none" stroke="url(#altGrad)" stroke-width="4" stroke-linecap="round"/>
      <rect x="40" y="195" width="240" height="26" rx="13" fill="#f59e0b" fill-opacity="0.12" stroke="#f59e0b" stroke-opacity="0.4"/>
      <text x="160" y="214" text-anchor="middle" font-size="10" font-weight="800" fill="#f59e0b">PLATEAU OF LATENT POTENTIAL</text>
      <g transform="translate(120,170)">
        <path d="M-14 0 L-20 -6 L-20 -10 L-2 -7 L14 -4 L24 -2 L28 0 L24 2 L14 4 L-2 7 L-20 10 L-20 6 L-14 0 Z" fill="#f59e0b"/>
        <animateTransform attributeName="transform" type="translate" values="120,168;150,166;180,160;220,148;260,130;300,110;340,88;390,64;450,40" dur="8s" repeatCount="indefinite"/>
      </g>
      <text x="330" y="120" text-anchor="middle" font-size="9" font-weight="700" fill="#14b8a6">breakthrough</text>
      <text x="430" y="40" font-size="10" font-weight="700" fill="#14b8a6">37×</text>
      <text x="90" y="250" font-size="9" fill="currentColor" opacity="0.5">week 1–8: almost nothing visible, but altitude is banking</text>
    </svg>
    <div class="space-y-3">
      <div class="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30">
        <div class="font-bold text-sm text-amber-500 mb-1">The trap</div>
        <p class="text-xs text-text/70 m-0">For weeks you're consistent and see no visible change. Your expectation (a straight line) meets delayed reality (a curve), and the gap is called the <b>Valley of Disappointment</b>. Lally's 66-day study is the permission slip to keep going through it.</p>
      </div>
      <div class="p-4 rounded-2xl bg-teal-500/10 border border-teal-500/30">
        <div class="font-bold text-sm text-teal-500 mb-1">The pilot's answer</div>
        <p class="text-xs text-text/70 m-0">Judge the <b>loop</b>, not the outcome. While you're on the plateau, trust the compounding math — like ice at 26°→31°F warming toward the melt. The breakthrough comes to those still flying.</p>
      </div>
      <div class="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
        <div class="font-bold text-sm text-emerald-500 mb-1">Cruise ≠ coast</div>
        <p class="text-xs text-text/70 m-0">The plateau is not the finish — it's the long, boring middle. Complete the reps, review, reset. Altitude compounds while you're patient.</p>
      </div>
    </div>
  </div>
</div>

---

## 🧑‍✈️ Post-Flight: The Review that Compounds

Fanatics see reviewing as optional; pilots never skip it. Franklin reviewed his virtues <em>daily</em>. The difference between a year of the same habit and a year of getting better is the <b>reflection loop</b>:

<div class="not-prose my-10 grid grid-cols-1 md:grid-cols-3 gap-4">
  <div class="bg-card border border-teal-500/30 rounded-2xl p-5">
    <div class="text-[10px] font-black uppercase tracking-widest text-teal-500 mb-2">Weekly</div>
    <div class="font-bold text-sm text-text mb-2">The Reset Ritual</div>
    <ul class="text-xs text-text/70 space-y-1.5 list-none pl-0 m-0">
      <li>✔ What went well this week?</li>
      <li>✔ What slipped — and why (cue, friction, reward)?</li>
      <li>✔ What's the single best next tweak?</li>
      <li>✔ Reset the environment for tomorrow.</li>
    </ul>
  </div>
  <div class="bg-card border border-cyan-500/30 rounded-2xl p-5">
    <div class="text-[10px] font-black uppercase tracking-widest text-cyan-500 mb-2">Monthly</div>
    <div class="font-bold text-sm text-text mb-2">The Course Correction</div>
    <ul class="text-xs text-text/70 space-y-1.5 list-none pl-0 m-0">
      <li>✔ Re-run the 4 Law controls — which drifted?</li>
      <li>✔ Measure reps, not results.</li>
      <li>✔ Adjust the friction dials for any new drains.</li>
      <li>✔ Update the habit stack.</li>
    </ul>
  </div>
  <div class="bg-card border border-amber-500/30 rounded-2xl p-5">
    <div class="text-[10px] font-black uppercase tracking-widest text-amber-500 mb-2">Quarterly</div>
    <div class="font-bold text-sm text-text mb-2">The Identity Check</div>
    <ul class="text-xs text-text/70 space-y-1.5 list-none pl-0 m-0">
      <li>✔ Review your identity statement — is it proving true in votes?</li>
      <li>✔ Drop habits that no longer serve the destination.</li>
      <li>✔ Ask: what would the next 1% of this person look like?</li>
    </ul>
  </div>
</div>

> [!TIP]
> **A commitment device you'll actually keep:** money is a powerful "lock-in." Ariely's research on "the commitment device" shows that putting a <em>consequence</em> on the table — e.g., pay a friend if you miss — dramatically raises follow-through. So: pick the weekly reset, book the check-in, and put a small stake behind it. Franklin's dots did the same thing with pure visibility; you can add a dollar amount for extra grip.

---

## 📋 The Pre-Flight Checklist: Print & Run Daily

<div class="not-prose my-8 bg-gradient-to-br from-slate-900 to-teal-950 text-white rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl">
  <div class="flex items-center gap-3 mb-5">
    <div class="w-11 h-11 rounded-2xl bg-teal-500/20 text-teal-300 border border-teal-500/30 flex items-center justify-center text-xl">✅</div>
    <div><div class="font-black text-lg text-white m-0">The Daily Habit Checklist</div><p class="text-xs text-teal-200/70 m-0">One minute before you start. Tick what applies.</p></div>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-teal-50/85">
    <label class="flex items-center gap-2"><input type="checkbox" class="accent-teal-500" /> I have an implementation intention (time + place).</label>
    <label class="flex items-center gap-2"><input type="checkbox" class="accent-teal-500" /> The good cue is visible; the bad cue is hidden.</label>
    <label class="flex items-center gap-2"><input type="checkbox" class="accent-teal-500" /> The start takes under 2 minutes.</label>
    <label class="flex items-center gap-2"><input type="checkbox" class="accent-teal-500" /> I stacked it onto an existing habit.</label>
    <label class="flex items-center gap-2"><input type="checkbox" class="accent-teal-500" /> The environment is primed for success.</label>
    <label class="flex items-center gap-2"><input type="checkbox" class="accent-teal-500" /> I have an immediate reward / tracker ready.</label>
  </div>
  <div class="mt-5 pt-4 border-t border-white/10 text-xs text-teal-200/70">🎯 <b>Commitment device (optional):</b> text a friend when you complete it, or post it. External accountability is the 4th Law's seatbelt.</div>
</div>

---

## 🚀 The 7-Day Build: Take Off

<div class="my-8 not-prose">
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
    <div class="p-4 rounded-2xl bg-teal-500/10 border border-teal-500/30 text-text"><div class="text-xs font-black uppercase text-teal-400">Day 1 & 2</div><div class="font-bold text-sm mt-1">Friction Audit</div><div class="text-xs text-text/70 mt-1">Add 3 steps of friction to your biggest distraction; remove 2 steps from your top good habit. Find your "piano lid."</div></div>
    <div class="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-text"><div class="text-xs font-black uppercase text-cyan-400">Day 3 & 4</div><div class="font-bold text-sm mt-1">Prime & Stack</div><div class="text-xs text-text/70 mt-1">Write one implementation intention and stack it after an existing habit; make the cue visible.</div></div>
    <div class="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-text"><div class="text-xs font-black uppercase text-amber-400">Day 5 & 6</div><div class="font-bold text-sm mt-1">2-Minute Execute & Track</div><div class="text-xs text-text/70 mt-1">Run the habit for 2 minutes, mark the chain (Franklin-style), add an immediate reward every time.</div></div>
    <div class="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-text"><div class="text-xs font-black uppercase text-indigo-400">Day 7</div><div class="font-bold text-sm mt-1">Contract & Review</div><div class="text-xs text-text/70 mt-1">Sign a 1-week habit contract with someone (commitment device); do the weekly Reset Ritual.</div></div>
  </div>
</div>

---

## 🧘 Reflection: Your Pilot's Debrief

> [!TIP]
> 1. **Anecdote check — which one are you?** Are you the cyclist stacking 1% gains, the exhausted dieter relying on willpower, or the piano player with the lid closed? Redesign for one concrete system today.
> 2. **Environment, not willpower:** Point to one choice you made this week that was really your environment deciding for you. Was it the good or bad loop?
> 3. **The throttle:** What's one extra step you could add to a bad habit, and one step you could remove from a good one?
> 4. **Cruise phase:** Are you on a plateau right now? What evidence would tell you it's working, even though results lag — and how does Lally's 66 days reframe your impatience?
> 5. **Judge the system:** When you last "failed" a goal, did you abandon the system or just miss a rep? Which one actually costs you compounding?

---

## 🎯 Active Recall Quiz

<div class="bg-gradient-to-br from-slate-900 to-teal-950 p-8 sm:p-12 rounded-[2.5rem] shadow-2xl border border-white/10 my-10 relative overflow-hidden text-white not-prose">
  <div class="absolute -right-20 -top-20 opacity-5 pointer-events-none"><svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg></div>
  <div class="relative z-10 space-y-4">
    <details class="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors">
      <summary class="flex items-center font-bold p-5 cursor-pointer text-white list-none [&::-webkit-details-marker]:hidden"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-4 text-teal-400 group-open:rotate-90 transition-transform"><path d="m9 18 6-6-6-6"/></svg>What story birthed the 1% idea — and what's its real lesson?</summary>
      <div class="p-5 pt-0 pl-14"><div class="border-l-2 border-teal-400 pl-4 py-1 text-teal-100/90 text-sm"><b>Dave Brailsford's British cycling squad</b> — 178 world championships and 66 Olympic golds from "aggregating marginal gains" (wiping tires, washing hands, better mattresses). Lesson: a <b>system of many 1% fixes</b> beats any single big win.</div></div>
    </details>
    <details class="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors">
      <summary class="flex items-center font-bold p-5 cursor-pointer text-white list-none [&::-webkit-details-marker]:hidden"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-4 text-teal-400 group-open:rotate-90 transition-transform"><path d="m9 18 6-6-6-6"/></svg>Why is environment design superior to willpower?</summary>
      <div class="p-5 pt-0 pl-14"><div class="border-l-2 border-teal-400 pl-4 py-1 text-teal-100/90 text-sm">Willpower <b>depletes</b> (Baumeister's ego depletion) while the environment dictates your <b>default automatic choices</b> (Thaler's choice architecture). Design the easy path and your tired brain takes it without a decision.</div></div>
    </details>
    <details class="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors">
      <summary class="flex items-center font-bold p-5 cursor-pointer text-white list-none [&::-webkit-details-marker]:hidden"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-4 text-teal-400 group-open:rotate-90 transition-transform"><path d="m9 18 6-6-6-6"/></svg>What does "friction engineering" mean — and how did a piano lid demonstrate it?</summary>
      <div class="p-5 pt-0 pl-14"><div class="border-l-2 border-teal-400 pl-4 py-1 text-teal-100/90 text-sm">Adding/removing <b>steps</b> to change how automatic a behavior is. With piano lids <b>open</b>, practice time doubled with zero motivation change — the visible open lid was a cue and low friction. Good habits: minimize friction. Bad habits: maximize it.</div></div>
    </details>
    <details class="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors">
      <summary class="flex items-center font-bold p-5 cursor-pointer text-white list-none [&::-webkit-details-marker]:hidden"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-4 text-teal-400 group-open:rotate-90 transition-transform"><path d="m9 18 6-6-6-6"/></svg>What did Lally's study find about how long habits take — and what's the practical lesson?</summary>
      <div class="p-5 pt-0 pl-14"><div class="border-l-2 border-teal-400 pl-4 py-1 text-teal-100/90 text-sm">The average time to automaticity was <b>66 days</b> (range 18–254), and missing a single day barely mattered — but <b>two misses in a row</b> did. Lesson: persist through the silent flat zone; rebound after one miss before it becomes two.</div></div>
    </details>
    <details class="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors">
      <summary class="flex items-center font-bold p-5 cursor-pointer text-white list-none [&::-webkit-details-marker]:hidden"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-4 text-teal-400 group-open:rotate-90 transition-transform"><path d="m9 18 6-6-6-6"/></svg>What's the 2-Minute Rule and why is it so effective?</summary>
      <div class="p-5 pt-0 pl-14"><div class="border-l-2 border-teal-400 pl-4 py-1 text-teal-100/90 text-sm">Scale the habit until it <b>starts in under 2 minutes</b>. Habits are built by <b>frequency, not duration</b> — make starting trivial to stack reps and build the identity of showing up, daily, through the 66-day window.</div></div>
    </details>
    <details class="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors">
      <summary class="flex items-center font-bold p-5 cursor-pointer text-white list-none [&::-webkit-details-marker]:hidden"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-4 text-teal-400 group-open:rotate-90 transition-transform"><path d="m9 18 6-6-6-6"/></svg>What's the "last-mile compounding" trap — and why should you judge systems not goals?</summary>
      <div class="p-5 pt-0 pl-14"><div class="border-l-2 border-teal-400 pl-4 py-1 text-teal-100/90 text-sm">Most of 1.01<sup>365</sup>=37× is earned in the <b>final stretch</b>, so people quit just before the payoff. Judging the <b>system</b> keeps you flying through the flat zone; judging the <b>goal</b> makes you quit in it. Abandoning the system is the only real failure — not a missed rep.</div></div>
    </details>
  </div>
</div>

<Quote author="James Clear" source="The 1% Method / Die 1%-Methode">
  "Be the architect of your environment, not the victim of it."
</Quote>

<Quote author="James Clear" source="The 1% Method">
  "A goal is where you want to land. A system is the flight plan that gets you there — and keeps you there."
</Quote>

<Quote author="James Clear" source="The 1% Method">
  "Every action you take is a vote for the type of person you wish to become — and 200 votes create indisputable proof."
</Quote>

<YouTube videoId="U_bfMyxn8Zg" />
`
};
