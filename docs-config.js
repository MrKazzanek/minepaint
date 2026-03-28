const docsConfig = {
    // Domyślna (najnowsza) wersja
    defaultVersion: "Alp-Y26R02",
    // Lista dostępnych wersji do wyboru w dropdownie
    versions: ["Alp-Y26R02","Alp-Y26R01","Alp-Y25R02","Alp-Y25R01"],
    
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
        "Alp-Y26R02": [
            {
                category: "Getting Started",
                pages: [
                    { title: "Introduction", id: "intro-oldest", file: "pages/Alp-Y25R01/intro.html" },
                    { title: "Authors", id: "authors", file: "pages/Alp-Y25R01/authors.html" },
                    { title: "Installation", id: "install-1", file: "pages/Alp-Y26R01/install.html" }
                ]
            },
            {
                category: "Navigating the Program",
                pages: [
                    { title: "Tool Selection", id: "tool-select-old", file: "pages/Alp-Y25R02/tool.html" },
                    { title: "Drawing", id: "drawing-old", file: "pages/Alp-Y25R02/drawing.html" },
                    { title: "Brush Size", id: "pen-size-old", file: "pages/Alp-Y26R01/tool_size.html" },
                    { title: "Brush Shape", id: "brush-shape-old", file: "pages/Alp-Y26R02/brush_shape.html" },
                    { title: "Filling", id: "filling-old", file: "pages/Alp-Y25R02/filling.html" },
                    { title: "Erasing", id: "erasing-old", file: "pages/Alp-Y25R02/erasing.html" },
                    { title: "Quick block selection", id: "fast-pick-block-old", file: "pages/Alp-Y25R02/fast_pick_block.html" },
                    { title: "Inventory", id: "draw-block-selection-old", file: "pages/Alp-Y25R02/draw_block_selection.html" },
                    { title: "Blockstates Inventory", id: "blockstates-inventory-old", file: "pages/Alp-Y25R02/blockstates.html" },
                    { title: "Hotbar", id: "hotbar-old", file: "pages/Alp-Y25R02/hotbar.html" },
                    { title: "Saving & Loading", id: "save-and-load-1", file: "pages/Alp-Y26R02/save_and_load.html" },
                    { title: "Resizing Canvas", id: "resize-old", file: "pages/Alp-Y25R02/resize.html" },
                    { title: "Layers System", id: "layers-old", file: "pages/Alp-Y25R02/layers.html" },
                    { title: "Weather System", id: "weather-1", file: "pages/Alp-Y26R01/weather.html" },
                    { title: "Time System", id: "time-1", file: "pages/Alp-Y26R01/time.html" },
                    { title: "Objects System", id: "objects-1", file: "pages/Alp-Y26R01/objects.html" },
                    { title: "Keyboard Shortcuts", id: "keyboard-shortcuts-1", file: "pages/Alp-Y26R02/shortcuts.html" }
                    
                    
                ]
            }
        ],
        //odzielacz
        "Alp-Y26R01": [
            {
                category: "Getting Started",
                pages: [
                    { title: "Introduction", id: "intro-oldest", file: "pages/Alp-Y25R01/intro.html" },
                    { title: "Authors", id: "authors", file: "pages/Alp-Y25R01/authors.html" },
                    { title: "Installation", id: "install-1", file: "pages/Alp-Y26R01/install.html" }
                ]
            },
            {
                category: "Navigating the Program",
                pages: [
                    { title: "Tool Selection", id: "tool-select-old", file: "pages/Alp-Y25R02/tool.html" },
                    { title: "Drawing", id: "drawing-old", file: "pages/Alp-Y25R02/drawing.html" },
                    { title: "Brush Size", id: "pen-size-old", file: "pages/Alp-Y26R01/tool_size.html" },
                    { title: "Filling", id: "filling-old", file: "pages/Alp-Y25R02/filling.html" },
                    { title: "Erasing", id: "erasing-old", file: "pages/Alp-Y25R02/erasing.html" },
                    { title: "Quick block selection", id: "fast-pick-block-old", file: "pages/Alp-Y25R02/fast_pick_block.html" },
                    { title: "Inventory", id: "draw-block-selection-old", file: "pages/Alp-Y25R02/draw_block_selection.html" },
                    { title: "Blockstates Inventory", id: "blockstates-inventory-old", file: "pages/Alp-Y25R02/blockstates.html" },
                    { title: "Hotbar", id: "hotbar-old", file: "pages/Alp-Y25R02/hotbar.html" },
                    { title: "Saving & Loading", id: "save-and-load-old", file: "pages/Alp-Y25R01/save_and_load.html" },
                    { title: "Resizing Canvas", id: "resize-old", file: "pages/Alp-Y25R02/resize.html" },
                    { title: "Layers System", id: "layers-old", file: "pages/Alp-Y25R02/layers.html" },
                    { title: "Weather System", id: "weather-1", file: "pages/Alp-Y26R01/weather.html" },
                    { title: "Time System", id: "time-1", file: "pages/Alp-Y26R01/time.html" },
                    { title: "Objects System", id: "objects-1", file: "pages/Alp-Y26R01/objects.html" },
                    { title: "Keyboard Shortcuts", id: "keyboard-shortcuts-1", file: "pages/Alp-Y26R01/shortcuts.html" }
                    
                    
                ]
            }
        ],
        //odzielacz
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
                    { title: "Tool Selection", id: "tool-select-old", file: "pages/Alp-Y25R02/tool.html" },
                    { title: "Drawing", id: "drawing-old", file: "pages/Alp-Y25R02/drawing.html" },
                    { title: "Filling", id: "filling-old", file: "pages/Alp-Y25R02/filling.html" },
                    { title: "Erasing", id: "erasing-old", file: "pages/Alp-Y25R02/erasing.html" },
                    { title: "Quick block selection", id: "fast-pick-block-old", file: "pages/Alp-Y25R02/fast_pick_block.html" },
                    { title: "Inventory", id: "draw-block-selection-old", file: "pages/Alp-Y25R02/draw_block_selection.html" },
                    { title: "Blockstates Inventory", id: "blockstates-inventory-old", file: "pages/Alp-Y25R02/blockstates.html" },
                    { title: "Hotbar", id: "hotbar-old", file: "pages/Alp-Y25R02/hotbar.html" },
                    { title: "Saving & Loading", id: "save-and-load-old", file: "pages/Alp-Y25R01/save_and_load.html" },
                    { title: "Resizing Canvas", id: "resize-old", file: "pages/Alp-Y25R02/resize.html" },
                    { title: "Layers System", id: "layers-old", file: "pages/Alp-Y25R02/layers.html" },
                    { title: "Keyboard Shortcuts", id: "keyboard-shortcuts-old", file: "pages/Alp-Y25R02/shortcuts.html" }
                    
                    
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
