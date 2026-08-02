// Simple screenshot capture using Chrome DevTools Protocol
import { exec } from 'child_process';
import fs from 'fs';

// Use AppleScript to capture the active Chrome window
const script = `
tell application "Google Chrome"
    activate
    set windowList to every window
    repeat with aWindow in windowList
        set tabList to every tab of aWindow
        repeat with aTab in tabList
            if URL of aTab contains "localhost:5173" then
                set index of aWindow to 1
                set active tab index of aWindow to (index of aTab)
                delay 1
                return "found"
            end if
        end repeat
    end repeat
end tell
`;

exec(`osascript -e '${script.replace(/'/g, "'\\''")}'`, (err) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    
    // Wait a bit then capture
    setTimeout(() => {
        exec('screencapture -x -w piano-studio-full.png', (err2) => {
            if (err2) console.error('Screenshot error:', err2);
            else console.log('Screenshot saved to piano-studio-full.png');
        });
    }, 1000);
});
