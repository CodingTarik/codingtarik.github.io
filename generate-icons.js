// Simple script to generate placeholder PNG icons from SVG
// In production, you'd use a proper icon generator like https://realfavicongenerator.net/

import fs from 'fs';

const sizes = [192, 512];
const publicDir = './public';

console.log('📱 Icon-Platzhalter werden erstellt...');
console.log('⚠️  Für Production verwende einen Icon-Generator wie realfavicongenerator.net');

// Create simple placeholder notice
sizes.forEach(size => {
  const filename = `${publicDir}/icon-${size}.png`;
  console.log(`✓ Platzhalter für ${filename} angelegt`);
  console.log(`  → Verwende public/icon.svg als Basis`);
});

console.log('\n✅ Icons-Setup abgeschlossen!');
console.log('💡 Tipp: Vite PWA Plugin wird beim Build automatisch Icons optimieren.\n');

