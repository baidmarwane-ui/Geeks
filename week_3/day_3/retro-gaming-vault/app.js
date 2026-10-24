(() => {
  "use strict";

  const $ = (selector, root = document) => root.querySelector(selector);
  const cardsGrid = $("#cards-grid");
  const searchInput = $("#search-input");
  const categoryFilters = $("#category-filters");
  const sortSelect = $("#sort-select");
  const emptyState = $("#empty-state");
  const resultCount = $("#result-count");
  const favoritesFilter = $("#favorites-filter");
  const favoriteCount = $("#favorite-count");
  const dialog = $("#detail-dialog");
  const toast = $("#toast");

  let items = [...catalogItems];
  let activeCategory = "All";
  let favoritesOnly = false;
  let activeDialogItem = null;
  let toastTimer;

  const readStorage = (key, fallback) => {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch {
      return fallback;
    }
  };
  const writeStorage = (key, value) => {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* Storage may be unavailable. */ }
  };

  let favorites = new Set(readStorage("retrovault-favorites", []));
  const savedTheme = readStorage("retrovault-theme", "dark");
  if (savedTheme === "light") document.documentElement.dataset.theme = "light";
  updateThemeButton();

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[character]);
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
  }

  function updateFavoriteUI() {
    favoriteCount.textContent = favorites.size;
    favoritesFilter.setAttribute("aria-pressed", String(favoritesOnly));
  }

  function getVisibleItems() {
    const query = searchInput.value.trim().toLocaleLowerCase();
    let visible = items.filter(item => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      const matchesSearch = !query || [
        item.title, item.category, item.shortDescription, item.fullDetails,
        item.manufacturer, String(item.year)
      ].filter(Boolean).join(" ").toLocaleLowerCase().includes(query);
      const matchesFavorite = !favoritesOnly || favorites.has(item.id);
      return matchesCategory && matchesSearch && matchesFavorite;
    });

    switch (sortSelect.value) {
      case "az": visible.sort((a, b) => a.title.localeCompare(b.title)); break;
      case "za": visible.sort((a, b) => b.title.localeCompare(a.title)); break;
      case "year-desc": visible.sort((a, b) => b.year - a.year); break;
      case "year-asc": visible.sort((a, b) => a.year - b.year); break;
      default: visible.sort((a, b) => a.id - b.id);
    }
    return visible;
  }

  function renderItems() {
    const visible = getVisibleItems();
    cardsGrid.replaceChildren();
    emptyState.hidden = visible.length !== 0;
    cardsGrid.hidden = visible.length === 0;
    resultCount.textContent = `Showing ${visible.length} ${visible.length === 1 ? "item" : "items"}`;
    $("#total-count").textContent = items.length;

    const fragment = document.createDocumentFragment();
    visible.forEach((item, index) => {
      const article = document.createElement("article");
      article.className = "catalog-card";
      article.style.animationDelay = `${Math.min(index * 35, 280)}ms`;
      const isFavorite = favorites.has(item.id);
      const title = escapeHTML(item.title);
      const image = escapeHTML(item.image || "");
      const category = escapeHTML(item.category);
      const description = escapeHTML(item.shortDescription);
      const metric = escapeHTML(item.metric || `${item.year} release`);
      const manufacturer = escapeHTML(item.manufacturer || "Community pick");
      article.innerHTML = `
        <button class="card-image-button" type="button" data-open="${item.id}" aria-label="View details for ${title}">
          <img class="card-image" src="${image}" alt="${title}" loading="lazy">
          <span class="category-badge">${category}</span>
        </button>
        <button class="favorite-button" type="button" data-favorite="${item.id}" aria-label="${isFavorite ? "Remove from" : "Add to"} favorites: ${title}" aria-pressed="${isFavorite}">${isFavorite ? "♥" : "♡"}</button>
        <div class="card-body">
          <div class="card-meta"><span class="card-year">${item.year}</span><span class="card-metric">${metric}</span></div>
          <h3 class="card-title">${title}</h3>
          <p class="card-description">${description}</p>
          <div class="card-footer"><span class="card-manufacturer">${manufacturer}</span><button class="details-link" type="button" data-open="${item.id}">Explore details <span aria-hidden="true">→</span></button></div>
        </div>`;
      const imageElement = $(".card-image", article);
      imageElement.addEventListener("error", () => {
        imageElement.src = "https://placehold.co/800x500/171b2b/a78bfa?text=Retro+Vault";
      }, { once: true });
      fragment.append(article);
    });
    cardsGrid.append(fragment);
    updateFavoriteUI();
  }

  function openDetails(id) {
    const item = items.find(candidate => candidate.id === id);
    if (!item) return;
    activeDialogItem = item;
    $("#dialog-title").textContent = item.title;
    $("#dialog-image").src = item.image || "https://placehold.co/800x500/171b2b/a78bfa?text=Retro+Vault";
    $("#dialog-image").alt = item.title;
    $("#dialog-category").textContent = item.category;
    $("#dialog-id").textContent = `#${String(item.id).padStart(3, "0")}`;
    $("#dialog-metric").textContent = item.metric || `${item.year} release`;
    $("#dialog-description").textContent = item.fullDetails || item.shortDescription;
    $("#dialog-facts").innerHTML = `
      <div class="fact"><span>Release year</span><strong>${escapeHTML(item.year)}</strong></div>
      <div class="fact"><span>Generation</span><strong>${escapeHTML(item.generation || "Community pick")}</strong></div>
      <div class="fact"><span>Manufacturer</span><strong>${escapeHTML(item.manufacturer || "Community")}</strong></div>
      <div class="fact"><span>Known for</span><strong>${escapeHTML(item.notableFor || item.shortDescription)}</strong></div>`;
    updateDialogFavoriteButton();
    if (!dialog.open) dialog.showModal();
  }

  function updateDialogFavoriteButton() {
    if (!activeDialogItem) return;
    const saved = favorites.has(activeDialogItem.id);
    $("#dialog-favorite").textContent = saved ? "♥ Remove from favorites" : "♡ Add to favorites";
    $("#dialog-favorite").setAttribute("aria-pressed", String(saved));
  }

  function toggleFavorite(id) {
    if (favorites.has(id)) {
      favorites.delete(id);
      showToast("Removed from your favorites");
    } else {
      favorites.add(id);
      showToast("Added to your favorites");
    }
    writeStorage("retrovault-favorites", [...favorites]);
    renderItems();
    updateDialogFavoriteButton();
  }

  categoryFilters.addEventListener("click", event => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    activeCategory = button.dataset.category;
    categoryFilters.querySelectorAll("[data-category]").forEach(filter => {
      const selected = filter === button;
      filter.classList.toggle("active", selected);
      filter.setAttribute("aria-pressed", String(selected));
    });
    renderItems();
  });

  searchInput.addEventListener("input", renderItems);
  sortSelect.addEventListener("change", renderItems);
  favoritesFilter.addEventListener("click", () => {
    favoritesOnly = !favoritesOnly;
    favoritesFilter.setAttribute("aria-pressed", String(favoritesOnly));
    favoritesFilter.classList.toggle("active", favoritesOnly);
    renderItems();
  });

  cardsGrid.addEventListener("click", event => {
    const favoriteButton = event.target.closest("[data-favorite]");
    if (favoriteButton) {
      toggleFavorite(Number(favoriteButton.dataset.favorite));
      return;
    }
    const openButton = event.target.closest("[data-open]");
    if (openButton) openDetails(Number(openButton.dataset.open));
  });

  $("#dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => {
    if (event.target === dialog) dialog.close();
  });
  $("#dialog-favorite").addEventListener("click", () => {
    if (activeDialogItem) toggleFavorite(activeDialogItem.id);
  });
  $("#reset-filters").addEventListener("click", () => {
    searchInput.value = "";
    activeCategory = "All";
    favoritesOnly = false;
    sortSelect.value = "featured";
    categoryFilters.querySelectorAll("[data-category]").forEach(button => {
      const selected = button.dataset.category === "All";
      button.classList.toggle("active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    favoritesFilter.classList.remove("active");
    renderItems();
    searchInput.focus();
  });

  function updateThemeButton() {
    const light = document.documentElement.dataset.theme === "light";
    $("#theme-toggle").textContent = light ? "☾" : "☼";
    $("#theme-toggle").setAttribute("aria-label", light ? "Switch to dark theme" : "Switch to light theme");
    $("#theme-toggle").title = light ? "Switch to dark theme" : "Switch to light theme";
  }
  $("#theme-toggle").addEventListener("click", () => {
    const light = document.documentElement.dataset.theme !== "light";
    if (light) document.documentElement.dataset.theme = "light";
    else delete document.documentElement.dataset.theme;
    writeStorage("retrovault-theme", light ? "light" : "dark");
    updateThemeButton();
  });

  $("#add-item-form").addEventListener("submit", event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const title = String(data.get("title")).trim();
    const year = Number(data.get("year"));
    const description = String(data.get("description")).trim();
    const image = String(data.get("image")).trim();
    const message = $("#form-message");

    if (!title || !description || !Number.isInteger(year) || year < 1970 || year > 2026) {
      message.textContent = "Please provide a name, description, and valid release year.";
      return;
    }
    if (image && !/^https?:\/\//i.test(image)) {
      message.textContent = "Image URL must begin with http:// or https://.";
      return;
    }
    const id = Math.max(0, ...items.map(item => Number(item.id) || 0)) + 1;
    items.push({
      id, title, category: String(data.get("category")), year,
      metric: `${year} release`,
      image: image || `https://placehold.co/800x500/171b2b/a78bfa?text=${encodeURIComponent(title)}`,
      shortDescription: description,
      fullDetails: description,
      manufacturer: "Community pick",
      generation: "Community collection",
      notableFor: "Added by you"
    });
    form.reset();
    message.textContent = `${title} has been added to the vault.`;
    activeCategory = "All";
    favoritesOnly = false;
    searchInput.value = "";
    sortSelect.value = "featured";
    categoryFilters.querySelectorAll("[data-category]").forEach(button => {
      const selected = button.dataset.category === "All";
      button.classList.toggle("active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    favoritesFilter.classList.remove("active");
    renderItems();
    showToast("New collectible added!");
    $("#catalog").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  // Keyboard convenience: press "/" to focus search unless typing in a field.
  document.addEventListener("keydown", event => {
    const target = event.target;
    const typing = target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement || target.isContentEditable;
    if (event.key === "/" && !typing && !dialog.open) {
      event.preventDefault();
      searchInput.focus();
    }
  });

  renderItems();
})();
