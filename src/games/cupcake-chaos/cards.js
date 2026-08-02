// ============================================================
// CUPCAKE CHAOS - Card Definitions
// ============================================================

export const CARD_TYPES = { ACTION: 'action', TRAP: 'trap', COUNTER: 'counter' };

export const CARD_DEFS = [
  // ==================== ACTION CARDS ====================
  {
    id: 'sugar_rush', name: 'Sugar Rush', type: 'action',
    description: 'Draw 3 cards from the deck.',
    targetType: 'none', icon: 'sparkles', copies: 3,
  },
  {
    id: 'sticky_fingers', name: 'Sticky Fingers', type: 'action',
    description: 'Steal 1 random card from a chosen player.',
    targetType: 'player', icon: 'hand', copies: 3,
  },
  {
    id: 'frosting_blast', name: 'Frosting Blast', type: 'action',
    description: 'All other players discard 1 random card.',
    targetType: 'none', icon: 'explosion', copies: 2,
  },
  {
    id: 'cherry_pick', name: 'Cherry Pick', type: 'action',
    description: 'Draw 2 cards, then discard 1 from your hand.',
    targetType: 'none', icon: 'cherry', copies: 2, needsDiscard: 1,
  },
  {
    id: 'oven_timer', name: 'Oven Timer', type: 'action',
    description: 'Skip the next player\'s turn.',
    targetType: 'none', icon: 'timer', copies: 2,
  },
  {
    id: 'rolling_pin', name: 'Rolling Pin', type: 'action',
    description: 'Reverse play direction and draw 1 card.',
    targetType: 'none', icon: 'reverse', copies: 2,
  },
  {
    id: 'flour_bomb', name: 'Flour Bomb', type: 'action',
    description: 'ALL players (including you) draw 2 cards.',
    targetType: 'none', icon: 'bomb', copies: 2,
  },
  {
    id: 'recipe_swap', name: 'Recipe Swap', type: 'action',
    description: 'Swap your entire hand with a chosen player\'s hand.',
    targetType: 'player', icon: 'swap', copies: 2,
  },
  {
    id: 'cupcake_thief', name: 'Cupcake Thief', type: 'action',
    description: 'Steal 2 random cards from a chosen player.',
    targetType: 'player', icon: 'mask', copies: 2,
  },
  {
    id: 'half_baked', name: 'Half Baked', type: 'action',
    description: 'A chosen player discards half their hand (rounded down).',
    targetType: 'player', icon: 'broken', copies: 2,
  },
  {
    id: 'sprinkle_shower', name: 'Sprinkle Shower', type: 'action',
    description: 'Take 1 random card from each other player.',
    targetType: 'none', icon: 'rain', copies: 2,
  },
  {
    id: 'garnish', name: 'Garnish', type: 'action',
    description: 'Draw 1 card for each player in the game.',
    targetType: 'none', icon: 'plus', copies: 2,
  },
  {
    id: 'sweet_tooth', name: 'Sweet Tooth', type: 'action',
    description: 'Draw cards until you have 7. No effect if you have 7+.',
    targetType: 'none', icon: 'tooth', copies: 2,
  },
  {
    id: 'batter_up', name: 'Batter Up', type: 'action',
    description: 'Draw 3 cards, but a chosen player also draws 2.',
    targetType: 'player', icon: 'gift', copies: 2,
  },
  {
    id: 'crumb_trail', name: 'Crumb Trail', type: 'action',
    description: 'All players pass 2 random cards to the left.',
    targetType: 'none', icon: 'trail', copies: 2,
  },

  // ==================== TRAP CARDS ====================
  {
    id: 'burnt_offering', name: 'Burnt Offering', type: 'trap',
    description: 'When someone steals from you, they discard 2 cards instead.',
    trigger: 'on_steal', icon: 'fire', copies: 2,
  },
  {
    id: 'booby_frosted', name: 'Booby Frosted', type: 'trap',
    description: 'When any player reaches 10+ cards, they discard 3.',
    trigger: 'on_reach_10', icon: 'cupcake_trap', copies: 2,
  },
  {
    id: 'rotten_egg', name: 'Rotten Egg', type: 'trap',
    description: 'When someone claims CUPCAKE!, they discard 5 cards.',
    trigger: 'on_claim', icon: 'egg', copies: 2,
  },
  {
    id: 'stale_batch', name: 'Stale Batch', type: 'trap',
    description: 'When someone draws 2+ cards at once, they discard 1.',
    trigger: 'on_multi_draw', icon: 'stale', copies: 2,
  },

  // ==================== COUNTER CARDS ====================
  {
    id: 'nope', name: 'Nope!', type: 'counter',
    description: 'Cancel any action card that was just played.',
    icon: 'x_circle', copies: 4,
  },
  {
    id: 'not_today', name: 'Not Today!', type: 'counter',
    description: 'Block any effect targeting you specifically.',
    icon: 'shield', copies: 3,
  },
  {
    id: 'sweet_escape', name: 'Sweet Escape', type: 'counter',
    description: 'You are immune to all effects until your next turn.',
    icon: 'wings', copies: 2,
  },
];

export function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function createDeck() {
  const deck = [];
  let uid = 0;
  for (const def of CARD_DEFS) {
    for (let i = 0; i < (def.copies || 1); i++) {
      deck.push({
        uid: uid++,
        id: def.id,
        name: def.name,
        type: def.type,
        description: def.description,
        targetType: def.targetType || 'none',
        trigger: def.trigger || null,
        needsDiscard: def.needsDiscard || 0,
        icon: def.icon,
      });
    }
  }
  return shuffleArray(deck);
}
