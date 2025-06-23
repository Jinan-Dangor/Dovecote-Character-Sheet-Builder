// INITIALISATION
let selectedColor = { saturation: 0.3, hue: 30 };
let paletteColors = [];
const sliders = document.getElementById("test-color-sliders");
const hueSelector = sliders.querySelector("#hue-selector");
const saturationSelector = sliders.querySelector("#saturation-selector");
const canvasWidth = 300;
const canvasHeight = 50;
const maxHue = 360;
const maxSat = 0.35;
const hueSteps = 360;
const satSteps = 35;

// FUNCTIONS
// Create colour boxes
const generatePalette = () => {
    paletteColors[0] = `oklch(10% ${selectedColor.saturation * 0.05} ${selectedColor.hue})`;
    paletteColors[1] = `oklch(30% ${selectedColor.saturation * 0.3} ${selectedColor.hue})`;
    paletteColors[2] = `oklch(50% ${selectedColor.saturation} ${selectedColor.hue})`;
    paletteColors[3] = `oklch(70% ${selectedColor.saturation * 0.3} ${selectedColor.hue})`;
    paletteColors[4] = `oklch(90% ${selectedColor.saturation * 0.05} ${selectedColor.hue})`;

    const paletteCanvases = Array.from(document.getElementById("test-color-picker").querySelector(".preview").children);
    const paletteSize = 50;
    paletteCanvases.forEach((paletteCanvas, i) => {
        const context = paletteCanvas.getContext("2d");
        context.canvas.width = paletteSize;
        context.canvas.height = paletteSize;
        context.fillStyle = paletteColors[i];
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
        satGrad.addColorStop(i / satSteps, `oklch(75% ${(i / satSteps) * maxSat} ${selectedColor.hue})`);
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
    selectedColor.hue = position * maxHue;
    generatePalette();
    generateSliders();
    updateTextPreview();
});

saturationSelector.addEventListener("mousedown", function (e) {
    const coords = getCursorPosition(saturationSelector, e);
    const position = coords.x / canvasWidth;
    selectedColor.saturation = position * maxSat;
    generatePalette();
    generateSliders();
    updateTextPreview();
});

function updateTextPreview() {
    const textPreview = document.getElementById("test-text-preview");
    const lightModePreview = textPreview.querySelector(".light-mode-preview");
    const lightHighlights = Array.from(lightModePreview.querySelectorAll(".highlighted"));
    const darkModePreview = textPreview.querySelector(".dark-mode-preview");
    const darkHighlights = Array.from(darkModePreview.querySelectorAll(".highlighted"));
    lightModePreview.style.backgroundColor = paletteColors[4];
    lightModePreview.style.color = paletteColors[1];
    lightHighlights.forEach((highlight) => {
        highlight.style.backgroundColor = paletteColors[3];
    });
    darkModePreview.style.backgroundColor = paletteColors[0];
    darkModePreview.style.color = paletteColors[4];
    darkHighlights.forEach((highlight) => {
        highlight.style.backgroundColor = paletteColors[1];
    });
    const icons = Array.from(document.querySelectorAll(".icon"));
    icons.forEach((icon) => {
        icon.style.color = "transparent";
        icon.style.textShadow = `0 0 0 ${paletteColors[2]}`;
    });
}

// PROGRAM START

generatePalette();
generateSliders();
updateTextPreview();
