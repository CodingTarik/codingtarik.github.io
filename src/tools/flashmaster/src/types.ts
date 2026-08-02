// ── Core Data Models ──

export interface Deck {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: string;
  createdAt: number;
  updatedAt: number;
  settings: DeckSettings;
  tags: string[];
  isFavorite?: boolean;              // pinned to top of dashboard
  parentDeckId?: string;             // for subdeck hierarchy (Anki-style)
}

export interface DeckSettings {
  newCardsPerDay: number;
  reviewsPerDay: number;
  learningSteps: number[];       // in minutes, e.g. [1, 10]
  graduatingInterval: number;    // in days
  easyInterval: number;          // in days
  startingEase: number;          // e.g. 2.5
  easyBonus: number;             // e.g. 1.3
  intervalModifier: number;      // e.g. 1.0
  maxInterval: number;           // in days, e.g. 36500
  lapseSteps: number[];          // in minutes
  lapseNewInterval: number;      // percentage, e.g. 0.7
  lapseMinInterval: number;      // in days
  buryRelated: boolean;
  showTimer: boolean;
  autoPlayAudio: boolean;
  leechThreshold: number;            // lapses before flagging as leech (default 8)
}

export interface Card {
  id: string;
  deckId: string;
  front: string;
  back: string;
  frontImageUrl?: string;
  backImageUrl?: string;
  tags: string[];
  noteType: CardNoteType;
  createdAt: number;
  updatedAt: number;
  // SRS fields
  status: CardStatus;
  ease: number;
  interval: number;              // in days
  dueDate: number;               // timestamp
  lapses: number;
  reps: number;
  learningStep: number;          // current step index for learning/relearning
  starRating?: number;            // 0-5 self-assessment in practice mode
  // PlayPhrase settings (playphrase.me integration)
  playPhraseEnabled?: boolean;    // whether PlayPhrase.me is enabled for this card
  playPhraseCustom?: string;      // custom word/phrase (empty = use front text)
  playPhraseSide?: 'front' | 'back'; // which side triggers playback
  // Leech & metacognition
  isLeech?: boolean;                  // flagged as a leech (too many lapses)
  confidenceLog?: number[];           // recent confidence-before-answer scores (0-1)
  // File attachments
  attachments?: CardAttachment[];     // attached files (PDF, code, docs)
  // Flags / priority
  flag?: CardFlag;                    // color flag for importance marking
  // Learning aids — science-based memory helpers
  mnemonic?: string;                   // AI-generated mnemonic / memory hook
  exampleSentence?: string;            // AI context sentence
  etymology?: string;                  // AI etymology / word origin
  visualKeyword?: string;              // AI keyword method imagery description
  // Manual sort order (lower = first)
  sortOrder?: number;
  // YouTube embeds
  frontYoutubeUrl?: string;           // YouTube video URL for front side
  backYoutubeUrl?: string;            // YouTube video URL for back side
  // ── Multiple Choice ──
  mcChoices?: string[];               // answer choices (2-6)
  mcCorrectIndex?: number;            // index of the correct answer in mcChoices
  mcShuffle?: boolean;                // shuffle choices each time? (default true)
  // ── AI Dynamic ──
  aiPrompt?: string;                  // prompt template for AI to generate dynamic content
  aiLastGenerated?: string;           // cached last AI-generated question (JSON)
  aiTopic?: string;                   // topic / subject area for context
  aiDifficulty?: 'easy' | 'medium' | 'hard'; // difficulty level
  // ── Type-In ──
  typeInAnswer?: string;              // exact expected answer for type-in mode
  typeInCaseSensitive?: boolean;      // case-sensitive comparison (default false)
  typeInAcceptAlternatives?: string[]; // alternative accepted answers
  // ── Image Occlusion ──
  ioImageUrl?: string;                // base image (data URL)
  ioRegions?: IORegion[];             // masked regions
  // ── Ordering ──
  orderItems?: string[];              // items in correct order
}

export type CardNoteType =
  | 'basic'
  | 'reversed'
  | 'cloze'
  | 'multipleChoice'
  | 'aiDynamic'
  | 'typeIn'
  | 'imageOcclusion'
  | 'ordering';

/** Region mask for image occlusion cards */
export interface IORegion {
  id: string;
  x: number;       // percentage (0-100)
  y: number;       // percentage (0-100)
  width: number;   // percentage
  height: number;  // percentage
  label?: string;  // optional label shown on reveal
}

/** Colored flag to mark card priority/importance. 0 = no flag. */
export type CardFlag = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

