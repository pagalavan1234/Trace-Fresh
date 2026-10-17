/* ===== Helpers ===== */
const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

function icon(name){
  const paths = {
    users:'<circle cx="9" cy="8" r="4"/><path d="M2 21c0-4 3-6 7-6s7 2 7 6"/><path d="M16 4a4 4 0 0 1 0 8M22 21c0-3-2-5-5-5.5"/>',
    box:'<path d="M3 7l9-4 9 4v10l-9 4-9-4z"/><path d="M3 7l9 4 9-4M12 11v10"/>',
    map:'<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>'
  };
  return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`;
}

function productCard(p){
  return `<article class="card product">
    <div class="product-img" style="background:${p.color}22"><span style="font-size:3.2rem" aria-hidden="true">${p.emoji}</span></div>
    <div class="product-body">
      <div class="meta"><h3 style="margin:0">${esc(p.name)}</h3><span class="tag">${esc(p.cat)}</span></div>
      <p class="tiny" style="margin-bottom:12px">${esc(p.variety)} · Farmer ${esc(p.farmer)}</p>
      <div class="meta"><span class="price">${esc(p.price)}</span><span class="tiny">${esc(p.unit)}</span></div>
      <p style="margin:10px 0 0"><span class="tag grey">Sample listing</span></p>
    </div>
  </article>`;
}

function legal(title, text){
  return `<div class="page-top"><div class="wrap"><h1 class="page-title">${title}</h1></div></div>
  <section><div class="wrap narrow"><div class="card"><p>${text}</p><a class="btn btn-ghost" href="#/" style="margin-top:12px">Back to home</a></div></div></section>`;
}

/* ===== Pages ===== */
const pages = {
  "/": () => `
    <section class="hero">
      <div class="wrap hero-grid">
        <div>
          <span class="eyebrow">Farm-to-institution traceability</span>
          <h1>Know Your Farmer. Track Every Batch.</h1>
          <p class="lead">Connect with farmers, source fresh produce directly and follow the journey of every recorded batch from farm to destination.</p>
          <div class="btn-row">
            <a class="btn btn-primary" href="#/produce">Explore fresh produce</a>
            <a class="btn btn-ghost" href="#/signin">Register as a farmer</a>
            <a class="btn btn-ghost" href="#/trace">Track a batch</a>
          </div>
        </div>
        <div class="hero-badge">${LOGO_SVG}</div>
      </div>
    </section>

    <div class="strip"><div class="wrap">
      <span>✔ Permanent Farmer IDs</span><span>✔ Batch-level records</span><span>✔ Only recorded events shown</span><span>✔ Permission-based GPS</span>
    </div></div>

    <section>
      <div class="wrap">
        <div class="head"><span class="eyebrow">Why Trace Fresh</span><h2>Simple for farmers. Clear for buyers.</h2></div>
        <div class="grid-3">
          <article class="card"><div class="icon">${icon("users")}</div><h3>Direct from farmers</h3><p>Schools and institutions see who grew the produce, identified by a permanent Farmer ID.</p></article>
          <article class="card"><div class="icon">${icon("box")}</div><h3>Batch-level traceability</h3><p>Each lot has its own Batch ID and a timeline showing only the events that were actually recorded.</p></article>
          <article class="card"><div class="icon">${icon("map")}</div><h3>Honest tracking</h3><p>GPS is recorded only for authorised shipments with permission. Missing details are clearly marked.</p></article>
        </div>
      </div>
    </section>

    <section style="padding-top:0">
      <div class="wrap">
        <div class="head"><span class="eyebrow">Featured</span><h2>Start with tomatoes</h2><p class="lead">Tomatoes lead the platform, with vegetables, fruits and dairy listed by the farmers who supply them.</p></div>
        <div class="grid-4">${PRODUCTS.slice(0,4).map(productCard).join("")}</div>
      </div>
    </section>

    <section style="padding-top:0">
      <div class="wrap">
        <div class="band">
          <div><h2>Ready to trace your next delivery?</h2><p>Look up any Batch ID or browse the produce catalogue.</p></div>
          <div class="btn-row">
            <a class="btn btn-light" href="#/trace">Track a batch</a>
            <a class="btn btn-ghost" style="color:#fff;border-color:#fff" href="#/produce">Browse produce</a>
          </div>
        </div>
      </div>
    </section>`,

  "/produce": () => `
    <div class="page-top"><div class="wrap">
      <span class="eyebrow">Catalogue</span>
      <h1 class="page-title">Fresh produce</h1>
      <p class="lead">Sample listings to show the layout. Real prices and quantities appear once farmers register.</p>
    </div></div>
    <section><div class="wrap">
      <div class="filters" role="group" aria-label="Filter by category">
        ${["All","Vegetables","Fruits","Dairy"].map((c,i)=>`<button class="chip" data-cat="${c}" aria-pressed="${i===0}">${c}</button>`).join("")}
      </div>
      <div class="grid-4" id="productGrid">${PRODUCTS.map(productCard).join("")}</div>
    </div></section>`,

  "/trace": () => `
    <div class="page-top"><div class="wrap">
      <span class="eyebrow">Traceability</span>
      <h1 class="page-title">Track a batch</h1>
      <p class="lead">Enter a Batch ID, or scan the QR code on a crate or shelf label with your phone camera. A QR code opens the record; it does not prove freshness or quality by itself.</p>
    </div></div>
    <section><div class="wrap narrow">
      <form id="traceForm" class="card" novalidate>
        <div class="field">
          <label for="batchId">Batch ID</label>
          <input id="batchId" name="batchId" placeholder="e.g. BATCH-2026-0001" autocomplete="off">
          <div class="error" id="batchError" role="alert"></div>
        </div>
        <button class="btn btn-primary" type="submit">Look up batch</button>
        <p class="tiny" style="margin-top:14px">Try: BATCH-2026-0001 or BATCH-2026-0002</p>
      </form>
      <div id="traceResult" style="margin-top:24px" aria-live="polite"></div>
    </div></section>`,

  "/how": () => `
    <div class="page-top"><div class="wrap">
      <span class="eyebrow">How it works</span>
      <h1 class="page-title">From farm to school in four steps</h1>
      <p class="lead">Every step is recorded against a Batch ID, so the record always matches the produce.</p>
    </div></div>
    <section><div class="wrap grid-4">
      ${[
        ["1","Farmer lists produce","Farmers publish available products with quantity, unit and price."],
        ["2","Buyer requests an order","Schools build a shopping list and send an order request."],
        ["3","Farmer accepts and dispatches","The farmer accepts or rejects the order and links it to a batch."],
        ["4","Delivery is recorded","Recorded events and permitted GPS points update the batch timeline."]
      ].map(([n,t,d])=>`<article class="card"><div class="tag" style="margin-bottom:14px">Step ${n}</div><h3>${t}</h3><p>${d}</p></article>`).join("")}
    </div></section>
    <section style="padding-top:0"><div class="wrap narrow">
      <div class="head"><span class="eyebrow">Questions</span><h2>Frequently asked</h2></div>
      <details open><summary>Does scanning a QR code confirm that produce is safe or fresh?</summary><p>No. It opens the recorded batch information. It does not confirm quality, freshness or safety on its own.</p></details>
      <details><summary>Is my location tracked all the time?</summary><p>No. GPS is recorded only for authorised shipments, after permission is granted, and it can be paused or stopped at any time.</p></details>
      <details><summary>How do I know a farmer is verified?</summary><p>Farmers start as pending. A verified badge appears only after verification is complete.</p></details>
      <details><summary>Can I pay through Trace Fresh?</summary><p>Not yet. Payments will be added only after a genuine payment gateway is integrated and tested.</p></details>
    </div></section>`,

  "/signin": () => `
    <div class="page-top"><div class="wrap"><span class="eyebrow">Account</span><h1 class="page-title">Sign in or register</h1></div></div>
    <section><div class="wrap" style="max-width:520px">
      <div class="notice"><strong>Preview only.</strong> Accounts are not active yet. Nothing you enter here is saved.</div>
      <div class="card">
        <form id="signinForm" novalidate>
          <div class="field"><label for="email">Email</label><input id="email" type="email" autocomplete="email"><div class="error" id="emailError" role="alert"></div></div>
          <div class="field"><label for="role">I am a</label>
            <select id="role"><option>Farmer</option><option>School or institution</option><option>Transporter</option><option>Public customer</option></select></div>
          <button class="btn btn-primary btn-block" type="submit">Continue</button>
        </form>
        <p id="signinMsg" class="tiny" style="margin-top:14px" role="status"></p>
      </div>
    </div></section>`,

  "/contact": () => `
    <div class="page-top"><div class="wrap">
      <span class="eyebrow">Contact</span>
      <h1 class="page-title">We're here to help</h1>
      <p class="lead">Questions about registering, listing produce or tracing a batch? Send us a message.</p>
    </div></div>
    <section><div class="wrap grid-2" style="align-items:start">
      <form id="contactForm" class="card" novalidate>
        <div class="field"><label for="cname">Your name</label><input id="cname"><div class="error" id="cnameError" role="alert"></div></div>
        <div class="field"><label for="cemail">Email</label><input id="cemail" type="email"><div class="error" id="cemailError" role="alert"></div></div>
        <div class="field"><label for="cmsg">Message</label><textarea id="cmsg"></textarea><div class="error" id="cmsgError" role="alert"></div></div>
        <button class="btn btn-primary" type="submit">Open in email</button>
      </form>
      <div class="card">
        <h3>Contact details</h3>
        <p>Email: <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a></p>
        <p class="tiny" style="margin-top:14px">Your message opens in your email app. Nothing is stored on this website.</p>
      </div>
    </div></section>`,

  "/privacy": () => legal("Privacy", "We collect only the information you choose to share. Location data is recorded only for authorised shipments, with your permission. We never sell personal data. A full privacy policy will be published before launch."),
  "/terms":   () => legal("Terms of use", "Trace Fresh is a platform connecting farmers, buyers and transporters. It does not own the produce. Sample listings and batch records are demonstrations. Full terms will be published before launch."),
  "/notfound":() => legal("Page not found", "That page does not exist. Use the menu to return to the homepage.")
};

/* ===== Page behaviour ===== */
function bind(route){
  if(route === "/produce"){
    document.querySelectorAll("[data-cat]").forEach(btn => btn.addEventListener("click", () => {
      const cat = btn.dataset.cat;
      document.querySelectorAll("[data-cat]").forEach(b => b.setAttribute("aria-pressed", String(b === btn)));
      const list = cat === "All" ? PRODUCTS : PRODUCTS.filter(p => p.cat === cat);
      document.getElementById("productGrid").innerHTML = list.map(productCard).join("");
    }));
  }

  if(route === "/trace"){
    document.getElementById("traceForm").addEventListener("submit", e => {
      e.preventDefault();
      const id = document.getElementById("batchId").value.trim().toUpperCase();
      const err = document.getElementById("batchError");
      const out = document.getElementById("traceResult");
      if(!/^BATCH-\d{4}-\d{4}$/.test(id)){
        err.textContent = "Enter a Batch ID in the format BATCH-2026-0001.";
        out.innerHTML = "";
        return;
      }
      err.textContent = "";
      const b = BATCHES[id];
      if(!b){
        out.innerHTML = `<div class="notice"><strong>Batch not found.</strong> Check the code on the crate or label, or contact the farmer. No record exists for ${esc(id)} in this demonstration.</div>`;
        return;
      }
      out.innerHTML = `<div class="card">
        <div class="row"><strong>Batch ID</strong><span>${esc(id)}</span></div>
        <div class="row"><strong>Product</strong><span>${esc(b.product)}</span></div>
        <div class="row"><strong>Farmer ID</strong><span>${esc(b.farmer)}</span></div>
        <div class="row"><strong>Origin</strong><span>${esc(b.origin)}</span></div>
        <div class="row"><strong>Quantity</strong><span>${esc(b.qty)}</span></div>
        <h3 style="margin-top:24px">Recorded journey</h3>
        <ul class="timeline">${b.events.map(ev => `
          <li class="${ev.when ? "" : "missing"}">
            <strong>${esc(ev.t)}</strong>
            <div class="when">${ev.when ? esc(ev.when) : "Not recorded"} · <span class="tag ${ev.when ? "" : "grey"}">${esc(ev.src)}</span></div>
          </li>`).join("")}
        </ul>
        <p class="tiny" style="margin-top:12px">Sample record for demonstration. Only recorded events are shown.</p>
      </div>`;
    });
  }

  if(route === "/signin"){
    document.getElementById("signinForm").addEventListener("submit", e => {
      e.preventDefault();
      const email = document.getElementById("email");
      const err = document.getElementById("emailError");
      if(!email.checkValidity() || !email.value){
        err.textContent = "Enter a valid email address.";
        return;
      }
      err.textContent = "";
      document.getElementById("signinMsg").textContent = "Thank you. Accounts will open soon and you will be notified at this address.";
      e.target.reset();
    });
  }

  if(route === "/contact"){
    document.getElementById("contactForm").addEventListener("submit", e => {
      e.preventDefault();
      const name  = document.getElementById("cname");
      const email = document.getElementById("cemail");
      const msg   = document.getElementById("cmsg");
      const setErr = (id, text) => { document.getElementById(id).textContent = text; return !text; };
      const ok = [
        setErr("cnameError", name.value.trim() ? "" : "Please enter your name."),
        setErr("cemailError", email.value && email.checkValidity() ? "" : "Please enter a valid email."),
        setErr("cmsgError", msg.value.trim() ? "" : "Please enter a message.")
      ].every(Boolean);
      if(!ok) return;
      const body = encodeURIComponent(`${msg.value}\n\nFrom: ${name.value} <${email.value}>`);
      location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Trace Fresh enquiry")}&body=${body}`;
    });
  }
}

