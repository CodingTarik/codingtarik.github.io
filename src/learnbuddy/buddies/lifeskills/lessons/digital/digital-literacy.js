export const digitalLiteracy = {
    id: 'digital-digital-literacy',
    title: {
        en: 'Digital Literacy: Stay Safe Online',
        de: 'Digitale Kompetenz: Sicher im Netz'
    },
    difficulty: 'beginner',
    duration: 40,
    description: {
        en: 'Master online safety, password management, privacy protection, and social media awareness.',
        de: 'Meistere Online-Sicherheit, Passwort-Management, Datenschutz und Social-Media-Bewusstsein.'
    },
    content: {
        en: `## Digital Literacy: Stay Safe Online

### Why Digital Literacy is Essential
You lock your doors at night. You should protect your digital life with the same care. In 2024, cybercrime costs exceeded $10 trillion globally. Most attacks target individuals, not corporations.

---

### Password Security

<div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg border-l-4 border-red-500 my-4">
  <p className="font-bold text-red-800 dark:text-red-200">The #1 Security Rule</p>
  <p className="text-red-700 dark:text-red-300 mt-1"><strong>Never reuse passwords.</strong> If one account is breached, all accounts with that password are compromised.</p>
</div>

**Creating strong passwords:**
- Use a **password manager** (Bitwarden, 1Password, KeePass) – this is non-negotiable
- Generate random passwords (20+ characters)
- For passwords you must remember: use **passphrases** ("correct-horse-battery-staple" > "P@ssw0rd!")
- Enable **2FA (Two-Factor Authentication)** on EVERY important account

**Most important accounts to secure first:**
1. Email (it's the key to all other accounts)
2. Bank/Financial accounts
3. Cloud storage (Google, iCloud, Dropbox)
4. Social media

---

### Recognizing Phishing & Scams

<div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-lg my-4">
  <p className="font-bold text-amber-800 dark:text-amber-200">Red Flags of Phishing</p>
  <ul className="mt-2 text-amber-700 dark:text-amber-300 space-y-1">
    <li><strong>Urgency:</strong> "Your account will be closed in 24 hours!"</li>
    <li><strong>Suspicious sender:</strong> support@amaz0n-security.com (note the zero)</li>
    <li><strong>Generic greeting:</strong> "Dear Customer" instead of your name</li>
    <li><strong>Suspicious links:</strong> Hover over links to see the real URL before clicking</li>
    <li><strong>Attachments from unknown senders:</strong> Never open .exe, .zip, or unexpected files</li>
    <li><strong>Too good to be true:</strong> "You've won $1,000,000!" No, you haven't.</li>
  </ul>
</div>

**When in doubt:** Go directly to the website (type it yourself), never click the link in the email.

---

### Privacy Protection

**Your digital footprint is permanent.** Everything you post, like, and share creates a profile that's nearly impossible to erase.

**Privacy checklist:**
- Review app permissions (does a flashlight app need your contacts?)
- Use private browsing for sensitive searches
- Disable location tracking when not needed
- Check privacy settings on all social media accounts
- Use a VPN on public Wi-Fi
- Cover your webcam when not in use
- Read privacy policies (at least the key sections)

---

### Social Media Awareness

<div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg my-4">
  <p className="font-bold text-blue-800 dark:text-blue-200">What You Should Know</p>
  <ul className="mt-2 text-blue-700 dark:text-blue-300 space-y-2">
    <li><strong>You are the product:</strong> Free platforms monetize your attention and data</li>
    <li><strong>Algorithms optimize for engagement:</strong> Outrage = more clicks = more ads</li>
    <li><strong>The comparison trap:</strong> You're comparing your behind-the-scenes to everyone's highlight reel</li>
    <li><strong>Digital wellbeing:</strong> Set screen time limits, disable notifications, schedule social media time</li>
    <li><strong>Think before posting:</strong> Would you be comfortable if your employer, parents, or future self saw this?</li>
  </ul>
</div>

### Essential Security Tools
1. **Password Manager:** Bitwarden (free), 1Password, KeePass
2. **2FA App:** Authy, Google Authenticator (avoid SMS 2FA when possible)
3. **VPN:** For public Wi-Fi and privacy (Mullvad, ProtonVPN)
4. **Ad Blocker:** uBlock Origin (browser extension)
5. **Email Alias:** SimpleLogin, Apple Hide My Email`,

        de: `## Digitale Kompetenz: Sicher im Netz

### Warum digitale Kompetenz unverzichtbar ist
Du schließt nachts die Tür ab. Dein digitales Leben verdient den gleichen Schutz. 2024 überstiegen die Kosten von Cyberkriminalität weltweit 10 Billionen Dollar. Die meisten Angriffe zielen auf Einzelpersonen, nicht auf Konzerne.

---

### Passwort-Sicherheit

<div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg border-l-4 border-red-500 my-4">
  <p className="font-bold text-red-800 dark:text-red-200">Die #1 Sicherheitsregel</p>
  <p className="text-red-700 dark:text-red-300 mt-1"><strong>Verwende Passwörter nie mehrfach.</strong> Wenn ein Konto gehackt wird, sind alle Konten mit dem gleichen Passwort kompromittiert.</p>
</div>

**Starke Passwörter erstellen:**
- Nutze einen **Passwort-Manager** (Bitwarden, 1Password, KeePass) – nicht verhandelbar
- Generiere zufällige Passwörter (20+ Zeichen)
- Für Passwörter, die du dir merken musst: **Passphrasen** verwenden ("richtig-pferd-batterie-klammer" > "P@sswort!")
- **2FA (Zwei-Faktor-Authentifizierung)** auf JEDEM wichtigen Konto aktivieren

**Wichtigste Konten zuerst sichern:**
1. E-Mail (ist der Schlüssel zu allen anderen Konten)
2. Bank-/Finanzkonten
3. Cloud-Speicher (Google, iCloud, Dropbox)
4. Soziale Medien

---

### Phishing & Betrug erkennen

<div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-lg my-4">
  <p className="font-bold text-amber-800 dark:text-amber-200">Warnsignale bei Phishing</p>
  <ul className="mt-2 text-amber-700 dark:text-amber-300 space-y-1">
    <li><strong>Dringlichkeit:</strong> "Ihr Konto wird in 24 Stunden gesperrt!"</li>
    <li><strong>Verdächtiger Absender:</strong> support@amaz0n-sicherheit.com (beachte die Null)</li>
    <li><strong>Allgemeine Anrede:</strong> "Sehr geehrter Kunde" statt deinem Namen</li>
    <li><strong>Verdächtige Links:</strong> Mit der Maus über Links fahren, um die echte URL zu sehen</li>
    <li><strong>Anhänge von Unbekannten:</strong> Nie .exe, .zip oder unerwartete Dateien öffnen</li>
    <li><strong>Zu schön um wahr zu sein:</strong> "Sie haben 1.000.000€ gewonnen!" Nein, hast du nicht.</li>
  </ul>
</div>

**Im Zweifel:** Geh direkt auf die Website (selbst eintippen), klicke nie den Link in der E-Mail.

---

### Datenschutz

**Dein digitaler Fußabdruck ist dauerhaft.** Alles, was du postest, likest und teilst, erzeugt ein Profil, das fast unmöglich zu löschen ist.

**Datenschutz-Checkliste:**
- App-Berechtigungen überprüfen (braucht eine Taschenlampen-App deine Kontakte?)
- Privates Surfen für sensible Suchen nutzen
- Standort-Tracking deaktivieren, wenn nicht nötig
- Datenschutzeinstellungen aller Social-Media-Konten prüfen
- VPN in öffentlichen WLANs nutzen
- Webcam abdecken, wenn nicht in Gebrauch
- Datenschutzrichtlinien lesen (zumindest die wichtigsten Abschnitte)

---

### Social-Media-Bewusstsein

<div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg my-4">
  <p className="font-bold text-blue-800 dark:text-blue-200">Was du wissen solltest</p>
  <ul className="mt-2 text-blue-700 dark:text-blue-300 space-y-2">
    <li><strong>Du bist das Produkt:</strong> Kostenlose Plattformen monetarisieren deine Aufmerksamkeit und Daten</li>
    <li><strong>Algorithmen optimieren für Engagement:</strong> Empörung = mehr Klicks = mehr Werbung</li>
    <li><strong>Die Vergleichsfalle:</strong> Du vergleichst dein Backstage mit den Highlights aller anderen</li>
    <li><strong>Digitales Wohlbefinden:</strong> Bildschirmzeit begrenzen, Benachrichtigungen deaktivieren, Social-Media-Zeit planen</li>
    <li><strong>Vor dem Posten nachdenken:</strong> Wärst du okay, wenn dein Arbeitgeber, deine Eltern oder dein zukünftiges Ich das sehen?</li>
  </ul>
</div>

### Unverzichtbare Sicherheits-Tools
1. **Passwort-Manager:** Bitwarden (kostenlos), 1Password, KeePass
2. **2FA-App:** Authy, Google Authenticator (SMS-2FA wenn möglich vermeiden)
3. **VPN:** Für öffentliches WLAN und Privatsphäre (Mullvad, ProtonVPN)
4. **Werbeblocker:** uBlock Origin (Browser-Erweiterung)
5. **E-Mail-Alias:** SimpleLogin, Apple "E-Mail verbergen"`
    },
    task: {
        en: {
            title: 'Secure Your Digital Life',
            description: 'Take immediate steps to improve your online security.',
            checklist: [
                { text: 'Install a password manager and migrate your top 5 accounts' },
                { text: 'Enable 2FA on your email and bank accounts' },
                { text: 'Review privacy settings on your main social media account' },
                { text: 'Check haveibeenpwned.com to see if your email was in a data breach' }
            ]
        },
        de: {
            title: 'Sichere dein digitales Leben',
            description: 'Ergreife sofortige Maßnahmen zur Verbesserung deiner Online-Sicherheit.',
            checklist: [
                { text: 'Installiere einen Passwort-Manager und migriere deine Top 5 Konten' },
                { text: 'Aktiviere 2FA auf deinem E-Mail- und Bankkonto' },
                { text: 'Überprüfe die Datenschutzeinstellungen deines Haupt-Social-Media-Kontos' },
                { text: 'Prüfe auf haveibeenpwned.com, ob deine E-Mail in einem Datenleck war' }
            ]
        }
    },
    exercises: [
        { id: 'security-audit', title: { en: 'Security Audit', de: 'Sicherheits-Audit' }, description: { en: 'List all your online accounts. For each: Do you use a unique password? Is 2FA enabled? Rate your security 1-5.', de: 'Liste alle deine Online-Konten auf. Für jedes: Einzigartiges Passwort? 2FA aktiv? Bewerte deine Sicherheit 1-5.' } }
    ],
    notes: {
        en: [
            { front: 'Password Rule', back: 'Never reuse passwords. Use a password manager. Enable 2FA everywhere.' },
            { front: 'Phishing Test', back: 'Check sender address, hover over links, look for urgency/threats, generic greetings.' },
            { front: 'Privacy Basics', back: 'Review app permissions, use VPN on public Wi-Fi, cover webcam, think before posting.' }
        ],
        de: [
            { front: 'Passwort-Regel', back: 'Nie Passwörter wiederverwenden. Passwort-Manager nutzen. 2FA überall aktivieren.' },
            { front: 'Phishing-Test', back: 'Absenderadresse prüfen, über Links fahren, auf Dringlichkeit/Drohungen achten, generische Anreden.' },
            { front: 'Datenschutz-Basics', back: 'App-Berechtigungen prüfen, VPN im öffentlichen WLAN, Webcam abdecken, vor dem Posten nachdenken.' }
        ]
    }
};
