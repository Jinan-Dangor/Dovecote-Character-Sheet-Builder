const modal = document.querySelector("#modal");
const modalShadow = document.querySelector("#modal-shadow");
const modalContent = document.querySelector("#modal-content");
const modalOptions = document.querySelector("#modal-options");

modal.style.position = "fixed";
modal.style.zIndex = 1;
modal.style.top = "25%";
modal.style.left = "25%";
modal.style.width = "50%";
modal.style.height = "50%";
modal.style.backgroundColor = "var(--character-sheet-palette-5)";
modal.style.borderRadius = "20px";
modal.style.padding = "1.5vw";

modalShadow.style.position = "fixed";
modalShadow.style.zIndex = 1;
modalShadow.style.top = "0%";
modalShadow.style.left = "0%";
modalShadow.style.width = "100%";
modalShadow.style.height = "100%";
modalShadow.style.backgroundColor = "#00000066";

const makeModalVisible = () => {
    modal.style.display = "block";
    modalShadow.style.display = "block";
};

const exitModal = () => {
    modal.style.display = "none";
    modalShadow.style.display = "none";
};

modalShadow.addEventListener("mousedown", exitModal);

const openModal = (contents, options) => {
    modalContent.innerHTML = "";
    modalContent.appendChild(contents);
    modalOptions.innerHTML = "";
    options.forEach((option) => {
        const newOptionButton = document.createElement("button");
        newOptionButton.innerText = option.label;
        newOptionButton.style.cursor = "pointer";
        newOptionButton.addEventListener("mousedown", option.onClick);
        modalOptions.appendChild(newOptionButton);
    });
    makeModalVisible();
};
