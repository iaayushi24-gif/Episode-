/**
 * TODAY IN EPISODE — Interactive Cinematic Engine & Atelier E-Commerce
 * High-Quality Statement Streetwear & Customization Canvas
 */

(function () {
  'use strict';

  // ==========================================
  // EPISODE CATALOG DATA (All 8 Garments & Statement Pieces)
  // ==========================================
  const EPISODES_DATA = [
    {
      id: "ep-08",
      epNumber: "08",
      issue: "DROP 08",
      designation: "EPISODE 08 / STATEMENT PIECE",
      title: "Scarlet Floral Embroidered Atelier Jacket",
      subtitle: "Vibrant Scarlet Damask · Tactile Floral Silk Embroidery · Wide-Leg Noir Cut",
      category: "STATEMENT PIECE",
      categoryTag: "Statement Piece",
      price: 380,
      sizes: ["S", "M", "L", "XL"],
      sku: "EP-AW26-08-JCKT",
      director: "Episode New Delhi Studio",
      curator: "Episode New Delhi Atelier",
      runtime: "480 GSM",
      releaseDate: "2026.10.28",
      aspectRatio: "16:9",
      stock: "480 GSM Heavyweight Jacquard Damask & Silk Cord Embroidery",
      camera: "Tactile Botanical Needlework & Custom Wide-Leg Noir Trouser",
      lens: "Cooke Anamorphic /i Prime 40mm T2.3",
      location: "New Delhi Atelier (Shahpur Jat) · Worldwide Express Courier",
      audioFormat: "Studio Shears, Heavy Loom Percussion & Ambient Drone",
      poster: "assets/look08_scarlet_embroidered_jacket.jpg",
      featured: true,
      logline: "An imposing scarlet tailored jacket adorned with botanical embroidery and raw-edge cuff details, paired with wide pleated noir trousers. Commands instant presence with zero accessories.",
      essay: [
        "For Gen Z and young millennial creatives who view clothing as a canvas for self-expression, Drop 08 serves as an uncompromising statement against fast-fashion conformity.",
        "Woven from 480 GSM damask jacquard and embellished with hand-guided silk embroidery in our New Delhi atelier, the silhouette creates an imposing visual gravity. You never have to heavily accessorize generic brands to stand out—the garment commands the room entirely on its own, dispatched worldwide via express courier."
      ],
      directorQuote: "When your jacket possesses this degree of architectural weight and hand-guided embroidery, you become the focal point of any space.",
      stills: [
        { label: "LOOK 08 // SCARLET ATELIER JACKET", img: "assets/look08_scarlet_embroidered_jacket.jpg" },
        { label: "DETAIL // HAND-GUIDED EMBROIDERY", img: "assets/look08_scarlet_embroidered_jacket.jpg" },
        { label: "RUNWAY PROOF // FULL SILHOUETTE", img: "assets/look08_scarlet_embroidered_jacket.jpg" }
      ]
    },
    {
      id: "ep-07",
      epNumber: "07",
      issue: "DROP 07",
      designation: "EPISODE 07 / STATEMENT PIECE",
      title: "“Kinsale” Ornate Jacquard Wrap Jacket",
      subtitle: "Ornate Jacquard Silk · Stand-Up Architectural Collar · 540 GSM Heavyweight",
      category: "STATEMENT PIECE",
      categoryTag: "Statement Piece",
      price: 340,
      sizes: ["S", "M", "L", "XL"],
      sku: "EP-AW26-07-WRAP",
      director: "Episode New Delhi Studio",
      curator: "Episode New Delhi Atelier",
      runtime: "540 GSM",
      releaseDate: "2026.10.14",
      aspectRatio: "16:9",
      stock: "540 GSM Heavyweight Crimson & Gold Brocade Jacquard",
      camera: "Structural Asymmetric Lapel & Forged Antique Brass Fasteners",
      lens: "Cooke Anamorphic /i Prime 40mm T2.3",
      location: "New Delhi Atelier (Shahpur Jat) · Worldwide Express Courier",
      audioFormat: "Studio Ambient Drone + Loom Acoustic Session",
      poster: "assets/look01_ornate_wrap.jpg",
      featured: true,
      logline: "High-collar architectural wrap jacket crafted from heavy crimson and antique gold brocade weave. Built to stand boldly on its own without needing accessory overload.",
      essay: [
        "Clothing is not disposable merchandise; it is an episodic canvas for self-expression. Drop 07 rejects repetitive cycles of fast fashion in favor of structural presence.",
        "Engineered in New Delhi with an architectural stand-up collar, tactile gold jacquard motifs, and dropped shoulders, it provides statement presence without the exhausting ritual of over-accessorizing generic brands. Shipped globally to your door."
      ],
      directorQuote: "When a piece is engineered with true presence and heavyweight textile integrity, you never have to overcompensate with cheap accessories.",
      stills: [
        { label: "LOOK 01 // ORNATE STAND COLLAR", img: "assets/look01_ornate_wrap.jpg" },
        { label: "DETAIL // GOLD JACQUARD WEAVE", img: "assets/look01_ornate_wrap.jpg" },
        { label: "RUNWAY PROOF // WRAP CLOSURE", img: "assets/look01_ornate_wrap.jpg" }
      ]
    },
    {
      id: "ep-06",
      epNumber: "06",
      issue: "DROP 06",
      designation: "EPISODE 06 / STATEMENT PIECE",
      title: "Imperial Floral Brocade Tailored Suit",
      subtitle: "Woven Botanical Tapestry · Gold Hardware · Sculpted Streetwear Cut",
      category: "STATEMENT PIECE",
      categoryTag: "Statement Piece",
      price: 420,
      sizes: ["S", "M", "L", "XL"],
      sku: "EP-AW26-06-SUIT",
      director: "Episode New Delhi Studio",
      curator: "Episode New Delhi Atelier",
      runtime: "520 GSM",
      releaseDate: "2026.09.28",
      aspectRatio: "16:9",
      stock: "520 GSM Botanical Brocade Tapestry & Hand-Forged Accents",
      camera: "Architectural Lapels & Custom Relaxed-Taper Silhouette",
      lens: "Switar 10mm f/1.6 & 25mm f/1.4",
      location: "New Delhi Atelier (Shahpur Jat) · Worldwide Express Courier",
      audioFormat: "Resonant Studio Echoes & Gold Chime Pings",
      poster: "assets/look02_brocade_suit.jpg",
      featured: false,
      logline: "Sculptural brocade suit featuring rich botanical tapestry weave and custom tailored silhouette. Defies mass-fashion repetition through uncompromising structural volume.",
      essay: [
        "Mass fashion forces Gen Z and millennial trendsetters into homogenous molds, requiring stacks of jewelry just to feel distinct. Drop 06 shatters this dynamic entirely.",
        "Woven in our New Delhi atelier from dense 520 GSM botanical brocade, its drape commands attention organically. It provides an imposing sculptural silhouette that stands as a singular statement against algorithmic trends."
      ],
      directorQuote: "True individuality is found in the weight of the weave, not the noise of an algorithm.",
      stills: [
        { label: "LOOK 02 // FLORAL BROCADE SUIT", img: "assets/look02_brocade_suit.jpg" },
        { label: "DETAIL // TAPESTRY WEAVE TEXTURE", img: "assets/look02_brocade_suit.jpg" },
        { label: "RUNWAY PROOF // TAILORED TROUSER", img: "assets/look02_brocade_suit.jpg" }
      ]
    },
    {
      id: "ep-05",
      epNumber: "05",
      issue: "DROP 05",
      designation: "EPISODE 05 / CUSTOM CANVAS",
      title: "Nocturne Pleated Liquid Emerald Noir Tunic",
      subtitle: "Liquid Metallic Pleated Lamé · Cinched Waist Harness · Nocturne Clubwear",
      category: "CUSTOM CANVAS",
      categoryTag: "Custom Canvas",
      price: 280,
      sizes: ["S", "M", "L", "XL"],
      sku: "EP-AW26-05-TUNC",
      director: "Episode New Delhi Studio",
      curator: "Episode New Delhi Atelier",
      runtime: "360 GSM",
      releaseDate: "2026.09.12",
      aspectRatio: "16:9",
      stock: "Micro-Pleated Liquid Metallic Lamé & Matte Structural Hardware",
      camera: "Cinched Corset Waist Adjusters & Flared Hemline",
      lens: "Leica Noctilux-M 50mm f/0.95 Mod",
      location: "New Delhi Atelier (Shahpur Jat) · Worldwide Express Courier",
      audioFormat: "Atmospheric Synthesizer Drones & Metallic Resonance",
      poster: "assets/look03_emerald_metallic.jpg",
      featured: false,
      logline: "Pleated tunic with shimmering metallic emerald finish and sculpted cinched waist hardware. Engineered for night shift aesthetics and alternative runway culture.",
      essay: [
        "Fast fashion demands uniformity; Episode champions bespoke individuality. The Liquid Emerald Tunic reflects the shifting ambient light of nightlife and high-energy gatherings.",
        "Designed in New Delhi with adjustable corset cinching and micro-pleats that move fluidly with the body, it treats the wearer as a dynamic canvas for personal expression, delivered across the globe via express courier."
      ],
      directorQuote: "A garment should accumulate your history, not disintegrate in three washes.",
      stills: [
        { label: "LOOK 03 // PLEATED EMERALD NOIR", img: "assets/look03_emerald_metallic.jpg" },
        { label: "DETAIL // CINCHED CORSET HARDWARE", img: "assets/look03_emerald_metallic.jpg" },
        { label: "ATMOSPHERE // LIQUID LAMÉ DRAPE", img: "assets/look03_emerald_metallic.jpg" }
      ]
    },
    {
      id: "ep-04",
      epNumber: "04",
      issue: "DROP 04",
      designation: "EPISODE 04 / STATEMENT PIECE",
      title: "Monochrome Dahlia Oversized Camp Shirt",
      subtitle: "240 GSM Drape Viscose · Hand-Drawn Floral Graphic · Relaxed Cuban Collar",
      category: "STATEMENT PIECE",
      categoryTag: "Statement Piece",
      price: 195,
      sizes: ["S", "M", "L", "XL"],
      sku: "EP-AW26-04-CAMP",
      director: "Episode New Delhi Studio",
      curator: "Episode New Delhi Atelier",
      runtime: "240 GSM",
      releaseDate: "2026.08.29",
      aspectRatio: "16:9",
      stock: "240 GSM High-Drape Viscose Twill with Monochrome Studio Print",
      camera: "Open Camp Cuban Collar & Matte Corozo Nut Buttons",
      lens: "Zeiss Super Speed 35mm T1.3 MKIII",
      location: "New Delhi Atelier (Shahpur Jat) · Worldwide Express Courier",
      audioFormat: "Textile Friction & Rhythmic Atelier Cutting Shears",
      poster: "assets/look04_monochrome_dahlia.jpg",
      featured: false,
      logline: "Oversized monochrome floral shirt with dropped camp collar and relaxed drape. A high-contrast graphic canvas for effortless summer and transitional layering.",
      essay: [
        "The classic floral shirt reimagined through a brutalist monochrome lens. Bold floral silhouettes hand-illustrated in our New Delhi studio and printed on fluid viscose twill.",
        "Engineered with dropped shoulders and a boxy hemline, this piece acts as an effortless solo statement piece with no auxiliary layering required."
      ],
      directorQuote: "Contrast is where style begins. Black and white allows the form to breathe without distraction.",
      stills: [
        { label: "LOOK 04 // MONOCHROME DAHLIA", img: "assets/look04_monochrome_dahlia.jpg" },
        { label: "DETAIL // DROPPED CAMP COLLAR", img: "assets/look04_monochrome_dahlia.jpg" },
        { label: "PRINT PROOF // CHARCOAL STUDY", img: "assets/look04_monochrome_dahlia.jpg" }
      ]
    },
    {
      id: "ep-03",
      epNumber: "03",
      issue: "DROP 03",
      designation: "EPISODE 03 / CUSTOM CANVAS",
      title: "Sage Mineral Slub Linen Overshirt & Plaid Pant",
      subtitle: "380 GSM Mineral Slub Linen · Tartan Wool Pleated Trouser · Natural Horn Buttons",
      category: "CUSTOM CANVAS",
      categoryTag: "Custom Canvas",
      price: 260,
      sizes: ["S", "M", "L", "XL"],
      sku: "EP-AW26-03-SAGE",
      director: "Episode New Delhi Studio",
      curator: "Episode New Delhi Atelier",
      runtime: "380 GSM",
      releaseDate: "2026.08.14",
      aspectRatio: "16:9",
      stock: "380 GSM Mineral Garment-Dyed Slub Linen & Wool Tartan Twill",
      camera: "Oversized Utilitarian Chest Pockets & Pleated Trouser Cuff",
      lens: "Zeiss Distagon 28mm & Planar 50mm",
      location: "New Delhi Atelier (Shahpur Jat) · Worldwide Express Courier",
      audioFormat: "Organic Fiber Weft Sounds & Deep Bass Hum",
      poster: "assets/look05_sage_overshirt.jpg",
      featured: false,
      logline: "Relaxed dual-silhouette featuring a garment-dyed sage overshirt with horn buttons and relaxed pleated windowpane plaid trousers. Built for utilitarian ease.",
      essay: [
        "Streetwear often defaults to synthetic fast fabrics that age poorly. Drop 03 returns to tactile organic textures: heavy slub linen woven in India that softens with every wear.",
        "Paired with wide-leg windowpane plaid trousers, it demonstrates that comfortable utility and avant-garde fashion can coexist harmoniously without repetitive conformity."
      ],
      directorQuote: "Simplicity in silhouette, complexity in textile slub. That is the essence of enduring streetwear.",
      stills: [
        { label: "LOOK 05 // SAGE OVERSHIRT & PLAID", img: "assets/look05_sage_overshirt.jpg" },
        { label: "DETAIL // SLUB LINEN WEAVE", img: "assets/look05_sage_overshirt.jpg" },
        { label: "PROFILE // STUDIO PORTRAIT", img: "assets/look05_sage_overshirt.jpg" }
      ]
    },
    {
      id: "ep-02",
      epNumber: "02",
      issue: "DROP 02",
      designation: "EPISODE 02 / CUSTOM CANVAS",
      title: "Deconstructed Paisley Draped Hood Halter & Denim",
      subtitle: "Fluid Printed Paisley Silk · Folded Raw Denim · Avant-Garde Cut",
      category: "CUSTOM CANVAS",
      categoryTag: "Custom Canvas",
      price: 230,
      sizes: ["S", "M", "L", "XL"],
      sku: "EP-AW26-02-HOOD",
      director: "Episode New Delhi Studio",
      curator: "Episode New Delhi Atelier",
      runtime: "14.5 OZ",
      releaseDate: "2026.07.30",
      aspectRatio: "16:9",
      stock: "Fluid Printed Paisley Silk Blend & 14.5oz Folded Raw Denim",
      camera: "Draped Cowl Hood Silhouette & Fold-Over Waistband Construction",
      lens: "Canon K-35 18mm T1.5 Cinema Prime",
      location: "New Delhi Atelier (Shahpur Jat) · Worldwide Express Courier",
      audioFormat: "Atmospheric Indigo Wash Tapes & Sub-Bass Resonances",
      poster: "assets/look06_draped_hood.png",
      featured: false,
      logline: "Asymmetrical halter top with dramatic draped hood in moody blue paisley, styled with folded waistband relaxed denim. A radical study in alternative street elegance.",
      essay: [
        "Why should hooded garments be confined to sports fleeces? Drop 02 deconstructs the hood into a flowing, cowl-neck halter crafted from paisley silk.",
        "Styled against heavyweight folded raw indigo denim, this piece creates a captivating dialogue between fragile drape and architectural streetwear armor, handcrafted in New Delhi."
      ],
      directorQuote: "Streetwear must evolve beyond conventional tropes. Draping is the ultimate form of rebellion.",
      stills: [
        { label: "LOOK 06 // DRAPED HOOD & DENIM", img: "assets/look06_draped_hood.png" },
        { label: "DETAIL // PAISLEY SILK COWL", img: "assets/look06_draped_hood.png" },
        { label: "DENIM // FOLDED WAISTBAND CUT", img: "assets/look06_draped_hood.png" }
      ]
    },
    {
      id: "ep-01",
      epNumber: "01",
      issue: "DROP 01",
      designation: "EPISODE 01 / ATELIER CAPSULE",
      title: "“Hot Seat” Heavyweight Graphic Boxy Tee",
      subtitle: "320 GSM Ring-Spun Cotton · Tactile Red Felt Appliqué · Drop Shoulder Cut",
      category: "ATELIER CAPSULE",
      categoryTag: "Atelier Capsule",
      price: 125,
      sizes: ["S", "M", "L", "XL"],
      sku: "EP-AW26-01-HOT",
      director: "Episode New Delhi Studio",
      curator: "Episode New Delhi Atelier",
      runtime: "320 GSM",
      releaseDate: "2026.07.15",
      aspectRatio: "16:9",
      stock: "320 GSM Combed Ring-Spun Heavyweight Jersey & Hand-Cut Red Felt",
      camera: "Silkscreened Comic Panel 'The only personal space I\'ve got' + Lower Back Lettering",
      lens: "Leitz Summicron 35mm Classic",
      location: "New Delhi Atelier (Shahpur Jat) · Worldwide Express Courier",
      audioFormat: "Atelier Screenprint Squeegee Sweeps & Vinyl Crackle",
      poster: "assets/look07_hotseat_tee.jpg",
      featured: false,
      logline: "Heavyweight vintage off-white boxy tee featuring screen-printed comic artwork 'The only personal space I\'ve got' and tactile red felt lettering across the lower back hem.",
      essay: [
        "The humble t-shirt elevated to collectible wearable art. Crafted in New Delhi from dense 320 GSM Indian ring-spun cotton that never twists or shrinks out of form.",
        "The back displays a poignant dark-humor graphic and tactile red felt lettering reading 'hot seat', transforming casual street attire into a conversation piece for alternative creatives."
      ],
      directorQuote: "A t-shirt shouldn\'t be disposable promotional swag. It should feel like a piece of armor.",
      stills: [
        { label: "LOOK 07 // 'HOT SEAT' GRAPHIC TEE", img: "assets/look07_hotseat_tee.jpg" },
        { label: "DETAIL // FELT LETTERING TEXTURE", img: "assets/look07_hotseat_tee.jpg" },
        { label: "GRAPHIC // COMIC PANEL ARTWORK", img: "assets/look07_hotseat_tee.jpg" }
      ]
    }
  ];

  // ==========================================
  // STATE STORE
  // ==========================================
  const state = {
    currentCategory: "ALL",
    searchQuery: "",
    viewMode: "grid", // 'grid' or 'ledger'
    isAmbientAudioActive: false,
    heroPlaying: true,
    heroProgress: 0.28,
    heroVideoMode: "footage",
    heroVideoMuted: true,
    heroVideoSpeed: 1.0,
    currentHeroVideoUrl: "assets/hero_reel.mp4",
    screeningActive: false,
    screeningPlaying: false,
    screeningProgress: 0.15,
    currentEpisodeForNotes: EPISODES_DATA[0],
    currentEpisodeForScreening: EPISODES_DATA[0],
    subtitlesLanguage: "en",
    audioTrack: "master",
    heroAspectRatio: "2.39"
  };

  // Subtitle script lines for screening simulator
  const SUBTITLE_CUES = [
    { time: 0.05, text: "Clothing is an episodic canvas for self-expression." },
    { time: 0.18, text: "[Analog tape hiss intensifies in the frequency band]" },
    { time: 0.32, text: "We engineer heavyweight statement pieces without fast-fashion conformity." },
    { time: 0.48, text: "You co-create the process. Every garment tells an unrepeatable story." },
    { time: 0.65, text: "Crafted in New Delhi. Express courier dispatched worldwide." },
    { time: 0.82, text: "High quality. Tactile weight. Anti-conformity." }
  ];

  // ==========================================
  // SHOPPING CART STATE & ENGINE
  // ==========================================
  let cart = [];
  try {
    const saved = localStorage.getItem('episode_cart_v1');
    if (saved) cart = JSON.parse(saved);
  } catch (e) {
    cart = [];
  }

  function saveCart() {
    try {
      localStorage.setItem('episode_cart_v1', JSON.stringify(cart));
    } catch (e) {}
    updateCartUI();
  }

  function addToCart(productId, size = 'M', quantity = 1) {
    const item = EPISODES_DATA.find(p => p.id === productId);
    if (!item) return;

    const existing = cart.find(c => c.id === productId && c.size === size);
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({
        id: item.id,
        epNumber: item.epNumber,
        title: item.title,
        price: item.price || 280,
        size: size,
        poster: item.poster,
        category: item.category,
        quantity: quantity
      });
    }

    saveCart();

    // Bump header cart icon
    const headerBtn = document.getElementById('cart-toggle-btn');
    if (headerBtn) {
      headerBtn.classList.add('cart-bump');
      setTimeout(() => headerBtn.classList.remove('cart-bump'), 300);
    }

    openCartDrawer();
  }

  function removeFromCart(index) {
    if (index >= 0 && index < cart.length) {
      cart.splice(index, 1);
      saveCart();
    }
  }

  function updateCartQuantity(index, delta) {
    if (index >= 0 && index < cart.length) {
      cart[index].quantity += delta;
      if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
      }
      saveCart();
    }
  }

  function openCartDrawer() {
    const drawerBackdrop = document.getElementById('cart-drawer-backdrop');
    if (drawerBackdrop) {
      drawerBackdrop.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCartDrawer() {
    const drawerBackdrop = document.getElementById('cart-drawer-backdrop');
    if (drawerBackdrop) {
      drawerBackdrop.classList.remove('is-open');
      const curatorialModal = document.getElementById('curatorial-modal');
      const isCuratorialOpen = curatorialModal && curatorialModal.classList.contains('is-open');
      if (!state.screeningActive && !isCuratorialOpen) {
        document.body.style.overflow = '';
      }
    }
  }

  function updateCartUI() {
    const countBadge = document.getElementById('header-cart-count');
    const drawerCount = document.getElementById('cart-drawer-count');
    const listEl = document.getElementById('cart-items-list');
    const subtotalEl = document.getElementById('cart-subtotal-val');
    const totalEl = document.getElementById('cart-total-val');
    const checkoutBtn = document.getElementById('cart-checkout-btn');

    const summaryCount = document.getElementById('checkout-summary-count');
    const summarySubtotal = document.getElementById('checkout-summary-subtotal');
    const summaryTotal = document.getElementById('checkout-summary-total');

    let totalItems = 0;
    let subtotal = 0;

    cart.forEach(item => {
      totalItems += item.quantity;
      subtotal += item.price * item.quantity;
    });

    if (countBadge) countBadge.textContent = totalItems;
    if (drawerCount) drawerCount.textContent = `[ ${totalItems} ${totalItems === 1 ? 'PIECE' : 'PIECES'} ]`;
    if (subtotalEl) subtotalEl.textContent = `€${subtotal.toLocaleString()}`;
    if (totalEl) totalEl.textContent = `€${subtotal.toLocaleString()}`;

    if (summaryCount) summaryCount.textContent = totalItems;
    if (summarySubtotal) summarySubtotal.textContent = `€${subtotal.toLocaleString()}`;
    if (summaryTotal) summaryTotal.textContent = `€${subtotal.toLocaleString()}`;

    if (checkoutBtn) {
      checkoutBtn.disabled = totalItems === 0;
      checkoutBtn.style.opacity = totalItems === 0 ? '0.5' : '1';
      checkoutBtn.style.pointerEvents = totalItems === 0 ? 'none' : 'auto';
    }

    if (!listEl) return;

    if (cart.length === 0) {
      listEl.innerHTML = `
        <div class="cart-empty-state">
          <div class="cart-empty-icon">🛍️</div>
          <h3 class="cart-empty-title">YOUR BAG IS CURRENTLY EMPTY</h3>
          <p class="cart-empty-desc">Discover our limited-run statement streetwear and bespoke customizable pieces.</p>
          <button type="button" class="cart-empty-btn" onclick="closeCartDrawer(); location.href='#lookbook';">EXPLORE RUNWAY LOOKS</button>
        </div>
      `;
      return;
    }

    listEl.innerHTML = cart.map((item, idx) => {
      return `
        <div class="cart-item-card">
          <img src="${item.poster}" alt="${item.title}" class="cart-item-thumb" />
          <div class="cart-item-info">
            <div>
              <h4 class="cart-item-title">${item.title}</h4>
              <div class="cart-item-meta">DROP ${item.epNumber} · SIZE: <strong style="color:var(--accent-gold);">${item.size}</strong></div>
            </div>
            <div class="cart-item-price">₹${Math.round(item.price * 85 * item.quantity).toLocaleString("en-IN")} ($${(item.price * item.quantity).toLocaleString()})</div>
            <div class="cart-item-actions">
              <div class="cart-qty-ctrl">
                <button type="button" class="cart-qty-btn" onclick="updateCartQuantity(${idx}, -1)" aria-label="Decrease quantity">−</button>
                <span class="cart-qty-val">${item.quantity}</span>
                <button type="button" class="cart-qty-btn" onclick="updateCartQuantity(${idx}, 1)" aria-label="Increase quantity">+</button>
              </div>
              <button type="button" class="cart-remove-btn" onclick="removeFromCart(${idx})" aria-label="Remove item">REMOVE</button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  function handleCardAddToCart(productId, btn) {
    const card = btn.closest('.campaign-card') || btn.closest('.episode-card') || btn.closest('.party-product-card') || btn.closest('.retro-featured-product');
    let size = 'M';
    if (card) {
      const activeSizeBtn = card.querySelector('.size-btn.active');
      if (activeSizeBtn) size = activeSizeBtn.getAttribute('data-size') || 'M';
    }

    addToCart(productId, size, 1);

    const originalText = btn.innerHTML;
    btn.classList.add('is-added');
    btn.innerHTML = `<span>✓ ADDED (${size})</span>`;
    setTimeout(() => {
      btn.classList.remove('is-added');
      btn.innerHTML = originalText;
    }, 1400);
  }

  function handleDrawerAddToCart() {
    if (!state.currentEpisodeForNotes) return;
    const sizePill = document.querySelector('#drawer-size-pills .size-pill.active');
    const size = sizePill ? sizePill.getAttribute('data-size') : 'M';
    addToCart(state.currentEpisodeForNotes.id, size, 1);

    const btn = document.getElementById('drawer-buy-btn');
    const label = document.getElementById('drawer-buy-label');
    if (btn && label) {
      const orig = label.textContent;
      label.textContent = `✓ ADDED (${size})`;
      setTimeout(() => {
        label.textContent = orig;
      }, 1500);
    }
  }

  function initCartAndCheckoutBindings() {
    const cartToggleBtn = document.getElementById('cart-toggle-btn');
    const cartDrawerClose = document.getElementById('cart-drawer-close');
    const cartBackdrop = document.getElementById('cart-drawer-backdrop');

    if (cartToggleBtn) cartToggleBtn.addEventListener('click', openCartDrawer);
    if (cartDrawerClose) cartDrawerClose.addEventListener('click', closeCartDrawer);
    if (cartBackdrop) {
      cartBackdrop.addEventListener('click', e => {
        if (e.target === cartBackdrop) closeCartDrawer();
      });
    }

    // Checkout modal elements
    const checkoutModal = document.getElementById('checkout-modal-backdrop');
    const openCheckoutBtn = document.getElementById('cart-checkout-btn');
    const closeCheckoutBtn = document.getElementById('checkout-modal-close');
    const checkoutForm = document.getElementById('checkout-order-form');
    const stepForm = document.getElementById('checkout-step-form');
    const stepSuccess = document.getElementById('checkout-step-success');
    const successCloseBtn = document.getElementById('success-close-btn');

    function openCheckout() {
      if (cart.length === 0) return;
      closeCartDrawer();
      if (checkoutModal) {
        if (stepForm) stepForm.classList.remove('is-hidden');
        if (stepSuccess) stepSuccess.classList.add('is-hidden');
        checkoutModal.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      }
    }

    function closeCheckout() {
      if (checkoutModal) {
        checkoutModal.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    }

    if (openCheckoutBtn) openCheckoutBtn.addEventListener('click', openCheckout);
    if (closeCheckoutBtn) closeCheckoutBtn.addEventListener('click', closeCheckout);
    if (successCloseBtn) successCloseBtn.addEventListener('click', closeCheckout);

    if (checkoutModal) {
      checkoutModal.addEventListener('click', e => {
        if (e.target === checkoutModal) closeCheckout();
      });
    }

    if (checkoutForm) {
      checkoutForm.addEventListener('submit', e => {
        e.preventDefault();
        const emailInput = document.getElementById('checkout-email');
        const email = emailInput ? emailInput.value.trim() : 'creative@episode-atelier.com';

        const orderNum = 'EP-2026-' + Math.floor(1000 + Math.random() * 9000);
        const orderIdEl = document.getElementById('success-order-id');
        const emailEl = document.getElementById('success-customer-email');
        if (orderIdEl) orderIdEl.textContent = `ORDER #${orderNum}`;
        if (emailEl) emailEl.textContent = email;

        if (stepForm) stepForm.classList.add('is-hidden');
        if (stepSuccess) stepSuccess.classList.remove('is-hidden');

        // Clear cart
        cart = [];
        saveCart();
      });
    }

    // Size pill delegator
    document.addEventListener('click', e => {
      const sizeBtn = e.target.closest('.size-btn, .size-pill');
      if (!sizeBtn) return;
      const parent = sizeBtn.parentElement;
      if (!parent) return;
      parent.querySelectorAll('.size-btn, .size-pill').forEach(b => b.classList.remove('active'));
      sizeBtn.classList.add('active');
    });

    updateCartUI();
  }

  // ==========================================
  // 1. LIVE TIMECODE TRACKER (24 FPS SMPTE)
  // ==========================================
  function initTimecodeEngine() {
    const timecodeEls = document.querySelectorAll(".timecode-val");
    if (!timecodeEls.length) return;
    let startTime = Date.now();
    let frameRate = 24;

    function formatSMPTE(ms) {
      let totalSeconds = Math.floor(ms / 1000);
      let frames = Math.floor(((ms % 1000) / 1000) * frameRate);
      let hours = Math.floor(totalSeconds / 3600);
      let minutes = Math.floor((totalSeconds % 3600) / 60);
      let seconds = totalSeconds % 60;

      let hh = String(hours % 24).padStart(2, "0");
      let mm = String(minutes).padStart(2, "0");
      let ss = String(seconds).padStart(2, "0");
      let ff = String(frames).padStart(2, "0");

      return `${hh}:${mm}:${ss}:${ff}`;
    }

    function updateTimecode() {
      let elapsed = Date.now() - startTime;
      let tc = formatSMPTE(elapsed);
      timecodeEls.forEach(el => {
        el.textContent = tc;
      });
      requestAnimationFrame(updateTimecode);
    }

    requestAnimationFrame(updateTimecode);
  }

  // ==========================================
  // 2. FILM GRAIN PROCEDURAL CANVAS
  // ==========================================
  function initFilmGrain() {
    const canvas = document.getElementById("film-grain-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = (canvas.width = Math.min(window.innerWidth / 2, 640));
    let height = (canvas.height = Math.min(window.innerHeight / 2, 360));

    let imgData = ctx.createImageData(width, height);
    let buffer32 = new Uint32Array(imgData.data.buffer);
    let len = buffer32.length;
    let lastTime = 0;
    const interval = 1000 / 24;

    function renderGrain(timestamp) {
      if (timestamp - lastTime > interval) {
        lastTime = timestamp;
        for (let i = 0; i < len; i++) {
          if (Math.random() < 0.14) {
            let val = (Math.random() * 255) | 0;
            buffer32[i] = (140 << 24) | (val << 16) | (val << 8) | val;
          } else {
            buffer32[i] = 0;
          }
        }
        ctx.putImageData(imgData, 0, 0);
      }
      requestAnimationFrame(renderGrain);
    }

    window.addEventListener("resize", () => {
      width = canvas.width = Math.min(window.innerWidth / 2, 640);
      height = canvas.height = Math.min(window.innerHeight / 2, 360);
      imgData = ctx.createImageData(width, height);
      buffer32 = new Uint32Array(imgData.data.buffer);
      len = buffer32.length;
    });

    requestAnimationFrame(renderGrain);
  }

  // ==========================================
  // 3. HERO CINEMATIC SCENE GENERATIVE CANVAS
  // ==========================================
  function initHeroCanvas() {
    const canvas = document.getElementById("hero-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let w = (canvas.width = 1280);
    let h = (canvas.height = 720);

    let particles = [];
    for (let i = 0; i < 70; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        length: Math.random() * 35 + 15,
        speed: Math.random() * 8 + 12,
        opacity: Math.random() * 0.35 + 0.1
      });
    }

    let flares = [
      { x: 340, y: 390, rx: 70, ry: 24, color: "rgba(229, 169, 60, 0.28)", speed: 0.3 },
      { x: 780, y: 370, rx: 85, ry: 30, color: "rgba(34, 211, 238, 0.22)", speed: -0.25 },
      { x: 580, y: 440, rx: 110, ry: 38, color: "rgba(224, 62, 62, 0.18)", speed: 0.18 },
      { x: 920, y: 320, rx: 55, ry: 20, color: "rgba(245, 158, 11, 0.24)", speed: -0.4 }
    ];

    let t = 0;

    function renderHero() {
      t += 0.02;

      ctx.fillStyle = "#090A0D";
      ctx.fillRect(0, 0, w, h);

      let grad1 = ctx.createRadialGradient(w * 0.35, h * 0.55, 10, w * 0.35, h * 0.55, w * 0.45);
      grad1.addColorStop(0, "rgba(229, 169, 60, 0.22)");
      grad1.addColorStop(0.5, "rgba(217, 119, 6, 0.08)");
      grad1.addColorStop(1, "transparent");
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, w, h);

      let grad2 = ctx.createRadialGradient(w * 0.72, h * 0.48, 10, w * 0.72, h * 0.48, w * 0.4);
      grad2.addColorStop(0, "rgba(34, 211, 238, 0.2)");
      grad2.addColorStop(0.5, "rgba(2, 132, 199, 0.06)");
      grad2.addColorStop(1, "transparent");
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, w, h);

      let groundY = h * 0.72;
      let asphaltGrad = ctx.createLinearGradient(0, groundY, 0, h);
      asphaltGrad.addColorStop(0, "#08090C");
      asphaltGrad.addColorStop(1, "#040406");
      ctx.fillStyle = asphaltGrad;
      ctx.fillRect(0, groundY, w, h - groundY);

      flares.forEach(f => {
        let offsetX = Math.sin(t * f.speed) * 20;
        let offsetY = Math.cos(t * f.speed * 0.8) * 8;
        ctx.save();
        ctx.fillStyle = f.color;
        ctx.filter = "blur(14px)";
        ctx.beginPath();
        ctx.ellipse(f.x + offsetX, f.y + offsetY, f.rx, f.ry, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      let flareY = h * 0.62;
      let flareBreathing = Math.sin(t * 1.8) * 0.15 + 0.85;

      ctx.save();
      ctx.strokeStyle = `rgba(56, 189, 248, ${0.45 * flareBreathing})`;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(0, flareY);
      ctx.lineTo(w, flareY);
      ctx.stroke();
      ctx.restore();

      ctx.strokeStyle = "rgba(148, 163, 184, 0.28)";
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      particles.forEach(p => {
        p.y += p.speed;
        p.x -= 1.8;
        if (p.y > h) {
          p.y = -20;
          p.x = Math.random() * w + 50;
        }
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x - 3, p.y + p.length);
      });
      ctx.stroke();

      requestAnimationFrame(renderHero);
    }

    requestAnimationFrame(renderHero);
  }

  // ==========================================
  // 3B. HERO VIDEO ENGINE & SOURCE MANAGER
  // ==========================================
  function initHeroVideoEngine() {
    const video = document.getElementById("hero-video");
    const canvas = document.getElementById("hero-canvas");
    const modal = document.getElementById("video-source-modal");
    const closeModalBtn = document.getElementById("video-modal-close-btn");
    const dropzone = document.getElementById("video-dropzone");
    const fileInput = document.getElementById("local-video-input");
    const urlForm = document.getElementById("video-url-form");
    const urlInput = document.getElementById("custom-video-input");
    const presetBtns = document.querySelectorAll(".video-preset-btn");

    if (!video) return;

    const videoMuteToggle = document.getElementById("video-mute-toggle");
    const videoMuteLabel = document.getElementById("video-mute-label");
    const floatingUnmuteCue = document.getElementById("floating-unmute-cue");

    function setSoundState(unmuted) {
      state.heroVideoMuted = !unmuted;
      video.muted = !unmuted;
      if (videoMuteToggle) {
        if (unmuted) {
          videoMuteToggle.classList.add("active");
          videoMuteToggle.classList.remove("is-muted");
          if (videoMuteLabel) videoMuteLabel.textContent = "SOUND ON";
        } else {
          videoMuteToggle.classList.remove("active");
          videoMuteToggle.classList.add("is-muted");
          if (videoMuteLabel) videoMuteLabel.textContent = "MUTED";
        }
      }
      if (floatingUnmuteCue) {
        if (unmuted) {
          floatingUnmuteCue.classList.add("is-hidden");
        } else {
          floatingUnmuteCue.classList.remove("is-hidden");
        }
      }
    }

    // Play continuously with sound
    video.muted = false;
    video.volume = 1.0;
    video.play().then(() => {
      setSoundState(true);
    }).catch(() => {
      video.muted = true;
      video.play().catch(() => {});
      setSoundState(false);

      const autoUnmute = () => {
        setSoundState(true);
        video.play().catch(() => {});
        window.removeEventListener("click", autoUnmute);
        window.removeEventListener("keydown", autoUnmute);
        window.removeEventListener("touchstart", autoUnmute);
      };
      window.addEventListener("click", autoUnmute, { once: true });
      window.addEventListener("keydown", autoUnmute, { once: true });
      window.addEventListener("touchstart", autoUnmute, { once: true });
    });

    if (videoMuteToggle) {
      videoMuteToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        const shouldUnmute = video.muted;
        setSoundState(shouldUnmute);
        if (shouldUnmute) {
          video.play().catch(() => {});
        }
      });
    }

    if (floatingUnmuteCue) {
      floatingUnmuteCue.addEventListener("click", (e) => {
        e.stopPropagation();
        setSoundState(true);
        video.play().catch(() => {});
      });
    }

    video.addEventListener("click", () => {
      if (video.muted) {
        setSoundState(true);
      } else if (video.paused) {
        video.play().catch(() => {});
      }
    });

    const errorBanner = document.getElementById("hero-video-error-banner");
    const errorDesc = document.getElementById("video-error-desc");
    const revertBtn = document.getElementById("revert-video-btn");

    if (revertBtn) {
      revertBtn.addEventListener("click", () => {
        if (errorBanner) errorBanner.classList.remove("is-visible");
        video.src = "assets/hero_reel.mp4";
        video.load();
        video.play().catch(() => {});
      });
    }

    video.addEventListener("error", () => {
      if (errorDesc) {
        errorDesc.innerHTML = `Web browsers require the <strong>H.264 (AVC)</strong> video codec.<br><br>
          If recorded in HEVC/ProRes, right-click file in Mac Finder ➔ <em>Quick Actions</em> ➔ <em>Encode Selected Video Files</em> (choose 1080p).`;
      }
      if (errorBanner) errorBanner.classList.add("is-visible");
    });

    video.addEventListener("loadeddata", () => {
      if (errorBanner) errorBanner.classList.remove("is-visible");
    });

    function closeVideoModal() {
      if (modal) modal.classList.remove("is-open");
    }

    if (closeModalBtn) closeModalBtn.addEventListener("click", closeVideoModal);
    if (modal) {
      modal.addEventListener("click", e => {
        if (e.target === modal) closeVideoModal();
      });
    }

    function loadLocalVideoFile(file) {
      if (!file) return;
      if (!file.type.startsWith("video/") && !file.name.match(/\.(mp4|mov|webm|ogg|m4v)$/i)) {
        alert("Please select a valid video file (.mp4, .mov, or .webm)");
        return;
      }

      if (state.lastBlobUrl) {
        URL.revokeObjectURL(state.lastBlobUrl);
      }

      const objectUrl = URL.createObjectURL(file);
      state.lastBlobUrl = objectUrl;
      state.currentHeroVideoUrl = objectUrl;

      video.src = objectUrl;
      video.load();
      video.play().catch(() => {
        video.muted = true;
        video.play().catch(() => {});
      });

      closeVideoModal();
    }

    if (dropzone && fileInput) {
      dropzone.addEventListener("click", () => fileInput.click());
      fileInput.addEventListener("change", e => {
        if (e.target.files && e.target.files.length > 0) {
          loadLocalVideoFile(e.target.files[0]);
        }
      });
    }

    if (urlForm) {
      urlForm.addEventListener("submit", e => {
        e.preventDefault();
        const customUrl = urlInput.value.trim();
        if (!customUrl) return;

        state.currentHeroVideoUrl = customUrl;
        video.src = customUrl;
        video.load();
        video.play().catch(() => {});
        urlInput.value = "";
        closeVideoModal();
      });
    }

    presetBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const url = btn.getAttribute("data-url");
        if (url === "canvas-generative") {
          video.classList.add("is-hidden");
          video.pause();
          if (canvas) canvas.style.display = "block";
        } else {
          video.classList.remove("is-hidden");
          if (canvas) canvas.style.display = "none";
          state.currentHeroVideoUrl = url;
          video.src = url;
          video.load();
          video.play().catch(() => {});
        }
        closeVideoModal();
      });
    });
  }

  // ==========================================
  // 4. WEB AUDIO AMBIENT DRONE SYNTHESIZER
  // ==========================================
  let audioCtx = null;
  let droneGain = null;

  function initAmbientAudioEngine() {
    const audioBtn = document.getElementById("audio-toggle-btn");
    if (!audioBtn) return;

    audioBtn.addEventListener("click", () => {
      if (!audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContext();
        setupDroneSynthesizer();
      }

      if (audioCtx.state === "suspended") {
        audioCtx.resume();
      }

      state.isAmbientAudioActive = !state.isAmbientAudioActive;

      if (state.isAmbientAudioActive) {
        audioBtn.classList.add("is-active");
        if (droneGain) droneGain.gain.setTargetAtTime(0.08, audioCtx.currentTime, 0.8);
      } else {
        audioBtn.classList.remove("is-active");
        if (droneGain) droneGain.gain.setTargetAtTime(0, audioCtx.currentTime, 0.4);
      }
    });
  }

  function setupDroneSynthesizer() {
    const masterBus = audioCtx.createGain();
    masterBus.gain.setValueAtTime(0, audioCtx.currentTime);
    masterBus.connect(audioCtx.destination);
    droneGain = masterBus;

    const osc1 = audioCtx.createOscillator();
    osc1.type = "sine";
    osc1.frequency.setValueAtTime(108, audioCtx.currentTime);

    const osc2 = audioCtx.createOscillator();
    osc2.type = "triangle";
    osc2.frequency.setValueAtTime(216.5, audioCtx.currentTime);

    const filter = audioCtx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(320, audioCtx.currentTime);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(masterBus);

    osc1.start();
    osc2.start();
  }

  // ==========================================
  // 5. EPISODE GRID RENDERING & FILTERING
  // ==========================================
  function renderEpisodeGrid() {
    const gridContainer = document.getElementById("episodes-grid");
    if (!gridContainer) return;

    let filtered = EPISODES_DATA.filter(item => {
      if (state.currentCategory !== "ALL" && item.category !== state.currentCategory) {
        return false;
      }
      if (state.searchQuery.trim() !== "") {
        let q = state.searchQuery.toLowerCase();
        let matchTitle = item.title.toLowerCase().includes(q);
        let matchDir = item.director.toLowerCase().includes(q);
        let matchStock = item.stock.toLowerCase().includes(q);
        let matchSub = item.subtitle.toLowerCase().includes(q);
        return matchTitle || matchDir || matchStock || matchSub;
      }
      return true;
    });

    if (filtered.length === 0) {
      gridContainer.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 48px; text-align: center; color: var(--text-muted); font-family: var(--font-mono);">
          [ NO ARCHIVAL RELEASES MATCHING SEARCH CRITERIA ]
        </div>
      `;
      return;
    }

    gridContainer.innerHTML = filtered
      .map(ep => {
        return `
        <article class="episode-card" data-id="${ep.id}">
          <div class="card-thumb-wrapper" data-media-target="${ep.id}">
            <img class="card-thumb-img" src="${ep.poster}" alt="${ep.title} Still" loading="lazy" />
            
            <div class="card-badge-top-left">
              <span class="tag-badge ${ep.category === 'STATEMENT PIECE' ? 'gold' : ''}">${ep.category}</span>
            </div>

            <div class="card-badge-top-right">
              ${ep.runtime}
            </div>

            <div class="card-badge-bottom-right">
              ₹${(Math.round(ep.price * 85 / 100) * 100).toLocaleString("en-IN")} ($${ep.price})
            </div>

            <button class="card-hover-play-btn" data-action="screen-ep" data-id="${ep.id}" aria-label="Explore ${ep.title}">
              <svg viewBox="0 0 24 24"><polygon points="6,3 20,12 6,21" /></svg>
            </button>
          </div>

          <div class="card-content">
            <div class="card-ep-designation">${ep.designation}</div>
            <div style="display:flex; justify-content:space-between; align-items:baseline;">
              <h3 class="card-title">${ep.title}</h3>
              <span class="card-price-badge">₹${(Math.round(ep.price * 85 / 100) * 100).toLocaleString("en-IN")} ($${ep.price})</span>
            </div>
            <p class="card-synopsis">${ep.logline}</p>
            
            <div class="card-commerce-row">
              <div class="card-size-selector" data-target="${ep.id}">
                <button type="button" class="size-btn" data-size="S">S</button>
                <button type="button" class="size-btn active" data-size="M">M</button>
                <button type="button" class="size-btn" data-size="L">L</button>
                <button type="button" class="size-btn" data-size="XL">XL</button>
              </div>
              <button type="button" class="card-add-btn" onclick="handleCardAddToCart('${ep.id}', this)">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                <span>ADD TO BAG</span>
              </button>
            </div>

            <div class="card-footer-strip" style="margin-top: 14px;">
              <span class="card-director">CURATED BY ${ep.curator.toUpperCase()}</span>
              <div class="card-actions-quick">
                <button class="card-action-link" data-action="notes-ep" data-id="${ep.id}">DETAILS ↗</button>
                <button class="card-action-link" data-action="screen-ep" data-id="${ep.id}">LOOKBOOK ▶</button>
              </div>
            </div>
          </div>
        </article>
      `;
      })
      .join("");

    attachCardEventListeners();
  }

  // ==========================================
  // 6. SCRIPT LEDGER TABLE RENDERING
  // ==========================================
  function renderScriptLedger() {
    const tableBody = document.getElementById("script-ledger-body");
    if (!tableBody) return;

    let filtered = EPISODES_DATA.filter(item => {
      if (state.currentCategory !== "ALL" && item.category !== state.currentCategory) {
        return false;
      }
      if (state.searchQuery.trim() !== "") {
        let q = state.searchQuery.toLowerCase();
        let matchTitle = item.title.toLowerCase().includes(q);
        let matchDir = item.director.toLowerCase().includes(q);
        let matchStock = item.stock.toLowerCase().includes(q);
        return matchTitle || matchDir || matchStock;
      }
      return true;
    });

    tableBody.innerHTML = filtered
      .map(ep => {
        return `
        <tr class="ledger-row" data-id="${ep.id}" data-poster="${ep.poster}">
          <td class="ledger-ep-num">DROP ${ep.epNumber}</td>
          <td>${ep.issue}</td>
          <td class="ledger-title-col">
            <span class="ledger-title-text">${ep.title}</span>
            <span class="ledger-subtitle-text">${ep.subtitle}</span>
          </td>
          <td><span class="tag-badge ${ep.category === 'STATEMENT PIECE' ? 'gold' : ''}">${ep.category}</span></td>
          <td>${ep.stock}</td>
          <td><strong style="color:var(--accent-gold);">₹${(Math.round(ep.price * 85 / 100) * 100).toLocaleString("en-IN")} ($${ep.price})</strong></td>
          <td>${ep.curator}</td>
          <td>${ep.releaseDate}</td>
          <td>
            <div style="display:flex; gap:8px;">
              <button class="ledger-action-btn" onclick="addToCart('${ep.id}', 'M', 1)">BAG +</button>
              <button class="ledger-action-btn" data-action="notes-ep" data-id="${ep.id}">DETAILS ↗</button>
            </div>
          </td>
        </tr>
      `;
      })
      .join("");

    attachLedgerHoverPreview();
  }

  function attachLedgerHoverPreview() {
    const previewEl = document.getElementById("ledger-float-preview");
    if (!previewEl) return;
    const previewImg = previewEl.querySelector("img");
    const rows = document.querySelectorAll(".ledger-row");

    rows.forEach(row => {
      row.addEventListener("mouseenter", () => {
        const poster = row.getAttribute("data-poster");
        if (poster) {
          previewImg.src = poster;
          previewEl.classList.add("is-visible");
        }
      });

      row.addEventListener("mousemove", e => {
        previewEl.style.left = `${e.clientX + 20}px`;
        previewEl.style.top = `${e.clientY - 60}px`;
      });

      row.addEventListener("mouseleave", () => {
        previewEl.classList.remove("is-visible");
      });
    });
  }

  function attachCardEventListeners() {
    document.querySelectorAll('[data-action="screen-ep"]').forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();
        const id = btn.getAttribute("data-id");
        openScreeningRoom(id);
      });
    });

    document.querySelectorAll('[data-action="notes-ep"]').forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();
        const id = btn.getAttribute("data-id");
        openCuratorialNotes(id);
      });
    });

    document.querySelectorAll(".card-thumb-wrapper").forEach(wrapper => {
      wrapper.addEventListener("click", () => {
        const id = wrapper.getAttribute("data-media-target");
        openScreeningRoom(id);
      });
    });
  }

  // ==========================================
  // 7. CURATORIAL DISPATCH & PRODUCTION NOTES MODAL
  // ==========================================
  function openCuratorialNotes(epId) {
    const ep = EPISODES_DATA.find(item => item.id === epId) || EPISODES_DATA[0];
    state.currentEpisodeForNotes = ep;

    const modal = document.getElementById("curatorial-modal");
    if (!modal) return;

    document.getElementById("drawer-issue").textContent = `${ep.issue} · DISPATCH`;
    document.getElementById("drawer-title").textContent = ep.title;
    document.getElementById("drawer-subtitle").textContent = ep.subtitle;
    document.getElementById("drawer-director").textContent = `ATELIER: ${ep.curator.toUpperCase()}`;
    document.getElementById("drawer-runtime").textContent = `WEIGHT ${ep.runtime}`;
    document.getElementById("drawer-stock").textContent = ep.stock.toUpperCase();
    document.getElementById("drawer-aspect").textContent = ep.aspectRatio;

    // Price inside curatorial drawer
    const priceEl = document.getElementById("drawer-commerce-price");
    if (priceEl) priceEl.textContent = `₹${(Math.round(ep.price * 85 / 100) * 100).toLocaleString("en-IN")} / $${ep.price}`;

    const quoteEl = document.getElementById("drawer-quote");
    if (quoteEl) {
      quoteEl.textContent = `“${ep.directorQuote}” — ${ep.director}`;
    }

    const p1 = document.getElementById("drawer-p1");
    const p2 = document.getElementById("drawer-p2");
    if (p1 && ep.essay[0]) p1.textContent = ep.essay[0];
    if (p2 && ep.essay[1]) p2.textContent = ep.essay[1];

    document.getElementById("spec-camera").textContent = ep.camera;
    document.getElementById("spec-lens").textContent = ep.lens;
    document.getElementById("spec-stock").textContent = ep.stock;
    document.getElementById("spec-location").textContent = ep.location;
    document.getElementById("spec-audio").textContent = ep.audioFormat;
    document.getElementById("spec-date").textContent = ep.releaseDate;

    const stillsContainer = document.getElementById("drawer-stills-strip");
    if (stillsContainer && ep.stills) {
      stillsContainer.innerHTML = ep.stills
        .map(still => {
          return `
          <div class="contact-frame-card">
            <img src="${still.img}" alt="${still.label}" loading="lazy" />
            <div class="contact-frame-caption">${still.label}</div>
          </div>
        `;
        })
        .join("");
    }

    modal.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeCuratorialNotes() {
    const modal = document.getElementById("curatorial-modal");
    if (modal) modal.classList.remove("is-open");
    const cartDrawer = document.getElementById('cart-drawer-backdrop');
    if (!cartDrawer?.classList.contains('is-open')) {
      document.body.style.overflow = "";
    }
  }

  // ==========================================
  // 8. FULL CINEMA SCREENING ROOM MODAL
  // ==========================================
  let screeningCanvasCtx = null;
  let screeningAnimFrame = null;

  function openScreeningRoom(epId) {
    const ep = EPISODES_DATA.find(item => item.id === epId) || EPISODES_DATA[0];
    state.currentEpisodeForScreening = ep;

    const modal = document.getElementById("screening-room-modal");
    if (!modal) return;

    document.getElementById("screening-title-display").textContent = `${ep.designation} // "${ep.title}"`;
    document.getElementById("screening-director-display").textContent = `ATELIER: ${ep.curator.toUpperCase()}`;

    modal.classList.add("is-active");
    state.screeningActive = true;
    state.screeningPlaying = true;
    document.body.style.overflow = "hidden";

    startScreeningPlaybackSimulator();
  }

  function closeScreeningRoom() {
    const modal = document.getElementById("screening-room-modal");
    if (modal) modal.classList.remove("is-active");
    state.screeningActive = false;
    state.screeningPlaying = false;
    document.body.style.overflow = "";
    if (screeningAnimFrame) cancelAnimationFrame(screeningAnimFrame);
  }

  function startScreeningPlaybackSimulator() {
    const canvas = document.getElementById("screening-canvas");
    if (!canvas) return;
    screeningCanvasCtx = canvas.getContext("2d");

    let w = (canvas.width = 1280);
    let h = (canvas.height = 720);

    const ep = state.currentEpisodeForScreening;
    const posterImg = new Image();
    posterImg.src = ep.poster;

    let subBox = document.getElementById("screening-subtitles");
    let timecodeDisplay = document.getElementById("screening-tc");
    let trackFill = document.getElementById("screening-track-fill");

    function renderScreening() {
      if (!state.screeningActive) return;

      if (state.screeningPlaying) {
        state.screeningProgress += 0.0004;
        if (state.screeningProgress > 1) state.screeningProgress = 0;
      }

      screeningCanvasCtx.drawImage(posterImg, 0, 0, w, h);

      screeningCanvasCtx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.02})`;
      screeningCanvasCtx.fillRect(0, 0, w, h);

      if (state.subtitlesLanguage !== "off" && subBox) {
        let currentCue = SUBTITLE_CUES.find(
          c => state.screeningProgress >= c.time && state.screeningProgress < c.time + 0.12
        );
        if (currentCue) {
          subBox.textContent = currentCue.text;
          subBox.style.opacity = "1";
        } else {
          subBox.style.opacity = "0";
        }
      } else if (subBox) {
        subBox.style.opacity = "0";
      }

      let totalSec = 275 * state.screeningProgress;
      let m = Math.floor(totalSec / 60);
      let s = Math.floor(totalSec % 60);
      let f = Math.floor((totalSec % 1) * 24);
      if (timecodeDisplay) {
        timecodeDisplay.textContent = `00:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}:${String(f).padStart(2, "0")} / 00:04:35:00`;
      }

      if (trackFill) {
        trackFill.style.width = `${state.screeningProgress * 100}%`;
      }

      screeningAnimFrame = requestAnimationFrame(renderScreening);
    }

    posterImg.onload = () => {
      renderScreening();
    };
    if (posterImg.complete) {
      renderScreening();
    }
  }

  // ==========================================
  // 9. LENS-INSPIRED CUSTOM CURSOR
  // ==========================================
  function initLensCursor() {
    const cursor = document.getElementById("lens-cursor");
    if (!cursor) return;

    const label = cursor.querySelector(".lens-cursor-label");
    let mouseX = -100,
      mouseY = -100;
    let cursorX = -100,
      cursorY = -100;

    document.body.classList.add("has-custom-cursor");

    window.addEventListener("mousemove", e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function updateCursor() {
      cursorX += (mouseX - cursorX) * 0.22;
      cursorY += (mouseY - cursorY) * 0.22;

      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;

      requestAnimationFrame(updateCursor);
    }
    requestAnimationFrame(updateCursor);

    document.addEventListener("mouseover", e => {
      const target = e.target;
      const mediaContainer = target.closest(".campaign-img-wrapper, .card-thumb-wrapper, #screening-canvas");
      const readBtn = target.closest('.btn-outline-notes, [data-action="notes-ep"]');
      const interactive = target.closest("button, a, input, select, .view-btn, .filter-btn, .size-btn, .size-pill");

      if (mediaContainer) {
        cursor.className = "lens-cursor is-hovering-media";
        if (label) label.textContent = "VIEW";
      } else if (readBtn) {
        cursor.className = "lens-cursor is-hovering-media";
        if (label) label.textContent = "SPEC";
      } else if (interactive) {
        cursor.className = "lens-cursor is-hovering-interactive";
      } else {
        cursor.className = "lens-cursor";
      }
    });
  }

  // ==========================================
  // 10. NEWSLETTER DISPATCH RECEIPT TOAST
  // ==========================================
  function initDispatchForm() {
    const form = document.getElementById("dispatch-form");
    const toast = document.getElementById("toast-receipt");
    if (!form || !toast) return;

    form.addEventListener("submit", e => {
      e.preventDefault();
      const input = form.querySelector(".dispatch-input");
      const email = input.value.trim();
      if (!email) return;

      const randomSerial = "TIE-" + Math.floor(1000 + Math.random() * 9000);
      toast.querySelector(".toast-serial").textContent = `[ DISPATCH PASS #${randomSerial} ]`;
      toast.querySelector(".toast-desc").textContent = `Transmitted to ${email} · Next release allocation registered.`;

      toast.classList.add("is-shown");
      input.value = "";

      setTimeout(() => {
        toast.classList.remove("is-shown");
      }, 5500);
    });
  }

  // ==========================================
  // 11. ARCHIVE CONTROLS (FILTERS & VIEWS)
  // ==========================================
  function initArchiveControls() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        state.currentCategory = btn.getAttribute("data-category");
        renderEpisodeGrid();
        renderScriptLedger();
      });
    });

    const viewBtns = document.querySelectorAll(".view-btn");
    const gridEl = document.getElementById("episodes-grid");
    const ledgerEl = document.getElementById("script-index-container");

    viewBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        viewBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const mode = btn.getAttribute("data-mode");
        state.viewMode = mode;

        if (mode === "grid") {
          gridEl.classList.remove("is-hidden");
          ledgerEl.classList.remove("is-active");
        } else {
          gridEl.classList.add("is-hidden");
          ledgerEl.classList.add("is-active");
        }
      });
    });

    const searchInput = document.getElementById("search-episodes");
    if (searchInput) {
      searchInput.addEventListener("input", e => {
        state.searchQuery = e.target.value;
        renderEpisodeGrid();
        renderScriptLedger();
      });
    }
  }

  // ==========================================
  // 12. PLAYBACK CONTROLS FOR SCREENING ROOM
  // ==========================================
  function initPlaybackControls() {
    const screeningPlayToggle = document.getElementById("screening-play-toggle");
    if (screeningPlayToggle) {
      screeningPlayToggle.addEventListener("click", () => {
        state.screeningPlaying = !state.screeningPlaying;
        screeningPlayToggle.innerHTML = state.screeningPlaying
          ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`
          : `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><polygon points="6,4 20,12 6,20"/></svg>`;
      });
    }

    const screeningTrack = document.getElementById("screening-track");
    if (screeningTrack) {
      screeningTrack.addEventListener("click", e => {
        const rect = screeningTrack.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        state.screeningProgress = Math.max(0, Math.min(1, clickX / rect.width));
      });
    }

    const stepBackBtn = document.getElementById("screening-step-back");
    const stepFwdBtn = document.getElementById("screening-step-forward");
    if (stepBackBtn) {
      stepBackBtn.addEventListener("click", () => {
        state.screeningPlaying = false;
        state.screeningProgress = Math.max(0, state.screeningProgress - 1 / (275 * 24));
      });
    }
    if (stepFwdBtn) {
      stepFwdBtn.addEventListener("click", () => {
        state.screeningPlaying = false;
        state.screeningProgress = Math.min(1, state.screeningProgress + 1 / (275 * 24));
      });
    }

    const subSelect = document.getElementById("screening-subtitles-select");
    if (subSelect) {
      subSelect.addEventListener("change", e => {
        state.subtitlesLanguage = e.target.value;
      });
    }

    const closeNotesBtn = document.getElementById("curatorial-drawer-close");
    if (closeNotesBtn) closeNotesBtn.addEventListener("click", closeCuratorialNotes);

    const closeScreeningBtn = document.getElementById("screening-room-close-btn");
    if (closeScreeningBtn) closeScreeningBtn.addEventListener("click", closeScreeningRoom);

    const curatorialBackdrop = document.getElementById("curatorial-modal");
    if (curatorialBackdrop) {
      curatorialBackdrop.addEventListener("click", e => {
        if (e.target === curatorialBackdrop) closeCuratorialNotes();
      });
    }
  }

  // ==========================================
  // 13. KEYBOARD SHORTCUTS
  // ==========================================
  function initKeyboardShortcuts() {
    window.addEventListener("keydown", e => {
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA" || e.target.tagName === "SELECT") return;

      if (e.code === "Space") {
        e.preventDefault();
        if (state.screeningActive) {
          const playBtn = document.getElementById("screening-play-toggle");
          if (playBtn) playBtn.click();
        } else {
          state.heroPlaying = !state.heroPlaying;
          const heroVideo = document.getElementById("hero-video");
          if (heroVideo) {
            if (state.heroPlaying) heroVideo.play().catch(() => {});
            else heroVideo.pause();
          }
        }
      } else if (e.code === "KeyM") {
        const muteToggle = document.getElementById("video-mute-toggle");
        if (muteToggle) muteToggle.click();
      } else if (e.code === "KeyB") {
        openCartDrawer();
      } else if (e.code === "Escape") {
        closeCuratorialNotes();
        closeScreeningRoom();
        closeCartDrawer();
        const checkoutModal = document.getElementById("checkout-modal-backdrop");
        if (checkoutModal) checkoutModal.classList.remove("is-open");
        const vModal = document.getElementById("video-source-modal");
        if (vModal) vModal.classList.remove("is-open");
      }
    });
  }

  // ==========================================
  // INITIALIZATION ON DOM READY
  // ==========================================
  document.addEventListener("DOMContentLoaded", () => {
    initTimecodeEngine();
    initFilmGrain();
    initHeroCanvas();
    initHeroVideoEngine();
    initAmbientAudioEngine();
    renderEpisodeGrid();
    renderScriptLedger();
    initArchiveControls();
    initPlaybackControls();
    initDispatchForm();
    initLensCursor();
    initKeyboardShortcuts();
    initCartAndCheckoutBindings();
  });

  // Expose global handles
  window.openCuratorialNotes = openCuratorialNotes;
  window.openScreeningRoom = openScreeningRoom;
  window.closeCuratorialNotes = closeCuratorialNotes;
  window.closeScreeningRoom = closeScreeningRoom;
  window.addToCart = addToCart;
  window.removeFromCart = removeFromCart;
  window.updateCartQuantity = updateCartQuantity;
  window.openCartDrawer = openCartDrawer;
  window.closeCartDrawer = closeCartDrawer;
  window.handleCardAddToCart = handleCardAddToCart;
  window.handleDrawerAddToCart = handleDrawerAddToCart;
  window.tieState = state;
  window.tieEpisodes = EPISODES_DATA;
})();
