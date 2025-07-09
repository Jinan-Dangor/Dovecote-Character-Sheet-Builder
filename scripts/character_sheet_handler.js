let templateSheetPairings = JSON.parse(localStorage.getItem("dovecote-template-sheet-pairs")) ?? [];
let templateList = JSON.parse(localStorage.getItem("dovecote-saved-templates")) ?? [];
let sheetTemplateData = {};
let currentSheet = {};

const createNewSheet = (templateName, sheetName) => {
    templateSheetPairings.push({
        template: templateName,
        sheet: sheetName,
    });
    localStorage.setItem("dovecote-template-sheet-pairs", JSON.stringify(templateSheetPairings));
};

const deleteSheet = (sheetName) => {
    localStorage.removeItem(`dovecote-sheetStorage::${sheetName}`);
    const sheetIndex = templateSheetPairings.findIndex((pair) => pair.sheet == sheetName);
    templateSheetPairings.splice(sheetIndex, 1);
    localStorage.setItem("dovecote-template-sheet-pairs", JSON.stringify(templateSheetPairings));
};

const setCurrentSheet = (sheetName) => {
    const sheet = templateSheetPairings.find((pair) => pair.sheet == sheetName);
    currentSheet = sheet;
    const sheetNameHeading = document.querySelector("#sheet-name");
    sheetNameHeading.innerText = `Current Sheet: ${sheetName}`;
    switchTab("sheet");
    loadTemplate();
    loadAllData();
};

// BUILD HTML FROM CHARACTER SHEET OBJECT
/*  STEP_PRELOAD:
    1. Return empty element
    
    STEP_STYLE:
    1. Initialise
    2. Append child(preload) and modify child
    3. child(style)
*/
const preloadStep = (template) => {
    return characterSheetBuildSteps[template.type].preload(template);
};

const styleStep = (template, element) => {
    characterSheetBuildSteps[template.type].style(template, element);
};

const globalPaddingWidth = 0.005;
const globalPaddingHeight = 0.005;
const applySpacingMode = (template, element) => {
    if (template.hasOwnProperty("spacingMode")) {
        const noPaddingMult = [
            template.spacingMode.includes("no-top") ? 0 : 1,
            template.spacingMode.includes("no-right") ? 0 : 1,
            template.spacingMode.includes("no-bottom") ? 0 : 1,
            template.spacingMode.includes("no-left") ? 0 : 1,
        ];
        const paddingWidth = getComputedStyle(element.parentElement).getPropertyValue("--global-width");
        const paddingHeight = getComputedStyle(element.parentElement).getPropertyValue("--global-height");
        const calculatedPaddingWidth = (100 * globalPaddingWidth) / paddingWidth;
        const calculatedPaddingHeight = ((100 * globalPaddingHeight) / paddingHeight / element.parentElement.offsetWidth) * element.parentElement.offsetHeight;
        const topPadding = calculatedPaddingHeight * noPaddingMult[0];
        const rightPadding = calculatedPaddingWidth * noPaddingMult[1];
        const bottomPadding = calculatedPaddingHeight * noPaddingMult[2];
        const leftPadding = calculatedPaddingWidth * noPaddingMult[3];
        element.style.padding = `${topPadding}% ${rightPadding}% ${bottomPadding}% ${leftPadding}%`;
    }
};

const addHighlightMode = (template, element) => {
    if (!template.hasOwnProperty("highlightMode")) {
        return;
    }
    element.classList.add(template.highlightMode);
};

const addAlignmentMode = (template, element) => {
    if (!template.hasOwnProperty("alignmentMode")) {
        return;
    }
    element.style.textAlign = template.alignmentMode;
};

const applyModes = (template, element) => {
    applySpacingMode(template, element);
    addHighlightMode(template, element);
    addAlignmentMode(template, element);
};

const characterSheetData = {};

const addNewSaveData = (element, saveFunc, loadFunc, id) => {
    if (id == undefined) {
        id = miscIds;
        miscIds++;
    }
    characterSheetData[id] = {
        element,
        saveFunc,
        loadFunc,
    };
};

