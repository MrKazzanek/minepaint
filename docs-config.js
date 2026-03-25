const docsConfig = {
    // Domyślna (najnowsza) wersja
    defaultVersion: "v1.3",
    // Lista dostępnych wersji do wyboru w dropdownie
    versions: ["v1.3", "Alp-Y25R01"],
    
    // Struktura zawartości dla każdej wersji
    content: {
        "v1.3": [
            {
                category: "Getting Started",
                pages: [
                    { title: "Introduction", id: "intro", file: "pages/v1.3/intro.html" },
                    { title: "Installation", id: "install", file: "pages/v1.3/install.html" }
                ]
            },
            {
                category: "Tools & Interface",
                pages: [
                    { title: "Basic Tools", id: "basic-tools", file: "pages/v1.3/tools.html" },
                    { title: "Layer System", id: "layers", file: "pages/v1.3/layers.html" }
                ]
            }
        ],
        "Alp-Y25R01": [
            {
                category: "Getting Started",
                pages: [
                    { title: "Introduction", id: "intro-old", file: "pages/Alp-Y25R01/intro.html" },
                    { title: "Installation", id: "install-old", file: "pages/Alp-Y25R01/install.html" }
                ]
            }
            // Mniej narzędzi, bo to starsza wersja
        ]
    }
};
