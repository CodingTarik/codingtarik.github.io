/**
 * Speaking Topics for English Buddy
 * Each topic includes: id, title, category, situation description, typical phrases, vocabulary
 */

export const speakingTopics = [
  // Restaurant
  {
    id: 'restaurant_ordering',
    title: { en: 'Ordering at a Restaurant', de: 'Bestellen im Restaurant' },
    category: 'restaurant',
    situation: {
      en: 'You are at a restaurant and need to order food and drinks. The waiter is helping you.',
      de: 'Du bist in einem Restaurant und musst Essen und Getränke bestellen. Der Kellner hilft dir.'
    },
    typicalPhrases: [
      'Could I see the menu, please?',
      'I would like to order...',
      'What do you recommend?',
      'I will have the...',
      'Could I have the bill, please?'
    ],
    vocabulary: ['menu', 'order', 'appetizer', 'main course', 'dessert', 'bill', 'tip', 'waiter', 'reservation', 'table']
  },
  {
    id: 'restaurant_complaint',
    title: { en: 'Complaining at a Restaurant', de: 'Beschweren im Restaurant' },
    category: 'restaurant',
    situation: {
      en: 'You ordered food but it is cold or wrong. You need to complain politely.',
      de: 'Du hast Essen bestellt, aber es ist kalt oder falsch. Du musst dich höflich beschweren.'
    },
    typicalPhrases: [
      'Excuse me, but this is not what I ordered.',
      'I am sorry, but my food is cold.',
      'Could I please have this replaced?',
      'This is not what I asked for.',
      'Thank you for fixing this.'
    ],
    vocabulary: ['complaint', 'wrong', 'cold', 'replace', 'apologize', 'issue', 'problem', 'service', 'manager', 'satisfied']
  },

  // Cinema
  {
    id: 'cinema_booking',
    title: { en: 'Booking Movie Tickets', de: 'Kinokarten buchen' },
    category: 'cinema',
    situation: {
      en: 'You are at the cinema and want to buy tickets for a movie. You need to choose seats and time.',
      de: 'Du bist im Kino und möchtest Karten für einen Film kaufen. Du musst Plätze und Zeit wählen.'
    },
    typicalPhrases: [
      'Two tickets for [movie name], please.',
      'What time does the movie start?',
      'Do you have seats available?',
      'I would like seats in the middle row.',
      'How much are the tickets?'
    ],
    vocabulary: ['ticket', 'movie', 'cinema', 'seat', 'screen', 'showtime', 'popcorn', 'drink', '3D', 'subtitles']
  },
  {
    id: 'cinema_discussion',
    title: { en: 'Discussing a Movie', de: 'Über einen Film diskutieren' },
    category: 'cinema',
    situation: {
      en: 'You just watched a movie with friends and are discussing it.',
      de: 'Du hast gerade einen Film mit Freunden gesehen und diskutierst darüber.'
    },
    typicalPhrases: [
      'What did you think of the movie?',
      'I really enjoyed it.',
      'The acting was amazing.',
      'I found the ending disappointing.',
      'Would you recommend it?'
    ],
    vocabulary: ['plot', 'acting', 'special effects', 'ending', 'recommend', 'enjoy', 'disappointing', 'amazing', 'boring', 'exciting']
  },

  // Date
  {
    id: 'date_first_meeting',
    title: { en: 'First Date Conversation', de: 'Erstes Date Gespräch' },
    category: 'date',
    situation: {
      en: 'You are on a first date and getting to know each other. Make conversation and ask questions.',
      de: 'Du bist auf einem ersten Date und lernt euch kennen. Führe ein Gespräch und stelle Fragen.'
    },
    typicalPhrases: [
      'So, tell me about yourself.',
      'What do you like to do in your free time?',
      'I really enjoy...',
      'That sounds interesting!',
      'Would you like to meet again?'
    ],
    vocabulary: ['hobby', 'interest', 'work', 'family', 'travel', 'music', 'food', 'sport', 'book', 'movie']
  },
  {
    id: 'date_planning',
    title: { en: 'Planning a Date', de: 'Ein Date planen' },
    category: 'date',
    situation: {
      en: 'You are planning a date with someone. Discuss what to do and when to meet.',
      de: 'Du planst ein Date mit jemandem. Besprecht, was ihr machen wollt und wann ihr euch trefft.'
    },
    typicalPhrases: [
      'Would you like to go out this weekend?',
      'How about going to...',
      'What time works for you?',
      'I can pick you up at...',
      'Sounds great! See you then.'
    ],
    vocabulary: ['weekend', 'plan', 'suggest', 'available', 'pick up', 'meet', 'activity', 'restaurant', 'cinema', 'park']
  },

  // Meeting Friends
  {
    id: 'friends_casual',
    title: { en: 'Casual Chat with Friends', de: 'Lockeres Gespräch mit Freunden' },
    category: 'friends',
    situation: {
      en: 'You are meeting friends for coffee or drinks. Have a casual conversation.',
      de: 'Du triffst dich mit Freunden auf Kaffee oder Getränke. Führe ein lockeres Gespräch.'
    },
    typicalPhrases: [
      'How have you been?',
      'What have you been up to?',
      'Long time no see!',
      'Did you hear about...',
      'We should do this more often!'
    ],
    vocabulary: ['catch up', 'gossip', 'news', 'update', 'recently', 'lately', 'plans', 'weekend', 'party', 'event']
  },
  {
    id: 'friends_making_plans',
    title: { en: 'Making Plans with Friends', de: 'Pläne mit Freunden machen' },
    category: 'friends',
    situation: {
      en: 'You and your friends are planning an activity together. Discuss options and decide.',
      de: 'Du und deine Freunde plant eine gemeinsame Aktivität. Diskutiert Optionen und entscheidet.'
    },
    typicalPhrases: [
      'What should we do this weekend?',
      'How about going to...',
      'I am not available on Saturday.',
      'That sounds fun!',
      'Let us meet at...'
    ],
    vocabulary: ['plan', 'activity', 'available', 'suggest', 'agree', 'meet', 'location', 'time', 'cancel', 'confirm']
  },

  // Job Application
  {
    id: 'job_interview',
    title: { en: 'Job Interview', de: 'Bewerbungsgespräch' },
    category: 'job',
    situation: {
      en: 'You are in a job interview. Answer questions about your experience and skills.',
      de: 'Du bist in einem Bewerbungsgespräch. Beantworte Fragen zu deiner Erfahrung und deinen Fähigkeiten.'
    },
    typicalPhrases: [
      'Tell me about yourself.',
      'I have experience in...',
      'My strengths are...',
      'I am looking for...',
      'Do you have any questions for us?'
    ],
    vocabulary: ['experience', 'qualification', 'skill', 'strength', 'weakness', 'company', 'position', 'salary', 'benefit', 'opportunity']
  },
  {
    id: 'job_phone_call',
    title: { en: 'Job Application Phone Call', de: 'Bewerbungsanruf' },
    category: 'job',
    situation: {
      en: 'You are calling to inquire about a job position or following up on an application.',
      de: 'Du rufst an, um dich nach einer Stelle zu erkundigen oder einer Bewerbung nachzufassen.'
    },
    typicalPhrases: [
      'I am calling about the position...',
      'I submitted my application last week.',
      'I would like to schedule an interview.',
      'When can I expect to hear back?',
      'Thank you for your time.'
    ],
    vocabulary: ['application', 'position', 'resume', 'interview', 'schedule', 'available', 'follow up', 'consider', 'candidate', 'qualification']
  },

  // Airport
  {
    id: 'airport_check_in',
    title: { en: 'Airport Check-in', de: 'Flughafen Check-in' },
    category: 'airport',
    situation: {
      en: 'You are at the airport checking in for your flight. The staff needs your information.',
      de: 'Du bist am Flughafen und checkst für deinen Flug ein. Das Personal braucht deine Informationen.'
    },
    typicalPhrases: [
      'I would like to check in, please.',
      'Here is my passport.',
      'I have one suitcase to check.',
      'Is my flight on time?',
      'Which gate is my flight?'
    ],
    vocabulary: ['check in', 'passport', 'suitcase', 'luggage', 'boarding pass', 'gate', 'flight', 'delay', 'departure', 'arrival']
  },
  {
    id: 'airport_security',
    title: { en: 'Airport Security', de: 'Flughafen Sicherheit' },
    category: 'airport',
    situation: {
      en: 'You are going through airport security. Follow instructions and answer questions.',
      de: 'Du gehst durch die Flughafensicherheit. Befolge Anweisungen und beantworte Fragen.'
    },
    typicalPhrases: [
      'Please remove your shoes.',
      'Do you have any liquids?',
      'Please place your bag in the tray.',
      'Is this your laptop?',
      'You can proceed now.'
    ],
    vocabulary: ['security', 'screening', 'liquid', 'laptop', 'belt', 'metal', 'tray', 'proceed', 'inspection', 'clear']
  },
  {
    id: 'airport_immigration',
    title: { en: 'Immigration at Airport', de: 'Einwanderung am Flughafen' },
    category: 'airport',
    situation: {
      en: 'You are at immigration control. Answer questions about your visit.',
      de: 'Du bist an der Einwanderungskontrolle. Beantworte Fragen zu deinem Besuch.'
    },
    typicalPhrases: [
      'What is the purpose of your visit?',
      'How long will you be staying?',
      'Where will you be staying?',
      'Do you have a return ticket?',
      'Enjoy your stay!'
    ],
    vocabulary: ['purpose', 'visit', 'tourism', 'business', 'duration', 'accommodation', 'return ticket', 'visa', 'stamp', 'customs']
  },

  // Bus Ticket
  {
    id: 'bus_ticket_purchase',
    title: { en: 'Buying a Bus Ticket', de: 'Busfahrkarte kaufen' },
    category: 'transport',
    situation: {
      en: 'You are at a bus station and need to buy a ticket. Ask about destinations and prices.',
      de: 'Du bist an einer Bushaltestelle und musst ein Ticket kaufen. Frage nach Zielen und Preisen.'
    },
    typicalPhrases: [
      'I would like a ticket to...',
      'How much does it cost?',
      'What time does the bus leave?',
      'Is there a return ticket?',
      'Which platform does it leave from?'
    ],
    vocabulary: ['ticket', 'destination', 'price', 'departure', 'arrival', 'platform', 'return', 'single', 'schedule', 'delay']
  },
  {
    id: 'bus_asking_directions',
    title: { en: 'Asking for Bus Directions', de: 'Nach Bus-Richtungen fragen' },
    category: 'transport',
    situation: {
      en: 'You are lost and need to ask someone which bus to take to get somewhere.',
      de: 'Du bist verloren und musst jemanden fragen, welchen Bus du nehmen musst, um irgendwohin zu kommen.'
    },
    typicalPhrases: [
      'Excuse me, which bus goes to...',
      'How do I get to...',
      'Do I need to change buses?',
      'How many stops is it?',
      'Thank you for your help!'
    ],
    vocabulary: ['direction', 'route', 'stop', 'change', 'transfer', 'get off', 'get on', 'next stop', 'final stop', 'connection']
  },

  // Meeting New People
  {
    id: 'meeting_introduction',
    title: { en: 'Introducing Yourself', de: 'Sich vorstellen' },
    category: 'social',
    situation: {
      en: 'You are at a party or event and meeting new people. Introduce yourself and make conversation.',
      de: 'Du bist auf einer Party oder Veranstaltung und triffst neue Leute. Stelle dich vor und führe ein Gespräch.'
    },
    typicalPhrases: [
      'Hi, I am [name]. Nice to meet you!',
      'What brings you here?',
      'Where are you from?',
      'What do you do?',
      'It was nice talking to you!'
    ],
    vocabulary: ['introduce', 'meet', 'name', 'occupation', 'hometown', 'hobby', 'interest', 'exchange', 'contact', 'network']
  },
  {
    id: 'meeting_small_talk',
    title: { en: 'Small Talk with Strangers', de: 'Small Talk mit Fremden' },
    category: 'social',
    situation: {
      en: 'You are in a waiting room or queue and want to make small talk with someone.',
      de: 'Du bist in einem Wartezimmer oder einer Schlange und möchtest Small Talk mit jemandem führen.'
    },
    typicalPhrases: [
      'The weather is nice today, is not it?',
      'How long have you been waiting?',
      'This line is really long!',
      'Do you come here often?',
      'Have a nice day!'
    ],
    vocabulary: ['weather', 'wait', 'line', 'queue', 'busy', 'crowded', 'polite', 'conversation', 'topic', 'awkward']
  },

  // Additional Topics
  {
    id: 'shopping_clothes',
    title: { en: 'Shopping for Clothes', de: 'Kleidung einkaufen' },
    category: 'shopping',
    situation: {
      en: 'You are in a clothing store and need help finding the right size and style.',
      de: 'Du bist in einem Bekleidungsgeschäft und brauchst Hilfe, die richtige Größe und den richtigen Stil zu finden.'
    },
    typicalPhrases: [
      'Do you have this in a different size?',
      'Can I try this on?',
      'Where are the fitting rooms?',
      'This does not fit me.',
      'I will take this one.'
    ],
    vocabulary: ['size', 'fit', 'try on', 'fitting room', 'style', 'color', 'price', 'discount', 'return', 'exchange']
  },
  {
    id: 'hotel_check_in',
    title: { en: 'Hotel Check-in', de: 'Hotel Check-in' },
    category: 'travel',
    situation: {
      en: 'You are checking into a hotel. Provide your reservation details and ask questions.',
      de: 'Du checkst in einem Hotel ein. Gib deine Reservierungsdetails an und stelle Fragen.'
    },
    typicalPhrases: [
      'I have a reservation under the name...',
      'What time is breakfast?',
      'Is there WiFi in the room?',
      'Where is the elevator?',
      'Thank you for your help!'
    ],
    vocabulary: ['reservation', 'room', 'key', 'breakfast', 'WiFi', 'elevator', 'floor', 'amenity', 'check out', 'service']
  },
  {
    id: 'doctor_appointment',
    title: { en: 'Doctor Appointment', de: 'Arzttermin' },
    category: 'health',
    situation: {
      en: 'You are at the doctor and need to describe your symptoms and understand the diagnosis.',
      de: 'Du bist beim Arzt und musst deine Symptome beschreiben und die Diagnose verstehen.'
    },
    typicalPhrases: [
      'I have been feeling...',
      'I have a pain in my...',
      'How long have you had these symptoms?',
      'What should I do?',
      'When should I come back?'
    ],
    vocabulary: ['symptom', 'pain', 'fever', 'headache', 'prescription', 'medicine', 'diagnosis', 'treatment', 'appointment', 'recovery']
  },
  {
    id: 'job_networking',
    title: { en: 'Networking Event', de: 'Networking Veranstaltung' },
    category: 'job',
    situation: {
      en: 'You are at a professional networking event. Introduce yourself and discuss your career.',
      de: 'Du bist auf einer professionellen Networking-Veranstaltung. Stelle dich vor und diskutiere deine Karriere.'
    },
    typicalPhrases: [
      'What industry are you in?',
      'I work as a...',
      'What brings you to this event?',
      'Could I have your business card?',
      'Let us keep in touch!'
    ],
    vocabulary: ['industry', 'profession', 'career', 'network', 'business card', 'contact', 'opportunity', 'connection', 'colleague', 'industry']
  }
];

/**
 * Get a random topic
 */
export function getRandomSpeakingTopic() {
  return speakingTopics[Math.floor(Math.random() * speakingTopics.length)];
}

/**
 * Get topic by ID
 */
export function getSpeakingTopicById(id) {
  return speakingTopics.find(topic => topic.id === id);
}

/**
 * Get topics by category
 */
export function getSpeakingTopicsByCategory(category) {
  return speakingTopics.filter(topic => topic.category === category);
}

/**
 * Get all categories
 */
export function getAllSpeakingCategories() {
  return [...new Set(speakingTopics.map(topic => topic.category))];
}

