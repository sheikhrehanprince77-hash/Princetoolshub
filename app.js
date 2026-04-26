/* =========================================================
   app.js — Princetoolshub (PAKISTAN PREMIUM CONCEPT - ENGLISH)
   ========================================================= */

const PHONE_WA = "https://wa.me/923325654213";

/* =========================
   UI TEXTS
   ========================= */
const UI = {
  brandSub: "Premium Accounts • Reliable Activation",
  bannerText: "Attention! We do not process payments on the site. You will be redirected to WhatsApp to complete your order securely.",
  heroTitle: "Premium Accounts — Fast & Reliable",
  heroHint: "Netflix, ChatGPT Plus, Google AI, CapCut Pro and more. Choose a plan → enter details → WhatsApp opens automatically.",
  footRights: "©️ 2026 Princetoolshub • All rights reserved",
  modalClose: "Close ✕",
  modalPlan: "Choose a Plan",
  modalWait: "WhatsApp will open automatically upon ordering.",
  chatTitle: "Princetoolshub AI",
  chatSub: "Ask about our products",
  chatBtn: "Send",
  search: "Search products... (e.g. Netflix, Zoom)",
  month: "month",
  orderBtn: "Order Now",
  noPlan: "No plan available (Contact on WhatsApp).",
  formTitle: "Enter Details",
  stokOut: "Out of Stock",
  nameLabel: "Name",
  codeLabel: "-digit code",
  emailLabel: "Email Address",
  passLabel: "Password",
  sendWa: "Send to WhatsApp",
  ttCoin: "Coins Amount",
  ttPrice: "Price",
  ttUser: "TikTok Username",
  ttRule: "Minimum 500 coins. 500 coins = 1500 PKR",
  minCoin: "Minimum",
  spNote: "Activated on your personal account.",
  reqName: "Please enter your name.",
  reqCode: "Please enter the code correctly.",
  reqEmail: "Please enter a valid email address.",
  reqPass: "Please enter password or username.",
  reqCoin: "Enter minimum 500 coins.",
  namePlace: "e.g., Ali",
  codePlace: "-digit code", 
  emailPlace: "e.g., example@gmail.com",
  passPlace: "Enter password...",
  ttUserPlace: "@username",
  bundleBtn: "Create Bundle", 
  bmTitle: "SPECIAL BUNDLE (DISCOUNTED)", 
  bmSub: "Select desired products and get a 5% discount! All bundles are for 1 month.", 
  bmTotal: "Total Price:", 
  bmDisc: "Bundle Discount (5%):",
  bmFinal: "Final Price:",
  bmName: "Name",
  bmEmail: "Email",
  bmNxCode: "Netflix Code (4 digits)",
  bmPrCode: "Prime Code (5 digits)",
  bmSpPass: "Spotify Password",
  bmTtUser: "TikTok Username",
  bmTtPass: "TikTok Password",
  bmSend: "Send to WhatsApp",
  bmClose: "Close ✕",
  available: "Available",
  deliveryFast: "24/7, delivered instantly ✅⚡",
  similarProds: "Similar Products",
  tabAbout: "About Product",
  tabRules: "Terms of Use",
  searchTitle: "SEARCH AND <span class='highlight'>FIND!</span>",
  searchDesc: "All information is available on the site. Use the search to find what you need.",
  buyNow: "Buy Now",
  addCart: "🛒 Add to Cart",
  gameMainBtn: "Play & Enjoy",
  gameSelTitle: "ARCADE GAMES",
  gameSelSub: "Have fun in your free time. Break your record!",
  game1Title: "Flappy Space",
  game1Desc: "Pass 15 points, watch out for the moving pipes!",
  game2Title: "Cake Tower",
  game2Desc: "Stack the hanging cakes perfectly!",
  gameStart: "Start Game",
  gameRetry: "Play Again",
  gameBack: "Go Back",
  gameWin: "GREAT JOB 🎉",
  gameLose: "GAME OVER 💥",
  flappyRule: "Tap the screen to fly without hitting obstacles. Break your record!",
  tapperRule: "Stack the swinging cakes perfectly. Tap to drop. Break your record!",
  gameWinTxt: "Your score: {score}. Great job!",
  gameLoseTxt: "Your score: {score}. Better luck next time!"
};

/* =========================
   PRODUCT DATABASE (DATA)
   ========================= */
