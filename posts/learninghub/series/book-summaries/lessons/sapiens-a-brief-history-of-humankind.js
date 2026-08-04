export default {
  "id": "sapiens-a-brief-history-of-humankind",
  "title": "Sapiens: A Brief History of Humankind – Yuval Noah Harari",
  "duration": "35 Min.",
  "description": "Walk the 70,000-year long march: the Cognitive, Agricultural and Scientific Revolutions, the superpower of shared fictions, the agricultural trap, and the question of where humanity is heading.",
  "content": `
<div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900 p-8 sm:p-12 mb-10 shadow-2xl text-white border border-amber-500/20">

  <!-- Hero Animated SVG: The March of Revolutions -->
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

      <!-- Orbit rings = epochs -->
      <circle cx="150" cy="150" r="130" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="8 8" opacity="0.3">
        <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="25s" repeatCount="indefinite"/>
      </circle>
      <circle cx="150" cy="150" r="92" fill="none" stroke="#fbbf24" stroke-width="2" opacity="0.5">
        <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="18s" repeatCount="indefinite"/>
      </circle>

      <!-- Revolution nodes -->
      <circle cx="150" cy="20" r="6" fill="#f59e0b" filter="url(#glow-gold)"/>
      <circle cx="242" cy="92" r="6" fill="#fbbf24" filter="url(#glow-gold)"/>
      <circle cx="150" cy="260" r="6" fill="#10b981" filter="url(#glow-gold)"/>

      <!-- Core globe -->
      <g transform="translate(150,150)">
        <circle cx="0" cy="0" r="24" fill="url(#grad-sapiens-core)" filter="url(#glow-gold)"/>
        <path d="M-10 -10 Q0 -20 10 -10 Q20 0 10 10 Q0 20 -10 10 Q-20 0 -10 -10 Z" fill="none" stroke="#ffffff" stroke-width="1.5"/>
      </g>
    </svg>
  </div>

  <div class="relative z-10">
    <span class="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold tracking-widest uppercase mb-6 border border-amber-500/30">Book Summary · 70,000 Years Under a Lens</span>
    <h1 class="text-4xl sm:text-5xl font-black mb-4 leading-tight tracking-tight text-white m-0 pb-0">Sapiens<br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-orange-400">A Brief History of Humankind</span></h1>
    <p class="text-xl sm:text-2xl text-amber-100/80 font-medium max-w-2xl mt-4 mb-8">by Yuval Noah Harari · Global Multi-Million Bestseller</p>
    <div class="flex flex-wrap gap-3">
      <span class="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-semibold text-white/80">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 1 3-3h7z"/></svg>
        3 Great Revolutions
      </span>
      <span class="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-semibold text-white/80">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        Shared Fictions & Myths
      </span>
      <span class="inline-flex items-center gap-1.5 bg-amber-400/20 border border-amber-400/30 rounded-full px-3 py-1 text-xs font-semibold text-amber-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        The Future of Homo Deus
      </span>
    </div>
  </div>
</div>

<p class="text-xl sm:text-2xl text-text/90 font-medium mb-8 leading-relaxed max-w-4xl">
  Start with a fact that should unsettle you: <span class="text-primary font-bold">70,000 years ago, Sapiens was an insignificant species</span> in one corner of East Africa. Today we stand on the moon, rewrite our own genes, and decide the fate of a planet's worth of life. Harari's explanation is as simple as it is radical: <span class="text-primary font-bold">we are the only animal that can believe in things that don't exist</span> — and that fiction is what lets millions of strangers cooperate.
</p>

<StatGrid>
  <Stat value="70,000" label="Years Ago" sub="The Cognitive Revolution" color="amber" />
  <Stat value="12,000" label="Years Ago" sub="The Agricultural Revolution" color="emerald" />
  <Stat value="500" label="Years Ago" sub="The Scientific Revolution" color="indigo" />
  <Stat value="150" label="Dunbar's Number" sub="Max group size without myth" color="rose" />
</StatGrid>

<Tabs>
  <Tab title="🧠 The Superpower: Gossip + Fiction">
    **Why chimps max out at 50 and Sapiens rules the world.**
    <br/><br/>
    Non-human primates cooperate only through personal intimacy — so their groups cap near <b>50</b>. Sapiens broke through with two cognitive gifts:
    - <b>Gossip:</b> language about <em>other people</em> — who's reliable, who's dangerous. Enough to bind groups up to ~<b>150</b> (Dunbar's number).
    - <b>Shared fiction:</b> the ability to tell stories about things that <em>don't physically exist</em> — gods, nations, laws, money, corporations. Enough to unite <b>hundreds of millions of strangers</b>.
    <br/><br/>
    Every large-scale system you touch daily — your currency, your passport, your company — is an <b>inter-subjective fiction</b>: real only because enough people believe in it <em>together</em>.
  </Tab>
  <Tab title="📚 How to Read the March">
    Treat this as a <b>single continuous story</b> with four acts:
    1. <b>The Cognitive Revolution</b> — we gain fiction (70,000 BP).
    2. <b>The Agricultural Revolution</b> — we settle, and it costs us (12,000 BP).
    3. <b>The Unification</b> — money, empire, and religion knit the world.
    4. <b>The Scientific Revolution</b> — we admit ignorance and acquire godlike power (500 BP → now).
    <br/><br/>
    Follow the timeline illustration at the top — note how almost ALL of it happens in the final blink of that line.
  </Tab>
  <Tab title="⚠️ Read It as Provocation, Not Dogma">
    > [!WARNING]
    > Harari writes deliberately provocatively — he calls agriculture <em>"history's biggest fraud"</em> and happiness a <em>chemical illusion</em>. These are <b>frameworks to test against your own experience</b>, not settled verdicts. The value isn't agreeing with every claim; it's gaining a telescope that reframes your assumptions about money, jobs, and meaning. Ask of every chapter: <em>what breaks down here — and what survives?</em>
  </Tab>
  <Tab title="👤 Who This Is For">
    - 🧭 **Anyone asking "why does society work this way?"**
    - 💰 **People who've never questioned money, nations, or corporations as fictions**
    - 🌾 **Thinkers who want to examine the costs hiding inside our comforts**
    - 🤖 **Future-forward readers wondering where humanity goes next**
    - 🎓 **Students of history, psychology, and science looking for one big picture**
  </Tab>
</Tabs>

---

## 🗺️ The Long March: One Line, Four Revolutions

Compress 70,000 years onto a single line, and the shape of our history becomes obvious: almost everything happened in the final instant.

<!-- SVG: The Long March Timeline -->
<div class="not-prose my-10 bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
  <div class="overflow-x-auto">
    <svg viewBox="0 0 900 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto min-w-[720px]">
      <!-- The long faint line of pre-history -->
      <line x1="40" y1="120" x2="460" y2="120" stroke="#b45309" stroke-width="12" stroke-linecap="round" opacity="0.12"/>
      <line x1="460" y1="120" x2="720" y2="120" stroke="#d97706" stroke-width="12" stroke-linecap="round" opacity="0.18"/>
      <line x1="720" y1="120" x2="860" y2="120" stroke="#f59e0b" stroke-width="12" stroke-linecap="round" opacity="0.3"/>
      <!-- tick labels for scale -->
      <text x="250" y="105" text-anchor="middle" font-size="9" fill="currentColor" opacity="0.4">~68,000 years of foraging</text>
      <text x="590" y="105" text-anchor="middle" font-size="9" fill="currentColor" opacity="0.5">~11,500 yrs settled</text>
      <text x="790" y="105" text-anchor="middle" font-size="9" fill="currentColor" opacity="0.6">~500 yrs science</text>

      <!-- Node: Cognitive -->
      <g transform="translate(40,120)">
        <circle r="14" fill="#f59e0b" stroke="#fff" stroke-width="2"/>
        <text x="40" y="-22" text-anchor="middle" font-size="11" font-weight="900" fill="#f59e0b">COGNITIVE</text>
        <text x="40" y="-6" text-anchor="middle" font-size="9" font-weight="700" fill="currentColor" opacity="0.6">70,000 BP</text>
        <text x="40" y="40" text-anchor="middle" font-size="8" fill="currentColor" opacity="0.6">gossip + fiction</text>
      </g>
      <!-- Node: Agricultural -->
      <g transform="translate(460,120)">
        <circle r="15" fill="#10b981" stroke="#fff" stroke-width="2"/>
        <text x="0" y="-24" text-anchor="middle" font-size="11" font-weight="900" fill="#10b981">AGRICULTURAL</text>
        <text x="0" y="-8" text-anchor="middle" font-size="9" font-weight="700" fill="currentColor" opacity="0.6">12,000 BP</text>
        <text x="0" y="40" text-anchor="middle" font-size="8" fill="currentColor" opacity="0.6">wheat settles us</text>
      </g>
      <!-- Node: Unification -->
      <g transform="translate(720,120)">
        <circle r="13" fill="#818cf8" stroke="#fff" stroke-width="2"/>
        <text x="0" y="-22" text-anchor="middle" font-size="10" font-weight="900" fill="#818cf8">UNIFICATION</text>
        <text x="0" y="-6" text-anchor="middle" font-size="9" font-weight="700" fill="currentColor" opacity="0.6">money · empire · religion</text>
      </g>
      <!-- Node: Scientific -->
      <g transform="translate(860,120)">
        <circle r="16" fill="#ef4444" stroke="#fff" stroke-width="2">
          <animate attributeName="r" values="13;18;13" dur="2.5s" repeatCount="indefinite"/>
        </circle>
        <text x="0" y="-26" text-anchor="middle" font-size="11" font-weight="900" fill="#ef4444">SCIENTIFIC</text>
        <text x="0" y="-9" text-anchor="middle" font-size="9" font-weight="700" fill="currentColor" opacity="0.6">500 BP → today</text>
        <text x="0" y="42" text-anchor="middle" font-size="8" fill="#ef4444">nukes · genes · AI</text>
      </g>
    </svg>
  </div>
  <p class="text-center text-xs text-text/60 mt-4 mb-0">Four dots. The first two carry you across 68,000 years of nothing changing — then change itself accelerates into a rocket.</p>
</div>

### The four acts in one breath

- **Cognitive (70,000 BP):** ~68,000 years of largely static foraging, then language gains the power of fiction. This is the book's hinge — <b>history begins when Sapiens begins to talk about things that don't exist.</b>
- **Agricultural (12,000 BP):** We stop chasing food and start watching it grow. Villages, cities, kings, and taxes follow. Harari's twist: it was a lousy trade for most individuals.
- **Unification:** Money (universal trust), empire (universal order), and religion (universal truth) fold the world's separate worlds into one.
- **Scientific (500 BP → now):** We finally admit what we don't know, which unlocks a self-correcting engine of discovery — and with it, the power to become gods ourselves.

---

## 🗣️ The Secret Weapon: Shared Fictions

The deepest idea in the book:

> [!NOTE]
> **Chimpanzees can't cooperate with chimpanzees they don't know. Sapiens can — by telling the same story.** A company like Peugeot, a nation like France, a currency like the dollar, and a right like "human rights" are all <b>inter-subjective fictions</b>: they exist nowhere in the physical world, only in our shared minds. But because <em>everyone</em> believes them together, they coordinate the behavior of billions.

<!-- SVG: The Myth Engine -->
<div class="not-prose my-10 bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <svg viewBox="0 0 420 240" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <!-- center fiction bubble -->
      <circle cx="210" cy="120" r="46" fill="#f59e0b" fill-opacity="0.12" stroke="#f59e0b" stroke-width="2.5"/>
      <text x="210" y="115" text-anchor="middle" font-size="12" font-weight="900" fill="#f59e0b">A SHARED FICTION</text>
      <text x="210" y="133" text-anchor="middle" font-size="9" font-weight="700" fill="currentColor" opacity="0.7">e.g. "money", "nation", "company"</text>
      <!-- spokes to people -->
      <g stroke="#f59e0b" stroke-width="1.5" opacity="0.5">
        <line x1="170" y1="90" x2="120" y2="40"/><line x1="250" y1="90" x2="300" y2="40"/>
        <line x1="250" y1="150" x2="300" y2="200"/><line x1="170" y1="150" x2="120" y2="200"/>
      </g>
      <!-- people dots -->
      <g fill="#f59e0b">
        <circle cx="110" cy="32" r="10"/><circle cx="310" cy="32" r="10"/><circle cx="110" cy="208" r="10"/><circle cx="310" cy="208" r="10"/>
      </g>
      <text x="110" y="16" text-anchor="middle" font-size="8" fill="currentColor" opacity="0.6">stranger 1</text>
      <text x="310" y="16" text-anchor="middle" font-size="8" fill="currentColor" opacity="0.6">stranger 2</text>
      <text x="110" y="228" text-anchor="middle" font-size="8" fill="currentColor" opacity="0.6">stranger 3</text>
      <text x="310" y="228" text-anchor="middle" font-size="8" fill="currentColor" opacity="0.6">stranger 4</text>
      <text x="210" y="214" text-anchor="middle" font-size="9" font-weight="700" fill="#ef4444">strangers → huge coordinated group</text>
    </svg>
    <div class="space-y-3">
      <div class="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30"><b class="text-amber-500 text-sm">🪙 Money</b><p class="text-xs text-text/70 m-0">The most successful shared fiction ever — pure mutual trust, convertible between any two strangers on Earth.</p></div>
      <div class="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/30"><b class="text-indigo-500 text-sm">🏛️ Nations & Laws</b><p class="text-xs text-text/70 m-0">Borders, constitutions, and "France" exist only while enough people believe them. (Peugeot is real — as a shared idea that thousands coordinate around.)</p></div>
      <div class="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/30"><b class="text-rose-500 text-sm">✝️ Religions & Rights</b><p class="text-xs text-text/70 m-0">Gods and human rights are stories that give strangers a common purpose and a shared moral compass.</p></div>
    </div>
  </div>
</div>

---

## 🌾 The Agricultural Trap: Did Wheat Domesticate Us?

Harari's most unforgettable provocation. For 99% of our existence we were foragers — varied diets, ~15–20 hour work weeks, less famine, fewer plagues. Then we became farmers:

<!-- SVG: Foragers vs Farmers -->
<div class="not-prose my-10 bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/30">
      <div class="font-black text-sm text-emerald-500 mb-2">🍖 The Forager (before)</div>
      <ul class="text-xs text-text/75 space-y-1.5 list-none pl-0 m-0">
        <li>✔ Dozens of food sources — a failed crop is nothing</li>
        <li>✔ ~2–3 hours of food-gathering a day</li>
        <li>✔ Low infectious disease (few permanent settlements)</li>
        <li>✔ Mobility = flexibility</li>
      </ul>
    </div>
    <div class="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/30">
      <div class="font-black text-sm text-amber-500 mb-2">🌾 The Farmer (after)</div>
      <ul class="text-xs text-text/75 space-y-1.5 list-none pl-0 m-0">
        <li>✖ ~2–3 crops — one bad harvest = mass famine</li>
        <li>✖ Back-breaking labor from dawn to dusk</li>
        <li>✖ Permanent settlements = epidemics, arthritis, crowding</li>
        <li>✖ Tied to land → taxes, war, inequality</li>
      </ul>
    </div>
  </div>
  <p class="text-sm text-text/70 mt-5 mb-0 text-center"><b>The twist:</b> per individual, farming was a worse deal. What it bought was <b>population growth</b> — more Sapiens per square mile, each worse off than the forager. Wheat didn't need us to be happy; it needed us to be <em>plentiful</em>. From the species' viewpoint, history was a success. From the individual's, often a trap.</p>
</div>

> [!TIP]
> **The luxury trap, today:** Every convenience promises to save you time — then quietly demands more maintenance than it removes. Car = parking, insurance, traffic. Smartphone = subscriptions, notifications, repair. Ask of any shiny new thing: <em>does this free me, or does it hitch me to a treadmill I can't get off?</em>

---

## 🌍 Unification & The Scientific Revolution: The Final Accelerations

Three forces knitted the world's separate cultures into one — then science supercharged everything:

<div class="not-prose my-8 grid grid-cols-1 md:grid-cols-3 gap-4">
  <div class="bg-card border border-amber-500/30 rounded-2xl p-5"><div class="text-2xl mb-2">🪙</div><div class="font-black text-sm text-amber-500 mb-1">Money unifies</div><p class="text-xs text-text/70 m-0">One universal medium of trust dissolves cultural borders — the empire's coin and the trader's ledger speak the same language.</p></div>
  <div class="bg-card border border-indigo-500/30 rounded-2xl p-5"><div class="text-2xl mb-2">⚔️</div><div class="font-black text-sm text-indigo-500 mb-1">Empire unifies</div><p class="text-xs text-text/70 m-0">Conquest merges peoples, laws, and trade routes — brutal, often, yet the forge of today's large societies.</p></div>
  <div class="bg-card border border-rose-500/30 rounded-2xl p-5"><div class="text-2xl mb-2">🔬</div><div class="font-black text-sm text-rose-500 mb-1">Science empowers</div><p class="text-xs text-text/70 m-0">The crucial break: <b>admitting ignorance</b>. "We don't know — let's find out" funded the self-improving engine behind 150 years of miracles.</p></div>
</div>

> [!NOTE]
> **The scientific mindset, distilled:** before science, knowledge claimed to be complete ("the Bible/geography has all answers"). Science's true innovation is <b>institutionalized ignorance</b> — building systems that reward discovering what you didn't know. That humility to "I might be wrong" is what compounded into fossil fuels, antibiotics, and the internet. It works for organizations and individuals alike.

---

## 🤖 The Endgame: Homo Sapiens → Homo Deus?

Having mastered survival, we are now rewriting our own nature — and the question Harari leaves you with is uncomfortably open:

<div class="not-prose my-8 grid grid-cols-1 md:grid-cols-3 gap-4">
  <div class="bg-card border border-border rounded-2xl p-5"><div class="font-black text-sm text-text mb-1">🧬 The re-engineering</div><p class="text-xs text-text/70 m-0">Gene editing, brain implants, and AI are no longer fiction — they're R&D pipelines. What happens when we can edit human nature the way we edited wheat?</p></div>
  <div class="bg-card border border-border rounded-2xl p-5"><div class="font-black text-sm text-text mb-1">😮‍💨 The happiness puzzle</div><p class="text-xs text-text/70 m-0">Triple our wealth, medicine, and food — and biochemistry barely moves the needle. The hedonic treadmill keeps our happiness pinned near a biological set-point regardless.</p></div>
  <div class="bg-card border border-border rounded-2xl p-5"><div class="font-black text-sm text-text mb-1">🤔 The meta-question</div><p class="text-xs text-text/70 m-0">For the first time, our fictions aren't just about the past — we get to <b>choose what to want</b>. "What do we want to want?" is the only question that matters now.</p></div>
</div>

---

## 🚀 The 7-Day Perspective Challenge

<div class="my-8 not-prose">
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
    <div class="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-text"><div class="text-xs font-black uppercase text-amber-400">Day 1 & 2</div><div class="font-bold text-sm mt-1">Audit Your Fictions</div><div class="text-xs text-text/70 mt-1">List 3 inter-subjective constructs you rely on daily — money, a brand, a title, a law — and notice they exist only in shared belief.</div></div>
    <div class="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-text"><div class="text-xs font-black uppercase text-emerald-400">Day 3 & 4</div><div class="font-bold text-sm mt-1">Luxury Trap Check</div><div class="text-xs text-text/70 mt-1">Spot one modern "convenience" that actually added labor to your week. Is it worth it?</div></div>
    <div class="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-text"><div class="text-xs font-black uppercase text-indigo-400">Day 5 & 6</div><div class="font-bold text-sm mt-1">Admit Ignorance</div><div class="text-xs text-text/70 mt-1">Say "I don't know" openly in a meeting/work context and pursue the answer empirically.</div></div>
    <div class="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-text"><div class="text-xs font-black uppercase text-rose-400">Day 7</div><div class="font-bold text-sm mt-1">Dunbar Radius Audit</div><div class="text-xs text-text/70 mt-1">Map your true ~150 meaningful relationships vs. thousands of hollow "connections."</div></div>
  </div>
</div>

---

## 🧘 Reflection: The Telescope Inverts You

> [!TIP]
> 1. **Your daily fictions:** Which of your daily tools is really a story — and how does believing it coordinate your life?
> 2. **Forger or farmer?** Where in your life are you over-working to produce more of something that makes you <em>less</em> free?
> 3. **The luxury trap:** Name one convenience you adopted that quietly consumes more time than it saves. Could you drop it?
> 4. **Institutionalized ignorance:** Where could "we don't know yet" replace false certainty in your work or relationships?
> 5. **What to want:** If you could choose, what should humanity (and you) <em>want</em> — beyond survival and more stuff?

---

## 🎯 Active Recall Quiz

<div class="bg-gradient-to-br from-slate-900 to-amber-950 p-8 sm:p-12 rounded-[2.5rem] shadow-2xl border border-white/10 my-10 relative overflow-hidden text-white not-prose">
  <div class="absolute -right-20 -top-20 opacity-5 pointer-events-none"><svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg></div>
  <div class="relative z-10 space-y-4">
    <details class="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors"><summary class="flex items-center font-bold p-5 cursor-pointer text-white list-none [&::-webkit-details-marker]:hidden"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-4 text-amber-400 group-open:rotate-90 transition-transform"><path d="m9 18 6-6-6-6"/></svg>What unique ability let Sapiens out-compete other human species?</summary><div class="p-5 pt-0 pl-14"><div class="border-l-2 border-amber-400 pl-4 py-1 text-amber-100/90 text-sm">The ability to communicate about <b>abstract, non-existent things</b> — creating shared fictions (religions, nations, money, corporations) that coordinate cooperation among huge numbers of strangers.</div></div></details>
    <details class="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors"><summary class="flex items-center font-bold p-5 cursor-pointer text-white list-none [&::-webkit-details-marker]:hidden"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-4 text-amber-400 group-open:rotate-90 transition-transform"><path d="m9 18 6-6-6-6"/></svg>What are the three great revolutions Harari describes, and roughly when?</summary><div class="p-5 pt-0 pl-14"><div class="border-l-2 border-amber-400 pl-4 py-1 text-amber-100/90 text-sm"><b>Cognitive (70,000 BP)</b> — language gains fiction. <b>Agricultural (12,000 BP)</b> — settlement and hierarchy. <b>Scientific (500 BP)</b> — admitting ignorance unlocks exponential power.</div></div></details>
    <details class="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors"><summary class="flex items-center font-bold p-5 cursor-pointer text-white list-none [&::-webkit-details-marker]:hidden"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-4 text-amber-400 group-open:rotate-90 transition-transform"><path d="m9 18 6-6-6-6"/></svg>Why does Harari call agriculture "history's biggest fraud"?</summary><div class="p-5 pt-0 pl-14"><div class="border-l-2 border-amber-400 pl-4 py-1 text-amber-100/90 text-sm">Per individual it was <b>a worse deal</b>: fewer food sources, more labor, more famine and disease. Its payoff was <b>population growth</b> — more Sapiens, not happier ones. Wheat domesticated us to be plentiful.</div></div></details>
    <details class="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors"><summary class="flex items-center font-bold p-5 cursor-pointer text-white list-none [&::-webkit-details-marker]:hidden"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-4 text-amber-400 group-open:rotate-90 transition-transform"><path d="m9 18 6-6-6-6"/></svg>Name the ideas behind "inter-subjective fiction" — and one modern example.</summary><div class="p-5 pt-0 pl-14"><div class="border-l-2 border-amber-400 pl-4 py-1 text-amber-100/90 text-sm">An entity that's real only because <b>enough people believe in it together</b>: money, nations, laws, human rights, corporations (e.g., Peugeot — a brand with no physical existence beyond millions of shared beliefs).</div></div></details>
    <details class="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors"><summary class="flex items-center font-bold p-5 cursor-pointer text-white list-none [&::-webkit-details-marker]:hidden"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-4 text-amber-400 group-open:rotate-90 transition-transform"><path d="m9 18 6-6-6-6"/></svg>What was the crucial mental shift of the Scientific Revolution?</summary><div class="p-5 pt-0 pl-14"><div class="border-l-2 border-amber-400 pl-4 py-1 text-amber-100/90 text-sm"><b>Admitting ignorance</b> — replacing false certainty ("we already know") with "we don't know yet," which funds discovery and self-correction. That humility is the engine of modern power.</div></div></details>
    <details class="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors"><summary class="flex items-center font-bold p-5 cursor-pointer text-white list-none [&::-webkit-details-marker]:hidden"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-4 text-amber-400 group-open:rotate-90 transition-transform"><path d="m9 18 6-6-6-6"/></svg>What question does Harari leave us with about the future?</summary><div class="p-5 pt-0 pl-14"><div class="border-l-2 border-amber-400 pl-4 py-1 text-amber-100/90 text-sm">After mastering survival and editing our own nature, we can finally choose our wants: <b>"What do we want to want?"</b> — the only question that can guide the next revolution.</div></div></details>
  </div>
</div>

<Quote author="Yuval Noah Harari" source="Sapiens">
  "You could never convince a monkey to give you a banana by promising him limitless bananas after death in monkey heaven."
</Quote>

<Quote author="Yuval Noah Harari" source="Sapiens">
  "Money is the most universal and most efficient system of mutual trust ever devised."
</Quote>

<YouTube videoId="nzj7Wg4DAbs" />
`
};
