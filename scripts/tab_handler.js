const tabs = Array.from(document.querySelectorAll(".tab"));
const tabContents = Array.from(document.querySelectorAll(".tabContent"));
tabContents.forEach((tabContent) => {
    tabContent.style.display = "none";
});
tabContents[0].style.display = "block";
tabs.forEach((tab) => {
    const targetId = tab.getAttribute("data-target");
    tab.addEventListener("click", (e) => {
        tabContents.forEach((tabContent) => {
            if (tabContent.getAttribute("data-id") == targetId) {
                tabContent.style.display = "block";
            } else {
                tabContent.style.display = "none";
            }
        });
    });
});