const DATA = {
  brand: "Princetoolshub",
  categories: [
    { key: "all", name: "All" },
    { key: "film", name: "Movies & TV" },
    { key: "musiqi", name: "Music" },
    { key: "dizayn", name: "Design" },
    { key: "video", name: "Video Edit" },
    { key: "ai", name: "AI Tools" },
    { key: "dil", name: "Languages" },
    { key: "meeting", name: "Business" },
  ],
  products: [
    {
      id: "capcut", category: "video", image: "assets/capcut.png", currency: "PKR",
      title: "CapCut Pro", variant: "Pro", badge: "Video",
      desc: "Premium effects, transitions, and templates.",
      note: "Account is delivered ready-to-use.",
      plans: [{ months: 1, price: 556 }, { months: 6, price: 3061 }],
    },
    {
      id: "youtube", category: "musiqi", image: "assets/youtube.png", currency: "PKR",
      title: "YouTube Premium", variant: "Gmail", badge: "Video",
      desc: "Ad-free viewing, includes YouTube Music.",
      note: "Enter your Gmail for activation.",
      plans: [{ months: 1, price: 550 }],
    },
    {
      id: "spotify", category: "musiqi", image: "assets/spotify.png", currency: "PKR",
      title: "Spotify Premium", variant: "Personal", badge: "Music",
      desc: "Ad-free music, offline listening.",
      note: "Enter your Gmail and Spotify password.",
      plans: [{ months: 1, price: 550 }],
    },
    {
      id: "surfshark", category: "video", image: "assets/surfshark.png", currency: "PKR",
      title: "Surfshark VPN", variant: "VPN", badge: "VPN",
      desc: "IP masking, strong encryption.",
      note: "Ready-to-use account provided.",
      plans: [{ months: 1, price: 270 }],
    },
    {
      id: "google_ai", category: "ai", image: "assets/google-ai.png", currency: "PKR",
      title: "Google AI Pro + VEO 3", variant: "Pro", badge: "AI",
      desc: "Smart text generation, analysis and productivity.",
      note: "Activation is done on your personal Gmail.",
      plans: [{ months: 1, price: 550 }, { months: 4 , price: 1110 }],
    },
    {
      id: "captions", category: "ai", image: "assets/captions.png", currency: "PKR",
      title: "Captions AI", variant: "Personal", badge: "AI",
      desc: "Auto-captions for your videos.",
      note: "Ready account provided by us.",
      plans: [{ months: 1, price: 1110 }],
    },
    {
      id: "grok_supergrok", category: "ai", image: "assets/grok.png", currency: "PKR",
      title: "Grok AI", variant: "SuperGrok", badge: "AI",
      desc: "Powerful model + image/file analysis.",
      note: "Ready-to-use account provided.",
      plans: [{ months: 1, price: 2220 }],
    },
    {
      id: "canva", category: "dizayn", image: "assets/canva.png", currency: "PKR",
      title: "Canva Premium", variant: "Pro", badge: "Design",
      desc: "Premium templates and elements.",
      note: "Enter your Gmail for activation.",
      plans: [{ months: 1, price: 270 }, { months: 12, price: 550 }],
    },
    {
      id: "chatgpt", category: "ai", image: "assets/chatgpt.png", currency: "PKR",
      title: "ChatGPT Plus", variant: "Plus", badge: "AI",
      desc: "Stronger model, file/image capabilities.",
      note: "Enter your account Email and Password.",
      plans: [{ months: 1, price: 1390, label: "1 Month" }],
    },
    {
      id: "adobecc", category: "dizayn", image: "assets/adobe.png", currency: "PKR",
      title: "Adobe Creative Cloud", variant: "Premium", badge: "Design",
      desc: "Photoshop, Illustrator and more.",
      note: "Ready-to-use account provided.",
      plans: [{ months: 1, price: 1110 }, { months: 4, price: 1940 }],
    },
    {
      id: "linkedin-premium", category: "meeting", image: "assets/linkedin.png", currency: "PKR",
      title: "Linkedin Premium", variant: "Business", badge: "Business",
      desc: "Take your career and network to the next level.",
      note: "Provided as a ready account.",
      plans: [{ months: 3, price: 1940 }]
    },
    {
      id: "elevenlabs-creator", category: "ai", image: "assets/elevenlabs.png", currency: "PKR",
      title: "Elevenlabs Creator", variant: "Voice AI", badge: "AI",
      desc: "Voiceover texts with natural human voice.",
      note: "Delivered as a ready account.",
      plans: [{ months: 1, price: 2220 }]
    },
    {
      id: "nordvpn", category: "video", image: "assets/nordvpn.png", currency: "PKR",
      title: "Nord VPN", variant: "Premium", badge: "VPN",
      desc: "Secure and fast internet browsing.",
      note: "Ready-to-use account provided.",
      plans: [{ months: 1, price: 270 }, { months: 3, price: 1110 }]
    },
    {
      id: "expressvpn", category: "video", image: "assets/expressvpn.png", currency: "PKR",
      title: "Express VPN", variant: "Premium", badge: "VPN",
      desc: "High-speed, secure VPN service.",
      note: "Ready-to-use account provided.",
      plans: [{ months: 1, price: 550 }]
    },
    {
      id: "producer-ai", category: "ai", image: "assets/producerai.png", currency: "PKR",
      title: "Producer AI", variant: "Pro", badge: "AI",
      desc: "Advanced AI tools for content production.",
      note: "Delivered as a ready account.",
      plans: [{ months: 1, price: 550 }, { months: 4, price: 1400 }]
    },
    {
      id: "aviravpn", category: "video", image: "assets/aviravpn.png", currency: "PKR",
      title: "Avira VPN", variant: "Premium", badge: "VPN",
      desc: "Privacy protection and secure browsing.",
      note: "Ready-to-use account provided.",
      plans: [{ months: 3, price: 1950 }]
    },
    {
      id: "semrush-premium", category: "meeting", image: "assets/semrush.png", currency: "PKR",
      title: "Semrush Premium", variant: "SEO", badge: "Business",
      desc: "Outrank competitors, find keywords.",
      note: "Provided as a ready account.",
      plans: [{ months: 1, price: 830 }]
    },
    {
      id: "adobe-express", category: "dizayn", image: "assets/adobe-express.png", currency: "PKR",
      title: "Adobe Express", variant: "Pro", badge: "Design",
      desc: "Professional graphics and social media posts.",
      note: "Delivered as a ready account.",
       plans: [{ months: 1, price: 550 }, { months: 4, price: 1390 }],
    },
    {
      id: "notion-plus", category: "meeting", image: "assets/notion.png", currency: "PKR",
      title: "Notion Plus", variant: "Productivity", badge: "Business",
      desc: "Manage all your tasks and notes.",
      note: "Ready account is delivered.",
      plans: [{ months: 3, price: 1110 }]
    },
    {
      id: "picsart-premium", category: "dizayn", image: "assets/picsart.png", currency: "PKR",
      title: "Picsart Premium", variant: "Photo Edit", badge: "Design",
      desc: "Premium tools and AI filters.",
      note: "Account is given ready.",
      plans: [{ months: 1, price: 550 }]
    },
    {
      id: "blink-starter", category: "meeting", image: "assets/blink.png", currency: "PKR",
      title: "Blink Starter", variant: "Starter", badge: "Business",
      desc: "For a fast and effective work environment.",
      note: "Provided as a ready account.",
      plans: [{ months: 1, price: 1670 }]
    },
    {
      id: "lightroom-photo", category: "dizayn", image: "assets/lightroom.png", currency: "PKR",
      title: "Lightroom Photo", variant: "Photo Edit", badge: "Design",
      desc: "Professional color correction and retouching.",
      note: "Delivered as a ready account.",
      plans: [{ months: 1, price: 550 }]
    },
  ]
};

const INFO_TEXTS = {}; 

/* =========================
   ROUTING AND TABS
   ========================= */
let currentProduct = null;
let currentPlanIdx = 0;

window.openProductPage = (id) => {
  const p = DATA.products.find(x => x.id === id);
  if(!p) return;
  currentProduct = p;
  currentPlanIdx = 0;

  const homeView = document.getElementById("homePageView");
  const productView = document.getElementById("productPageView");
  if(homeView) homeView.style.display = "none";
  if(productView) productView.style.display = "block";
  window.scrollTo(0, 0);

  const mainImg = document.getElementById("pp-main-img");
  if(mainImg) mainImg.src = p.image;
  
  const titleEl = document.getElementById("pp-main-title");
  if(titleEl) titleEl.textContent = p.variant ? `${p.title} - (${p.variant})` : p.title;

  renderProductPlans(p);
  renderSimilarProducts(p);
  renderProductTabs(p);
};

document.getElementById("btnBackToHome")?.addEventListener("click", () => {
  document.getElementById("productPageView").style.display = "none";
  document.getElementById("homePageView").style.display = "block";
  window.scrollTo(0, savedScrollY || 0);
});

document.querySelector(".brand")?.addEventListener("click", () => {
  document.getElementById("productPageView").style.display = "none";
  document.getElementById("homePageView").style.display = "block";
  window.scrollTo(0, 0);
});

function renderProductPlans(p) {
  const container = document.getElementById("pp-plans-container");
  if(!container) return;
  container.innerHTML = "";

  const plans = p.plans || [];
  if(!plans.length) {
    container.innerHTML = `<div style="color:red;">No plans available</div>`;
    return;
  }

  plans.forEach((pl, idx) => {
    let price = pl.price;
    let oldPrice = pl.oldPrice || (price * 1.5 + 20).toFixed(0); 
    let discount = pl.discount ? parseInt(pl.discount.replace('-','').replace('%','')) : Math.round((1 - (price/oldPrice)) * 100);

    const isStockOut = price <= 0;
    if(isStockOut) { oldPrice = 0; discount = 0; }

    const labelName = pl.label ? pl.label : `${pl.months} ${UI.month}`;

    const div = document.createElement("div");
    div.className = `pp-plan-label ${idx === currentPlanIdx ? 'active' : ''}`;
    div.innerHTML = `
      <div class="pp-plan-left">
         <div class="pp-radio-circle"></div>
         <div class="pp-plan-name">${labelName}</div>
         ${discount > 0 ? `<div class="pp-plan-disc-badge">🚩 -${discount}%</div>` : ''}
      </div>
      <div class="pp-plan-right">
         ${discount > 0 ? `<div class="pp-old-price">${oldPrice} ${p.currency}</div>` : ''}
         <div class="pp-new-price">${isStockOut ? pl.label : price + ' ' + p.currency}</div>
      </div>
    `;

    div.onclick = () => {
      currentPlanIdx = idx;
      renderProductPlans(p); 
    };

    container.appendChild(div);
  });
}

