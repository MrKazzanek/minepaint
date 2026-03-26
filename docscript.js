document.addEventListener("DOMContentLoaded", () => {
    
    const versionSelect = document.getElementById("version-select");
    const docsNav = document.getElementById("docs-nav");
    const contentArea = document.getElementById("docs-content");
    const breadcrumbs = document.getElementById("docs-breadcrumbs");
    
    const btnPrev = document.getElementById("btn-prev");
    const btnNext = document.getElementById("btn-next");
    const sidebar = document.getElementById("docs-sidebar");
    const hamburger = document.querySelector(".docs-hamburger");
    const mobileOverlay = document.getElementById("mobile-overlay");
    const mainArea = document.getElementById("docs-main-area");

    const searchInput = document.getElementById("docs-search-input");
    const searchResults = document.getElementById("search-results");
    const searchTrigger = document.getElementById("search-trigger");

    let currentVersion = docsConfig.defaultVersion;
    let flatPages = []; 
    let currentPageIndex = 0;
    let searchIndex = []; 

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

    function buildSidebar(version) {
        docsNav.innerHTML = "";
        flatPages = [];
        const contentStructure = docsConfig.content[version];

        if (!contentStructure) {
            docsNav.innerHTML = "<p style='padding: 20px;'>No documentation for this version.</p>";
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
                    loadPage(page, link, categoryObj.category);
                    if (window.innerWidth <= 900) closeMobileMenu();
                });

                docsNav.appendChild(link);
                flatPages.push({ ...page, category: categoryObj.category, linkElement: link });
            });
        });

        if (flatPages.length > 0) {
            loadPage(flatPages[0], flatPages[0].linkElement, flatPages[0].category);
        }

        buildSearchIndex(version);
    }

    async function loadPage(pageData, linkElement, categoryName) {
        contentArea.innerHTML = `<div class="loading-spinner"><i class="fa-solid fa-circle-notch fa-spin"></i> <span>Loading...</span></div>`;
        
        breadcrumbs.innerHTML = `<i class="fa-solid fa-book"></i> Docs / ${categoryName} / <span class="bc-active">${pageData.title}</span>`;
        
        document.querySelectorAll(".docs-nav-link").forEach(l => l.classList.remove("active"));
        if(linkElement) linkElement.classList.add("active");

        try {
            const response = await fetch(pageData.file);
            if (!response.ok) throw new Error("File not found");
            const htmlContent = await response.text();
            
            contentArea.innerHTML = `<div class="docs-content-wrapper">${htmlContent}</div>`;
        } catch (error) {
            contentArea.innerHTML = `
                <div class="docs-content-wrapper">
                    <h1>Error 404</h1>
                    <div class="callout callout-danger">
                        <span class="callout-title">File not found</span>
                        <p>Could not load <strong>${pageData.file}</strong>. If you are developing locally, ensure you are using a local server (Live Server), not the raw file:// protocol.</p>
                    </div>
                </div>
            `;
        }

        currentPageIndex = flatPages.findIndex(p => p.id === pageData.id);
        updateFooterNav();
        mainArea.scrollTo(0,0);
    }

    function updateFooterNav() {
        if (currentPageIndex > 0) {
            btnPrev.style.display = "inline-flex";
            const prevPage = flatPages[currentPageIndex - 1];
            btnPrev.onclick = () => loadPage(prevPage, prevPage.linkElement, prevPage.category);
        } else {
            btnPrev.style.display = "none";
        }

        if (currentPageIndex < flatPages.length - 1) {
            btnNext.style.display = "inline-flex";
            const nextPage = flatPages[currentPageIndex + 1];
            btnNext.onclick = () => loadPage(nextPage, nextPage.linkElement, nextPage.category);
        } else {
            btnNext.style.display = "none";
        }
    }

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
                        searchIndex.push({
                            ...page,
                            category: category.category,
                            textContent: (tempDiv.textContent || tempDiv.innerText || "").toLowerCase() 
                        });
                    }
                } catch (err) {}
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
            page.title.toLowerCase().includes(query) || page.textContent.includes(query)
        );

        if (results.length > 0) {
            results.forEach(res => {
                const resultItem = document.createElement("a");
                resultItem.className = "search-result-item";
                resultItem.innerHTML = `
                    <span class="search-result-category">${res.category}</span>
                    <span class="search-result-title">${res.title}</span>
                `;
                resultItem.addEventListener("click", (ev) => {
                    ev.preventDefault();
                    const targetLink = Array.from(document.querySelectorAll(".docs-nav-link")).find(link => link.dataset.file === res.file);
                    loadPage(res, targetLink, res.category);
                    searchInput.value = "";
                    searchResults.classList.remove("active");
                    if (window.innerWidth <= 900) closeMobileMenu();
                });
                searchResults.appendChild(resultItem);
            });
        } else {
            searchResults.innerHTML = `<div class="search-result-item"><span class="search-result-category" style="color:var(--text-gray)">No results found</span></div>`;
        }
        searchResults.classList.add("active");
    });

    searchInput.addEventListener("focus", () => searchTrigger.classList.add("focus-ring"));
    searchInput.addEventListener("blur", () => searchTrigger.classList.remove("focus-ring"));

    document.addEventListener("keydown", (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === "k") {
            e.preventDefault();
            searchInput.focus();
        }
    });

    document.addEventListener("click", (e) => {
        if (!e.target.closest(".docs-search-wrap")) searchResults.classList.remove("active");
    });

    function toggleMobileMenu() {
        sidebar.classList.toggle("active");
        mobileOverlay.classList.toggle("active");
    }
    
    function closeMobileMenu() {
        sidebar.classList.remove("active");
        mobileOverlay.classList.remove("active");
    }
    
    hamburger.addEventListener("click", toggleMobileMenu);
    mobileOverlay.addEventListener("click", closeMobileMenu);

    initVersions();
    buildSidebar(currentVersion);
});
