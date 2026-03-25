const docsConfig = {
    // Domyślna (najnowsza) wersja
    defaultVersion: "Alp-Y25R01",
    // Lista dostępnych wersji do wyboru w dropdownie
    versions: ["Alp-Y25R01"],
    
    // Struktura zawartości dla każdej wersji
    content: {
        // "v1.3": [
        //     {
        //         category: "Getting Started",
        //         pages: [
        //             { title: "Introduction", id: "intro", file: "pages/v1.3/intro.html" },
        //             { title: "Installation", id: "install", file: "pages/v1.3/install.html" }
        //         ]
        //     },
        //     {
        //         category: "Tools & Interface",
        //         pages: [
        //             { title: "Basic Tools", id: "basic-tools", file: "pages/v1.3/tools.html" },
        //             { title: "Layer System", id: "layers", file: "pages/v1.3/layers.html" }
        //         ]
        //     }
        // ],
        "Alp-Y25R01": [
            {
                category: "Getting Started",
                pages: [
                    { title: "Introduction", id: "intro-old", file: "pages/Alp-Y25R01/intro.html" },
                    { title: "Authors", id: "authors", file: "pages/Alp-Y25R01/authors.html" },
                    { title: "Installation", id: "install-old", file: "pages/Alp-Y25R01/install.html" }
                ]
            },
            {
                category: "Navigating the Program",
                pages: [
                    { title: "Drawing", id: "drawing-old", file: "pages/Alp-Y25R01/drawing.html" }
                    
                ]
            }
            
        ]
    }
};
