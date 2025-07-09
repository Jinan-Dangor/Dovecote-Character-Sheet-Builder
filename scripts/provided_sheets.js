const providedTemplates = {
    "Blades in the Dark - Cutter": {
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
    },
    "Blades in the Dark - Hound": {
        type: "root",
        name: "Blades in the Dark - Hound",
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
                                            content: "Hound",
                                        },
                                        {
                                            type: "heading",
                                            alignmentMode: "center",
                                            headingSize: "h4",
                                            content: "A Deadly Sharpshooter And Tracker",
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
                                                        "<b>Sharpshooter</b>: You can <b>push yourself</b> to do one of the following: <i>make a ranged attack at extreme distance beyond what’s normal for the weapon—unleash a barrage of rapid fire to suppress the enemy.</i>",
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
                                                        "<b>Focused</b>: You may expend your <b>special armor</b> to resist a consequence of surprise or mental harm (fear, confusion, losing track of someone) or to <b>push yourself</b> for ranged combat or tracking.",
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
                                                        "<b>Ghost Hunter</b>: Your hunting pet is imbued with spirit energy. It gains <b>potency</b> when tracking or fighting the supernatural, and gains an arcane ability: <i>ghost-form, mind-link, or arrow-swift</i>. Take this ability again to choose an additional arcane ability for your pet.",
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
                                                        "<b>Scout</b>: When you <b>gather info</b> to locate a target, you get <b>+1 effect</b>. When you hide in a prepared position or use camouflage, you get <b>+1d</b> to rolls to avoid detection.",
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
                                                    content:
                                                        "<b>Survivor</b>: From hard won experience or occult ritual, you are immune to the poisonous miasma of the deathlands and are able to subsist on the strange flora and fauna there. You get <b>+1 stress box</b>.",
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
                                                    content: "<b>Tough As Nails</b>: Penalties from harm are one level less severe (though level 4 harm is still fatal).",
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
                                                        "<b>Vengeful</b>: You gain an additional <b>xp trigger</b>: <i>You got payback against someone who harmed you or someone you care about</i>. If your crew helped you get payback, also mark crew xp.",
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
                                                    content: "Deadly Friends",
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
                                                                    content: "Steiner, an assassin",
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
                                                                    content: "Celene, a sentinel",
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
                                                                    content: "Melvir, a physicker",
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
                                                                    content: "Veleris, a spy",
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
                                                                    content: "Casta, a bounty hunter",
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
                                                                    content: "Fine pair of pistols",
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
                                                                    content: "Fine long rifle",
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
                                                                    content: "Electroplasmic ammunition",
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
                                                                    content: "<i>A trained hunting pet</i>",
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
                                                                    content: "Spyglass",
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
                                            content: "<i>You addressed a challenge with tracking or violence.</i>",
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
    },
    "Blades in the Dark - Leech": {
        type: "root",
        name: "Blades in the Dark - Leech",
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
                            type: "flex",
                            direction: "row",
                            sizes: [0.28, 0.12],
                            contents: [
                                {
                                    type: "textEntryParagraph",
                                    id: "notes",
                                    spacingMode: "padding",
                                    label: "Notes",
                                },
                                {
                                    type: "series",
                                    spacingMode: "padding",
                                    direction: "column",
                                    contents: [
                                        {
                                            type: "richText",
                                            content: "<b>Alchemicals</b>",
                                        },
                                        {
                                            type: "series",
                                            contents: [
                                                {
                                                    type: "richText",
                                                    spacingMode: "padding no-left",
                                                    content: "Bandolier",
                                                },
                                                {
                                                    type: "iconTrack",
                                                    id: "leech-bandolier-1",
                                                    icon: "◼",
                                                    length: 3,
                                                },
                                            ],
                                        },
                                        {
                                            type: "series",
                                            contents: [
                                                {
                                                    type: "richText",
                                                    spacingMode: "padding no-left",
                                                    content: "Bandolier",
                                                },
                                                {
                                                    type: "iconTrack",
                                                    id: "leech-bandolier-2",
                                                    icon: "◼",
                                                    length: 3,
                                                },
                                            ],
                                        },
                                        {
                                            type: "richText",
                                            content: "<i>When you use a bandolier slot, choose an alchemical:</i>",
                                        },
                                        {
                                            type: "richText",
                                            content: "◆ Alcahest",
                                        },
                                        {
                                            type: "richText",
                                            content: "◆ Binding Oil",
                                        },
                                        {
                                            type: "richText",
                                            content: "◆ Drift Oil",
                                        },
                                        {
                                            type: "richText",
                                            content: "◆ Drown Powder",
                                        },
                                        {
                                            type: "richText",
                                            content: "◆ Eyeblind Poison",
                                        },
                                        {
                                            type: "richText",
                                            content: "◆ Fire Oil",
                                        },
                                        {
                                            type: "richText",
                                            content: "◆ Grenade",
                                        },
                                        {
                                            type: "richText",
                                            content: "◆ Quicksilver",
                                        },
                                        {
                                            type: "richText",
                                            content: "◆ Skullfire Poison",
                                        },
                                        {
                                            type: "richText",
                                            content: "◆ Smoke Bomb",
                                        },
                                        {
                                            type: "richText",
                                            content: "◆ Spark (drug)",
                                        },
                                        {
                                            type: "richText",
                                            content: "◆ Standstill Poison",
                                        },
                                        {
                                            type: "richText",
                                            content: "◆ Trance Powder",
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
                                            content: "Leech",
                                        },
                                        {
                                            type: "heading",
                                            alignmentMode: "center",
                                            headingSize: "h4",
                                            content: "A Saboteur And Technician",
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
                                                        "<b>Alchemist</b>: When you <b>invent</b> or <b>craft</b> a creation with <i>alchemical</i> features, take <b>+1 result level</b> to your roll. You begin with one special formula already known.",
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
                                                        "<b>Analyst</b>: During <b>downtime</b>, you get <b>two ticks</b> to distribute among any long term project clocks that involve investigation or learning a new formula or design plan.",
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
                                                        "<b>Artificer</b>: When you <b>invent</b> or <b>craft</b> a creation with <i>spark-craft</i> features, take <b>+1 result level</b> to your roll. You begin with one special design already known.",
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
                                                        "<b>Fortitude</b>: You may expend your <b>special armor</b> to resist a consequence of fatigue, weakness, or chemical effects, or to <b>push yourself</b> when working with technical skill or handling alchemicals.",
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
                                                    content:
                                                        "<b>Ghost Ward</b>:  You know how to <b>Wreck</b> an area with arcane substances and methods so it is either anathema or enticing to spirits (your choice).",
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
                                                        "<b>Physicker</b>: You can <b>Tinker</b> with bones, blood, and bodily humours to treat wounds or stabilize the dying. You may <b>Study</b> a malady or corpse. Everyone in your crew gets <b>+1d</b> to their healing treatment rolls.",
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
                                                    content: "<b>Saboteur</b>: When you <b>Wreck</b>, the work is much quieter than it should be and the damage is hidden from casual inspection.",
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
                                                        "<b>Venomous</b>: Choose a drug or poison (from your bandolier stock) to which you have become immune. You can <b>push yourself</b> to secrete it through your skin or saliva or exhale it as a vapor.",
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
                                                    content: "Clever Friends",
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
                                                                    content: "Stazia, an apothecary",
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
                                                                    content: "Veldren, a psychonaut",
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
                                                                    content: "Eckerd, a corpse thief",
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
                                                                    content: "Jul, a blood dealer",
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
                                                                    content: "Malista, a priestess",
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
                                                                    content: "Fine tinkering tools",
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
                                                                    content: "Fine wrecking tools",
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
                                                                    content: "<i>Blowgun & darts, syringes</i>",
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
                                                                    content: "Bandolier (3 uses)",
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
                                                                    content: "Bandolier (3 uses)",
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
                                                                    type: "icon",
                                                                    id: "playbook-items-6-leech-extra-1",
                                                                    icon: "◼",
                                                                },
                                                                {
                                                                    type: "icon",
                                                                    id: "playbook-items-6-leech-extra-2",
                                                                    icon: "◼",
                                                                },
                                                                {
                                                                    type: "richText",
                                                                    spacingMode: "padding",
                                                                    content: "Gadgets",
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
                                            content: "<i>You addressed a challenge with technical skill or mayhem.</i>",
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
    },
    "Blades in the Dark - Lurk": {
        type: "root",
        name: "Blades in the Dark - Lurk",
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
                                            content: "Lurk",
                                        },
                                        {
                                            type: "heading",
                                            alignmentMode: "center",
                                            headingSize: "h4",
                                            content: "A Stealthy Infiltrator And Burglar",
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
                                                    content: "<b>Infiltrator</b>: You are not affected by <b>quality</b> or <b>Tier</b> when you bypass security measures.",
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
                                                    content: "<b>Ambush</b>: When you attack from hiding or spring a trap, you get <b>+1d</b>.",
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
                                                        "<b>Daredevil</b>: When you roll a desperate action, you get <b>+1d</b> to your roll if you also take <b>-1d</b> to any resistance rolls against consequences from your action.",
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
                                                        "<b>The Devil's Footsteps</b>: When you <b>push yourself</b>, choose one of the following additional benefits: <i>perform a feat of athletics that verges on the superhuman—maneuver to confuse your enemies so they mistakenly attack each other.</i>",
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
                                                    content:
                                                        "<b>Expertise</b>: Choose one of your action ratings. When you lead a <b>group action</b> using that action, you can suffer only 1 stress at most regardless of the number of failed rolls.",
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
                                                        "<b>Ghost Veil</b>: You may shift partially into the ghost field, becoming shadowy and insubstantial for a few moments. Take 2 stress when you shift, plus 1 stress for each extra feature: <i>It lasts for a few minutes rather than moments—you are invisible rather than shadowy—you bv may float through the air like a ghost.</i>",
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
                                                    content: "<b>Reflexes</b>: When there's a question about who acts first, the answer is you (two characters with Reflexes act simultaneously).",
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
                                                        "<b>Shadow</b>: You may expend your <b>special armor</b> to resist a consequence from detection or security measures, or to <b>push yourself</b> for a feat of athletics or stealth.",
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
                                                    content: "Shady Friends",
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
                                                                    content: "Telda, a beggar",
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
                                                                    content: "Darmot, a bluecoat",
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
                                                                    content: "Frake, a locksmith",
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
                                                                    content: "Roslyn Kellis, a noble",
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
                                                                    content: "Petra, a city clerk",
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
                                                                    content: "<i>Fine lockpicks</i>",
                                                                },
                                                            ],
                                                        },
                                                        {
                                                            type: "series",
                                                            contents: [
                                                                {
                                                                    type: "icon",
                                                                    id: "playbook-items-2",
                                                                    icon: "◼",
                                                                },
                                                                {
                                                                    type: "richText",
                                                                    spacingMode: "padding",
                                                                    content: "Fine shadow cloak",
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
                                                                    content: "Light climbing gear",
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
                                                                    content: "<i>Silence potion vial</i>",
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
                                                                    content: "Dark-sight goggles",
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
                                            content: "<i>You addressed a challenge with stealth or evasion.</i>",
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
    },
    "Blades in the Dark - Slide": {
        type: "root",
        name: "Blades in the Dark - Slide",
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
                                            content: "Slide",
                                        },
                                        {
                                            type: "heading",
                                            alignmentMode: "center",
                                            headingSize: "h4",
                                            content: "A Subtle Manipulator And Spy",
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
                                                        "<b>Rook's Gambit</b>: Take <b>2 stress</b> to roll your best action rating while performing a different action. Say how you adapt your skill to this use.",
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
                                                        "<b>Cloak & Dagger</b>: When you use a disguise or other form of covert misdirection, you get <b>+1d</b> to rolls to confuse or deflect suspicion. When you throw off your disguise, the resulting surprise gives you the initiative in the situation.",
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
                                                        "<b>Ghost Voice</b>: You know the secret method to interact with a ghost or demon as if it was a normal human, regardless of how wild or feral it appears. You gain <b>potency</b> when communicating with the supernatural.",
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
                                                    content: "<b>Like Looking into a Mirror</b>: You can always tell when someone is lying to you.",
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
                                                    content: "<b>A Little Something on the Side</b>: At the end of each downtime phase, you earn +2 stash.",
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
                                                    content: "<b>Mesmerism</b>: When you <b>Sway</b> someone, you may cause them to forget that it's happened until they next interact with you.",
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
                                                        "<b>Subterfuge</b>: You may expend your <b>special armor</b> to resist a consequence from suspicion or persuasion, or to <b>push yourself</b> for subterfuge.",
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
                                                    content: "<b>Trust In Me</b>: You get <b>+1d</b> vs. a target with whom you have an intimate relationship.",
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
                                                    content: "Sly Friends",
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
                                                                    content: "Bryl, a drug dealer",
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
                                                                    content: "Bazso Baz, a gang leader",
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
                                                                    content: "Klyra, a tavern owner",
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
                                                                    content: "Nyryx, a prostitute",
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
                                                                    content: "Harker, a jail-bird",
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
                                                                    content: "<i>Fine clothes & jewelry</i>",
                                                                },
                                                            ],
                                                        },
                                                        {
                                                            type: "series",
                                                            contents: [
                                                                {
                                                                    type: "icon",
                                                                    id: "playbook-items-2",
                                                                    icon: "◼",
                                                                },
                                                                {
                                                                    type: "richText",
                                                                    spacingMode: "padding",
                                                                    content: "Fine disguise kit",
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
                                                                    content: "<i>Fine loaded dice, trick cards</i>",
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
                                                                    content: "<i>Trance powder</i>",
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
                                                                    content: "A cane-sword",
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
                                            content: "<i>You addressed a challenge with deception or influence.</i>",
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
    },
    "Blades in the Dark - Spider": {
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
                                                    id: "special-ability-1",
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
                                                    id: "special-ability-2",
                                                    icon: "⬤",
                                                },
                                                {
                                                    type: "richText",
                                                    content:
                                                        "<b>Calculating</b>: Due to your careful planning, during <b>downtime</b>, you may give yourself or another crew member +1 downtime action.",
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
                                                    content: "<b>Connected</b>: During downtime, you get <b>+1 result level</b> when you <b>acquire an asset</b> or <b>reduce heat.</b>",
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
                                                    id: "special-ability-5",
                                                    icon: "⬤",
                                                },
                                                {
                                                    type: "richText",
                                                    content:
                                                        '<b>Ghost Contract</b>: When you shake on a deal, you and your partner—human or otherwise—both bear a mark of your oath. If either breaks the contract, they take level 3 harm, "Cursed".',
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
                                                        "<b>Jail Bird</b>: When <b>incarcerated</b>, your wanted level counts as 1 less, your Tier as 1 more, and you gain +1 faction status with a faction you help on the inside (in addition to your incarceration roll).",
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
                                                    id: "special-ability-8",
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
                                                                    content: "Salia, an information broker",
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
                                                                    content: "Augus, a master architect",
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
                                                                    content: "Jennah, a servant",
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
                                                                    content: "Riven, a chemist",
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
                                                                    id: "playbook-items-1",
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
                                                                    id: "playbook-items-2",
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
                                                                    id: "playbook-items-3",
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
                                                                    id: "playbook-items-4",
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
                                                                    id: "playbook-items-5",
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
    },
    "Blades in the Dark - Whisper": {
        type: "root",
        name: "Blades in the Dark - Whisper",
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
                                            content: "Whisper",
                                        },
                                        {
                                            type: "heading",
                                            alignmentMode: "center",
                                            headingSize: "h4",
                                            content: "An Arcane Adept And Channeler",
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
                                                        "<b>Compel</b>: You can <b>Attune</b> to the ghost field to force a nearby ghost to appear and obey a command you give it. You are not supernaturally terrified by a ghost you summon or compel (though your allies may be).",
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
                                                        "<b>Ghost Mind</b>: You’re always aware of supernatural entities in your presence. Take <b>+1d</b> when you <b>gather info</b> about the supernatural.",
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
                                                        "<b>Iron Will</b>: You're immune to the terror that some supernatural entities inflict on sight. Take <b>+1d</b> to resistance rolls with <b>Resolve</b>.",
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
                                                        "<b>Occultist</b>: You know the secret ways to <b>Consort</b> with ancient powers, forgotten gods or demons. Once you've consorted with one, you get <b>+1d</b> to <b>Command</b> cultists who worship it.",
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
                                                    content:
                                                        "<b>Ritual</b>: You can <b>Study</b> an occult ritual (or create a new one) to summon a supernatural effect or being. You know the arcane methods to perform ritual sorcery. You begin with one ritual already learned.",
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
                                                        "<b>Strange Methods</b>: When you invent or craft a creation with <i>arcane</i> features, take <b>+1 result level</b> to your roll. You begin with one arcane design already known.",
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
                                                        "<b>Tempest</b>: You can <b>push yourself</b> to do one of the following: <i>unleash a stroke of lightning as a weapon—summon a storm in your immediate vicinity (torrential rain, roaring winds, heavy fog, chilling frost/snow, etc.).</i>",
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
                                                        "<b>Warded</b>: You may expend your <b>special armor</b> to resist a supernatural consequence, or to <b>push yourself</b> when you deal with arcane forces.",
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
                                                    content: "Strange Friends",
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
                                                                    content: "Nyryx, a possessor ghost",
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
                                                                    content: "Scurlock, a vampire",
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
                                                                    content: "Setarra, a demon",
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
                                                                    content: "Quellyn, a witch",
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
                                                                    content: "Flint, a spirit trafficker",
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
                                                                    conjoined: true,
                                                                    icon: "◼◼",
                                                                },
                                                                {
                                                                    type: "richText",
                                                                    spacingMode: "padding",
                                                                    content: "Fine lightning hook",
                                                                },
                                                            ],
                                                        },
                                                        {
                                                            type: "series",
                                                            contents: [
                                                                {
                                                                    type: "icon",
                                                                    id: "playbook-items-2",
                                                                    icon: "◼",
                                                                },
                                                                {
                                                                    type: "richText",
                                                                    spacingMode: "padding",
                                                                    content: "Fine spirit mask",
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
                                                                    content: "<i>Electroplasm vials</i>",
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
                                                                    content: "Spirit bottles (2)",
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
                                                                    content: "<i>Ghost key</i>",
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
                                                                    content: "<i>Demonbane charm</i>",
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
                                            content: "<i>You addressed a challenge with knowledge or arcane power.</i>",
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
    },
};
