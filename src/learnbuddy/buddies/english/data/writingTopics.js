/**
 * Writing Topics for English Buddy
 * Each topic includes: id, title, category, tense, typicalSentences, vocabulary, tips
 */

export const writingTopics = [
  // Horror/Thriller Stories
  {
    id: 'horror_haunted_house',
    title: { en: 'Horror Story: The Haunted House', de: 'Gruselgeschichte: Das Spukhaus' },
    category: 'horror',
    tense: 'Past Simple, Past Continuous',
    typicalSentences: [
      'The door creaked open slowly.',
      'I heard footsteps behind me.',
      'A cold shiver ran down my spine.',
      'The lights flickered and went out.',
      'Something was watching me from the shadows.'
    ],
    vocabulary: ['haunted', 'ghost', 'shadow', 'creak', 'shiver', 'flicker', 'whisper', 'fear', 'darkness', 'mystery'],
    tips: {
      en: 'Use descriptive language to create atmosphere. Focus on senses (sight, sound, touch). Build tension gradually. Use short sentences for dramatic effect.',
      de: 'Verwende beschreibende Sprache, um Atmosphäre zu schaffen. Konzentriere dich auf Sinne (Sehen, Hören, Fühlen). Baue Spannung allmählich auf. Verwende kurze Sätze für dramatische Wirkung.'
    }
  },
  {
    id: 'horror_mystery',
    title: { en: 'Horror Story: The Mysterious Stranger', de: 'Gruselgeschichte: Der geheimnisvolle Fremde' },
    category: 'horror',
    tense: 'Past Simple, Past Perfect',
    typicalSentences: [
      'A stranger appeared at my door.',
      'I had never seen him before.',
      'His eyes seemed to look right through me.',
      'I felt something was wrong.',
      'The next morning, he was gone without a trace.'
    ],
    vocabulary: ['stranger', 'mysterious', 'appear', 'trace', 'suspicious', 'uneasy', 'disappear', 'investigate', 'clue', 'warning'],
    tips: {
      en: 'Create mystery through unanswered questions. Use past perfect for events that happened before the main story. Leave some things unexplained.',
      de: 'Erschaffe Geheimnis durch unbeantwortete Fragen. Verwende Past Perfect für Ereignisse, die vor der Hauptgeschichte passierten. Lasse manches unerklärt.'
    }
  },

  // Adventure/Hero Stories
  {
    id: 'hero_quest',
    title: { en: 'Hero Story: The Quest for the Lost Treasure', de: 'Heldengeschichte: Die Suche nach dem verlorenen Schatz' },
    category: 'adventure',
    tense: 'Past Simple, Past Continuous',
    typicalSentences: [
      'The hero set out on a dangerous journey.',
      'He was searching for the ancient treasure.',
      'Along the way, he faced many challenges.',
      'With courage and determination, he overcame every obstacle.',
      'Finally, he reached his destination.'
    ],
    vocabulary: ['quest', 'treasure', 'journey', 'challenge', 'obstacle', 'courage', 'determination', 'ancient', 'legend', 'victory'],
    tips: {
      en: 'Show character development. Describe the hero\'s feelings and thoughts. Use action verbs. Create a clear beginning, middle, and end.',
      de: 'Zeige Charakterentwicklung. Beschreibe die Gefühle und Gedanken des Helden. Verwende Aktionsverben. Erstelle einen klaren Anfang, Mittelteil und Schluss.'
    }
  },
  {
    id: 'hero_rescue',
    title: { en: 'Hero Story: Rescuing the Princess', de: 'Heldengeschichte: Die Rettung der Prinzessin' },
    category: 'adventure',
    tense: 'Past Simple, Past Perfect',
    typicalSentences: [
      'The princess had been captured by the evil dragon.',
      'The brave knight decided to save her.',
      'He fought the dragon with his sword.',
      'After a long battle, he defeated the monster.',
      'The princess was grateful and they lived happily ever after.'
    ],
    vocabulary: ['princess', 'capture', 'dragon', 'knight', 'sword', 'battle', 'defeat', 'monster', 'grateful', 'rescue'],
    tips: {
      en: 'Use past perfect to show what happened before the main action. Build excitement with action sequences. End with a satisfying conclusion.',
      de: 'Verwende Past Perfect, um zu zeigen, was vor der Hauptaktion passierte. Baue Spannung mit Aktionssequenzen auf. Beende mit einem zufriedenstellenden Schluss.'
    }
  },

  // Short Stories
  {
    id: 'short_daily_life',
    title: { en: 'Short Story: A Day That Changed Everything', de: 'Kurzgeschichte: Ein Tag, der alles veränderte' },
    category: 'short_story',
    tense: 'Past Simple, Present Simple (for thoughts)',
    typicalSentences: [
      'It was just an ordinary Tuesday morning.',
      'I woke up and went through my usual routine.',
      'But something unexpected happened.',
      'That moment changed my life forever.',
      'Now I see things differently.'
    ],
    vocabulary: ['ordinary', 'routine', 'unexpected', 'moment', 'change', 'realize', 'perspective', 'ordinary', 'transform', 'insight'],
    tips: {
      en: 'Focus on a single significant moment. Show the contrast between before and after. Use present simple for thoughts and realizations.',
      de: 'Konzentriere dich auf einen einzigen bedeutsamen Moment. Zeige den Kontrast zwischen Vorher und Nachher. Verwende Present Simple für Gedanken und Erkenntnisse.'
    }
  },
  {
    id: 'short_encounter',
    title: { en: 'Short Story: An Unexpected Encounter', de: 'Kurzgeschichte: Eine unerwartete Begegnung' },
    category: 'short_story',
    tense: 'Past Simple, Past Continuous',
    typicalSentences: [
      'I was walking home when I saw her.',
      'She was standing alone at the bus stop.',
      'I had never met her before, but she looked familiar.',
      'We started talking and discovered we had a lot in common.',
      'That chance meeting led to a lifelong friendship.'
    ],
    vocabulary: ['encounter', 'familiar', 'discover', 'common', 'chance', 'meeting', 'friendship', 'connection', 'coincidence', 'fate'],
    tips: {
      en: 'Use past continuous for background actions. Show how small moments can have big impacts. Focus on dialogue and emotions.',
      de: 'Verwende Past Continuous für Hintergrundaktionen. Zeige, wie kleine Momente große Auswirkungen haben können. Konzentriere dich auf Dialog und Emotionen.'
    }
  },

  // Job Applications
  {
    id: 'job_cybersecurity',
    title: { en: 'Job Application: Cybersecurity Position', de: 'Bewerbung: Cybersecurity Stelle' },
    category: 'job_application',
    tense: 'Present Perfect, Present Simple',
    typicalSentences: [
      'I am writing to apply for the cybersecurity position.',
      'I have worked in IT security for five years.',
      'I am experienced in network security and threat analysis.',
      'I believe I would be a valuable addition to your team.',
      'I look forward to hearing from you.'
    ],
    vocabulary: ['apply', 'position', 'experienced', 'security', 'threat', 'analysis', 'valuable', 'addition', 'team', 'qualification'],
    tips: {
      en: 'Use formal language. Highlight your relevant experience with present perfect. Be specific about your skills. Keep it professional and concise.',
      de: 'Verwende formelle Sprache. Hebe deine relevante Erfahrung mit Present Perfect hervor. Sei spezifisch bei deinen Fähigkeiten. Bleibe professionell und prägnant.'
    }
  },
  {
    id: 'job_software_engineer',
    title: { en: 'Job Application: Software Engineer', de: 'Bewerbung: Software Engineer' },
    category: 'job_application',
    tense: 'Present Perfect, Present Simple',
    typicalSentences: [
      'I am interested in the software engineer position.',
      'I have developed applications using React and Node.js.',
      'I am passionate about clean code and best practices.',
      'My previous projects demonstrate my technical skills.',
      'I would welcome the opportunity to discuss my qualifications.'
    ],
    vocabulary: ['interested', 'develop', 'application', 'passionate', 'practice', 'project', 'demonstrate', 'technical', 'opportunity', 'qualification'],
    tips: {
      en: 'Mention specific technologies and projects. Use present perfect for achievements. Show enthusiasm but remain professional.',
      de: 'Erwähne spezifische Technologien und Projekte. Verwende Present Perfect für Erfolge. Zeige Enthusiasmus, bleibe aber professionell.'
    }
  },
  {
    id: 'job_marketing',
    title: { en: 'Job Application: Marketing Manager', de: 'Bewerbung: Marketing Manager' },
    category: 'job_application',
    tense: 'Present Perfect, Present Simple',
    typicalSentences: [
      'I am applying for the marketing manager position.',
      'I have successfully managed marketing campaigns for various companies.',
      'I am skilled in digital marketing and social media strategies.',
      'I have increased brand awareness by 40% in my previous role.',
      'I am confident I can contribute to your company\'s growth.'
    ],
    vocabulary: ['apply', 'manage', 'campaign', 'skilled', 'strategy', 'awareness', 'contribute', 'growth', 'successful', 'achieve'],
    tips: {
      en: 'Include specific numbers and achievements. Use present perfect for past accomplishments. Show how you can add value.',
      de: 'Füge spezifische Zahlen und Erfolge ein. Verwende Present Perfect für vergangene Leistungen. Zeige, wie du Wert hinzufügen kannst.'
    }
  },

  // Resignation Letters
  {
    id: 'resignation_standard',
    title: { en: 'Resignation Letter: Standard', de: 'Kündigung: Standard' },
    category: 'resignation',
    tense: 'Present Simple, Present Perfect',
    typicalSentences: [
      'I am writing to inform you of my decision to resign.',
      'I have enjoyed working at this company.',
      'My last day will be [date].',
      'I am grateful for the opportunities I have had here.',
      'I wish the company continued success.'
    ],
    vocabulary: ['resign', 'inform', 'decision', 'enjoy', 'grateful', 'opportunity', 'success', 'appreciate', 'experience', 'professional'],
    tips: {
      en: 'Keep it brief and professional. Be positive, even if leaving for negative reasons. Give proper notice. Thank your employer.',
      de: 'Halte es kurz und professionell. Sei positiv, auch wenn du aus negativen Gründen gehst. Gib angemessene Kündigungsfrist. Danke deinem Arbeitgeber.'
    }
  },
  {
    id: 'resignation_career_growth',
    title: { en: 'Resignation Letter: Career Growth', de: 'Kündigung: Karrierewachstum' },
    category: 'resignation',
    tense: 'Present Simple, Present Perfect',
    typicalSentences: [
      'I am resigning to pursue new career opportunities.',
      'I have learned a great deal during my time here.',
      'I appreciate all the support I have received.',
      'I will ensure a smooth transition of my responsibilities.',
      'I hope we can stay in touch professionally.'
    ],
    vocabulary: ['pursue', 'opportunity', 'learn', 'appreciate', 'support', 'transition', 'responsibility', 'professional', 'growth', 'development'],
    tips: {
      en: 'Frame it positively as a career move. Express gratitude. Offer to help with transition. Maintain professional relationships.',
      de: 'Formuliere es positiv als Karriereschritt. Drücke Dankbarkeit aus. Biete Hilfe bei der Übergabe an. Pflege professionelle Beziehungen.'
    }
  },

  // Informative Texts
  {
    id: 'info_climate_change',
    title: { en: 'Informative Text: Climate Change', de: 'Informationstext: Klimawandel' },
    category: 'informative',
    tense: 'Present Simple, Present Perfect',
    typicalSentences: [
      'Climate change is one of the most pressing issues of our time.',
      'It affects every country and every person on Earth.',
      'Scientists have been studying this phenomenon for decades.',
      'We need to take action now to reduce our carbon footprint.',
      'Everyone can contribute to solving this problem.'
    ],
    vocabulary: ['climate', 'change', 'pressing', 'affect', 'scientist', 'phenomenon', 'action', 'carbon', 'footprint', 'contribute'],
    tips: {
      en: 'Use present simple for facts and general truths. Use present perfect for ongoing research. Be objective and informative. Include solutions.',
      de: 'Verwende Present Simple für Fakten und allgemeine Wahrheiten. Verwende Present Perfect für laufende Forschung. Sei objektiv und informativ. Füge Lösungen ein.'
    }
  },
  {
    id: 'info_artificial_intelligence',
    title: { en: 'Informative Text: Artificial Intelligence', de: 'Informationstext: Künstliche Intelligenz' },
    category: 'informative',
    tense: 'Present Simple, Present Perfect',
    typicalSentences: [
      'Artificial intelligence is transforming our world.',
      'AI systems can process vast amounts of data.',
      'Many industries have already adopted AI technology.',
      'However, there are also concerns about its impact.',
      'It is important to use AI responsibly.'
    ],
    vocabulary: ['artificial', 'intelligence', 'transform', 'process', 'data', 'industry', 'adopt', 'technology', 'concern', 'responsibly'],
    tips: {
      en: 'Present both benefits and challenges. Use present simple for current state. Use present perfect for recent developments. Be balanced in your approach.',
      de: 'Präsentiere sowohl Vorteile als auch Herausforderungen. Verwende Present Simple für den aktuellen Zustand. Verwende Present Perfect für aktuelle Entwicklungen. Sei ausgewogen in deinem Ansatz.'
    }
  },
  {
    id: 'info_healthy_lifestyle',
    title: { en: 'Informative Text: Healthy Lifestyle', de: 'Informationstext: Gesunder Lebensstil' },
    category: 'informative',
    tense: 'Present Simple, Imperative',
    typicalSentences: [
      'A healthy lifestyle includes regular exercise and balanced nutrition.',
      'Many people struggle to maintain healthy habits.',
      'Small changes can make a big difference.',
      'Start by drinking more water and taking daily walks.',
      'Remember that consistency is more important than perfection.'
    ],
    vocabulary: ['lifestyle', 'exercise', 'nutrition', 'struggle', 'maintain', 'habit', 'consistency', 'perfection', 'balance', 'wellness'],
    tips: {
      en: 'Use present simple for facts. Use imperatives for advice. Be encouraging and practical. Include actionable steps.',
      de: 'Verwende Present Simple für Fakten. Verwende Imperative für Ratschläge. Sei ermutigend und praktisch. Füge umsetzbare Schritte ein.'
    }
  },
  {
    id: 'info_remote_work',
    title: { en: 'Informative Text: Remote Work', de: 'Informationstext: Remote Work' },
    category: 'informative',
    tense: 'Present Simple, Present Perfect',
    typicalSentences: [
      'Remote work has become increasingly popular in recent years.',
      'Many companies have adopted flexible work arrangements.',
      'Working from home offers both advantages and challenges.',
      'Good communication is essential for remote teams.',
      'Technology has made remote collaboration easier than ever.'
    ],
    vocabulary: ['remote', 'popular', 'adopt', 'flexible', 'arrangement', 'advantage', 'challenge', 'communication', 'essential', 'collaboration'],
    tips: {
      en: 'Discuss current trends with present perfect. Use present simple for general facts. Present both sides of the topic. Be informative and balanced.',
      de: 'Diskutiere aktuelle Trends mit Present Perfect. Verwende Present Simple für allgemeine Fakten. Präsentiere beide Seiten des Themas. Sei informativ und ausgewogen.'
    }
  },

  // Personal Narratives
  {
    id: 'personal_travel',
    title: { en: 'Personal Story: A Memorable Trip', de: 'Persönliche Geschichte: Eine unvergessliche Reise' },
    category: 'personal',
    tense: 'Past Simple, Past Continuous',
    typicalSentences: [
      'Last summer, I traveled to Japan for the first time.',
      'I was amazed by the beautiful temples and gardens.',
      'The food was incredible and the people were very friendly.',
      'I learned a lot about Japanese culture during my stay.',
      'It was an experience I will never forget.'
    ],
    vocabulary: ['travel', 'temple', 'garden', 'incredible', 'friendly', 'culture', 'experience', 'memorable', 'amazing', 'discover'],
    tips: {
      en: 'Use past simple for completed actions. Use past continuous for ongoing actions in the past. Include sensory details. Share personal feelings.',
      de: 'Verwende Past Simple für abgeschlossene Handlungen. Verwende Past Continuous für laufende Handlungen in der Vergangenheit. Füge Sinnesdetails ein. Teile persönliche Gefühle.'
    }
  },
  {
    id: 'personal_achievement',
    title: { en: 'Personal Story: A Great Achievement', de: 'Persönliche Geschichte: Ein großer Erfolg' },
    category: 'personal',
    tense: 'Past Simple, Past Perfect',
    typicalSentences: [
      'I had always wanted to run a marathon.',
      'I trained for six months before the race.',
      'On race day, I was nervous but excited.',
      'Crossing the finish line was one of the best moments of my life.',
      'I had achieved something I never thought was possible.'
    ],
    vocabulary: ['achievement', 'marathon', 'train', 'race', 'nervous', 'excited', 'finish', 'achieve', 'possible', 'proud'],
    tips: {
      en: 'Use past perfect for events before the main story. Show the journey, not just the result. Express emotions. Inspire others.',
      de: 'Verwende Past Perfect für Ereignisse vor der Hauptgeschichte. Zeige die Reise, nicht nur das Ergebnis. Drücke Emotionen aus. Inspiriere andere.'
    }
  },

  // Opinion Essays
  {
    id: 'opinion_social_media',
    title: { en: 'Opinion Essay: Social Media Impact', de: 'Meinungsaufsatz: Social Media Auswirkungen' },
    category: 'opinion',
    tense: 'Present Simple, Present Perfect',
    typicalSentences: [
      'Social media has changed how we communicate.',
      'I believe it has both positive and negative effects.',
      'On one hand, it connects people across the world.',
      'On the other hand, it can be addictive and harmful.',
      'In my opinion, we need to use it more mindfully.'
    ],
    vocabulary: ['social', 'media', 'communicate', 'positive', 'negative', 'connect', 'addictive', 'harmful', 'mindfully', 'impact'],
    tips: {
      en: 'Present your opinion clearly. Use phrases like "I believe", "In my opinion". Show both sides. Support your points with examples.',
      de: 'Präsentiere deine Meinung klar. Verwende Phrasen wie "I believe", "In my opinion". Zeige beide Seiten. Untermauere deine Punkte mit Beispielen.'
    }
  },
  {
    id: 'opinion_education',
    title: { en: 'Opinion Essay: Online vs. Traditional Education', de: 'Meinungsaufsatz: Online vs. Traditionelle Bildung' },
    category: 'opinion',
    tense: 'Present Simple',
    typicalSentences: [
      'Online education offers flexibility and convenience.',
      'Traditional classrooms provide face-to-face interaction.',
      'I think both methods have their advantages.',
      'The best approach depends on the individual student.',
      'A combination of both might be ideal.'
    ],
    vocabulary: ['education', 'flexibility', 'convenience', 'classroom', 'interaction', 'method', 'advantage', 'approach', 'individual', 'combination'],
    tips: {
      en: 'Compare and contrast. Use "on one hand... on the other hand". Present a balanced view. Conclude with your opinion.',
      de: 'Vergleiche und kontrastiere. Verwende "on one hand... on the other hand". Präsentiere eine ausgewogene Sicht. Schließe mit deiner Meinung.'
    }
  },

  // Business Emails
  {
    id: 'email_meeting_request',
    title: { en: 'Business Email: Meeting Request', de: 'Business Email: Meeting-Anfrage' },
    category: 'business_email',
    tense: 'Present Simple, Present Continuous (for future)',
    typicalSentences: [
      'I am writing to request a meeting to discuss the project.',
      'I would like to schedule a time that works for both of us.',
      'I am available next week on Tuesday or Wednesday.',
      'Please let me know if these times are convenient for you.',
      'I look forward to hearing from you.'
    ],
    vocabulary: ['request', 'meeting', 'discuss', 'schedule', 'available', 'convenient', 'forward', 'appreciate', 'confirm', 'arrange'],
    tips: {
      en: 'Be polite and professional. Be specific about dates and times. Use "I would like" for requests. Keep it brief and clear.',
      de: 'Sei höflich und professionell. Sei spezifisch bei Daten und Zeiten. Verwende "I would like" für Anfragen. Halte es kurz und klar.'
    }
  },
  {
    id: 'email_follow_up',
    title: { en: 'Business Email: Follow-up', de: 'Business Email: Nachfassung' },
    category: 'business_email',
    tense: 'Present Perfect, Present Simple',
    typicalSentences: [
      'I am following up on our conversation from last week.',
      'I wanted to check if you have had a chance to review the proposal.',
      'Please let me know if you need any additional information.',
      'I am happy to answer any questions you might have.',
      'Thank you for your time and consideration.'
    ],
    vocabulary: ['follow', 'conversation', 'review', 'proposal', 'additional', 'information', 'consideration', 'appreciate', 'clarify', 'response'],
    tips: {
      en: 'Be polite and not pushy. Reference the previous interaction. Offer help. Thank them for their time.',
      de: 'Sei höflich und nicht aufdringlich. Verweise auf die vorherige Interaktion. Biete Hilfe an. Danke ihnen für ihre Zeit.'
    }
  },
  {
    id: 'email_customer_service',
    title: { en: 'Business Email: Answering Customer Questions', de: 'Business Email: Beantwortung von Kundenfragen' },
    category: 'business_email',
    tense: 'Present Simple, Present Perfect',
    typicalSentences: [
      'Thank you for contacting us regarding your question.',
      'I am happy to help you with this matter.',
      'To answer your question, I would like to inform you that...',
      'If you have any further questions, please do not hesitate to contact us.',
      'We hope this information is helpful.'
    ],
    vocabulary: ['contact', 'regarding', 'question', 'matter', 'inform', 'further', 'hesitate', 'information', 'helpful', 'assistance'],
    tips: {
      en: 'Be friendly and professional. Address the customer\'s question directly. Use clear and concise language. Offer additional help if needed.',
      de: 'Sei freundlich und professionell. Beantworte die Kundenfrage direkt. Verwende klare und prägnante Sprache. Biete zusätzliche Hilfe an, falls nötig.'
    }
  },

  // Reviews
  {
    id: 'review_restaurant',
    title: { en: 'Review: Restaurant Experience', de: 'Rezension: Restaurant-Erfahrung' },
    category: 'review',
    tense: 'Past Simple, Present Simple (for opinions)',
    typicalSentences: [
      'I visited this restaurant last weekend.',
      'The food was excellent and the service was friendly.',
      'I especially enjoyed the pasta dish.',
      'The atmosphere was cozy and welcoming.',
      'I would definitely recommend this place to others.'
    ],
    vocabulary: ['restaurant', 'visit', 'excellent', 'service', 'friendly', 'enjoy', 'atmosphere', 'cozy', 'recommend', 'experience'],
    tips: {
      en: 'Use past simple for what happened. Use present simple for your opinions and recommendations. Be specific about what you liked or didn\'t like.',
      de: 'Verwende Past Simple für das, was passierte. Verwende Present Simple für deine Meinungen und Empfehlungen. Sei spezifisch bei dem, was dir gefallen oder nicht gefallen hat.'
    }
  },
  {
    id: 'review_hotel',
    title: { en: 'Review: Hotel Stay', de: 'Rezension: Hotel-Aufenthalt' },
    category: 'review',
    tense: 'Past Simple, Present Simple (for opinions)',
    typicalSentences: [
      'I stayed at this hotel for three nights.',
      'The room was clean and spacious.',
      'The staff was very helpful and professional.',
      'The breakfast buffet was excellent.',
      'I would stay here again on my next visit.'
    ],
    vocabulary: ['hotel', 'stay', 'room', 'clean', 'spacious', 'staff', 'helpful', 'professional', 'breakfast', 'buffet'],
    tips: {
      en: 'Mention specific aspects: room quality, service, amenities, location. Use past simple for your experience. Use present simple for recommendations.',
      de: 'Erwähne spezifische Aspekte: Zimmerqualität, Service, Ausstattung, Lage. Verwende Past Simple für deine Erfahrung. Verwende Present Simple für Empfehlungen.'
    }
  },
  {
    id: 'review_movie',
    title: { en: 'Review: Movie Review', de: 'Rezension: Filmkritik' },
    category: 'review',
    tense: 'Past Simple, Present Simple',
    typicalSentences: [
      'I watched this movie yesterday and I was impressed.',
      'The acting was outstanding and the plot was engaging.',
      'The special effects were amazing.',
      'However, I found the ending a bit disappointing.',
      'Overall, I would give it four out of five stars.'
    ],
    vocabulary: ['movie', 'watch', 'impress', 'acting', 'outstanding', 'plot', 'engaging', 'effect', 'disappointing', 'overall'],
    tips: {
      en: 'Discuss different aspects (acting, plot, effects). Use past simple for viewing experience. Use present simple for your evaluation. Be balanced in your critique.',
      de: 'Diskutiere verschiedene Aspekte (Schauspiel, Handlung, Effekte). Verwende Past Simple für das Seherlebnis. Verwende Present Simple für deine Bewertung. Sei ausgewogen in deiner Kritik.'
    }
  },

  // Descriptive Texts
  {
    id: 'describe_place',
    title: { en: 'Description: My Favorite Place', de: 'Beschreibung: Mein Lieblingsort' },
    category: 'descriptive',
    tense: 'Present Simple',
    typicalSentences: [
      'My favorite place is a small café in the city center.',
      'It has large windows that let in natural light.',
      'The walls are decorated with local artwork.',
      'The smell of fresh coffee fills the air.',
      'I feel relaxed and inspired whenever I visit.'
    ],
    vocabulary: ['favorite', 'café', 'center', 'window', 'natural', 'decorate', 'artwork', 'fresh', 'relaxed', 'inspired'],
    tips: {
      en: 'Use present simple for descriptions. Appeal to all five senses. Use adjectives to create vivid images. Show why this place is special to you.',
      de: 'Verwende Present Simple für Beschreibungen. Spricht alle fünf Sinne an. Verwende Adjektive, um lebendige Bilder zu schaffen. Zeige, warum dieser Ort für dich besonders ist.'
    }
  },
  {
    id: 'describe_person',
    title: { en: 'Description: A Person I Admire', de: 'Beschreibung: Eine Person, die ich bewundere' },
    category: 'descriptive',
    tense: 'Present Simple, Present Perfect',
    typicalSentences: [
      'My grandmother is the person I admire most.',
      'She has always been kind and patient with everyone.',
      'She is a great listener and gives excellent advice.',
      'Her positive attitude inspires everyone around her.',
      'I hope to be like her when I grow older.'
    ],
    vocabulary: ['admire', 'grandmother', 'kind', 'patient', 'listener', 'advice', 'positive', 'attitude', 'inspire', 'hope'],
    tips: {
      en: 'Describe both physical appearance and personality. Use present simple for characteristics. Use present perfect for ongoing qualities. Show why you admire them.',
      de: 'Beschreibe sowohl Aussehen als auch Persönlichkeit. Verwende Present Simple für Eigenschaften. Verwende Present Perfect für anhaltende Qualitäten. Zeige, warum du sie bewunderst.'
    }
  },

  // Complaints
  {
    id: 'complaint_service',
    title: { en: 'Complaint: Poor Service', de: 'Beschwerde: Schlechter Service' },
    category: 'complaint',
    tense: 'Past Simple, Present Simple',
    typicalSentences: [
      'I am writing to complain about the poor service I received.',
      'I visited your store on [date] and was very disappointed.',
      'The staff member was rude and unhelpful.',
      'This is not acceptable and I expect a resolution.',
      'I hope you will take this matter seriously and improve your service.'
    ],
    vocabulary: ['complain', 'service', 'disappointed', 'staff', 'rude', 'unhelpful', 'acceptable', 'expect', 'resolution', 'improve'],
    tips: {
      en: 'Be clear and specific about what went wrong. Use past simple for what happened. Remain professional and polite. State what you expect as a resolution.',
      de: 'Sei klar und spezifisch, was schiefgelaufen ist. Verwende Past Simple für das, was passierte. Bleibe professionell und höflich. Gib an, was du als Lösung erwartest.'
    }
  },
  {
    id: 'complaint_product',
    title: { en: 'Complaint: Defective Product', de: 'Beschwerde: Defektes Produkt' },
    category: 'complaint',
    tense: 'Past Simple, Present Simple',
    typicalSentences: [
      'I purchased [product] from your store on [date].',
      'Unfortunately, the product arrived damaged/defective.',
      'I have attached photos showing the problem.',
      'I would like a full refund or replacement.',
      'Please respond within 7 business days.'
    ],
    vocabulary: ['purchase', 'product', 'unfortunately', 'arrive', 'damaged', 'defective', 'attach', 'refund', 'replacement', 'respond'],
    tips: {
      en: 'Include specific details: date, product name, order number. Describe the problem clearly. State your desired outcome (refund/replacement). Set a reasonable deadline for response.',
      de: 'Füge spezifische Details ein: Datum, Produktname, Bestellnummer. Beschreibe das Problem klar. Gib dein gewünschtes Ergebnis an (Rückerstattung/Austausch). Setze eine angemessene Frist für die Antwort.'
    }
  },

  // Reports
  {
    id: 'report_business',
    title: { en: 'Report: Business Report', de: 'Bericht: Geschäftsbericht' },
    category: 'report',
    tense: 'Past Simple, Present Perfect, Present Simple',
    typicalSentences: [
      'This report presents the findings of our investigation.',
      'We conducted a survey among 100 customers.',
      'The results show that customer satisfaction has increased.',
      'We recommend implementing the following changes.',
      'In conclusion, the project has been successful.'
    ],
    vocabulary: ['report', 'present', 'finding', 'investigation', 'conduct', 'survey', 'result', 'satisfaction', 'recommend', 'conclusion'],
    tips: {
      en: 'Use formal language. Structure clearly: Introduction, Findings, Analysis, Recommendations, Conclusion. Use past simple for completed actions. Use present simple for current state and recommendations.',
      de: 'Verwende formelle Sprache. Strukturiere klar: Einleitung, Ergebnisse, Analyse, Empfehlungen, Schlussfolgerung. Verwende Past Simple für abgeschlossene Handlungen. Verwende Present Simple für aktuellen Zustand und Empfehlungen.'
    }
  },
  {
    id: 'report_incident',
    title: { en: 'Report: Incident Report', de: 'Bericht: Vorfallbericht' },
    category: 'report',
    tense: 'Past Simple, Past Continuous',
    typicalSentences: [
      'On [date] at [time], an incident occurred at [location].',
      'I was working when I noticed something unusual.',
      'The incident was reported immediately to the supervisor.',
      'The following actions were taken to address the situation.',
      'We recommend reviewing safety procedures to prevent future incidents.'
    ],
    vocabulary: ['incident', 'occur', 'location', 'notice', 'unusual', 'report', 'supervisor', 'action', 'address', 'prevent'],
    tips: {
      en: 'Be factual and objective. Include specific details: date, time, location, people involved. Use past simple and past continuous. Describe what happened, what was done, and recommendations.',
      de: 'Sei sachlich und objektiv. Füge spezifische Details ein: Datum, Zeit, Ort, beteiligte Personen. Verwende Past Simple und Past Continuous. Beschreibe, was passierte, was getan wurde und Empfehlungen.'
    }
  },
  {
    id: 'report_project',
    title: { en: 'Report: Project Progress Report', de: 'Bericht: Projektfortschrittsbericht' },
    category: 'report',
    tense: 'Present Perfect, Past Simple, Present Simple',
    typicalSentences: [
      'This report summarizes the progress made on [project name].',
      'We have completed Phase 1 of the project.',
      'The team has encountered some challenges along the way.',
      'We are currently working on Phase 2.',
      'The project is on track to be completed by [deadline].'
    ],
    vocabulary: ['report', 'summarize', 'progress', 'complete', 'phase', 'encounter', 'challenge', 'currently', 'track', 'deadline'],
    tips: {
      en: 'Use present perfect for completed work. Use past simple for specific completed actions. Use present simple/continuous for current status. Include milestones, challenges, and next steps.',
      de: 'Verwende Present Perfect für abgeschlossene Arbeit. Verwende Past Simple für spezifische abgeschlossene Handlungen. Verwende Present Simple/Continuous für aktuellen Status. Füge Meilensteine, Herausforderungen und nächste Schritte ein.'
    }
  },

  // Scientific Writing
  {
    id: 'scientific_short',
    title: { en: 'Scientific Text: Short Scientific Article', de: 'Wissenschaftlicher Text: Kurzer wissenschaftlicher Artikel' },
    category: 'scientific',
    tense: 'Present Simple, Present Perfect, Passive Voice',
    typicalSentences: [
      'This study examines the effects of [topic] on [subject].',
      'Previous research has shown that...',
      'The data was collected using [method].',
      'The results indicate that [finding].',
      'Further research is needed to confirm these findings.'
    ],
    vocabulary: ['study', 'examine', 'effect', 'research', 'data', 'collect', 'method', 'result', 'indicate', 'finding'],
    tips: {
      en: 'Use formal, objective language. Use passive voice frequently ("it was found that..."). Use present simple for general facts. Use present perfect for previous research. Be precise and avoid personal opinions.',
      de: 'Verwende formelle, objektive Sprache. Verwende häufig Passiv ("it was found that..."). Verwende Present Simple für allgemeine Fakten. Verwende Present Perfect für frühere Forschung. Sei präzise und vermeide persönliche Meinungen.'
    }
  },
  {
    id: 'scientific_abstract',
    title: { en: 'Scientific Text: Research Abstract', de: 'Wissenschaftlicher Text: Forschungs-Abstract' },
    category: 'scientific',
    tense: 'Present Simple, Past Simple, Passive Voice',
    typicalSentences: [
      'This paper presents a study on [topic].',
      'The research was conducted using [method].',
      'A total of [number] participants were included.',
      'The findings suggest that [conclusion].',
      'This research contributes to our understanding of [field].'
    ],
    vocabulary: ['paper', 'present', 'conduct', 'participant', 'include', 'finding', 'suggest', 'conclusion', 'contribute', 'understanding'],
    tips: {
      en: 'Keep it concise (usually 150-250 words). Include: purpose, method, key findings, conclusion. Use passive voice. Avoid unnecessary details. Use present simple for general statements, past simple for what was done.',
      de: 'Halte es prägnant (normalerweise 150-250 Wörter). Füge ein: Zweck, Methode, wichtige Ergebnisse, Schlussfolgerung. Verwende Passiv. Vermeide unnötige Details. Verwende Present Simple für allgemeine Aussagen, Past Simple für das, was getan wurde.'
    }
  },

  // Diary Entries
  {
    id: 'diary_daily',
    title: { en: 'Diary Entry: Daily Reflection', de: 'Tagebucheintrag: Tägliche Reflexion' },
    category: 'diary',
    tense: 'Past Simple, Present Simple (for thoughts)',
    typicalSentences: [
      'Today was an interesting day.',
      'I woke up early and went for a walk.',
      'I feel grateful for the beautiful weather.',
      'I learned something new today.',
      'I hope tomorrow will be just as good.'
    ],
    vocabulary: ['interesting', 'wake', 'walk', 'grateful', 'weather', 'learn', 'hope', 'tomorrow', 'reflection', 'experience'],
    tips: {
      en: 'Use past simple for what happened. Use present simple for your thoughts and feelings. Be personal and honest. Write in first person.',
      de: 'Verwende Past Simple für das, was passierte. Verwende Present Simple für deine Gedanken und Gefühle. Sei persönlich und ehrlich. Schreibe in der ersten Person.'
    }
  },
  {
    id: 'diary_travel',
    title: { en: 'Diary Entry: Travel Experience', de: 'Tagebucheintrag: Reiseerfahrung' },
    category: 'diary',
    tense: 'Past Simple, Past Continuous',
    typicalSentences: [
      'I arrived in [place] this morning.',
      'The journey was long but exciting.',
      'I was exploring the city when I discovered a hidden café.',
      'The food here is amazing!',
      'I can\'t wait to see what tomorrow brings.'
    ],
    vocabulary: ['arrive', 'journey', 'exciting', 'explore', 'discover', 'hidden', 'amazing', 'tomorrow', 'adventure', 'culture'],
    tips: {
      en: 'Describe your experiences in detail. Use past simple for completed actions. Use past continuous for ongoing actions. Include your emotions and impressions.',
      de: 'Beschreibe deine Erfahrungen im Detail. Verwende Past Simple für abgeschlossene Handlungen. Verwende Past Continuous für laufende Handlungen. Füge deine Emotionen und Eindrücke ein.'
    }
  },
  {
    id: 'diary_emotional',
    title: { en: 'Diary Entry: Emotional Day', de: 'Tagebucheintrag: Emotionaler Tag' },
    category: 'diary',
    tense: 'Past Simple, Present Simple',
    typicalSentences: [
      'Today I felt really [emotion].',
      'Something happened that made me think deeply.',
      'I realize now that I need to change my approach.',
      'Writing this down helps me process my feelings.',
      'I feel better after reflecting on today.'
    ],
    vocabulary: ['emotion', 'feel', 'happen', 'think', 'deeply', 'realize', 'approach', 'process', 'reflect', 'better'],
    tips: {
      en: 'Be honest about your feelings. Use present simple for realizations and current feelings. Use past simple for what happened. This is a safe space to express yourself.',
      de: 'Sei ehrlich über deine Gefühle. Verwende Present Simple für Erkenntnisse und aktuelle Gefühle. Verwende Past Simple für das, was passierte. Dies ist ein sicherer Raum, um dich auszudrücken.'
    }
  },

  // Text Messages
  {
    id: 'text_family',
    title: { en: 'Text Message: To Family', de: 'Textnachricht: An Familie' },
    category: 'text_message',
    tense: 'Present Simple, Present Continuous, Future',
    typicalSentences: [
      'Hi Mom! How are you doing?',
      'I\'m calling you later today.',
      'Can you pick me up at 5 PM?',
      'See you soon! Love you!',
      'Thanks for everything!'
    ],
    vocabulary: ['family', 'doing', 'calling', 'pick', 'soon', 'love', 'thanks', 'everything', 'miss', 'home'],
    tips: {
      en: 'Keep it casual and friendly. Use contractions (I\'m, can\'t, etc.). Use present continuous for future plans. Be warm and personal.',
      de: 'Halte es lässig und freundlich. Verwende Kontraktionen (I\'m, can\'t, etc.). Verwende Present Continuous für Zukunftspläne. Sei warmherzig und persönlich.'
    }
  },
  {
    id: 'text_friend',
    title: { en: 'Text Message: To Friend', de: 'Textnachricht: An Freund' },
    category: 'text_message',
    tense: 'Present Simple, Present Continuous',
    typicalSentences: [
      'Hey! What are you up to?',
      'Want to hang out this weekend?',
      'I\'m going to that new restaurant, want to join?',
      'That sounds great! See you there.',
      'Can\'t wait!'
    ],
    vocabulary: ['friend', 'hang', 'weekend', 'restaurant', 'join', 'sounds', 'great', 'wait', 'excited', 'fun'],
    tips: {
      en: 'Very casual and informal. Use slang if appropriate. Short sentences. Use abbreviations if natural. Be enthusiastic and friendly.',
      de: 'Sehr lässig und informell. Verwende Slang, wenn angemessen. Kurze Sätze. Verwende Abkürzungen, wenn natürlich. Sei enthusiastisch und freundlich.'
    }
  },
  {
    id: 'text_invitation',
    title: { en: 'Text Message: Invitation', de: 'Textnachricht: Einladung' },
    category: 'text_message',
    tense: 'Present Continuous, Future',
    typicalSentences: [
      'I\'m having a party this Saturday!',
      'Would you like to come?',
      'It starts at 7 PM at my place.',
      'Let me know if you can make it!',
      'Hope to see you there!'
    ],
    vocabulary: ['party', 'Saturday', 'would', 'come', 'starts', 'place', 'make', 'hope', 'see', 'invitation'],
    tips: {
      en: 'Be friendly and enthusiastic. Include important details: date, time, location. Use present continuous for future events. Make it sound inviting!',
      de: 'Sei freundlich und enthusiastisch. Füge wichtige Details ein: Datum, Zeit, Ort. Verwende Present Continuous für zukünftige Ereignisse. Lass es einladend klingen!'
    }
  },

  // Letters to Friends
  {
    id: 'letter_friend_casual',
    title: { en: 'Letter: Casual Letter to Friend', de: 'Brief: Lässiger Brief an Freund' },
    category: 'letter',
    tense: 'Past Simple, Present Simple, Present Perfect',
    typicalSentences: [
      'Dear [Name],',
      'I hope this letter finds you well.',
      'I\'ve been thinking about you lately.',
      'I wanted to tell you about what\'s been happening.',
      'I miss you and hope we can catch up soon!'
    ],
    vocabulary: ['dear', 'hope', 'letter', 'finds', 'thinking', 'lately', 'happening', 'miss', 'catch', 'soon'],
    tips: {
      en: 'Warm and personal tone. Use past simple for recent events. Use present perfect for ongoing situations. End with warm wishes.',
      de: 'Warmherziger und persönlicher Ton. Verwende Past Simple für aktuelle Ereignisse. Verwende Present Perfect für laufende Situationen. Beende mit warmen Wünschen.'
    }
  },
  {
    id: 'letter_friend_news',
    title: { en: 'Letter: Sharing News with Friend', de: 'Brief: Neuigkeiten mit Freund teilen' },
    category: 'letter',
    tense: 'Present Perfect, Past Simple, Future',
    typicalSentences: [
      'I have some exciting news to share!',
      'I got a new job last month.',
      'I\'m really happy about this opportunity.',
      'I wanted to share this with you because you\'re so important to me.',
      'I hope we can celebrate together soon!'
    ],
    vocabulary: ['exciting', 'news', 'share', 'job', 'month', 'happy', 'opportunity', 'important', 'celebrate', 'together'],
    tips: {
      en: 'Share your news enthusiastically. Use present perfect for recent achievements. Use future for plans. Show your excitement!',
      de: 'Teile deine Neuigkeiten enthusiastisch. Verwende Present Perfect für aktuelle Erfolge. Verwende Future für Pläne. Zeige deine Begeisterung!'
    }
  },
  {
    id: 'letter_friend_long_distance',
    title: { en: 'Letter: Long-Distance Friend', de: 'Brief: Langdistanz-Freund' },
    category: 'letter',
    tense: 'Present Simple, Present Perfect, Past Simple',
    typicalSentences: [
      'It\'s been too long since we last talked.',
      'I think about you often and miss our conversations.',
      'Life here has been busy but good.',
      'I wish you were here so we could hang out.',
      'Let\'s plan a visit soon!'
    ],
    vocabulary: ['long', 'talked', 'think', 'often', 'conversation', 'busy', 'wish', 'hang', 'plan', 'visit'],
    tips: {
      en: 'Express how much you miss them. Share updates about your life. Use present perfect for ongoing situations. End with plans to reconnect.',
      de: 'Drücke aus, wie sehr du sie vermisst. Teile Updates über dein Leben. Verwende Present Perfect für laufende Situationen. Beende mit Plänen, wieder in Kontakt zu treten.'
    }
  },

  // Blog Posts
  {
    id: 'blog_personal',
    title: { en: 'Blog Post: Personal Experience', de: 'Blog-Eintrag: Persönliche Erfahrung' },
    category: 'blog',
    tense: 'Past Simple, Present Simple',
    typicalSentences: [
      'Today I want to share something personal with you.',
      'I recently experienced something that changed my perspective.',
      'This taught me an important lesson.',
      'I hope my story can help others who are going through something similar.',
      'What are your thoughts on this?'
    ],
    vocabulary: ['share', 'personal', 'recently', 'experience', 'perspective', 'taught', 'lesson', 'story', 'help', 'thoughts'],
    tips: {
      en: 'Be authentic and relatable. Use past simple for your story. Use present simple for lessons learned. Engage readers with questions. Be conversational.',
      de: 'Sei authentisch und nachvollziehbar. Verwende Past Simple für deine Geschichte. Verwende Present Simple für gelernte Lektionen. Binde Leser mit Fragen ein. Sei gesprächig.'
    }
  },
  {
    id: 'blog_travel',
    title: { en: 'Blog Post: Travel Blog', de: 'Blog-Eintrag: Reiseblog' },
    category: 'blog',
    tense: 'Past Simple, Present Simple',
    typicalSentences: [
      'Welcome to my travel blog about [destination]!',
      'I spent an amazing week exploring this beautiful country.',
      'The food, culture, and people were incredible.',
      'Here are my top recommendations for anyone visiting.',
      'I highly recommend adding this place to your bucket list!'
    ],
    vocabulary: ['welcome', 'travel', 'destination', 'spent', 'exploring', 'beautiful', 'culture', 'incredible', 'recommendation', 'bucket'],
    tips: {
      en: 'Share your travel experiences vividly. Use past simple for what you did. Use present simple for recommendations. Include practical tips. Make it engaging with descriptions.',
      de: 'Teile deine Reiseerfahrungen lebendig. Verwende Past Simple für das, was du getan hast. Verwende Present Simple für Empfehlungen. Füge praktische Tipps ein. Mache es mit Beschreibungen ansprechend.'
    }
  },
  {
    id: 'blog_tips',
    title: { en: 'Blog Post: Tips & Advice', de: 'Blog-Eintrag: Tipps & Ratschläge' },
    category: 'blog',
    tense: 'Present Simple, Imperative',
    typicalSentences: [
      'In this post, I\'ll share my top tips for [topic].',
      'These strategies have worked really well for me.',
      'First, make sure you...',
      'Another important thing is to...',
      'Try these tips and let me know how it goes!'
    ],
    vocabulary: ['post', 'share', 'tips', 'topic', 'strategy', 'worked', 'important', 'sure', 'try', 'goes'],
    tips: {
      en: 'Use present simple for general advice. Use imperatives for direct tips. Structure clearly with numbered points. Be helpful and practical.',
      de: 'Verwende Present Simple für allgemeine Ratschläge. Verwende Imperative für direkte Tipps. Strukturiere klar mit nummerierten Punkten. Sei hilfreich und praktisch.'
    }
  },
  {
    id: 'blog_review',
    title: { en: 'Blog Post: Product Review', de: 'Blog-Eintrag: Produktrezension' },
    category: 'blog',
    tense: 'Past Simple, Present Simple',
    typicalSentences: [
      'I recently tried [product] and wanted to share my honest review.',
      'The product arrived quickly and was well-packaged.',
      'I\'ve been using it for [time] now.',
      'Here\'s what I love about it, and what could be improved.',
      'Overall, I would recommend this product.'
    ],
    vocabulary: ['recently', 'tried', 'honest', 'review', 'arrived', 'quickly', 'packaged', 'using', 'improved', 'overall'],
    tips: {
      en: 'Be honest and balanced. Use past simple for initial experience. Use present perfect for ongoing use. Include pros and cons. Give a clear recommendation.',
      de: 'Sei ehrlich und ausgewogen. Verwende Past Simple für erste Erfahrung. Verwende Present Perfect für laufende Nutzung. Füge Vor- und Nachteile ein. Gib eine klare Empfehlung.'
    }
  },

  // Product Descriptions
  {
    id: 'product_electronics',
    title: { en: 'Product Description: Electronics', de: 'Produktbeschreibung: Elektronik' },
    category: 'product_description',
    tense: 'Present Simple, Passive Voice',
    typicalSentences: [
      'This [product] features the latest technology.',
      'It is designed for [purpose].',
      'The device comes with [features].',
      'It offers excellent performance and reliability.',
      'Perfect for [target audience].'
    ],
    vocabulary: ['feature', 'technology', 'designed', 'purpose', 'device', 'offers', 'performance', 'reliability', 'perfect', 'audience'],
    tips: {
      en: 'Use present simple for product features. Use passive voice ("it is designed"). Highlight key benefits. Be specific about features. Use persuasive but factual language.',
      de: 'Verwende Present Simple für Produktmerkmale. Verwende Passiv ("it is designed"). Hebe wichtige Vorteile hervor. Sei spezifisch bei Merkmalen. Verwende überzeugende aber sachliche Sprache.'
    }
  },
  {
    id: 'product_clothing',
    title: { en: 'Product Description: Clothing', de: 'Produktbeschreibung: Kleidung' },
    category: 'product_description',
    tense: 'Present Simple',
    typicalSentences: [
      'This [item] is made from high-quality [material].',
      'It features a comfortable fit and stylish design.',
      'Available in multiple colors and sizes.',
      'Perfect for [occasion/season].',
      'Care instructions: [details].'
    ],
    vocabulary: ['made', 'quality', 'material', 'comfortable', 'fit', 'stylish', 'design', 'available', 'colors', 'sizes'],
    tips: {
      en: 'Describe material, fit, and style. Use present simple. Mention sizes and colors available. Include care instructions. Make it appealing to potential buyers.',
      de: 'Beschreibe Material, Passform und Stil. Verwende Present Simple. Erwähne verfügbare Größen und Farben. Füge Pflegehinweise ein. Mache es für potenzielle Käufer ansprechend.'
    }
  },
  {
    id: 'product_food',
    title: { en: 'Product Description: Food Product', de: 'Produktbeschreibung: Lebensmittel' },
    category: 'product_description',
    tense: 'Present Simple',
    typicalSentences: [
      'This delicious [product] is made with fresh, organic ingredients.',
      'It contains no artificial preservatives or additives.',
      'Perfect for [meal/occasion].',
      'Store in a cool, dry place.',
      'Best before: [date].'
    ],
    vocabulary: ['delicious', 'fresh', 'organic', 'ingredients', 'contains', 'artificial', 'preservatives', 'additives', 'store', 'before'],
    tips: {
      en: 'Emphasize quality and freshness. Mention ingredients. Use present simple. Include storage instructions and expiration date. Make it sound appetizing.',
      de: 'Betonte Qualität und Frische. Erwähne Zutaten. Verwende Present Simple. Füge Lagerhinweise und Ablaufdatum ein. Lass es appetitlich klingen.'
    }
  },
  {
    id: 'product_book',
    title: { en: 'Product Description: Book', de: 'Produktbeschreibung: Buch' },
    category: 'product_description',
    tense: 'Present Simple',
    typicalSentences: [
      'This captivating novel tells the story of [summary].',
      'Written by [author], it explores themes of [themes].',
      'The book is perfect for readers who enjoy [genre].',
      'With [number] pages, it\'s an engaging read.',
      'Highly recommended for [audience].'
    ],
    vocabulary: ['captivating', 'novel', 'tells', 'story', 'written', 'author', 'explores', 'themes', 'pages', 'recommended'],
    tips: {
      en: 'Give a brief summary without spoilers. Mention the author and genre. Use present simple. Highlight what makes it special. Appeal to the target audience.',
      de: 'Gib eine kurze Zusammenfassung ohne Spoiler. Erwähne Autor und Genre. Verwende Present Simple. Hebe hervor, was es besonders macht. Spricht die Zielgruppe an.'
    }
  },

  // Professional/Work
  {
    id: 'professional_memo',
    title: { en: 'Professional: Internal Memo', de: 'Beruflich: Internes Memo' },
    category: 'professional',
    tense: 'Present Simple, Present Perfect',
    typicalSentences: [
      'To: All Staff',
      'Subject: [Topic]',
      'I am writing to inform you about [topic].',
      'Effective immediately, we will be implementing [change].',
      'Please contact me if you have any questions.'
    ],
    vocabulary: ['staff', 'subject', 'inform', 'effective', 'immediately', 'implementing', 'change', 'contact', 'questions', 'memo'],
    tips: {
      en: 'Be clear and concise. Use formal but friendly tone. Include: To, From, Subject, Date. Use present simple for current policies. Be direct and actionable.',
      de: 'Sei klar und prägnant. Verwende formellen aber freundlichen Ton. Füge ein: An, Von, Betreff, Datum. Verwende Present Simple für aktuelle Richtlinien. Sei direkt und umsetzbar.'
    }
  },
  {
    id: 'professional_proposal',
    title: { en: 'Professional: Project Proposal', de: 'Beruflich: Projektvorschlag' },
    category: 'professional',
    tense: 'Present Simple, Future, Conditional',
    typicalSentences: [
      'I propose to [action] in order to [benefit].',
      'This project would help us achieve [goal].',
      'The estimated timeline is [duration].',
      'We would need [resources].',
      'I believe this proposal would be beneficial for [reasons].'
    ],
    vocabulary: ['propose', 'action', 'benefit', 'project', 'achieve', 'goal', 'estimated', 'timeline', 'resources', 'beneficial'],
    tips: {
      en: 'Be persuasive but professional. Use conditional ("would") for proposals. Present clear benefits. Include timeline and resources needed. Structure: problem, solution, benefits.',
      de: 'Sei überzeugend aber professionell. Verwende Konditional ("would") für Vorschläge. Präsentiere klare Vorteile. Füge Zeitplan und benötigte Ressourcen ein. Struktur: Problem, Lösung, Vorteile.'
    }
  },
  {
    id: 'professional_meeting_summary',
    title: { en: 'Professional: Meeting Summary', de: 'Beruflich: Besprechungszusammenfassung' },
    category: 'professional',
    tense: 'Past Simple, Present Simple',
    typicalSentences: [
      'Meeting Date: [date]',
      'Attendees: [names]',
      'We discussed [topics].',
      'Key decisions made: [decisions]',
      'Action items: [tasks] with deadlines.'
    ],
    vocabulary: ['meeting', 'date', 'attendees', 'discussed', 'topics', 'decisions', 'action', 'items', 'deadlines', 'summary'],
    tips: {
      en: 'Be concise and organized. Use past simple for what was discussed. Use present simple for decisions and action items. Include: date, attendees, topics, decisions, action items.',
      de: 'Sei prägnant und organisiert. Verwende Past Simple für das, was besprochen wurde. Verwende Present Simple für Entscheidungen und Aktionspunkte. Füge ein: Datum, Teilnehmer, Themen, Entscheidungen, Aktionspunkte.'
    }
  },
  {
    id: 'professional_feedback',
    title: { en: 'Professional: Performance Feedback', de: 'Beruflich: Leistungsfeedback' },
    category: 'professional',
    tense: 'Present Simple, Present Perfect',
    typicalSentences: [
      'I wanted to provide feedback on your recent work.',
      'You have done an excellent job on [project].',
      'Your strengths include [strengths].',
      'Areas for improvement: [areas].',
      'Keep up the great work!'
    ],
    vocabulary: ['provide', 'feedback', 'recent', 'excellent', 'strengths', 'improvement', 'areas', 'great', 'work', 'performance'],
    tips: {
      en: 'Be constructive and balanced. Start with positives. Use present perfect for achievements. Be specific. End on a positive note. Be professional and supportive.',
      de: 'Sei konstruktiv und ausgewogen. Beginne mit Positivem. Verwende Present Perfect für Erfolge. Sei spezifisch. Beende mit einer positiven Note. Sei professionell und unterstützend.'
    }
  },
  {
    id: 'professional_announcement',
    title: { en: 'Professional: Company Announcement', de: 'Beruflich: Firmenankündigung' },
    category: 'professional',
    tense: 'Present Simple, Future',
    typicalSentences: [
      'We are pleased to announce [news].',
      'This change will take effect on [date].',
      'We believe this will benefit [who/how].',
      'If you have questions, please contact [person/department].',
      'Thank you for your continued support.'
    ],
    vocabulary: ['pleased', 'announce', 'change', 'effect', 'believe', 'benefit', 'questions', 'contact', 'continued', 'support'],
    tips: {
      en: 'Be clear and positive. Use present simple for current state. Use future for upcoming changes. Explain the benefits. Provide contact for questions. Professional but warm tone.',
      de: 'Sei klar und positiv. Verwende Present Simple für aktuellen Zustand. Verwende Future für bevorstehende Änderungen. Erkläre die Vorteile. Biete Kontakt für Fragen. Professioneller aber warmer Ton.'
    }
  },

  // Additional Categories
  {
    id: 'recipe',
    title: { en: 'Recipe: Cooking Instructions', de: 'Rezept: Kochanleitung' },
    category: 'recipe',
    tense: 'Imperative, Present Simple',
    typicalSentences: [
      'Ingredients: [list]',
      'First, heat the oven to [temperature].',
      'Then, mix the ingredients together.',
      'Bake for [time] until golden brown.',
      'Serve hot and enjoy!'
    ],
    vocabulary: ['ingredients', 'heat', 'oven', 'temperature', 'mix', 'together', 'bake', 'golden', 'brown', 'serve'],
    tips: {
      en: 'Use imperatives for instructions. List ingredients first. Use clear, step-by-step instructions. Include temperatures and times. Be specific about measurements.',
      de: 'Verwende Imperative für Anweisungen. Liste zuerst Zutaten auf. Verwende klare, schrittweise Anweisungen. Füge Temperaturen und Zeiten ein. Sei spezifisch bei Maßen.'
    }
  },
  {
    id: 'instructions',
    title: { en: 'Instructions: How to Use', de: 'Anleitung: Gebrauchsanweisung' },
    category: 'instructions',
    tense: 'Imperative, Present Simple',
    typicalSentences: [
      'Before using, read all instructions carefully.',
      'Step 1: [instruction]',
      'Make sure to [important point].',
      'Do not [warning].',
      'If you have problems, contact [support].'
    ],
    vocabulary: ['before', 'using', 'instructions', 'carefully', 'step', 'sure', 'important', 'warning', 'problems', 'support'],
    tips: {
      en: 'Use clear, numbered steps. Use imperatives. Include warnings and safety information. Be concise. Use present simple for general information.',
      de: 'Verwende klare, nummerierte Schritte. Verwende Imperative. Füge Warnungen und Sicherheitsinformationen ein. Sei prägnant. Verwende Present Simple für allgemeine Informationen.'
    }
  },
  {
    id: 'invitation_formal',
    title: { en: 'Invitation: Formal Event', de: 'Einladung: Formelle Veranstaltung' },
    category: 'invitation',
    tense: 'Present Simple, Future',
    typicalSentences: [
      'You are cordially invited to [event].',
      'The event will take place on [date] at [time].',
      'Location: [address]',
      'Please RSVP by [date].',
      'We look forward to seeing you there.'
    ],
    vocabulary: ['cordially', 'invited', 'event', 'place', 'location', 'address', 'RSVP', 'forward', 'seeing', 'formal'],
    tips: {
      en: 'Use formal language. Include all essential details: date, time, location, dress code if applicable. Use future for the event. Be polite and clear.',
      de: 'Verwende formelle Sprache. Füge alle wesentlichen Details ein: Datum, Zeit, Ort, Dresscode falls zutreffend. Verwende Future für die Veranstaltung. Sei höflich und klar.'
    }
  },
  {
    id: 'invitation_casual',
    title: { en: 'Invitation: Casual Gathering', de: 'Einladung: Lässige Zusammenkunft' },
    category: 'invitation',
    tense: 'Present Continuous, Future',
    typicalSentences: [
      'Hey! I\'m having a [event] and would love for you to come!',
      'It\'s on [date] at [time].',
      'We\'ll be at [location].',
      'No need to bring anything, just yourself!',
      'Hope you can make it!'
    ],
    vocabulary: ['having', 'would', 'love', 'come', 'bring', 'yourself', 'hope', 'make', 'casual', 'gathering'],
    tips: {
      en: 'Friendly and casual tone. Use present continuous for future events. Be warm and inviting. Keep it simple and relaxed.',
      de: 'Freundlicher und lässiger Ton. Verwende Present Continuous für zukünftige Ereignisse. Sei warmherzig und einladend. Halte es einfach und entspannt.'
    }
  },
  {
    id: 'thank_you_note',
    title: { en: 'Thank You Note', de: 'Dankesbrief' },
    category: 'thank_you',
    tense: 'Past Simple, Present Simple',
    typicalSentences: [
      'Thank you so much for [what they did].',
      'I really appreciate your [kindness/help/gift].',
      'It meant a lot to me.',
      'I wanted to let you know how grateful I am.',
      'Thanks again for everything!'
    ],
    vocabulary: ['thank', 'much', 'appreciate', 'kindness', 'meant', 'grateful', 'again', 'everything', 'sincere', 'heartfelt'],
    tips: {
      en: 'Be sincere and specific. Mention what you\'re thanking them for. Use past simple for what they did. Express genuine gratitude. Keep it warm and personal.',
      de: 'Sei aufrichtig und spezifisch. Erwähne, wofür du dankst. Verwende Past Simple für das, was sie getan haben. Drücke echte Dankbarkeit aus. Halte es warmherzig und persönlich.'
    }
  },
  {
    id: 'apology',
    title: { en: 'Apology Letter', de: 'Entschuldigungsbrief' },
    category: 'apology',
    tense: 'Past Simple, Present Simple',
    typicalSentences: [
      'I am writing to apologize for [what happened].',
      'I realize I made a mistake.',
      'I take full responsibility for my actions.',
      'I hope you can forgive me.',
      'I will make sure this doesn\'t happen again.'
    ],
    vocabulary: ['apologize', 'realize', 'mistake', 'responsibility', 'actions', 'forgive', 'sure', 'happen', 'sincere', 'regret'],
    tips: {
      en: 'Be sincere and take responsibility. Use past simple for what happened. Don\'t make excuses. Show that you understand the impact. Promise to do better.',
      de: 'Sei aufrichtig und übernimm Verantwortung. Verwende Past Simple für das, was passierte. Mache keine Ausreden. Zeige, dass du die Auswirkungen verstehst. Verspreche, es besser zu machen.'
    }
  },
  {
    id: 'congratulations',
    title: { en: 'Congratulations Message', de: 'Glückwunschnachricht' },
    category: 'congratulations',
    tense: 'Present Simple, Present Perfect',
    typicalSentences: [
      'Congratulations on [achievement]!',
      'I heard about your [news] and I\'m so happy for you!',
      'You deserve this success.',
      'I know how hard you\'ve worked for this.',
      'Wishing you all the best for the future!'
    ],
    vocabulary: ['congratulations', 'achievement', 'heard', 'happy', 'deserve', 'success', 'worked', 'wishing', 'future', 'proud'],
    tips: {
      en: 'Be enthusiastic and genuine. Use present perfect for their achievement. Show that you\'re happy for them. Be specific about what you\'re congratulating them for.',
      de: 'Sei enthusiastisch und aufrichtig. Verwende Present Perfect für ihren Erfolg. Zeige, dass du dich für sie freust. Sei spezifisch, wofür du gratulierst.'
    }
  }
];

/**
 * Get a random topic
 */
export function getRandomTopic() {
  return writingTopics[Math.floor(Math.random() * writingTopics.length)];
}

/**
 * Get topic by ID
 */
export function getTopicById(id) {
  return writingTopics.find(topic => topic.id === id);
}

/**
 * Get topics by category
 */
export function getTopicsByCategory(category) {
  return writingTopics.filter(topic => topic.category === category);
}

/**
 * Get all categories
 */
export function getAllCategories() {
  return [...new Set(writingTopics.map(topic => topic.category))];
}

