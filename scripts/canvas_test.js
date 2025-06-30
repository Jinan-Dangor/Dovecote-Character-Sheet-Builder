// INITIALISATION
var root = document.querySelector(":root");
let selectedColor = { saturation: 0.3, hue: 120 };
const MODE_LIGHT = "light";
const MODE_DARK = "dark";
const PAL_STARKEST = 0;
const PAL_STARKER = 1;
const PAL_STARK = 2;
const PAL_ICON = 3;
const PAL_FAINT = 4;
const PAL_FAINTER = 5;
const PAL_FAINTEST = 6;
const characterSheet = document.querySelector(".character-sheet");
const sliders = document.getElementById("test-color-sliders");
const hueSelector = sliders.querySelector("#hue-selector");
const saturationSelector = sliders.querySelector("#saturation-selector");
const canvasWidth = 300;
const canvasHeight = 50;
const maxHue = 360;
const maxSat = 0.35;
const hueSteps = 360;
const satSteps = 35;

const PALETTE_LIGHTNESS = [5, 25, 37.5, 50, 65, 80, 95];
const PALETTE_SATURATION_MOD = [0.1, 0.3, 0.5, 0.7, 0.5, 0.3, 0.1];
const PALETTE_HUE_SHIFT = [-90, -60, -30, 0, -30, -60, -90];
const makePaletteColour = (shade, currentPalette = characterSheet.style.getPropertyValue("--shade-mode")) => {
    const paletteLightness = currentPalette == MODE_LIGHT ? PALETTE_LIGHTNESS : [...PALETTE_LIGHTNESS].reverse();
    const paletteSaturationMod = currentPalette == MODE_LIGHT ? PALETTE_SATURATION_MOD : [...PALETTE_SATURATION_MOD].reverse();
    const paletteHueShift = currentPalette == MODE_LIGHT ? PALETTE_HUE_SHIFT : [...PALETTE_HUE_SHIFT].reverse();
    const lightness = paletteLightness[shade];
    const saturation = selectedColor.saturation * paletteSaturationMod[shade];
    const hue = selectedColor.hue + paletteHueShift[shade];
    return `oklch(${lightness}% ${saturation} ${hue})`;
};

const setPaletteValues = (element, mode = characterSheet.style.getPropertyValue("--shade-mode")) => {
    for (let i = 0; i < PALETTE_LIGHTNESS.length; i++) {
        element.style.setProperty(`--character-sheet-palette-${i}`, makePaletteColour(i, mode));
    }
};

const getPaletteColour = (shade) => {
    return `var(--character-sheet-palette-${shade})`;
};

// FUNCTIONS
// Create colour boxes
const generatePalette = () => {
    const paletteCanvases = Array.from(document.getElementById("test-color-picker").querySelector(".preview").children);
    const paletteSize = 50;
    paletteCanvases.forEach((paletteCanvas, i) => {
        const context = paletteCanvas.getContext("2d");
        context.canvas.width = paletteSize;
        context.canvas.height = paletteSize;
        context.fillStyle = makePaletteColour(i);
        context.fillRect(0, 0, paletteSize, paletteSize);
    });
};

// Create linear gradient
const generateSliders = () => {
    const hueSelectorContext = hueSelector.getContext("2d");
    hueSelectorContext.canvas.width = canvasWidth;
    hueSelectorContext.canvas.height = canvasHeight;
    const hueGrad = hueSelectorContext.createLinearGradient(0, 0, canvasWidth, 0);
    const saturationSelectorContext = saturationSelector.getContext("2d");
    saturationSelectorContext.canvas.width = canvasWidth;
    saturationSelectorContext.canvas.height = canvasHeight;
    const satGrad = hueSelectorContext.createLinearGradient(0, 0, canvasWidth, 0);
    for (let i = 0; i <= hueSteps; i++) {
        hueGrad.addColorStop(i / hueSteps, `oklch(75% ${selectedColor.saturation} ${(i / hueSteps) * maxHue})`);
    }
    for (let i = 0; i <= satSteps; i++) {
        satGrad.addColorStop(i / satSteps, `oklch(75% ${(i / satSteps) * maxSat} ${selectedColor.hue - 30})`);
    }
    hueSelectorContext.fillStyle = hueGrad;
    hueSelectorContext.fillRect(0, 0, canvasWidth, canvasHeight);
    saturationSelectorContext.fillStyle = satGrad;
    saturationSelectorContext.fillRect(0, 0, canvasWidth, canvasHeight);
};