export const CARD_FLAGS: { id: CardFlag; label: string; color: string; bg: string }[] = [
  { id: 0, label: 'No Flag', color: 'text-slate-500', bg: 'bg-slate-500/20' },
  { id: 1, label: 'Red', color: 'text-red-400', bg: 'bg-red-500/20' },
  { id: 2, label: 'Orange', color: 'text-orange-400', bg: 'bg-orange-500/20' },
  { id: 3, label: 'Green', color: 'text-emerald-400', bg: 'bg-emerald-500/20' },
  { id: 4, label: 'Blue', color: 'text-blue-400', bg: 'bg-blue-500/20' },
  { id: 5, label: 'Pink', color: 'text-pink-400', bg: 'bg-pink-500/20' },
  { id: 6, label: 'Turquoise', color: 'text-cyan-400', bg: 'bg-cyan-500/20' },
  { id: 7, label: 'Purple', color: 'text-purple-400', bg: 'bg-purple-500/20' },
];

export interface CardAttachment {
  id: string;
  name: string;                       // display filename
  type: string;                       // MIME type
  dataUrl: string;                    // base64 data URL for offline storage
  size: number;                       // bytes
}

export type CardStatus = 'new' | 'learning' | 'review' | 'relearning' | 'suspended' | 'buried';

// ── Deck Resources (Notebook / Files) ──

export type ResourceType = 'note' | 'pdf' | 'link' | 'youtube' | 'image' | 'file';

export interface DrawingStroke {
  points: { x: number; y: number; pressure?: number }[];
  color: string;
  width: number;
  tool: 'pen' | 'highlighter' | 'eraser';
}

export interface DeckResource {
  id: string;
  deckId: string;
  type: ResourceType;
  title: string;
  createdAt: number;
  updatedAt: number;
  sortOrder?: number;
  // Note content (rich text HTML)
  content?: string;
  // Drawing data (per-page strokes)
  drawings?: DrawingStroke[][];
  // PDF
  pdfData?: string;                 // base64 encoded PDF
  pdfAnnotations?: DrawingStroke[][]; // per-page annotations
  pdfExtraPages?: number[];         // indices of inserted blank pages
  // Link / URL
  url?: string;
  // YouTube
  youtubeUrl?: string;
  // File storage
  fileName?: string;
  fileType?: string;                // MIME type
  fileData?: string;                // base64 data URL
  fileSize?: number;                // bytes
  // Thumbnail (for images, videos, PDFs)
  thumbnail?: string;               // base64 thumbnail
}

// ── Book Library ──

export interface Book {
  id: string;
  title: string;
  author: string;
  coverUrl?: string;              // data URL for cover image
  format: 'epub' | 'pdf';
  fileData: string;               // base64 file data
  fileSize: number;               // bytes
  addedAt: number;
  lastReadAt?: number;
  // Reading progress
  currentLocation?: string;       // epub CFI or PDF page number as string
  totalLocations?: number;        // total locations/pages
  progress: number;               // 0-100 percentage
  // Bookmarks
  bookmarks: BookBookmark[];
  // Saved translations
  savedWords: SavedWord[];
}

export interface BookBookmark {
  id: string;
  location: string;               // epub CFI or page number
  label: string;                  // user label or auto text snippet
  createdAt: number;
  color?: string;
}

export interface SavedWord {
  id: string;
  text: string;                   // original text/phrase
  translation: string;            // translated text
  explanation?: string;           // AI explanation (synonyms, examples)
  context?: string;               // surrounding sentence
  createdAt: number;
  addedToDeck?: string;           // deck ID if already added
  location?: string;              // page number (PDF) or CFI (EPUB) for jump-back
}

// ── AI Chat ──

export interface ChatSession {
  id: string;
  title: string;
  messages: ChatSessionMessage[];
  createdAt: number;
  updatedAt: number;
}

export interface ChatSessionMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  /** Suggested flashcards embedded in assistant messages */
  suggestedCards?: SuggestedCard[];
}

export interface SuggestedCard {
  id: string;
  front: string;
  back: string;
  frontImageSvg?: string;           // optional inline SVG illustration
  added: boolean;                    // whether user already added to a deck
  addedDeckId?: string;
}

// ── Video Subtitle Player ──

export interface SubtitleCue {
  id: string;
  startTime: number;      // seconds
  endTime: number;        // seconds
  text: string;
}

export interface VideoSavedTranslation {
  id: string;
  original: string;
  translation: string;
  explanation?: string;
  timestamp: number;       // video position in seconds
  createdAt: number;
  addedToDeck?: string;
}

export type Rating = 'again' | 'hard' | 'good' | 'easy';

export interface ReviewLog {
  id: string;
  cardId: string;
  deckId: string;
  rating: Rating;
  ease: number;
  interval: number;
  timeTaken: number;             // ms
  reviewedAt: number;            // timestamp
}

// ── Gamification ──

export interface DailyStudyEntry {
  cards: number;
  xp: number;
  timeMs: number;
  /** Active (non-idle) study time in ms */
  activeTimeMs?: number;
}

