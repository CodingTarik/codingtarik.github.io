import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        viteSingleFile(),
        VitePWA({
            registerType: 'autoUpdate',
            injectRegister: 'inline',
            includeManifestIcons: false, // Disable auto-inclusion to prevent cache conflicts with globPatterns
            manifest: {
                name: 'LearnBuddy - Dein persoenlicher Lern-Begleiter',
                short_name: 'LearnBuddy',
                description: 'Interaktiver Lernbegleiter fuer Bouldern, Kochen, Englisch, Klavier und mehr. Inklusive Blog ueber Web Development und Cybersecurity.',
                theme_color: '#14b8a6',
                background_color: '#fafaf9',
                display: 'standalone',
                start_url: './index.html',
                id: './index.html', // Added ID as requested
                scope: './',
                categories: ['education', 'lifestyle', 'productivity'],
                icons: [
                    {
                        src: 'icon-192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: 'icon-512.png',
                        sizes: '512x512',
                        type: 'image/png'
                    }
                ],
                screenshots: [
                    {
                        src: 'icon-512.png', // Using icon as placeholder screenshot for now to satisfy validation
                        sizes: '512x512',
                        type: 'image/png',
                        form_factor: 'wide'
                    },
                    {
                        src: 'icon-512.png',
                        sizes: '512x512',
                        type: 'image/png'
                    }
                ]
            },
            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,png,svg,xml,txt,json}'],
                globIgnores: ['**/manifest.json', '**/sw.js', '**/workbox-*.js'], // Ignore the public manifest and SW files
                maximumFileSizeToCacheInBytes: 100 * 1024 * 1024, // 100MB just to be safe
                // Ensure index.html is the fallback and start url
                navigateFallback: 'index.html',
                // Important for offline localhost
                directoryIndex: 'index.html',
                // Force immediate activation
                skipWaiting: true,
                clientsClaim: true,
                // Force revision for index.html and filter out duplicate icons
                manifestTransforms: [async (entries) => {
                    const manifest = entries.filter(entry => {
                        // Filter out entries that are likely duplicates (revision: null) for icons we handle via globPatterns
                        if (!entry.revision && (entry.url.includes('icon-') || entry.url.includes('icon.svg'))) {
                            return false;
                        }
                        return true;
                    }).map(entry => {
                        if (entry.url === 'index.html') {
                            return { ...entry, revision: 'offline-' + Date.now() };
                        }
                        return entry;
                    });
                    return { manifest, warnings: [] };
                }]
            }
        })
    ],
    base: './', // Ensure relative paths for offline use
    define: {
        '__IS_OFFLINE__': true,
    },
    build: {
        assetsInlineLimit: 52428800, // 50MB to inline everything
        cssCodeSplit: false, // Do not split CSS
        assetsDir: '', // Put assets in root
        rollupOptions: {
            output: {
                manualChunks: undefined, // Disable manual chunks to ensure single file
            },
        },
    },
})
