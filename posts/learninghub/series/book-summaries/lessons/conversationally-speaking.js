export default {
  "id": "conversationally-speaking",
  "title": "Conversationally Speaking – Alan Garner",
  "duration": "25 Min.",
  "description": "Tested new ways to increase personal and social effectiveness — master open-ended questions, active listening, self-disclosure, and assertive handling of criticism.",
  "content": `
<div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 p-8 sm:p-12 mb-10 shadow-2xl text-white border border-sky-500/20">

  <!-- Hero Animated SVG: Dialogue Resonance & Conversational Bridge -->
  <div class="absolute top-1/2 right-2 sm:right-10 -translate-y-1/2 opacity-30 hover:opacity-50 transition-opacity pointer-events-none w-72 h-72 sm:w-96 sm:h-96">
    <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <defs>
        <linearGradient id="grad-conv-core" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#818cf8" stop-opacity="0.6"/>
        </linearGradient>
        <filter id="glow-sky" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <!-- Interlocking Dialogue Rings -->
      <circle cx="110" cy="150" r="75" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="6 4">
        <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="15s" repeatCount="indefinite"/>
      </circle>
      <circle cx="190" cy="150" r="75" fill="none" stroke="#818cf8" stroke-width="2" stroke-dasharray="6 4">
        <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="15s" repeatCount="indefinite"/>
      </circle>

      <!-- Central Bridge -->
      <g transform="translate(150,150)">
        <circle cx="0" cy="0" r="20" fill="url(#grad-conv-core)" filter="url(#glow-sky)"/>
        <path d="M-8 0 L8 0 M0 -8 L0 8" stroke="#ffffff" stroke-width="2.5"/>
      </g>
    </svg>
  </div>

  <div class="relative z-10">
    <span class="inline-block py-1 px-3 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold tracking-widest uppercase mb-6 border border-sky-500/30">Book Summary · Interpersonal Communication</span>
    <h1 class="text-4xl sm:text-5xl font-black mb-4 leading-tight tracking-tight text-white m-0 pb-0">Conversationally Speaking<br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-indigo-300 to-teal-300">Tested Ways to Connect & Communicate</span></h1>
    <p class="text-xl sm:text-2xl text-sky-100/80 font-medium max-w-2xl mt-4 mb-8">by Alan Garner · Over 1 Million Copies Sold</p>
    <div class="flex flex-wrap gap-3">
      <span class="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-semibold text-white/80">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 1 3-3h7z"/></svg>
        Open Questions & Active Listening
      </span>
      <span class="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs font-semibold text-white/80">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        Assertive Defense Techniques
      </span>
      <span class="inline-flex items-center gap-1.5 bg-sky-400/20 border border-sky-400/30 rounded-full px-3 py-1 text-xs font-semibold text-sky-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
        Practical Social Confidence
      </span>
    </div>
  </div>
</div>

<p class="text-xl sm:text-2xl text-text/90 font-medium mb-8 leading-relaxed max-w-4xl">
  Great conversationalists aren't born — they use specific, learnable skills to draw people out, share themselves authentically, and navigate difficult or defensive situations with grace and assertiveness.
</p>

<StatGrid>
  <Stat value="5 Skills" label="Core Toolkit" sub="Open questions, listening, disclosure, compliments, assertion" color="sky" />
  <Stat value="3 Defenses" label="Assertive Tools" sub="Fogging, Negative Inquiry, Negative Assertion" color="indigo" />
  <Stat value="100%" label="Field Tested" sub="Proven behavioral psychology tactics" color="emerald" />
  <Stat value="2-Way" label="Street" sub="Equal sharing & active reflection" color="amber" />
</StatGrid>

<Tabs>
  <Tab title="🧠 Social Dynamics">
    **Conversations thrive on mutual vulnerability and curiosity.**
    <br/><br/>
    Alan Garner identifies the primary failure modes in conversation:
    - **Closed Question Trap** — Asking questions answered by "yes" or "no" kills momentum.
    - **Passive Hearing vs. Active Listening** — Hearing just waits for your turn to speak. Active listening reflects the speaker's emotional state.
    - **Defensive Reactions** — Counter-attacking when criticized escalates conflict; fogging disarms it instantly.
  </Tab>
  <Tab title="📚 Practical Guide">
    Master the **4 Essential Conversation Tactics**:
    1. **Open-Ended Questions:** Use *How*, *Why*, or *In what way* prompts.
    2. **Active Reflection:** Paraphrase both the facts and feelings expressed.
    3. **Gradual Self-Disclosure:** Share personal stories step-by-step to match their openness.
    4. **Assertive Criticism Handling:** Neutralize attack with Fogging and Negative Inquiry.
  </Tab>
</Tabs>

---

## <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-indigo-500">Part 1: Open Questions & Active Listening</span>

### Open vs Closed Questions
- **Closed:** *"Did you like your vacation?"* → *"Yes."* (Conversation dead end).
- **Open:** *"What was the most unexpected adventure on your trip?"* → Rich story response!

<!-- SVG: Active Listening Reflection Loop -->
<div class="not-prose my-10 bg-card border border-border rounded-3xl p-6 sm:p-8 shadow-sm">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
    <div>
      <h4 class="text-lg font-black text-text mt-0 mb-2">The Active Listening Loop</h4>
      <p class="text-sm text-text/70 mb-0">Active listening requires reflecting the speaker's core emotion back to them before adding your thoughts: *"It sounds like you felt completely overwhelmed by that deadline."* This creates instant trust.</p>
    </div>
    <svg viewBox="0 0 350 180" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <path d="M 40 90 C 100 20 250 20 310 90 C 250 160 100 160 40 90 Z" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
      <circle cx="175" cy="90" r="14" fill="#818cf8"/>
      <text x="175" y="94" text-anchor="middle" font-size="10" font-weight="bold" fill="#fff">Reflect</text>
    </svg>
  </div>
</div>

---

## <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Part 2: Assertive Handling of Criticism</span>

When faced with unfair or hostile criticism, use the **3 Assertive Shields**:

<Accordion title="1. Fogging" badge="Disarming Verbal Attacks">
  Agree with any truth in the critic's statement without accepting the value judgment:
  - *Critic:* "You're always late for meetings!"
  - *You:* "You're right, I was 10 minutes late today." (Neutralizes the attack like a fog bank swallowing a rock).
</Accordion>

<Accordion title="2. Negative Inquiry" badge="Exposing Hidden Motives">
  Prompt the critic for specific details to determine if their complaint is constructive:
  - *Critic:* "Your presentation was terrible."
  - *You:* "What specific slides or data points did you find confusing or unconvincing?"
</Accordion>

<Accordion title="3. Negative Assertion" badge="Owning True Mistakes">
  Strongly and calmly agree with true mistakes without wallowing in guilt:
  - *You:* "Yes, I made a mistake on that report calculation. I will correct it immediately."
</Accordion>

---

## 🎯 7-Day Conversational Mastery Sprint

<div class="not-prose grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 my-8">
  <div class="p-4 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-text">
    <div class="text-xs font-black uppercase text-sky-400">Day 1 & 2</div>
    <div class="font-bold text-sm mt-1">Open Question Challenge</div>
    <div class="text-xs text-text/70 mt-1">Ask only open-ended questions starting with "How" or "What".</div>
  </div>
  <div class="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-text">
    <div class="text-xs font-black uppercase text-indigo-400">Day 3 & 4</div>
    <div class="font-bold text-sm mt-1">Active Reflection</div>
    <div class="text-xs text-text/70 mt-1">Reflect emotional content back to 3 speakers today before giving advice.</div>
  </div>
  <div class="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-text">
    <div class="text-xs font-black uppercase text-purple-400">Day 5 & 6</div>
    <div class="font-bold text-sm mt-1">Fogging Practice</div>
    <div class="text-xs text-text/70 mt-1">Use Fogging when receiving any minor complaint or feedback.</div>
  </div>
  <div class="p-4 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-text">
    <div class="text-xs font-black uppercase text-teal-400">Day 7</div>
    <div class="font-bold text-sm mt-1">Social Invitation</div>
    <div class="text-xs text-text/70 mt-1">Invite a acquaintance to a low-pressure activity with clear details.</div>
  </div>
</div>

---

## 🎯 Active Recall Quiz

<div class="bg-gradient-to-br from-slate-900 to-sky-950 p-8 rounded-3xl shadow-2xl border border-white/10 my-10 text-white not-prose space-y-4">
  <details class="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-colors">
    <summary class="flex items-center font-bold p-5 cursor-pointer text-white list-none [&::-webkit-details-marker]:hidden">
      What is the technique of Fogging?
    </summary>
    <div class="p-5 pt-0 pl-14 text-sm text-sky-100/90 border-l-2 border-sky-400">
      Agreeing with the true part of a critic's statement while refusing to accept their emotional or insulting judgment.
    </div>
  </details>
</div>

---

<Quote author="Alan Garner" source="Conversationally Speaking">
  "Listening is not waiting for your turn to speak. It is actively seeking to understand another person's world."
</Quote>

<YouTube videoId="d9-Qp654z2g" />
`
};
