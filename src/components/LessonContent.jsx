import React from 'react';
import Markdown from 'markdown-to-jsx';
import { 
  Footprints, Anchor, Zap, Feather, Shell, VenetianMask, 
  Shield, Users, ArrowDown, Grip, Palette, Waypoints 
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
          },
        }}
      >
        {content}
      </Markdown>
    </div>
  );
}

export default LessonContent;

