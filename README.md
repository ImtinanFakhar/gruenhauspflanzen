# 🌿 Grüne Hauspflanzen - Next.js Blog

Ein moderner Zimmerpflanzen-Blog, gebaut mit Next.js 14 und Markdown.

## 🚀 Schnellstart

```bash
# Development Server starten
npm run dev

# Produktions-Build erstellen
npm run build

# Produktions-Server starten
npm start
```

Website ist erreichbar unter: **http://localhost:3000**

---

## 📝 Neuen Blog-Post erstellen

### So einfach geht's:

1. **Markdown-Datei erstellen** im Ordner `content/posts/`:

```bash
content/posts/mein-neuer-post.md
```

2. **Frontmatter und Inhalt hinzufügen:**

```markdown
---
title: "Mein neuer Artikel"
slug: "mein-neuer-post"
date: "2025-12-13"
author: "Admin"
description: "Kurze Beschreibung für SEO und Vorschau"
image: "https://images.unsplash.com/photo-XXX?w=800&q=80"
category: "Zimmerpflanzen"
---

## Einleitung

Hier beginnt dein Artikel...

### Abschnitt 1

- Aufzählungspunkt 1
- Aufzählungspunkt 2

**Fetter Text** und *kursiver Text* funktionieren wie gewohnt.

> Zitat oder Tipp-Box

### Fazit

Zusammenfassung am Ende.
```

3. **Fertig!** Der Post erscheint automatisch auf der Website.

---

## 📁 Projektstruktur

```
gruenhauspflanzen.de/
├── content/
│   └── posts/           # 📝 Deine Blog-Posts (Markdown)
│       ├── post-1.md
│       ├── post-2.md
│       └── ...
├── src/
│   ├── app/             # Seiten
│   │   ├── page.tsx           # Startseite
│   │   ├── blog/page.tsx      # Blog-Übersicht
│   │   ├── uber-uns/page.tsx  # Über uns
│   │   ├── galerie/page.tsx   # Galerie
│   │   ├── kontakt/page.tsx   # Kontakt
│   │   └── [slug]/page.tsx    # Dynamische Blog-Posts
│   ├── components/      # UI-Komponenten
│   └── lib/             # Hilfsfunktionen
└── public/              # Statische Dateien
```

---

## 🖼️ Bilder verwenden

### Option 1: Unsplash (Empfohlen)
Kostenlose, lizenzfreie Bilder von [Unsplash](https://unsplash.com):

```markdown
image: "https://images.unsplash.com/photo-XXXXX?w=800&q=80"
```

### Option 2: Lokale Bilder
1. Bild in `public/images/` speichern
2. Im Frontmatter referenzieren:

```markdown
image: "/images/mein-bild.jpg"
```

---

## 🚀 Deployment auf Vercel

### Schritt 1: GitHub Repository
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/DEIN-USERNAME/gruenhauspflanzen.git
git push -u origin main
```

### Schritt 2: Vercel verbinden
1. Gehe zu [vercel.com](https://vercel.com)
2. "New Project" → GitHub Repository auswählen
3. "Deploy" klicken
4. Fertig! 🎉

### Schritt 3: Domain konfigurieren
1. In Vercel: Settings → Domains
2. `gruenhauspflanzen.de` hinzufügen
3. DNS bei deinem Domain-Provider anpassen

---

## 📊 SEO Features

- ✅ Automatische Sitemap (`/sitemap.xml`)
- ✅ Robots.txt (`/robots.txt`)
- ✅ Open Graph Meta-Tags
- ✅ Deutsche Sprache eingestellt
- ✅ SEO-optimierte URLs mit Trailing Slashes

---

## ⚡ Publishing Workflow

```
Alt (WordPress/Elementor):        Neu (Next.js/Markdown):
━━━━━━━━━━━━━━━━━━━━━━━━         ━━━━━━━━━━━━━━━━━━━━━━━━━
1. Login                          1. .md Datei erstellen
2. Elementor laden (~30s)         2. Text schreiben
3. Blöcke bearbeiten              3. git push
4. Preview (~30s)                 4. Auto-deploy (~30s)
5. Publish (~30s)                 
                                  
⏱️ ~1 Stunde                      ⏱️ ~5 Minuten
```

---

## 🛠️ Anpassungen

### Farben ändern
In `src/app/globals.css`:
```css
:root {
  --primary-600: #059669;  /* Hauptfarbe */
  --accent: #059669;       /* Akzentfarbe */
}
```

### Navigation ändern
In `src/components/layout/Header.tsx`:
```typescript
const navLinks = [
  { href: '/', label: 'Startseite' },
  // Weitere Links hinzufügen...
];
```

---

## 📧 Kontakt-Formular

Das Kontaktformular ist aktuell nur Frontend. Für echte Funktionalität:

1. **Formspree** (einfach): [formspree.io](https://formspree.io)
2. **Vercel Serverless Function** (fortgeschritten)
3. **EmailJS** (kostenlos): [emailjs.com](https://www.emailjs.com)

---

## ✅ Checkliste vor Go-Live

- [ ] Impressum mit echten Daten ausfüllen (`/impressum/`)
- [ ] Datenschutzerklärung prüfen (`/datenschutz/`)
- [ ] Newsletter-Integration konfigurieren
- [ ] Domain bei Vercel verbinden
- [ ] DNS umstellen
- [ ] In Google Search Console einreichen

---

## 📞 Support

Bei Fragen oder Problemen:
- GitHub Issues erstellen
- Dokumentation lesen: [Next.js Docs](https://nextjs.org/docs)

Viel Erfolg mit deinem Blog! 🌱