function renderSimilarProducts(p) {
  const container = document.getElementById("pp-similar-list");
  if(!container) return;
  
  let similar = DATA.products.filter(x => x.id !== p.id && x.category === p.category);
  if(similar.length < 3) similar = DATA.products.filter(x => x.id !== p.id);
  
  similar = similar.slice(0, 4); 

  container.innerHTML = similar.map(sp => {
    const minP = getMinPrice(sp);
    return `
      <div class="pp-sim-card" onclick="window.openProductPage('${sp.id}')">
        <img src="${sp.image}" class="pp-sim-img" alt="">
        <div class="pp-sim-info">
           <div class="pp-sim-title">${sp.title}</div>
           <div class="pp-sim-price">${minP > 0 ? minP + ' ' + sp.currency : UI.stokOut}</div>
        </div>
      </div>
    `;
  }).join("");
}

function renderProductTabs(p) {
  const cBox = document.getElementById("pp-content-box");
  const tabs = document.querySelectorAll(".pp-tab");
  
  const showTab = (tabName) => {
    tabs.forEach(t => t.classList.remove("active"));
    document.querySelector(`.pp-tab[data-target="${tabName}"]`)?.classList.add("active");

    if (tabName === "tab-about") {
      const info = INFO_TEXTS[p.id];
      cBox.innerHTML = (info && info.htmlContent) ? info.htmlContent : `<p>${p.desc}</p><p>${p.note}</p>`;
    } 
    else if (tabName === "tab-rules") {
      cBox.innerHTML = `
        <h4 style="color: #D4AF37; margin-bottom: 10px;">General Terms of Use:</h4>
        <ul style="padding-left: 20px; line-height: 1.8;">
          <li>Sharing account details with third parties is strictly prohibited.</li>
          <li>Attempting to change the password or profile may result in account loss.</li>
          <li>In case of technical issues, contact support via WhatsApp.</li>
          <li>No refunds are provided after the order is confirmed.</li>
        </ul>
      `;
    }
  };
  
  tabs.forEach(t => t.onclick = () => showTab(t.getAttribute("data-target")));
  showTab("tab-about"); 
}

/* =========================
   ORDER FORMS & WARNINGS
   ========================= */
document.getElementById("pp-order-btn")?.addEventListener("click", () => {
  if(!currentProduct) return;
  const plan = currentProduct.plans[currentPlanIdx];
  if(plan.price <= 0) return alert(UI.stokOut);
  
  document.getElementById("modal").classList.add("show");
  lockBodyScroll();
  
  const id = currentProduct.id;

  if (id === "tiktok_jeton") {
      showTikTokJetonForm(currentProduct, plan);
  } else if (id === "netflix" || id === "prime") {
      showNameCodeForm(currentProduct, plan, id === "netflix" ? 4 : 5);
  } else if (id === "spotify") {
      showSpotifyWarning(currentProduct, plan);
  } else if (id === "chatgpt") {
      showChatGPTWarning(currentProduct, plan);
  } else if (id === "youtube") {
      showYoutubeWarningForm(currentProduct, plan);
  } else if (id === "canva" || id === "google_ai" || id === "google_ai_ultra" || id === "captions" || id === "grok_supergrok" || id === "claude_ai" || id === "adobecc" || id === "duolingo" || id === "adobe-express" || id === "picsart-premium" || id === "lightroom-photo" || id === "gemini-ai-pro") {
      showEmailOnlyForm(currentProduct, plan);
  } else {
      showConfirmOnlyForm(currentProduct, plan);
  }
});

function showSpotifyWarning(p, plan) {
  document.getElementById("mForm").innerHTML = `
    <div class="mpForm" style="text-align:left;">
      <div style="display:flex; align-items:center; gap:10px; margin-bottom: 15px;">
        <div style="background:#332b00; padding:8px; border-radius:50%; display:flex; align-items:center; justify-content:center;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
        </div>
        <span class="mpFormTitle" style="margin:0;">Attention!</span>
      </div>
      <div style="color:#d1d5db; font-size:14px; line-height: 1.6; margin-bottom:15px;">
        The official <b>Spotify Premium</b> plan will be activated on your personal account. According to their rules, Spotify can suspend subscriptions in rare cases, and payments are non-refundable.
      </div>
      <div style="color:#d1d5db; font-size:14px; line-height: 1.6; margin-bottom:25px;">
        Ensure your account details are correct. If you forgot your password, reset it here: <a href="https://www.spotify.com/password-reset/" target="_blank" style="color:#D4AF37; text-decoration:underline;">password-reset</a>
      </div>
      <div style="display:flex; gap:10px;">
        <button id="sp_cancel" class="mpBtn" style="background:#021a0f; color:#D4AF37; border: 1px solid #D4AF37; flex:1;">Cancel</button>
        <button id="sp_confirm" class="mpBtn" style="flex:1;">I Confirm</button>
      </div>
    </div>
  `;

  document.getElementById("sp_cancel").onclick = () => { closeModal(); };
  document.getElementById("sp_confirm").onclick = () => { showEmailPassForm(p, plan); };
}

function showChatGPTWarning(p, plan) {
  document.getElementById("mForm").innerHTML = `
    <div class="mpForm" style="text-align:left;">
      <div style="display:flex; align-items:center; gap:10px; margin-bottom: 15px;">
        <div style="background:#00331a; padding:8px; border-radius:50%; display:flex; align-items:center; justify-content:center;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        </div>
        <span class="mpFormTitle" style="margin:0;">Security Notice</span>
      </div>
      <div style="color:#d1d5db; font-size:14px; line-height: 1.6; margin-bottom:15px;">
        <b>ChatGPT Plus</b> will be activated directly on your personal account. Your account's privacy is fully protected.
      </div>
      <div style="color:#d1d5db; font-size:14px; line-height: 1.6; margin-bottom:25px;">
        We recommend changing your password after the activation is complete for your personal security.
      </div>
      <div style="display:flex; gap:10px;">
        <button id="cg_cancel" class="mpBtn" style="background:#021a0f; color:#D4AF37; border: 1px solid #D4AF37; flex:1;">Cancel</button>
        <button id="cg_confirm" class="mpBtn" style="flex:1;">Continue</button>
      </div>
    </div>
  `;

  document.getElementById("cg_cancel").onclick = () => { closeModal(); };
  document.getElementById("cg_confirm").onclick = () => { showEmailPassForm(p, plan); };
}

function showYoutubeWarningForm(p, plan) {
  document.getElementById("mForm").innerHTML = `
    <div class="mpForm" style="text-align:left;">
      <div style="display:flex; align-items:center; gap:10px; margin-bottom: 15px;">
        <div style="background:#330000; padding:8px; border-radius:50%; display:flex; align-items:center; justify-content:center;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
        </div>
        <span class="mpFormTitle" style="margin:0; color:#D4AF37;">Attention!</span>
      </div>
      <div style="color:#d1d5db; font-size:14px; line-height: 1.6; margin-bottom:15px;">
        The provided account must be a <b>new Gmail</b> and not linked to any family plan.
      </div>
      <div style="color:#d1d5db; font-size:14px; line-height: 1.6; margin-bottom:15px;">
        The official <b>YouTube Premium</b> package will be activated on your account.
      </div>
      <div style="color:#d1d5db; font-size:14px; line-height: 1.6; margin-bottom:25px;">
        Please make sure you enter the account details correctly.
      </div>
      <div style="display:flex; gap:10px;">
        <button id="yt_cancel" class="mpBtn" style="background:#021a0f; color:#D4AF37; border: 1px solid #D4AF37; flex:1;">Cancel</button>
        <button id="yt_confirm" class="mpBtn" style="flex:1;">I Confirm</button>
      </div>
    </div>
  `;

  document.getElementById("yt_cancel").onclick = () => { closeModal(); };
  document.getElementById("yt_confirm").onclick = () => { showEmailOnlyForm(p, plan); };
}

