// INITIALISATION
var root = document.querySelector(":root");
const standardHue = 123.62;
let selectedColor = { saturation: 0.3, hue: standardHue };
const MODE_LIGHT = "light";
const MODE_DARK = "dark";
const PAL_STARKEST = 0;
const PAL_STARKER = 1;
const PAL_STARK = 2;
const PAL_ICON = 3;
const PAL_FAINT = 4;
const PAL_FAINTER = 5;
const PAL_FAINTEST = 6;
const sliders = document.getElementById("test-color-sliders");
const hueSelector = sliders.querySelector("#hue-selector");
const saturationSelector = sliders.querySelector("#saturation-selector");
const canvasWidth = 300;
const canvasHeight = 50;
const maxHue = 360;
const maxSat = 0.35;
const hueSteps = 360;
const satSteps = 35;
const body = document.querySelector("body");
const logo = document.querySelector("#dovecote-logo");

const PALETTE_LIGHTNESS = [5, 25, 37.5, 50, 65, 80, 95];
const PALETTE_SATURATION_MOD = [0.1, 0.3, 0.5, 0.7, 0.5, 0.3, 0.1];
const PALETTE_HUE_SHIFT = [-90, -60, -30, 0, -30, -60, -90];
const makePaletteColour = (shade, currentPalette, opacity = null) => {
    const paletteLightness = currentPalette == MODE_LIGHT ? PALETTE_LIGHTNESS : [...PALETTE_LIGHTNESS].reverse();
    const paletteSaturationMod = currentPalette == MODE_LIGHT ? PALETTE_SATURATION_MOD : [...PALETTE_SATURATION_MOD].reverse();
    const paletteHueShift = currentPalette == MODE_LIGHT ? PALETTE_HUE_SHIFT : [...PALETTE_HUE_SHIFT].reverse();
    const lightness = paletteLightness[shade];
    const saturation = selectedColor.saturation * paletteSaturationMod[shade];
    const hue = selectedColor.hue + paletteHueShift[shade];
    if (opacity != null) {
        return `oklch(${lightness}% ${saturation} ${hue} / ${opacity})`;
    }
    return `oklch(${lightness}% ${saturation} ${hue})`;
};

const setPaletteValues = (element, mode = element.style.getPropertyValue("--shade-mode")) => {
    for (let i = 0; i < PALETTE_LIGHTNESS.length; i++) {
        element.style.setProperty(`--character-sheet-palette-${i}`, makePaletteColour(i, mode));
    }
    element.style.setProperty(`--character-sheet-palette-6-faint`, makePaletteColour(6, mode, 0.5));
    element.style.setProperty(`--character-sheet-palette-6-transparent`, makePaletteColour(6, mode, 0));
};

const setAllPaletteValues = () => {
    setPaletteValues(characterSheet);
    setPaletteValues(body);
};

const getPaletteColour = (shade) => {
    return `var(--character-sheet-palette-${shade})`;
};

const generatePalette = () => {
    const paletteCanvases = Array.from(document.getElementById("test-color-picker").querySelector(".preview").children);
    const paletteSize = 50;
    paletteCanvases.forEach((paletteCanvas, i) => {
        const context = paletteCanvas.getContext("2d");
        context.canvas.width = paletteSize;
        context.canvas.height = paletteSize;
        context.fillStyle = makePaletteColour(i, characterSheet.style.getPropertyValue("--shade-mode"));
        context.fillRect(0, 0, paletteSize, paletteSize);
    });
};

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
    setAllPaletteValues();
    renderCanvases();
    logo.style.filter = `hue-rotate(${selectedColor.hue - standardHue}deg)`;
});

saturationSelector.addEventListener("mousedown", function (e) {
    const coords = getCursorPosition(saturationSelector, e);
    const position = coords.x / canvasWidth;
    selectedColor.saturation = position * maxSat;
    setAllPaletteValues();
    renderCanvases();
});

const swapShadeModeButton = document.querySelector("#button-swap-shade-mode");
swapShadeModeButton.addEventListener("click", (e) => {
    if (characterSheet.style.getPropertyValue("--shade-mode") == MODE_LIGHT) {
        characterSheet.style.setProperty("--shade-mode", MODE_DARK);
        body.style.setProperty("--shade-mode", MODE_DARK);
        logo.src = "assets/dovecote logo dark.svg";
    } else {
        characterSheet.style.setProperty("--shade-mode", MODE_LIGHT);
        body.style.setProperty("--shade-mode", MODE_LIGHT);
        logo.src = "assets/dovecote logo.svg";
    }
    setAllPaletteValues();
    renderCanvases();
});