function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    return { x, y };
}

hueSelector.addEventListener("mousedown", function (e) {
    const coords = getCursorPosition(hueSelector, e);
    const position = coords.x / canvasWidth;
    selectedColor.hue = position * maxHue + 30;
    setPaletteValues(characterSheet);
    renderCanvases();
});

saturationSelector.addEventListener("mousedown", function (e) {
    const coords = getCursorPosition(saturationSelector, e);
    const position = coords.x / canvasWidth;
    selectedColor.saturation = position * maxSat;
    setPaletteValues(characterSheet);
    renderCanvases();
});

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
            console.error("Unrecognised highlight mode provided to highlightMod()");
            return 0;
    }
};

const generateDotTrack = (length) => {
    const track = document.createElement("span");
    track.classList += "dot-track";
    track.style.fontSize = "0.75em";
    for (let i = 0; i < length; i++) {
        const newDot = document.createElement("span");
        newDot.innerText = "⬤";
        if (i != length - 1) {
            newDot.innerText += " ";
        }
        newDot.classList.add("dot-track-icon");
        newDot.style.cursor = "pointer";
        newDot.style.userSelect = "none";
        newDot.style.color = "transparent";
        track.appendChild(newDot);
    }
    return track;
};

function styleText() {
    characterSheet.style.backgroundColor = getPaletteColour(PAL_FAINTEST);
    characterSheet.style.color = getPaletteColour(PAL_STARKEST);
    const highlights = Array.from(document.querySelectorAll(".highlighted"));
    highlights.forEach((highlight) => {
        highlight.style.setProperty("--highlight-mode", "highlighted");
        highlight.style.backgroundColor = getPaletteColour(PAL_FAINTER);
        highlight.style.borderRadius = "10px";
        highlight.style.padding = "5px 10px";
    });
    const deepHighlights = Array.from(document.querySelectorAll(".deep-highlighted"));
    deepHighlights.forEach((highlight) => {
        highlight.style.setProperty("--highlight-mode", "deep-highlighted");
        highlight.style.backgroundColor = getPaletteColour(PAL_FAINT);
        highlight.style.borderRadius = "10px";
        highlight.style.padding = "5px 10px";
    });
    const inversions = Array.from(document.querySelectorAll(".inverted"));
    inversions.forEach((inversion) => {
        inversion.style.setProperty("--highlight-mode", "inverted");
        inversion.style.backgroundColor = getPaletteColour(PAL_STARKEST);
        inversion.style.color = getPaletteColour(PAL_FAINTEST);
        inversion.style.borderRadius = "10px";
        inversion.style.padding = "5px 10px";
    });
    const dotTracks = Array.from(document.querySelectorAll(".dot-track"));
    dotTracks.forEach((oldDotTrack) => {
        const dotTrack = generateDotTrack(oldDotTrack.getAttribute("data-length"));
        oldDotTrack.replaceWith(dotTrack);
        const dots = Array.from(dotTrack.querySelectorAll(".dot-track-icon"));
        dots.forEach((dot, i) => {
            const selectedColor = getPaletteColour(PAL_ICON);
            const unselectedColor = getPaletteColour(applyHighlightMod(dot, PAL_STARKEST));
            if (dot.getAttribute("data-selected") == "true") {
                dot.style.textShadow = `0 0 0 ${selectedColor}`;
            } else {
                dot.style.textShadow = `0 0 0 ${unselectedColor}`;
            }
            dot.addEventListener("click", (e) => {
                if (dot.getAttribute("data-selected") == "true") {
                    const mod = i < dots.length - 1 && dots[i + 1].getAttribute("data-selected") == "true" ? 1 : 0;
                    for (let j = i + mod; j < dots.length; j++) {
                        dots[j].setAttribute("data-selected", "false");
                        dots[j].style.textShadow = `0 0 0 ${unselectedColor}`;
                    }
                } else {
                    for (let j = 0; j <= i; j++) {
                        dots[j].setAttribute("data-selected", "true");
                        dots[j].style.textShadow = `0 0 0 ${selectedColor}`;
                    }
                }
            });
        });
    });
    const headings = Array.from(document.querySelectorAll(".heading"));
    headings.forEach((heading) => {
        heading.style.fontFamily = "Germania One, system-ui";
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
        textbox.style.width = "95%";
        textbox.style.border = 0;
        textbox.style.backgroundColor = "transparent";
        textbox.style.borderBottom = `3px solid ${backgroundColor}`;
        textbox.style.color = textColor;
        textbox.style.fontFamily = "Playpen Sans, cursive";
        textbox.style.fontSize = "16px";
    });
    const textEntryParagraphs = Array.from(document.querySelectorAll(".text-entry-paragraph"));
    textEntryParagraphs.forEach((textEntryParagraph) => {
        const backgroundColor = getPaletteColour(applyHighlightMod(textEntryParagraph, PAL_FAINTER));
        const textColor = getPaletteColour(PAL_STARKEST);
        textEntryParagraph.contentEditable = "true";
        textEntryParagraph.style.border = 0;
        textEntryParagraph.style.outline = 0;
        textEntryParagraph.style.backgroundColor = "transparent";
        textEntryParagraph.style.backgroundImage = `linear-gradient(to top, ${backgroundColor} 3px, transparent 1px)`;
        textEntryParagraph.style.backgroundPosition = `top`;
        textEntryParagraph.style.backgroundSize = `100% 1.5em`;
        textEntryParagraph.style.lineHeight = `1.5em`;
        textEntryParagraph.style.color = textColor;
        textEntryParagraph.style.fontFamily = "Playpen Sans, cursive";
        textEntryParagraph.style.fontSize = "16px";
        textEntryParagraph.style.overflowY = "scroll";
        textEntryParagraph.style.scrollbarColor = `${backgroundColor} transparent`;
        textEntryParagraph.style.backgroundAttachment = `local`;
        textEntryParagraph.style.resize = `none`;
    });
    const textSelectDropdowns = Array.from(document.querySelectorAll(".text-select-dropdown"));
    textSelectDropdowns.forEach((textSelectDropdown) => {
        const backgroundColor = getPaletteColour(PAL_FAINTER);
        const textColor = getPaletteColour(PAL_STARKEST);
        const selector = textSelectDropdown.querySelector("select");
        const options = selector.querySelectorAll("option");
        selector.style.border = 0;
        selector.style.backgroundColor = "transparent";
        selector.style.color = textColor;
        selector.style.fontFamily = "Playpen Sans, cursive";
        selector.style.textAlign = "center";
        options.forEach((option) => {
            option.style.backgroundColor = backgroundColor;
        });
    });
}