function showConfirmOnlyForm(p, plan) {
  document.getElementById("mForm").innerHTML = `
    <div class="mpForm">
      <div class="mpFormTitle" style="margin-bottom: 10px;">Confirm Order</div>
      <div style="text-align:center; color:#ccc; font-size:14px; margin-bottom:20px; line-height: 1.5;">
         You are ordering <b>${p.title}</b> (${plan.label || plan.months + ' months'}).<br><br>
         This product is delivered as a <b>Ready Account (Login/Password)</b>. By confirming, you can receive the account via WhatsApp.
      </div>
      <button id="c_send" class="mpBtn">Confirm Order</button>
    </div>
  `;
  document.getElementById("c_send").onclick = () => {
    sendWA(p, plan, "");
    closeModal();
  };
}

function showEmailPassForm(p, plan) {
  document.getElementById("mForm").innerHTML = `
    <div class="mpForm">
      <div class="mpFormTitle">${UI.formTitle}</div>
      <div>
        <div class="mpLabel">${UI.emailLabel}</div>
        <input id="ep_email" class="mpInput" placeholder="example@gmail.com">
      </div>
      <div style="margin-top:10px">
        <div class="mpLabel">${UI.passLabel}</div>
        <input id="ep_pass" class="mpInput" type="text" placeholder="Your account password">
      </div>
      <button id="ep_send" class="mpBtn">${UI.sendWa}</button>
    </div>
  `;
  document.getElementById("ep_send").onclick = () => {
    const email = document.getElementById("ep_email").value.trim(), pass = document.getElementById("ep_pass").value.trim();
    if(!email || !pass) return alert("Please enter all details.");
    sendWA(p, plan, `Account (Email): ${email}\nPassword: ${pass}`);
    closeModal();
  };
}

function showNameCodeForm(p, plan, digits) {
  let cpLabel = digits + UI.codePlace; 
  document.getElementById("mForm").innerHTML = `
    <div class="mpForm">
      <div class="mpFormTitle">${UI.formTitle}</div>
      <div class="mpGrid2">
        <div><div class="mpLabel">${UI.nameLabel}</div><input id="x_name" class="mpInput" placeholder="${UI.namePlace}"></div>
        <div><div class="mpLabel">${cpLabel}</div><input id="x_code" class="mpInput" type="number" placeholder="${cpLabel}"></div>
      </div>
      <button id="x_send" class="mpBtn">${UI.sendWa}</button>
    </div>`;
  document.getElementById("x_send").onclick = () => {
    const name = document.getElementById("x_name").value.trim(), code = document.getElementById("x_code").value.trim();
    if(!name) return alert(UI.reqName);
    if(code.length !== digits) return alert(UI.reqCode);
    sendWA(p, plan, `Profile Name: ${name}\nPIN Code: ${code}`);
    closeModal();
  };
}

function showEmailOnlyForm(p, plan) {
  document.getElementById("mForm").innerHTML = `
    <div class="mpForm">
      <div class="mpFormTitle">${UI.formTitle}</div>
      <div>
        <div class="mpLabel">${UI.emailLabel} (For Activation)</div>
        <input id="e_email" class="mpInput" placeholder="example@gmail.com">
      </div>
      <button id="e_send" class="mpBtn">${UI.sendWa}</button>
    </div>`;
  document.getElementById("e_send").onclick = () => {
    const email = document.getElementById("e_email").value.trim();
    if(!email.includes("@")) return alert(UI.reqEmail);
    sendWA(p, plan, `Gmail for Activation: ${email}`);
    closeModal();
  };
}

function showTikTokJetonForm(p, plan) {
  document.getElementById("mForm").innerHTML = `
    <div class="mpForm">
      <div class="mpFormTitle">TikTok Coins</div>
      <div class="mpGrid2">
        <div><div class="mpLabel">${UI.ttCoin}</div><input id="tt_coin" class="mpInput" type="number" value="500"></div>
        <div><div class="mpLabel">${UI.ttPrice}</div><input id="tt_price" class="mpInput" value="1500 PKR" readonly></div>
      </div>
      <div style="margin-top:10px">
        <div class="mpLabel">${UI.ttUser}</div>
        <input id="tt_user" class="mpInput" placeholder="${UI.ttUserPlace}">
      </div>
      <div style="margin-top:10px">
        <div class="mpLabel">${UI.passLabel}</div>
        <input id="tt_pass" class="mpInput" placeholder="Your TikTok Password">
      </div>
      <button id="tt_send" class="mpBtn">${UI.sendWa}</button>
    </div>`;
  
  const coinEl = document.getElementById("tt_coin"), priceEl = document.getElementById("tt_price");
  coinEl.oninput = () => { 
      const c = Number(coinEl.value); 
      priceEl.value = c < 500 ? "Min 500" : ((c / 500) * 1500) + " PKR"; 
  };
  
  document.getElementById("tt_send").onclick = () => {
    const c = Number(coinEl.value), user = document.getElementById("tt_user").value.trim(), pass = document.getElementById("tt_pass").value.trim();
    if(c < 500 || !user || !pass) return alert("Please fill all details and select minimum 500 coins.");
    window.open(PHONE_WA + "?text=" + encodeURIComponent(`Hello.\nProduct: TikTok Coins\nAmount: ${c}\nPrice: ${((c/500)*1500)} PKR\nUsername: ${user}\nPassword: ${pass}`), "_blank");
    closeModal();
  };
}

function sendWA(p, plan, extra) {
  const tPlan = plan.label ? plan.label : `${plan.months} months`;
  const orderId = Math.floor(10000 + Math.random() * 90000);
  
  const waMessage = `Hello, I want to place an order.\n\nOrder №: ${orderId}\nProduct: ${p.title}\nDuration: ${tPlan}\nPrice: ${plan.price} ${p.currency}\n\n${extra}`;
  window.open(PHONE_WA + "?text=" + encodeURIComponent(waMessage), "_blank");
}

function closeModal() {
  const mod = document.getElementById("modal");
  if(mod) mod.classList.remove("show");
  unlockBodyScroll();
}

function getMinPrice(p) { return Math.min(...(p.plans||[]).filter(x => x.price > 0).map(x => x.price)); }
function esc(s) { return String(s ?? "").replaceAll("<", "<").replaceAll(">", ">"); }

/* =========================
   SLIDER (CAROUSEL)
   ========================= */
let currentSlide = 0;
let slideInterval;

function initSlider() {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const nextBtn = document.querySelector('.next-arrow');
  const prevBtn = document.querySelector('.prev-arrow');

  if (!slides.length) return;

  function showSlide(n) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) dots[currentSlide].classList.add('active');
  }

  function nextSlide() { showSlide(currentSlide + 1); }
  function prevSlide() { showSlide(currentSlide - 1); }

  if (nextBtn) nextBtn.onclick = (e) => { e.preventDefault(); e.stopPropagation(); nextSlide(); resetTimer(); };
  if (prevBtn) prevBtn.onclick = (e) => { e.preventDefault(); e.stopPropagation(); prevSlide(); resetTimer(); };

  dots.forEach((dot, idx) => {
    dot.onclick = (e) => { e.preventDefault(); e.stopPropagation(); showSlide(idx); resetTimer(); };
  });

  slides.forEach(slide => {
    slide.addEventListener('click', (e) => {
      if (e.target.classList.contains('slider-arrow') || e.target.closest('.slider-arrow')) return;
      if (e.target.classList.contains('dot') || e.target.closest('.slider-dots')) return;

      const targetId = slide.getAttribute('data-target');
      if (targetId) window.openProductPage(targetId);
    });
  });

  function startTimer() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 3000);
  }
  function resetTimer() { startTimer(); }
  startTimer();
}

