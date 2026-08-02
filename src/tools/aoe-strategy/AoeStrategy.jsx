import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Search, ChevronDown, ChevronUp, Users, Wheat, TreePine, Coins, Sword, Shield, Castle, Crown, Info, X, Clock, Star, Flame } from 'lucide-react';
import { navigate } from '../../utils/navigation';

// ─── Civilization Data with Build Orders ─────────────────────────────────────────
const CIVILIZATIONS = [
  {
    id: 'britons',
    name: 'Britons',
    flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    specialty: 'Archer',
    difficulty: 'Easy',
    uniqueUnit: 'Longbowman',
    bonus: ['+1/+2 range for Archers (Castle/Imp)', 'Shepherds work 25% faster', 'Town Centers cost -50% wood (Castle Age)'],
    gradient: 'from-red-600 to-rose-700',
    strategy: 'Archers → Crossbowmen → Longbowmen. Mass archers with superior range.',
    buildOrder: {
      name: 'Fast Castle Archers',
      popTarget: '22 Pop → Feudal',
      steps: [
        { pop: '1-6', task: 'Gather sheep', resource: 'food', icon: '🐑', detail: '6 villagers on sheep directly under TC' },
        { pop: '7-10', task: 'Chop wood', resource: 'wood', icon: '🪓', detail: '4 villagers to nearest forest, build Lumber Camp' },
        { pop: '11', task: 'Lure boar', resource: 'food', icon: '🐗', detail: '1 villager lures the first boar to TC' },
        { pop: '12-13', task: 'Gather berries', resource: 'food', icon: '🫐', detail: '2 villagers to berry bush, build Mill' },
        { pop: '14', task: 'Lure 2nd boar', resource: 'food', icon: '🐗', detail: 'Bring second boar to TC' },
        { pop: '15-17', task: 'Berries + Farms', resource: 'food', icon: '🌾', detail: '2 more on berries, 1 builds Farm' },
        { pop: '18-21', task: 'Chop wood', resource: 'wood', icon: '🪓', detail: 'Build second Lumber Camp at forest' },
        { pop: '22', task: 'Click FEUDAL AGE!', resource: 'advance', icon: '⬆️', detail: 'Research Loom, then click Feudal Age' },
        { pop: 'Feudal', task: 'Build Archery Range', resource: 'military', icon: '🏹', detail: 'Immediately build 2 Archery Ranges + Barracks, produce Archers' },
        { pop: 'Feudal+', task: 'Mine gold', resource: 'gold', icon: '⛏️', detail: '3 villagers on gold for Castle Age upgrade' },
      ]
    }
  },
  {
    id: 'franks',
    name: 'Franks',
    flag: '🇫🇷',
    specialty: 'Cavalry',
    difficulty: 'Easy',
    uniqueUnit: 'Throwing Axeman',
    bonus: ['Cavalry +20% HP', 'Farm upgrades free', 'Castles cost -25%', 'Foraging not needed (berries visible)'],
    gradient: 'from-blue-600 to-indigo-700',
    strategy: 'Scout Rush → Knights. Superior cavalry dominates the mid-game.',
    buildOrder: {
      name: 'Scout Rush → Knights',
      popTarget: '21 Pop → Feudal',
      steps: [
        { pop: '1-6', task: 'Gather sheep', resource: 'food', icon: '🐑', detail: '6 villagers on sheep (Franks auto-reveal berries!)' },
        { pop: '7-10', task: 'Chop wood', resource: 'wood', icon: '🪓', detail: '4 villagers to forest, build Lumber Camp' },
        { pop: '11', task: 'Lure boar', resource: 'food', icon: '🐗', detail: 'Lure boar to TC' },
        { pop: '12-13', task: 'Gather berries', resource: 'food', icon: '🫐', detail: '2 on berries (free farm upgrades = strong!)' },
        { pop: '14', task: 'Lure 2nd boar', resource: 'food', icon: '🐗', detail: 'Get second boar' },
        { pop: '15-17', task: 'Build farms', resource: 'food', icon: '🌾', detail: 'Three farms around TC' },
        { pop: '18-20', task: 'Wood + Gold', resource: 'wood', icon: '🪓', detail: '2 wood, 1 prepare gold' },
        { pop: '21', task: 'Click FEUDAL AGE!', resource: 'advance', icon: '⬆️', detail: 'Loom + Click Up' },
        { pop: 'Feudal', task: 'Build Stable', resource: 'military', icon: '🐴', detail: 'Immediately Stable + Barracks. Produce Scouts!' },
        { pop: 'Feudal+', task: 'Mine gold', resource: 'gold', icon: '⛏️', detail: '5+ on gold → Castle Age → spam Knights' },
      ]
    }
  },
  {
    id: 'mongols',
    name: 'Mongols',
    flag: '🇲🇳',
    specialty: 'Cavalry Archer',
    difficulty: 'Medium',
    uniqueUnit: 'Mangudai',
    bonus: ['Cavalry Archers fire 25% faster', 'Light Cavalry +30% HP', 'Hunters work 40% faster', 'Scout has +2 LOS'],
    gradient: 'from-emerald-600 to-teal-700',
    strategy: 'Fast Feudal with Scouts → Mangudai in Castle Age. Hit-and-run masters.',
    buildOrder: {
      name: 'Fast Feudal Scout Rush',
      popTarget: '20 Pop → Feudal (fast!)',
      steps: [
        { pop: '1-6', task: 'Gather sheep', resource: 'food', icon: '🐑', detail: '6 villagers on sheep' },
        { pop: '7-9', task: 'Chop wood', resource: 'wood', icon: '🪓', detail: '3 to forest' },
        { pop: '10', task: 'Lure boar', resource: 'food', icon: '🐗', detail: 'Mongol hunters are 40% faster! Deer pushing is worth it!' },
        { pop: '11-12', task: 'Push deer!', resource: 'food', icon: '🦌', detail: 'Scout pushes deer to TC — Mongol specialty!' },
        { pop: '13-14', task: 'Gather berries', resource: 'food', icon: '🫐', detail: '2 on berries' },
        { pop: '15', task: 'Lure 2nd boar', resource: 'food', icon: '🐗', detail: 'Boar #2 to TC' },
        { pop: '16-19', task: 'Wood + Farms', resource: 'wood', icon: '🪓', detail: '2 wood, 2 farms' },
        { pop: '20', task: 'Click FEUDAL AGE!', resource: 'advance', icon: '⬆️', detail: 'Aggressive Feudal at 20 pop!' },
        { pop: 'Feudal', task: 'Stable + Scouts', resource: 'military', icon: '🐴', detail: 'Stable → 3-4 Scouts → pressure the opponent' },
        { pop: 'Castle', task: 'Mangudai!', resource: 'military', icon: '🏹', detail: 'Castle → Mangudai. Hit-and-run against everything.' },
      ]
    }
  },
  {
    id: 'chinese',
    name: 'Chinese',
    flag: '🇨🇳',
    specialty: 'All-rounder',
    difficulty: 'Hard',
    uniqueUnit: 'Chu Ko Nu',
    bonus: ['Start with +3 villagers but -200 Food', 'Technologies cost -10%/-15%/-20% (Feudal/Castle/Imp)', 'Town Centers +5 LOS', 'Demolition Ships +50% HP'],
    gradient: 'from-red-700 to-yellow-600',
    strategy: 'Difficult start due to -200 Food. But 6 villagers at the beginning = faster economy.',
    buildOrder: {
      name: 'Chinese Start (6 Villager Opening)',
      popTarget: '22 Pop → Feudal',
      steps: [
        { pop: '1-4', task: 'IMMEDIATELY 2 on sheep!', resource: 'food', icon: '🐑', detail: '4 on sheep, 2 build houses — NO food for villagers!' },
        { pop: '5-6', task: 'Sheep + Houses', resource: 'food', icon: '🏠', detail: '2 build house, then to sheep. IMPORTANT: Do NOT research Loom!' },
        { pop: '7-8', task: 'Continue sheep', resource: 'food', icon: '🐑', detail: 'Once 50 food: produce villagers. Never stop!' },
        { pop: '9-11', task: 'Chop wood', resource: 'wood', icon: '🪓', detail: '3 on wood. Economy normalizes now.' },
        { pop: '12', task: 'Lure boar', resource: 'food', icon: '🐗', detail: 'Get boar. From here on like a normal build order.' },
        { pop: '13-14', task: 'Berries', resource: 'food', icon: '🫐', detail: '2 on berries + Mill' },
        { pop: '15', task: '2nd boar', resource: 'food', icon: '🐗', detail: 'Second boar' },
        { pop: '16-21', task: 'Wood + Farms', resource: 'wood', icon: '🪓', detail: '3 wood, 3 farms' },
        { pop: '22', task: 'Click FEUDAL AGE!', resource: 'advance', icon: '⬆️', detail: 'Flexible: Archers OR Scouts depending on opponent' },
        { pop: 'Feudal', task: 'Flexible build', resource: 'military', icon: '⚔️', detail: 'Chu Ko Nu in Castle Age = massive firepower boost' },
      ]
    }
  },
  {
    id: 'japanese',
    name: 'Japanese',
    flag: '🇯🇵',
    specialty: 'Infantry',
    difficulty: 'Easy',
    uniqueUnit: 'Samurai',
    bonus: ['Infantry attack 33% faster (from Feudal)', 'Fishermen work 5/10/15/20% faster', 'Mills/Lumber Camps/Mining Camps cost -50%', 'Galleys fire faster'],
    gradient: 'from-rose-600 to-pink-700',
    strategy: 'Men-at-Arms Rush → Archers. Cheap eco buildings make the start easy.',
    buildOrder: {
      name: 'Men-at-Arms Rush',
      popTarget: '22 Pop → Feudal',
      steps: [
        { pop: '1-6', task: 'Gather sheep', resource: 'food', icon: '🐑', detail: '6 on sheep. -50% eco building cost = strong economy!' },
        { pop: '7-9', task: 'Chop wood', resource: 'wood', icon: '🪓', detail: '3 to forest — Lumber Camp costs only 50 wood!' },
        { pop: '10', task: 'Lure boar', resource: 'food', icon: '🐗', detail: 'Get boar' },
        { pop: '11-12', task: 'Berries', resource: 'food', icon: '🫐', detail: '2 on berries, Mill costs only 50 wood!' },
        { pop: '13', task: '2nd boar', resource: 'food', icon: '🐗', detail: 'Second boar to TC' },
        { pop: '14-16', task: 'Farms + Wood', resource: 'food', icon: '🌾', detail: '2 farms, 1 extra wood' },
        { pop: '17-19', task: 'Prepare gold', resource: 'gold', icon: '⛏️', detail: '3 on gold for Men-at-Arms upgrade' },
        { pop: '20-21', task: 'Barracks + Militia', resource: 'military', icon: '⚔️', detail: 'Build Barracks, train 3 Militia' },
        { pop: '22', task: 'Click FEUDAL AGE!', resource: 'advance', icon: '⬆️', detail: 'Feudal → immediately upgrade Men-at-Arms → Rush!' },
        { pop: 'Feudal', task: 'MAA → Archers', resource: 'military', icon: '🏹', detail: 'Push with Men-at-Arms, follow up with Archery Range → Archers' },
      ]
    }
  },
  {
    id: 'vikings',
    name: 'Vikings',
    flag: '🇳🇴',
    specialty: 'Infantry & Navy',
    difficulty: 'Medium',
    uniqueUnit: 'Berserk',
    bonus: ['Infantry +20% HP (from Feudal)', 'Warships cost -15/15/20%', 'Docks cost -15%', 'Wheelbarrow/Hand Cart free'],
    gradient: 'from-sky-600 to-blue-800',
    strategy: 'Fast Feudal thanks to free Wheelbarrow. Strong eco → Archers/Infantry.',
    buildOrder: {
      name: 'Viking Eco Boom',
      popTarget: '22 Pop → Feudal',
      steps: [
        { pop: '1-6', task: 'Gather sheep', resource: 'food', icon: '🐑', detail: '6 on sheep' },
        { pop: '7-10', task: 'Chop wood', resource: 'wood', icon: '🪓', detail: '4 on wood' },
        { pop: '11', task: 'Lure boar', resource: 'food', icon: '🐗', detail: 'Get boar' },
        { pop: '12-13', task: 'Berries', resource: 'food', icon: '🫐', detail: '2 on berries' },
        { pop: '14', task: '2nd boar', resource: 'food', icon: '🐗', detail: 'Second boar' },
        { pop: '15-17', task: 'Farms', resource: 'food', icon: '🌾', detail: 'Build 3 farms' },
        { pop: '18-21', task: 'Wood', resource: 'wood', icon: '🪓', detail: '4 on wood' },
        { pop: '22', task: 'Click FEUDAL AGE!', resource: 'advance', icon: '⬆️', detail: 'Free Wheelbarrow = instant eco boost!' },
        { pop: 'Feudal', task: 'Free Wheelbarrow!', resource: 'food', icon: '🎁', detail: 'Wheelbarrow is auto-researched — saves 175F 50W!' },
        { pop: 'Feudal+', task: 'Archers/Infantry', resource: 'military', icon: '⚔️', detail: 'Use eco advantage: mass Archers or MAA' },
      ]
    }
  },
  {
    id: 'aztecs',
    name: 'Aztecs',
    flag: '🇲🇽',
    specialty: 'Monks & Infantry',
    difficulty: 'Medium',
    uniqueUnit: 'Jaguar Warrior',
    bonus: ['Villagers carry +3 resources', 'All military units created 11% faster', 'Monks +5 HP per technology', '+50 Gold at start'],
    gradient: 'from-amber-600 to-orange-700',
    strategy: 'Eagle Warriors + Monks. Carry bonus makes the economy incredibly strong.',
    buildOrder: {
      name: 'Drush → Fast Castle',
      popTarget: '21 Pop → Feudal',
      steps: [
        { pop: '1-6', task: 'Gather sheep', resource: 'food', icon: '🐑', detail: '6 on sheep. +3 carry bonus = less walking!' },
        { pop: '7-9', task: 'Chop wood', resource: 'wood', icon: '🪓', detail: '3 on wood' },
        { pop: '10', task: 'Lure boar', resource: 'food', icon: '🐗', detail: 'Get boar. Carry bonus = more food per trip!' },
        { pop: '11-12', task: 'Berries', resource: 'food', icon: '🫐', detail: '2 on berries' },
        { pop: '13', task: '2nd boar', resource: 'food', icon: '🐗', detail: 'Second boar' },
        { pop: '14-16', task: 'Barracks + Militia', resource: 'military', icon: '⚔️', detail: 'Barracks with +50 starting gold → 3 Militia for Drush!' },
        { pop: '17-18', task: 'Farms', resource: 'food', icon: '🌾', detail: 'Build 2 farms' },
        { pop: '19-20', task: 'Wood', resource: 'wood', icon: '🪓', detail: '2 on wood' },
        { pop: '21', task: 'Click FEUDAL AGE!', resource: 'advance', icon: '⬆️', detail: 'Militia attacks opponent while you advance to Feudal!' },
        { pop: 'Castle', task: 'Eagles + Monks', resource: 'military', icon: '🦅', detail: 'Eagle Warriors + Monks = deadly combo!' },
      ]
    }
  },
  {
    id: 'huns',
    name: 'Huns',
    flag: '🏳️',
    specialty: 'Cavalry',
    difficulty: 'Easy',
    uniqueUnit: 'Tarkan',
    bonus: ['No houses needed!', 'Cavalry Archers cost -10/20%', 'Trebuchets +35% accuracy', 'Start with -100 wood'],
    gradient: 'from-yellow-600 to-amber-700',
    strategy: 'No house building needed = fastest start! Scouts → Knight Rush.',
    buildOrder: {
      name: 'No-House Scout Rush',
      popTarget: '20 Pop → Feudal (extremely fast)',
      steps: [
        { pop: '1-6', task: 'Gather sheep', resource: 'food', icon: '🐑', detail: '6 on sheep — NO houses needed! Instant economy!' },
        { pop: '7-9', task: 'Chop wood', resource: 'wood', icon: '🪓', detail: '3 on wood (start with -100 wood)' },
        { pop: '10', task: 'Lure boar', resource: 'food', icon: '🐗', detail: 'Get boar' },
        { pop: '11-12', task: 'Berries', resource: 'food', icon: '🫐', detail: '2 on berries' },
        { pop: '13', task: '2nd boar', resource: 'food', icon: '🐗', detail: 'Second boar' },
        { pop: '14-17', task: 'Farms', resource: 'food', icon: '🌾', detail: '4 farms — all into food for fast Feudal!' },
        { pop: '18-19', task: 'Wood', resource: 'wood', icon: '🪓', detail: '2 on wood' },
        { pop: '20', task: 'Click FEUDAL AGE!', resource: 'advance', icon: '⬆️', detail: 'Fastest Feudal because 0 house idle time!' },
        { pop: 'Feudal', task: 'Scout Rush', resource: 'military', icon: '🐴', detail: 'Stable → Scouts. Opponent is still building houses!' },
        { pop: 'Castle', task: 'Knights + CA', resource: 'military', icon: '🏇', detail: 'Knights or cheap Cavalry Archers' },
      ]
    }
  },
  {
    id: 'mayans',
    name: 'Mayans',
    flag: '🇬🇹',
    specialty: 'Archer',
    difficulty: 'Medium',
    uniqueUnit: 'Plumed Archer',
    bonus: ['Start with +1 villager, -50 Food', 'Archers cost -10/20/30% (Feudal/Castle/Imp)', 'Resources last 15% longer', 'Eagle Warriors +5 LOS'],
    gradient: 'from-green-600 to-emerald-700',
    strategy: 'Cheapest archers in the game. Mass + Plumed Archers in Castle Age.',
    buildOrder: {
      name: 'Mayan Archer Rush',
      popTarget: '22 Pop → Feudal',
      steps: [
        { pop: '1-5', task: 'Gather sheep', resource: 'food', icon: '🐑', detail: '5 on sheep (start with 4+1 villagers!)' },
        { pop: '6-9', task: 'Chop wood', resource: 'wood', icon: '🪓', detail: '4 on wood' },
        { pop: '10', task: 'Lure boar', resource: 'food', icon: '🐗', detail: 'Get boar' },
        { pop: '11-12', task: 'Berries', resource: 'food', icon: '🫐', detail: '2 on berries (resources last 15% longer!)' },
        { pop: '13', task: '2nd boar', resource: 'food', icon: '🐗', detail: 'Second boar' },
        { pop: '14-16', task: 'Farms', resource: 'food', icon: '🌾', detail: '3 farms' },
        { pop: '17-18', task: 'Gold', resource: 'gold', icon: '⛏️', detail: '2 on gold for cheap archers!' },
        { pop: '19-21', task: 'Wood', resource: 'wood', icon: '🪓', detail: '3 on wood' },
        { pop: '22', task: 'Click FEUDAL AGE!', resource: 'advance', icon: '⬆️', detail: 'Feudal → mass cheap archers!' },
        { pop: 'Feudal', task: 'Cheap Archers!', resource: 'military', icon: '🏹', detail: '2 Archery Ranges → Archers are 10% cheaper → non-stop production!' },
      ]
    }
  },
  {
    id: 'teutons',
    name: 'Teutons',
    flag: '🇩🇪',
    specialty: 'Infantry & Siege',
    difficulty: 'Easy',
    uniqueUnit: 'Teutonic Knight',
    bonus: ['Towers double garrison capacity', 'Monks +2 healing range', 'Farms cost -40%', 'Town Centers +2 range/+5 garrison', 'Barracks/Stable units +1/+2 melee armor (Castle/Imp)'],
    gradient: 'from-gray-600 to-zinc-800',
    strategy: 'Cheap farms = strong economy. Heavy infantry + siege crushes everything.',
    buildOrder: {
      name: 'Teuton Eco → Knights',
      popTarget: '22 Pop → Feudal',
      steps: [
        { pop: '1-6', task: 'Gather sheep', resource: 'food', icon: '🐑', detail: '6 on sheep' },
        { pop: '7-10', task: 'Chop wood', resource: 'wood', icon: '🪓', detail: '4 on wood' },
        { pop: '11', task: 'Lure boar', resource: 'food', icon: '🐗', detail: 'Get boar' },
        { pop: '12-13', task: 'Berries', resource: 'food', icon: '🫐', detail: '2 on berries' },
        { pop: '14', task: '2nd boar', resource: 'food', icon: '🐗', detail: 'Second boar' },
        { pop: '15-18', task: 'Cheap Farms!', resource: 'food', icon: '🌾', detail: '4 farms — cost only 36 wood instead of 60! Huge advantage!' },
        { pop: '19-21', task: 'Wood + Gold', resource: 'wood', icon: '🪓', detail: '2 wood, 1 gold' },
        { pop: '22', task: 'Click FEUDAL AGE!', resource: 'advance', icon: '⬆️', detail: 'Strong eco → Fast Castle possible' },
        { pop: 'Feudal', task: 'Stable + Scouts', resource: 'military', icon: '🐴', detail: 'Scouts for pressure or go straight to Castle' },
        { pop: 'Castle', task: 'Knights (+Armor!)', resource: 'military', icon: '⚔️', detail: 'Knights with +1 melee armor. Teutonic Knights from the Castle!' },
      ]
    }
  },
  {
    id: 'byzantines',
    name: 'Byzantines',
    flag: '🏛️',
    specialty: 'Defensive All-rounder',
    difficulty: 'Easy',
    uniqueUnit: 'Cataphract',
    bonus: ['Buildings +10/20/30/40% HP (Dark/Feudal/Castle/Imp)', 'Counter units cost -25%', 'Camels, Spearmen, Skirmishers cheaper', 'Town Watch free', 'Fire Ships +20% attack'],
    gradient: 'from-purple-600 to-violet-800',
    strategy: 'Most flexible civilization. Adapt to your opponent. Cheap counter units.',
    buildOrder: {
      name: 'Flexible Opening',
      popTarget: '22 Pop → Feudal',
      steps: [
        { pop: '1-6', task: 'Gather sheep', resource: 'food', icon: '🐑', detail: '6 on sheep. Free Town Watch = early vision!' },
        { pop: '7-10', task: 'Chop wood', resource: 'wood', icon: '🪓', detail: '4 on wood' },
        { pop: '11', task: 'Lure boar', resource: 'food', icon: '🐗', detail: 'Get boar' },
        { pop: '12-13', task: 'Berries', resource: 'food', icon: '🫐', detail: '2 on berries' },
        { pop: '14', task: '2nd boar', resource: 'food', icon: '🐗', detail: 'Second boar' },
        { pop: '15-17', task: 'Farms', resource: 'food', icon: '🌾', detail: '3 farms' },
        { pop: '18-21', task: 'Wood', resource: 'wood', icon: '🪓', detail: '4 on wood' },
        { pop: '22', task: 'Click FEUDAL AGE!', resource: 'advance', icon: '⬆️', detail: 'Scout opponent: Archers? → cheap Skirms! Knights? → cheap Spears!' },
        { pop: 'Feudal', task: 'Scout → Counter!', resource: 'military', icon: '🔍', detail: 'See what opponent is doing and counter with 25% cheaper units!' },
        { pop: 'Castle', task: 'Cataphracts!', resource: 'military', icon: '🏇', detail: 'Cataphracts from the Castle — dominate against infantry!' },
      ]
    }
  },
  {
    id: 'ethiopians',
    name: 'Ethiopians',
    flag: '🇪🇹',
    specialty: 'Archer & Siege',
    difficulty: 'Medium',
    uniqueUnit: 'Shotel Warrior',
    bonus: ['Archers fire 18% faster', '+100 Food/Gold on age up', 'Pikemen upgrade free'],
    gradient: 'from-green-700 to-yellow-600',
    strategy: 'Bonus resources on age up = smooth transitions. Archer powerhouse.',
    buildOrder: {
      name: 'Archer Rush with Age-Up Bonus',
      popTarget: '22 Pop → Feudal',
      steps: [
        { pop: '1-6', task: 'Gather sheep', resource: 'food', icon: '🐑', detail: '6 on sheep' },
        { pop: '7-10', task: 'Chop wood', resource: 'wood', icon: '🪓', detail: '4 on wood' },
        { pop: '11', task: 'Lure boar', resource: 'food', icon: '🐗', detail: 'Get boar' },
        { pop: '12-13', task: 'Berries', resource: 'food', icon: '🫐', detail: '2 on berries' },
        { pop: '14', task: '2nd boar', resource: 'food', icon: '🐗', detail: 'Second boar' },
        { pop: '15-17', task: 'Farms', resource: 'food', icon: '🌾', detail: '3 farms' },
        { pop: '18-19', task: 'Gold', resource: 'gold', icon: '⛏️', detail: '2 on gold' },
        { pop: '20-21', task: 'Wood', resource: 'wood', icon: '🪓', detail: '2 on wood' },
        { pop: '22', task: 'Click FEUDAL AGE!', resource: 'advance', icon: '⬆️', detail: '+100 Food +100 Gold on reaching Feudal!' },
        { pop: 'Feudal', task: 'Fast Archers!', resource: 'military', icon: '🏹', detail: 'Bonus resources → immediately 2 Ranges + Archers. 18% faster firing!' },
      ]
    }
  },
];

