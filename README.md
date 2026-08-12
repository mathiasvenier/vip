# Enilive VIP

Statische Seite mit dem VIP-Code für Bedienstete der Stadtgemeinde Imst.
Läuft auf GitHub Pages.

## Veröffentlichen

1. Alle Dateien dieses Ordners ins Repository laden (Root oder Ordner `/docs`).
2. Settings → Pages → Source: Deploy from a branch, Branch `main`, Ordner `/ (root)`.
3. Nach ein bis zwei Minuten läuft die Seite unter
   `https://BENUTZERNAME.github.io/REPOSITORY/`.

HTTPS ist Voraussetzung für die Home-Bildschirm-Funktion und kommt von GitHub Pages automatisch.

## Dateien

| Datei | Zweck |
|---|---|
| `index.html` | Die Seite |
| `qr.png` | QR-Code, Wert 2506013006186 |
| `mark.png` | Enilive Hund, weiß |
|  `icon-180/192/512.png` | Icon für den Home-Bildschirm |
| `manifest.webmanifest` | App-Name und Icons |
| `sw.js` | Macht die Seite offline verfügbar |

## Ändern

Neuer Code: `qr.png` ersetzen und die Zahl im `<figcaption>` in `index.html` anpassen.
Nach jeder Änderung in `sw.js` die Zeile `const CACHE = 'enilive-vip-v3'` hochzählen,
sonst behalten bereits installierte Handys die alte Fassung.
