export default {
  id: 'modern-developer-handbook',
  title: 'Das Handbuch des modernen Software-Architekten',
  description: 'Ein fertiges Buch im Paged.js Format über Clean Code, System Design, Microservices und moderne Cloud-Architektur. Direkt als PDF exportierbar!',
  type: 'book',
  category: 'Software Architecture',
  level: 'Fortgeschritten',
  duration: 'Buch (140 Seiten)',
  author: 'Tarik Azzouzi',
  coverImage: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=1200&q=80',
  featured: true,
  tags: ['Architecture', 'Clean Code', 'PDF Book', 'Paged.js', 'System Design'],
  pagedOptions: {
    pageSize: 'A4',
    margin: '20mm',
    headerTitle: 'Das Handbuch des modernen Software-Architekten',
    author: 'Tarik Azzouzi'
  },
  chapters: [
    {
      id: 'preface',
      title: 'Vorwort & Einleitung',
      chapterNumber: 1,
      content: `
# Vorwort: Die Welt moderner Software-Systeme

Willkommen zum **Handbuch des modernen Software-Architekten**! Dieses Buch unterscheidet sich von klassischen Tutorials: Es ist direkt im **Paged.js**-Standard formatiert. 

Du kannst dieses Buch online lesen oder mit dem **PDF Exportieren**-Button in der oberen Leiste als formatiertes Dokument oder Buch inklusive Seitenzahlen speichern.

---

## Über den Autor

Tarik Azzouzi ist Fullstack-Entwickler, Security-Enthusiast und Architekt moderner Webanwendungen.

> [!NOTE]
> Dieses Buch nutzt Paged.js für automatisches Seitendesign (A4, laufende Kopfzeilen, Fußzeilen und automatische Inhaltsverzeichnisse).
`
    },
    {
      id: 'clean-code-principles',
      title: 'Kapitel 1: Clean Code & Refactoring Muster',
      chapterNumber: 2,
      content: `
# Kapitel 1: Clean Code & Refactoring Muster

Guter Code liest sich wie eine gut geschriebene Prosa. In diesem Kapitel betrachten wir die Kernprinzipien für wartbaren Code.

---

## 1. SOLID Prinzipien auf den Punkt gebracht

1. **Single Responsibility Principle (SRP)**: Eine Klasse sollte genau einen Grund zur Änderung haben.
2. **Open/Closed Principle (OCP)**: Offen für Erweiterung, geschlossen für Veränderung.
3. **Liskov Substitution Principle (LSP)**: Subtypen müssen sich wie ihre Basistypen verhalten.
4. **Interface Segregation Principle (ISP)**: Schlanke, spezifische Schnittstellen statt monolithischer Interfaces.
5. **Dependency Inversion Principle (DIP)**: Abstraktionen dürfen nicht von Details abhängen; Details von Abstraktionen.

---

## 2. Refactoring in der Praxis

\`\`\`typescript
// Vorher: Unleserlicher Monolith
function p(d: any) {
  if (d.s == 1 && d.u != null) {
    return d.u.a + ' ' + d.u.b;
  }
  return '';
}

// Nachher: Deklarativ und typisiert
interface User {
  firstName: string;
  lastName: string;
}

interface OrderData {
  status: 'ACTIVE' | 'PENDING' | 'CANCELLED';
  user?: User;
}

export function formatCustomerFullName(order: OrderData): string {
  if (order.status !== 'ACTIVE' || !order.user) {
    return '';
  }
  return \`\${order.user.firstName} \${order.user.lastName}\`;
}
\`\`\`
`
    },
    {
      id: 'system-design-microservices',
      title: 'Kapitel 2: System Design & Microservices',
      chapterNumber: 3,
      content: `
# Kapitel 2: System Design & Microservices

Wenn Systeme wachsen, stoßen monolithische Architekturen oft an ihre organisatorischen und technischen Grenzen.

---

## 1. Monolith vs. Microservices

> [!INFO]
> Starte fast immer mit einem **modularen Monolithen**, bevor du Domain-Grenzen in eigenständige Microservices schneidest. Zu frühe Verteilung erzeugt unnötige Netzwerklatenzen und verteiltes Tracing-Overhead.

---

## 2. Event-Driven Architecture (EDA)

Mit Message Brokern wie Apache Kafka oder RabbitMQ entkoppeln wir Producer und Consumer zuverlässig:

- **Asynchroner Datenaustausch**: Services müssen nicht blockierend aufeinander warten.
- **Eventual Consistency**: Daten werden über Domänengrenzen hinweg konsistent synchronisiert.
`
    },
    {
      id: 'epilogue-pdf-guide',
      title: 'Kapitel 3: Zusammenfassung & PDF Print Guide',
      chapterNumber: 4,
      content: `
# Kapitel 3: Zusammenfassung & Druckanleitung

Du hast das Handbuch erfolgreich durchgearbeitet!

---

## PDF Exportieren & Drucken

Um dieses Buch als vollständiges PDF-Dokument auf deinem Rechner zu speichern:

1. Klicke oben rechts auf den Button **PDF Exportieren**.
2. Es öffnet sich der Druckdialog deines Browsers.
3. Wähle als Ziel **Als PDF speichern** (Save as PDF).
4. Aktiviere in den Einstellungen **Hintergrundgrafiken drucken** (Background graphics).
5. Speichere deine fertige Buch-PDF!
`
    }
  ]
};