const RESOURCE_COLORS = {
  food: 'bg-red-500/20 border-red-500/30 text-red-400',
  wood: 'bg-green-500/20 border-green-500/30 text-green-400',
  gold: 'bg-yellow-500/20 border-yellow-500/30 text-yellow-400',
  military: 'bg-purple-500/20 border-purple-500/30 text-purple-400',
  advance: 'bg-cyan-500/20 border-cyan-500/30 text-cyan-400',
};

const RESOURCE_BG = {
  food: 'from-red-500/5 to-transparent',
  wood: 'from-green-500/5 to-transparent',
  gold: 'from-yellow-500/5 to-transparent',
  military: 'from-purple-500/5 to-transparent',
  advance: 'from-cyan-500/5 to-transparent',
};

const DIFFICULTY_CONFIG = {
  Easy: { color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/30' },
  Medium: { color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30' },
  Hard: { color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/30' },
};

// ─── Build Order Step Component ─────────────────────────────────────────────────
function BuildStep({ step, index, isLast }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className="flex gap-3"
    >
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <div className={`w-10 h-10 rounded-full ${RESOURCE_COLORS[step.resource]} border flex items-center justify-center text-lg shrink-0`}>
          {step.icon}
        </div>
        {!isLast && <div className="w-0.5 h-full bg-gray-700/50 min-h-[24px]" />}
      </div>

      {/* Content */}
      <div className={`flex-1 pb-4 bg-gradient-to-r ${RESOURCE_BG[step.resource]} rounded-lg px-3 py-2 mb-1`}>
        <div className="flex items-center gap-2 mb-0.5">
          <span className="text-xs font-mono font-bold text-gray-300 bg-gray-800 px-1.5 py-0.5 rounded">{step.pop}</span>
          <span className="font-semibold text-sm text-white">{step.task}</span>
        </div>
        <p className="text-xs text-gray-400 leading-relaxed">{step.detail}</p>
      </div>
    </motion.div>
  );
}

// ─── Civilization Card Component ────────────────────────────────────────────────
function CivCard({ civ }) {
  const [expanded, setExpanded] = useState(false);
  const diffConfig = DIFFICULTY_CONFIG[civ.difficulty];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-900/80 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-all"
    >
      {/* Header */}
      <div
        className="p-4 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-center gap-4">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${civ.gradient} flex items-center justify-center text-2xl shrink-0 shadow-lg`}>
            {civ.flag}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-bold text-white text-lg">{civ.name}</h3>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${diffConfig.bg} ${diffConfig.border} border ${diffConfig.color}`}>
                {civ.difficulty}
              </span>
            </div>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-xs text-gray-400">{civ.specialty}</span>
              <span className="text-xs text-gray-600">|</span>
              <span className="text-xs text-gray-500">{civ.uniqueUnit}</span>
            </div>
          </div>
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown size={20} className="text-gray-500" />
          </motion.div>
        </div>

        {/* Strategy Preview */}
        <p className="text-xs text-gray-400 mt-3 line-clamp-2">{civ.strategy}</p>
      </div>

      {/* Expanded Content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 border-t border-gray-800 pt-4">
              {/* Bonuses */}
              <div className="mb-4">
                <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Star size={12} className="text-yellow-500" />
                  Civilization Bonuses
                </h4>
                <div className="space-y-1">
                  {civ.bonus.map((b, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-gray-400">
                      <span className="text-yellow-500/60 mt-0.5">+</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Build Order */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Flame size={12} className="text-orange-500" />
                    Build Order: {civ.buildOrder.name}
                  </h4>
                  <span className="text-[10px] bg-gray-800 text-gray-400 px-2 py-0.5 rounded-full">
                    {civ.buildOrder.popTarget}
                  </span>
                </div>

                <div className="space-y-0">
                  {civ.buildOrder.steps.map((step, i) => (
                    <BuildStep
                      key={i}
                      step={step}
                      index={i}
                      isLast={i === civ.buildOrder.steps.length - 1}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────────
export default function AoeStrategy() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [showTips, setShowTips] = useState(false);

  const specialties = useMemo(() => {
    return ['All', ...new Set(CIVILIZATIONS.map(c => c.specialty))];
  }, []);

  const filteredCivs = useMemo(() => {
    return CIVILIZATIONS.filter(c => {
      const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.uniqueUnit.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDiff = selectedDifficulty === 'All' || c.difficulty === selectedDifficulty;
      const matchesSpec = selectedSpecialty === 'All' || c.specialty === selectedSpecialty;
      return matchesSearch && matchesDiff && matchesSpec;
    });
  }, [searchQuery, selectedDifficulty, selectedSpecialty]);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-950 border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => navigate('/tools')}
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <ArrowLeft size={20} className="text-gray-400" />
            </button>
            <div>
              <h1 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Age of Empires II — Strategy Guide
              </h1>
              <p className="text-sm text-gray-500 mt-1">Build Orders & Strategies for Every Civilization</p>
            </div>
            <button
              onClick={() => setShowTips(!showTips)}
              className="ml-auto p-2 hover:bg-gray-800 rounded-lg transition-colors"
            >
              <Info size={20} className="text-gray-400" />
            </button>
          </div>

          {/* Tips Panel */}
          <AnimatePresence>
            {showTips && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden mb-4"
              >
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 text-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-white">General Dark Age Tips</h3>
                    <button onClick={() => setShowTips(false)}><X size={16} className="text-gray-500" /></button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                      <h4 className="font-bold text-red-400 text-xs mb-1 flex items-center gap-1"><Wheat size={12} /> Food First</h4>
                      <p className="text-xs text-gray-400">Always gather sheep under the TC first. Never kill more than 2 sheep at the same time!</p>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                      <h4 className="font-bold text-green-400 text-xs mb-1 flex items-center gap-1"><TreePine size={12} /> Wood Early</h4>
                      <p className="text-xs text-gray-400">3-4 villagers on wood early. You need wood for Lumber Camp, Farms and military buildings.</p>
                    </div>
                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
                      <h4 className="font-bold text-yellow-400 text-xs mb-1 flex items-center gap-1"><Coins size={12} /> Gold Later</h4>
                      <p className="text-xs text-gray-400">Mine gold late (shortly before or after Feudal). Needed for Archers/MAA upgrade.</p>
                    </div>
                    <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3">
                      <h4 className="font-bold text-purple-400 text-xs mb-1 flex items-center gap-1"><Sword size={12} /> Scout!</h4>
                      <p className="text-xs text-gray-400">Use your Scout throughout the entire Dark Age! Find sheep, boars, deer, opponent and relics.</p>
                    </div>
                  </div>
                  <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-3">
                    <h4 className="font-bold text-cyan-400 text-xs mb-1 flex items-center gap-1"><Clock size={12} /> TC Idle Time = 0!</h4>
                    <p className="text-xs text-gray-400">
                      The most important principle: The Town Center must NEVER be idle! Constantly produce villagers. 
                      Every second of idle time = lost resources. Use hotkeys (H → Q) for quick production.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Search */}
          <div className="relative mb-4">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search civilization or unique unit..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 transition-colors"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4">
            {/* Difficulty */}
            <div className="flex gap-1.5">
              {['All', 'Easy', 'Medium', 'Hard'].map(d => (
                <button
                  key={d}
                  onClick={() => setSelectedDifficulty(d)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                    selectedDifficulty === d
                      ? d === 'All'
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                        : `${DIFFICULTY_CONFIG[d].bg} ${DIFFICULTY_CONFIG[d].color} border ${DIFFICULTY_CONFIG[d].border}`
                      : 'bg-gray-800/50 text-gray-400 border border-gray-700 hover:border-gray-600'
                  }`}
                >
                  {d}
                </button>
              ))}
            </div>

            {/* Specialty */}
            <div className="flex flex-wrap gap-1.5">
              {specialties.map(s => (
                <button
                  key={s}
                  onClick={() => setSelectedSpecialty(s)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                    selectedSpecialty === s
                      ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                      : 'bg-gray-800/50 text-gray-400 border border-gray-700 hover:border-gray-600'
                  }`}
                >
                  {s === 'All' ? 'All Types' : s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-3 text-center">
            <p className="text-2xl font-black text-amber-400">{CIVILIZATIONS.length}</p>
            <p className="text-xs text-gray-500">Civilizations</p>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-3 text-center">
            <p className="text-2xl font-black text-green-400">{filteredCivs.length}</p>
            <p className="text-xs text-gray-500">Displayed</p>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-3 text-center">
            <p className="text-2xl font-black text-purple-400">{CIVILIZATIONS.reduce((acc, c) => acc + c.buildOrder.steps.length, 0)}</p>
            <p className="text-xs text-gray-500">Build Steps</p>
          </div>
        </div>

        {/* Resource Legend */}
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="text-[10px] text-gray-500 self-center mr-1">Legend:</span>
          {[
            { key: 'food', label: 'Food', emoji: '🍖' },
            { key: 'wood', label: 'Wood', emoji: '🪵' },
            { key: 'gold', label: 'Gold', emoji: '🪙' },
            { key: 'military', label: 'Military', emoji: '⚔️' },
            { key: 'advance', label: 'Age Up', emoji: '⬆️' },
          ].map(r => (
            <span key={r.key} className={`text-[10px] px-2 py-1 rounded-full border ${RESOURCE_COLORS[r.key]}`}>
              {r.emoji} {r.label}
            </span>
          ))}
        </div>

        {/* Civilization Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {filteredCivs.map(civ => (
            <CivCard key={civ.id} civ={civ} />
          ))}
        </div>

        {filteredCivs.length === 0 && (
          <div className="text-center py-16">
            <Castle size={48} className="mx-auto mb-4 text-gray-700" />
            <h3 className="text-lg font-bold text-gray-500">No civilization found</h3>
            <p className="text-sm text-gray-600 mt-1">Try different filters or search terms</p>
          </div>
        )}

        {/* Quick Reference */}
        <div className="mt-12 bg-gray-900/50 border border-gray-800 rounded-xl p-6">
          <h3 className="font-bold text-gray-300 mb-4 flex items-center gap-2">
            <Crown size={16} className="text-amber-500" />
            Quick Reference: Which Civ for Which Playstyle?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-3">
              <h4 className="font-bold text-red-400 text-sm mb-2">Beginner</h4>
              <p className="text-xs text-gray-400">Franks, Britons, Huns, Teutons, Byzantines — simple bonuses, clear strategy</p>
            </div>
            <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-3">
              <h4 className="font-bold text-blue-400 text-sm mb-2">Archer Rush</h4>
              <p className="text-xs text-gray-400">Britons, Mayans, Ethiopians — cheap/strong archers</p>
            </div>
            <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-3">
              <h4 className="font-bold text-purple-400 text-sm mb-2">Knight Rush</h4>
              <p className="text-xs text-gray-400">Franks, Teutons — superior cavalry with bonus HP/armor</p>
            </div>
            <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-3">
              <h4 className="font-bold text-green-400 text-sm mb-2">Eco Boom</h4>
              <p className="text-xs text-gray-400">Vikings, Chinese, Aztecs — strong economy bonuses for Fast Castle</p>
            </div>
            <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-lg p-3">
              <h4 className="font-bold text-yellow-400 text-sm mb-2">Aggressive</h4>
              <p className="text-xs text-gray-400">Huns, Mongols, Japanese — early rushes with Scout/MAA/Drush</p>
            </div>
            <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-lg p-3">
              <h4 className="font-bold text-cyan-400 text-sm mb-2">Defensive</h4>
              <p className="text-xs text-gray-400">Byzantines, Teutons — strong buildings, cheap counter units</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
