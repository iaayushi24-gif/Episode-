# TODAY IN EPISODE
### Art-House Streaming Curation × High-Fashion Print Editorial
*Inspired by EPISODE™️ & Creative Director Sarah Bassett ([@todayinepisode](https://www.instagram.com/todayinepisode))*

**Today in Episode** is an editorial, indie-cinema-inspired digital streaming concept and archival publication. The project marries the intimate, slow-cinema curation of platforms like MUBI, Criterion Channel, and Le Cinéma Club with the tactile typographic discipline of high-fashion print quarterlies (*Apartamento*, *Cahiers du Cinéma*, *Aperture*, *Self Service*), infused directly with the design ethos of **EPISODE™️** (*"Statement utility. Curating styles that reflect your unique story."*).

---

## 🎞 Brand Identity & Instagram Inspiration ([@todayinepisode](https://www.instagram.com/todayinepisode))

* **Creative Direction**: **Sarah Bassett** (Creative Director based between New York & Paris).
* **Core Philosophy**: *"At Episode, transparency is key. You don't just wear the story—you own the entire process. Here, we play dress-up with purpose, curating styles that reflect your unique story."*
* **Location & Vibe Tracker**: `[PARIS / NEW YORK] · LISTENING TO SUNSHINE · STATEMENT UTILITY`.
* **Signature Episode Collections**:
  * Drop 04: *Studio Session: Statement Utility* (Premier Hero Video)
  * Drop 03: *Lonely Toons* & *Raid/Void*
  * Drop 02: *Kidult & Haute Couture*
  * Drop 01: *Join The Scene // Episode World*
* **Direct Instagram Integration**: Header badge and footer links directly connected to `https://www.instagram.com/todayinepisode`.

---

## 📹 Hero Cinematic Video Feature ("Now Screening")

The Hero section features an actual **HTML5 Cinema Video Player** embedded seamlessly into the 16:9 aspect-ratio letterboxed container:

* **Real Video Stream**: Plays high-resolution cinema footage out of the box with custom aspect ratio matting (`2.39:1 Cinemascope`, `1.85:1 Academy Flat`, `4:3 Classical Academy`, and `16:9 Standard Wide`).
* **Procedural Film Grain & Light Leak Overlay**: An ambient canvas layer overlays subtle 35mm halide grain and anamorphic horizontal blue flares onto the playing video without obscuring it.
* **Hero Video Controls**:
  * `[ 📹 FOOTAGE / CANVAS ]`: Toggle seamlessly between live video footage and procedural generative canvas noir.
  * `[ 🔇 SOUND: OFF / 🔊 SOUND: ON ]`: Independent audio control for the hero video.
  * `[ ⚡ 1.0X / 0.75X / 0.5X SLOW ]`: Cinema speed governor for slow-motion editorial viewing.
  * `[ 🎬 CHANGE VIDEO ]`: Opens the **Video Reel & Source Selector Modal**.
* **Custom Video URL & Reel Selector Modal**:
  * Visitors can paste **ANY direct MP4 / WebM / Instagram video URL** to immediately mount it on the hero screen.
  * Or select from 4 curated studio presets:
    1. *01 // Statement Utility · Studio Session (Paris / NY)*
    2. *02 // Vestiges of Haute Couture · Parisian Atelier*
    3. *03 // Chroma Drift · Infrared Atacama Horizon*
    4. *04 // Nocturne in 35mm · Shinjuku Rain Noir (Generative Canvas)*
* **Interactive Timeline Scrubber**: Scrubbing the timeline advances the video with millisecond accuracy.

---

## 🎨 Color Palette & Visual Ambiance

* **Obsidian Canvas**: `#0F0F11`
* **Deep Graphite Surfaces**: `#16161A` / `#1D1D23`
* **Editorial Off-White Typography**: `#EDECE8` (and subtle `#9D9C96`)
* **Cinema Amber / Warm Gold Accents**: `#E5A93C`, `#D97706`, `rgba(229, 169, 60, 0.4)`
* **Telecine Recording Red**: `#E03E3E` (with blinking 1.5s REC indicator)
* **Delicate 1px Borders**: `#26262B` dividers evoking telecine film gates.

---

## ✒️ Typography

* **Display & Editorial Headlines**: *Playfair Display* & *Cormorant Garamond* (High-contrast, razor-sharp serifs with dramatic italic ligatures and drop caps).
* **Episodic Tags, Navigation & Metadata**: *Space Mono* (technical monospace) paired with *Inter* for body text.

---

## 🏛 Core Layout Modules

1. **Header & Global Navigation**:
   * Wordmark `TODAY IN EPISODE` in spaced capital serif typography with `PARIS / NEW YORK · VOL. IV`.
   * Live real-time 24.00 FPS SMPTE timecode tracker + marquee ticker.
   * Instagram profile link to `@todayinepisode`.
   * **Analog Audio Synthesizer**: Native Web Audio API module generating a 432Hz root drone with gentle detuned harmonics and simulated tape/vinyl hiss with an animated VU meter.
2. **Hero Feature ("Now Screening")**:
   * Premier Episode: *Studio Session: Statement Utility* (Curated by Sarah Bassett, Paris / New York).
   * HTML5 Video player + generative canvas overlay.
   * Interactive scrubber, aspect ratio switcher, and direct action buttons ("Play Episode" & "Read Notes").
3. **Curated Episode Archive (The Grid)**:
   * Multi-column 16:9 thumbnail grid with subtle rounded corners and hover-activated motion loops.
   * Filterable by `ALL`, `NARRATIVE`, `VISUAL ESSAY`, and `SOUNDSCAPE` with instant search scanning.
4. **Directory / Script Index (Ledger View)**:
   * Alternative horizontal ledger layout presenting releases chronologically like a production script ledger.
   * Floating 35mm contact sheet preview follows cursor on row hover.
5. **Curatorial Notes & Production Bible (Slide-Over Drawer)**:
   * Two-column print editorial magazine format with drop caps, pull-quotes, director's curatorial statement, technical camera/lens specs, and a 35mm contact sheet proof gallery.
6. **Full Cinema Screening Room Modal**:
   * Theatrical screening environment with interactive playback controls, frame-by-frame stepper (1/24s), and art-house subtitle language switcher (`EN`, `FR`, `JA`, `OFF`).
7. **Footer & Archival Dispatch**:
   * Minimalist email dispatch sign-up returning a serialized digital dispatch pass (`[ DISPATCH PASS #TIE-7429 ]`).
   * Complete colophon, technical copyright disclaimer, and social directory.
8. **Lens-Inspired Custom Cursor**:
   * Smooth physics ring cursor that expands to display `PLAY`, `READ`, or `VIEW` over interactive media containers.

---

## 🚀 How to Open and View

Open `today-in-episode/index.html` directly in any web browser:

```bash
# macOS
open today-in-episode/index.html
```

Or serve via any static HTTP server:

```bash
cd today-in-episode
python3 -m http.server 8000
# Then visit http://localhost:8000
```

---

## ⌨️ Keyboard Shortcuts
* `Space`: Play / Pause current screening or hero video
* `M`: Toggle 432Hz ambient analog drone & tape hiss
* `F`: Toggle Fullscreen mode in Screening Room
* `Esc`: Close modals and drawers