const renderCanvases = () => {
    generatePalette();
    generateSliders();
};

// PROGRAM START
characterSheet.style.setProperty("--shade-mode", MODE_LIGHT);
characterSheet.style.setProperty("--highlight-mode", "default");
characterSheet.style.setProperty("--invert-mode", "none");

setPaletteValues(characterSheet);
styleText();
renderCanvases();

const button = document.querySelector("#button-swap-shade-mode");
button.addEventListener("click", (e) => {
    if (characterSheet.style.getPropertyValue("--shade-mode") == MODE_LIGHT) {
        characterSheet.style.setProperty("--shade-mode", MODE_DARK);
    } else {
        characterSheet.style.setProperty("--shade-mode", MODE_LIGHT);
    }
    setPaletteValues(characterSheet);
    renderCanvases();
});

/*const textEntryParagraphs = Array.from(document.querySelectorAll(".text-entry-paragraph"));
textEntryParagraphs.forEach((textEntryParagraph) => {
    const editableText = textEntryParagraph.querySelector("div");
    const lineHeight = parseInt(getComputedStyle(textEntryParagraph).lineHeight);
    textEntryParagraph.addEventListener("keydown", (e) => {
        const totalHeight = editableText.offsetHeight;
        const lines = parseInt(totalHeight / lineHeight);
        if (lines > 10) {
            e.preventDefault();
        }
    });
});*/

/*const textPreview = document.getElementById("test-text-preview");
const lightModePreview = textPreview.querySelector(".light-mode-preview");
html2PDF(lightModePreview, {
    jsPDF: {
        format: "a4",
    },
    imageType: "image/jpeg",
    output: "./pdf/generate.pdf",
});*/
