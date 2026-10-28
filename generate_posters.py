#!/usr/bin/env python3
"""
Generate ultra-aesthetic cinematic SVG stills for Today in Episode
Each poster has 16:9 ratio (1280x720) with art-house film atmosphere,
anamorphic flares, grain textures, telecine markings, and editorial elegance.
"""

import os

episodes_art = [
    {
        "filename": "ep07_nocturne.svg",
        "title": "Nocturne in 35mm",
        "ep": "EP. 07",
        "tc": "00:04:12:18",
        "stock": "KODAK 5219 500T",
        "lens": "COOKE ANAMORPHIC 40MM",
        "svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" width="100%" height="100%">
  <defs>
    <linearGradient id="skyGrad7" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#07090F"/>
      <stop offset="45%" stop-color="#0E131E"/>
      <stop offset="80%" stop-color="#141118"/>
      <stop offset="100%" stop-color="#0B090D"/>
    </linearGradient>
    <radialGradient id="neonGlowAmber" cx="35%" cy="58%" r="40%">
      <stop offset="0%" stop-color="#E5A93C" stop-opacity="0.6"/>
      <stop offset="40%" stop-color="#D97706" stop-opacity="0.25"/>
      <stop offset="80%" stop-color="#0E131E" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="neonGlowCyan" cx="72%" cy="45%" r="35%">
      <stop offset="0%" stop-color="#22D3EE" stop-opacity="0.45"/>
      <stop offset="35%" stop-color="#0284C7" stop-opacity="0.18"/>
      <stop offset="85%" stop-color="#07090F" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="flareOval" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFE4B5" stop-opacity="0.85"/>
      <stop offset="25%" stop-color="#F59E0B" stop-opacity="0.4"/>
      <stop offset="70%" stop-color="#B45309" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>
    <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="12" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- Background Canvas -->
  <rect width="1280" height="720" fill="url(#skyGrad7)"/>

  <!-- Atmospheric Glows -->
  <rect width="1280" height="720" fill="url(#neonGlowCyan)"/>
  <rect width="1280" height="720" fill="url(#neonGlowAmber)"/>

  <!-- Wet asphalt ground reflection -->
  <path d="M 0 520 L 1280 520 L 1280 720 L 0 720 Z" fill="#0A0B0E"/>
  <ellipse cx="440" cy="620" rx="280" ry="25" fill="#E5A93C" opacity="0.18" filter="url(#softGlow)"/>
  <ellipse cx="880" cy="600" rx="220" ry="18" fill="#06B6D4" opacity="0.15" filter="url(#softGlow)"/>
  <ellipse cx="640" cy="670" rx="360" ry="22" fill="#E03E3E" opacity="0.12" filter="url(#softGlow)"/>

  <!-- Urban silhouette / alley perspective -->
  <polygon points="0,180 320,380 320,530 0,600" fill="#090B10" opacity="0.95"/>
  <polygon points="1280,140 940,360 940,540 1280,630" fill="#080A0E" opacity="0.95"/>
  <polygon points="320,380 480,440 480,520 320,530" fill="#0C0F16" opacity="0.9"/>
  <polygon points="940,360 780,430 780,520 940,540" fill="#0D1017" opacity="0.9"/>

  <!-- Receding building columns & fire escape shadows -->
  <line x1="180" y1="270" x2="180" y2="570" stroke="#161A24" stroke-width="3"/>
  <line x1="240" y1="320" x2="240" y2="550" stroke="#161A24" stroke-width="2"/>
  <line x1="1080" y1="260" x2="1080" y2="580" stroke="#141822" stroke-width="3"/>

  <!-- Vertical Neon Signs (Japanese art-house typography) -->
  <g filter="url(#softGlow)" opacity="0.85">
    <rect x="290" y="240" width="14" height="120" rx="4" fill="#E5A93C" opacity="0.2"/>
    <text x="297" y="270" font-family="'Space Mono', monospace" font-size="14" fill="#FDE68A" text-anchor="middle" letter-spacing="4">夜</text>
    <text x="297" y="305" font-family="'Space Mono', monospace" font-size="14" fill="#FDE68A" text-anchor="middle" letter-spacing="4">想</text>
    <text x="297" y="340" font-family="'Space Mono', monospace" font-size="14" fill="#FDE68A" text-anchor="middle" letter-spacing="4">曲</text>
  </g>

  <g filter="url(#softGlow)" opacity="0.75">
    <rect x="965" y="220" width="12" height="90" rx="3" fill="#22D3EE" opacity="0.2"/>
    <text x="971" y="250" font-family="'Space Mono', monospace" font-size="13" fill="#A5F3FC" text-anchor="middle">シ</text>
    <text x="971" y="275" font-family="'Space Mono', monospace" font-size="13" fill="#A5F3FC" text-anchor="middle">ネ</text>
    <text x="971" y="300" font-family="'Space Mono', monospace" font-size="13" fill="#A5F3FC" text-anchor="middle">マ</text>
  </g>

  <!-- Distant rainy atmospheric vanishing point -->
  <circle cx="610" cy="460" r="1.5" fill="#FFF" opacity="0.9"/>
  <circle cx="630" cy="458" r="2" fill="#FDE047" opacity="0.8"/>
  <circle cx="585" cy="462" r="1.8" fill="#EF4444" opacity="0.85"/>

  <!-- Anamorphic Lens Flare (horizontal streak characteristic of 35mm anamorphic Cooke glass) -->
  <g opacity="0.7">
    <line x1="0" y1="460" x2="1280" y2="460" stroke="#38BDF8" stroke-width="1.2" opacity="0.5"/>
    <line x1="200" y1="460" x2="1080" y2="460" stroke="#7DD3FC" stroke-width="2" opacity="0.7"/>
    <line x1="420" y1="460" x2="800" y2="460" stroke="#E0F2FE" stroke-width="3.5" opacity="0.85"/>
    <!-- Bokeh elliptical spots -->
    <ellipse cx="610" cy="460" rx="90" ry="32" fill="url(#flareOval)"/>
    <ellipse cx="480" cy="460" rx="35" ry="14" fill="#0284C7" opacity="0.4" filter="url(#softGlow)"/>
    <ellipse cx="730" cy="460" rx="42" ry="16" fill="#F59E0B" opacity="0.35" filter="url(#softGlow)"/>
    <ellipse cx="880" cy="460" rx="25" ry="9" fill="#06B6D4" opacity="0.3"/>
  </g>

  <!-- Solitary Figure in Trench Coat under Umbrella -->
  <g transform="translate(615, 420)">
    <!-- Umbrella curve -->
    <path d="M -28 -10 Q 0 -36 28 -10 Q 0 -18 -28 -10 Z" fill="#08090C"/>
    <!-- Head / Collar -->
    <circle cx="0" cy="-6" r="6" fill="#0B0D12"/>
    <!-- Coat silhouette -->
    <path d="M -9 0 L -18 72 L 18 72 L 9 0 Z" fill="#080A0E"/>
    <!-- Umbrella shaft & arm -->
    <line x1="0" y1="-10" x2="6" y2="18" stroke="#141822" stroke-width="2"/>
    <!-- Wet pavement contact shadow -->
    <ellipse cx="0" cy="74" rx="20" ry="3" fill="#000" opacity="0.8"/>
  </g>

  <!-- Diagonal rain streaks -->
  <g stroke="#94A3B8" stroke-width="0.7" opacity="0.18">
    <line x1="120" y1="40" x2="80" y2="180"/>
    <line x1="340" y1="90" x2="300" y2="250"/>
    <line x1="560" y1="20" x2="520" y2="200"/>
    <line x1="780" y1="120" x2="740" y2="310"/>
    <line x1="990" y1="50" x2="950" y2="230"/>
    <line x1="1150" y1="110" x2="1110" y2="290"/>
    <line x1="220" y1="340" x2="180" y2="490"/>
    <line x1="450" y1="280" x2="410" y2="470"/>
    <line x1="680" y1="320" x2="640" y2="520"/>
    <line x1="890" y1="360" x2="850" y2="540"/>
  </g>

  <!-- Telecine Frame Crosshairs & Safe Area -->
  <g opacity="0.35" stroke="#EDECE8" stroke-width="1">
    <line x1="630" y1="360" x2="650" y2="360"/>
    <line x1="640" y1="350" x2="640" y2="370"/>
    <!-- Corner Framing guides -->
    <path d="M 40 50 L 70 50 M 40 50 L 40 80" fill="none"/>
    <path d="M 1240 50 L 1210 50 M 1240 50 L 1240 80" fill="none"/>
    <path d="M 40 670 L 70 670 M 40 670 L 40 640" fill="none"/>
    <path d="M 1240 670 L 1210 670 M 1240 670 L 1240 640" fill="none"/>
  </g>

  <!-- Technical Telecine Metadata Stamps -->
  <g font-family="'Space Mono', monospace" font-size="11" fill="#EDECE8" opacity="0.75" letter-spacing="1.5">
    <text x="50" y="70">REC ● [24.00 FPS]</text>
    <text x="50" y="88">TC: 00:04:12:18</text>
    <text x="1230" y="70" text-anchor="end">KODAK 5219 500T · 35MM</text>
    <text x="1230" y="88" text-anchor="end">ASPECT 2.39:1 · ANAMORPHIC</text>
    <text x="50" y="650">COOKE /i PRIME 40MM · T2.3</text>
    <text x="1230" y="650" text-anchor="end">DIR. CLARA VANCE</text>
  </g>
</svg>"""
    },
    {
        "filename": "ep06_monolith.svg",
        "title": "The Monolith of Silence",
        "ep": "EP. 06",
        "tc": "00:06:01:04",
        "stock": "16MM BOLEX / TRI-X B&W",
        "lens": "SWITAR 10MM F/1.6",
        "svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" width="100%" height="100%">
  <defs>
    <linearGradient id="monolithGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1E1E22"/>
      <stop offset="50%" stop-color="#121215"/>
      <stop offset="100%" stop-color="#08080A"/>
    </linearGradient>
    <linearGradient id="mistGrad" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#EDECE8" stop-opacity="0.25"/>
      <stop offset="60%" stop-color="#EDECE8" stop-opacity="0.04"/>
      <stop offset="100%" stop-color="#08080A" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <!-- Slate & Concrete Monochromatic Canvas -->
  <rect width="1280" height="720" fill="#0C0D10"/>

  <!-- High Alpine Mountain Silhouette -->
  <polygon points="0,320 180,180 380,290 620,110 840,260 1080,140 1280,240 1280,720 0,720" fill="#14151B"/>
  <polygon points="0,440 260,310 520,380 760,260 980,360 1280,300 1280,720 0,720" fill="#181920"/>

  <!-- Brutalist Concrete Dam Monolith -->
  <polygon points="340,720 480,280 800,280 940,720" fill="url(#monolithGrad)"/>
  
  <!-- Concrete panel expansion joints -->
  <line x1="560" y1="280" x2="500" y2="720" stroke="#26262B" stroke-width="1.5"/>
  <line x1="640" y1="280" x2="640" y2="720" stroke="#26262B" stroke-width="2"/>
  <line x1="720" y1="280" x2="780" y2="720" stroke="#26262B" stroke-width="1.5"/>
  
  <line x1="440" y1="400" x2="840" y2="400" stroke="#26262B" stroke-width="1"/>
  <line x1="400" y1="540" x2="880" y2="540" stroke="#26262B" stroke-width="1"/>

  <!-- Water Mist Valley Rising -->
  <rect x="0" y="380" width="1280" height="340" fill="url(#mistGrad)"/>

  <!-- Stark solitary light portal on the dam wall -->
  <rect x="632" y="320" width="16" height="24" fill="#E5A93C" opacity="0.9"/>
  <ellipse cx="640" cy="332" rx="35" ry="20" fill="#E5A93C" opacity="0.2"/>

  <!-- B&W Telecine Guides -->
  <g opacity="0.3" stroke="#EDECE8" stroke-width="1">
    <path d="M 40 50 L 70 50 M 40 50 L 40 80" fill="none"/>
    <path d="M 1240 50 L 1210 50 M 1240 50 L 1240 80" fill="none"/>
    <line x1="640" y1="40" x2="640" y2="55"/>
    <line x1="640" y1="665" x2="640" y2="680"/>
  </g>

  <!-- Technical Overlay -->
  <g font-family="'Space Mono', monospace" font-size="11" fill="#EDECE8" opacity="0.75" letter-spacing="1.5">
    <text x="50" y="70">EP. 06 · VISUAL ESSAY</text>
    <text x="50" y="88">TC: 00:06:01:04</text>
    <text x="1230" y="70" text-anchor="end">TRI-X 16MM REVERSAL</text>
    <text x="1230" y="88" text-anchor="end">SWISS VALAIS · 2,400M</text>
    <text x="50" y="650">ASPECT 1.85:1 · FLAT</text>
    <text x="1230" y="650" text-anchor="end">DIR. JULIAN BERG</text>
  </g>
</svg>"""
    },
    {
        "filename": "ep05_chroma.svg",
        "title": "Chroma Drift: Solstice",
        "ep": "EP. 05",
        "tc": "00:07:44:19",
        "stock": "CUSTOM 65MM MODIFIED",
        "lens": "LEICA NOCTILUX 50MM",
        "svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" width="100%" height="100%">
  <defs>
    <linearGradient id="atacamaSky" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#14061F"/>
      <stop offset="40%" stop-color="#3B0764"/>
      <stop offset="75%" stop-color="#701A75"/>
      <stop offset="90%" stop-color="#C2410C"/>
      <stop offset="100%" stop-color="#E5A93C"/>
    </linearGradient>
    <linearGradient id="saltFlats" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#E5A93C" stop-opacity="0.8"/>
      <stop offset="20%" stop-color="#581C87"/>
      <stop offset="60%" stop-color="#1C102A"/>
      <stop offset="100%" stop-color="#0F0818"/>
    </linearGradient>
    <radialGradient id="sunSolstice" cx="50%" cy="52%" r="20%">
      <stop offset="0%" stop-color="#FEF08A"/>
      <stop offset="35%" stop-color="#F59E0B" stop-opacity="0.8"/>
      <stop offset="70%" stop-color="#BE185D" stop-opacity="0.3"/>
      <stop offset="100%" stop-color="#000" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1280" height="720" fill="url(#atacamaSky)"/>
  
  <!-- Low Sun on Salt Horizon -->
  <circle cx="640" cy="400" r="140" fill="url(#sunSolstice)"/>

  <!-- Volcanic Ridge on Horizon -->
  <polygon points="0,400 160,370 280,390 420,350 560,395 720,360 880,385 1040,345 1160,375 1280,390 1280,720 0,720" fill="#240B3B"/>

  <!-- Salt Flat Geometric Polygon Tessellation Ground -->
  <rect x="0" y="400" width="1280" height="320" fill="url(#saltFlats)"/>
  
  <g stroke="#E5A93C" stroke-width="0.7" opacity="0.35">
    <line x1="640" y1="400" x2="100" y2="720"/>
    <line x1="640" y1="400" x2="380" y2="720"/>
    <line x1="640" y1="400" x2="640" y2="720"/>
    <line x1="640" y1="400" x2="900" y2="720"/>
    <line x1="640" y1="400" x2="1180" y2="720"/>
    
    <!-- Transverse salt crust ridges -->
    <path d="M 520 440 L 760 440"/>
    <path d="M 420 480 L 860 480"/>
    <path d="M 300 540 L 980 540"/>
    <path d="M 160 620 L 1120 620"/>
  </g>

  <!-- Anamorphic Infrared Flare Line -->
  <line x1="0" y1="400" x2="1280" y2="400" stroke="#F43F5E" stroke-width="2" opacity="0.7"/>
  <line x1="300" y1="400" x2="980" y2="400" stroke="#FDE047" stroke-width="3" opacity="0.85"/>

  <!-- Telecine markings -->
  <g font-family="'Space Mono', monospace" font-size="11" fill="#EDECE8" opacity="0.8" letter-spacing="1.5">
    <text x="50" y="70">EP. 05 · SOUNDSCAPE</text>
    <text x="50" y="88">TC: 00:07:44:19</text>
    <text x="1230" y="70" text-anchor="end">65MM INFRARED SENSOR</text>
    <text x="1230" y="88" text-anchor="end">ATACAMA DESERT · 4,200M</text>
    <text x="50" y="650">ASPECT 2.39:1 · SCOPE</text>
    <text x="1230" y="650" text-anchor="end">DIR. MARCELA RIOS &amp; YVES DELACROIX</text>
  </g>
</svg>"""
    },
    {
        "filename": "ep04_couture.svg",
        "title": "Vestiges of Haute Couture",
        "ep": "EP. 04",
        "tc": "00:05:02:11",
        "stock": "35MM EKTACHROME 100D",
        "lens": "ZEISS SUPER SPEED 35MM",
        "svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" width="100%" height="100%">
  <defs>
    <linearGradient id="atelierSun" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1A1815"/>
      <stop offset="50%" stop-color="#141311"/>
      <stop offset="100%" stop-color="#0A0908"/>
    </linearGradient>
    <linearGradient id="sunRay" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDE68A" stop-opacity="0.35"/>
      <stop offset="70%" stop-color="#D97706" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#141311" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <rect width="1280" height="720" fill="url(#atelierSun)"/>

  <!-- Dramatic French atelier window angled light rays -->
  <polygon points="180,0 360,0 840,720 480,720" fill="url(#sunRay)"/>
  <polygon points="420,0 560,0 1020,720 740,720" fill="url(#sunRay)" opacity="0.6"/>

  <!-- Tall French atelier multipane window frame shadow -->
  <line x1="220" y1="0" x2="680" y2="720" stroke="#0A0908" stroke-width="8" opacity="0.7"/>
  <line x1="380" y1="0" x2="840" y2="720" stroke="#0A0908" stroke-width="8" opacity="0.7"/>
  <line x1="0" y1="220" x2="1280" y2="440" stroke="#0A0908" stroke-width="6" opacity="0.5"/>

  <!-- Centered Mannequin / Dressmaker Form with Draped Organza -->
  <g transform="translate(620, 240)">
    <!-- Stand pole & brass base -->
    <line x1="0" y1="180" x2="0" y2="440" stroke="#E5A93C" stroke-width="4"/>
    <ellipse cx="0" cy="440" rx="40" ry="12" fill="#CCA152"/>
    
    <!-- Dress form torso -->
    <path d="M -22 60 Q 0 45 22 60 Q 28 100 24 150 Q 0 170 -24 150 Q -28 100 -22 60 Z" fill="#EDECE8" opacity="0.85"/>
    <circle cx="0" cy="45" r="10" fill="#E5A93C"/>

    <!-- Billowing Translucent Silk Organza Drape -->
    <path d="M -18 80 Q -80 140 -40 260 Q -10 320 20 280 Q 70 240 24 120 Z" fill="#FBFBF9" opacity="0.45"/>
    <path d="M 0 100 Q 50 160 80 290 Q 30 340 -20 300 Q -50 250 0 100 Z" fill="#E5A93C" opacity="0.25"/>

    <!-- Measuring tape curled on ground -->
    <path d="M -80 430 Q -40 410 0 435 Q 40 455 90 430" stroke="#F59E0B" stroke-width="3" fill="none"/>
  </g>

  <!-- Telecine Overlay -->
  <g font-family="'Space Mono', monospace" font-size="11" fill="#EDECE8" opacity="0.75" letter-spacing="1.5">
    <text x="50" y="70">EP. 04 · VISUAL ESSAY</text>
    <text x="50" y="88">TC: 00:05:02:11</text>
    <text x="1230" y="70" text-anchor="end">35MM EKTACHROME 100D</text>
    <text x="1230" y="88" text-anchor="end">PARIS 8E ARRONDISSEMENT</text>
    <text x="50" y="650">ASPECT 4:3 · ACADEMY</text>
    <text x="1230" y="650" text-anchor="end">DIR. HÉLÈNE DE SAINT-GERMAIN</text>
  </g>
</svg>"""
    },
    {
        "filename": "ep03_solitude.svg",
        "title": "The Anatomy of Solitude",
        "ep": "EP. 03",
        "tc": "00:06:48:02",
        "stock": "35MM FUJI ETERNA 250T",
        "lens": "ZEISS DISTAGON 28MM",
        "svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" width="100%" height="100%">
  <defs>
    <linearGradient id="northSeaSky" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#080E14"/>
      <stop offset="60%" stop-color="#111C24"/>
      <stop offset="100%" stop-color="#182A36"/>
    </linearGradient>
    <linearGradient id="seaWater" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0E1920"/>
      <stop offset="50%" stop-color="#081016"/>
      <stop offset="100%" stop-color="#04080B"/>
    </linearGradient>
    <radialGradient id="beaconBeam" cx="340" cy="280" r="450" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FDE68A" stop-opacity="0.9"/>
      <stop offset="30%" stop-color="#F59E0B" stop-opacity="0.3"/>
      <stop offset="80%" stop-color="#111C24" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1280" height="720" fill="url(#northSeaSky)"/>

  <!-- Wild churning North Sea swells -->
  <rect x="0" y="440" width="1280" height="280" fill="url(#seaWater)"/>
  
  <path d="M 0 460 Q 240 430 480 470 T 960 450 T 1280 460 L 1280 720 L 0 720 Z" fill="#0C151C" opacity="0.8"/>
  <path d="M 0 520 Q 300 480 600 530 T 1280 510 L 1280 720 L 0 720 Z" fill="#091016" opacity="0.9"/>
  
  <!-- Coastal rocky headland -->
  <polygon points="200,720 280,380 440,410 520,720" fill="#0B0E12"/>

  <!-- Solitary Modernist Radar/Lighthouse Tower -->
  <polygon points="325,400 332,270 348,270 355,400" fill="#1C2128"/>
  <rect x="330" y="260" width="20" height="14" fill="#0B0E12"/>
  
  <!-- Rotating warm incandescent beacon light -->
  <polygon points="340,266 1280,180 1280,380" fill="url(#beaconBeam)" opacity="0.45"/>
  <circle cx="340" cy="266" r="6" fill="#FFFBEB"/>
  <circle cx="340" cy="266" r="14" fill="#F59E0B" opacity="0.5"/>

  <!-- Sea Spray Mist particles -->
  <circle cx="480" cy="460" r="2" fill="#E2E8F0" opacity="0.4"/>
  <circle cx="560" cy="480" r="1.5" fill="#E2E8F0" opacity="0.5"/>
  <circle cx="720" cy="440" r="2" fill="#E2E8F0" opacity="0.3"/>

  <!-- Telecine stamps -->
  <g font-family="'Space Mono', monospace" font-size="11" fill="#EDECE8" opacity="0.75" letter-spacing="1.5">
    <text x="50" y="70">EP. 03 · NARRATIVE</text>
    <text x="50" y="88">TC: 00:06:48:02</text>
    <text x="1230" y="70" text-anchor="end">FUJI ETERNA 250T · 35MM</text>
    <text x="1230" y="88" text-anchor="end">NORTH SEA COLD SECTOR</text>
    <text x="50" y="650">ASPECT 1.66:1 · EUROPEAN</text>
    <text x="1230" y="650" text-anchor="end">DIR. SOREN LINDQVIST</text>
  </g>
</svg>"""
    },
    {
        "filename": "ep02_subbass.svg",
        "title": "Sub-Bass Cartography",
        "ep": "EP. 02",
        "tc": "00:09:02:15",
        "stock": "ULTRA16 KODAK 250D",
        "lens": "CANON K-35 18MM",
        "svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" width="100%" height="100%">
  <defs>
    <linearGradient id="vaultGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#040A08"/>
      <stop offset="60%" stop-color="#081410"/>
      <stop offset="100%" stop-color="#030706"/>
    </linearGradient>
    <radialGradient id="greenSonar" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#10B981" stop-opacity="0.3"/>
      <stop offset="70%" stop-color="#064E3B" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#000" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1280" height="720" fill="url(#vaultGrad)"/>

  <!-- Subterranean reservoir arches receding into infinite darkness -->
  <g stroke="#0F382B" stroke-width="2" fill="none" opacity="0.6">
    <!-- Arch 1 (close) -->
    <path d="M 120 720 L 120 340 Q 320 180 520 340 L 520 720"/>
    <path d="M 760 720 L 760 340 Q 960 180 1160 340 L 1160 720"/>
    
    <!-- Arch 2 (mid) -->
    <path d="M 280 620 L 280 370 Q 440 250 600 370 L 600 620" opacity="0.5"/>
    <path d="M 680 620 L 680 370 Q 840 250 1000 370 L 1000 620" opacity="0.5"/>
    
    <!-- Arch 3 (deep) -->
    <path d="M 420 540 L 420 390 Q 530 310 640 390 L 640 540" opacity="0.3"/>
  </g>

  <!-- Still subterranean water floor reflection -->
  <rect x="0" y="520" width="1280" height="200" fill="#020605"/>
  <ellipse cx="640" cy="580" rx="380" ry="40" fill="url(#greenSonar)"/>

  <!-- Acoustic frequency resonance ripples (Cymatics in water) -->
  <ellipse cx="640" cy="580" rx="60" ry="12" stroke="#34D399" stroke-width="1.2" fill="none" opacity="0.8"/>
  <ellipse cx="640" cy="580" rx="140" ry="24" stroke="#10B981" stroke-width="1" fill="none" opacity="0.5"/>
  <ellipse cx="640" cy="580" rx="240" ry="38" stroke="#059669" stroke-width="0.8" fill="none" opacity="0.3"/>
  <ellipse cx="640" cy="580" rx="360" ry="52" stroke="#047857" stroke-width="0.6" fill="none" opacity="0.18"/>

  <!-- Precision Red Alignment Laser Beam -->
  <line x1="0" y1="460" x2="1280" y2="460" stroke="#EF4444" stroke-width="1" opacity="0.75"/>
  <circle cx="640" cy="460" r="3" fill="#F87171"/>

  <!-- Telecine stamps -->
  <g font-family="'Space Mono', monospace" font-size="11" fill="#EDECE8" opacity="0.75" letter-spacing="1.5">
    <text x="50" y="70">EP. 02 · SOUNDSCAPE</text>
    <text x="50" y="88">TC: 00:09:02:15</text>
    <text x="1230" y="70" text-anchor="end">ULTRA16 KODAK 250D</text>
    <text x="1230" y="88" text-anchor="end">BERLIN TIEFGARAGE / U-BAHN</text>
    <text x="50" y="650">ASPECT 2.39:1 · SCOPE</text>
    <text x="1230" y="650" text-anchor="end">DIR. KAVEH SHIRAZI</text>
  </g>
</svg>"""
    },
    {
        "filename": "ep01_prelude.svg",
        "title": "Prelude: The First Frame",
        "ep": "EP. 01",
        "tc": "00:00:01:00",
        "stock": "35MM ORTHOCHROMATIC",
        "lens": "LEITZ SUMMICRON 35MM",
        "svg": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 720" width="100%" height="100%">
  <defs>
    <linearGradient id="filmBase" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#08080A"/>
      <stop offset="25%" stop-color="#141418"/>
      <stop offset="50%" stop-color="#1E1E26"/>
      <stop offset="75%" stop-color="#141418"/>
      <stop offset="100%" stop-color="#08080A"/>
    </linearGradient>
  </defs>

  <rect width="1280" height="720" fill="#0A0A0C"/>

  <!-- 35mm Celluloid Film Strip running horizontally across the screen -->
  <rect x="140" y="80" width="1000" height="560" fill="url(#filmBase)" rx="6" stroke="#26262B" stroke-width="2"/>

  <!-- Perforation Sprocket Holes Top & Bottom (35mm Standard KS-1870) -->
  <g fill="#0A0A0C" stroke="#26262B" stroke-width="1.5">
    <!-- Top row perforations -->
    <rect x="200" y="105" width="40" height="26" rx="4"/>
    <rect x="300" y="105" width="40" height="26" rx="4"/>
    <rect x="400" y="105" width="40" height="26" rx="4"/>
    <rect x="500" y="105" width="40" height="26" rx="4"/>
    <rect x="600" y="105" width="40" height="26" rx="4"/>
    <rect x="700" y="105" width="40" height="26" rx="4"/>
    <rect x="800" y="105" width="40" height="26" rx="4"/>
    <rect x="900" y="105" width="40" height="26" rx="4"/>
    <rect x="1000" y="105" width="40" height="26" rx="4"/>

    <!-- Bottom row perforations -->
    <rect x="200" y="585" width="40" height="26" rx="4"/>
    <rect x="300" y="585" width="40" height="26" rx="4"/>
    <rect x="400" y="585" width="40" height="26" rx="4"/>
    <rect x="500" y="585" width="40" height="26" rx="4"/>
    <rect x="600" y="585" width="40" height="26" rx="4"/>
    <rect x="700" y="585" width="40" height="26" rx="4"/>
    <rect x="800" y="585" width="40" height="26" rx="4"/>
    <rect x="900" y="585" width="40" height="26" rx="4"/>
    <rect x="1000" y="585" width="40" height="26" rx="4"/>
  </g>

  <!-- Single Film Frame Window (Academy 1.33:1 Aperture) -->
  <rect x="320" y="150" width="640" height="420" fill="#0E0E12" stroke="#E5A93C" stroke-width="1.5"/>

  <!-- Telecine Grease Pencil Markings & Academy Leader countdown aesthetic -->
  <circle cx="640" cy="360" r="160" stroke="#EDECE8" stroke-width="2" fill="none" opacity="0.6"/>
  <circle cx="640" cy="360" r="80" stroke="#EDECE8" stroke-width="1.5" fill="none" opacity="0.6"/>
  <line x1="640" y1="180" x2="640" y2="540" stroke="#EDECE8" stroke-width="1.5" opacity="0.5"/>
  <line x1="460" y1="360" x2="820" y2="360" stroke="#EDECE8" stroke-width="1.5" opacity="0.5"/>
  
  <!-- Number "2" Leader Frame -->
  <text x="640" y="395" font-family="'Playfair Display', serif" font-weight="900" font-size="96" fill="#EDECE8" text-anchor="middle" opacity="0.9">01</text>

  <!-- Yellow Grease Pencil handwritten sync mark -->
  <path d="M 370 200 L 430 250 M 430 200 L 370 250" stroke="#E5A93C" stroke-width="4" stroke-linecap="round" opacity="0.85"/>
  <text x="365" y="275" font-family="'Space Mono', monospace" font-size="12" fill="#E5A93C" font-weight="700">HEAD SYNC</text>

  <!-- Film Edge Code Numbers -->
  <text x="160" y="145" font-family="'Space Mono', monospace" font-size="10" fill="#F59E0B" opacity="0.8">EASTMAN 5222 · · 9438 1204</text>
  <text x="160" y="575" font-family="'Space Mono', monospace" font-size="10" fill="#F59E0B" opacity="0.8">TIE-LAB 01 · 24FPS · LATENT IMAGE KEY</text>

  <!-- Telecine labels -->
  <g font-family="'Space Mono', monospace" font-size="11" fill="#EDECE8" opacity="0.75" letter-spacing="1.5">
    <text x="50" y="70">EP. 01 · NARRATIVE</text>
    <text x="50" y="88">TC: 00:00:01:00</text>
    <text x="1230" y="70" text-anchor="end">35MM ORTHOCHROMATIC</text>
    <text x="1230" y="88" text-anchor="end">THE INAUGURAL MANIFESTO</text>
    <text x="50" y="650">ASPECT 1.33:1 · SILENT STANDARD</text>
    <text x="1230" y="650" text-anchor="end">EDITORIAL BOARD</text>
  </g>
</svg>"""
    }
]

out_dir = "/Users/aayushi/Desktop/AI Job Search For Aayushi/today-in-episode/assets"
os.makedirs(out_dir, exist_ok=True)

for item in episodes_art:
    path = os.path.join(out_dir, item["filename"])
    with open(path, "w", encoding="utf-8") as f:
        f.write(item["svg"])
    print(f"Generated {path}")

print("All cinematic SVG stills generated successfully!")