const characterSheetBuildSteps = {
    root: {
        preload: (template) => {
            return document.createElement("div");
        },
        style: (template, element) => {
            const root = element;
            root.style.cssText = `aspect-ratio: 1.4142; width: 90%; margin: auto; border-radius: 20px; --global-width: 1; --global-height: 1;`;
            root.classList.add("character-sheet");
            const child = preloadStep(template.content);
            child.style.width = "100%";
            child.style.height = "100%";
            root.appendChild(child);
            styleStep(template.content, child);
        },
    },
    empty: {
        preload: (template) => {
            return document.createElement("div");
        },
        style: (template, element) => {
            applyModes(template, element);
        },
    },
    series: {
        preload: (template) => {
            return document.createElement("div");
        },
        style: (template, element) => {
            const newSeries = element;
            applyModes(template, newSeries);
            const children = template.contents;
            for (let i = 0; i < children.length; i++) {
                const newChild = preloadStep(children[i]);
                if (template.direction == "column") {
                    const newContainer = document.createElement("div");
                    newContainer.appendChild(newChild);
                    newSeries.appendChild(newContainer);
                } else {
                    newSeries.appendChild(newChild);
                }
                styleStep(children[i], newChild);
            }
        },
    },
    flex: {
        preload: (template) => {
            return document.createElement("div");
        },
        style: (template, element) => {
            const newFlex = element;
            applyModes(template, newFlex);
            const isRow = template.direction == "row";
            newFlex.style.display = "flex";
            newFlex.style.flexDirection = isRow ? "row" : "column";
            newFlex.style.alignItems = template.hasOwnProperty("alignItems") ? template.alignItems : "center";
            // TODO: These calculations seem slightly off, likely due to padding thickness
            // It produces negligible pixels-sized errors currently, so is not a priority to fix
            let sizeToFill = 0;
            if (isRow) {
                const paddingReduction = template.hasOwnProperty("spacingMode")
                    ? globalPaddingWidth * ((template.spacingMode.includes("no-left") ? 0 : 1) + (template.spacingMode.includes("no-right") ? 0 : 1))
                    : 0;
                sizeToFill = getComputedStyle(newFlex).getPropertyValue("--global-width") - paddingReduction;
            } else {
                const paddingReduction = template.hasOwnProperty("spacingMode")
                    ? globalPaddingHeight * ((template.spacingMode.includes("no-top") ? 0 : 1) + (template.spacingMode.includes("no-bottom") ? 0 : 1))
                    : 0;
                sizeToFill = getComputedStyle(newFlex).getPropertyValue("--global-height") - paddingReduction;
            }
            const flexChildren = template.contents;
            for (let i = 0; i < flexChildren.length; i++) {
                const newChild = preloadStep(flexChildren[i]);
                const childSizeStyle = `${isRow ? "width" : "height"}: ${(template.sizes[i] / sizeToFill) * 100}%; ${isRow ? "height" : "width"}: 100%;`;
                const childGlobalSizeStyle = `${isRow ? "--global-width" : "--global-height"}: ${template.sizes[i]};`;
                newChild.style.cssText = `${childSizeStyle} ${childGlobalSizeStyle}`;
                newFlex.appendChild(newChild);
                styleStep(flexChildren[i], newChild);
            }
        },
    },
    heading: {
        preload: (template) => {
            const headingSize = template.hasOwnProperty("headingSize") ? template.headingSize : "h2";
            const newHeading = document.createElement(headingSize);
            return newHeading;
        },
        style: (template, element) => {
            const newHeading = element;
            applyModes(template, newHeading);
            newHeading.classList.add("heading");
            newHeading.innerText = template.content;
            newHeading.style.display = "grid";
            newHeading.style.alignItems = "center";
        },
    },
    richText: {
        preload: (template) => {
            return document.createElement("span");
        },
        style: (template, element) => {
            const newRichText = element;
            applyModes(template, newRichText);
            newRichText.innerHTML = template.content;
            newRichText.style.fontWeight = "lighter";
        },
    },
    icon: {
        preload: (template) => {
            return document.createElement("span");
        },
        style: (template, element) => {
            const newIcon = element;
            applyModes(template, newIcon);
            newIcon.classList.add("icon");
            let iconContent = template.icon;
            if (template.hasOwnProperty("conjoined")) {
                iconContent = iconContent.split("").join(`<span style="position: relative; bottom: 1px">—</span>`);
                newIcon.style.letterSpacing = "-5px";
            }
            newIcon.innerHTML = iconContent;
            addNewSaveData(
                newIcon,
                (icon) => {
                    return icon.getAttribute("data-selected") == "null" ? null : icon.getAttribute("data-selected");
                },
                (icon, value) => {
                    const selectedColor = getPaletteColour(PAL_ICON);
                    const unselectedColor = getPaletteColour(applyHighlightMod(icon, PAL_STARKEST));
                    icon.setAttribute("data-selected", value);
                    if (value == "true") {
                        icon.style.textShadow = `0 0 0 ${selectedColor}`;
                    } else {
                        icon.style.textShadow = `0 0 0 ${unselectedColor}`;
                    }
                },
                template.id
            );
        },
    },
    iconTrack: {
        preload: (template) => {
            return document.createElement("span");
        },
        style: (template, element) => {
            const newIconTrack = element;
            applyModes(template, newIconTrack);
            newIconTrack.classList.add("icon");
            newIconTrack.classList.add("icon-track");
            newIconTrack.style.fontSize = "0.75em";
            for (let i = 0; i < template.length; i++) {
                const newDot = document.createElement("span");
                newDot.innerText = template.icon;
                if (i != template.length - 1) {
                    newDot.innerText += " ";
                }
                newDot.classList.add("icon-track-icon");
                newDot.style.cursor = "pointer";
                newDot.style.userSelect = "none";
                newDot.style.color = "transparent";
                newIconTrack.appendChild(newDot);
                if (template.hasOwnProperty("columns") && i % template.columns == template.columns - 1) {
                    newIconTrack.appendChild(document.createElement("br"));
                }
            }
            addNewSaveData(
                newIconTrack,
                (iconTrack) => {
                    let value = 0;
                    for (let i = 0; i < iconTrack.children.length; i++) {
                        if (iconTrack.children[i].getAttribute("data-selected") == "true") {
                            value++;
                        } else {
                            break;
                        }
                    }
                    return value;
                },
                (iconTrack, value) => {
                    const selectedColor = getPaletteColour(PAL_ICON);
                    const unselectedColor = getPaletteColour(applyHighlightMod(iconTrack, PAL_STARKEST));
                    for (let i = 0; i < iconTrack.children.length; i++) {
                        if (i < value) {
                            iconTrack.children[i].setAttribute("data-selected", "true");
                            iconTrack.children[i].style.textShadow = `0 0 0 ${selectedColor}`;
                        } else {
                            iconTrack.children[i].setAttribute("data-selected", "false");
                            iconTrack.children[i].style.textShadow = `0 0 0 ${unselectedColor}`;
                        }
                    }
                },
                template.id
            );
        },
    },
    textEntryLine: {
        preload: (template) => {
            return document.createElement("div");
        },
        style: (template, element) => {
            const newTextEntryLine = element;
            applyModes(template, newTextEntryLine);
            newTextEntryLine.classList.add("text-entry-line");
            const newInput = document.createElement("input");
            const newBreak = document.createElement("br");
            const newLabel = document.createElement("label");
            newTextEntryLine.appendChild(newInput);
            newTextEntryLine.appendChild(newBreak);
            newTextEntryLine.appendChild(newLabel);
            newLabel.innerText = template.label;
            newLabel.style.fontWeight = "bold";
            addNewSaveData(
                newTextEntryLine,
                (textEntryLine) => {
                    return textEntryLine.querySelector("input").value;
                },
                (textEntryLine, value) => {
                    textEntryLine.querySelector("input").value = value;
                },
                template.id
            );
        },
    },
    textEntryParagraph: {
        preload: (template) => {
            return document.createElement("div");
        },
        style: (template, element) => {
            const newTextEntryParagraph = element;
            applyModes(template, newTextEntryParagraph);
            newTextEntryParagraph.classList.add("text-entry-paragraph");
            const newInput = document.createElement("div");
            if (template.hasOwnProperty("label")) {
                const newLabel = document.createElement("label");
                newTextEntryParagraph.appendChild(newLabel);
                newLabel.innerText = template.label;
                newLabel.style.fontWeight = "bold";
                const labelHeight = newLabel.offsetHeight;
                const parentHeight = newTextEntryParagraph.offsetHeight;
                const percent = 100 - (labelHeight / parentHeight) * 100;
                newInput.style.height = `${percent}%`;
            }
            newTextEntryParagraph.appendChild(newInput);
            newInput.style.resize = "vertical";
            addNewSaveData(
                newTextEntryParagraph,
                (textEntryParagraph) => {
                    return textEntryParagraph.querySelector("div").innerHTML;
                },
                (textEntryParagraph, value) => {
                    textEntryParagraph.querySelector("div").innerHTML = value;
                },
                template.id
            );
        },
    },
    textSelectDropdown: {
        preload: (template) => {
            return document.createElement("div");
        },
        style: (template, element) => {
            const newTextSelectDropdown = element;
            applyModes(template, newTextSelectDropdown);
            newTextSelectDropdown.classList.add("text-select-dropdown");
            const newInput = document.createElement("select");
            if (template.hasOwnProperty("label")) {
                const newLabel = document.createElement("label");
                newTextSelectDropdown.appendChild(newLabel);
                newLabel.innerText = template.label;
                newLabel.style.fontWeight = "bold";
            }
            newTextSelectDropdown.appendChild(newInput);
            const blankOption = document.createElement("option");
            newInput.appendChild(blankOption);
            template.options.forEach((option) => {
                const newOption = document.createElement("option");
                newOption.innerText = option;
                newInput.appendChild(newOption);
            });
            addNewSaveData(
                newTextSelectDropdown,
                (textSelectDropdown) => {
                    return textSelectDropdown.querySelector("select").selectedIndex;
                },
                (textSelectDropdown, value) => {
                    textSelectDropdown.querySelector("select").selectedIndex = value;
                },
                template.id
            );
        },
    },
};

