const opportunities = [
  {
    id: "learning-pathway",
    category: "Education",
    title: "Workforce-funded technical learning pathway",
    value: 6500,
    fundingType: "Eligibility based",
    fit: 94,
    effort: "Medium effort",
    geography: "State or local",
    description: "An illustrative pathway showing how public workforce systems may support approved training for eligible participants.",
    why: "The example profile includes a career transition and a goal to build new technical credentials.",
    steps: [
      "Locate the official workforce agency for your place of residence.",
      "Confirm whether the desired training provider and program are approved.",
      "Request the complete eligibility and documentation requirements.",
      "Verify what costs are covered before enrolling or paying a deposit."
    ]
  },
  {
    id: "education-pathway",
    category: "Education",
    title: "Tuition-supported college or certificate route",
    value: 12000,
    fundingType: "Fully funded if eligible",
    fit: 91,
    effort: "Medium effort",
    geography: "State specific",
    description: "A fictional composite of tuition support programs that may cover eligible college or certificate costs.",
    why: "The example profile prioritizes formal credentials and career mobility.",
    steps: [
      "Identify official state and institutional tuition support programs.",
      "Separate guaranteed benefits from competitive awards.",
      "Confirm residency, enrollment, and financial aid requirements.",
      "Calculate any remaining fees, materials, or living costs."
    ]
  },
  {
    id: "startup-pathway",
    category: "Business",
    title: "Startup infrastructure and software credits",
    value: 10000,
    fundingType: "Corporate credits",
    fit: 89,
    effort: "Medium effort",
    geography: "Global or regional",
    description: "An illustrative route through startup programs that may provide time-limited cloud, software, or developer-tool credits.",
    why: "The example profile includes early-stage digital product development.",
    steps: [
      "Review the provider's official startup-program terms.",
      "Confirm company-stage, funding, and affiliation requirements.",
      "Document expiration dates and services that are excluded.",
      "Plan for costs that begin when the promotional credit ends."
    ]
  },
  {
    id: "fellowship-pathway",
    category: "Career",
    title: "Funded professional fellowship",
    value: 7500,
    fundingType: "Competitive funding",
    fit: 86,
    effort: "High effort",
    geography: "National or global",
    description: "A fictional composite of fellowships that may cover program fees and may also provide travel, lodging, or a stipend.",
    why: "The example profile combines leadership, technology, and systems-building interests.",
    steps: [
      "Read the official eligibility language and selection criteria.",
      "List which expenses are covered and which remain personal.",
      "Prepare evidence for each required experience claim.",
      "Confirm the deadline and time zone on the official application."
    ]
  },
  {
    id: "professional-attire-pathway",
    category: "Essentials",
    title: "Professional wardrobe and presentation support",
    value: 900,
    fundingType: "Donated support",
    fit: 83,
    effort: "Low effort",
    geography: "Local",
    description: "An illustrative pathway through nonprofit programs that may provide professional clothing or interview preparation.",
    why: "The example profile includes an active professional transition and interview preparation.",
    steps: [
      "Find the official local program and service area.",
      "Check whether a referral or appointment is required.",
      "Confirm available sizes, categories, and service limits.",
      "Protect personal information when requesting assistance."
    ]
  },
  {
    id: "food-access-pathway",
    category: "Food",
    title: "Fresh-food purchasing incentive",
    value: 480,
    fundingType: "Eligibility based",
    fit: 78,
    effort: "Low effort",
    geography: "State or local",
    description: "A fictional composite showing how eligible households may access additional purchasing power for qualifying fresh food.",
    why: "The pathway demonstrates how Abundance could surface recurring, practical value in addition to one-time awards.",
    steps: [
      "Confirm eligibility through the official administering agency.",
      "Find current participating vendors and approved products.",
      "Check monthly limits and transaction rules.",
      "Reverify the program before relying on recurring value."
    ]
  },
  {
    id: "wellness-pathway",
    category: "Wellness",
    title: "Sponsored wellness-program seat",
    value: 2500,
    fundingType: "Competitive sponsorship",
    fit: 76,
    effort: "Medium effort",
    geography: "Provider specific",
    description: "A fictional composite of scholarship or sponsored seats that some wellness organizations may choose to offer.",
    why: "The example profile expresses an interest in evidence-aware wellness and personal capacity.",
    steps: [
      "Verify that the scholarship is listed by the official provider.",
      "Confirm whether travel, lodging, or meals are included.",
      "Review privacy terms before sharing health information.",
      "Treat selection as competitive unless the provider states otherwise."
    ]
  },
  {
    id: "library-access-pathway",
    category: "Learning",
    title: "Premium learning through public-library access",
    value: 1020,
    fundingType: "No direct cost",
    fit: 88,
    effort: "Low effort",
    geography: "Local",
    description: "An illustrative route to learning platforms, databases, books, media, and professional resources through a library account.",
    why: "The example profile values continuous learning and may be able to replace paid subscriptions.",
    steps: [
      "Review the official digital-resource catalog for your library system.",
      "Confirm card eligibility and remote access rules.",
      "Activate only the platforms relevant to your goals.",
      "Cancel duplicate paid subscriptions after confirming access."
    ]
  }
];

