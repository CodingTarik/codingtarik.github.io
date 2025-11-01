// Lesson translations for English
// German is the default in lesson files

export const lessonTranslations = {
  en: {
    // Lesson 1: Was ist Bouldern
    1: {
      title: "What is Bouldering? (Gym & Rock)",
      description: "Bouldering is climbing at jump height without rope and harness. The name comes from the English 'boulder' (rock). You usually climb 3-5 meters high over thick mats.",
      content: `
**What is Bouldering?**

Bouldering is the purest form of climbing – just you, the rock (or climbing wall), and your shoes. No ropes, no harness, just pure movement. The routes (called "boulders" or "problems") are short but intense and technically demanding.

**Gym vs. Rock**

- **Bouldering Gym**: Perfect for beginners! Climate-controlled, safe mats, marked routes by difficulty (usually with colors), and a community that helps you.
- **Outdoor Bouldering**: The goal of many boulderers. Real rock, nature, but more preparation needed (crash pads, spotting, weather).

**Why Boulder?**

- Full-body workout (strength, endurance, flexibility)
- Problem-solving training for the brain
- Social community
- Low barrier to entry (no expensive equipment at the start)
- Quick progress visible
      `,
      task: {
        title: "Your First Boulder",
        description: "Visit a bouldering gym and climb 3 different routes in the beginner area (usually marked green or yellow). Goal: Feel the movement, not the difficulty!",
      }
    },
    
    // Lesson 2: Sicherheit
    2: {
      title: "Safety & Gym Etiquette",
      description: "Bouldering is relatively safe – if you know the rules. Proper falling, attention, and respect protect you and others.",
      content: `
**Proper Falling – The Most Important Skill!**

90% of bouldering injuries happen when falling, not while climbing.

**Fall Technique:**
1. Jump off controlled (don't just let go)
2. Land on your feet, knees slightly bent
3. Immediately roll backwards (butt → back)
4. Never land stiff with straight legs
5. Protect hands: don't brace yourself!

**Gym Etiquette:**

- **NEVER walk/stand under climbers** – this is the golden rule!
- Keep mats clear, no bags on them
- Watch other boulderers before entering a route
- Wipe off excess chalk after bouldering
- Brushes are for cleaning holds, not toys
- Take off shoes outside the mats (hygiene)

**Spotting (Securing in Bouldering):**

No rope, but friends can "spot" – they stand ready to guide your fall (not catch!), especially on difficult sections or overhangs.
      `,
      task: {
        title: "Practice Fall Technique",
        description: "Practice jumping off the wall 10x in a controlled manner (from about 1.5m height) and rolling correctly. Film yourself or have a friend watch.",
      }
    },

    // Lesson 3: Boulder ABC
    3: {
      title: "Boulder ABC: Holds & Routes",
      description: "Understand how boulder routes are marked, what hold types exist, and how difficulty grades work.",
      content: `
**Reading Routes:**

In gyms, boulders are usually marked by color:
- **Holds of one color** = one route
- **Start**: Often marked with "START" or two holds for both hands
- **Top**: The last hold, usually marked with "TOP"
- **Feet**: Sometimes "Feet follow" (all footholds allowed) or only marked footholds

**Difficulty Grades:**

Depending on the gym: Colors, numbers, or Fontainebleau scale (4a, 5a, 6a...).
- **Beginner**: approx. 4a-5b
- **Advanced**: 5c-6b
- **Pro**: 6c+

**The Main Hold Types:**

**1. Jug (Handle)**: Large, comfortable holds – perfect for beginners

**2. Crimp (Edge)**: Narrow holds, only fingertips

**3. Sloper (Slope)**: Round, sloping holds – need friction

**4. Pinch (Pinch)**: Grip with thumb opposite

**5. Pocket (Hole)**: Holes for 1-3 fingers

⚠️ **Pro-Tip:** Each route is a "problem" – a sequence of moves. Watch others, plan your sequence!
      `,
    },

    // Add more lesson translations as needed...
    4: {
      title: "The Perfect Climbing Shoe",
      description: "The most important piece of equipment in bouldering. Fit is everything – a good shoe makes you immediately better.",
    },
    5: {
      title: "Chalk & Accessories",
      description: "Magnesium carbonate (chalk) is your best friend for better grip. Plus: brushes, tape, and more.",
    },
    6: {
      title: "Body Tension & the 'Silent Monkey'",
      description: "The most fundamental technique: body tension. Without it, you waste energy and fall.",
    },
    7: {
      title: "Proper Gripping: Crimps, Slopers & Co.",
      description: "Each hold needs a different gripping technique. Learn to hold the 5 main grips correctly – this protects fingers & gives strength.",
    },
    8: {
      title: "Footwork: Stepping, Hooking & Twisting",
      description: "Beginners focus on hands. Pros know: legs are stronger! Good footwork = less arm strength needed.",
    },
    13: {
      title: "Route Reading: Cracking Boulders Without Strength",
      description: "The best boulderers solve problems with their heads, not muscles. Learn to 'read' boulders.",
    }
  }
};

export function getTranslatedLesson(lesson, language) {
  if (language === 'de' || !lessonTranslations[language]) {
    return lesson; // Return original German lesson
  }

  const translation = lessonTranslations[language][lesson.id];
  if (!translation) {
    return lesson; // Return original if no translation exists
  }

  return {
    ...lesson,
    title: translation.title || lesson.title,
    description: translation.description || lesson.description,
    content: translation.content || lesson.content,
    task: translation.task ? {
      ...lesson.task,
      title: translation.task.title || lesson.task?.title,
      description: translation.task.description || lesson.task?.description,
    } : lesson.task
  };
}

