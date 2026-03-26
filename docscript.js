document.addEventListener("DOMContentLoaded", () => {
    
    // UI Elements
    const versionSelect = document.getElementById("version-select");
    const docsNav = document.getElementById("docs-nav");
    const contentArea = document.getElementById("docs-content");
    const breadcrumbs = document.getElementById("docs-breadcrumbs");
    
    const btnPrev = document.getElementById("btn-prev");
    const btnNext = document.getElementById("btn-next");
    const sidebar = document.getElementById("docs-sidebar");
    const hamburger = document.querySelector(".docs-hamburger");
    const mobileOverlay = document.getElementById("mobile-overlay");

    // Search Elements
    const searchInput = document.getElementById("docs-search-input");
    const searchResults = document.getElementById("search-results");

    // State Variables
    let currentVersion = docsConfig.defaultVersion;
    let flatPages = []; 
    let currentPageIndex = 0;
    let searchIndex = []; 

    // ==========================================
    // 1. INICJALIZACJA WERSJI
    // ==========================================
    function initVersions() {
        docsConfig.versions.forEach(v => {
            let option = document.createElement("option");
            option.value = v;
            option.textContent = `MinePaint ${v}`;
            if (v === currentVersion) option.selected = true;
            versionSelect.appendChild(option);
        });

        versionSelect.addEventListener("change", (e) => {
            currentVersion = e.target.value;
            buildSidebar(currentVersion);
        });
    }

    // ==========================================
    // 2. BUDOWANIE MENU I INDEKSU
    // ==========================================
    function buildSidebar(version) {
        docsNav.innerHTML = "";
        flatPages = [];
        
        const contentStructure = docsConfig.content[version];

        if (!contentStructure) {
            docsNav.innerHTML = "<p>No documentation for this version.</p>";
            return;
        }

        contentStructure.forEach(categoryObj => {
            let catTitle = document.createElement("div");
            catTitle.className = "docs-category";
            catTitle.textContent = categoryObj.category;
            docsNav.appendChild(catTitle);

            categoryObj.pages.forEach(page => {
                let link = document.createElement("a");
                link.href = "#" + page.id;
                link.className = "docs-nav-link";
                link.textContent = page.title;
                link.dataset.file = page.file;

                link.addEventListener("click", (e) => {
                    e.preventDefault();
                    loadPage(page, link);
                    if (window.innerWidth <= 900) closeMobileMenu();
                });

                docsNav.appendChild(link);
                flatPages.push({ ...page, category: categoryObj.category, linkElement: link });
            });
        });

        if (flatPages.length > 0) {
            loadPage(flatPages[0], flatPages[0].linkElement);
        }

        buildSearchIndex(version);
    }

    // ==========================================
    // 3. ŁADOWANIE ZAWARTOŚCI (FETCH)
    // ==========================================
    async function loadPage(pageData, linkElement) {
        contentArea.innerHTML = `<div class="loading-spinner"><i class="fa-solid fa-circle-notch fa-spin"></i> <span>Loading ${pageData.title}...</span></div>`;
        breadcrumbs.innerHTML = `<span>${pageData.title}</span>`;
        
        document.querySelectorAll(".docs-nav-link").forEach(l => l.classList.remove("active"));
        if(linkElement) linkElement.classList.add("active");

        try {
            const response = await fetch(pageData.file);
            if (!response.ok) throw new Error("File not found");
            const htmlContent = await response.text();
            
            // Dodano opakowanie dla animacji wejścia
            contentArea.innerHTML = `<div class="docs-content-wrapper">${htmlContent}</div>`;
        } catch (error) {
            contentArea.innerHTML = `
                <div class="docs-content-wrapper">
                    <h1>Error 404</h1>
                    <p>Sorry, the documentation file <strong>${pageData.file}</strong> could not be loaded.</p>
                    <div class="callout callout-warn">
                        <span class="callout-title">Localhost required</span>
                        <p>Make sure you are running this site on a local server. Fetch API does not work on raw file:// protocol.</p>
                    </div>
                </div>
            `;
        }

        currentPageIndex = flatPages.findIndex(p => p.id === pageData.id);
        updateFooterNav();
        document.querySelector('.docs-main').scrollTo(0,0);
    }

    // ==========================================
    // 4. NAWIGACJA (PREV/NEXT)
    // ==========================================
    function updateFooterNav() {
        if (currentPageIndex > 0) {
            btnPrev.style.display = "inline-flex";
            btnPrev.onclick = () => loadPage(flatPages[currentPageIndex - 1], flatPages[currentPageIndex - 1].linkElement);
        } else {
            btnPrev.style.display = "none";
        }

        if (currentPageIndex < flatPages.length - 1) {
            btnNext.style.display = "inline-flex";
            btnNext.onclick = () => loadPage(flatPages[currentPageIndex + 1], flatPages[currentPageIndex + 1].linkElement);
        } else {
            btnNext.style.display = "none";
        }
    }

    // ==========================================
    // 5. SYSTEM WYSZUKIWANIA
    // ==========================================
    async function buildSearchIndex(version) {
        searchIndex = [];
        const contentStructure = docsConfig.content[version];
        if (!contentStructure) return;

        for (const category of contentStructure) {
            for (const page of category.pages) {
                try {
                    const response = await fetch(page.file);
                    if (response.ok) {
                        const html = await response.text();
                        const tempDiv = document.createElement("div");
                        tempDiv.innerHTML = html;
                        const textContent = tempDiv.textContent || tempDiv.innerText || "";
                        
                        searchIndex.push({
                            ...page,
                            category: category.category,
                            textContent: textContent.toLowerCase() 
                        });
                    }
                } catch (err) {
                    console.warn("Could not index page for search:", page.file);
                }
            }
        }
    }

    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        searchResults.innerHTML = "";

        if (query.length < 2) {
            searchResults.classList.remove("active");
            return;
        }

        const results = searchIndex.filter(page => 
            page.title.toLowerCase().includes(query) || 
            page.textContent.includes(query)
        );

        if (results.length > 0) {
            results.forEach(res => {
                let snippet = "";
                const matchIndex = res.textContent.indexOf(query);
                if (matchIndex !== -1) {
                    const start = Math.max(0, matchIndex - 30);
                    const end = Math.min(res.textContent.length, matchIndex + query.length + 30);
                    snippet = "..." + res.textContent.substring(start, end).replace(/\n/g, " ") + "...";
                }

                const resultItem = document.createElement("a");
                resultItem.className = "search-result-item";
                resultItem.innerHTML = `
                    <span class="search-result-category">${res.category}</span>
                    <span class="search-result-title">${res.title}</span>
                    ${snippet ? `<span class="search-result-snippet">${snippet}</span>` : ""}
                `;

                resultItem.addEventListener("click", (ev) => {
                    ev.preventDefault();
                    const targetLink = Array.from(document.querySelectorAll(".docs-nav-link"))
                        .find(link => link.dataset.file === res.file);
                    
                    loadPage(res, targetLink);
                    
                    searchInput.value = "";
                    searchResults.classList.remove("active");
                    if (window.innerWidth <= 900) closeMobileMenu();
                });

                searchResults.appendChild(resultItem);
            });
        } else {
            searchResults.innerHTML = `<div class="search-no-results">No results found for "${query}"</div>`;
        }
        
        searchResults.classList.add("active");
    });

    document.addEventListener("click", (e) => {
        if (!e.target.closest(".docs-search-wrap")) {
            searchResults.classList.remove("active");
        }
    });

    // ==========================================
    // 6. MOBILE MENU TOGGLE
    // ==========================================
    function toggleMobileMenu() {
        sidebar.classList.toggle("active");
        if(mobileOverlay) mobileOverlay.classList.toggle("active");
    }
    
    function closeMobileMenu() {
        sidebar.classList.remove("active");
        if(mobileOverlay) mobileOverlay.classList.remove("active");
    }

    if(hamburger) hamburger.addEventListener("click", toggleMobileMenu);
    if(mobileOverlay) mobileOverlay.addEventListener("click", closeMobileMenu);

    // ==========================================
    // URUCHOMIENIE
    // ==========================================
    initVersions();
    buildSidebar(currentVersion);
});
