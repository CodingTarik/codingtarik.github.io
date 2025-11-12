import React from 'react';
import Markdown from 'markdown-to-jsx';
import { 
  // Base Icons
  Footprints, Anchor, Zap, Feather, Shell, VenetianMask, 
  Shield, Users, ArrowDown, Grip, Palette, Waypoints, Map, GitBranch, Eye,
  // New Icons from expanded lesson
  BrainCircuit, HeartPulse, ShieldCheck, Leaf, PersonStanding, MoveUp, UserCheck,
  Scroll, Scale,
  // Icons for Halle vs. Outdoor
  History, Trees, Compass,
  // Icons for Community
  MessagesSquare, Trophy,
  // Icons from Safety Lesson
  Brush, Wind, HelpCircle, Baby, Flame, PackageX, LocateFixed,
  // Icons for Community Lesson Part 2
  Share2, Youtube, Instagram, Lightbulb
} from 'lucide-react';
import { InteractiveWelcome } from './InteractiveWelcome';
import YouTubeEmbed from './YouTubeEmbed';

// Grammar game components (dynamic import to avoid issues)
let GrammarGame = null;
try {
  GrammarGame = require('../../buddies/english/components/grammar-games/GrammarGame').default;
} catch (e) {
  console.warn('GrammarGame component not available');
}

function LessonContent({ content, components = {} }) {
  return (
    <div className="prose prose-stone dark:prose-invert max-w-none">
      <Markdown
        options={{
          forceBlock: true,
          disableParsingRawHTML: false,
          overrides: {
            // Allow div and other html elements to be rendered
            div: { 
              component: 'div'
            },
            iframe: { 
              component: (props) => {
                // Handle both camelCase and lowercase attributes
                const frameBorderValue = props.frameBorder || props.frameborder || 0;
                const allowFullScreen = props.allowFullScreen !== undefined ? props.allowFullScreen : (props.allowfullscreen !== undefined ? props.allowfullscreen : true);
                const className = props.className || props.class || '';
                return (
                  <iframe
                    src={props.src}
                    title={props.title}
                    frameBorder={frameBorderValue}
                    allow={props.allow}
                    allowFullScreen={allowFullScreen}
                    className={className}
                  />
                );
              }
            },
            h3: {
              component: 'h3',
              props: {
                className: 'text-xl font-bold text-stone-800 dark:text-stone-200 mt-6 mb-3',
              },
            },
            h4: {
              component: 'h4',
              props: {
                className: 'text-lg font-bold',
              },
            },
            h5: {
              component: 'h5',
              props: {
                className: 'font-bold',
              },
            },
            p: {
              component: 'p',
              props: {
                className: 'text-stone-700 dark:text-stone-300 mb-4 leading-relaxed',
              },
            },
            strong: {
              component: 'strong',
              props: {
                className: 'font-bold text-stone-900 dark:text-stone-100',
              },
            },
            a: {
              component: 'a',
              props: {
                className: 'text-teal-500 hover:underline',
                target: '_blank',
                rel: 'noopener noreferrer'
              }
            },
            ul: {
              component: 'ul',
              props: {
                className: 'list-disc pl-5 space-y-1 text-sm',
              },
            },
            li: { component: 'li' },
            // Override for Lucide Icons
            Footprints: { component: Footprints },
            Anchor: { component: Anchor },
            Zap: { component: Zap },
            Feather: { component: Feather },
            Shell: { component: Shell },
            VenetianMask: { component: VenetianMask },
            Shield: { component: Shield },
            Users: { component: Users },
            ArrowDown: { component: ArrowDown },
            Grip: { component: Grip },
            Palette: { component: Palette },
            Waypoints: { component: Waypoints },
            Map: { component: Map },
            GitBranch: { component: GitBranch },
            Eye: { component: Eye },
            BrainCircuit: { component: BrainCircuit },
            HeartPulse: { component: HeartPulse },
            ShieldCheck: { component: ShieldCheck },
            Leaf: { component: Leaf },
            PersonStanding: { component: PersonStanding },
            MoveUp: { component: MoveUp },
            UserCheck: { component: UserCheck },
            Scroll: { component: Scroll },
            Scale: { component: Scale },
            History: { component: History },
            Trees: { component: Trees },
            Compass: { component: Compass },
            MessagesSquare: { component: MessagesSquare },
            Trophy: { component: Trophy },
            Brush: { component: Brush },
            Wind: { component: Wind },
            HelpCircle: { component: HelpCircle },
            Baby: { component: Baby },
            Flame: { component: Flame },
            PackageX: { component: PackageX },
            LocateFixed: { component: LocateFixed },
            Share2: { component: Share2 },
            Youtube: { component: Youtube },
            Instagram: { component: Instagram },
            Lightbulb: { component: Lightbulb },
            // Interactive Components
            InteractiveWelcome: { component: InteractiveWelcome },
            YouTubeEmbed: { component: YouTubeEmbed },
            // Special handler for GamePlaceholder
            GamePlaceholder: {
              component: ({ id }) => {
                if (components[id]) {
                  return components[id];
                }
                return <div className="text-red-500 font-bold">Error: Game component with id "{id}" not found!</div>;
              },
            },
            ...(GrammarGame ? { GrammarGame: { component: GrammarGame } } : {}),
          },
        }}
      >
        {content}
      </Markdown>
    </div>
  );
}

export default LessonContent;