let miscIds = 0;
const buildCharacterSheet = (rootTemplate, parent) => {
    const noSheetSelectedContent = document.querySelector("#no-sheet-selected");
    if (!rootTemplate.hasOwnProperty("type")) {
        noSheetSelectedContent.style.display = "block";
        const placeholder = document.createElement("div");
        placeholder.classList.add("character-sheet");
        return placeholder;
    } else {
        noSheetSelectedContent.style.display = "none";
    }
    miscIds = 0;
    const rootElement = characterSheetBuildSteps["root"].preload(rootTemplate);
    parent.appendChild(rootElement);
    characterSheetBuildSteps["root"].style(rootTemplate, rootElement);
    miscIds = 0;
    return rootElement;
};

let characterSheet;
const rebuildSheet = () => {
    const existingSheet = document.querySelector(".character-sheet");
    if (existingSheet != null) {
        const newBuildTarget = document.createElement("div");
        newBuildTarget.id = "character-sheet-builder-target";
        existingSheet.replaceWith(newBuildTarget);
    }
    const target = document.querySelector("#character-sheet-builder-target");
    const newSheet = buildCharacterSheet(sheetTemplateData, target);
    target.replaceWith(newSheet);
    characterSheet = document.querySelector(".character-sheet");
    characterSheet.style.setProperty("--highlight-mode", "default");
};

