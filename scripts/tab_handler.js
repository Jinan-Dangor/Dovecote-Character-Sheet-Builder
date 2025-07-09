const tabList = document.querySelector(".tabs");
tabList.style.position = "absolute";
tabList.style.top = "0";
tabList.style.left = "30px";
const tabs = Array.from(document.querySelectorAll(".tab"));
const tabContents = Array.from(document.querySelectorAll(".tabContent"));
tabContents.forEach((tabContent) => {
    tabContent.style.display = "none";
    tabContent.style.marginTop = "8vh";
});
tabContents[0].style.display = "block";

const switchTab = (targetTabId) => {
    tabContents.forEach((tabContent) => {
        if (tabContent.getAttribute("data-id") == targetTabId) {
            tabContent.style.display = "block";
        } else {
            tabContent.style.display = "none";
        }
        tabs.forEach((tab) => {
            if (tab.getAttribute("data-target") == targetTabId) {
                tab.style.backgroundColor = "var(--character-sheet-palette-1)";
                tab.style.color = "var(--character-sheet-palette-6)";
            } else {
                tab.style.backgroundColor = "var(--character-sheet-palette-5)";
                tab.style.color = "var(--character-sheet-palette-0)";
            }
        });
    });
};

tabs.forEach((tab, index) => {
    tab.style.width = "5vw";
    if (index == 0) {
        tab.style.backgroundColor = "var(--character-sheet-palette-1)";
        tab.style.color = "var(--character-sheet-palette-6)";
    } else {
        tab.style.backgroundColor = "var(--character-sheet-palette-5)";
    }
    tab.style.border = "none";
    tab.style.borderRadius = "0px 0px 10px 10px";
    tab.style.padding = "2vh";
    tab.style.cursor = "pointer";
    const targetId = tab.getAttribute("data-target");
    tab.addEventListener("click", (e) => {
        switchTab(targetId);
    });
});
