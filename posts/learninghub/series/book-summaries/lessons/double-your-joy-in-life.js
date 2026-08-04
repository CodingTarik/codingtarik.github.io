export default {
  "id": "double-your-joy-in-life",
  "title": "Double Your Joy in Life – Martin Wehrle",
  "duration": "30 Min.",
  "description": "A joy operating system: run the energy audit, prune the three thieves of joy, flip from an external to an internal locus of control, and schedule non-negotiable joy anchors.",
  "content": `
<div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-fuchsia-950 to-slate-900 p-8 sm:p-12 mb-10 shadow-2xl text-white border border-fuchsia-500/20">

  <!-- Hero Animated SVG: The Joy Meter & Sunburst -->
  <div class="absolute top-1/2 right-2 sm:right-10 -translate-y-1/2 opacity-30 hover:opacity-50 transition-opacity pointer-events-none w-72 h-72 sm:w-96 sm:h-96">
    <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <defs>
        <linearGradient id="grad-joy-core" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#e879f9" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#d946ef" stop-opacity="0.6"/>
        </linearGradient>
        <filter id="glow-joy" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <!-- Joy meter ring -->
      <g transform="translate(150,150)">
        <circle cx="0" cy="0" r="118" fill="none" stroke="#e879f9" stroke-width="2" stroke-dasharray="6 10" opacity="0.4"/>
        <path d="M0 -118 A 118 118 0 1 1 -118 0" fill="none" stroke="#fbbf24" stroke-width="3" stroke-linecap="round" opacity="0.7">
          <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite"/>
        </path>
      </g>

      <!-- Sunburst rays -->
      <g transform="translate(150,150)">
        <g opacity="0.5"><animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="22s" repeatCount="indefinite"/>
          <line x1="0" y1="-105" x2="0" y2="-55" stroke="#e879f9" stroke-width="2"/>
          <line x1="105" y1="0" x2="55" y2="0" stroke="#fbbf24" stroke-width="2"/>
          <line x1="0" y1="105" x2="0" y2="55" stroke="#e879f9" stroke-width="2"/>
          <line x1="-105" y1="0" x2="-55" y2="0" stroke="#fbbf24" stroke-width="2"/>
        </g>
        <circle cx="0" cy="0" r="26" fill="url(#grad-joy-core)" filter="url(#glow-joy)"/>
        <text x="0" y="6" text-anchor="middle" fill="#ffffff" font-weight="900" font-size="17">2x</text>
      </g>
    </svg>
  </div>

  <div class="relative z-10">
    <span class="inline-block py-1 px-3 rounded-full bg-fuchsia-500/20 text-fuchsia-300 text-xs font-bold tracking-widest uppercase mb-6 border border-fuchsia-500/30">Book Summary · The Joy Operating System</span>
    <h1 class="text-4xl sm:text-5xl font-black mb-4 leading-tight tracking-tight text-white m-0 pb-0">Double Your Joy in Life<br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-rose-200 to-amber-300">The Daily Manual for a Fuller Life</span></h1>
    <p class="text-xl sm:text-2xl text-fuchsia-100/80 font-medium max-w-2xl mt-4 mb-8">by Martin Wehrle · German Original: "Dieses Buch verändert für immer Ihr Leben"</p>
    <div class="flex flex-wrap gap-3">
      <span class="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-semibold text-white/80">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 1 3-3h7z"/></svg>
        The Energy Audit
      </span>
      <span class="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-semibold text-white/80">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        Internal Locus of Control
      </span>
      <span class="inline-flex items-center gap-1.5 bg-fuchsia-400/20 border border-fuchsia-400/30 rounded-full px-3 py-1 text-xs font-semibold text-fuchsia-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        Joy Anchors, Protected
      </span>
    </div>
  </div>
</div>

<p class="text-xl sm:text-2xl text-text/90 font-medium mb-8 leading-relaxed max-w-4xl">
  Here's the uncomfortable truth Martin Wehrle built a career on: <span class="text-primary font-bold">you are probably running on autopilot</span>. Tolerating energy vampires, chasing approval that was never yours to need, deferring happiness to a future "when everything's perfect." Joy doesn't multiply on its own — it leaks out through unplugged holes. This is the manual for <span class="text-primary font-bold">plugging the leaks and protecting the sources</span> until daily joy actually doubles.
</p>

<StatGrid>
  <Stat value="2x" label="Joy Multiplier" sub="The realistic daily target" color="fuchsia" />
  <Stat value="1" label="Internal Locus" sub="Where real control lives" color="amber" />
  <Stat value="0" label="Energy Vampires" sub="Prune or protect against them" color="rose" />
  <Stat value="Daily" label="Joy Anchors" sub="Non-negotiable micro-pleasures" color="emerald" />
</StatGrid>

<Tabs>
  <Tab title="🧠 Why We Block Our Own Joy">
    **Joy isn't stolen by the world — it's mostly self-sabotaged in three ways.**
    <br/><br/>
    - <b>The Approval Trap:</b> conditioning your self-worth on others' opinions. Every "like," title, and compliment becomes a drug you can't stop needing — and its absence can ruin your day regardless of reality.
    - <b>The Perfectionism Illusion:</b> deferring satisfaction until everything is flawless. Since perfect never arrives, happiness is forever postponed.
    - <b>The Energy Vampires:</b> chronic complainers, toxic environments, and joyless obligations that silently drain your emotional battery.
    <br/><br/>
    Remove these three and you don't just feel better — you <em>recover</em> years of stolen vitality.
  </Tab>
  <Tab title="📚 How to Use This Manual">
    Run the <b>Joy OS in three steps</b>:
    1. <b>Audit the ledger:</b> list your daily credits (joy anchors) and debits (drains). Plug the biggest leak first.
    2. <b>Flip the locus:</b> move self-worth from external approval to internal standards.
    3. <b>Protect the anchors:</b> schedule joy like a meeting you can't cancel.
    <br/><br/>
    Then use the 7-day build: one small, concrete action each day that moves the battery from draining to charging.
  </Tab>
  <Tab title="⚠️ Joy Is Not Denial">
    > [!WARNING]
    > Doubling joy is not about pretending problems don't exist or never saying yes to hard things. Real, robust joy coexists with difficulty: you protect your battery <em>while</em> meeting obligations, and you choose an internal locus for what you can control. It's the difference between running from hard things and <b>deciding which hard things are worth your energy</b>. Avoidance shrinks a life; invested energy expands one.
  </Tab>
  <Tab title="👤 Who This Is For">
    - 🔋 **The chronically depleted** — always busy, always tired, rarely happy
    - 🧿 **Approval-chasers** whose mood lives in others' reactions
    - 🧕 **People-pleasers** who can't say no and quietly resent it
    - 🎨 **Souls who've shelved their hobbies** "until I have time"
    - 🆕 **Anyone ready to stop outsourcing their happiness**
  </Tab>
</Tabs>

---

## 🔋 The Joy Balance Sheet: Credits & Debits

Think of your day like a personal energy account. Every person, task, and habit either <b>deposits</b> joy or <b>withdraws</b> it. High joy isn't just adding pleasant things — it's ruthlessly plugging the leaks, because a leaking bucket never fills no matter how much you pour in.

<!-- SVG: The Energy Battery -->
<div class="not-prose my-10 bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <svg viewBox="0 0 420 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <!-- battery body -->
      <rect x="30" y="70" width="360" height="100" rx="20" fill="none" stroke="currentColor" stroke-width="3" opacity="0.3"/>
      <rect x="400" y="95" width="16" height="50" rx="4" fill="currentColor" opacity="0.3"/>
      <!-- charge bars -->
      <rect x="45" y="85" width="60" height="70" rx="8" fill="#e879f9"><animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite"/></rect>
      <rect x="115" y="85" width="60" height="70" rx="8" fill="#e879f9" opacity="0.85"/>
      <rect x="185" y="85" width="60" height="70" rx="8" fill="#c026d3" opacity="0.75"/>
      <rect x="255" y="85" width="60" height="70" rx="8" fill="#fbbf24" opacity="0.5"/>
      <rect x="325" y="85" width="40" height="70" rx="8" fill="#ef4444" opacity="0.35"/>
      <text x="210" y="55" text-anchor="middle" font-size="12" font-weight="800" fill="currentColor" opacity="0.6">YOUR DAILY JOY BATTERY</text>
      <!-- drain leak tap -->
      <g transform="translate(210,180)">
        <text x="0" y="0" text-anchor="middle" font-size="9" font-weight="700" fill="#ef4444">leaks: the approval trap · perfectionism · energy vampires · comparison</text>
        <line x1="-150" y1="-12" x2="-60" y2="-12" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.5"/>
        <line x1="60" y1="-12" x2="150" y2="-12" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.5"/>
      </g>
    </svg>
    <div class="space-y-3">
      <div class="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
        <div class="font-bold text-sm text-emerald-500 mb-1 flex items-center gap-2"><span class="text-lg">➕</span> Credits — joy anchors</div>
        <p class="text-xs text-text/70 m-0">Things that <b>recharge</b> you: the creative hobby, the long walk, the deep conversation, the un-rushed coffee. These are not luxuries — they're the inflow side of the ledger.</p>
      </div>
      <div class="p-4 rounded-2xl bg-red-500/10 border border-red-500/30">
        <div class="font-bold text-sm text-red-500 mb-1 flex items-center gap-2"><span class="text-lg">➖</span> Debits — joy drains</div>
        <p class="text-xs text-text/70 m-0">Things that <b>drain</b> you: chronic complaining, guilt-fueled obligations, doomscrolling, people who exhaust you, and perfection-chasing that never pays.</p>
      </div>
      <div class="p-4 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/30">
        <div class="font-bold text-sm text-fuchsia-500 mb-1">🔧 The rule</div>
        <p class="text-xs text-text/70 m-0">You can't double joy by <em>only</em> adding credits. First <b>plug the biggest leak</b> — then the credits actually accumulate. One eliminated vampire is worth three new hobbies.</p>
      </div>
    </div>
  </div>
</div>

---

## 🧿 The Three Thieves of Joy

Name them, and they lose half their power:

<div class="not-prose my-8 grid grid-cols-1 md:grid-cols-3 gap-4">
  <div class="bg-card border-t-4 border-t-rose-500 border border-border rounded-2xl p-5 shadow-sm">
    <div class="text-2xl mb-2">🏆</div>
    <div class="font-black text-sm text-rose-500 mb-1">Thief 1 — The Approval Trap</div>
    <p class="text-xs text-text/70 mb-3">Self-worth outsourced to others. You're only as good as the last compliment, the last follower, the last "yes."</p>
    <div class="text-[11px] bg-rose-500/10 rounded-lg p-2.5 text-text/80"><b>Counter:</b> define your own metric of a good day. Ask "was I in flow / did I act on my values?" — not "did anyone applaud?"</div>
  </div>
  <div class="bg-card border-t-4 border-t-amber-500 border border-border rounded-2xl p-5 shadow-sm">
    <div class="text-2xl mb-2">✨</div>
    <div class="font-black text-sm text-amber-500 mb-1">Thief 2 — The Perfectionism Illusion</div>
    <p class="text-xs text-text/70 mb-3">"I'll be happy when the house is perfect / when I'm promoted / when I've lost the weight." Perfect never arrives.</p>
    <div class="text-[11px] bg-amber-500/10 rounded-lg p-2.5 text-text/80"><b>Counter:</b> choose <em>good enough</em> and enjoy the in-between. Happiness is a practice of the present, not a reward at the perfect end.</div>
  </div>
  <div class="bg-card border-t-4 border-t-fuchsia-500 border border-border rounded-2xl p-5 shadow-sm">
    <div class="text-2xl mb-2">🩸</div>
    <div class="font-black text-sm text-fuchsia-500 mb-1">Thief 3 — Energy Vampires</div>
    <p class="text-xs text-text/70 mb-3">Chronic complainers, guilt-trippers, and joyless obligations that siphon your battery dry.</p>
    <div class="text-[11px] bg-fuchsia-500/10 rounded-lg p-2.5 text-text/80"><b>Counter:</b> protect your energy with boundaries — limit exposure, change the subject, say a firm, kind "no."</div>
  </div>
</div>

<div class="not-prose my-8 p-4 rounded-2xl bg-card border border-border text-sm text-text/75">
  <b>Bonus thief (the silent one) — comparison.</b> "Compare and despair" is the fastest battery-drain of all. You can't shop your way out of it: someone will always be warmer, wealthier, or more photogenic. <b>Compare yourself to yesterday's you</b> — the only chart that ever motivates instead of deflates.
</div>

---

## 🎛️ The Big Flip: External → Internal Locus of Control

Cornerstone of the book, backed by four decades of psychology research (Rotter's locus of control): people with an <b>external locus</b> believe life happens <em>to</em> them — happiness depends on luck, others, or circumstances. People with an <b>internal locus</b> believe their choices, attitude, and actions largely shape their life. The research is unambiguous: <b>internal locus = higher well-being, resilience, and joy.</b>

<!-- SVG: The Locus Toggle -->
<div class="not-prose my-10 bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
    <svg viewBox="0 0 460 230" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <!-- external -->
      <g transform="translate(20,30)">
        <rect x="0" y="0" width="190" height="150" rx="16" fill="#ef4444" fill-opacity="0.08" stroke="#ef4444" stroke-width="2"/>
        <text x="95" y="28" text-anchor="middle" font-size="11" font-weight="900" fill="#ef4444">EXTERNAL</text>
        <text x="95" y="48" text-anchor="middle" font-size="8" fill="currentColor" opacity="0.7">"they control my mood"</text>
        <g transform="translate(95,110)">
          <circle cx="-20" cy="-20" r="10" fill="#cbd5e1"/><circle cx="20" cy="-20" r="10" fill="#cbd5e1"/><circle cx="0" cy="20" r="10" fill="#cbd5e1"/>
          <path d="M-18 -18 L-6 -6 M18 -18 L4 -4 M-8 18 L8 18" stroke="#94a3b8" stroke-width="1.5"/>
        </g>
      </g>
      <!-- arrow -->
      <text x="230" y="120" text-anchor="middle" font-size="16" font-weight="900" fill="currentColor" opacity="0.4">→</text>
      <!-- internal -->
      <g transform="translate(250,30)">
        <rect x="0" y="0" width="190" height="150" rx="16" fill="#10b981" fill-opacity="0.08" stroke="#10b981" stroke-width="2"/>
        <text x="95" y="28" text-anchor="middle" font-size="11" font-weight="900" fill="#10b981">INTERNAL</text>
        <text x="95" y="48" text-anchor="middle" font-size="8" fill="currentColor" opacity="0.7">"I choose my response"</text>
        <g transform="translate(95,110)">
          <circle cx="0" cy="0" r="16" fill="#10b981" opacity="0.9"><animate attributeName="r" values="13;18;13" dur="2.5s" repeatCount="indefinite"/></circle>
          <path d="M-5 0 L-1 5 L7 -6" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </g>
    </svg>
    <div class="space-y-3">
      <div class="p-3 rounded-2xl bg-red-500/10 border border-red-500/30"><b class="text-red-500 text-sm">External</b><p class="text-xs text-text/70 m-0">Joy is a weather report — sunny when praised, stormy when ignored. Powerless, reactive, at the mercy of events.</p></div>
      <div class="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30"><b class="text-emerald-500 text-sm">Internal</b><p class="text-xs text-text/70 m-0">Joy is a decision reconfirmed daily. You can't control every card, but you <em>can</em> control how you play the hand — and that's where the doubling happens.</p></div>
      <div class="p-3 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/30"><b class="text-fuchsia-500 text-sm">The flip in practice</b><p class="text-xs text-text/70 m-0">Before any reactive feeling, ask: <em>"Do I control this?"</em> If no, release attachment. If yes, act. This one question is the bridge from being pushed by life to steering it.</p></div>
    </div>
  </div>
</div>

---

## 📅 Joy Anchors: The Non-Negotiables

The ledger's credit side needs protection — if you don't schedule joy, the drains will eat the day. Treat a joy anchor like the most important meeting you'll ever attend: <b>blocked, booked, and defended.</b>

<Accordion title="What counts as an anchor?" badge="Credits">
  Anything that recharges you and needs <b>no performance</b>: a hobby, movement you actually enjoy, reading for pleasure, cooking slowly, time with a favourite person, a walk without a phone. It should feel like <em>fuel</em>, not obligation.
</Accordion>

<Accordion title="How to protect it" badge="Boundaries">
  Put it on the calendar first, not last. Guard it against guilt ("I should work instead") — that guilt is the approval trap wearing a productivity costume. One quality hour of joy pays for three hours of drained busywork.
</Accordion>

<Accordion title="The Power of No" badge="Debit defence">
  Every guilt-driven "yes" is a "no" to your battery. A kind, firm "No — that's not possible for me right now" is not rudeness; it's boundary maintenance. You're not failing to help — you're choosing <em>what</em> you give your energy to.
</Accordion>

---

## 🙏 The Multiplier: Gratitude

The cheapest, fastest lever in the whole OS. Gratitude is not toxic positivity — it's <b>attention redirected to what's already working</b>, and it multiplies the credits you already have:

<div class="not-prose my-8 grid grid-cols-1 md:grid-cols-3 gap-4">
  <div class="bg-card border border-fuchsia-500/30 rounded-2xl p-5"><div class="font-black text-sm text-fuchsia-500 mb-1">🔎 Name three</div><p class="text-xs text-text/70 m-0">Each morning or evening, list three specific things you're glad exist — including tiny ones (good coffee, a hummingbird, a quiet hour).</p></div>
  <div class="bg-card border border-fuchsia-500/30 rounded-2xl p-5"><div class="font-black text-sm text-fuchsia-500 mb-1">💬 Say it out loud</div><p class="text-xs text-text/70 m-0">Express specific appreciation to one person a day. It doubles <em>their</em> joy and your own — gratitude spoken is gratitude felt.</p></div>
  <div class="bg-card border border-fuchsia-500/30 rounded-2xl p-5"><div class="font-black text-sm text-fuchsia-500 mb-1">📉 Flip the default</div><p class="text-xs text-text/70 m-0">Your brain is wired to notice what's missing. Retrain it to scan for what's present — joy is hiding in plain sight.</p></div>
</div>

---

## 🚀 The 7-Day Joy Build

<div class="my-8 not-prose bg-gradient-to-br from-slate-900 to-fuchsia-950 text-white rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl">
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
    <div class="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col justify-between hover:bg-white/10 transition-colors"><div><div class="text-[10px] font-black uppercase text-fuchsia-400 tracking-wider">Day 1</div><div class="font-bold text-sm text-white mt-1 mb-1">The Energy Audit</div><p class="text-[11px] text-slate-300">List 3 drains and 3 anchors. Eliminate or delegate 1 drain today.</p></div><div class="mt-3 text-[10px] text-slate-400 border-t border-white/10 pt-1.5 font-mono">Audit</div></div>
    <div class="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col justify-between hover:bg-white/10 transition-colors"><div><div class="text-[10px] font-black uppercase text-rose-400 tracking-wider">Day 2 & 3</div><div class="font-bold text-sm text-white mt-1 mb-1">The Flip</div><p class="text-[11px] text-slate-300">Every reactive feeling, ask "do I control this?" Release or act. Say one kind, firm "No" out of guilt.</p></div><div class="mt-3 text-[10px] text-slate-400 border-t border-white/10 pt-1.5 font-mono">Locus</div></div>
    <div class="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col justify-between hover:bg-white/10 transition-colors"><div><div class="text-[10px] font-black uppercase text-amber-400 tracking-wider">Day 4 & 5</div><div class="font-bold text-sm text-white mt-1 mb-1">Protect an Anchor</div><p class="text-[11px] text-slate-300">Book 2× 30-min joy anchors in the calendar and defend them like meetings.</p></div><div class="mt-3 text-[10px] text-slate-400 border-t border-white/10 pt-1.5 font-mono">Anchors</div></div>
    <div class="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col justify-between hover:bg-white/10 transition-colors"><div><div class="text-[10px] font-black uppercase text-emerald-400 tracking-wider">Day 6 & 7</div><div class="font-bold text-sm text-white mt-1 mb-1">Gratitude Multiplier</div><p class="text-[11px] text-slate-300">Name 3 things nightly and express specific thanks to one person each day.</p></div><div class="mt-3 text-[10px] text-slate-400 border-t border-white/10 pt-1.5 font-mono">Multiplier</div></div>
  </div>
</div>

---

## 🧘 Reflection: Read Your Own Battery

> [!TIP]
> 1. **Audit honestly:** List the last 24 hours as credits and debits. Which tip of the scale is heavier? One leak to plug?
> 2. **Locus check:** When was your mood last dictated entirely by someone else's reaction? How would an internal locus have handled it?
> 3. **Approval audit:** Which "achievement" do you chase that nobody will ever fully count? What's your own metric of a good day instead?
> 4. **The guilt-fill:** What "should" is quietly eating a joy anchor right now? Is the guilt earned — or is it the perfectionism illusion?
> 5. **The multiplier:** Who in your life genuinely enriches you — and when did you last tell them specifically?

---

## 🎯 Active Recall Quiz

<div class="bg-gradient-to-br from-slate-900 to-fuchsia-950 p-8 sm:p-12 rounded-[2.5rem] shadow-2xl border border-white/10 my-10 relative overflow-hidden text-white not-prose">
  <div class="absolute -right-20 -top-20 opacity-5 pointer-events-none"><svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg></div>
  <div class="relative z-10 space-y-4">
    <details class="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors"><summary class="flex items-center font-bold p-5 cursor-pointer text-white list-none [&::-webkit-details-marker]:hidden"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-4 text-fuchsia-400 group-open:rotate-90 transition-transform"><path d="m9 18 6-6-6-6"/></svg>What are the three "thieves of joy," and the silent fourth?</summary><div class="p-5 pt-0 pl-14"><div class="border-l-2 border-fuchsia-400 pl-4 py-1 text-fuchsia-100/90 text-sm">The <b>Approval Trap</b>, <b>Perfectionism Illusion</b>, and <b>Energy Vampires</b> — plus the silent fourth, <b>comparison</b>. Name them and they lose power; then plug each with its counter.</div></div></details>
    <details class="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors"><summary class="flex items-center font-bold p-5 cursor-pointer text-white list-none [&::-webkit-details-marker]:hidden"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-4 text-fuchsia-400 group-open:rotate-90 transition-transform"><path d="m9 18 6-6-6-6"/></svg>What's the "joy ledger," and why plugin the leaks before adding credits?</summary><div class="p-5 pt-0 pl-14"><div class="border-l-2 border-fuchsia-400 pl-4 py-1 text-fuchsia-100/90 text-sm">A <b>balance sheet of daily joy</b>: anchors are credits, drains are debits. A leaking bucket never fills — so <b>eliminating one major drain beats adding three hobbies</b>.</div></div></details>
    <details class="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors"><summary class="flex items-center font-bold p-5 cursor-pointer text-white list-none [&::-webkit-details-marker]:hidden"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-4 text-fuchsia-400 group-open:rotate-90 transition-transform"><path d="m9 18 6-6-6-6"/></svg>What's the difference between external and internal locus of control?</summary><div class="p-5 pt-0 pl-14"><div class="border-l-2 border-fuchsia-400 pl-4 py-1 text-fuchsia-100/90 text-sm"><b>External</b>: life happens to you; happiness depends on others/luck. <b>Internal</b>: your choices and attitudes shape your life. Research shows internal locus correlates strongly with <b>higher well-being and resilience</b>.</div></div></details>
    <details class="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors"><summary class="flex items-center font-bold p-5 cursor-pointer text-white list-none [&::-webkit-details-marker]:hidden"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-4 text-fuchsia-400 group-open:rotate-90 transition-transform"><path d="m9 18 6-6-6-6"/></svg>What makes something a "joy anchor," and why schedule it like a meeting?</summary><div class="p-5 pt-0 pl-14"><div class="border-l-2 border-fuchsia-400 pl-4 py-1 text-fuchsia-100/90 text-sm">An activity that <b>recharges you with zero performance pressure</b> (a hobby, a walk, reading for joy). Schedule and defend it because unbooked joy gets eaten by drains — guard it against guilt, which is the approval trap disguised as productivity.</div></div></details>
    <details class="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors"><summary class="flex items-center font-bold p-5 cursor-pointer text-white list-none [&::-webkit-details-marker]:hidden"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-4 text-fuchsia-400 group-open:rotate-90 transition-transform"><path d="m9 18 6-6-6-6"/></svg>How does gratitude act as a joy multiplier — and why isn't it "toxic positivity"?</summary><div class="p-5 pt-0 pl-14"><div class="border-l-2 border-fuchsia-400 pl-4 py-1 text-fuchsia-100/90 text-sm">It <b>redirects attention to what's already working</b>, multiplying existing credits. It's not denial of problems — it's deliberately scanning for what's present, retraining the brain's default "what's missing" bias.</div></div></details>
  </div>
</div>

<Quote author="Martin Wehrle" source="Dieses Buch verändert für immer Ihr Leben">
  "Joy is not something that happens to you by chance. It is a decision you protect every single day."
</Quote>

<Quote author="Martin Wehrle" source="Double Your Joy">
  "You won't find the life you want by working one more hour. You'll find it by plugging one more leak."
</Quote>

<YouTube videoId="U_bfMyxn8Zg" />
`
};