const applicationStartup = () => {
    // Homepage Building
    const providedTemplateListElement = document.querySelector("#provided-templates-list");
    const templateNameList = Object.keys(providedTemplates);
    templateNameList.forEach((template) => {
        const newElement = document.createElement("div");
        newElement.innerText = template;
        const createButton = document.createElement("button");
        createButton.innerText = "Create New Sheet";
        newElement.appendChild(createButton);
        const newSheetName = document.createElement("input");
        newElement.appendChild(newSheetName);
        createButton.addEventListener("mousedown", () => {
            createNewSheet(template, newSheetName.value);
            setCurrentSheet(newSheetName.value);
        });
        providedTemplateListElement.appendChild(newElement);
    });
    const savedSheetsList = document.querySelector("#saved-sheets");
    templateSheetPairings.forEach((pair) => {
        const newSheetElement = document.createElement("div");
        newSheetElement.innerText = pair.sheet;
        const loadButton = document.createElement("button");
        loadButton.innerText = "Load Sheet";
        newSheetElement.appendChild(loadButton);
        loadButton.addEventListener("mousedown", () => {
            setCurrentSheet(pair.sheet);
        });
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete Sheet";
        newSheetElement.appendChild(deleteButton);
        deleteButton.addEventListener("mousedown", () => {
            deleteSheet(pair.sheet);
        });
        savedSheetsList.appendChild(newSheetElement);
    });

    // Character Sheet Building
    rebuildSheet();
    characterSheet.classList.add("loading");

    document.fonts.ready.then(() => {
        characterSheet.classList.remove("loading");
        characterSheet.classList.add("loaded");
    });

    if (body.style.getPropertyValue("--shade-mode")) {
        characterSheet.style.setProperty("--shade-mode", body.style.getPropertyValue("--shade-mode"));
    } else {
        body.style.setProperty("--shade-mode", MODE_LIGHT);
        characterSheet.style.setProperty("--shade-mode", MODE_LIGHT);
    }

    setAllPaletteValues();
    styleText();
    renderCanvases();
};