/* =========================
   INIT AND GRID
   ========================= */
const $ = (id) => document.getElementById(id);
let activeCat = "all";

function setupUI() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(UI[key]) {
       if (el.tagName.toLowerCase() === 'input' && el.hasAttribute('placeholder')) {
           el.placeholder = UI[key];
       } else {
           el.innerHTML = UI[key]; 
       }
    }
  });
  
  const searchInp = document.getElementById("q");
  if(searchInp) searchInp.placeholder = UI.search;

  buildTabs();
  renderGrid();
  renderBundleModal(); 
}

function buildTabs() {
  const tabs = document.getElementById("tabs");
  if (!tabs) return;
  tabs.innerHTML = "";
  DATA.categories.forEach((c) => {
    const el = document.createElement("div");
    el.className = "tab" + (c.key === activeCat ? " active" : "");
    el.textContent = c.name;
    el.onclick = () => { activeCat = c.key; [...tabs.children].forEach((x) => x.classList.remove("active")); el.classList.add("active"); renderGrid(); };
    tabs.appendChild(el);
  });
}

function renderGrid() {
  const grid = document.getElementById("grid");
  if (!grid) return;
  const searchInp = document.getElementById("q");
  const q = (searchInp?.value || "").trim().toLowerCase();
  
  const list = DATA.products.filter((p) => (activeCat === "all" ? true : p.category === activeCat)).filter((p) => {
    if (!q) return true;
    const blob = [p.title, p.desc, p.category, p.variant].join(" ").toLowerCase();
    return blob.includes(q);
  });
  
  grid.innerHTML = list.map((p, idx) => cardHTML(p, idx)).join("");
}

function cardHTML(p, idx) {
  const min = getMinPrice(p);
  const showPrice = p.id === "tiktok_jeton" ? `1500 ${p.currency}` : (min != null && min !== Infinity && min !== 0 ? `${min} ${p.currency}` : "—");
  return `
    <div class="card" onclick="window.openProductPage('${p.id}')" style="animation-delay:${Math.min(idx * 0.03, 0.25)}s">
      <div class="imgWrap"><img class="img" src="${p.image}" alt=""><div class="cornerPrice">${showPrice}</div></div>
      <div class="pad">
        <div class="topline"><h3 class="title">${esc(p.title)}</h3><div class="badge">${esc(p.badge)}</div></div>
        <div class="meta">${esc(p.desc)}</div>
        <div class="priceRow"><button class="btn primary" type="button">${UI.orderBtn}</button></div>
      </div>
    </div>
  `;
}

/* =========================
   BUNDLE SYSTEM
   ========================= */
let selectedBundle = []; 

function renderBundleModal() {
  const grid = document.getElementById("bmGrid");
  if (!grid) return;
  grid.innerHTML = "";
  
  DATA.products.forEach(p => {
    const minPrice = getMinPrice(p);
    const isOut = minPrice === Infinity || minPrice === 0;
    const isTikTok = p.id === "tiktok_jeton";
    const priceToShow = isTikTok ? 1500 : (isOut ? 0 : minPrice);
    
    const el = document.createElement("div");
    el.className = `bmItem ${isOut && !isTikTok ? "disabled" : ""} ${selectedBundle.includes(p.id) ? "active" : ""}`;
    
    const priceText = isOut && !isTikTok ? UI.stokOut : `${priceToShow} PKR`;

    el.innerHTML = `
      <img src="${p.image}" alt="">
      <div class="bmItemName">${p.title}</div>
      <div class="bmItemPrice">${priceText}</div>
    `;

    if (!isOut || isTikTok) {
      el.addEventListener("click", () => {
        if (selectedBundle.includes(p.id)) {
          selectedBundle = selectedBundle.filter(id => id !== p.id); 
          el.classList.remove("active");
        } else {
          selectedBundle.push(p.id); 
          el.classList.add("active");
        }
        calcBundleModalTotal();
      });
    }
    grid.appendChild(el);
  });
  calcBundleModalTotal(); 
}

function renderBundleForm() {
  const formEl = document.querySelector(".bmForm");
  if (!formEl) return;

  if (selectedBundle.length === 0) {
    formEl.innerHTML = "";
    return;
  }

  const currentValues = {
    name: document.getElementById("bm_name")?.value || "",
    email: document.getElementById("bm_email")?.value || "",
    nxCode: document.getElementById("bm_nx_code")?.value || "",
    prCode: document.getElementById("bm_pr_code")?.value || "",
    spPass: document.getElementById("bm_sp_pass")?.value || "",
    ttUser: document.getElementById("bm_tt_user")?.value || "",
    ttPass: document.getElementById("bm_tt_pass")?.value || ""
  };

  let req = { email: false, nxCode: false, prCode: false, spPass: false, ttUser: false, ttPass: false };

  selectedBundle.forEach(id => {
    if (['spotify', 'canva', 'chatgpt', 'youtube', 'google_ai', 'elevenlabs-creator', 'adobe-express', 'picsart-premium', 'lightroom-photo', 'gemini-ai-pro'].includes(id)) req.email = true;
    if (id === 'netflix') req.nxCode = true;
    if (id === 'prime') req.prCode = true;
    if (id === 'spotify') req.spPass = true;
    if (id === 'tiktok_jeton') { req.ttUser = true; req.ttPass = true; }
  });

  let html = `<div class="bmInputGrp"><label>${UI.bmName}</label><input type="text" id="bm_name" placeholder="..."></div>`;

  if (req.email) html += `<div class="bmInputGrp"><label>${UI.bmEmail}</label><input type="text" id="bm_email" placeholder="example@gmail.com"></div>`;
  if (req.nxCode) html += `<div class="bmInputGrp"><label>${UI.bmNxCode}</label><input type="number" id="bm_nx_code" placeholder="****"></div>`;
  if (req.prCode) html += `<div class="bmInputGrp"><label>${UI.bmPrCode}</label><input type="number" id="bm_pr_code" placeholder="*****"></div>`;
  if (req.spPass) html += `<div class="bmInputGrp"><label>${UI.bmSpPass}</label><input type="text" id="bm_sp_pass" placeholder="Your Password..."></div>`;
  if (req.ttUser) html += `<div class="bmInputGrp"><label>${UI.bmTtUser}</label><input type="text" id="bm_tt_user" placeholder="@username"></div>`;
  if (req.ttPass) html += `<div class="bmInputGrp"><label>${UI.bmTtPass}</label><input type="text" id="bm_tt_pass" placeholder="Your Password..."></div>`;

  formEl.innerHTML = html;

  if (document.getElementById("bm_name")) document.getElementById("bm_name").value = currentValues.name;
  if (document.getElementById("bm_email")) document.getElementById("bm_email").value = currentValues.email;
  if (document.getElementById("bm_nx_code")) document.getElementById("bm_nx_code").value = currentValues.nxCode;
  if (document.getElementById("bm_pr_code")) document.getElementById("bm_pr_code").value = currentValues.prCode;
  if (document.getElementById("bm_sp_pass")) document.getElementById("bm_sp_pass").value = currentValues.spPass;
  if (document.getElementById("bm_tt_user")) document.getElementById("bm_tt_user").value = currentValues.ttUser;
  if (document.getElementById("bm_tt_pass")) document.getElementById("bm_tt_pass").value = currentValues.ttPass;
}

