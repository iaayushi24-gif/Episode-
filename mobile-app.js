/**
 * EPISODE ATELIER — Mobile App Experience Engine
 * High-Quality Statement Streetwear & Customization Canvas
 * Crafted in New Delhi · Dispatched Worldwide
 */

(function () {
  'use strict';

  // ==========================================
  // CATALOG DATA (All 8 Unique Garments)
  // ==========================================
  const PRODUCTS = [
    {
      id: "ep-08",
      epNumber: "08",
      title: "Scarlet Floral Embroidered Atelier Jacket",
      subtitle: "Vibrant Scarlet Damask · Tactile Floral Silk Embroidery",
      category: "STATEMENT PIECE",
      categoryTag: "Statement",
      price: 380,
      inrPrice: 31500,
      sizes: ["S", "M", "L", "XL"],
      image: "assets/look08_scarlet_embroidered_jacket.jpg",
      weight: "480 GSM",
      atelier: "New Delhi Atelier (Shahpur Jat)",
      provenance: "North Indian handloom damask with hand-guided zardozi silk embroidery. Designed as an imposing statement piece for Gen Z creatives.",
      featured: true
    },
    {
      id: "ep-07",
      epNumber: "07",
      title: "“Kinsale” Ornate Jacquard Wrap Jacket",
      subtitle: "Crimson & Gold Brocade · Stand-Up Architectural Collar",
      category: "STATEMENT PIECE",
      categoryTag: "Statement",
      price: 340,
      inrPrice: 28500,
      sizes: ["S", "M", "L", "XL"],
      image: "assets/look01_ornate_wrap.jpg",
      weight: "540 GSM",
      atelier: "New Delhi Atelier (Shahpur Jat)",
      provenance: "Heavyweight crimson & gold brocade weave with structured stand-up wrap collar. No accessory overload required.",
      featured: true
    },
    {
      id: "ep-06",
      epNumber: "06",
      title: "Imperial Floral Brocade Tailored Suit",
      subtitle: "Botanical Tapestry Weave · Custom Relaxed-Taper Silhouette",
      category: "STATEMENT PIECE",
      categoryTag: "Statement",
      price: 420,
      inrPrice: 35000,
      sizes: ["S", "M", "L", "XL"],
      image: "assets/look02_brocade_suit.jpg",
      weight: "520 GSM",
      atelier: "New Delhi Atelier (Shahpur Jat)",
      provenance: "Architectural botanical brocade tapestry tailored to defy repetitive fast fashion.",
      featured: false
    },
    {
      id: "ep-05",
      epNumber: "05",
      title: "Nocturne Pleated Liquid Emerald Noir Tunic",
      subtitle: "Liquid Metallic Lamé · Cinched Waist Hardware",
      category: "CUSTOM CANVAS",
      categoryTag: "Canvas",
      price: 280,
      inrPrice: 23500,
      sizes: ["S", "M", "L", "XL"],
      image: "assets/look03_emerald_metallic.jpg",
      weight: "360 GSM",
      atelier: "New Delhi Atelier (Shahpur Jat)",
      provenance: "Micro-pleated liquid lamé in deep emerald with customizable cinch waist harness.",
      featured: false
    },
    {
      id: "ep-04",
      epNumber: "04",
      title: "Monochrome Dahlia Oversized Camp Shirt",
      subtitle: "240 GSM Viscose Twill · Charcoal Floral Motif",
      category: "STATEMENT PIECE",
      categoryTag: "Statement",
      price: 195,
      inrPrice: 16500,
      sizes: ["S", "M", "L", "XL"],
      image: "assets/look04_monochrome_dahlia.jpg",
      weight: "240 GSM",
      atelier: "New Delhi Atelier (Shahpur Jat)",
      provenance: "Hand-illustrated monochrome dahlia graphic with dropped Cuban camp collar.",
      featured: false
    },
    {
      id: "ep-03",
      epNumber: "03",
      title: "Sage Mineral Slub Linen Overshirt & Plaid Pant",
      subtitle: "Garment-Dyed Mineral Slub Linen · Tartan Wool Pant",
      category: "CUSTOM CANVAS",
      categoryTag: "Canvas",
      price: 260,
      inrPrice: 21500,
      sizes: ["S", "M", "L", "XL"],
      image: "assets/look05_sage_overshirt.jpg",
      weight: "380 GSM",
      atelier: "New Delhi Atelier (Shahpur Jat)",
      provenance: "Textured organic Indian slub linen with natural horn buttons and tailored pleats.",
      featured: false
    },
    {
      id: "ep-02",
      epNumber: "02",
      title: "Deconstructed Paisley Draped Hood Halter & Denim",
      subtitle: "Fluid Paisley Silk · Folded Raw Indigo Selvedge Denim",
      category: "CUSTOM CANVAS",
      categoryTag: "Canvas",
      price: 230,
      inrPrice: 19500,
      sizes: ["S", "M", "L", "XL"],
      image: "assets/look06_draped_hood.png",
      weight: "14.5 OZ",
      atelier: "New Delhi Atelier (Shahpur Jat)",
      provenance: "Avant-garde draped cowl hood in moody paisley paired with folded raw denim.",
      featured: false
    },
    {
      id: "ep-01",
      epNumber: "01",
      title: "“Hot Seat” Heavyweight Graphic Boxy Tee",
      subtitle: "320 GSM Ring-Spun Cotton · Tactile Red Felt Appliqué",
      category: "ATELIER CAPSULE",
      categoryTag: "Capsule",
      price: 125,
      inrPrice: 10500,
      sizes: ["S", "M", "L", "XL"],
      image: "assets/look07_hotseat_tee.jpg",
      weight: "320 GSM",
      atelier: "New Delhi Atelier (Shahpur Jat)",
      provenance: "Dense 320 GSM Indian cotton jersey with tactile red felt lettering on lower hem.",
      featured: false
    }
  ];

  // ==========================================
  // APP STATE
  // ==========================================
  const state = {
    currentTab: 'reel',
    activeFilter: 'ALL',
    searchQuery: '',
    selectedSizes: {}, // productId -> size
    likesCount: 1428,
    isLiked: false,
    soundActive: false
  };

  // Cart
  let cart = [];
  try {
    const saved = localStorage.getItem('episode_mobile_cart_v1');
    if (saved) cart = JSON.parse(saved);
  } catch (e) {
    cart = [];
  }

  function saveCart() {
    try {
      localStorage.setItem('episode_mobile_cart_v1', JSON.stringify(cart));
    } catch (e) {}
    renderCart();
  }

  function addToCart(productId, size = 'M', quantity = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(c => c.id === productId && c.size === size);
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({
        id: product.id,
        epNumber: product.epNumber,
        title: product.title,
        price: product.price,
        inrPrice: product.inrPrice,
        size: size,
        image: product.image,
        category: product.category,
        quantity: quantity
      });
    }

    saveCart();
    triggerHaptic();
  }

  function updateQuantity(index, delta) {
    if (!cart[index]) return;
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
    saveCart();
    triggerHaptic();
  }

  function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    triggerHaptic();
  }

  function triggerHaptic() {
    if (navigator.vibrate) {
      navigator.vibrate(25);
    }
  }

  // ==========================================
  // TAB NAVIGATION
  // ==========================================
  function switchTab(tabId) {
    state.currentTab = tabId;

    // Update Tab screens
    document.querySelectorAll('.app-tab-screen').forEach(screen => {
      screen.classList.toggle('is-active', screen.id === `tab-${tabId}`);
    });

    // Update Bottom Nav tabs
    document.querySelectorAll('.app-nav-tab').forEach(tab => {
      tab.classList.toggle('is-active', tab.getAttribute('data-tab') === tabId);
    });

    // If switching away from reel, pause or manage audio if needed
    const video = document.getElementById('reel-video');
    if (video) {
      if (tabId === 'reel') {
        video.play().catch(() => {});
      }
    }

    triggerHaptic();
  }

  // ==========================================
  // REEL VIDEO & SOUND CONTROLS
  // ==========================================
  function initReel() {
    const video = document.getElementById('reel-video');
    const soundBtn = document.getElementById('app-sound-btn');
    const reelSoundBtn = document.getElementById('reel-sound-btn');
    const likeBtn = document.getElementById('reel-like-btn');
    const likeCountEl = document.getElementById('reel-like-count');
    const quickBuyBtn = document.getElementById('reel-quick-buy-btn');

    if (!video) return;

    function setSound(unmuted) {
      state.soundActive = unmuted;
      video.muted = !unmuted;
      if (soundBtn) {
        soundBtn.classList.toggle('is-active', unmuted);
        soundBtn.querySelector('.sound-label').textContent = unmuted ? 'SOUND ON' : 'MUTED';
      }
      if (reelSoundBtn) {
        reelSoundBtn.classList.toggle('is-active', unmuted);
      }
    }

    // Try autoplay with sound, fallback to muted if browser blocks
    video.muted = false;
    video.volume = 1.0;
    video.play().then(() => {
      setSound(true);
    }).catch(() => {
      video.muted = true;
      video.play().catch(() => {});
      setSound(false);

      const unlockAudio = () => {
        setSound(true);
        video.play().catch(() => {});
        window.removeEventListener('click', unlockAudio);
        window.removeEventListener('touchstart', unlockAudio);
      };
      window.addEventListener('click', unlockAudio, { once: true });
      window.addEventListener('touchstart', unlockAudio, { once: true });
    });

    // Toggle sound
    const toggleSound = (e) => {
      e.stopPropagation();
      setSound(video.muted);
      triggerHaptic();
    };

    if (soundBtn) soundBtn.addEventListener('click', toggleSound);
    if (reelSoundBtn) reelSoundBtn.addEventListener('click', toggleSound);

    // Like Button
    if (likeBtn) {
      likeBtn.addEventListener('click', () => {
        state.isLiked = !state.isLiked;
        state.likesCount += state.isLiked ? 1 : -1;
        likeBtn.classList.toggle('is-liked', state.isLiked);
        if (likeCountEl) likeCountEl.textContent = state.likesCount.toLocaleString();
        triggerHaptic();
      });
    }

    // Quick buy Look 08 from reel
    if (quickBuyBtn) {
      quickBuyBtn.addEventListener('click', () => {
        openProductSheet('ep-08');
      });
    }
  }

  // ==========================================
  // SHOP CATALOG RENDERING & FILTERING
  // ==========================================
  function renderShopGrid() {
    const grid = document.getElementById('shop-catalog-grid');
    if (!grid) return;

    const query = state.searchQuery.toLowerCase().trim();
    const filtered = PRODUCTS.filter(p => {
      const matchesFilter = state.activeFilter === 'ALL' || p.category === state.activeFilter;
      const matchesSearch = !query || p.title.toLowerCase().includes(query) || p.subtitle.toLowerCase().includes(query) || p.category.toLowerCase().includes(query);
      return matchesFilter && matchesSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 40px 16px; text-align: center; color: var(--text-muted); font-size: 12px; font-family: var(--font-mono);">
          NO GARMENTS FOUND FOR “${query.toUpperCase()}”
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(product => {
      const selectedSize = state.selectedSizes[product.id] || 'M';
      return `
        <div class="shop-item-card" data-id="${product.id}">
          <div class="shop-thumb-wrapper" onclick="window.openProductSheet('${product.id}')">
            <img src="${product.image}" alt="${product.title}" loading="lazy" />
            <div class="shop-drop-badge">DROP ${product.epNumber}</div>
          </div>
          <div class="shop-item-details">
            <div class="shop-item-spec">${product.categoryTag.toUpperCase()} · ${product.weight}</div>
            <h4 class="shop-item-title" onclick="window.openProductSheet('${product.id}')">${product.title}</h4>
            <div class="shop-item-price">₹${product.inrPrice.toLocaleString('en-IN')} <span style="font-size:10px; color:var(--text-muted); font-weight:400;">($${product.price})</span></div>
            
            <div class="shop-size-selector-row">
              ${['S', 'M', 'L', 'XL'].map(sz => `
                <button type="button" class="shop-mini-size-btn ${sz === selectedSize ? 'is-active' : ''}" 
                  onclick="window.selectShopSize('${product.id}', '${sz}', this)">${sz}</button>
              `).join('')}
            </div>

            <button type="button" class="shop-add-bag-btn" onclick="window.handleShopAdd('${product.id}', this)">
              ADD TO BAG
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  window.selectShopSize = function(productId, size, btn) {
    state.selectedSizes[productId] = size;
    const parent = btn.parentElement;
    parent.querySelectorAll('.shop-mini-size-btn').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    triggerHaptic();
  };

  window.handleShopAdd = function(productId, btn) {
    const size = state.selectedSizes[productId] || 'M';
    addToCart(productId, size, 1);

    const originalText = btn.innerHTML;
    btn.classList.add('is-added');
    btn.textContent = `✓ ADDED (${size})`;
    setTimeout(() => {
      btn.classList.remove('is-added');
      btn.innerHTML = originalText;
    }, 1200);
  };

  // ==========================================
  // CART / BAG SHEET RENDERING
  // ==========================================
  function renderCart() {
    const list = document.getElementById('app-cart-list');
    const badge = document.getElementById('app-bag-badge');
    const subtotalEl = document.getElementById('app-cart-subtotal');
    const inrSubtotalEl = document.getElementById('app-cart-inr-subtotal');
    const checkoutBtn = document.getElementById('app-checkout-btn');

    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const usdTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const inrTotal = cart.reduce((sum, item) => sum + item.inrPrice * item.quantity, 0);

    if (badge) {
      badge.textContent = totalCount;
      badge.style.display = totalCount > 0 ? 'flex' : 'none';
    }

    if (subtotalEl) subtotalEl.textContent = `$${usdTotal.toLocaleString()}`;
    if (inrSubtotalEl) inrSubtotalEl.textContent = `₹${inrTotal.toLocaleString('en-IN')}`;

    if (!list) return;

    if (cart.length === 0) {
      list.innerHTML = `
        <div style="padding: 36px 16px; text-align: center; color: var(--text-muted); font-size: 12px; font-family: var(--font-mono);">
          YOUR BAG IS CURRENTLY EMPTY.<br><br>
          <button type="button" class="reel-quick-buy-btn" style="display:inline-block; margin-top:8px;" onclick="window.closeSheet(); window.switchTab('shop');">
            EXPLORE ATELIER PIECES ↗
          </button>
        </div>
      `;
      if (checkoutBtn) checkoutBtn.style.opacity = '0.5';
      return;
    }

    if (checkoutBtn) checkoutBtn.style.opacity = '1';

    list.innerHTML = cart.map((item, idx) => {
      return `
        <div class="app-cart-row">
          <img src="${item.image}" alt="${item.title}" />
          <div class="app-cart-row-info">
            <h5 class="app-cart-row-title">${item.title}</h5>
            <div class="app-cart-row-meta">SIZE: <strong style="color:var(--accent-gold);">${item.size}</strong> · DROP ${item.epNumber}</div>
            <div class="app-cart-row-price">₹${(item.inrPrice * item.quantity).toLocaleString('en-IN')} <span style="font-size:9px; color:var(--text-muted); font-weight:400;">($${(item.price * item.quantity).toLocaleString()})</span></div>
          </div>
          <div class="app-cart-stepper">
            <button type="button" class="app-cart-step-btn" onclick="window.updateQuantity(${idx}, -1)">−</button>
            <span class="app-cart-step-val">${item.quantity}</span>
            <button type="button" class="app-cart-step-btn" onclick="window.updateQuantity(${idx}, 1)">+</button>
          </div>
        </div>
      `;
    }).join('');
  }

  window.updateQuantity = updateQuantity;
  window.removeFromCart = removeFromCart;

  // ==========================================
  // BOTTOM SHEET SYSTEM (Cart & Product Detail)
  // ==========================================
  const sheetBackdrop = document.getElementById('app-sheet-backdrop');
  const cartSheet = document.getElementById('app-cart-sheet');
  const productSheet = document.getElementById('app-product-sheet');

  function openCartSheet() {
    if (productSheet) productSheet.style.display = 'none';
    if (cartSheet) cartSheet.style.display = 'flex';
    if (sheetBackdrop) sheetBackdrop.classList.add('is-open');
    renderCart();
    triggerHaptic();
  }

  function closeSheet() {
    if (sheetBackdrop) sheetBackdrop.classList.remove('is-open');
    triggerHaptic();
  }

  window.openProductSheet = function(productId) {
    const p = PRODUCTS.find(item => item.id === productId);
    if (!p) return;

    if (cartSheet) cartSheet.style.display = 'none';
    if (productSheet) {
      productSheet.style.display = 'flex';
      document.getElementById('psheet-img').src = p.image;
      document.getElementById('psheet-drop').textContent = `DROP ${p.epNumber} // ${p.category}`;
      document.getElementById('psheet-title').textContent = p.title;
      document.getElementById('psheet-subtitle').textContent = p.subtitle;
      document.getElementById('psheet-price').textContent = `₹${p.inrPrice.toLocaleString('en-IN')} / $${p.price}`;
      document.getElementById('psheet-weight').textContent = p.weight;
      document.getElementById('psheet-atelier').textContent = p.atelier;
      document.getElementById('psheet-provenance').textContent = p.provenance;

      // Setup size pills
      const sizeContainer = document.getElementById('psheet-sizes');
      if (sizeContainer) {
        let activeSize = 'M';
        sizeContainer.innerHTML = p.sizes.map(s => `
          <button type="button" class="shop-mini-size-btn ${s === 'M' ? 'is-active' : ''}" style="padding:6px 14px;" onclick="
            this.parentElement.querySelectorAll('.shop-mini-size-btn').forEach(b => b.classList.remove('is-active'));
            this.classList.add('is-active');
            window.__activePSize = '${s}';
          ">${s}</button>
        `).join('');
        window.__activePSize = 'M';
      }

      // Add button
      const addBtn = document.getElementById('psheet-add-btn');
      if (addBtn) {
        addBtn.onclick = function() {
          const sz = window.__activePSize || 'M';
          addToCart(p.id, sz, 1);
          addBtn.textContent = `✓ ADDED TO BAG (${sz})`;
          setTimeout(() => {
            addBtn.textContent = "ADD TO BAG";
            closeSheet();
            openCartSheet();
          }, 600);
        };
      }
    }

    if (sheetBackdrop) sheetBackdrop.classList.add('is-open');
    triggerHaptic();
  };

  window.openCartSheet = openCartSheet;
  window.closeSheet = closeSheet;

  // ==========================================
  // CHECKOUT MODAL FLOW
  // ==========================================
  function initCheckout() {
    const checkoutBtn = document.getElementById('app-checkout-btn');
    const modalBackdrop = document.getElementById('app-checkout-modal-backdrop');
    const closeModalBtn = document.getElementById('app-modal-close-btn');

    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) return;
        closeSheet();
        if (modalBackdrop) modalBackdrop.classList.add('is-open');
        // Clear cart after checkout
        cart = [];
        saveCart();
        triggerHaptic();
      });
    }

    if (closeModalBtn) {
      closeModalBtn.addEventListener('click', () => {
        if (modalBackdrop) modalBackdrop.classList.remove('is-open');
        triggerHaptic();
      });
    }
  }

  // ==========================================
  // DISPATCH TRACKER SIMULATOR
  // ==========================================
  function initTracker() {
    const trackBtn = document.getElementById('courier-track-btn');
    const trackInput = document.getElementById('courier-track-input');
    const statusBox = document.getElementById('courier-status-box');

    if (trackBtn && trackInput && statusBox) {
      trackBtn.addEventListener('click', () => {
        const val = trackInput.value.trim() || 'EP-DEL-9842';
        statusBox.style.display = 'block';
        statusBox.innerHTML = `
          <strong style="color:var(--accent-gold);">PARCEL #${val.toUpperCase()}</strong><br>
          📍 Origin: New Delhi Atelier Hub (Shahpur Jat)<br>
          ✈️ Logistics: Express Courier Worldwide Dispatch<br>
          ⚡ Status: In Transit · Next Destination Customs Clearance<br>
          ⏱️ Est. Delivery: 2-4 Business Days Door-to-Door
        `;
        triggerHaptic();
      });
    }
  }

  // ==========================================
  // DEVICE SIMULATOR & DYNAMIC ISLAND
  // ==========================================
  function initSimulatorControls() {
    const toggleBtn = document.getElementById('simulator-toggle-btn');
    const island = document.getElementById('dynamic-island');

    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('fullscreen-mobile-mode');
        const isFull = document.body.classList.contains('fullscreen-mobile-mode');
        toggleBtn.textContent = isFull ? 'PHONE FRAME' : 'FULLSCREEN';
      });
    }

    if (island) {
      island.addEventListener('click', () => {
        island.classList.toggle('is-expanded');
        triggerHaptic();
      });
    }

    // Top Bag Button in header
    const bagBtn = document.getElementById('app-bag-btn');
    if (bagBtn) {
      bagBtn.addEventListener('click', openCartSheet);
    }

    // Backdrops close
    if (sheetBackdrop) {
      sheetBackdrop.addEventListener('click', (e) => {
        if (e.target === sheetBackdrop) closeSheet();
      });
    }
  }

  // Filter chips in shop
  function initShopFilters() {
    document.querySelectorAll('.shop-filter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('.shop-filter-chip').forEach(c => c.classList.remove('is-active'));
        chip.classList.add('is-active');
        state.activeFilter = chip.getAttribute('data-filter') || 'ALL';
        renderShopGrid();
        triggerHaptic();
      });
    });

    const searchInput = document.getElementById('shop-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        renderShopGrid();
      });
    }
  }

  // Bottom Nav tabs
  function initNav() {
    document.querySelectorAll('.app-nav-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const tabId = tab.getAttribute('data-tab');
        if (tabId === 'bag') {
          openCartSheet();
        } else {
          switchTab(tabId);
        }
      });
    });
  }

  // ==========================================
  // SERVICE WORKER REGISTRATION (PWA)
  // ==========================================
  function registerServiceWorker() {
    if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    }
  }

  // ==========================================
  // INITIALIZATION
  // ==========================================
  window.switchTab = switchTab;

  document.addEventListener('DOMContentLoaded', () => {
    initSimulatorControls();
    initReel();
    initNav();
    initShopFilters();
    renderShopGrid();
    renderCart();
    initCheckout();
    initTracker();
    registerServiceWorker();
  });

})();