const saveAllData = () => {
    let localStorageData = {};
    Object.keys(characterSheetData).forEach((key) => {
        const newValue = characterSheetData[key].saveFunc(characterSheetData[key].element);
        if (newValue) {
            characterSheetData[key].value = newValue;
            localStorageData[key] = characterSheetData[key].value;
        }
    });
    localStorage.setItem(`dovecote-sheetStorage::${currentSheet.sheet}`, JSON.stringify(localStorageData));
};

const loadAllData = () => {
    let localStorageData = localStorage.getItem(`dovecote-sheetStorage::${currentSheet.sheet}`);
    if (localStorageData == null) {
        return;
    }
    localStorageData = JSON.parse(localStorageData);
    Object.keys(localStorageData).forEach((key) => {
        characterSheetData[key].value = localStorageData[key];
        characterSheetData[key].loadFunc(characterSheetData[key].element, characterSheetData[key].value);
    });
};

const saveTemplate = () => {
    if (!currentSheet.hasOwnProperty("template")) {
        console.error("No sheet currently loaded, so cannot save");
        return;
    }
    localStorage.setItem(`dovecote-templateStorage::${currentSheet.template}`, JSON.stringify(sheetTemplateData));
};

const loadTemplate = () => {
    if (!currentSheet.hasOwnProperty("template")) {
        console.error("No sheet currently loaded, so cannot load");
        return;
    }

    if (providedTemplates.hasOwnProperty(currentSheet.template)) {
        sheetTemplateData = providedTemplates[currentSheet.template];
    } else {
        sheetTemplateData = JSON.parse(localStorage.getItem(`dovecote-templateStorage::${currentSheet.template}`));
    }
    rebuildSheet();
    if (body.style.getPropertyValue("--shade-mode")) {
        characterSheet.style.setProperty("--shade-mode", body.style.getPropertyValue("--shade-mode"));
    } else {
        characterSheet.style.setProperty("--shade-mode", MODE_LIGHT);
    }
    setAllPaletteValues();
    styleText();
};

const applyHighlightMod = (element, value) => {
    const highlightedMode = getComputedStyle(element).getPropertyValue("--highlight-mode");
    const modDirection = value < 3 ? 1 : -1;
    switch (highlightedMode) {
        case "default":
            return value;
        case "highlighted":
            return value + 1 * modDirection;
        case "deep-highlighted":
            console.error("You shouldn't be rendering something with a highlightMod somewhere deeper than the base 'highlighted' mode.");
            return value + 2 * modDirection;
        case "inverted":
            return 6 - value;
        default:
            console.error(`Unrecognised highlight mode provided to highlightMod(): ${highlightedMode}`);
            return 0;
    }
};