const examplePrompts = [
  "I want my cybersecurity certification funded.",
  "I want to build a startup without paying full price for software.",
  "I need professional clothing for leadership interviews.",
  "I want to attend a high-quality wellness program through a scholarship."
];

const storageKeys = {
  pipeline: "abundance-demo-pipeline-v2",
  theme: "abundance-demo-theme-v2"
};

const state = {
  route: "radar",
  category: "All",
  currentOpportunityId: null,
  pipeline: readPipeline()
};

const elements = {
  html: document.documentElement,
  views: [...document.querySelectorAll("[data-view]")],
  routeControls: [...document.querySelectorAll("[data-route]")],
  navButtons: [...document.querySelectorAll(".nav-button")],
  bestMatchGrid: document.querySelector("#best-match-grid"),
  exploreGrid: document.querySelector("#explore-grid"),
  wantGrid: document.querySelector("#want-grid"),
  filters: document.querySelector("#category-filters"),
  dialog: document.querySelector("#opportunity-dialog"),
  toast: document.querySelector("#toast")
};

function readPipeline() {
  try {
    const stored = JSON.parse(localStorage.getItem(storageKeys.pipeline) || "[]");
    if (!Array.isArray(stored)) return [];
    return stored.filter((id) => opportunities.some((item) => item.id === id));
  } catch {
    return [];
  }
}

function savePipeline() {
  try {
    localStorage.setItem(storageKeys.pipeline, JSON.stringify(state.pipeline));
  } catch {
    showToast("This browser did not allow local storage.");
  }
}

