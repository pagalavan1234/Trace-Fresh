(function () {
  "use strict";

  /* Add your project email here to make the Contact page open your email app. */
  var CONTACT_EMAIL = "";

  var PAGES = [
    ["index.html", "Home", "index"],
    ["catalogue.html", "Produce", "catalogue"],
    ["lookup.html", "Batch lookup", "lookup"],
    ["how-it-works.html", "How it works", "how-it-works"],
    ["contact.html", "Contact", "contact"]
  ];
  var page = document.body.getAttribute("data-page");

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  }

  /* ---------- Shared header and footer ---------- */
  function buildChrome() {
    var links = PAGES.map(function (p) {
      return '<li><a href="' + p[0] + '"' + (p[2] === page ? ' aria-current="page"' : "") + ">" + p[1] + "</a></li>";
    }).join("");
    var header = document.getElementById("site-header");
    header.innerHTML =
      '<div class="demo-bar">Student project demonstration. All produce and batch records are sample data.</div>' +
      '<div class="wrap bar">' +
      '<a class="brand" href="index.html">' +
      /* LOGO PLACEHOLDER: save your logo as assets/logo.png and it appears here automatically. */
      '<span class="logo-slot"><img src="assets/logo.png" alt="" width="44" height="44"></span><span>Trace Fresh</span></a>' +
      '<button class="menu-btn" type="button" aria-expanded="false" aria-controls="nav">Menu</button>' +
      '<nav id="nav" aria-label="Main"><ul>' + links + "</ul></nav></div>";

    var footer = document.getElementById("site-footer");
    footer.innerHTML =
      '<div class="wrap"><ul>' + links +
      '<li><a href="privacy.html">Privacy</a></li><li><a href="terms.html">Terms</a></li></ul>' +
      "<p>Trace Fresh is a student project demonstration. All listings and records are sample data.</p></div>";

    /* Logo fallback if assets/logo.png is missing */
    var slot = header.querySelector(".logo-slot");
    var img = slot.querySelector("img");
    function noLogo() { slot.className = "logo-slot ph"; slot.textContent = "LOGO"; }
    img.addEventListener("error", noLogo);
    if (img.complete && img.naturalWidth === 0) noLogo();

    /* Mobile menu */
    var btn = header.querySelector(".menu-btn");
    var nav = header.querySelector("nav");
    function setMenu(open) {
      nav.classList.toggle("open", open);
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    }
    btn.addEventListener("click", function () { setMenu(!nav.classList.contains("open")); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) { setMenu(false); btn.focus(); }
    });
    nav.addEventListener("click", function (e) { if (e.target.tagName === "A") setMenu(false); });
  }

  /* ---------- Catalogue ---------- */
  function initCatalogue() {
    var items = window.TF.produce;
    var cats = ["All"];
    items.forEach(function (i) { if (cats.indexOf(i.category) < 0) cats.push(i.category); });
    var filters = document.getElementById("filters");
    var list = document.getElementById("items");
    var count = document.getElementById("count");
    var current = "All";

    function render() {
      list.textContent = "";
      var shown = items.filter(function (i) { return current === "All" || i.category === current; });
      shown.forEach(function (i) {
        var card = el("article", "card");
        card.appendChild(el("h2", null, i.name));
        card.lastChild.style.fontSize = "1.2rem";
        card.appendChild(el("p", null, i.category));
        card.appendChild(el("p", "tag", "Sample listing"));
        list.appendChild(card);
      });
      count.textContent = "Showing " + shown.length + " sample item" + (shown.length === 1 ? "" : "s") +
        (current === "All" ? "." : " in " + current + ".");
    }
    cats.forEach(function (c) {
      var b = el("button", null, c);
      b.type = "button";
      b.setAttribute("aria-pressed", c === current ? "true" : "false");
      b.addEventListener("click", function () {
        current = c;
        Array.prototype.forEach.call(filters.children, function (x) {
          x.setAttribute("aria-pressed", x === b ? "true" : "false");
        });
        render();
      });
      filters.appendChild(b);
    });
    render();
  }

  /* ---------- Batch lookup ---------- */
  function initLookup() {
    var form = document.getElementById("lookup-form");
    var input = document.getElementById("batch-id");
    var out = document.getElementById("result");

    function message(kind, text) {
      out.textContent = "";
      out.appendChild(el("p", "msg " + kind, text));
    }
    function run(raw) {
      var id = raw.trim().toUpperCase();
      if (!id) { message("error", "Please enter a batch ID, for example TF-DEMO-001."); return; }
      if (!/^TF-DEMO-\d{3}$/.test(id)) {
        message("error", "\u201C" + id + "\u201D is not a valid batch ID format. Sample IDs look like TF-DEMO-001.");
        return;
      }
      var b = window.TF.batches[id];
      if (!b) {
        message("warn", "No sample record found for " + id + ". Try TF-DEMO-001, TF-DEMO-002 or TF-DEMO-003.");
        return;
      }
      out.textContent = "";
      var box = el("section", "result");
      box.appendChild(el("h2", null, "Batch " + id));
      box.appendChild(el("p", "tag", "Sample record. Not real tracking data"));
      box.appendChild(el("p", null, "Produce: " + b.produce));
      var ol = el("ol", "timeline");
      b.events.forEach(function (ev) {
        var li = el("li");
        li.appendChild(el("strong", null, ev.stage));
        li.appendChild(el("div", null, ev.date + " (sample date)"));
        li.appendChild(el("div", null, ev.note));
        ol.appendChild(li);
      });
      box.appendChild(ol);
      out.appendChild(box);
    }
    form.addEventListener("submit", function (e) { e.preventDefault(); run(input.value); });
    var q = new URLSearchParams(window.location.search).get("id");
    if (q) { input.value = q; run(q); }
  }

  /* ---------- Contact ---------- */
  function initContact() {
    var form = document.getElementById("contact-form");
    var status = document.getElementById("c-status");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = document.getElementById("c-name").value.trim();
      var msg = document.getElementById("c-msg").value.trim();
      if (!name || !msg) { status.textContent = "Please fill in both your name and a message."; return; }
      if (!CONTACT_EMAIL) {
        status.textContent = "Demo only: no contact email has been added yet, so nothing was sent.";
        return;
      }
      window.location.href = "mailto:" + CONTACT_EMAIL + "?subject=" + encodeURIComponent("Trace Fresh message from " + name) +
        "&body=" + encodeURIComponent(msg);
      status.textContent = "Opening your email app. Nothing is sent until you press send there.";
    });
  }

  buildChrome();
  if (page === "catalogue") initCatalogue();
  if (page === "lookup") initLookup();
  if (page === "contact") initContact();
})();
