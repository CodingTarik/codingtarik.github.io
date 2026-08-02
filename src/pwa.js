import { registerSW } from 'virtual:pwa-register';

// Register the PWA Service Worker
const updateSW = registerSW({
    onNeedRefresh() {
        if (confirm('New content available. Reload?')) {
            updateSW(true);
        }
    },
    onOfflineReady() {
        console.log('App is ready for offline usage.');
    },
});