function formatMoney(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function cardTemplate(item) {
  const saved = state.pipeline.includes(item.id);
  return `
    <article class="opportunity-card">
      <div class="card-top">
        <span class="type-pill">${escapeHtml(item.fundingType)}</span>
        <span class="card-value">${formatMoney(item.value)}</span>
      </div>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.description)}</p>
      <div class="evidence-row">
        <span class="status-pill">Illustrative pathway</span>
        <span class="meta-pill">${escapeHtml(item.category)}</span>
        <span class="meta-pill">${escapeHtml(item.geography)}</span>
      </div>
      <div class="confidence-track" title="Illustrative relevance score">
        <span style="width: ${item.fit}%"></span>
      </div>
      <div class="card-actions">
        <button class="primary-button" type="button" data-open-opportunity="${item.id}">Inspect pathway</button>
        <button class="secondary-button" type="button" data-save-opportunity="${item.id}">${saved ? "Saved" : "Save"}</button>
      </div>
    </article>`;
}

function renderCards(container, items) {
  container.innerHTML = items.map(cardTemplate).join("");
}

function renderBestMatches() {
  const ordered = [...opportunities].sort((a, b) => b.fit - a.fit).slice(0, 6);
  renderCards(elements.bestMatchGrid, ordered);
}

function renderExplore() {
  const categories = ["All", ...new Set(opportunities.map((item) => item.category))];
  elements.filters.innerHTML = categories.map((category) => `
    <button class="filter-button ${category === state.category ? "active" : ""}" type="button" data-category="${escapeHtml(category)}" aria-pressed="${category === state.category}">
      ${escapeHtml(category)}
    </button>`).join("");

  const filtered = state.category === "All"
    ? opportunities
    : opportunities.filter((item) => item.category === state.category);
  renderCards(elements.exploreGrid, filtered);
}

function renderMetrics() {
  const total = opportunities.reduce((sum, item) => sum + item.value, 0);
  document.querySelector("#total-value").textContent = formatMoney(total);
  document.querySelector("#match-count").textContent = String(opportunities.length);
  document.querySelector("#saved-count").textContent = String(state.pipeline.length);
}

function renderPipeline() {
  const items = state.pipeline
    .map((id) => opportunities.find((item) => item.id === id))
    .filter(Boolean);
  const total = items.reduce((sum, item) => sum + item.value, 0);

  document.querySelector("#pipeline-total").textContent = String(items.length);
  document.querySelector("#pipeline-value").textContent = formatMoney(total);

  const list = document.querySelector("#pipeline-list");
  if (!items.length) {
    list.innerHTML = `
      <div class="empty-state">
        <strong>Your demo pipeline is empty.</strong>
        <p>Save an illustrative pathway to see how discovery can move toward verification and action.</p>
      </div>`;
    return;
  }

  list.innerHTML = items.map((item) => `
    <article class="pipeline-item">
      <div>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.fundingType)} · ${formatMoney(item.value)} illustrative value</p>
      </div>
      <span class="pipeline-stage">Needs verification</span>
      <button class="remove-button" type="button" data-remove-opportunity="${item.id}">Remove</button>
    </article>`).join("");
}

function renderAll() {
  renderBestMatches();
  renderExplore();
  renderMetrics();
  renderPipeline();
}

function activateRoute(route, options = {}) {
  const validRoute = elements.views.some((view) => view.dataset.view === route) ? route : "radar";
  state.route = validRoute;

  elements.views.forEach((view) => {
    const active = view.dataset.view === validRoute;
    view.hidden = !active;
    view.classList.toggle("active", active);
  });

  elements.navButtons.forEach((button) => {
    const active = button.dataset.route === validRoute;
    button.classList.toggle("active", active);
    if (active) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });

  if (!options.preserveHash) {
    history.replaceState(null, "", `#${validRoute}`);
  }

  if (!options.skipFocus) {
    document.querySelector("#main-content").focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function showOpportunity(id) {
  const item = opportunities.find((opportunity) => opportunity.id === id);
  if (!item) return;
  state.currentOpportunityId = id;

  document.querySelector("#dialog-category").textContent = item.category;
  document.querySelector("#dialog-title").textContent = item.title;
  document.querySelector("#dialog-description").textContent = item.description;
  document.querySelector("#dialog-why").textContent = item.why;
  document.querySelector("#dialog-steps").innerHTML = item.steps
    .map((step) => `<li>${escapeHtml(step)}</li>`)
    .join("");
  document.querySelector("#dialog-evidence").innerHTML = `
    <div><span>Evidence state</span><strong>Illustrative only</strong></div>
    <div><span>Source state</span><strong>Not connected</strong></div>
    <div><span>Funding class</span><strong>${escapeHtml(item.fundingType)}</strong></div>`;
  document.querySelector("#dialog-save").textContent = state.pipeline.includes(id)
    ? "Saved to pipeline"
    : "Save to pipeline";

  if (typeof elements.dialog.showModal === "function") elements.dialog.showModal();
  else elements.dialog.setAttribute("open", "");
}

function closeDialog() {
  if (typeof elements.dialog.close === "function") elements.dialog.close();
  else elements.dialog.removeAttribute("open");
}

function addToPipeline(id) {
  if (!opportunities.some((item) => item.id === id)) return;
  if (!state.pipeline.includes(id)) {
    state.pipeline.unshift(id);
    savePipeline();
    renderAll();
    showToast("Saved locally to your demo pipeline.");
  } else {
    showToast("This pathway is already saved.");
  }
}

function removeFromPipeline(id) {
  state.pipeline = state.pipeline.filter((savedId) => savedId !== id);
  savePipeline();
  renderAll();
  showToast("Removed from the demo pipeline.");
}

function mapGoal(goal) {
  const normalized = goal.toLowerCase();
  const categorySignals = [
    { terms: ["cyber", "certificate", "college", "degree", "course", "training", "school"], categories: ["Education", "Learning", "Career"] },
    { terms: ["startup", "business", "software", "cloud", "company", "ai"], categories: ["Business", "Career"] },
    { terms: ["clothes", "wardrobe", "interview", "attire"], categories: ["Essentials", "Career"] },
    { terms: ["food", "grocery", "produce"], categories: ["Food", "Essentials"] },
    { terms: ["wellness", "retreat", "health", "recovery"], categories: ["Wellness"] },
    { terms: ["fellowship", "travel", "leadership", "career"], categories: ["Career", "Education"] }
  ];

  const matchedCategories = new Set();
  categorySignals.forEach((signal) => {
    if (signal.terms.some((term) => normalized.includes(term))) {
      signal.categories.forEach((category) => matchedCategories.add(category));
    }
  });

  let matches = opportunities.filter((item) => matchedCategories.has(item.category));
  if (matches.length < 3) {
    const additions = opportunities
      .filter((item) => !matches.includes(item))
      .sort((a, b) => b.fit - a.fit)
      .slice(0, 3 - matches.length);
    matches = [...matches, ...additions];
  }

  return matches.slice(0, 6);
}

function runGoalSearch(goal) {
  const trimmed = goal.trim();
  if (!trimmed) {
    showToast("Tell Abundance what you want to make possible.");
    return;
  }

  document.querySelector("#want-input").value = trimmed;
  const matches = mapGoal(trimmed);
  document.querySelector("#want-summary").textContent = `${matches.length} illustrative pathways for “${trimmed}”`;
  renderCards(elements.wantGrid, matches);
  document.querySelector("#want-results").hidden = false;
  activateRoute("want");
}

let toastTimer;
function showToast(message) {
  clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.classList.add("visible");
  toastTimer = setTimeout(() => elements.toast.classList.remove("visible"), 2600);
}

function setTheme(theme) {
  const nextTheme = theme === "light" ? "light" : "dark";
  elements.html.dataset.theme = nextTheme;
  document.querySelector("#theme-icon").textContent = nextTheme === "dark" ? "☼" : "☾";
  document.querySelector("#theme-toggle").setAttribute(
    "aria-label",
    nextTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"
  );
  try {
    localStorage.setItem(storageKeys.theme, nextTheme);
  } catch {
    // Theme persistence is optional.
  }
}

function initializeTheme() {
  let storedTheme = "dark";
  try {
    storedTheme = localStorage.getItem(storageKeys.theme) || "dark";
  } catch {
    storedTheme = "dark";
  }
  setTheme(storedTheme);
}

elements.routeControls.forEach((control) => {
  control.addEventListener("click", (event) => {
    event.preventDefault();
    activateRoute(control.dataset.route);
  });
});

document.addEventListener("click", (event) => {
  const openButton = event.target.closest("[data-open-opportunity]");
  if (openButton) showOpportunity(openButton.dataset.openOpportunity);

  const saveButton = event.target.closest("[data-save-opportunity]");
  if (saveButton) addToPipeline(saveButton.dataset.saveOpportunity);

  const removeButton = event.target.closest("[data-remove-opportunity]");
  if (removeButton) removeFromPipeline(removeButton.dataset.removeOpportunity);

  const filterButton = event.target.closest("[data-category]");
  if (filterButton) {
    state.category = filterButton.dataset.category;
    renderExplore();
  }
});

document.querySelector("#quick-search-form").addEventListener("submit", (event) => {
  event.preventDefault();
  runGoalSearch(new FormData(event.currentTarget).get("goal") || "");
});

document.querySelector("#want-form").addEventListener("submit", (event) => {
  event.preventDefault();
  runGoalSearch(new FormData(event.currentTarget).get("goal") || "");
});

document.querySelector("#example-prompt").addEventListener("click", () => {
  const prompt = examplePrompts[Math.floor(Math.random() * examplePrompts.length)];
  document.querySelector("#want-input").value = prompt;
});

document.querySelector("#refresh-matches").addEventListener("click", () => {
  const cards = [...opportunities].sort(() => Math.random() - 0.5).slice(0, 6);
  renderCards(elements.bestMatchGrid, cards);
  showToast("Illustrative pathways reordered.");
});

document.querySelector("#theme-toggle").addEventListener("click", () => {
  setTheme(elements.html.dataset.theme === "dark" ? "light" : "dark");
});

document.querySelector("#dialog-close").addEventListener("click", closeDialog);
document.querySelector("#dialog-save").addEventListener("click", () => {
  if (state.currentOpportunityId) addToPipeline(state.currentOpportunityId);
  closeDialog();
});

elements.dialog.addEventListener("click", (event) => {
  const bounds = elements.dialog.getBoundingClientRect();
  const outside = event.clientX < bounds.left
    || event.clientX > bounds.right
    || event.clientY < bounds.top
    || event.clientY > bounds.bottom;
  if (outside) closeDialog();
});

document.querySelector("#clear-pipeline").addEventListener("click", () => {
  if (!state.pipeline.length) {
    showToast("The demo pipeline is already empty.");
    return;
  }
  if (window.confirm("Clear all locally saved demonstration pathways?")) {
    state.pipeline = [];
    savePipeline();
    renderAll();
    showToast("Local demonstration data cleared.");
  }
});

window.addEventListener("hashchange", () => {
  activateRoute(location.hash.slice(1), { preserveHash: true, skipFocus: true });
});

initializeTheme();
renderAll();
activateRoute(location.hash.slice(1) || "radar", { preserveHash: true, skipFocus: true });
