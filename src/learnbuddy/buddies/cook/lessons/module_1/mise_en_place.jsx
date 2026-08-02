import React from 'react';

export const miseEnPlaceLesson = {
  id: 'c1_m1_mise_en_place',
  title: { 
    en: '1.2 The Foundation: Mise en Place', 
    de: '1.2 Das Fundament: Mise en Place' 
  },
  description: { 
    en: 'Learn the most important rule in professional kitchens: everything in its place. This principle will transform your cooking.', 
    de: 'Lerne die wichtigste Regel in Profiküchen: Alles an seinem Platz. Dieses Prinzip wird dein Kochen transformieren.' 
  },
  category: 'basics',
  
  content: {
    de: `
### Das Geheimnis jeder Profiküche 🎯

Es gibt eine Regel, die JEDEN Profikoch von einem gestressten Anfänger unterscheidet. Es ist nicht das schärfste Messer. Es ist nicht das teuerste Geschirr. Es ist nicht einmal Talent.

**Es ist Mise en Place.**

Ausgesprochen: *"Mihs on Plahs"* (Französisch)  
Übersetzt: **"Alles an seinem Platz"**

Diese drei Worte sind das Fundament professioneller Küchen. Vom Sternerestaurant bis zur Schulkantine. Und sie werden auch DEINE Küche revolutionieren.

---

### Was ist Mise en Place?

Mise en Place ist eine Arbeitsphilosophie UND eine konkrete Technik:

<div className="my-6 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 p-6 rounded-xl border-2 border-amber-300 dark:border-amber-700">

**Die Philosophie:**  
Bevor du IRGENDETWAS kochst, ist ALLES vorbereitet, organisiert und griffbereit.

**Die Praxis:**  
- Alle Zutaten sind geschnitten, abgewogen und in Schüsseln bereitgestellt
- Alle Werkzeuge liegen bereit
- Dein Arbeitsplatz ist aufgeräumt
- Du hast das Rezept KOMPLETT gelesen

**Das Ergebnis:**  
Wenn der Herd angeht, musst du nur noch kochen. Kein Suchen. Kein Schneiden unter Zeitdruck. Kein Stress.

</div>

---

### Warum ist Mise en Place SO wichtig?

Lass mich dir zwei Szenarien zeigen:

<div className="grid md:grid-cols-2 gap-4 my-6">

<div className="p-4 bg-red-50 dark:bg-red-900/30 rounded-lg border-l-4 border-red-500">
  <h4 className="font-bold text-red-800 dark:text-red-300 mb-3">❌ OHNE Mise en Place</h4>
  <p className="text-sm text-red-700 dark:text-red-400 mb-3">
    Du fängst an zu kochen. Die Zwiebeln sind im Topf. Jetzt sollst du Knoblauch dazu geben. Aber wo ist der Knoblauch? Ah, noch nicht geschält!
  </p>
  <ul className="text-sm space-y-2 text-red-700 dark:text-red-400">
    <li>🔥 Die Zwiebeln verbrennen, während du Knoblauch schälst</li>
    <li>😰 Du bist gestresst und machst Fehler</li>
    <li>🧂 Du vergisst zu würzen oder würzt doppelt</li>
    <li>⏱️ Alles dauert dreimal so lange</li>
    <li>😫 Kochen fühlt sich chaotisch und anstrengend an</li>
  </ul>
</div>

<div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg border-l-4 border-green-500">
  <h4 className="font-bold text-green-800 dark:text-green-300 mb-3">✅ MIT Mise en Place</h4>
  <p className="text-sm text-green-700 dark:text-green-400 mb-3">
    Alles ist vorbereitet. Zwiebeln in Schüssel A, Knoblauch gehackt in Schüssel B. Gewürze abgemessen. Werkzeuge bereit.
  </p>
  <ul className="text-sm space-y-2 text-green-700 dark:text-green-400">
    <li>🎯 Du arbeitest fokussiert und effizient</li>
    <li>😌 Du bist entspannt und hast Kontrolle</li>
    <li>👨‍🍳 Du kannst dich aufs Kochen konzentrieren, nicht aufs Organisieren</li>
    <li>⚡ Alles geht schneller und geschmeidiger</li>
    <li>😊 Kochen macht Spaß und fühlt sich professionell an</li>
  </ul>
</div>

</div>

**Die Wahrheit:** Mise en Place verwandelt Chaos in Flow. Stress in Meditation. Kochen wird zum Genuss statt zur Qual.

---

### Die 5 Schritte des Mise en Place

Hier ist dein Schritt-für-Schritt-System. JEDES MAL, wenn du kochst:

<div className="space-y-4 my-6">

<div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
  <div className="flex items-center gap-3 mb-2">
    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
    <h4 className="font-bold text-blue-800 dark:text-blue-200">Rezept KOMPLETT lesen</h4>
  </div>
  <p className="text-sm text-blue-700 dark:text-blue-300 ml-11">
    Von oben bis unten. BEVOR du irgendetwas tust. Du willst keine Überraschungen wie "über Nacht marinieren" am Ende des Rezepts.
    <br/><br/>
    <strong>Frage dich:</strong> Habe ich alle Zutaten? Habe ich alle Werkzeuge? Wie viel Zeit brauche ich wirklich?
  </p>
</div>

<div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
  <div className="flex items-center gap-3 mb-2">
    <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
    <h4 className="font-bold text-purple-800 dark:text-purple-200">Arbeitsplatz vorbereiten</h4>
  </div>
  <p className="text-sm text-purple-700 dark:text-purple-300 ml-11">
    Räume ALLES weg, was du nicht brauchst. Deine Arbeitsfläche muss FREI sein.
    <br/><br/>
    <strong>Stelle bereit:</strong>
  </p>
  <ul className="text-sm list-disc list-inside ml-11 mt-2 space-y-1 text-purple-700 dark:text-purple-300">
    <li>Großes Schneidebrett</li>
    <li>Kleine Schüsseln für geschnittene Zutaten</li>
    <li>Eine Schüssel oder einen Behälter für Abfälle</li>
    <li>Feuchtes Tuch unter dem Schneidebrett (verhindert Rutschen!)</li>
    <li>Dein scharfes Messer</li>
  </ul>
</div>

<div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
  <div className="flex items-center gap-3 mb-2">
    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
    <h4 className="font-bold text-green-800 dark:text-green-200">Zutaten vorbereiten</h4>
  </div>
  <p className="text-sm text-green-700 dark:text-green-300 ml-11 mb-2">
    Jetzt kommt die eigentliche Arbeit. Nimm dir Zeit. Es gibt KEINEN Grund zu hetzen.
  </p>
  <ul className="text-sm list-disc list-inside ml-11 space-y-1 text-green-700 dark:text-green-300">
    <li><strong>Wiegen:</strong> Alle Zutaten auf die Waage, in Schüsseln abfüllen</li>
    <li><strong>Schneiden:</strong> Gemüse, Fleisch, Kräuter – alles so, wie es das Rezept verlangt</li>
    <li><strong>Organisieren:</strong> Stelle die Schüsseln in der Reihenfolge auf, wie du sie brauchst</li>
  </ul>
  <p className="text-sm text-green-700 dark:text-green-300 ml-11 mt-3">
    <strong>Profi-Tipp:</strong> Wenn etwas "zur gleichen Zeit" in die Pfanne kommt, stelle es in EINE Schüssel zusammen. Spart Zeit und Geschirr.
  </p>
</div>

<div className="p-4 bg-orange-50 dark:bg-orange-900/30 rounded-lg">
  <div className="flex items-center gap-3 mb-2">
    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
    <h4 className="font-bold text-orange-800 dark:text-orange-200">Werkzeuge bereitlegen</h4>
  </div>
  <p className="text-sm text-orange-700 dark:text-orange-300 ml-11">
    Was wirst du zum Kochen brauchen?
  </p>
  <ul className="text-sm list-disc list-inside ml-11 mt-2 space-y-1 text-orange-700 dark:text-orange-300">
    <li>Töpfe, Pfannen (schon rausgestellt?)</li>
    <li>Kochlöffel, Pfannenwender</li>
    <li>Schneebesen, Sieb, was auch immer das Rezept verlangt</li>
    <li>Messlöffel für Gewürze (falls nötig)</li>
    <li>Topflappen</li>
  </ul>
</div>

<div className="p-4 bg-amber-50 dark:bg-amber-900/30 rounded-lg">
  <div className="flex items-center gap-3 mb-2">
    <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">5</div>
    <h4 className="font-bold text-amber-800 dark:text-amber-200">Kurze Checkliste</h4>
  </div>
  <p className="text-sm text-amber-700 dark:text-amber-300 ml-11 mb-2">
    Bevor du den Herd anmachst, überprüfe nochmal:
  </p>
  <ul className="text-sm list-disc list-inside ml-11 space-y-1 text-amber-700 dark:text-amber-300">
    <li>✅ Sind ALLE Zutaten vorbereitet?</li>
    <li>✅ Sind alle Werkzeuge da?</li>
    <li>✅ Habe ich das Rezept verstanden?</li>
    <li>✅ Ist mein Arbeitsplatz aufgeräumt?</li>
  </ul>
  <p className="text-sm font-bold text-amber-800 dark:text-amber-200 ml-11 mt-3">
    → Wenn ja: JETZT darfst du den Herd anmachen! 🔥
  </p>
</div>

</div>

---

### Der häufigste Fehler: "Das dauert doch zu lange!"

Viele Anfänger denken: "Warum soll ich 15 Minuten mit Vorbereitung verschwenden? Ich will doch KOCHEN!"

**Die Wahrheit:**  
Du "verschwendest" keine Zeit. Du INVESTIERST sie.

Ein Gericht ohne Mise en Place dauert oft **doppelt so lange** und ist deutlich stressiger. Warum?
- Du suchst ständig etwas
- Du machst Fehler unter Zeitdruck
- Du musst mehrmals deine Hände waschen (weil du zwischendurch Knoblauch geschnitten hast)
- Du vergisst Schritte

**Mit Mise en Place:**  
Die Vorbereitung dauert 15 Minuten. Das eigentliche Kochen dauert 10 Minuten. **Total: 25 Minuten.**

**Ohne Mise en Place:**  
Das Kochen dauert 35-40 Minuten, und du bist danach erschöpft.

**Mise en Place spart also nicht nur Zeit, sondern auch Nerven.**

---

### Profi-Tricks für dein Mise en Place

<div className="space-y-4 my-6">

<div className="p-4 bg-teal-50 dark:bg-teal-900/30 rounded-lg border border-teal-200 dark:border-teal-700">
  <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-2">💡 Trick 1: Die "Schüsseln-Hierarchie"</h4>
  <p className="text-sm text-teal-700 dark:text-teal-300">
    Nutze unterschiedliche Größen. Große Mengen (z.B. gehackte Zwiebeln) in große Schüsseln. Kleine Mengen (z.B. Knoblauch, Gewürze) in Espresso-Tassen oder kleine Schälchen.
  </p>
</div>

<div className="p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg border border-indigo-200 dark:border-indigo-700">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">💡 Trick 2: Gruppiere nach Zeit</h4>
  <p className="text-sm text-indigo-700 dark:text-indigo-300">
    Wenn etwas "zur gleichen Zeit" in die Pfanne kommt (z.B. Zwiebeln und Knoblauch oft gleichzeitig), packe es in EINE Schüssel. Weniger Geschirr, schnelleres Kochen.
  </p>
</div>

<div className="p-4 bg-pink-50 dark:bg-pink-900/30 rounded-lg border border-pink-200 dark:border-pink-700">
  <h4 className="font-bold text-pink-800 dark:text-pink-200 mb-2">💡 Trick 3: Die "Abfallschüssel"</h4>
  <p className="text-sm text-pink-700 dark:text-pink-300">
    Stelle eine große Schüssel neben dein Schneidebrett. Alle Schalen, Enden, Abfälle kommen sofort rein. Du läufst nicht ständig zum Mülleimer und dein Brett bleibt frei.
  </p>
</div>

<div className="p-4 bg-cyan-50 dark:bg-cyan-900/30 rounded-lg border border-cyan-200 dark:border-cyan-700">
  <h4 className="font-bold text-cyan-800 dark:text-cyan-200 mb-2">💡 Trick 4: Das "feuchte Tuch"</h4>
  <p className="text-sm text-cyan-700 dark:text-cyan-300">
    Lege ein feuchtes Küchentuch unter dein Schneidebrett. Es rutscht nicht mehr! Dieser simple Trick wird dein Leben verändern.
  </p>
</div>

<div className="p-4 bg-lime-50 dark:bg-lime-900/30 rounded-lg border border-lime-200 dark:border-lime-700">
  <h4 className="font-bold text-lime-800 dark:text-lime-200 mb-2">💡 Trick 5: Gewürze vorportionieren</h4>
  <p className="text-sm text-lime-700 dark:text-lime-300">
    Wenn das Rezept "1 TL Salz, 1/2 TL Pfeffer, 1 TL Paprika" sagt, mische das VORHER in einer kleinen Schüssel. Dann kannst du alles auf einmal reingeben. Wie im Restaurant!
  </p>
</div>

</div>

---

### Die Mise en Place Mentalität

Mise en Place ist mehr als eine Technik. Es ist eine **Lebensphilosophie**.

In Profiküchen ist es ein Zeichen von Respekt. Respekt vor deiner Zeit. Respekt vor deinen Kollegen. Respekt vor dem Essen.

**Diese Mentalität überträgt sich auch ins Leben:**
- Bevor du ein Projekt startest, bereitest du alles vor
- Bevor du lernst, legst du alle Materialien bereit
- Bevor du eine Reise antrittst, packst du sorgfältig

**"Mise en Place" bedeutet:**  
"Ich nehme mir die Zeit, es richtig zu machen."

---

### Zusammenfassung: Die Mise en Place Regel

<div className="my-6 p-6 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40 rounded-xl border-2 border-amber-400 dark:border-amber-600">

**Die Eine Regel, die alles verändert:**

> **Der Herd wird ERST angemacht, wenn ALLES bereit ist.**

Nicht vorher. Niemals. Keine Ausnahmen.

</div>

**Das ist Mise en Place.**  
**Das ist der Unterschied zwischen Amateur und Profi.**  
**Das ist der Unterschied zwischen Stress und Flow.**

Bist du bereit, es zu versuchen? Dann lass uns zur praktischen Übung kommen! 👇
    `,
    en: `
### The Secret of Every Professional Kitchen 🎯

There is one rule that distinguishes EVERY professional chef from a stressed beginner. It's not the sharpest knife. It's not the most expensive cookware. It's not even talent.

**It's Mise en Place.**

Pronounced: *"Meez on plahs"* (French)  
Translated: **"Everything in its place"**

These three words are the foundation of professional kitchens. From Michelin-starred restaurants to school cafeterias. And they will also revolutionize YOUR kitchen.

---

### What is Mise en Place?

Mise en Place is both a work philosophy AND a concrete technique:

<div className="my-6 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 p-6 rounded-xl border-2 border-amber-300 dark:border-amber-700">

**The Philosophy:**  
Before you cook ANYTHING, EVERYTHING is prepared, organized, and within reach.

**The Practice:**  
- All ingredients are cut, weighed, and placed in bowls
- All tools are laid out
- Your workspace is clean
- You've read the recipe COMPLETELY

**The Result:**  
When the stove turns on, you only have to cook. No searching. No cutting under time pressure. No stress.

</div>

---

### Why is Mise en Place SO Important?

Let me show you two scenarios:

<div className="grid md:grid-cols-2 gap-4 my-6">

<div className="p-4 bg-red-50 dark:bg-red-900/30 rounded-lg border-l-4 border-red-500">
  <h4 className="font-bold text-red-800 dark:text-red-300 mb-3">❌ WITHOUT Mise en Place</h4>
  <p className="text-sm text-red-700 dark:text-red-400 mb-3">
    You start cooking. The onions are in the pot. Now you're supposed to add garlic. But where is the garlic? Oh, not peeled yet!
  </p>
  <ul className="text-sm space-y-2 text-red-700 dark:text-red-400">
    <li>🔥 The onions burn while you peel garlic</li>
    <li>😰 You're stressed and make mistakes</li>
    <li>🧂 You forget to season or season twice</li>
    <li>⏱️ Everything takes three times as long</li>
    <li>😫 Cooking feels chaotic and exhausting</li>
  </ul>
</div>

<div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg border-l-4 border-green-500">
  <h4 className="font-bold text-green-800 dark:text-green-300 mb-3">✅ WITH Mise en Place</h4>
  <p className="text-sm text-green-700 dark:text-green-400 mb-3">
    Everything is prepared. Onions in bowl A, chopped garlic in bowl B. Spices measured. Tools ready.
  </p>
  <ul className="text-sm space-y-2 text-green-700 dark:text-green-400">
    <li>🎯 You work focused and efficiently</li>
    <li>😌 You're relaxed and in control</li>
    <li>👨‍🍳 You can focus on cooking, not organizing</li>
    <li>⚡ Everything goes faster and smoother</li>
    <li>😊 Cooking is fun and feels professional</li>
  </ul>
</div>

</div>

**The truth:** Mise en Place transforms chaos into flow. Stress into meditation. Cooking becomes a pleasure instead of a chore.

---

### The 5 Steps of Mise en Place

Here's your step-by-step system. EVERY TIME you cook:

<div className="space-y-4 my-6">

<div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
  <div className="flex items-center gap-3 mb-2">
    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
    <h4 className="font-bold text-blue-800 dark:text-blue-200">Read the Recipe COMPLETELY</h4>
  </div>
  <p className="text-sm text-blue-700 dark:text-blue-300 ml-11">
    From top to bottom. BEFORE you do anything. You don't want surprises like "marinate overnight" at the end of the recipe.
    <br/><br/>
    <strong>Ask yourself:</strong> Do I have all ingredients? Do I have all tools? How much time do I really need?
  </p>
</div>

<div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
  <div className="flex items-center gap-3 mb-2">
    <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
    <h4 className="font-bold text-purple-800 dark:text-purple-200">Prepare Your Workspace</h4>
  </div>
  <p className="text-sm text-purple-700 dark:text-purple-300 ml-11">
    Clear away EVERYTHING you don't need. Your counter must be FREE.
    <br/><br/>
    <strong>Set up:</strong>
  </p>
  <ul className="text-sm list-disc list-inside ml-11 mt-2 space-y-1 text-purple-700 dark:text-purple-300">
    <li>Large cutting board</li>
    <li>Small bowls for cut ingredients</li>
    <li>A bowl or container for scraps</li>
    <li>Damp cloth under the cutting board (prevents slipping!)</li>
    <li>Your sharp knife</li>
  </ul>
</div>

<div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
  <div className="flex items-center gap-3 mb-2">
    <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
    <h4 className="font-bold text-green-800 dark:text-green-200">Prepare Ingredients</h4>
  </div>
  <p className="text-sm text-green-700 dark:text-green-300 ml-11 mb-2">
    Now comes the actual work. Take your time. There's NO reason to rush.
  </p>
  <ul className="text-sm list-disc list-inside ml-11 space-y-1 text-green-700 dark:text-green-300">
    <li><strong>Weigh:</strong> All ingredients on the scale, into bowls</li>
    <li><strong>Cut:</strong> Vegetables, meat, herbs – everything as the recipe requires</li>
    <li><strong>Organize:</strong> Arrange bowls in the order you'll need them</li>
  </ul>
  <p className="text-sm text-green-700 dark:text-green-300 ml-11 mt-3">
    <strong>Pro Tip:</strong> If something goes into the pan "at the same time," put it in ONE bowl together. Saves time and dishes.
  </p>
</div>

<div className="p-4 bg-orange-50 dark:bg-orange-900/30 rounded-lg">
  <div className="flex items-center gap-3 mb-2">
    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
    <h4 className="font-bold text-orange-800 dark:text-orange-200">Lay Out Tools</h4>
  </div>
  <p className="text-sm text-orange-700 dark:text-orange-300 ml-11">
    What will you need for cooking?
  </p>
  <ul className="text-sm list-disc list-inside ml-11 mt-2 space-y-1 text-orange-700 dark:text-orange-300">
    <li>Pots, pans (already out?)</li>
    <li>Wooden spoon, spatula</li>
    <li>Whisk, strainer, whatever the recipe requires</li>
    <li>Measuring spoons for spices (if needed)</li>
    <li>Pot holders</li>
  </ul>
</div>

<div className="p-4 bg-amber-50 dark:bg-amber-900/30 rounded-lg">
  <div className="flex items-center gap-3 mb-2">
    <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">5</div>
    <h4 className="font-bold text-amber-800 dark:text-amber-200">Quick Checklist</h4>
  </div>
  <p className="text-sm text-amber-700 dark:text-amber-300 ml-11 mb-2">
    Before you turn on the stove, check again:
  </p>
  <ul className="text-sm list-disc list-inside ml-11 space-y-1 text-amber-700 dark:text-amber-300">
    <li>✅ Are ALL ingredients prepared?</li>
    <li>✅ Are all tools there?</li>
    <li>✅ Do I understand the recipe?</li>
    <li>✅ Is my workspace clean?</li>
  </ul>
  <p className="text-sm font-bold text-amber-800 dark:text-amber-200 ml-11 mt-3">
    → If yes: NOW you can turn on the stove! 🔥
  </p>
</div>

</div>

---

### The Most Common Mistake: "That takes too long!"

Many beginners think: "Why should I waste 15 minutes on preparation? I want to COOK!"

**The truth:**  
You're not "wasting" time. You're INVESTING it.

A dish without Mise en Place often takes **twice as long** and is much more stressful. Why?
- You're constantly searching for something
- You make mistakes under time pressure
- You have to wash your hands multiple times (because you cut garlic in between)
- You forget steps

**With Mise en Place:**  
Preparation takes 15 minutes. Actual cooking takes 10 minutes. **Total: 25 minutes.**

**Without Mise en Place:**  
Cooking takes 35-40 minutes, and you're exhausted afterward.

**So Mise en Place saves not only time, but also nerves.**

---

### Pro Tricks for Your Mise en Place

<div className="space-y-4 my-6">

<div className="p-4 bg-teal-50 dark:bg-teal-900/30 rounded-lg border border-teal-200 dark:border-teal-700">
  <h4 className="font-bold text-teal-800 dark:text-teal-200 mb-2">💡 Trick 1: The "Bowl Hierarchy"</h4>
  <p className="text-sm text-teal-700 dark:text-teal-300">
    Use different sizes. Large quantities (e.g., chopped onions) in large bowls. Small quantities (e.g., garlic, spices) in espresso cups or small dishes.
  </p>
</div>

<div className="p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg border border-indigo-200 dark:border-indigo-700">
  <h4 className="font-bold text-indigo-800 dark:text-indigo-200 mb-2">💡 Trick 2: Group by Time</h4>
  <p className="text-sm text-indigo-700 dark:text-indigo-300">
    If something goes into the pan "at the same time" (e.g., onions and garlic often simultaneously), put it in ONE bowl. Less dishes, faster cooking.
  </p>
</div>

<div className="p-4 bg-pink-50 dark:bg-pink-900/30 rounded-lg border border-pink-200 dark:border-pink-700">
  <h4 className="font-bold text-pink-800 dark:text-pink-200 mb-2">💡 Trick 3: The "Scrap Bowl"</h4>
  <p className="text-sm text-pink-700 dark:text-pink-300">
    Place a large bowl next to your cutting board. All peels, ends, scraps go in immediately. You don't constantly run to the trash and your board stays clear.
  </p>
</div>

<div className="p-4 bg-cyan-50 dark:bg-cyan-900/30 rounded-lg border border-cyan-200 dark:border-cyan-700">
  <h4 className="font-bold text-cyan-800 dark:text-cyan-200 mb-2">💡 Trick 4: The "Damp Cloth"</h4>
  <p className="text-sm text-cyan-700 dark:text-cyan-300">
    Place a damp kitchen towel under your cutting board. It won't slip anymore! This simple trick will change your life.
  </p>
</div>

<div className="p-4 bg-lime-50 dark:bg-lime-900/30 rounded-lg border border-lime-200 dark:border-lime-700">
  <h4 className="font-bold text-lime-800 dark:text-lime-200 mb-2">💡 Trick 5: Pre-portion Spices</h4>
  <p className="text-sm text-lime-700 dark:text-lime-300">
    If the recipe says "1 tsp salt, 1/2 tsp pepper, 1 tsp paprika," mix that BEFOREHAND in a small bowl. Then you can add everything at once. Like in a restaurant!
  </p>
</div>

</div>

---

### The Mise en Place Mentality

Mise en Place is more than a technique. It's a **life philosophy**.

In professional kitchens, it's a sign of respect. Respect for your time. Respect for your colleagues. Respect for the food.

**This mentality also transfers to life:**
- Before you start a project, you prepare everything
- Before you study, you lay out all materials
- Before you go on a trip, you pack carefully

**"Mise en Place" means:**  
"I take the time to do it right."

---

### Summary: The Mise en Place Rule

<div className="my-6 p-6 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40 rounded-xl border-2 border-amber-400 dark:border-amber-600">

**The One Rule That Changes Everything:**

> **The stove is turned on ONLY when EVERYTHING is ready.**

Not before. Never. No exceptions.

</div>

**That is Mise en Place.**  
**That is the difference between amateur and professional.**  
**That is the difference between stress and flow.**

Are you ready to try it? Then let's move on to the practical exercise! 👇
    `
  },

  // Task that can be saved to the plan
  task: {
    de: {
      title: 'Mise en Place Masterclass: Tomatensauce',
      description: 'Übe Mise en Place mit einem einfachen Rezept. Diese Übung wird deine Kochweise für immer verändern. Du wirst den Unterschied sofort spüren!',
      checklist: [
        { text: 'Wähle das Tomatensauce-Rezept aus Lektion 1.1 oder ein anderes einfaches Rezept deiner Wahl' },
        { text: 'Lies das komplette Rezept BEVOR du anfängst (notiere dir unklare Begriffe)' },
        { text: 'Bereite deinen Arbeitsplatz vor: Räume alles weg, stelle Schüsseln bereit, lege ein feuchtes Tuch unter dein Schneidebrett' },
        { text: 'Schneide ALLE Zutaten und fülle sie in separate Schüsseln (Zwiebeln, Knoblauch, etc.)' },
        { text: 'Wiege alle trockenen Zutaten ab (Salz, Zucker, Gewürze)' },
        { text: 'Stelle alle Werkzeuge bereit (Topf, Kochlöffel, etc.)' },
        { text: 'Mache eine Checkliste: Ist alles bereit? Erst JETZT darfst du den Herd anmachen!' },
        { text: 'Koche das Gericht. Beobachte, wie entspannt du bist, weil alles bereit ist' },
        { text: 'Reflektiere: Wie fühlte sich das an? Notiere deine Erkenntnisse' }
      ]
    },
    en: {
      title: 'Mise en Place Masterclass: Tomato Sauce',
      description: 'Practice Mise en Place with a simple recipe. This exercise will change your cooking forever. You\'ll feel the difference immediately!',
      checklist: [
        { text: 'Choose the tomato sauce recipe from Lesson 1.1 or another simple recipe of your choice' },
        { text: 'Read the complete recipe BEFORE you start (note any unclear terms)' },
        { text: 'Prepare your workspace: Clear everything away, set up bowls, place a damp cloth under your cutting board' },
        { text: 'Cut ALL ingredients and place them in separate bowls (onions, garlic, etc.)' },
        { text: 'Weigh all dry ingredients (salt, sugar, spices)' },
        { text: 'Set out all tools (pot, wooden spoon, etc.)' },
        { text: 'Do a checklist: Is everything ready? Only NOW can you turn on the stove!' },
        { text: 'Cook the dish. Notice how relaxed you are because everything is ready' },
        { text: 'Reflect: How did that feel? Write down your insights' }
      ]
    }
  },

  // Flashcards for memorization
  notes: {
    de: [
      {
        front: 'Was bedeutet "Mise en Place"?',
        back: 'Französisch für "Alles an seinem Platz". Es bedeutet: Alle Zutaten sind vorbereitet, geschnitten und bereitgestellt, BEVOR der Herd angeht.'
      },
      {
        front: 'Welche 5 Schritte gehören zum Mise en Place?',
        back: '1. Rezept komplett lesen\n2. Arbeitsplatz vorbereiten\n3. Zutaten vorbereiten (schneiden, wiegen)\n4. Werkzeuge bereitlegen\n5. Checkliste: Ist alles bereit?'
      },
      {
        front: 'Warum spart Mise en Place Zeit?',
        back: 'Ohne Mise en Place suchst du ständig, machst Fehler unter Zeitdruck und vergisst Schritte. MIT Mise en Place kochst du fokussiert und effizient. Das Gesamtresultat: Schneller und weniger stressig!'
      },
      {
        front: 'Was ist der "Profi-Trick" mit der Abfallschüssel?',
        back: 'Stelle eine große Schüssel neben dein Schneidebrett. Alle Schalen und Abfälle kommen sofort rein. Du läufst nicht ständig zum Mülleimer.'
      },
      {
        front: 'Warum ein feuchtes Tuch unter dem Schneidebrett?',
        back: 'Es verhindert, dass das Schneidebrett rutscht. Ein einfacher Trick, der die Sicherheit und Effizienz massiv erhöht!'
      },
      {
        front: 'Wann wird der Herd angemacht?',
        back: 'ERST wenn ALLES vorbereitet ist. Alle Zutaten geschnitten, alle Werkzeuge bereit. Nicht vorher. Niemals. Das ist die goldene Regel!'
      },
      {
        front: 'Wie organisiert man Zutaten, die gleichzeitig in die Pfanne kommen?',
        back: 'Packe sie in EINE Schüssel zusammen (z.B. Zwiebeln + Knoblauch). Das spart Zeit beim Kochen und Geschirr beim Abwasch.'
      },
      {
        front: 'Was ist die "Mise en Place Mentalität"?',
        back: 'Nicht nur eine Technik, sondern eine Lebensphilosophie: "Ich nehme mir die Zeit, es richtig zu machen." Vorbereitung ist der Schlüssel zum Erfolg.'
      }
    ],
    en: [
      {
        front: 'What does "Mise en Place" mean?',
        back: 'French for "Everything in its place". It means: All ingredients are prepared, cut, and set out BEFORE the stove goes on.'
      },
      {
        front: 'What are the 5 steps of Mise en Place?',
        back: '1. Read recipe completely\n2. Prepare workspace\n3. Prepare ingredients (cut, weigh)\n4. Lay out tools\n5. Checklist: Is everything ready?'
      },
      {
        front: 'Why does Mise en Place save time?',
        back: 'Without Mise en Place you\'re constantly searching, making mistakes under pressure, and forgetting steps. WITH Mise en Place you cook focused and efficiently. Net result: Faster and less stressful!'
      },
      {
        front: 'What is the "pro trick" with the scrap bowl?',
        back: 'Place a large bowl next to your cutting board. All peels and scraps go in immediately. You don\'t constantly run to the trash.'
      },
      {
        front: 'Why a damp cloth under the cutting board?',
        back: 'It prevents the cutting board from slipping. A simple trick that massively increases safety and efficiency!'
      },
      {
        front: 'When do you turn on the stove?',
        back: 'ONLY when EVERYTHING is prepared. All ingredients cut, all tools ready. Not before. Never. That\'s the golden rule!'
      },
      {
        front: 'How do you organize ingredients that go in the pan at the same time?',
        back: 'Put them in ONE bowl together (e.g., onions + garlic). This saves time while cooking and dishes when cleaning.'
      },
      {
        front: 'What is the "Mise en Place mentality"?',
        back: 'Not just a technique, but a life philosophy: "I take the time to do it right." Preparation is the key to success.'
      }
    ]
  }
};