export interface UserStats {
  id: string;                    // always 'main'
  xp: number;
  level: number;
  currentStreak: number;
  longestStreak: number;
  lastStudyDate: string;         // YYYY-MM-DD
  totalCardsStudied: number;
  totalTimeStudied: number;      // ms (total wall-clock time on site)
  totalActiveTime?: number;      // ms (only active, non-idle time)
  achievements: Achievement[];
  dailyGoal: number;             // cards per day
  weeklyXpHistory: Record<string, number>; // date -> xp
  /** Per-day study log -- source of truth for streaks & sync merging */
  studyHistory?: Record<string, DailyStudyEntry>; // 'YYYY-MM-DD' -> entry
  pomodorosCompleted?: number;        // total pomodoro sessions completed
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: number;
  condition: string;
}

// ── Sync ──

export interface SyncData {
  version: number;
  exportedAt: number;
  decks: Deck[];
  cards: Card[];
  reviewLogs: ReviewLog[];
  userStats: UserStats | null;
}

// ── Default Settings ──

export const DEFAULT_DECK_SETTINGS: DeckSettings = {
  newCardsPerDay: 20,
  reviewsPerDay: 200,
  learningSteps: [1, 10],
  graduatingInterval: 1,
  easyInterval: 4,
  startingEase: 2.5,
  easyBonus: 1.3,
  intervalModifier: 1.0,
  maxInterval: 36500,
  lapseSteps: [10],
  lapseNewInterval: 0.7,
  lapseMinInterval: 1,
  buryRelated: false,
  showTimer: true,
  autoPlayAudio: false,
  leechThreshold: 8,
};

export const ACHIEVEMENTS_LIST: Omit<Achievement, 'unlockedAt'>[] = [
  { id: 'first_card', name: 'First Step', description: 'Study your first card', icon: '🎯', condition: 'totalCardsStudied >= 1' },
  { id: 'ten_cards', name: 'Getting Started', description: 'Study 10 cards', icon: '📚', condition: 'totalCardsStudied >= 10' },
  { id: 'fifty_cards', name: 'Scholar', description: 'Study 50 cards', icon: '🎓', condition: 'totalCardsStudied >= 50' },
  { id: 'hundred_cards', name: 'Centurion', description: 'Study 100 cards', icon: '💯', condition: 'totalCardsStudied >= 100' },
  { id: 'five_hundred_cards', name: 'Knowledge Seeker', description: 'Study 500 cards', icon: '🧠', condition: 'totalCardsStudied >= 500' },
  { id: 'thousand_cards', name: 'Master Mind', description: 'Study 1000 cards', icon: '👑', condition: 'totalCardsStudied >= 1000' },
  { id: 'streak_3', name: 'On Fire', description: '3-day study streak', icon: '🔥', condition: 'currentStreak >= 3' },
  { id: 'streak_7', name: 'Week Warrior', description: '7-day study streak', icon: '⚡', condition: 'currentStreak >= 7' },
  { id: 'streak_30', name: 'Monthly Master', description: '30-day study streak', icon: '🏆', condition: 'currentStreak >= 30' },
  { id: 'streak_100', name: 'Unstoppable', description: '100-day study streak', icon: '💎', condition: 'currentStreak >= 100' },
  { id: 'level_5', name: 'Apprentice', description: 'Reach level 5', icon: '⭐', condition: 'level >= 5' },
  { id: 'level_10', name: 'Journeyman', description: 'Reach level 10', icon: '🌟', condition: 'level >= 10' },
  { id: 'level_25', name: 'Expert', description: 'Reach level 25', icon: '✨', condition: 'level >= 25' },
  { id: 'level_50', name: 'Sage', description: 'Reach level 50', icon: '🔮', condition: 'level >= 50' },
  { id: 'hour_studied', name: 'Dedicated', description: 'Study for 1 hour total', icon: '⏰', condition: 'totalTimeStudied >= 3600000' },
  { id: 'ten_hours', name: 'Committed', description: 'Study for 10 hours total', icon: '📖', condition: 'totalTimeStudied >= 36000000' },
  { id: 'pomodoro_1', name: 'Focused', description: 'Complete your first Pomodoro', icon: '🍅', condition: 'pomodorosCompleted >= 1' },
  { id: 'pomodoro_10', name: 'Deep Focus', description: 'Complete 10 Pomodoros', icon: '🧘', condition: 'pomodorosCompleted >= 10' },
  { id: 'pomodoro_50', name: 'Zen Master', description: 'Complete 50 Pomodoros', icon: '☯️', condition: 'pomodorosCompleted >= 50' },
];

// ── XP / Level Config ──

export const XP_PER_CARD = 10;
export const XP_STREAK_BONUS = 5;    // bonus per streak day
export const XP_EASY_BONUS = 5;
export const XP_PER_LEVEL = 100;     // XP needed for each level
