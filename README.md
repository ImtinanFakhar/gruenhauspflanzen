# 🌿 Grüne Hauspflanzen - Next.js Blog

Ein moderner Zimmerpflanzen-Blog, gebaut mit Next.js 16 und Markdown.

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
Das bestehende Repository auf dem Branch `master` verwenden und Änderungen dorthin pushen.

### Schritt 2: Vercel verbinden
1. Gehe zu [vercel.com](https://vercel.com)
2. "New Project" → GitHub Repository auswählen
3. `master` als Produktionsbranch wählen; der Build-Befehl ist `npm run build`
4. "Deploy" klicken
5. Fertig! 🎉

### Schritt 3: Domain konfigurieren
1. In Vercel: Settings → Domains
2. `gruenhauspflanzen.de` hinzufügen
3. DNS bei deinem Domain-Provider anpassen

## Deployment auf Cloudflare Pages

Die Website kann als statische Next.js-Export-Version auf Cloudflare Pages laufen. Der normale `npm run build` bleibt für Vercel erhalten.

1. Das GitHub-Repository als Pages-Projekt importieren, das Preset `Next.js (Static HTML Export)` auswählen und `master` als Produktionsbranch wählen.
2. Build command: `npm run build:pages`
3. Build output directory: `out`
4. Node.js 22 verwenden (bei Bedarf `NODE_VERSION=22` in den Pages-Umgebungsvariablen setzen).

Lokal kann der Pages-Build mit `npm run build:pages` geprüft werden. Er erzeugt `out/` mit HTML, Assets, Sitemap, `robots.txt` und `_redirects`. Der alte Pfad `/zimmerpflanzen-wenig-licht/` wird auf Pages über `public/_redirects` dauerhaft umgeleitet; bei Vercel bleibt die Weiterleitung in `next.config.ts` aktiv. Der Kontakt läuft in beiden Umgebungen über Formspree. Vor einer DNS-Umstellung die Pages-Vorschau einschließlich Artikelbildern, Weiterleitung und Kontaktformular prüfen. Die kanonischen URLs bleiben auf `https://gruenhauspflanzen.de/`.

Der Build-Befehl korrigiert auf Windows außerdem die [bekannten Next.js-16-Pfade für statische Navigationsdaten](https://github.com/vercel/next.js/issues/85374); beim Cloudflare-Build unter Linux ist diese Korrektur nicht nötig.

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

Das Kontaktformular sendet direkt an Formspree und benötigt keine Vercel- oder Cloudflare-Serverfunktion.

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
