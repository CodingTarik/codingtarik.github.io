export default {
  "id": "the-power-of-now",
  "title": "The Power of Now – Eckhart Tolle",
  "duration": "35 Min.",
  "description": "A deep dive below the surface of your mind: the ego and the watcher, the illusion of psychological time, dissolving the pain-body, and the three portals that drop you into the eternal present.",
  "content": `
<div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 p-8 sm:p-12 mb-10 shadow-2xl text-white border border-purple-500/20">

  <!-- Hero Animated SVG: The Still Pool of Awareness -->
  <div class="absolute top-1/2 right-2 sm:right-10 -translate-y-1/2 opacity-30 hover:opacity-50 transition-opacity pointer-events-none w-72 h-72 sm:w-96 sm:h-96">
    <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <defs>
        <linearGradient id="grad-now-core" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#c084fc" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#e879f9" stop-opacity="0.6"/>
        </linearGradient>
        <filter id="glow-purple" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <!-- Ripples settling to stillness -->
      <circle cx="150" cy="150" r="120" fill="none" stroke="#c084fc" stroke-width="1.5" opacity="0.4">
        <animate attributeName="r" values="90;130;90" dur="9s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.25;0.05;0.25" dur="9s" repeatCount="indefinite"/>
      </circle>
      <circle cx="150" cy="150" r="85" fill="none" stroke="#e879f9" stroke-width="1" stroke-dasharray="4 4" opacity="0.5">
        <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="40s" repeatCount="indefinite"/>
      </circle>

      <g transform="translate(150,150)">
        <circle cx="0" cy="0" r="22" fill="url(#grad-now-core)" filter="url(#glow-purple)"/>
        <circle cx="0" cy="0" r="8" fill="#ffffff"/>
      </g>
    </svg>
  </div>

  <div class="relative z-10">
    <span class="inline-block py-1 px-3 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold tracking-widest uppercase mb-6 border border-purple-500/30">Book Summary · The Anatomy of Presence</span>
    <h1 class="text-4xl sm:text-5xl font-black mb-4 leading-tight tracking-tight text-white m-0 pb-0">The Power of Now<br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-300 to-amber-200">A Guide to Spiritual Enlightenment</span></h1>
    <p class="text-xl sm:text-2xl text-purple-100/80 font-medium max-w-2xl mt-4 mb-8">by Eckhart Tolle · Over 5 Million Copies Sold</p>
    <div class="flex flex-wrap gap-3">
      <span class="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-semibold text-white/80">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7z"/></svg>
        The Watcher & The Ego
      </span>
      <span class="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-semibold text-white/80">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        Dissolving the Pain-Body
      </span>
      <span class="inline-flex items-center gap-1.5 bg-fuchsia-400/20 border border-fuchsia-400/30 rounded-full px-3 py-1 text-xs font-semibold text-fuchsia-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        The Eternal Present
      </span>
    </div>
  </div>
</div>

<p class="text-xl sm:text-2xl text-text/90 font-medium mb-8 leading-relaxed max-w-4xl">
  Imagine the mind as an ocean. On the surface, the <span class="text-primary font-bold">waves of thought</span> churn ceaselessly — regrets from the past, anxieties about the future, an endless inner commentary. Almost everyone lives their whole life on that turbulent surface. Tolle's invitation is simpler and harder than it sounds: <span class="text-primary font-bold">dive down</span>. A few meters below the waves, the water is calm, silent, and alive. That depth is the Now — and it is the only place peace has ever been.
</p>

<StatGrid>
  <Stat value="0 m" label="Surface = Mind" sub="The noisy, identified self" color="purple" />
  <Stat value="Below" label="The Depth" sub="Silent, alert awareness" color="indigo" />
  <Stat value="3" label="Portals Into Now" sub="Body · Silence · Surrender" color="rose" />
  <Stat value="∞" label="The Eternal Now" sub="The only point of existence" color="emerald" />
</StatGrid>

<Tabs>
  <Tab title="🧠 The Mind Mechanism">
    **You are not your mind.**
    <br/><br/>
    The central move of the whole book is <b>dis-identification</b> — realizing that the thinking voice is not who you are.
    - **The voice in the head:** an incessant commentary driven by memory (past) and projection (future). Most of it is noise, and most people take it personally.
    - **The ego:** the false self formed by identifying with thoughts — your job, opinions, possessions, role, "your story."
    - **The watcher / observer:** the silent, unconditioned presence that is *aware of* thoughts without judging or joining them. This is your doorway to presence.
    <br/><br/>
    Enlightenment isn't the absence of thought — it's the <b>space</b> between thoughts, and the recognition that you are that space.
  </Tab>
  <Tab title="📚 How to Read This Dive">
    Don't study this summary like a textbook — <b>do</b> it. Each section is a level of the dive:
    1. **Surface — The Wave-Machine:** recognize the ego and watch the thinker.
    2. **Dive 1 — Time:** see that only the Now is real.
    3. **Dive 2 — The Pain-Body:** witness emotional pain instead of feeding it.
    4. **Dive 3 — The Portals:** inner body, silence, surrender.
    <br/><br/>
    Read one level, then close the page and sit with it. Wherever you notice the inner voice, step back and watch it — that stepping back is the whole practice.
  </Tab>
  <Tab title="⚠️ Surrender Is Not Resignation">
    > [!WARNING]
    > Surrender is often misunderstood as passive giving-up — it is the opposite. To surrender to the present is to stop fighting <em>what is</em>. It removes the inner resistance and the emotional charge. Then, from clarity, you act decisively. Surrender to the moment, not to the situation's outcome — you accept the present fully and still do everything to change what can be changed. Accepting a storm and steering through it is not resignation.
  </Tab>
  <Tab title="👤 Who This Is For">
    - 🧠 **Over-thinkers** trapped in rumination and anxious planning
    - 😮‍💨 **Chronic strivers** who've deferred happiness to a future milestone
    - 💔 **People carrying old emotional pain** (resentment, grief, anger) that keeps re-awakening
    - 🧘 **Meditators & seekers** wanting the essence without the dogma
    - 🆕 **Anyone** who suspects their inner voice is not them
  </Tab>
</Tabs>

---

## 🌊 Level 0 — The Surface: The Wave-Machine of the Mind

You can't escape the mind by fighting it — thinking about not thinking is still thinking. The path begins with a single, simple shift in <b>identity</b>:

<!-- SVG: The Wave vs The Depth -->
<div class="not-prose my-10 bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
  <svg viewBox="0 0 720 260" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
    <defs>
      <linearGradient id="oceanWater" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#a78bfa" stop-opacity="0.35"/>
        <stop offset="100%" stop-color="#312e81" stop-opacity="0.2"/>
      </linearGradient>
      <linearGradient id="deepStill" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#312e81" stop-opacity="0.12"/>
        <stop offset="100%" stop-color="#1e1b4b" stop-opacity="0.25"/>
      </linearGradient>
    </defs>
    <!-- Water body -->
    <rect x="0" y="60" width="720" height="200" fill="url(#oceanWater)"/>
    <rect x="0" y="60" width="720" height="200" fill="url(#deepStill)" opacity="0.8"/>
    <!-- Surface wave line -->
    <path d="M0 70 Q 30 50 60 70 T 120 70 T 180 70 T 240 70 T 300 70 T 360 70 T 420 70 T 480 70 T 540 70 T 600 70 T 660 70 T 720 70" fill="none" stroke="#e879f9" stroke-width="4" stroke-linecap="round">
      <animate attributeName="d" values="M0 70 Q 30 50 60 70 T 120 70 T 180 70 T 240 70 T 300 70 T 360 70 T 420 70 T 480 70 T 540 70 T 600 70 T 660 70 T 720 70;M0 70 Q 30 90 60 70 T 120 70 T 180 70 T 240 70 T 300 70 T 360 70 T 420 70 T 480 70 T 540 70 T 600 70 T 660 70 T 720 70;M0 70 Q 30 50 60 70 T 120 70 T 180 70 T 240 70 T 300 70 T 360 70 T 420 70 T 480 70 T 540 70 T 600 70 T 660 70 T 720 70" dur="5s" repeatCount="indefinite"/>
    </path>
    <!-- Surface label -->
    <text x="360" y="30" text-anchor="middle" font-size="13" font-weight="800" fill="#e879f9">THE SURFACE — WAVES OF THOUGHT (ego, time, mind)</text>
    <text x="360" y="50" text-anchor="middle" font-size="9" fill="currentColor" opacity="0.6">regret · anxiety · commentary · identity</text>
    <!-- Thought bubbles at surface -->
    <text x="90" y="100" font-size="10" fill="currentColor" opacity="0.5">"Why did I say that?"</text>
    <text x="430" y="120" font-size="10" fill="currentColor" opacity="0.5">"What if tomorrow fails?"</text>
    <!-- Diving arrow -->
    <g transform="translate(580,120)">
      <animateTransform attributeName="transform" type="translate" values="580,120;580,150;580,120" dur="3s" repeatCount="indefinite"/>
      <path d="M0 0 L-22 34 L22 34 Z" fill="#c084fc"/>
    </g>
    <!-- Depth label -->
    <text x="170" y="215" text-anchor="middle" font-size="13" font-weight="800" fill="#c084fc">THE DEPTH — SILENT AWARENESS (the Now)</text>
    <text x="170" y="235" text-anchor="middle" font-size="9" fill="currentColor" opacity="0.6">watcher · presence · peace</text>
    <!-- Still beacons in the depth -->
    <g fill="#c084fc">
      <circle cx="60" cy="200" r="5" opacity="0.8"><animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite"/></circle>
      <circle cx="120" cy="230" r="4" opacity="0.7"/>
      <circle cx="210" cy="205" r="5" opacity="0.8"><animate attributeName="opacity" values="0.4;1;0.4" dur="4s" repeatCount="indefinite"/></circle>
    </g>
    <!-- Labels on surface bubbles -->
    <text x="120" y="140" text-anchor="middle" font-size="9" font-weight="700" fill="#ef4444">"Why did I say that?"</text>
    <text x="430" y="150" text-anchor="middle" font-size="9" font-weight="700" fill="#f59e0b">"What if tomorrow fails?"</text>
  </svg>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
    <div class="p-4 rounded-2xl bg-slate-500/10 border border-slate-500/30">
      <div class="font-bold text-sm text-slate-500 dark:text-slate-400 mb-1">🌊 Surface identity (the ego)</div>
      <p class="text-xs text-text/70 m-0">"I am my thoughts, my job, my opinions, my pain, my story." Everything on the surface is borrowed from time — memory or imagination. It's why the ego constantly needs problems: they give it a self to be.</p>
    </div>
    <div class="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/30">
      <div class="font-bold text-sm text-purple-500 mb-1">🧊 Depth identity (the watcher)</div>
      <p class="text-xs text-text/70 m-0">"I am the one who is <em>aware of</em> thoughts." Silent, alert, unconditioned, always present. The watcher doesn't need an identity — it simply is. Resting as the watcher is freedom from the waves.</p>
    </div>
  </div>
</div>

### The practice: Watch the Thinker

Step back and listen to the voice in your head. Watch it as if it were another person talking. Do not judge it, do not argue with it — just observe. In that moment of observation, something shifts: you are no longer the voice; you are the one noticing it. Tolle calls this "the beginning of the end of involuntary and compulsive thinking" — and it's the master key to everything that follows.

> [!NOTE]
> **You cannot stop a wave by pushing it.** When a thought or emotion arises, don't fight it, don't identify with it, don't judge it. Let it rise, let it be, let it go. Your awareness of the wave is the stillness beneath it.

---

## ⏳ Dive 1 — Time: Only the Now Is Real

The ego lives in time; presence lives in the Now. Tolle's most radical claim: **nothing has ever happened in the past — it happened in the Now. Nothing will ever happen in the future — it will happen in the Now.** The past is only a memory arising now; the future only an imagined now.

<!-- SVG: Time vs the Now -->
<div class="not-prose my-10 bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <!-- Timeline line -->
      <line x1="30" y1="150" x2="370" y2="150" stroke="currentColor" stroke-width="2" opacity="0.3"/>
      <!-- Past label -->
      <rect x="30" y="90" width="140" height="55" rx="12" fill="#ef4444" fill-opacity="0.12" stroke="#ef4444" stroke-width="1.5"/>
      <text x="100" y="112" text-anchor="middle" font-size="11" font-weight="800" fill="#ef4444">PAST</text>
      <text x="100" y="132" text-anchor="middle" font-size="9" fill="#ef4444" opacity="0.9">regret · guilt · memory</text>
      <!-- Future label -->
      <rect x="230" y="90" width="140" height="55" rx="12" fill="#f59e0b" fill-opacity="0.12" stroke="#f59e0b" stroke-width="1.5"/>
      <text x="300" y="112" text-anchor="middle" font-size="11" font-weight="800" fill="#f59e0b">FUTURE</text>
      <text x="300" y="132" text-anchor="middle" font-size="9" fill="#f59e0b" opacity="0.9">anxiety · fear · projection</text>
      <!-- arrow of time -->
      <path d="M170 150 L230 150" stroke="currentColor" stroke-width="2" opacity="0.3"/>
      <path d="M230 150 l-8 -4 l0 8 z" fill="currentColor" opacity="0.3"/>
      <!-- The Now -- bright, condensed point -->
      <circle cx="200" cy="150" r="20" fill="#c084fc" opacity="0.25"/>
      <circle cx="200" cy="150" r="11" fill="#c084fc">
        <animate attributeName="r" values="9;13;9" dur="2.5s" repeatCount="indefinite"/>
      </circle>
      <text x="200" y="205" text-anchor="middle" font-size="11" font-weight="900" fill="#c084fc">THE NOW</text>
      <text x="200" y="222" text-anchor="middle" font-size="9" fill="currentColor" opacity="0.6">the only point that is ever real</text>
    </svg>
    <div>
      <h4 class="text-lg font-black text-text mt-0 mb-2">Clock Time vs. Psychological Time</h4>
      <p class="text-sm text-text/70 mb-3">Clock time is practical — meeting at 3pm, learning a skill. Use it fully. <b>Psychological time</b> is the ego's compulsive past/future obsession that accompanies the task — the guilt over the old email, the dread of next week's review. <b>Getting unstuck on the horizontal <em>now</em> doesn't mean dropping the vertical — it means dropping the horizontal.</b></p>
      <div class="bg-secondary/5 border border-border rounded-xl p-3 text-sm text-text/70 mb-2">When you're doing a task on clock time, ask: <em>"Is there any joy, ease, or presence in what I'm doing right now?"</em> If not, you're leaking into psychological time — you're phoning it in from a future "when it's done."</div>
      <div class="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-sm text-text/80"><b>The test of time-trap:</b> anxiety, stress, and worry are always about a past or future that isn't here. The single question <em>"What is the problem <b>right now</b>, this second?"</em> collapses almost all of them. The only problems that survive it are the ones you can act on — here, now.</div>
    </div>
  </div>
</div>

<KeyTakeaway>Dive 1 in one line: You've never been anywhere but the Now — the past and future are just thoughts appearing <em>now</em>. Live in clock time, never in psychological time.</KeyTakeaway>

---

## ⏳ Dive 2 — The Pain-Body: The Emotional Ghost

Some emotional pain is processed and dissolves; the rest gets stored. Tolle calls this accumulation the <b>pain-body</b> — an invisible field of old hurt (grief, anger, resentment, anxiety) that lives in you, dormant for long stretches, then awakens. When it awakens it is hungry: it feeds on any drama, argument, self-pity, or re-trigger that produces more pain. It is, in a sense, a semi-autonomous entity that wants you to suffer.

\`\`\`mermaid
graph TD
    A[Something triggers old pain] --> B{How do I meet it?}
    B -->|Join it: I feel hurt/angry, everyone wrongs me| C[Pain-body feeds → drama, arguments, self-pity]
    B -->|Witness it: I notice anger arising and do not become it| D[Awareness dissolves the pain-body]
    C --> E[Pain compounds; patterns repeat]
    D --> F[Presence grows; trigger loses power]
    style C fill:#ef4444,stroke:#fff,color:#fff
    style D fill:#c084fc,stroke:#fff,color:#fff
\`\`\`

### The two ways out

- **Witness it without judgment.** When the pain-body awakens, resist the urge to identify. Feel the energy in your body, watch the emotion as if it weren't "yours," and refuse to give it a story. Awareness is to the pain-body what sunlight is to a shadow — it dissolves.
- **Don't feed it.** The pain-body needs drama to survive. It loves it when you pick the fight, rehearse the grievance, wallow in self-pity. Deny it fuel, and it starves.

> [!WARNING]
> **Almost everyone has one — the shadow-self of accumulated hurt.** A partner who "pushes your buttons" is often triggering your pain-body, not really harming you. When you see the other person's pain-body react to yours, you can both lose instantly — or you can be the one who doesn't join the dance. The one who witnesses instead of reacting is the one who grows. Diagnose: when the reaction is bigger than the event, it's the pain-body speaking.

<KeyTakeaway>Dive 2 in one line: Old pain is stored, not gone — and it wakes up hungry for drama. Never argue with it, never believe it: witness it with full attention and it dissolves.</KeyTakeaway>

---

## 🚪 Dive 3 — The Three Portals Into the Now

When the mind won't quiet, Tolle offers three concrete doors you can walk through at any moment — no meditation years required:

<div class="not-prose my-10 grid grid-cols-1 md:grid-cols-3 gap-4">
  <div class="bg-gradient-to-b from-purple-500/10 to-transparent border border-purple-500/30 rounded-3xl p-6 relative overflow-hidden hover:-translate-y-1 transition-transform">
    <div class="text-3xl mb-3">🫁</div>
    <h3 class="font-black text-lg text-text mt-0 mb-2">Portal 1 — The Inner Body</h3>
    <p class="text-sm text-text/80 mb-3">Redirect attention from mental chatter to the felt sense of being alive <em>inside</em> the body — the subtle energy field in your hands, feet, stomach.</p>
    <div class="bg-purple-500/10 border border-purple-500/20 rounded-xl p-3 text-xs text-text/80">
      <b>Try now:</b> Close your eyes. Feel the aliveness in your right hand. Not the skin — the inner warmth, the subtle current. Stay with it for 30 seconds. Your mind has nowhere to run; it's quiet. That is presence.
    </div>
  </div>
  <div class="bg-gradient-to-b from-fuchsia-500/10 to-transparent border border-fuchsia-500/30 rounded-3xl p-6 relative overflow-hidden hover:-translate-y-1 transition-transform">
    <div class="text-3xl mb-3">🔇</div>
    <h3 class="font-black text-lg text-text mt-0 mb-2">Portal 2 — Silence & Space</h3>
    <p class="text-sm text-text/80 mb-3">Listen to the silence <em>between</em> sounds; notice the space between objects, between your thoughts.</p>
    <div class="bg-fuchsia-500/10 border border-fuchsia-500/20 rounded-xl p-3 text-xs text-text/80">
      <b>Try now:</b> For the next 20 seconds, let each sound arrive and fall — and attend to the stillness it leaves behind. The gaps between sounds are not empty; they are presence. The more you notice space, the less the forms in it can disturb you.
    </div>
  </div>
  <div class="bg-gradient-to-b from-amber-500/10 to-transparent border border-amber-500/30 rounded-3xl p-6 relative overflow-hidden hover:-translate-y-1 transition-transform">
    <div class="text-3xl mb-3">🤲</div>
    <h3 class="font-black text-lg text-text mt-0 mb-2">Portal 3 — Surrender</h3>
    <p class="text-sm text-text/80 mb-3">Give the present moment a full inner "yes" — stop resisting what is.</p>
    <div class="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3 text-xs text-text/80">
      <b>Try now:</b> Pick up a minor irritation from today (the traffic, the cold coffee). Inwardly say <em>"Okay."</em> Fully — not grudgingly. Surrender to the <em>fact</em> while you still act on what you can change. The resistance was the suffering; the moment it drops, you're already in the Now.
    </div>
  </div>
</div>

### Acceptance, Enjoyment, Enthusiasm — the choice of presence

Tolle says you have three ways to relate to the present moment, in ascending order of depth:</p>
<div class="not-prose my-8 space-y-2.5 text-sm text-text/80">
  <div class="flex items-center gap-3 bg-card border border-border rounded-xl p-3"><span class="w-8 h-8 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center font-black shrink-0">1</span><span><b>Accept it</b> — "this is what is." Full inner peace with the circumstance.</span></div>
  <div class="flex items-center gap-3 bg-card border border-border rounded-xl p-3"><span class="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center font-black shrink-0">2</span><span><b>Enjoy it</b> — find the aliveness and beauty in whatever you're doing now.</span></div>
  <div class="flex items-center gap-3 bg-card border border-border rounded-xl p-3"><span class="w-8 h-8 rounded-full bg-purple-500/20 text-purple-500 flex items-center justify-center font-black shrink-0">3</span><span><b>Be enthusiastic about it</b> — consciously channel energy into what is, with joy.</span></div>
  <p class="text-xs text-text/60 px-1">If you can't accept, and you can't enjoy, then move — leave the situation. But don't stay and suffer out of comfort. Presence never means tolerating harm.</p>
</div>

---

## 🧘 The 7-Day Dive: Toward the Present

One practice per day, a little deeper each time:

<div class="my-8 not-prose bg-gradient-to-br from-slate-900 to-purple-950 text-white rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl">
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
    <div class="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col justify-between hover:bg-white/10 transition-colors">
      <div><div class="text-[10px] font-black uppercase text-purple-400 tracking-wider">Day 1</div><div class="font-bold text-sm text-white mt-1 mb-1">Watch the Thinker</div><p class="text-[11px] text-slate-300">5× today, notice your inner voice without judging it. You are the watcher.</p></div>
      <div class="mt-3 text-[10px] text-slate-400 border-t border-white/10 pt-1.5 font-mono">Level 0</div>
    </div>
    <div class="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col justify-between hover:bg-white/10 transition-colors">
      <div><div class="text-[10px] font-black uppercase text-fuchsia-400 tracking-wider">Day 2</div><div class="font-bold text-sm text-white mt-1 mb-1">The Now Collapse</div><p class="text-[11px] text-slate-300">Whenever worry rises, ask: "What is the problem right now, this second?"</p></div>
      <div class="mt-3 text-[10px] text-slate-400 border-t border-white/10 pt-1.5 font-mono">Dive 1</div>
    </div>
    <div class="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col justify-between hover:bg-white/10 transition-colors">
      <div><div class="text-[10px] font-black uppercase text-amber-400 tracking-wider">Day 3 & 4</div><div class="font-bold text-sm text-white mt-1 mb-1">Inner Body Anchoring</div><p class="text-[11px] text-slate-300">2 min before sleep: feel the energy field in your hands; let the mind go quiet.</p></div>
      <div class="mt-3 text-[10px] text-slate-400 border-t border-white/10 pt-1.5 font-mono">Portal 1</div>
    </div>
    <div class="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col justify-between hover:bg-white/10 transition-colors">
      <div><div class="text-[10px] font-black uppercase text-emerald-400 tracking-wider">Day 5, 6 & 7</div><div class="font-bold text-sm text-white mt-1 mb-1">Pain-Body Witness</div><p class="text-[11px] text-slate-300">When anger/sadness arises, watch it as a witness — don't join it, don't feed it a story.</p></div>
      <div class="mt-3 text-[10px] text-slate-400 border-t border-white/10 pt-1.5 font-mono">Dive 2 & 3</div>
    </div>
  </div>
</div>

---

## 🧘 Reflection: Questions to Sit With

> [!TIP]
> 1. **Who's talking?** How often today did you believe a thought ("I'm a failure," "they're wrong") as if it were fact? Can you observe it next time?
> 2. **Where are you living?** Which do you spend more time in — clock time (doing) or psychological time (guilt/worry)? What would doing-only feel like?
> 3. **Your pain-body:** When did you last have a reaction bigger than the event? What was the old wound it re-opened? Could you have witnessed instead of joined?
> 4. **The portals:** Which of the three doors (body, silence, surrender) felt most accessible when you tried it? Why?
> 5. **Accept or act?** Is there a situation you're currently fighting that you could <em>accept</em> — and one you're tolerating that you should <em>leave</em>? Which is which?

---

## 🎯 Active Recall Quiz

Answer before revealing — and after each answer, notice: who just retrieved it? The watcher.

<div class="bg-gradient-to-br from-slate-900 to-purple-950 p-8 sm:p-12 rounded-[2.5rem] shadow-2xl border border-white/10 my-10 relative overflow-hidden text-white not-prose">
  <div class="absolute -right-20 -top-20 opacity-5 pointer-events-none">
    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
  </div>
  <div class="relative z-10 space-y-4">
    <details class="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors">
      <summary class="flex items-center font-bold p-5 cursor-pointer text-white list-none [&::-webkit-details-marker]:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-4 text-purple-400 group-open:rotate-90 transition-transform"><path d="m9 18 6-6-6-6"/></svg>
        What is the single most important move of the entire book?
      </summary>
      <div class="p-5 pt-0 pl-14">
        <div class="border-l-2 border-purple-400 pl-4 py-1 text-purple-100/90 text-sm">
          <b>Dis-identification from the mind.</b> Realize you are not the thinking voice but the one who <em>watches</em> it. Enlightenment is the recognition that you are the space between thoughts, not the thoughts.
        </div>
      </div>
    </details>

    <details class="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors">
      <summary class="flex items-center font-bold p-5 cursor-pointer text-white list-none [&::-webkit-details-marker]:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-4 text-purple-400 group-open:rotate-90 transition-transform"><path d="m9 18 6-6-6-6"/></svg>
        What's the difference between clock time and psychological time?
      </summary>
      <div class="p-5 pt-0 pl-14">
        <div class="border-l-2 border-purple-400 pl-4 py-1 text-purple-100/90 text-sm">
          <b>Clock time</b> = practical scheduling; use it fully. <b>Psychological time</b> = the ego's past-regret and future-anxiety attached to the task. Suffering lives in psychological time; peace only in the present.
        </div>
      </div>
    </details>

    <details class="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors">
      <summary class="flex items-center font-bold p-5 cursor-pointer text-white list-none [&::-webkit-details-marker]:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-4 text-purple-400 group-open:rotate-90 transition-transform"><path d="m9 18 6-6-6-6"/></svg>
        What is the pain-body, and how do you dissolve it?
      </summary>
      <div class="p-5 pt-0 pl-14">
        <div class="border-l-2 border-purple-400 pl-4 py-1 text-purple-100/90 text-sm">
          The <b>accumulated emotional pain</b> stored in your energy field. It wakes hungry for drama. Dissolve it by <b>witnessing it without judgment</b> and <b>refusing to feed it</b> a story — awareness dissolves it like sunlight dissolves a shadow.
        </div>
      </div>
    </details>

    <details class="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors">
      <summary class="flex items-center font-bold p-5 cursor-pointer text-white list-none [&::-webkit-details-marker]:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-4 text-purple-400 group-open:rotate-90 transition-transform"><path d="m9 18 6-6-6-6"/></svg>
        Name the three portals into the Now.
      </summary>
      <div class="p-5 pt-0 pl-14">
        <div class="border-l-2 border-purple-400 pl-4 py-1 text-purple-100/90 text-sm">
          <b>1. The inner body</b> — feel the aliveness inside you. <b>2. Silence & space</b> — attend to the gaps between sounds/thoughts. <b>3. Surrender</b> — a full inner "yes" to what is.
        </div>
      </div>
    </details>

    <details class="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors">
      <summary class="flex items-center font-bold p-5 cursor-pointer text-white list-none [&::-webkit-details-marker]:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-4 text-purple-400 group-open:rotate-90 transition-transform"><path d="m9 18 6-6-6-6"/></svg>
        Why is surrender NOT resignation — and what do you do when you can't accept?
      </summary>
      <div class="p-5 pt-0 pl-14">
        <div class="border-l-2 border-purple-400 pl-4 py-1 text-purple-100/90 text-sm">
          Surrender drops inner resistance but keeps action — you accept "what is," then act decisively. If you can't accept and can't enjoy, <b>move / leave</b>. Presence never means tolerating harm; it means not suffering internally while you act.
        </div>
      </div>
    </details>
  </div>
</div>

---

## 🗺️ The Dive Map: Your Quick Reference

<div class="not-prose my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
  <div class="bg-gradient-to-b from-purple-500/10 to-transparent border border-purple-500/30 p-5 rounded-2xl">
    <h4 class="font-black text-sm text-purple-500 mb-2">The Surface → Depth Roadmap</h4>
    <ul class="space-y-2 text-sm text-text/75 list-none pl-0 m-0">
      <li class="flex gap-2"><span class="text-purple-400 font-black">▸</span><span><b>Level 0:</b> Watch the thinker — you are not the mind</span></li>
      <li class="flex gap-2"><span class="text-purple-400 font-black">▸</span><span><b>Dive 1:</b> Only the Now is real; shed psychological time</span></li>
      <li class="flex gap-2"><span class="text-purple-400 font-black">▸</span><span><b>Dive 2:</b> Witness the pain-body; never feed it drama</span></li>
      <li class="flex gap-2"><span class="text-purple-400 font-black">▸</span><span><b>Dive 3:</b> Enter the Now via body, silence, or surrender</span></li>
    </ul>
  </div>
  <div class="bg-gradient-to-b from-amber-500/10 to-transparent border border-amber-500/30 p-5 rounded-2xl">
    <h4 class="font-black text-sm text-amber-500 mb-2">Your Relationship to the Now</h4>
    <ul class="space-y-2 text-sm text-text/75 list-none pl-0 m-0">
      <li class="flex gap-2"><span class="text-amber-400 font-black">1.</span><span><b>Accept</b> what is — the doorway to peace</span></li>
      <li class="flex gap-2"><span class="text-amber-400 font-black">2.</span><span><b>Enjoy</b> what is — find its aliveness</span></li>
      <li class="flex gap-2"><span class="text-amber-400 font-black">3.</span><span><b>Be enthusiastic</b> about it — channel joy into it</span></li>
      <li class="flex gap-2"><span class="text-amber-400 font-black">→</span><span><b>Else:</b> leave — but don't stay and suffer</span></li>
    </ul>
  </div>
</div>

<Quote author="Eckhart Tolle" source="The Power of Now">
  "Realize deeply that the present moment is all you have. Make the NOW the primary focus of your life."
</Quote>

<Quote author="Eckhart Tolle" source="The Power of Now">
  "You are the sky. Everything else — it's just the weather."
</Quote>

<YouTube videoId="foU1qgO586M" />
`
};