const generateDotTrack = (element, icon, length) => {
    const track = element;
    track.classList.add("dot-track");
    track.style.fontSize = "0.75em";
    for (let i = 0; i < length; i++) {
        const newDot = document.createElement("span");
        newDot.innerText = icon;
        if (i != length - 1) {
            newDot.innerText += " ";
        }
        newDot.classList.add("dot-track-icon");
        newDot.style.cursor = "pointer";
        newDot.style.userSelect = "none";
        newDot.style.color = "transparent";
        track.appendChild(newDot);
    }
};

function styleText() {
    characterSheet.style.backgroundColor = getPaletteColour(PAL_FAINTEST);
    characterSheet.style.color = getPaletteColour(PAL_STARKEST);
    const highlights = Array.from(document.querySelectorAll(".highlighted"));
    highlights.forEach((highlight) => {
        highlight.style.setProperty("--highlight-mode", "highlighted");
        highlight.style.backgroundColor = getPaletteColour(PAL_FAINTER);
        highlight.style.borderRadius = "10px";
    });
    const deepHighlights = Array.from(document.querySelectorAll(".deep-highlighted"));
    deepHighlights.forEach((highlight) => {
        highlight.style.setProperty("--highlight-mode", "deep-highlighted");
        highlight.style.backgroundColor = getPaletteColour(PAL_FAINT);
        highlight.style.borderRadius = "10px";
    });
    const inversions = Array.from(document.querySelectorAll(".inverted"));
    inversions.forEach((inversion) => {
        inversion.style.setProperty("--highlight-mode", "inverted");
        inversion.style.backgroundColor = getPaletteColour(PAL_STARKEST);
        inversion.style.color = getPaletteColour(PAL_FAINTEST);
        inversion.style.borderRadius = "10px";
    });
    const iconTracks = Array.from(document.querySelectorAll(".icon-track"));
    iconTracks.forEach((iconTrack) => {
        const icons = Array.from(iconTrack.querySelectorAll(".icon-track-icon"));
        const selectedColor = getPaletteColour(PAL_ICON);
        const unselectedColor = getPaletteColour(applyHighlightMod(iconTrack, PAL_STARKEST));
        icons.forEach((icon, i) => {
            if (icon.getAttribute("data-selected") == "true") {
                icon.style.textShadow = `0 0 0 ${selectedColor}`;
            } else {
                icon.style.textShadow = `0 0 0 ${unselectedColor}`;
            }
            icon.addEventListener("click", (e) => {
                if (icon.getAttribute("data-selected") == "true") {
                    const mod = i < icons.length - 1 && icons[i + 1].getAttribute("data-selected") == "true" ? 1 : 0;
                    for (let j = i + mod; j < icons.length; j++) {
                        icons[j].setAttribute("data-selected", "false");
                        icons[j].style.textShadow = `0 0 0 ${unselectedColor}`;
                    }
                } else {
                    for (let j = 0; j <= i; j++) {
                        icons[j].setAttribute("data-selected", "true");
                        icons[j].style.textShadow = `0 0 0 ${selectedColor}`;
                    }
                }
            });
        });
    });
    const headings = Array.from(document.querySelectorAll(".heading"));
    headings.forEach((heading) => {
        heading.style.fontWeight = "normal";
    });
    const icons = Array.from(document.querySelectorAll(".icon"));
    icons.forEach((icon) => {
        icon.style.cursor = "pointer";
        icon.style.userSelect = "none";
        icon.style.color = "transparent";
        const selectedColor = getPaletteColour(PAL_ICON);
        const unselectedColor = getPaletteColour(applyHighlightMod(icon, PAL_STARKEST));
        if (icon.getAttribute("data-selected") == "true") {
            icon.style.textShadow = `0 0 0 ${selectedColor}`;
        } else {
            icon.style.textShadow = `0 0 0 ${unselectedColor}`;
        }
        icon.addEventListener("click", (e) => {
            if (icon.getAttribute("data-selected") == "true") {
                icon.setAttribute("data-selected", "false");
                icon.style.textShadow = `0 0 0 ${unselectedColor}`;
            } else {
                icon.setAttribute("data-selected", "true");
                icon.style.textShadow = `0 0 0 ${selectedColor}`;
            }
        });
    });
    const textEntryLines = Array.from(document.querySelectorAll(".text-entry-line"));
    textEntryLines.forEach((textEntryLine) => {
        const backgroundColor = getPaletteColour(applyHighlightMod(textEntryLine, PAL_FAINTER));
        const textColor = getPaletteColour(PAL_STARKEST);
        const textbox = textEntryLine.querySelector("input");
        const label = textEntryLine.querySelector("label");
        textbox.style.outline = 0;
        textbox.style.width = "100%";
        textbox.style.border = 0;
        textbox.style.backgroundColor = "transparent";
        textbox.style.borderBottom = `3px solid ${backgroundColor}`;
        textbox.style.color = textColor;
        textbox.style.fontWeight = "normal";
        textbox.style.fontSize = "16px";
    });
    const textEntryParagraphs = Array.from(document.querySelectorAll(".text-entry-paragraph"));
    textEntryParagraphs.forEach((textEntryParagraph) => {
        const textEntryParagraphInput = textEntryParagraph.querySelector("div");
        const backgroundColor = getPaletteColour(applyHighlightMod(textEntryParagraphInput, PAL_FAINTER));
        const textColor = getPaletteColour(PAL_STARKEST);
        textEntryParagraphInput.contentEditable = "true";
        textEntryParagraphInput.style.border = 0;
        textEntryParagraphInput.style.outline = 0;
        textEntryParagraphInput.style.backgroundColor = "transparent";
        textEntryParagraphInput.style.backgroundImage = `linear-gradient(to top, ${backgroundColor} 3px, transparent 1px)`;
        textEntryParagraphInput.style.backgroundPosition = `top`;
        textEntryParagraphInput.style.backgroundSize = `100% 1.5em`;
        textEntryParagraphInput.style.lineHeight = `1.5em`;
        textEntryParagraphInput.style.color = textColor;
        textEntryParagraphInput.style.fontFamily = "Playpen Sans, cursive";
        textEntryParagraphInput.style.fontWeight = "normal";
        textEntryParagraphInput.style.fontSize = "16px";
        textEntryParagraphInput.style.overflowY = "scroll";
        textEntryParagraphInput.style.scrollbarColor = `${backgroundColor} transparent`;
        textEntryParagraphInput.style.backgroundAttachment = `local`;
        textEntryParagraphInput.style.resize = `none`;
    });
    const textSelectDropdowns = Array.from(document.querySelectorAll(".text-select-dropdown"));
    textSelectDropdowns.forEach((textSelectDropdown) => {
        const backgroundColor = getPaletteColour(PAL_FAINTER);
        const textColor = getPaletteColour(PAL_STARKEST);
        const selector = textSelectDropdown.querySelector("select");
        const label = textSelectDropdown.querySelector("label");
        if (label) {
            label.style.display = "grid";
            label.style.alignItems = "center";
        }
        const options = selector.querySelectorAll("option");
        textSelectDropdown.style.display = "flex";
        textSelectDropdown.style.height = "auto";
        selector.style.flexGrow = "100";
        selector.style.border = 0;
        selector.style.backgroundColor = "transparent";
        selector.style.color = textColor;
        selector.style.fontFamily = "Playpen Sans, cursive";
        selector.style.fontWeight = "normal";
        selector.style.textAlign = "center";
        options.forEach((option) => {
            option.style.fontWeight = "normal";
            option.style.backgroundColor = backgroundColor;
        });
    });
}

const renderCanvases = () => {
    generatePalette();
    generateSliders();
};

const saveButton = document.querySelector("#save-sheet-button");
saveButton.addEventListener("click", (e) => {
    saveAllData();
});

applicationStartup();
