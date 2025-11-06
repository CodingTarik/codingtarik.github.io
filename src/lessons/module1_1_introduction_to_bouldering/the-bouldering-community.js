
import { Users, MessagesSquare, Trophy, Heart, Share2, Youtube, Instagram, Link, BrainCircuit, Lightbulb } from 'lucide-react';

export const theBoulderingCommunity = {
  de: {
    title: "Die Boulder-Community: Mehr als nur ein Sport",
    description: "Tauche tief ein in die einzigartige Kultur des Boulderns, von der kollaborativen Atmosphäre in der Halle bis zu den globalen Online-Netzwerken.",
    content: `
### Du kletterst nie allein

Vom ersten Moment an, in dem du eine Boulderhalle betrittst, bist du Teil einer weltweiten Gemeinschaft. Die Kultur ist geprägt von einer einzigartigen Mischung aus individueller Herausforderung und kollektiver Unterstützung. Der wahre Gegner ist nie der andere Kletterer, sondern immer der Boulder selbst. Das schweißt zusammen.

#### Die Hallen-Kultur: Dein zweites Wohnzimmer
<div className="p-6 bg-white dark:bg-stone-800 rounded-xl shadow-lg border-2 border-stone-100 dark:border-stone-700 my-6">
    <div className="flex items-center gap-3 mb-3">
      <Heart size={32} className="text-teal-500" />
      <h4 className="text-xl font-bold text-stone-800 dark:text-stone-100">Der Vibe: Kollaborativ, nicht kompetitiv</h4>
    </div>
    <p className="text-stone-600 dark:text-stone-400 mb-4">Stell dir vor, du sitzt auf der Matte, frustriert von einem Zug, der unmöglich scheint. Plötzlich kommt jemand, den du noch nie gesehen hast, und sagt: "Hey, hast du mal versucht, den Fuß höher zu setzen und mehr einzudrehen?" Das ist die Essenz der Boulder-Community. Man kämpft gemeinsam gegen die Schwerkraft. Jeder teilt sein Wissen ("Beta"), weil der Erfolg eines anderen sich wie der eigene anfühlt.</p>
</div>

<div className="flex flex-col items-center gap-4 p-5 my-6 bg-teal-100 dark:bg-teal-900/50 rounded-lg shadow-lg">
    <div className="flex items-center gap-2">
      <Share2 size={32} className="text-teal-600 dark:text-teal-400" />
      <h4 className="font-bold text-xl text-teal-800 dark:text-teal-200">Visueller Beta-Flow: Gemeinsam zum Erfolg</h4>
    </div>
    <p className="text-center text-sm text-teal-700 dark:text-teal-300 mb-4">So funktioniert der Wissensaustausch in der Praxis:</p>
    <div className="w-full text-center">
      <svg viewBox="0 0 300 100" className="w-full max-w-lg mx-auto">
        <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#14b8a6" />
            </marker>
        </defs>
        {/* Nodes */}
        <g>
            <circle cx="50" cy="50" r="20" fill="#f59e0b" />
            <BrainCircuit x="40" y="40" width="20" height="20" className="text-white" />
            <text x="50" y="80" text-anchor="middle" font-size="10" className="fill-stone-700 dark:fill-stone-300">Du versuchst</text>
        </g>
        <g>
            <circle cx="150" cy="50" r="20" fill="#f472b6" />
            <Users x="140" y="40" width="20" height="20" className="text-white" />
            <text x="150" y="80" text-anchor="middle" font-size="10" className="fill-stone-700 dark:fill-stone-300">Jemand teilt Beta</text>
        </g>
        <g>
            <circle cx="250" cy="50" r="20" fill="#14b8a6" />
            <Lightbulb x="240" y="40" width="20" height="20" className="text-white" />
            <text x="250" y="80" text-anchor="middle" font-size="10" className="fill-stone-700 dark:fill-stone-300">Aha-Moment!</text>
        </g>
        {/* Arrows */}
        <line x1="75" y1="50" x2="125" y2="50" stroke="#14b8a6" stroke-width="2" marker-end="url(#arrow)" />
        <line x1="175" y1="50" x2="225" y2="50" stroke="#14b8a6" stroke-width="2" marker-end="url(#arrow)" />
      </svg>
    </div>
</div>


### Die Community Online: Global und rund um die Uhr
Wenn die Halle schließt, geht die Konversation online weiter. Das ist der perfekte Ort, um Inspiration zu finden, Techniken zu lernen und mit Kletterern aus aller Welt in Kontakt zu treten.

<h5 className="font-bold text-lg text-stone-800 dark:text-stone-200 mt-6 mb-3 flex items-center gap-2"><Youtube className="text-red-500" />YouTube: Deine Video-Coaches</h5>
<p className="text-sm text-stone-600 dark:text-stone-400 mb-4">Hier findest du alles – von professionellen Analysen bis zu reiner Unterhaltung.</p>

*   **Für Technik & Training:**
    *   [Lattice Training](https://www.youtube.com/@LatticeTraining): Wissenschaftlich fundierte Trainings-Tipps von Profis.
    *   [Bouldering Bobat](https://www.youtube.com/@BoulderingBobat): Sehr anfängerfreundliche Erklärungen zu grundlegenden und fortgeschrittenen Techniken.
*   **Für Unterhaltung & Vlogs:**
    *   [Magnus Midtbø](https://www.youtube.com/@MagnusMidtbo): Einer der größten Kletter-YouTuber, testet alles, was mit Klettern zu tun hat.
    *   [Adam Ondra](https://www.youtube.com/@adamondra): Einblicke in das Leben und Training des weltbesten Kletterers.

<h5 className="font-bold text-lg text-stone-800 dark:text-stone-200 mt-6 mb-3 flex items-center gap-2"><Instagram className="text-pink-500" />Instagram: Tägliche Inspiration</h5>
<p className="text-sm text-stone-600 dark:text-stone-400 mb-2">Folge Profis für Motivation und schau dir unter #bouldering an, was die Community weltweit bewegt.</p>

*   [Janja Garnbret (@jain_jas)](https://www.instagram.com/jain_jas/): Die erfolgreichste Wettkampfkletterin aller Zeiten.
*   [Tomoa Narasaki (@tomoanarasaki)](https://www.instagram.com/tomoanarasaki/): Japanischer Top-Athlet mit explosivem Stil.


<h5 className="font-bold text-lg text-stone-800 dark:text-stone-200 mt-6 mb-3 flex items-center gap-2"><MessagesSquare className="text-orange-500" />Reddit: Die Diskussionsplattform</h5>
<p className="text-sm text-stone-600 dark:text-stone-400 mb-2">Hier kannst du anonym Fragen stellen, deine Erfolge teilen und tief in Diskussionen eintauchen.</p>

*   **r/bouldering:** Der Haupt-Hub für alles. Perfekt für Anfängerfragen, Memes und das Teilen deines ersten "Sends".
*   **r/climbharder:** Wenn du dein Training ernst nimmst. Hier geht es um Trainingspläne, Verletzungsprävention und Leistungssteigerung.

### Wettkämpfe & Events: Die Community feiert
Wettkämpfe sind eine großartige Möglichkeit, die Community zu erleben. Viele Hallen veranstalten regelmäßig Events und "Fun Cups", die auch für Anfänger geeignet sind. Es ist eine Party, bei der nebenbei auch geklettert wird!

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
  <div className="p-4 bg-stone-100 dark:bg-stone-800 rounded-lg">
    <div className="flex items-center gap-3 mb-2">
      <MessagesSquare className="text-orange-500" />
      <h5 className="font-bold text-stone-800 dark:text-stone-200">Inspiration & Austausch</h5>
    </div>
    <p className="text-sm text-stone-600 dark:text-stone-400">Plattformen wie <strong>Instagram</strong>, <strong>YouTube</strong> und <strong>Reddit (r/bouldering)</strong> sind voll von inspirierenden Videos, hilfreichen Tutorials und Diskussionen. Hier kannst du von den Profis lernen und dich mit Gleichgesinnten vernetzen.</p>
  </div>
  <div className="p-4 bg-stone-100 dark:bg-stone-800 rounded-lg">
    <div className="flex items-center gap-3 mb-2">
      <Trophy className="text-purple-500" />
      <h5 className="font-bold text-stone-800 dark:text-stone-200">Wettkämpfe & Events</h5>
    </div>
    <p className="text-sm text-stone-600 dark:text-stone-400">Wettkämpfe sind eine großartige Möglichkeit, die Community zu erleben. Viele Hallen veranstalten regelmäßig Events und "Fun Cups", die auch für Anfänger geeignet sind. Es ist eine Party, bei der nebenbei auch geklettert wird!</p>
  </div>
</div>

#### Wie du Anschluss findest
*   **Sei offen:** Sprich Leute an und frage nach Tipps, wenn du nicht weiterkommst.
*   **Nimm an einem Kurs teil:** Ein Anfängerkurs ist der beste Weg, um Grundlagen zu lernen und gleichzeitig neue Leute kennenzulernen.
*   **Besuche Events:** Halte Ausschau nach Events in deiner lokalen Halle.
    `,
    task: {
      title: "Aufgabe: Werde Teil der Online-Community",
      description: "Tauche in die digitale Welt des Boulderns ein, um Inspiration zu finden und von anderen zu lernen.",
      checklist: [
        { text: "Folge 3 professionellen Boulder-Athleten auf Instagram oder YouTube.", checked: false },
        { text: "Tritt dem r/bouldering Subreddit bei und lies dir die Top-Posts der Woche durch.", checked: false },
        { text: "Suche auf YouTube nach einem Tutorial zu einer bestimmten Technik, die dich interessiert (z.B. 'Heel Hook Tutorial').", checked: false },
        { text: "Finde heraus, ob deine lokale Boulderhalle einen Social-Media-Account hat und folge ihm für Neuigkeiten und Events.", checked: false },
      ]
    },
    quiz: [
      {
        question: "Was beschreibt die Kultur in den meisten Boulderhallen am besten?",
        answer: "Kollaborativ, unterstützend und nicht-kompetitiv. Der Fokus liegt auf persönlichem Fortschritt und gemeinsamem Spaß."
      },
      {
        question: "Was ist 'Beta' und wie solltest du damit umgehen?",
        answer: "'Beta' sind Tipps zur Lösung eines Boulders. Man sollte sie nur geben, wenn man danach gefragt wird."
      },
      {
        question: "Nenne zwei Online-Plattformen, auf denen die Boulder-Community sehr aktiv ist.",
        answer: "Instagram, YouTube und der Subreddit r/bouldering sind sehr populär."
      }
    ]
  },
  en: {
    title: "The Bouldering Community: More Than Just a Sport",
    description: "Dive deep into the unique culture of bouldering, from the collaborative atmosphere in the gym to global online networks.",
    content: `
### You Never Climb Alone

From the moment you step into a bouldering gym, you are part of a global community. The culture is characterized by a unique mix of individual challenge and collective support. The real opponent is never the other climber, but always the boulder itself. This creates a strong bond.

#### The Gym Culture: Your Second Living Room
<div className="p-6 bg-white dark:bg-stone-800 rounded-xl shadow-lg border-2 border-stone-100 dark:border-stone-700 my-6">
    <div className="flex items-center gap-3 mb-3">
      <Heart size={32} className="text-teal-500" />
      <h4 className="text-xl font-bold text-stone-800 dark:text-stone-100">The Vibe: Collaborative, Not Competitive</h4>
    </div>
    <p className="text-stone-600 dark:text-stone-400 mb-4">Imagine sitting on the mat, frustrated by a move that seems impossible. Suddenly, someone you've never seen before comes over and says, "Hey, have you tried putting your foot up higher and twisting your hip?" That's the essence of the bouldering community. You fight against gravity together. Everyone shares their knowledge ("beta") because someone else's success feels like your own.</p>
</div>

<div className="flex flex-col items-center gap-4 p-5 my-6 bg-teal-100 dark:bg-teal-900/50 rounded-lg shadow-lg">
    <div className="flex items-center gap-2">
      <Share2 size={32} className="text-teal-600 dark:text-teal-400" />
      <h4 className="font-bold text-xl text-teal-800 dark:text-teal-200">Visual Beta Flow: Success Through Collaboration</h4>
    </div>
    <p className="text-center text-sm text-teal-700 dark:text-teal-300 mb-4">This is how knowledge sharing works in practice:</p>
    <div className="w-full text-center">
      <svg viewBox="0 0 300 100" className="w-full max-w-lg mx-auto">
        <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#14b8a6" />
            </marker>
        </defs>
        {/* Nodes */}
        <g>
            <circle cx="50" cy="50" r="20" fill="#f59e0b" />
            <BrainCircuit x="40" y="40" width="20" height="20" className="text-white" />
            <text x="50" y="80" text-anchor="middle" font-size="10" className="fill-stone-700 dark:fill-stone-300">You try</text>
        </g>
        <g>
            <circle cx="150" cy="50" r="20" fill="#f472b6" />
            <Users x="140" y="40" width="20" height="20" className="text-white" />
            <text x="150" y="80" text-anchor="middle" font-size="10" className="fill-stone-700 dark:fill-stone-300">Someone shares beta</text>
        </g>
        <g>
            <circle cx="250" cy="50" r="20" fill="#14b8a6" />
            <Lightbulb x="240" y="40" width="20" height="20" className="text-white" />
            <text x="250" y="80" text-anchor="middle" font-size="10" className="fill-stone-700 dark:fill-stone-300">Aha-Moment!</text>
        </g>
        {/* Arrows */}
        <line x1="75" y1="50" x2="125" y2="50" stroke="#14b8a6" stroke-width="2" marker-end="url(#arrow)" />
        <line x1="175" y1="50" x2="225" y2="50" stroke="#14b8a6" stroke-width="2" marker-end="url(#arrow)" />
      </svg>
    </div>
</div>

### The Community Online: Global and 24/7
When the gym closes, the conversation continues online. This is the perfect place to find inspiration, learn techniques, and connect with climbers from all over the world.

<h5 className="font-bold text-lg text-stone-800 dark:text-stone-200 mt-6 mb-3 flex items-center gap-2"><Youtube className="text-red-500" />YouTube: Your Video Coaches</h5>
<p className="text-sm text-stone-600 dark:text-stone-400 mb-4">You'll find everything here – from professional analysis to pure entertainment.</p>

*   **For Technique & Training:**
    *   [Lattice Training](https://www.youtube.com/@LatticeTraining): Science-based training tips from pros.
    *   [Bouldering Bobat](https://www.youtube.com/@BoulderingBobat): Very beginner-friendly explanations of basic and advanced techniques.
*   **For Entertainment & Vlogs:**
    *   [Magnus Midtbø](https://www.youtube.com/@MagnusMidtbo): One of the biggest climbing YouTubers, tests everything related to climbing.
    *   [Adam Ondra](https://www.youtube.com/@adamondra): Insights into the life and training of the world's best climber.

<h5 className="font-bold text-lg text-stone-800 dark:text-stone-200 mt-6 mb-3 flex items-center gap-2"><Instagram className="text-pink-500" />Instagram: Daily Inspiration</h5>
<p className="text-sm text-stone-600 dark:text-stone-400 mb-2">Follow pros for motivation and check out #bouldering to see what the global community is up to.</p>

*   [Janja Garnbret (@jain_jas)](https://www.instagram.com/jain_jas/): The most successful competition climber of all time.
*   [Shawn Raboutou (@shawnraboutou)](https://www.instagram.com/shawnraboutou/): Top American boulderer known for hard outdoor ascents.
*   [Tomoa Narasaki (@tomoanarasaki)](https://www.instagram.com/tomoanarasaki/): Top Japanese athlete with an explosive style.

<h5 className="font-bold text-lg text-stone-800 dark:text-stone-200 mt-6 mb-3 flex items-center gap-2"><MessagesSquare className="text-orange-500" />Reddit: The Discussion Hub</h5>
<p className="text-sm text-stone-600 dark:text-stone-400 mb-2">Here you can ask questions anonymously, share your successes, and dive deep into discussions.</p>

*   **r/bouldering:** The main hub for everything. Perfect for beginner questions, memes, and sharing your first "send".
*   **r/climbharder:** For when you're serious about your training. This is all about training plans, injury prevention, and performance improvement.

### Competitions & Events: The Community Celebrates
Wettkämpfe sind eine großartige Möglichkeit, die Community zu erleben. Viele Hallen veranstalten regelmäßig Events und "Fun Cups", die auch für Anfänger geeignet sind. Es ist eine Party, bei der nebenbei auch geklettert wird!

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
  <div className="p-4 bg-stone-100 dark:bg-stone-800 rounded-lg">
    <div className="flex items-center gap-3 mb-2">
      <MessagesSquare className="text-orange-500" />
      <h5 className="font-bold text-stone-800 dark:text-stone-200">Inspiration & Exchange</h5>
    </div>
    <p className="text-sm text-stone-600 dark:text-stone-400">Platforms like <strong>Instagram</strong>, <strong>YouTube</strong>, and <strong>Reddit (r/bouldering)</strong> are full of inspiring videos, helpful tutorials, and discussions. Here you can learn from the pros and connect with like-minded people.</p>
  </div>
  <div className="p-4 bg-stone-100 dark:bg-stone-800 rounded-lg">
    <div className="flex items-center gap-3 mb-2">
      <Trophy className="text-purple-500" />
      <h5 className="font-bold text-stone-800 dark:text-stone-200">Competitions & Events</h5>
    </div>
    <p className="text-sm text-stone-600 dark:text-stone-400">Competitions are a great way to experience the community. Many gyms host regular events and "fun cups" that are also suitable for beginners. It's a party where climbing happens on the side!</p>
  </div>
</div>

#### How to Connect
*   **Be open:** Talk to people and ask for tips if you're stuck.
*   **Take a class:** A beginner's course is the best way to learn the basics and meet new people at the same time.
*   **Visit events:** Keep an eye out for events at your local gym.
    `,
    task: {
      title: "Task: Join the Online Community",
      description: "Dive into the digital world of bouldering to find inspiration and learn from others.",
      checklist: [
        { text: "Follow 3 professional bouldering athletes on Instagram or YouTube.", checked: false },
        { text: "Join the r/bouldering subreddit and read the top posts of the week.", checked: false },
        { text: "Search YouTube for a tutorial on a specific technique that interests you (e.g., 'Heel Hook Tutorial').", checked: false },
        { text: "Find out if your local bouldering gym has a social media account and follow it for news and events.", checked: false },
      ]
    },
    quiz: [
      {
        question: "What best describes the culture in most bouldering gyms?",
        answer: "Collaborative, supportive, and non-competitive. The focus is on personal progress and shared fun."
      },
      {
        question: "What is 'beta' and how should you handle it?",
        answer: "'Beta' are tips for solving a boulder. You should only give them when asked."
      },
      {
        question: "Name two online platforms where the bouldering community is very active.",
        answer: "Instagram, YouTube, and the subreddit r/bouldering are very popular."
      }
    ]
  }
};
