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

// TEST CHARACTER SHEET
const testSheet = {
    type: "root",
    name: "Blades in the Dark - Spider",
    content: {
        type: "flex",
        spacingMode: "padding",
        direction: "row",
        sizes: [0.4, 0.4, 0.19],
        contents: [
            {
                type: "flex",
                direction: "column",
                sizes: [0.06, 0.06, 0.04, 0.08, 0.06, 0.2, 0.49],
                contents: [
                    {
                        type: "flex",
                        direction: "row",
                        sizes: [0.2, 0.2],
                        contents: [
                            {
                                type: "heading",
                                spacingMode: "padding",
                                content: "Blades in the Dark",
                            },
                            {
                                type: "textEntryLine",
                                spacingMode: "padding",
                                label: "Crew",
                            },
                        ],
                    },
                    {
                        type: "flex",
                        direction: "row",
                        sizes: [0.2, 0.2],
                        contents: [
                            {
                                type: "textEntryLine",
                                spacingMode: "padding",
                                label: "Name",
                            },
                            {
                                type: "textEntryLine",
                                spacingMode: "padding",
                                label: "Alias",
                            },
                        ],
                    },
                    {
                        type: "textEntryLine",
                        spacingMode: "padding",
                        label: "Look",
                    },
                    {
                        type: "flex",
                        direction: "row",
                        sizes: [0.4 / 3, 0.4 / 3, 0.4 / 3],
                        contents: [
                            {
                                type: "textSelectDropdown",
                                spacingMode: "padding",
                                label: "Heritage",
                                options: ["Akoros", "The Dagger Isles", "Truvia", "Severos", "Skovlan", "Tycheros"],
                            },
                            {
                                type: "textSelectDropdown",
                                spacingMode: "padding",
                                label: "Background",
                                options: ["Academic", "Labour", "Law", "Trade", "Military", "Noble", "Underworld"],
                            },
                            {
                                type: "textSelectDropdown",
                                spacingMode: "padding",
                                label: "Vice/Purveyor",
                                options: ["Faith", "Gambling", "Luxury", "Obligation", "Pleasure", "Stupor", "Weird"],
                            },
                        ],
                    },
                    {
                        type: "flex",
                        spacingMode: "padding",
                        direction: "row",
                        sizes: [0.19, 0.2],
                        contents: [
                            {
                                type: "flex",
                                highlightMode: "inverted",
                                direction: "row",
                                sizes: [0.1, 0.09],
                                contents: [
                                    {
                                        type: "heading",
                                        spacingMode: "padding",
                                        headingSize: "h3",
                                        content: "Stress",
                                    },
                                    {
                                        type: "iconTrack",
                                        icon: "⬤",
                                        length: 8,
                                    },
                                ],
                            },
                            {
                                type: "flex",
                                direction: "row",
                                sizes: [0.1, 0.1],
                                contents: [
                                    {
                                        type: "flex",
                                        direction: "column",
                                        sizes: [0.03 / 2, 0.03 / 2],
                                        contents: [
                                            {
                                                type: "textSelectDropdown",
                                                spacingMode: "padding",
                                                options: ["Cold", "Haunted", "Obsessed", "Paranoid", "Reckless", "Soft", "Unstable", "Vicious"],
                                            },
                                            {
                                                type: "textSelectDropdown",
                                                spacingMode: "padding",
                                                options: ["Cold", "Haunted", "Obsessed", "Paranoid", "Reckless", "Soft", "Unstable", "Vicious"],
                                            },
                                        ],
                                    },
                                    {
                                        type: "flex",
                                        direction: "column",
                                        sizes: [0.03 / 2, 0.03 / 2],
                                        contents: [
                                            {
                                                type: "textSelectDropdown",
                                                spacingMode: "padding",
                                                options: ["Cold", "Haunted", "Obsessed", "Paranoid", "Reckless", "Soft", "Unstable", "Vicious"],
                                            },
                                            {
                                                type: "textSelectDropdown",
                                                spacingMode: "padding",
                                                options: ["Cold", "Haunted", "Obsessed", "Paranoid", "Reckless", "Soft", "Unstable", "Vicious"],
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        type: "flex",
                        spacingMode: "padding",
                        direction: "row",
                        sizes: [0.3, 0.09],
                        contents: [
                            {
                                type: "flex",
                                direction: "column",
                                sizes: [0.04, 0.05, 0.05, 0.05],
                                contents: [
                                    {
                                        type: "heading",
                                        spacingMode: "padding",
                                        highlightMode: "inverted",
                                        headingSize: "h3",
                                        content: "Harm",
                                    },
                                    {
                                        type: "flex",
                                        direction: "row",
                                        sizes: [0.02, 0.24, 0.04],
                                        contents: [
                                            {
                                                type: "richText",
                                                highlightMode: "highlighted",
                                                alignmentMode: "center",
                                                content: "<b>3</b>",
                                            },
                                            {
                                                type: "textEntryParagraph",
                                                spacingMode: "padding",
                                            },
                                            {
                                                type: "richText",
                                                highlightMode: "highlighted",
                                                alignmentMode: "center",
                                                content: "<b>Need Help</b>",
                                            },
                                        ],
                                    },
                                    {
                                        type: "flex",
                                        direction: "row",
                                        sizes: [0.02, 0.12, 0.12, 0.04],
                                        contents: [
                                            {
                                                type: "richText",
                                                highlightMode: "highlighted",
                                                alignmentMode: "center",
                                                content: "<b>2</b>",
                                            },
                                            {
                                                type: "textEntryParagraph",
                                                spacingMode: "padding",
                                            },
                                            {
                                                type: "textEntryParagraph",
                                                spacingMode: "padding",
                                            },
                                            {
                                                type: "richText",
                                                highlightMode: "highlighted",
                                                alignmentMode: "center",
                                                content: "<b>-1D</b>",
                                            },
                                        ],
                                    },
                                    {
                                        type: "flex",
                                        direction: "row",
                                        sizes: [0.02, 0.12, 0.12, 0.04],
                                        contents: [
                                            {
                                                type: "richText",
                                                highlightMode: "highlighted",
                                                alignmentMode: "center",
                                                content: "<b>1</b>",
                                            },
                                            {
                                                type: "textEntryParagraph",
                                                spacingMode: "padding",
                                            },
                                            {
                                                type: "textEntryParagraph",
                                                spacingMode: "padding",
                                            },
                                            {
                                                type: "richText",
                                                highlightMode: "highlighted",
                                                alignmentMode: "center",
                                                content: "<b>Less Effect</b>",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                type: "flex",
                                direction: "column",
                                sizes: [0.04, 0.05, 0.04, 0.02, 0.02, 0.02],
                                contents: [
                                    {
                                        type: "heading",
                                        spacingMode: "padding",
                                        highlightMode: "inverted",
                                        headingSize: "h3",
                                        content: "Healing",
                                    },
                                    {
                                        type: "iconTrack",
                                        icon: "⬤",
                                        length: 4,
                                    },
                                    {
                                        type: "heading",
                                        spacingMode: "padding",
                                        highlightMode: "inverted",
                                        headingSize: "h3",
                                        content: "Armor Uses",
                                    },
                                    {
                                        type: "series",
                                        spacingMode: "padding",
                                        contents: [
                                            {
                                                type: "icon",
                                                icon: "◼",
                                            },
                                            {
                                                type: "richText",
                                                content: "<b>Armor</b>",
                                            },
                                        ],
                                    },
                                    {
                                        type: "series",
                                        spacingMode: "padding",
                                        contents: [
                                            {
                                                type: "icon",
                                                icon: "◼",
                                            },
                                            {
                                                type: "richText",
                                                content: "<b>Heavy</b>",
                                            },
                                        ],
                                    },
                                    {
                                        type: "series",
                                        spacingMode: "padding",
                                        contents: [
                                            {
                                                type: "icon",
                                                icon: "◼",
                                            },
                                            {
                                                type: "richText",
                                                content: "<b>Special</b>",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        type: "textEntryParagraph",
                        spacingMode: "padding",
                        label: "Notes",
                    },
                ],
            },
            {
                type: "flex",
                direction: "column",
                sizes: [0.8, 0.19],
                contents: [
                    {
                        type: "flex",
                        highlightMode: "highlighted",
                        spacingMode: "padding no-top",
                        direction: "column",
                        sizes: [0.08, 0.04, 0.375, 0.16, 0.04, 0.1],
                        contents: [
                            {
                                type: "flex",
                                direction: "row",
                                sizes: [0.3, 0.09],
                                contents: [
                                    {
                                        type: "heading",
                                        spacingMode: "padding no-top",
                                        headingSize: "h1",
                                        content: "Spider",
                                    },
                                    {
                                        type: "heading",
                                        alignmentMode: "center",
                                        headingSize: "h4",
                                        content: "A Devious Mastermind",
                                    },
                                ],
                            },
                            {
                                type: "heading",
                                spacingMode: "padding",
                                headingSize: "h3",
                                highlightMode: "inverted",
                                content: "Special Abilities",
                            },
                            {
                                type: "series",
                                spacingMode: "padding",
                                direction: "column",
                                contents: [
                                    {
                                        type: "flex",
                                        direction: "row",
                                        alignItems: "start",
                                        sizes: [0.01, 0.37],
                                        contents: [
                                            {
                                                type: "icon",
                                                icon: "⬤",
                                            },
                                            {
                                                type: "richText",
                                                content: "<b>Foresight</b>: Two times per score you can <b>assist</b> a teammate without paying stress. Tell us how you prepared for this.",
                                            },
                                        ],
                                    },
                                    {
                                        type: "flex",
                                        direction: "row",
                                        alignItems: "start",
                                        sizes: [0.01, 0.37],
                                        contents: [
                                            {
                                                type: "icon",
                                                icon: "⬤",
                                            },
                                            {
                                                type: "richText",
                                                content: "<b>Calculating</b>: Due to your careful planning, during <b>downtime</b>, you may give yourself or another crew member +1 downtime action.",
                                            },
                                        ],
                                    },
                                    {
                                        type: "flex",
                                        direction: "row",
                                        alignItems: "start",
                                        sizes: [0.01, 0.37],
                                        contents: [
                                            {
                                                type: "icon",
                                                icon: "⬤",
                                            },
                                            {
                                                type: "richText",
                                                content: "<b>Connected</b>: During downtime, you get <b>+1 result level</b> when you <b>acquire an asset</b> or <b>reduce heat</b>.",
                                            },
                                        ],
                                    },
                                    {
                                        type: "flex",
                                        direction: "row",
                                        alignItems: "start",
                                        sizes: [0.01, 0.37],
                                        contents: [
                                            {
                                                type: "icon",
                                                icon: "⬤",
                                            },
                                            {
                                                type: "richText",
                                                content:
                                                    "<b>Functioning Vice</b>: When you indulge your vice, you may adjust the dice outcome by 1 or 2 (up or down). An ally who joins in your vice may do the same.",
                                            },
                                        ],
                                    },
                                    {
                                        type: "flex",
                                        direction: "row",
                                        alignItems: "start",
                                        sizes: [0.01, 0.37],
                                        contents: [
                                            {
                                                type: "icon",
                                                icon: "⬤",
                                            },
                                            {
                                                type: "richText",
                                                content: `<b>Ghost Contract</b>: When you shake on a deal, you and your partner - human or otherwise - both bear a mark of your oath. If either breaks the contract, they take Level 3 harm, "Cursed".`,
                                            },
                                        ],
                                    },
                                    {
                                        type: "flex",
                                        direction: "row",
                                        alignItems: "start",
                                        sizes: [0.01, 0.37],
                                        contents: [
                                            {
                                                type: "icon",
                                                icon: "⬤",
                                            },
                                            {
                                                type: "richText",
                                                content:
                                                    "<b>Jail Bird</b>: When <b>incarcerated</b>, your wanted level counts as 1 less, your Tier as 1 more, and you gain +1 faction status with the faction you help on the inside (in addition to your incarceration roll).",
                                            },
                                        ],
                                    },
                                    {
                                        type: "flex",
                                        direction: "row",
                                        alignItems: "start",
                                        sizes: [0.01, 0.37],
                                        contents: [
                                            {
                                                type: "icon",
                                                icon: "⬤",
                                            },
                                            {
                                                type: "richText",
                                                content:
                                                    "<b>Mastermind</b>: You may expend your <b>special armor</b> to protect a teammate, or to <b>push yourself</b> when you gather information or work on a long-term project.",
                                            },
                                        ],
                                    },
                                    {
                                        type: "flex",
                                        direction: "row",
                                        alignItems: "start",
                                        sizes: [0.01, 0.37],
                                        contents: [
                                            {
                                                type: "icon",
                                                icon: "⬤",
                                            },
                                            {
                                                type: "richText",
                                                content:
                                                    "<b>Weaving the Web</b>: You gain <b>+1d</b> to <b>Consort</b> when you <b>gather information</b> on a target for a score. You get <b>+1d</b> to the <b>engagement roll</b> for that operation.",
                                            },
                                        ],
                                    },
                                    {
                                        type: "flex",
                                        direction: "row",
                                        alignItems: "start",
                                        sizes: [0.03, 0.35],
                                        contents: [
                                            {
                                                type: "iconTrack",
                                                icon: "⬤",
                                                length: 3,
                                            },
                                            {
                                                type: "richText",
                                                content: "<b>Veteran</b>: Choose a special ability from another source.",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                type: "flex",
                                direction: "row",
                                sizes: [0.2, 0.195],
                                contents: [
                                    {
                                        type: "flex",
                                        direction: "column",
                                        sizes: [0.04, 0.12],
                                        contents: [
                                            {
                                                type: "heading",
                                                highlightMode: "inverted",
                                                spacingMode: "padding",
                                                headingSize: "h3",
                                                content: "Shrewd Friends",
                                            },
                                            {
                                                type: "series",
                                                spacingMode: "padding",
                                                direction: "column",
                                                contents: [
                                                    {
                                                        type: "series",
                                                        contents: [
                                                            {
                                                                type: "icon",
                                                                icon: "▲",
                                                            },
                                                            {
                                                                type: "icon",
                                                                icon: "▼",
                                                            },
                                                            {
                                                                type: "richText",
                                                                spacingMode: "padding",
                                                                content: "Salia, an information broker",
                                                            },
                                                        ],
                                                    },
                                                    {
                                                        type: "series",
                                                        contents: [
                                                            {
                                                                type: "icon",
                                                                icon: "▲",
                                                            },
                                                            {
                                                                type: "icon",
                                                                icon: "▼",
                                                            },
                                                            {
                                                                type: "richText",
                                                                spacingMode: "padding",
                                                                content: "Augus, a master architect",
                                                            },
                                                        ],
                                                    },
                                                    {
                                                        type: "series",
                                                        contents: [
                                                            {
                                                                type: "icon",
                                                                icon: "▲",
                                                            },
                                                            {
                                                                type: "icon",
                                                                icon: "▼",
                                                            },
                                                            {
                                                                type: "richText",
                                                                spacingMode: "padding",
                                                                content: "Jennah, a servant ",
                                                            },
                                                        ],
                                                    },
                                                    {
                                                        type: "series",
                                                        contents: [
                                                            {
                                                                type: "icon",
                                                                icon: "▲",
                                                            },
                                                            {
                                                                type: "icon",
                                                                icon: "▼",
                                                            },
                                                            {
                                                                type: "richText",
                                                                spacingMode: "padding",
                                                                content: "Riven, a chemist",
                                                            },
                                                        ],
                                                    },
                                                    {
                                                        type: "series",
                                                        contents: [
                                                            {
                                                                type: "icon",
                                                                icon: "▲",
                                                            },
                                                            {
                                                                type: "icon",
                                                                icon: "▼",
                                                            },
                                                            {
                                                                type: "richText",
                                                                spacingMode: "padding",
                                                                content: "Jeren, a bluecoat archivist",
                                                            },
                                                        ],
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                    {
                                        type: "flex",
                                        direction: "column",
                                        sizes: [0.04, 0.12],
                                        contents: [
                                            {
                                                type: "heading",
                                                highlightMode: "inverted",
                                                spacingMode: "padding",
                                                headingSize: "h3",
                                                content: "Items",
                                            },
                                            {
                                                type: "series",
                                                spacingMode: "padding",
                                                direction: "column",
                                                contents: [
                                                    {
                                                        type: "series",
                                                        contents: [
                                                            {
                                                                type: "icon",
                                                                icon: "◼",
                                                            },
                                                            {
                                                                type: "richText",
                                                                spacingMode: "padding",
                                                                content: "<i>Fine cover identity</i>",
                                                            },
                                                        ],
                                                    },
                                                    {
                                                        type: "series",
                                                        contents: [
                                                            {
                                                                type: "icon",
                                                                icon: "◼",
                                                            },
                                                            {
                                                                type: "richText",
                                                                spacingMode: "padding",
                                                                content: "Fine bottle of whiskey",
                                                            },
                                                        ],
                                                    },
                                                    {
                                                        type: "series",
                                                        contents: [
                                                            {
                                                                type: "icon",
                                                                icon: "◼",
                                                            },
                                                            {
                                                                type: "richText",
                                                                spacingMode: "padding",
                                                                content: "Blueprints",
                                                            },
                                                        ],
                                                    },
                                                    {
                                                        type: "series",
                                                        contents: [
                                                            {
                                                                type: "icon",
                                                                icon: "◼",
                                                            },
                                                            {
                                                                type: "richText",
                                                                spacingMode: "padding",
                                                                content: "<i>Vial of slumber essence</i>",
                                                            },
                                                        ],
                                                    },
                                                    {
                                                        type: "series",
                                                        contents: [
                                                            {
                                                                type: "icon",
                                                                icon: "◼",
                                                            },
                                                            {
                                                                type: "richText",
                                                                spacingMode: "padding",
                                                                content: "<i>Concealed palm pistol</i>",
                                                            },
                                                        ],
                                                    },
                                                    {
                                                        type: "series",
                                                        contents: [
                                                            {
                                                                type: "icon",
                                                                icon: "◼",
                                                            },
                                                            {
                                                                type: "richText",
                                                                spacingMode: "padding",
                                                                content: "<i>Spiritbane charm</i>",
                                                            },
                                                        ],
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                type: "heading",
                                highlightMode: "inverted",
                                spacingMode: "padding",
                                headingSize: "h3",
                                content: "XP",
                            },
                            {
                                type: "series",
                                spacingMode: "padding",
                                direction: "column",
                                contents: [
                                    {
                                        type: "richText",
                                        content: "<i>Every time you roll a desperate action, mark xp in that action's attribute.</i>",
                                    },
                                    {
                                        type: "richText",
                                        content: "At the end of each session, for each item below, mark 1 xp (in your playbook or an attribute) or 2 xp if that item occurred multiple times.",
                                    },
                                    {
                                        type: "richText",
                                        content: "<i>You addressed a challenge with calculation or conspiracy.</i>",
                                    },
                                    {
                                        type: "richText",
                                        content: "<i>You expressed your beliefs, drives, heritage, or background.</i>",
                                    },
                                    {
                                        type: "richText",
                                        content: "<i>You struggled with issues from your vice or traumas during the session.</i>",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        type: "flex",
                        direction: "row",
                        sizes: [0.15, 0.24],
                        contents: [
                            {
                                type: "flex",
                                direction: "column",
                                sizes: [0.04, 0.15 / 4, 0.15 / 4, 0.15 / 4, 0.15 / 4],
                                contents: [
                                    {
                                        type: "heading",
                                        spacingMode: "padding",
                                        headingSize: "h3",
                                        content: "Teamwork",
                                    },
                                    {
                                        type: "richText",
                                        highlightMode: "highlighted",
                                        spacingMode: "padding",
                                        content: "<b>Assist</b> a teammate",
                                    },
                                    {
                                        type: "richText",
                                        spacingMode: "padding",
                                        highlightMode: "highlighted",
                                        content: "Lead a <b>group action</b>",
                                    },
                                    {
                                        type: "richText",
                                        spacingMode: "padding",
                                        highlightMode: "highlighted",
                                        content: "<b>Protect</b> a teammate",
                                    },
                                    {
                                        type: "richText",
                                        spacingMode: "padding",
                                        highlightMode: "highlighted",
                                        content: "<b>Set up</b> a teammate",
                                    },
                                ],
                            },
                            {
                                type: "flex",
                                direction: "column",
                                sizes: [0.04, 0.15 / 4, 0.15 / 4, 0.15 / 4, 0.15 / 4],
                                contents: [
                                    {
                                        type: "heading",
                                        spacingMode: "padding",
                                        headingSize: "h3",
                                        content: "Planning & Load",
                                    },
                                    {
                                        type: "richText",
                                        spacingMode: "padding",
                                        content: "Choose a plan, provide the <i><b>detail</b></i>.<br>Choose your <i><b>load</b></i> limit for the operation.",
                                    },
                                    {
                                        type: "flex",
                                        direction: "row",
                                        sizes: [0.24 / 2, 0.24 / 2],
                                        contents: [
                                            {
                                                type: "richText",
                                                spacingMode: "padding",
                                                highlightMode: "highlighted",
                                                content: "<b>Assault</b>: <i>Point of attack</i>",
                                            },
                                            {
                                                type: "richText",
                                                spacingMode: "padding",
                                                highlightMode: "highlighted",
                                                content: "<b>Occult</b>: <i>Arcane power</i>",
                                            },
                                        ],
                                    },
                                    {
                                        type: "flex",
                                        direction: "row",
                                        sizes: [0.24 / 2, 0.24 / 2],
                                        contents: [
                                            {
                                                type: "richText",
                                                spacingMode: "padding",
                                                highlightMode: "highlighted",
                                                content: "<b>Deception</b>: <i>Method</i>",
                                            },
                                            {
                                                type: "richText",
                                                spacingMode: "padding",
                                                highlightMode: "highlighted",
                                                content: "<b>Social</b>: <i>Connection</i>",
                                            },
                                        ],
                                    },
                                    {
                                        type: "flex",
                                        direction: "row",
                                        sizes: [0.24 / 2, 0.24 / 2],
                                        contents: [
                                            {
                                                type: "richText",
                                                spacingMode: "padding",
                                                highlightMode: "highlighted",
                                                content: "<b>Stealth</b>: <i>Entry point</i>",
                                            },
                                            {
                                                type: "richText",
                                                spacingMode: "padding",
                                                highlightMode: "highlighted",
                                                content: "<b>Transport</b>: <i>Route</i>",
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                type: "flex",
                spacingMode: "padding no-right",
                direction: "column",
                sizes: [0.075, 0.04, 0.03, 0.08, 0.03, 0.08, 0.03, 0.08, 0.045, 0.04, 0.26, 0.04, 0.155],
                contents: [
                    {
                        type: "flex",
                        direction: "row",
                        sizes: [0.07, 0.125],
                        contents: [
                            {
                                type: "flex",
                                direction: "column",
                                sizes: [0.015, 0.02, 0.03],
                                contents: [
                                    {
                                        type: "heading",
                                        alignmentMode: "right",
                                        spacingMode: "padding no-left no-top no-bottom",
                                        headingSize: "h6",
                                        content: "Stash",
                                    },
                                    {
                                        type: "heading",
                                        alignmentMode: "center",
                                        headingSize: "h6",
                                        content: "Coin",
                                    },
                                    {
                                        type: "iconTrack",
                                        alignmentMode: "center",
                                        icon: "◼",
                                        columns: 2,
                                        length: 4,
                                    },
                                ],
                            },
                            {
                                type: "iconTrack",
                                icon: "◼",
                                columns: 10,
                                length: 40,
                            },
                        ],
                    },
                    {
                        type: "flex",
                        highlightMode: "inverted",
                        direction: "row",
                        sizes: [0.1, 0.09],
                        contents: [
                            {
                                type: "heading",
                                spacingMode: "padding",
                                headingSize: "h3",
                                content: "Playbook",
                            },
                            {
                                type: "iconTrack",
                                icon: "⬤",
                                length: 8,
                            },
                        ],
                    },
                    {
                        type: "flex",
                        highlightMode: "inverted",
                        direction: "row",
                        sizes: [0.12, 0.07],
                        contents: [
                            {
                                type: "heading",
                                highlightMode: "inverted",
                                spacingMode: "padding",
                                headingSize: "h4",
                                content: "Insight",
                            },
                            {
                                type: "iconTrack",
                                icon: "⬤",
                                length: 6,
                            },
                        ],
                    },
                    {
                        type: "flex",
                        direction: "column",
                        sizes: [0.08 / 2, 0.08 / 2, 0.08 / 2, 0.08 / 2],
                        contents: [
                            {
                                type: "series",
                                contents: [
                                    {
                                        type: "iconTrack",
                                        icon: "⬤",
                                        length: 4,
                                    },
                                    {
                                        type: "richText",
                                        content: "Hunt",
                                    },
                                ],
                            },
                            {
                                type: "series",
                                contents: [
                                    {
                                        type: "iconTrack",
                                        icon: "⬤",
                                        length: 4,
                                    },
                                    {
                                        type: "richText",
                                        content: "Study",
                                    },
                                ],
                            },
                            {
                                type: "series",
                                contents: [
                                    {
                                        type: "iconTrack",
                                        icon: "⬤",
                                        length: 4,
                                    },
                                    {
                                        type: "richText",
                                        content: "Survey",
                                    },
                                ],
                            },
                            {
                                type: "series",
                                contents: [
                                    {
                                        type: "iconTrack",
                                        icon: "⬤",
                                        length: 4,
                                    },
                                    {
                                        type: "richText",
                                        content: "Tinker",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        type: "flex",
                        highlightMode: "inverted",
                        direction: "row",
                        sizes: [0.12, 0.07],
                        contents: [
                            {
                                type: "heading",
                                highlightMode: "inverted",
                                spacingMode: "padding",
                                headingSize: "h4",
                                content: "Prowess",
                            },
                            {
                                type: "iconTrack",
                                icon: "⬤",
                                length: 6,
                            },
                        ],
                    },
                    {
                        type: "flex",
                        direction: "column",
                        sizes: [0.08 / 2, 0.08 / 2, 0.08 / 2, 0.08 / 2],
                        contents: [
                            {
                                type: "series",
                                contents: [
                                    {
                                        type: "iconTrack",
                                        icon: "⬤",
                                        length: 4,
                                    },
                                    {
                                        type: "richText",
                                        content: "Finesse",
                                    },
                                ],
                            },
                            {
                                type: "series",
                                contents: [
                                    {
                                        type: "iconTrack",
                                        icon: "⬤",
                                        length: 4,
                                    },
                                    {
                                        type: "richText",
                                        content: "Prowl",
                                    },
                                ],
                            },
                            {
                                type: "series",
                                contents: [
                                    {
                                        type: "iconTrack",
                                        icon: "⬤",
                                        length: 4,
                                    },
                                    {
                                        type: "richText",
                                        content: "Skirmish",
                                    },
                                ],
                            },
                            {
                                type: "series",
                                contents: [
                                    {
                                        type: "iconTrack",
                                        icon: "⬤",
                                        length: 4,
                                    },
                                    {
                                        type: "richText",
                                        content: "Wreck",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        type: "flex",
                        highlightMode: "inverted",
                        direction: "row",
                        sizes: [0.12, 0.07],
                        contents: [
                            {
                                type: "heading",
                                highlightMode: "inverted",
                                spacingMode: "padding",
                                headingSize: "h4",
                                content: "Resolve",
                            },
                            {
                                type: "iconTrack",
                                icon: "⬤",
                                length: 6,
                            },
                        ],
                    },
                    {
                        type: "flex",
                        direction: "column",
                        sizes: [0.08 / 2, 0.08 / 2, 0.08 / 2, 0.08 / 2],
                        contents: [
                            {
                                type: "series",
                                contents: [
                                    {
                                        type: "iconTrack",
                                        icon: "⬤",
                                        length: 4,
                                    },
                                    {
                                        type: "richText",
                                        content: "Attune",
                                    },
                                ],
                            },
                            {
                                type: "series",
                                contents: [
                                    {
                                        type: "iconTrack",
                                        icon: "⬤",
                                        length: 4,
                                    },
                                    {
                                        type: "richText",
                                        content: "Command",
                                    },
                                ],
                            },
                            {
                                type: "series",
                                contents: [
                                    {
                                        type: "iconTrack",
                                        icon: "⬤",
                                        length: 4,
                                    },
                                    {
                                        type: "richText",
                                        content: "Consort",
                                    },
                                ],
                            },
                            {
                                type: "series",
                                contents: [
                                    {
                                        type: "iconTrack",
                                        icon: "⬤",
                                        length: 4,
                                    },
                                    {
                                        type: "richText",
                                        content: "Sway",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        type: "richText",
                        highlightMode: "highlighted",
                        spacingMode: "padding",
                        alignmentMode: "center",
                        content: "<b>Push Yourself</b> (take 2 stress)<br>-OR- accept a <b>Devil's Bargain</b>.",
                    },
                    {
                        type: "flex",
                        highlightMode: "inverted",
                        direction: "row",
                        sizes: [0.07, 0.12],
                        contents: [
                            {
                                type: "heading",
                                highlightMode: "inverted",
                                spacingMode: "padding",
                                headingSize: "h3",
                                content: "Load",
                            },
                            {
                                type: "series",
                                contents: [
                                    {
                                        type: "icon",
                                        icon: "◆",
                                    },
                                    {
                                        type: "richText",
                                        content: "<b>3</b> <i>light</i>",
                                    },
                                    {
                                        type: "icon",
                                        icon: "◆",
                                    },
                                    {
                                        type: "richText",
                                        content: "<b>5</b> <i>normal</i>",
                                    },
                                    {
                                        type: "icon",
                                        icon: "◆",
                                    },
                                    {
                                        type: "richText",
                                        content: "<b>6</b> <i>heavy</i>",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        type: "series",
                        spacingMode: "padding",
                        direction: "column",
                        contents: [
                            {
                                type: "series",
                                contents: [
                                    {
                                        type: "icon",
                                        conjoined: true,
                                        icon: "◼",
                                    },
                                    {
                                        type: "richText",
                                        spacingMode: "padding",
                                        content: "A Blade or Two",
                                    },
                                ],
                            },
                            {
                                type: "series",
                                contents: [
                                    {
                                        type: "icon",
                                        conjoined: true,
                                        icon: "◼",
                                    },
                                    {
                                        type: "richText",
                                        spacingMode: "padding",
                                        content: "Throwing Knives",
                                    },
                                ],
                            },
                            {
                                type: "series",
                                contents: [
                                    {
                                        type: "icon",
                                        conjoined: true,
                                        icon: "◼",
                                    },
                                    {
                                        type: "richText",
                                        spacingMode: "padding",
                                        content: "A Pistol",
                                    },
                                    {
                                        type: "icon",
                                        conjoined: true,
                                        icon: "◼",
                                    },
                                    {
                                        type: "richText",
                                        spacingMode: "padding",
                                        content: "A 2<sup>nd</sup> Pistol",
                                    },
                                ],
                            },
                            {
                                type: "series",
                                contents: [
                                    {
                                        type: "icon",
                                        conjoined: true,
                                        icon: "◼◼",
                                    },
                                    {
                                        type: "richText",
                                        spacingMode: "padding",
                                        content: "A Large Weapon",
                                    },
                                ],
                            },
                            {
                                type: "series",
                                contents: [
                                    {
                                        type: "icon",
                                        conjoined: true,
                                        icon: "◼",
                                    },
                                    {
                                        type: "richText",
                                        spacingMode: "padding",
                                        content: "An Unusual Weapon",
                                    },
                                ],
                            },
                            {
                                type: "series",
                                contents: [
                                    {
                                        type: "icon",
                                        conjoined: true,
                                        icon: "◼◼",
                                    },
                                    {
                                        type: "richText",
                                        spacingMode: "padding",
                                        content: "Armor",
                                    },
                                    {
                                        type: "icon",
                                        conjoined: true,
                                        icon: "◼◼◼",
                                    },
                                    {
                                        type: "richText",
                                        spacingMode: "padding",
                                        content: "+Heavy",
                                    },
                                ],
                            },
                            {
                                type: "series",
                                contents: [
                                    {
                                        type: "icon",
                                        conjoined: true,
                                        icon: "◼",
                                    },
                                    {
                                        type: "richText",
                                        spacingMode: "padding",
                                        content: "Burglary Gear",
                                    },
                                ],
                            },
                            {
                                type: "series",
                                contents: [
                                    {
                                        type: "icon",
                                        conjoined: true,
                                        icon: "◼◼",
                                    },
                                    {
                                        type: "richText",
                                        spacingMode: "padding",
                                        content: "Climbing Gear",
                                    },
                                ],
                            },
                            {
                                type: "series",
                                contents: [
                                    {
                                        type: "icon",
                                        conjoined: true,
                                        icon: "◼",
                                    },
                                    {
                                        type: "richText",
                                        spacingMode: "padding",
                                        content: "Arcane Implements",
                                    },
                                ],
                            },
                            {
                                type: "series",
                                contents: [
                                    {
                                        type: "icon",
                                        conjoined: true,
                                        icon: "◼",
                                    },
                                    {
                                        type: "richText",
                                        spacingMode: "padding",
                                        content: "Documents",
                                    },
                                ],
                            },
                            {
                                type: "series",
                                contents: [
                                    {
                                        type: "icon",
                                        conjoined: true,
                                        icon: "◼",
                                    },
                                    {
                                        type: "richText",
                                        spacingMode: "padding",
                                        content: "Subterfuge Supplies",
                                    },
                                ],
                            },
                            {
                                type: "series",
                                contents: [
                                    {
                                        type: "icon",
                                        conjoined: true,
                                        icon: "◼◼",
                                    },
                                    {
                                        type: "richText",
                                        spacingMode: "padding",
                                        content: "Demolition Tools",
                                    },
                                ],
                            },
                            {
                                type: "series",
                                contents: [
                                    {
                                        type: "icon",
                                        conjoined: true,
                                        icon: "◼",
                                    },
                                    {
                                        type: "richText",
                                        spacingMode: "padding",
                                        content: "Tinkering Tools",
                                    },
                                ],
                            },
                            {
                                type: "series",
                                contents: [
                                    {
                                        type: "icon",
                                        conjoined: true,
                                        icon: "◼",
                                    },
                                    {
                                        type: "richText",
                                        spacingMode: "padding",
                                        content: "Lantern",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        type: "heading",
                        spacingMode: "padding",
                        headingSize: "h3",
                        content: "Gather Information",
                    },
                    {
                        type: "series",
                        spacingMode: "padding",
                        direction: "column",
                        contents: [
                            {
                                type: "richText",
                                content: "<i>What do they want most?</i>",
                            },
                            {
                                type: "richText",
                                content: "<i>What should I look out for?</i>",
                            },
                            {
                                type: "richText",
                                content: "<i>Where's the leverage here?</i>",
                            },
                            {
                                type: "richText",
                                content: "<i>How can I discover [X]?</i>",
                            },
                            {
                                type: "richText",
                                content: "<i>What do they intend to do?</i>",
                            },
                            {
                                type: "richText",
                                content: "<i>How can I get them to [X]?</i>",
                            },
                            {
                                type: "richText",
                                content: "<i>What's really going on here?</i>",
                            },
                        ],
                    },
                ],
            },
        ],
    },
};

let sheetTemplateData = testSheet;
let currentCharacterSheetName = "Test Sheet";

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
            root.style.cssText = `aspect-ratio: 1.4142; width: 90%; margin: auto; border-radius: 10px; --global-width: 1; --global-height: 1;`;
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
                    return icon.getAttribute("data-selected");
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
                }
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
                }
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
                }
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
                }
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
                }
            );
        },
    },
};

let miscIds = 0;
const buildCharacterSheet = (rootTemplate, parent) => {
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
    if (existingSheet) {
        const newBuildTarget = document.createElement("div");
        newBuildTarget.id = "character-sheet-builder-target";
        existingSheet.replaceWith(newBuildTarget);
    }
    const target = document.querySelector("#character-sheet-builder-target");
    const newSheet = buildCharacterSheet(testSheet, target);
    target.replaceWith(newSheet);
    characterSheet = document.querySelector(".character-sheet");
    characterSheet.style.setProperty("--highlight-mode", "default");
};

const applicationStartup = () => {
    rebuildSheet();
    characterSheet.classList.add("loading");

    document.fonts.ready.then(() => {
        characterSheet.classList.remove("loading");
        characterSheet.classList.add("loaded");
    });

    characterSheet.style.setProperty("--shade-mode", MODE_LIGHT);

    setPaletteValues(characterSheet);
    styleText();
    renderCanvases();
};

const saveAllData = () => {
    let localStorageData = {};
    Object.keys(characterSheetData).forEach((key) => {
        characterSheetData[key].value = characterSheetData[key].saveFunc(characterSheetData[key].element);
        localStorageData[key] = characterSheetData[key].value;
    });
    localStorage.setItem(`sheetStorage::${currentCharacterSheetName}`, JSON.stringify(localStorageData));
};

const loadAllData = () => {
    const localStorageData = JSON.parse(localStorage.getItem(`sheetStorage::${currentCharacterSheetName}`));
    Object.keys(localStorageData).forEach((key) => {
        characterSheetData[key].value = localStorageData[key];
        characterSheetData[key].loadFunc(characterSheetData[key].element, characterSheetData[key].value);
    });
};

const saveTemplate = () => {
    localStorage.setItem(`templateStorage::${sheetTemplateData.name}`, JSON.stringify(sheetTemplateData));
};

const loadTemplate = () => {
    sheetTemplateData = JSON.parse(localStorage.getItem(`templateStorage::${sheetTemplateData.name}`));
    styleText();
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

const swapShadeModeButton = document.querySelector("#button-swap-shade-mode");
swapShadeModeButton.addEventListener("click", (e) => {
    if (characterSheet.style.getPropertyValue("--shade-mode") == MODE_LIGHT) {
        characterSheet.style.setProperty("--shade-mode", MODE_DARK);
    } else {
        characterSheet.style.setProperty("--shade-mode", MODE_LIGHT);
    }
    setPaletteValues(characterSheet);
    renderCanvases();
});

const saveButton = document.querySelector("#save-sheet-button");
saveButton.addEventListener("click", (e) => {
    saveAllData();
});

const loadButton = document.querySelector("#load-sheet-button");
loadButton.addEventListener("click", (e) => {
    loadAllData();
});

const saveTemplateButton = document.querySelector("#save-template-button");
saveTemplateButton.addEventListener("click", (e) => {
    saveTemplate();
});

const loadTemplateButton = document.querySelector("#load-template-button");
loadTemplateButton.addEventListener("click", (e) => {
    loadTemplate();
});

applicationStartup();
