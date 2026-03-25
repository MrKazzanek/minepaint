document.addEventListener("DOMContentLoaded", () => {
    
    const versionSelect = document.getElementById("version-select");
    const docsNav = document.getElementById("docs-nav");
    const contentArea = document.getElementById("docs-content");
    const breadcrumbs = document.getElementById("docs-breadcrumbs");
    
    const btnPrev = document.getElementById("btn-prev");
    const btnNext = document.getElementById("btn-next");
    const sidebar = document.getElementById("docs-sidebar");
    const hamburger = document.querySelector(".docs-hamburger");

    let currentVersion = docsConfig.defaultVersion;
    let flatPages = []; // Do nawigacji prev/next
    let currentPageIndex = 0;

    // 1. Inicjalizacja wyboru wersji
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

    // 2. Budowanie paska bocznego (Menu)
    function buildSidebar(version) {
        docsNav.innerHTML = "";
        flatPages = [];
        
        const contentStructure = docsConfig.content[version];

        if (!contentStructure) {
            docsNav.innerHTML = "<p>No documentation for this version.</p>";
            return;
        }

        contentStructure.forEach(categoryObj => {
            // Dodaj Nagłówek Kategorii
            let catTitle = document.createElement("div");
            catTitle.className = "docs-category";
            catTitle.textContent = categoryObj.category;
            docsNav.appendChild(catTitle);

            // Dodaj Linki
            categoryObj.pages.forEach(page => {
                let link = document.createElement("a");
                link.href = "#" + page.id;
                link.className = "docs-nav-link";
                link.textContent = page.title;
                link.dataset.file = page.file;
                link.dataset.title = page.title;
                link.dataset.category = categoryObj.category;

                link.addEventListener("click", (e) => {
                    e.preventDefault();
                    loadPage(page, link);
                    if (window.innerWidth <= 900) toggleMobileMenu(); // Zamknij menu na tel
                });

                docsNav.appendChild(link);
                flatPages.push({ ...page, category: categoryObj.category, linkElement: link });
            });
        });

        // Załaduj pierwszą stronę z nowej wersji automatycznie
        if (flatPages.length > 0) {
            loadPage(flatPages[0], flatPages[0].linkElement);
        }
    }

    // 3. Wczytywanie Zawartości pliku HTML (Fetch)
    async function loadPage(pageData, linkElement) {
        // Aktualizacja UI w trakcie ładowania
        contentArea.innerHTML = `<div class="loading-spinner"><i class="fa-solid fa-circle-notch fa-spin"></i> Loading ${pageData.title}...</div>`;
        breadcrumbs.innerHTML = `${pageData.category} / <span>${pageData.title}</span>`;
        
        // Aktualizacja aktywnego linku
        document.querySelectorAll(".docs-nav-link").forEach(l => l.classList.remove("active"));
        if(linkElement) linkElement.classList.add("active");

        // Pobieranie pliku HTML z folderu pages
        try {
            const response = await fetch(pageData.file);
            if (!response.ok) throw new Error("File not found");
            const htmlContent = await response.text();
            contentArea.innerHTML = htmlContent;
        } catch (error) {
            contentArea.innerHTML = `
                <h1>Error 404</h1>
                <p>Sorry, the documentation file <strong>${pageData.file}</strong> could not be loaded.</p>
                <div class="info-box">Make sure you are running this site on a local server (e.g. VSCode Live Server) to allow fetching files.</div>
            `;
        }

        // Zaktualizuj index dla przycisków Prev/Next
        currentPageIndex = flatPages.findIndex(p => p.id === pageData.id);
        updateFooterNav();
        
        // Przewiń na górę
        document.querySelector('.docs-main').scrollTo(0,0);
    }

    // 4. Obsługa przycisków Prev / Next
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

    // 5. Mobile Menu Toggle
    function toggleMobileMenu() {
        sidebar.classList.toggle("active");
    }
    if(hamburger) hamburger.addEventListener("click", toggleMobileMenu);

    // Start!
    initVersions();
    buildSidebar(currentVersion);
});
