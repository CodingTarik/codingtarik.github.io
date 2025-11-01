import React from 'react';
import Markdown from 'markdown-to-jsx';
import { 
  // Base Icons
  Footprints, Anchor, Zap, Feather, Shell, VenetianMask, 
  Shield, Users, ArrowDown, Grip, Palette, Waypoints, Map, GitBranch, Eye,
  // New Icons from expanded lesson
  BrainCircuit, HeartPulse, ShieldCheck, Leaf, PersonStanding, MoveUp, UserCheck,
  Scroll, Scale
} from 'lucide-react';

function LessonContent({ content }) {
  return (
    <div className="prose prose-stone dark:prose-invert max-w-none">
      <Markdown
        options={{
          overrides: {
            // Allow div and other html elements to be rendered
            div: { component: 'div' },
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
          },
        }}
      >
        {content}
      </Markdown>
    </div>
  );
}

export default LessonContent;

