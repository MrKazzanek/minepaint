const docsConfig = {
    // Domyślna (najnowsza) wersja
    defaultVersion: "Alp-Y25R02",
    // Lista dostępnych wersji do wyboru w dropdownie
    versions: ["Alp-Y25R02","Alp-Y25R01"],
    
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
        "Alp-Y25R02": [
            {
                category: "Getting Started",
                pages: [
                    { title: "Introduction", id: "intro-oldest", file: "pages/Alp-Y25R01/intro.html" },
                    { title: "Authors", id: "authors", file: "pages/Alp-Y25R01/authors.html" },
                    { title: "Installation", id: "install-old", file: "pages/Alp-Y25R02/install.html" }
                ]
            },
            {
                category: "Navigating the Program",
                pages: [
                    { title: "Drawing", id: "drawing-old", file: "pages/Alp-Y25R02/drawing.html" },
                    { title: "Erasing", id: "erasing-old", file: "pages/Alp-Y25R02/erasing.html" },
                    { title: "Quick block selection", id: "fast-pick-block-old", file: "pages/Alp-Y25R02/fast_pick_block.html" },
                    { title: "Inventory", id: "draw-block-selection-old", file: "pages/Alp-Y25R02/draw_block_selection.html" },
                    { title: "Blockstates Inventory", id: "blockstates-inventory-old", file: "pages/Alp-Y25R02/blockstates.html" },
                    { title: "Hotbar", id: "hotbar-old", file: "pages/Alp-Y25R02/hotbar.html" },
                    { title: "Saving & Loading", id: "save-and-load-old", file: "pages/Alp-Y25R01/save_and_load.html" },
                    { title: "Resizing Canvas", id: "resize-old", file: "pages/Alp-Y25R02/resize.html" }
                    
                    
                ]
            }
        ],
        //odzielacz
        "Alp-Y25R01": [
            {
                category: "Getting Started",
                pages: [
                    { title: "Introduction", id: "intro-old", file: "pages/Alp-Y25R01/intro.html" },
                    { title: "Authors", id: "authors", file: "pages/Alp-Y25R01/authors.html" },
                    { title: "Installation", id: "install-oldest", file: "pages/Alp-Y25R01/install.html" }
                ]
            },
            {
                category: "Navigating the Program",
                pages: [
                    { title: "Drawing", id: "drawing-oldest", file: "pages/Alp-Y25R01/drawing.html" },
                    { title: "Erasing", id: "erasing-oldest", file: "pages/Alp-Y25R01/erasing.html" },
                    { title: "Quick block selection", id: "fast-pick-block-oldest", file: "pages/Alp-Y25R01/fast_pick_block.html" },
                    { title: "Draw block selection", id: "draw-block-selection-oldest", file: "pages/Alp-Y25R01/draw_block_selection.html" },
                    { title: "Saving & Loading", id: "save-and-load-oldest", file: "pages/Alp-Y25R01/save_and_load.html" }
                    
                ]
            }
            
        ]
    }
};