/* ===== Router ===== */
const app = document.getElementById("app");
const header = document.querySelector("header.site");
const menuBtn = document.getElementById("menuBtn");

const PAGE_TITLES = {
  "/": "Know Your Farmer. Track Every Batch.",
  "/produce": "Fresh produce",
  "/trace": "Track a batch",
  "/how": "How it works",
  "/signin": "Sign in",
  "/contact": "Contact",
  "/privacy": "Privacy",
  "/terms": "Terms of use",
  "/notfound": "Page not found"
};

function currentRoute(){
  const path = location.hash.replace(/^#/, "") || "/";
  return pages[path] ? path : "/notfound";
}

function render(){
  const route = currentRoute();
  app.innerHTML = pages[route]();
  document.title = `${PAGE_TITLES[route]} | Trace Fresh`;
  document.querySelectorAll("#mainNav a").forEach(a => a.classList.toggle("active", a.dataset.route === route));
  header.classList.remove("open");
  menuBtn.setAttribute("aria-expanded", "false");
  window.scrollTo(0, 0);
  app.focus({preventScroll: true});
  bind(route);
}

menuBtn.addEventListener("click", () => {
  const open = header.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});

document.getElementById("brandMark").innerHTML = MARK_SVG;
window.addEventListener("hashchange", render);
if(!location.hash) location.hash = "#/";
render();