function calcBundleModalTotal() {
  let total = 0;
  selectedBundle.forEach(id => {
    const p = DATA.products.find(x => x.id === id);
    if (p) {
      if (p.id === "tiktok_jeton") total += 1500; 
      else total += getMinPrice(p);
    }
  });

  const discount = total > 0 ? total * 0.05 : 0;
  const finalPrice = total - discount;

  document.getElementById("bmTotal").textContent = `${total} PKR`;
  document.getElementById("bmDiscount").textContent = `-${discount.toFixed(0)} PKR`;
  document.getElementById("bmFinal").textContent = `${finalPrice.toFixed(0)} PKR`;

  renderBundleForm();
}

document.getElementById("bmSubmit")?.addEventListener("click", () => {
  if (selectedBundle.length === 0) return alert("Bundle is empty");
  
  const nameEl = document.getElementById("bm_name");
  const emailEl = document.getElementById("bm_email");
  const nxCodeEl = document.getElementById("bm_nx_code");
  const prCodeEl = document.getElementById("bm_pr_code");
  const spPassEl = document.getElementById("bm_sp_pass");
  const ttUserEl = document.getElementById("bm_tt_user");
  const ttPassEl = document.getElementById("bm_tt_pass");
  
  if (nameEl && !nameEl.value.trim()) return alert(UI.reqName);
  if (emailEl && !emailEl.value.trim().includes("@")) return alert(UI.reqEmail);
  if (nxCodeEl && nxCodeEl.value.trim().length !== 4) return alert("Enter 4-digit Netflix Code.");
  if (prCodeEl && prCodeEl.value.trim().length !== 5) return alert("Enter 5-digit Prime Code.");
  if (spPassEl && !spPassEl.value.trim()) return alert("Enter your password.");
  if (ttUserEl && !ttUserEl.value.trim()) return alert("Enter TikTok Username");
  if (ttPassEl && !ttPassEl.value.trim()) return alert("Enter TikTok Password");
  
  let total = 0;
  let itemsText = "";
  
  selectedBundle.forEach((id, idx) => {
    const p = DATA.products.find(x => x.id === id);
    let price = p.id === "tiktok_jeton" ? 1500 : getMinPrice(p);
    total += price;
    itemsText += `${idx + 1}. ${p.title} (${price} PKR)\n`;
  });
  
  const discount = total * 0.05;
  const finalPrice = total - discount;

  let msg = `🎁 Hello, I created a Special Bundle!\n\n`;
  if (nameEl) msg += `Name: ${nameEl.value.trim()}\n`;
  if (emailEl) msg += `Email: ${emailEl.value.trim()}\n`;
  if (nxCodeEl) msg += `Netflix Code: ${nxCodeEl.value.trim()}\n`;
  if (prCodeEl) msg += `Prime Code: ${prCodeEl.value.trim()}\n`;
  if (spPassEl) msg += `Spotify Password: ${spPassEl.value.trim()}\n`;
  if (ttUserEl) msg += `TikTok User: ${ttUserEl.value.trim()}\n`;
  if (ttPassEl) msg += `TikTok Pass: ${ttPassEl.value.trim()}\n`;

  msg += `\nMy Orders:\n${itemsText}\nSubtotal: ${total} PKR\nDiscount (5%): -${discount.toFixed(0)} PKR\nAmount to Pay: *${finalPrice.toFixed(0)} PKR*`;
  
  window.open(PHONE_WA + "?text=" + encodeURIComponent(msg), "_blank");
});

document.getElementById("bundleFab")?.addEventListener("click", () => {
  document.getElementById("bundleModal").classList.add("show");
  lockBodyScroll();
  renderBundleModal();
});

document.getElementById("bundleClose")?.addEventListener("click", () => {
  document.getElementById("bundleModal").classList.remove("show");
  unlockBodyScroll();
});

/* =========================
   MUSIC AND SPLASH
   ========================= */
