const imageWidth = 360;
const imageHeight = 360;
const sharingImage = document.getElementById("sharingImage");
sharingImage.style.width = imageWidth;
sharingImage.style.height = imageHeight;

// base64 encoding solution found here:
// https://stackoverflow.com/questions/30106476/using-javascripts-atob-to-decode-base64-doesnt-properly-decode-utf-8-strings
function b64EncodeUnicode(str) {
    return btoa(
        encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function toSolidBytes(match, p1) {
            return String.fromCharCode("0x" + p1);
        })
    );
}

function b64DecodeUnicode(str) {
    return decodeURIComponent(
        atob(str)
            .split("")
            .map(function (c) {
                return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join("")
    );
}

const retrieveData = () => {
    fetch(sharingImage.src).then(async (response) => {
        const arrayBuffer = await response.arrayBuffer();
        const bufferLength = arrayBuffer.byteLength;
        const uintArray = new Uint8Array(arrayBuffer, 0, bufferLength);
        let currentByteOffset = 8;
        let chunkNum = 1;
        const chunkArr = [];
        while (currentByteOffset < bufferLength - 1) {
            const chunkLength =
                uintArray[currentByteOffset] * Math.pow(2, 24) +
                uintArray[currentByteOffset + 1] * Math.pow(2, 16) +
                uintArray[currentByteOffset + 2] * Math.pow(2, 8) +
                uintArray[currentByteOffset + 3];
            const chunkType =
                String.fromCharCode(uintArray[currentByteOffset + 4]) +
                String.fromCharCode(uintArray[currentByteOffset + 5]) +
                String.fromCharCode(uintArray[currentByteOffset + 6]) +
                String.fromCharCode(uintArray[currentByteOffset + 7]);
            console.log(`Chunk #${chunkNum}, type: ${chunkType}, length: ${chunkLength}`);
            if (chunkType == "tEXt") {
                const decoder = new TextDecoder();
                const newArray = new Uint8Array(uintArray.slice(currentByteOffset + 8, currentByteOffset + 8 + chunkLength));
                console.log(JSON.parse(decoder.decode(newArray)));
            }
            chunkArr.push({ type: chunkType, offset: currentByteOffset });
            currentByteOffset += chunkLength + 12;
            chunkNum++;
        }
    });
};

fetch("https://jinan-dangor.github.io/Dovecote-Character-Sheet-Builder/assets/dove%20icon.png").then(async (response) => {
    const encoder = new TextEncoder();
    const arrayBuffer = await response.arrayBuffer();
    const bufferLength = arrayBuffer.byteLength;
    const uintArray = new Uint8Array(arrayBuffer, 0, bufferLength);
    const arrayToInsert = encoder.encode(
        JSON.stringify({
            type: "root",
            name: "Blades in the Dark - Cutter",
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
                                        id: "crew",
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
                                        id: "character-name",
                                        spacingMode: "padding",
                                        label: "Name",
                                    },
                                    {
                                        type: "textEntryLine",
                                        id: "alias",
                                        spacingMode: "padding",
                                        label: "Alias",
                                    },
                                ],
                            },
                            {
                                type: "textEntryLine",
                                id: "look",
                                spacingMode: "padding",
                                label: "Look",
                            },
                            {
                                type: "flex",
                                direction: "row",
                                sizes: [0.13333333333333333, 0.13333333333333333, 0.13333333333333333],
                                contents: [
                                    {
                                        type: "textSelectDropdown",
                                        id: "heritage",
                                        spacingMode: "padding",
                                        label: "Heritage",
                                        options: ["Akoros", "The Dagger Isles", "Truvia", "Severos", "Skovlan", "Tycheros"],
                                    },
                                    {
                                        type: "textSelectDropdown",
                                        id: "background",
                                        spacingMode: "padding",
                                        label: "Background",
                                        options: ["Academic", "Labour", "Law", "Trade", "Military", "Noble", "Underworld"],
                                    },
                                    {
                                        type: "textSelectDropdown",
                                        id: "vice",
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
                                                id: "stress",
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
                                                sizes: [0.015, 0.015],
                                                contents: [
                                                    {
                                                        type: "textSelectDropdown",
                                                        id: "trauma-1",
                                                        spacingMode: "padding",
                                                        options: ["Cold", "Haunted", "Obsessed", "Paranoid", "Reckless", "Soft", "Unstable", "Vicious"],
                                                    },
                                                    {
                                                        type: "textSelectDropdown",
                                                        id: "trauma-2",
                                                        spacingMode: "padding",
                                                        options: ["Cold", "Haunted", "Obsessed", "Paranoid", "Reckless", "Soft", "Unstable", "Vicious"],
                                                    },
                                                ],
                                            },
                                            {
                                                type: "flex",
                                                direction: "column",
                                                sizes: [0.015, 0.015],
                                                contents: [
                                                    {
                                                        type: "textSelectDropdown",
                                                        id: "trauma-3",
                                                        spacingMode: "padding",
                                                        options: ["Cold", "Haunted", "Obsessed", "Paranoid", "Reckless", "Soft", "Unstable", "Vicious"],
                                                    },
                                                    {
                                                        type: "textSelectDropdown",
                                                        id: "trauma-4",
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
                                                        id: "harm-lvl3",
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
                                                        id: "harm-lvl2-1",
                                                        spacingMode: "padding",
                                                    },
                                                    {
                                                        type: "textEntryParagraph",
                                                        id: "harm-lvl2-2",
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
                                                        id: "harm-lvl1-1",
                                                        spacingMode: "padding",
                                                    },
                                                    {
                                                        type: "textEntryParagraph",
                                                        id: "harm-lvl1-2",
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
                                                id: "healing",
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
                                                        id: "armor-use",
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
                                                        id: "heavy-armor-use",
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
                                                        id: "special-armor-use",
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
                                id: "notes",
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
                                                content: "Cutter",
                                            },
                                            {
                                                type: "heading",
                                                alignmentMode: "center",
                                                headingSize: "h4",
                                                content: "A Dangerous & Intimidating Fighter",
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
                                                        id: "special-ability-1",
                                                        icon: "⬤",
                                                    },
                                                    {
                                                        type: "richText",
                                                        content:
                                                            "<b>Battleborn</b>: You may expend your <b>special armor</b> to reduce harm from an attack in combat or to <b>push yourself</b> during a fight.",
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
                                                        id: "special-ability-2",
                                                        icon: "⬤",
                                                    },
                                                    {
                                                        type: "richText",
                                                        content:
                                                            "<b>Bodyguard</b>: When you <b>protect</b> a teammate, take <b>+1d</b> to your resistance roll. When you <b>gather info</b> to anticipate possible threats in the current situation, you get <b>+1 effect</b>.",
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
                                                        id: "special-ability-3",
                                                        icon: "⬤",
                                                    },
                                                    {
                                                        type: "richText",
                                                        content:
                                                            "<b>Ghost Fighter</b>: You may imbue your hands, melee weapons, or tools with spirit energy. You gain <b>potency</b> in combat vs. the supernatural. You may grapple with spirits to restrain and capture them.",
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
                                                        id: "special-ability-4",
                                                        icon: "⬤",
                                                    },
                                                    {
                                                        type: "richText",
                                                        content:
                                                            "<b>Leader</b>: When you <b>Command</b> a <b>cohort</b> in combat, they continue to fight when they would otherwise <b>break</b> (they're not taken out when they suffer level 3 harm). They gain <b>+1 effect</b> and <b>1 armor</b>.",
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
                                                        id: "special-ability-5",
                                                        icon: "⬤",
                                                    },
                                                    {
                                                        type: "richText",
                                                        content: "<b>Mule</b>:  Your load limits are higher. Light: 5. Normal: 7. Heavy: 8",
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
                                                        id: "special-ability-6",
                                                        icon: "⬤",
                                                    },
                                                    {
                                                        type: "richText",
                                                        content:
                                                            "<b>Not To Be Trifled With</b>: You can <b>push yourself</b> to do one of the following: <i>perform a feat of physical force that verges on the superhuman—engage a small gang on equal footing in close combat</i>.",
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
                                                        id: "special-ability-7",
                                                        icon: "⬤",
                                                    },
                                                    {
                                                        type: "richText",
                                                        content:
                                                            "<b>Savage</b>: When you unleash physical violence, it's especially frightening. When you <b>Command</b> a frightened target, take <b>+1d</b>.",
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
                                                        id: "special-ability-8",
                                                        icon: "⬤",
                                                    },
                                                    {
                                                        type: "richText",
                                                        content:
                                                            "<b>Vigorous</b>: You recover from harm faster. Permanently fill in one of your healing clock segments. Take <b>+1d</b> to healing treatment rolls.",
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
                                                        id: "special-ability-veteran",
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
                                                        content: "Dangerous Friends",
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
                                                                        id: "friend-close-1",
                                                                        icon: "▲",
                                                                    },
                                                                    {
                                                                        type: "icon",
                                                                        id: "friend-rival-1",
                                                                        icon: "▼",
                                                                    },
                                                                    {
                                                                        type: "richText",
                                                                        spacingMode: "padding",
                                                                        content: "Marlane, a pugilist",
                                                                    },
                                                                ],
                                                            },
                                                            {
                                                                type: "series",
                                                                contents: [
                                                                    {
                                                                        type: "icon",
                                                                        id: "friend-close-2",
                                                                        icon: "▲",
                                                                    },
                                                                    {
                                                                        type: "icon",
                                                                        id: "friend-rival-2",
                                                                        icon: "▼",
                                                                    },
                                                                    {
                                                                        type: "richText",
                                                                        spacingMode: "padding",
                                                                        content: "Chael, a vicious thug",
                                                                    },
                                                                ],
                                                            },
                                                            {
                                                                type: "series",
                                                                contents: [
                                                                    {
                                                                        type: "icon",
                                                                        id: "friend-close-3",
                                                                        icon: "▲",
                                                                    },
                                                                    {
                                                                        type: "icon",
                                                                        id: "friend-rival-3",
                                                                        icon: "▼",
                                                                    },
                                                                    {
                                                                        type: "richText",
                                                                        spacingMode: "padding",
                                                                        content: "Mercy, a cold killer",
                                                                    },
                                                                ],
                                                            },
                                                            {
                                                                type: "series",
                                                                contents: [
                                                                    {
                                                                        type: "icon",
                                                                        id: "friend-close-4",
                                                                        icon: "▲",
                                                                    },
                                                                    {
                                                                        type: "icon",
                                                                        id: "friend-rival-4",
                                                                        icon: "▼",
                                                                    },
                                                                    {
                                                                        type: "richText",
                                                                        spacingMode: "padding",
                                                                        content: "Grace, an extortionist",
                                                                    },
                                                                ],
                                                            },
                                                            {
                                                                type: "series",
                                                                contents: [
                                                                    {
                                                                        type: "icon",
                                                                        id: "friend-close-5",
                                                                        icon: "▲",
                                                                    },
                                                                    {
                                                                        type: "icon",
                                                                        id: "friend-rival-5",
                                                                        icon: "▼",
                                                                    },
                                                                    {
                                                                        type: "richText",
                                                                        spacingMode: "padding",
                                                                        content: "Sawtooth, a physicker",
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
                                                                        id: "playbook-items-1",
                                                                        icon: "◼",
                                                                    },
                                                                    {
                                                                        type: "richText",
                                                                        spacingMode: "padding",
                                                                        content: "Fine hand weapon",
                                                                    },
                                                                ],
                                                            },
                                                            {
                                                                type: "series",
                                                                contents: [
                                                                    {
                                                                        type: "icon",
                                                                        id: "playbook-items-2",
                                                                        conjoined: true,
                                                                        icon: "◼◼",
                                                                    },
                                                                    {
                                                                        type: "richText",
                                                                        spacingMode: "padding",
                                                                        content: "Fine heavy weapon",
                                                                    },
                                                                ],
                                                            },
                                                            {
                                                                type: "series",
                                                                contents: [
                                                                    {
                                                                        type: "icon",
                                                                        id: "playbook-items-3",
                                                                        icon: "◼",
                                                                    },
                                                                    {
                                                                        type: "richText",
                                                                        spacingMode: "padding",
                                                                        content: "Scary weapon or tool",
                                                                    },
                                                                ],
                                                            },
                                                            {
                                                                type: "series",
                                                                contents: [
                                                                    {
                                                                        type: "icon",
                                                                        id: "playbook-items-4",
                                                                        icon: "◼",
                                                                    },
                                                                    {
                                                                        type: "richText",
                                                                        spacingMode: "padding",
                                                                        content: "<i>Manacles & chain</i>",
                                                                    },
                                                                ],
                                                            },
                                                            {
                                                                type: "series",
                                                                contents: [
                                                                    {
                                                                        type: "icon",
                                                                        id: "playbook-items-5",
                                                                        icon: "◼",
                                                                    },
                                                                    {
                                                                        type: "richText",
                                                                        spacingMode: "padding",
                                                                        content: "<i>Rage essence vial</i>",
                                                                    },
                                                                ],
                                                            },
                                                            {
                                                                type: "series",
                                                                contents: [
                                                                    {
                                                                        type: "icon",
                                                                        id: "playbook-items-6",
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
                                                content: "<i>You addressed a challenge with violence or coercion.</i>",
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
                                        sizes: [0.04, 0.0375, 0.0375, 0.0375, 0.0375],
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
                                        sizes: [0.04, 0.0375, 0.0375, 0.0375, 0.0375],
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
                                                sizes: [0.12, 0.12],
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
                                                sizes: [0.12, 0.12],
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
                                                sizes: [0.12, 0.12],
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
                                                id: "coin",
                                                alignmentMode: "center",
                                                icon: "◼",
                                                columns: 2,
                                                length: 4,
                                            },
                                        ],
                                    },
                                    {
                                        type: "iconTrack",
                                        id: "stash",
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
                                        id: "playbook-xp",
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
                                        id: "insight-xp",
                                        icon: "⬤",
                                        length: 6,
                                    },
                                ],
                            },
                            {
                                type: "flex",
                                direction: "column",
                                sizes: [0.04, 0.04, 0.04, 0.04],
                                contents: [
                                    {
                                        type: "series",
                                        contents: [
                                            {
                                                type: "iconTrack",
                                                id: "hunt-action",
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
                                                id: "study-action",
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
                                                id: "survey-action",
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
                                                id: "tinker-action",
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
                                        id: "prowess-xp",
                                        icon: "⬤",
                                        length: 6,
                                    },
                                ],
                            },
                            {
                                type: "flex",
                                direction: "column",
                                sizes: [0.04, 0.04, 0.04, 0.04],
                                contents: [
                                    {
                                        type: "series",
                                        contents: [
                                            {
                                                type: "iconTrack",
                                                id: "finesse-action",
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
                                                id: "prowl-action",
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
                                                id: "skirmish-action",
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
                                                id: "wreck-action",
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
                                        id: "resolve-xp",
                                        icon: "⬤",
                                        length: 6,
                                    },
                                ],
                            },
                            {
                                type: "flex",
                                direction: "column",
                                sizes: [0.04, 0.04, 0.04, 0.04],
                                contents: [
                                    {
                                        type: "series",
                                        contents: [
                                            {
                                                type: "iconTrack",
                                                id: "attune-action",
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
                                                id: "command-action",
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
                                                id: "consort-action",
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
                                                id: "sway-action",
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
                                                id: "load-light",
                                                icon: "◆",
                                            },
                                            {
                                                type: "richText",
                                                content: "<b>3</b> <i>light</i>",
                                            },
                                            {
                                                type: "icon",
                                                id: "load-normal",
                                                icon: "◆",
                                            },
                                            {
                                                type: "richText",
                                                content: "<b>5</b> <i>normal</i>",
                                            },
                                            {
                                                type: "icon",
                                                id: "load-heavy",
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
                                                id: "standard-equipment-1",
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
                                                id: "standard-equipment-2",
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
                                                id: "standard-equipment-3",
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
                                                id: "standard-equipment-4",
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
                                                id: "standard-equipment-5",
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
                                                id: "standard-equipment-6",
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
                                                id: "standard-equipment-7",
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
                                                id: "standard-equipment-8",
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
                                                id: "standard-equipment-9",
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
                                                id: "standard-equipment-10",
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
                                                id: "standard-equipment-11",
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
                                                id: "standard-equipment-12",
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
                                                id: "standard-equipment-13",
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
                                                id: "standard-equipment-14",
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
                                                id: "standard-equipment-15",
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
                                                id: "standard-equipment-16",
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
        })
    );
    let chunkHeaderLength = new Uint8Array(new BigUint64Array([BigInt(arrayToInsert.length)]).buffer);
    chunkHeaderLength.reverse();
    chunkHeaderLength = chunkHeaderLength.slice(4);
    const newChunkType = "tEXt";
    const chunkHeaderType = new Uint8Array([newChunkType.charCodeAt(0), newChunkType.charCodeAt(1), newChunkType.charCodeAt(2), newChunkType.charCodeAt(0)]);
    const chunkFooter = new Uint8Array([28, 41, 28, 163]);
    const newUintArray = new Uint8Array(bufferLength + arrayToInsert.byteLength + 12);
    let currentByteOffset = 8;
    let chunkNum = 1;
    const chunkArr = [];
    while (currentByteOffset < bufferLength - 1) {
        const chunkLength =
            uintArray[currentByteOffset] * Math.pow(2, 24) + uintArray[currentByteOffset + 1] * Math.pow(2, 16) + uintArray[currentByteOffset + 2] * Math.pow(2, 8) + uintArray[currentByteOffset + 3];
        const chunkType =
            String.fromCharCode(uintArray[currentByteOffset + 4]) +
            String.fromCharCode(uintArray[currentByteOffset + 5]) +
            String.fromCharCode(uintArray[currentByteOffset + 6]) +
            String.fromCharCode(uintArray[currentByteOffset + 7]);
        console.log(`Chunk #${chunkNum}, type: ${chunkType}, length: ${chunkLength}`);
        chunkArr.push({ type: chunkType, offset: currentByteOffset });
        currentByteOffset += chunkLength + 12;
        chunkNum++;
    }
    const finalChunkOffset = chunkArr[chunkArr.length - 1].offset;
    newUintArray.set(uintArray.slice(0, finalChunkOffset));
    newUintArray.set(chunkHeaderLength, finalChunkOffset);
    newUintArray.set(chunkHeaderType, finalChunkOffset + 4);
    newUintArray.set(arrayToInsert, finalChunkOffset + 8);
    newUintArray.set(chunkFooter, finalChunkOffset + 8 + arrayToInsert.byteLength);
    newUintArray.set(uintArray.slice(finalChunkOffset), finalChunkOffset + 12 + arrayToInsert.byteLength);
    console.log("arrayBuffer", uintArray);
    sharingImage.src = URL.createObjectURL(new Blob([newUintArray], { type: "image/png" }));
    retrieveData();
});
