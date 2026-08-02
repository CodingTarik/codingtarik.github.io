export const criticalThinking = {
    id: 'philosophy-critical-thinking',
    title: {
        en: 'Critical Thinking: Think Clearly',
        de: 'Kritisches Denken: Klar denken'
    },
    difficulty: 'intermediate',
    duration: 50,
    description: {
        en: 'Identify logical fallacies, evaluate sources, analyze arguments, and recognize cognitive biases.',
        de: 'Erkenne logische Fehlschlüsse, bewerte Quellen, analysiere Argumente und erkenne kognitive Verzerrungen.'
    },
    content: {
        en: `## Critical Thinking: Think Clearly

### Why Critical Thinking Matters
In an age of information overload, misinformation, and AI-generated content, the ability to **think critically** is more important than ever. Critical thinking isn't about being negative – it's about evaluating information objectively.

---

### The Most Common Logical Fallacies

<div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg my-4">
  <p className="font-bold text-red-800 dark:text-red-200">Top 10 Fallacies You'll Encounter Daily</p>
  <table className="w-full mt-2 text-red-700 dark:text-red-300 text-sm">
    <tr><td className="font-bold pr-2 py-1 align-top">Ad Hominem</td><td>Attacking the person instead of the argument. "You can't talk about health, you're overweight."</td></tr>
    <tr><td className="font-bold pr-2 py-1 align-top">Straw Man</td><td>Misrepresenting someone's argument to make it easier to attack.</td></tr>
    <tr><td className="font-bold pr-2 py-1 align-top">Appeal to Authority</td><td>"A famous person said it, so it must be true."</td></tr>
    <tr><td className="font-bold pr-2 py-1 align-top">False Dilemma</td><td>Presenting only two options when more exist. "You're either with us or against us."</td></tr>
    <tr><td className="font-bold pr-2 py-1 align-top">Slippery Slope</td><td>"If we allow X, soon Y and Z will happen." Without evidence for the chain.</td></tr>
    <tr><td className="font-bold pr-2 py-1 align-top">Confirmation Bias</td><td>Only seeking information that confirms what you already believe.</td></tr>
    <tr><td className="font-bold pr-2 py-1 align-top">Appeal to Emotion</td><td>Using fear, pity, or anger instead of evidence.</td></tr>
    <tr><td className="font-bold pr-2 py-1 align-top">Bandwagon</td><td>"Everyone is doing it, so it must be right."</td></tr>
    <tr><td className="font-bold pr-2 py-1 align-top">Red Herring</td><td>Introducing an irrelevant topic to divert attention.</td></tr>
    <tr><td className="font-bold pr-2 py-1 align-top">Circular Reasoning</td><td>The conclusion is used as a premise. "It's true because I believe it, and I believe it because it's true."</td></tr>
  </table>
</div>

---

### Evaluating Sources (CRAAP Test)

<div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg my-4">
  <ul className="text-blue-700 dark:text-blue-300 space-y-2">
    <li><strong>C – Currency:</strong> When was it published? Is it up to date?</li>
    <li><strong>R – Relevance:</strong> Does it address your question directly?</li>
    <li><strong>A – Authority:</strong> Who is the author? What are their credentials?</li>
    <li><strong>A – Accuracy:</strong> Is it supported by evidence? Can you verify it elsewhere?</li>
    <li><strong>P – Purpose:</strong> Is it informing, persuading, selling, or entertaining?</li>
  </ul>
</div>

---

### Key Cognitive Biases

**Anchoring Bias:** Over-relying on the first piece of information you receive.
**Dunning-Kruger Effect:** Beginners overestimate their knowledge; experts underestimate theirs.
**Survivorship Bias:** Focusing on successes while ignoring failures (e.g., "Bill Gates dropped out, so school doesn't matter").
**Sunk Cost Fallacy:** Continuing something because you've already invested in it, even when quitting is smarter.
**Availability Heuristic:** Judging probability by how easily examples come to mind (plane crashes vs. car accidents).

---

### The Argument Analysis Framework

When evaluating any argument, ask:
1. **What is the claim?** State it clearly.
2. **What is the evidence?** Facts, data, expert opinion?
3. **What are the assumptions?** What's being taken for granted?
4. **What are the counter-arguments?** Steel-man the opposing view.
5. **What is the conclusion?** Does it follow logically from the evidence?`,

        de: `## Kritisches Denken: Klar denken

### Warum kritisches Denken wichtig ist
In einem Zeitalter der Informationsflut, Falschinformationen und KI-generierter Inhalte ist die Fähigkeit zum **kritischen Denken** wichtiger denn je. Kritisches Denken heißt nicht negativ sein – es bedeutet, Informationen objektiv zu bewerten.

---

### Die häufigsten logischen Fehlschlüsse

<div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg my-4">
  <p className="font-bold text-red-800 dark:text-red-200">Top 10 Fehlschlüsse, denen du täglich begegnest</p>
  <table className="w-full mt-2 text-red-700 dark:text-red-300 text-sm">
    <tr><td className="font-bold pr-2 py-1 align-top">Ad Hominem</td><td>Die Person angreifen statt das Argument. "Du kannst nicht über Gesundheit reden, du bist übergewichtig."</td></tr>
    <tr><td className="font-bold pr-2 py-1 align-top">Strohmann</td><td>Jemandes Argument verzerrt darstellen, um es leichter angreifbar zu machen.</td></tr>
    <tr><td className="font-bold pr-2 py-1 align-top">Autoritätsargument</td><td>"Eine berühmte Person hat es gesagt, also muss es stimmen."</td></tr>
    <tr><td className="font-bold pr-2 py-1 align-top">Falsches Dilemma</td><td>Nur zwei Optionen präsentieren, wenn mehr existieren. "Du bist entweder für uns oder gegen uns."</td></tr>
    <tr><td className="font-bold pr-2 py-1 align-top">Dammbruch</td><td>"Wenn wir X erlauben, passiert bald Y und Z." Ohne Beweise für die Kette.</td></tr>
    <tr><td className="font-bold pr-2 py-1 align-top">Bestätigungsfehler</td><td>Nur Informationen suchen, die bestätigen, was man bereits glaubt.</td></tr>
    <tr><td className="font-bold pr-2 py-1 align-top">Appell an Emotionen</td><td>Angst, Mitleid oder Wut statt Beweisen verwenden.</td></tr>
    <tr><td className="font-bold pr-2 py-1 align-top">Mitläufer-Effekt</td><td>"Alle machen es, also muss es richtig sein."</td></tr>
    <tr><td className="font-bold pr-2 py-1 align-top">Ablenkungsmanöver</td><td>Ein irrelevantes Thema einführen, um abzulenken.</td></tr>
    <tr><td className="font-bold pr-2 py-1 align-top">Zirkelschluss</td><td>Die Schlussfolgerung wird als Prämisse benutzt. "Es stimmt, weil ich es glaube, und ich glaube es, weil es stimmt."</td></tr>
  </table>
</div>

---

### Quellen bewerten (CRAAP-Test)

<div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg my-4">
  <ul className="text-blue-700 dark:text-blue-300 space-y-2">
    <li><strong>C – Aktualität (Currency):</strong> Wann wurde es veröffentlicht? Ist es aktuell?</li>
    <li><strong>R – Relevanz (Relevance):</strong> Beantwortet es deine Frage direkt?</li>
    <li><strong>A – Autorität (Authority):</strong> Wer ist der Autor? Welche Qualifikationen hat er?</li>
    <li><strong>A – Genauigkeit (Accuracy):</strong> Wird es durch Beweise gestützt? Lässt es sich anderweitig überprüfen?</li>
    <li><strong>P – Zweck (Purpose):</strong> Informiert, überzeugt, verkauft oder unterhält es?</li>
  </ul>
</div>

---

### Wichtige kognitive Verzerrungen

**Ankereffekt:** Sich zu sehr auf die erste Information verlassen, die man erhält.
**Dunning-Kruger-Effekt:** Anfänger überschätzen ihr Wissen; Experten unterschätzen ihres.
**Überlebensfehler (Survivorship Bias):** Sich auf Erfolge konzentrieren und Misserfolge ignorieren (z.B. "Bill Gates hat abgebrochen, also ist Schule unwichtig").
**Sunk-Cost-Fallacy:** Weitermachen, weil man schon investiert hat, auch wenn Aufhören klüger wäre.
**Verfügbarkeitsheuristik:** Wahrscheinlichkeit danach beurteilen, wie leicht Beispiele einfallen (Flugzeugabstürze vs. Autounfälle).

---

### Das Argument-Analyse-Framework

Frage bei jedem Argument:
1. **Was ist die Behauptung?** Formuliere sie klar.
2. **Was sind die Beweise?** Fakten, Daten, Expertenmeinungen?
3. **Was sind die Annahmen?** Was wird als gegeben vorausgesetzt?
4. **Was sind die Gegenargumente?** Stelle die Gegenseite möglichst stark dar (Steel Man).
5. **Was ist die Schlussfolgerung?** Folgt sie logisch aus den Beweisen?`
    },
    task: {
        en: {
            title: 'Sharpen Your Thinking',
            description: 'Practice identifying fallacies and biases in everyday life.',
            checklist: [
                { text: 'Find 3 logical fallacies in news articles or social media posts today' },
                { text: 'Evaluate one source using the CRAAP test' },
                { text: 'Identify a cognitive bias that affected a recent decision of yours' },
                { text: 'Steel-man an opinion you disagree with' }
            ]
        },
        de: {
            title: 'Schärfe dein Denken',
            description: 'Übe, Fehlschlüsse und Verzerrungen im Alltag zu erkennen.',
            checklist: [
                { text: 'Finde heute 3 logische Fehlschlüsse in Nachrichtenartikeln oder Social Media' },
                { text: 'Bewerte eine Quelle mit dem CRAAP-Test' },
                { text: 'Identifiziere eine kognitive Verzerrung, die eine kürzliche Entscheidung beeinflusst hat' },
                { text: 'Stelle eine Meinung, der du widersprichst, möglichst stark dar (Steel Man)' }
            ]
        }
    },
    exercises: [
        { id: 'fallacy-spotter', title: { en: 'Fallacy Spotter', de: 'Fehlschluss-Finder' }, description: { en: 'Watch a political debate and identify as many fallacies as you can.', de: 'Schau eine politische Debatte und identifiziere so viele Fehlschlüsse wie möglich.' } }
    ],
    notes: {
        en: [
            { front: 'CRAAP Test', back: 'Currency, Relevance, Authority, Accuracy, Purpose – evaluate any source.' },
            { front: 'Top 3 Biases', back: 'Confirmation Bias, Sunk Cost Fallacy, Dunning-Kruger Effect.' },
            { front: 'Argument Analysis', back: 'Claim → Evidence → Assumptions → Counter-arguments → Conclusion.' }
        ],
        de: [
            { front: 'CRAAP-Test', back: 'Aktualität, Relevanz, Autorität, Genauigkeit, Zweck – jede Quelle bewerten.' },
            { front: 'Top 3 Verzerrungen', back: 'Bestätigungsfehler, Sunk-Cost-Fallacy, Dunning-Kruger-Effekt.' },
            { front: 'Argument-Analyse', back: 'Behauptung → Beweise → Annahmen → Gegenargumente → Schlussfolgerung.' }
        ]
    }
};