function initPlayer() {
  const PLAYLIST = [{ title: "Happy Ending", artist: "Adil Kulali", src: "assets/music.mp3" }, { title: "Applause", artist: "Erdem Kinay", src: "assets/music1.mp3" }];
  let trackIndex = 0, isPlaying = false;
  const audio = document.getElementById("bgAudio");
  const playBtn = document.getElementById("playBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const ui = document.getElementById("playerUI");
  
  if (!audio) return;
  function loadTrack(i) {
    audio.src = PLAYLIST[i].src; 
    document.getElementById("trackTitle").textContent = PLAYLIST[i].title; 
    document.getElementById("trackSub").textContent = PLAYLIST[i].artist; 
    document.getElementById("trackCount").textContent = `${i + 1}/${PLAYLIST.length}`;
  }
  function setUI(on) { isPlaying = on; playBtn.textContent = on ? "⏸" : "▶️"; ui.classList.toggle("playing", on); }
  playBtn.onclick = async () => { try { if (!isPlaying) { await audio.play(); setUI(true); } else { audio.pause(); setUI(false); } } catch(e){} };
  prevBtn.onclick = () => { trackIndex = (trackIndex - 1 + PLAYLIST.length) % PLAYLIST.length; loadTrack(trackIndex); if(isPlaying) audio.play(); };
  nextBtn.onclick = () => { trackIndex = (trackIndex + 1) % PLAYLIST.length; loadTrack(trackIndex); if(isPlaying) audio.play(); };
  audio.onended = () => nextBtn.onclick();
  loadTrack(0);
}

let savedScrollY = 0;
function lockBodyScroll() { savedScrollY = window.scrollY || 0; document.documentElement.classList.add("modalOpen"); document.body.classList.add("modalOpen"); document.body.style.position = "fixed"; document.body.style.top = `-${savedScrollY}px`; document.body.style.width = "100%"; }
function unlockBodyScroll() { document.body.style.position = ""; document.body.style.top = ""; document.body.style.width = ""; document.documentElement.classList.remove("modalOpen"); document.body.classList.remove("modalOpen"); window.scrollTo(0, savedScrollY); }

function initSplash() {
  const splash = document.getElementById('newSplashScreen');
  if (splash) {
    setTimeout(() => { splash.style.opacity = '0'; splash.style.visibility = 'hidden'; splash.style.pointerEvents = 'none'; }, 1500); 
  }
}

function boot() {
  initSplash();
  setupUI();
  initPlayer();
  initSlider(); 
  document.getElementById("q")?.addEventListener("input", renderGrid);
  document.getElementById("closeModal")?.addEventListener("click", closeModal);
  document.getElementById("modal")?.addEventListener("click", (e) => { if (e.target.id === "modal") closeModal(); });
}

/* =========================
   ARCADE GAMES
   ========================= */
const gBtnOpen = document.getElementById("gameBtnOpen");
const gSelectModal = document.getElementById("gameSelectModal");
const gSelectClose = document.getElementById("gameSelectClose");

const gPlayModal = document.getElementById("gamePlayModal");
const gPlayClose = document.getElementById("gamePlayClose");
const activeGameTitle = document.getElementById("activeGameTitle");
const activeGameSub = document.getElementById("activeGameSub");

const flappyArea = document.getElementById("flappyArea");
const towerArea = document.getElementById("towerArea");
const gStartScr = document.getElementById("gmStartScreen");
const gResultScr = document.getElementById("gmResultScreen");
const gStartBtn = document.getElementById("gmStartBtn");
const gRetryBtn = document.getElementById("gmRetryBtn");
const gmBackMenuBtn = document.getElementById("gmBackMenuBtn");

let currentGame = ""; 

gBtnOpen?.addEventListener("click", () => { gSelectModal.classList.add("show"); lockBodyScroll(); });
gSelectClose?.addEventListener("click", () => { gSelectModal.classList.remove("show"); unlockBodyScroll(); });
gPlayClose?.addEventListener("click", () => { gPlayModal.classList.remove("show"); unlockBodyScroll(); stopCurrentGame(); });
gmBackMenuBtn?.addEventListener("click", () => { gPlayModal.classList.remove("show"); gSelectModal.classList.add("show"); stopCurrentGame(); });

document.querySelectorAll('.gameOptCard').forEach(card => {
  card.addEventListener('click', () => {
    currentGame = card.getAttribute('data-game');
    gSelectModal.classList.remove("show");
    gPlayModal.classList.add("show");
    prepareGameScreen();
  });
});

function prepareGameScreen() {
  stopCurrentGame(); 
  gResultScr.style.display = "none";
  gStartScr.style.display = "flex";

  if (currentGame === "flappy") {
    activeGameTitle.textContent = UI.game1Title;
    activeGameSub.textContent = UI.game1Desc;
    document.getElementById("gmStartRule").textContent = UI.flappyRule;
    document.getElementById("gmStartIcon").textContent = "🦅";
    flappyArea.style.display = "block";
    towerArea.style.display = "none";
    initFlappy();
  } else if (currentGame === "tower") {
    activeGameTitle.textContent = UI.game2Title;
    activeGameSub.textContent = UI.game2Desc;
    document.getElementById("gmStartRule").textContent = UI.tapperRule;
    document.getElementById("gmStartIcon").textContent = "🍰";
    flappyArea.style.display = "none";
    towerArea.style.display = "block";
    initTower();
  }
}

gStartBtn?.addEventListener("click", () => {
  gStartScr.style.display = "none";
  if (currentGame === "flappy") startFlappy();
  if (currentGame === "tower") startTower();
});

gRetryBtn?.addEventListener("click", () => {
  gResultScr.style.display = "none";
  if (currentGame === "flappy") startFlappy();
  if (currentGame === "tower") startTower();
});

function stopCurrentGame() {
  stopFlappy();
  stopTower();
}

function endGameGlobal(gameType, finalScore) {
  if (gameType === "flappy") stopFlappy();
  if (gameType === "tower") stopTower();

  gResultScr.style.display = "flex";
  document.getElementById("gmResultTitle").textContent = UI.gameLose; 
  document.getElementById("gmResultTitle").style.color = "#D4AF37";
  document.getElementById("gmResultText").textContent = `Your score: ${finalScore}. Great Job!`;
}

/* GAME 1: FLAPPY */
const fCanvas = document.getElementById("flappyCanvas");
let fCtx; if(fCanvas) fCtx = fCanvas.getContext("2d");
let fBird, fPipes, fScore, fIsRunning, fLoop;
let fStars = []; let fWinds = [];

function initFlappy() { 
  fBird = { x: 60, y: 200, w: 34, h: 24, vy: 0 }; 
  fPipes = []; fScore = 0; fIsRunning = false; 
  fStars = []; for(let i=0; i<70; i++) fStars.push({x: Math.random()*320, y: Math.random()*480, s: Math.random()*1.5 + 0.5, a: Math.random()});
  fWinds = []; for(let i=0; i<5; i++) fWinds.push({x: Math.random()*320, y: Math.random()*480, w: Math.random()*40+20, s: Math.random()*4+4});
  drawFlappy(); 
}
function startFlappy() { initFlappy(); fIsRunning = true; window.addEventListener("keydown", fFlap); fCanvas.addEventListener("touchstart", fFlap, {passive: false}); fCanvas.addEventListener("mousedown", fFlap); fLoop = requestAnimationFrame(flappyLoop); }
function stopFlappy() { fIsRunning = false; cancelAnimationFrame(fLoop); window.removeEventListener("keydown", fFlap); if(fCanvas) { fCanvas.removeEventListener("touchstart", fFlap); fCanvas.removeEventListener("mousedown", fFlap); } }
function fFlap(e) { if (!fIsRunning) return; if (e.code === "Space" || e.type === "touchstart" || e.type === "mousedown") { fBird.vy = -6; if (e.type === "touchstart") e.preventDefault(); } }

function flappyLoop() {
  if (!fIsRunning) return;
  fBird.vy += 0.35; fBird.y += fBird.vy;
  if (fBird.y + fBird.h > fCanvas.height || fBird.y < 0) return endGameGlobal("flappy", fScore);
  if (fPipes.length === 0 || fPipes[fPipes.length - 1].x < fCanvas.width - 250) { 
    let topH = Math.random() * (fCanvas.height - 140 - 100) + 50; 
    fPipes.push({ x: fCanvas.width, topH: topH, passed: false, dirY: Math.random() > 0.5 ? 1 : -1, minY: topH - 40, maxY: topH + 40 }); 
  }
  for (let i = fPipes.length - 1; i >= 0; i--) {
    let p = fPipes[i]; p.x -= 2.5; 
    if (fScore >= 15) { p.topH += p.dirY * 1.5; if (p.topH > p.maxY || p.topH > fCanvas.height - 140 - 50) p.dirY = -1; if (p.topH < p.minY || p.topH < 50) p.dirY = 1; }
    if (!p.passed && fBird.x > p.x + 50) { fScore++; p.passed = true; }
    if (fBird.x < p.x + 50 && fBird.x + fBird.w > p.x && (fBird.y < p.topH || fBird.y + fBird.h > p.topH + 140)) return endGameGlobal("flappy", fScore); 
    if (p.x + 50 < 0) fPipes.splice(i, 1);
  }
  fWinds.forEach(w => { w.x -= w.s; if(w.x + w.w < 0) { w.x = fCanvas.width; w.y = Math.random() * fCanvas.height; }});
  drawFlappy(); fLoop = requestAnimationFrame(flappyLoop);
}

function drawFlappy() {
  if(!fCtx) return;
  let bgGrad = fCtx.createLinearGradient(0,0,0,fCanvas.height); bgGrad.addColorStop(0, "#010d07"); bgGrad.addColorStop(1, "#021a0f");
  fCtx.fillStyle = bgGrad; fCtx.fillRect(0, 0, fCanvas.width, fCanvas.height);
  fStars.forEach(s => { fCtx.fillStyle = `rgba(212, 175, 55, ${s.a})`; fCtx.beginPath(); fCtx.arc(s.x, s.y, s.s, 0, Math.PI*2); fCtx.fill(); s.a += (Math.random() - 0.5) * 0.1; if(s.a < 0) s.a = 0; if(s.a > 1) s.a = 1; });
  fCtx.strokeStyle = "rgba(212, 175, 55, 0.15)"; fCtx.lineWidth = 2; fWinds.forEach(w => { fCtx.beginPath(); fCtx.moveTo(w.x, w.y); fCtx.lineTo(w.x + w.w, w.y); fCtx.stroke(); });
  
  fPipes.forEach(p => { 
    let pGrad = fCtx.createLinearGradient(p.x, 0, p.x + 50, 0); pGrad.addColorStop(0, "#856a1b"); pGrad.addColorStop(0.5, "#D4AF37"); pGrad.addColorStop(1, "#856a1b"); fCtx.fillStyle = pGrad; 
    fCtx.fillRect(p.x, 0, 50, p.topH); fCtx.fillStyle = "#fceea7"; fCtx.fillRect(p.x - 4, p.topH - 10, 58, 10); 
    fCtx.fillStyle = pGrad; fCtx.fillRect(p.x, p.topH + 140, 50, fCanvas.height); fCtx.fillStyle = "#fceea7"; fCtx.fillRect(p.x - 4, p.topH + 140, 58, 10); 
  });
  
  fCtx.save(); fCtx.translate(fBird.x + fBird.w / 2, fBird.y + fBird.h / 2);
  let angle = Math.PI / 8 * (fBird.vy / 6); if (angle < -Math.PI/4) angle = -Math.PI/4; if (angle > Math.PI/3) angle = Math.PI/3; fCtx.rotate(angle);
  let bGrad = fCtx.createLinearGradient(-15, -15, 15, 15); bGrad.addColorStop(0, "#fceea7"); bGrad.addColorStop(1, "#D4AF37"); fCtx.fillStyle = bGrad; fCtx.beginPath(); fCtx.ellipse(0, 0, 16, 12, 0, 0, Math.PI*2); fCtx.fill();
  fCtx.fillStyle = "#fff"; fCtx.beginPath(); let wingY = (fBird.vy < 0) ? 8 : -2; fCtx.ellipse(-4, wingY, 8, 5, Math.PI/6, 0, Math.PI*2); fCtx.fill();
  fCtx.fillStyle = "#000"; fCtx.beginPath(); fCtx.arc(8, -4, 2, 0, Math.PI*2); fCtx.fill();
  fCtx.fillStyle = "#ff4757"; fCtx.beginPath(); fCtx.moveTo(14, -2); fCtx.lineTo(22, 2); fCtx.lineTo(14, 4); fCtx.fill(); fCtx.restore();
  fCtx.fillStyle = "#D4AF37"; fCtx.font = "800 34px 'Poppins', sans-serif"; fCtx.textAlign = "center"; fCtx.fillText(fScore, fCanvas.width / 2, 50); 
}

/* GAME 2: TOWER */
const tCanvas = document.getElementById("towerCanvas"); let tCtx; if(tCanvas) tCtx = tCanvas.getContext("2d");
let tBlocks = []; let tScore = 0; let tIsRunning = false; let tLoop;
let pendulum = { angle: 0, speed: 0.04, maxAngle: Math.PI / 3, ropeLength: 160, isDropping: false, dropY: 0, dropX: 0, currentWidth: 160 };

function initTower() { tBlocks = [{ x: 80, y: 400, w: 160, h: 40 }]; tScore = 0; tIsRunning = false; pendulum.currentWidth = 160; resetPendulum(); drawTower(); }
function resetPendulum() { pendulum.angle = 0; pendulum.isDropping = false; pendulum.speed = 0.035 + (tScore * 0.0015); }
function startTower() { initTower(); tIsRunning = true; window.addEventListener("keydown", tClick); tCanvas.addEventListener("touchstart", tClick, {passive: false}); tCanvas.addEventListener("mousedown", tClick); tLoop = requestAnimationFrame(towerLoop); }
function stopTower() { tIsRunning = false; cancelAnimationFrame(tLoop); window.removeEventListener("keydown", tClick); if(tCanvas) { tCanvas.removeEventListener("touchstart", tClick); tCanvas.removeEventListener("mousedown", tClick); } }
function tClick(e) { if (!tIsRunning) return; if (e.code === "Space" || e.type === "touchstart" || e.type === "mousedown") { if (e.type === "touchstart") e.preventDefault(); if (!pendulum.isDropping) { pendulum.isDropping = true; pendulum.dropX = (tCanvas.width / 2) + Math.sin(pendulum.angle) * pendulum.ropeLength - (pendulum.currentWidth / 2); pendulum.dropY = Math.cos(pendulum.angle) * pendulum.ropeLength; } } }

function towerLoop() {
  if (!tIsRunning) return;
  if (!pendulum.isDropping) { pendulum.angle += pendulum.speed; if (Math.abs(pendulum.angle) > pendulum.maxAngle) pendulum.speed *= -1; } 
  else {
    pendulum.dropY += 12; let lastBlock = tBlocks[tBlocks.length - 1];
    if (pendulum.dropY + 40 >= lastBlock.y) {
      let overlapStart = Math.max(pendulum.dropX, lastBlock.x), overlapEnd = Math.min(pendulum.dropX + pendulum.currentWidth, lastBlock.x + lastBlock.w), overlapWidth = overlapEnd - overlapStart;
      if (overlapWidth > 0) { tScore++; pendulum.currentWidth = overlapWidth; tBlocks.push({ x: overlapStart, y: lastBlock.y - 40, w: overlapWidth, h: 40 }); if (tBlocks[tBlocks.length - 1].y < 200) { tBlocks.forEach(b => b.y += 40); } resetPendulum(); } 
      else { endGameGlobal("tower", tScore); }
    }
  }
  drawTower(); tLoop = requestAnimationFrame(towerLoop);
}

function drawTower() {
  if(!tCtx) return;
  let bgGrad = tCtx.createLinearGradient(0,0,0,tCanvas.height); bgGrad.addColorStop(0, "#010d07"); bgGrad.addColorStop(1, "#021a0f"); tCtx.fillStyle = bgGrad; tCtx.fillRect(0, 0, tCanvas.width, tCanvas.height);
  if (!pendulum.isDropping) {
    let px = (tCanvas.width / 2) + Math.sin(pendulum.angle) * pendulum.ropeLength, py = Math.cos(pendulum.angle) * pendulum.ropeLength;
    tCtx.beginPath(); tCtx.moveTo(tCanvas.width / 2, 0); tCtx.lineTo(px, py); tCtx.strokeStyle = "#D4AF37"; tCtx.lineWidth = 3; tCtx.shadowBlur = 15; tCtx.shadowColor = "#D4AF37"; tCtx.stroke(); tCtx.shadowBlur = 0; 
    drawPremiumCake(px - (pendulum.currentWidth / 2), py, pendulum.currentWidth, 40, true);
  } else { drawPremiumCake(pendulum.dropX, pendulum.dropY, pendulum.currentWidth, 40, true); }
  tBlocks.forEach((b, i) => drawPremiumCake(b.x, b.y, b.w, b.h, i === tBlocks.length - 1));
  tCtx.fillStyle = "#D4AF37"; tCtx.font = "800 40px 'Poppins', sans-serif"; tCtx.textAlign = "center"; tCtx.fillText(tScore, tCanvas.width / 2, 60);
}

function drawPremiumCake(x, y, w, h, isTop) {
  let cakeGrad = tCtx.createLinearGradient(x, y, x, y + h); cakeGrad.addColorStop(0, "#4a2e12"); cakeGrad.addColorStop(1, "#261709"); tCtx.fillStyle = cakeGrad; tCtx.fillRect(x, y, w, h);
  let frostGrad = tCtx.createLinearGradient(x, y, x, y + h * 0.4); frostGrad.addColorStop(0, isTop ? "#D4AF37" : "#b5952f"); frostGrad.addColorStop(1, isTop ? "#b5952f" : "#856a1b"); tCtx.fillStyle = frostGrad; tCtx.beginPath(); tCtx.roundRect(x, y, w, h * 0.5, [5, 5, 0, 0]); tCtx.fill();
  for (let i = 0; i < w; i += 18) { tCtx.beginPath(); tCtx.arc(x + i + 9, y + h * 0.4, 6, 0, Math.PI); tCtx.fill(); }
  if (isTop && w > 20) { tCtx.fillStyle = "#ff4757"; tCtx.beginPath(); tCtx.arc(x + w / 2, y - 5, 6, 0, Math.PI * 2); tCtx.fill(); tCtx.fillStyle = "#00b359"; tCtx.beginPath(); tCtx.ellipse(x + w / 2 + 5, y - 10, 4, 2, Math.PI/4, 0, Math.PI*2); tCtx.fill(); }
}

boot();