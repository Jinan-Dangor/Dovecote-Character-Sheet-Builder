const imageWidth = 360;
const imageHeight = 360;
const sharingImage = document.getElementById("sharingImage");
sharingImage.style.width = imageWidth;
sharingImage.style.height = imageHeight;

const encodeJSON = (unencodedJSON) => {
    const encoder = new TextEncoder();
    const encodedString = encoder.encode(JSON.stringify(unencodedJSON));
    return encodedString;
};

const decodeJSON = (encodedJSON) => {
    const decoder = new TextDecoder();
    const decodedString = JSON.parse(decoder.decode(encodedJSON));
    return decodedString;
};

const retrieveDataThroughSteganography = async (imageSrc, onDataRetrieved) => {
    return await fetch(imageSrc).then(async (response) => {
        const newCanvas = document.createElement("canvas");
        newCanvas.width = 360;
        newCanvas.height = 360;
        const newImage = new Image();
        const ctx = newCanvas.getContext("2d");
        const fetchedImage = await response.blob();
        const imageSrcURL = URL.createObjectURL(fetchedImage);
        newImage.src = imageSrcURL;
        newImage.addEventListener("load", async (e) => {
            ctx.drawImage(newImage, 0, 0, 360, 360);
            const imageData = ctx.getImageData(0, 0, 360, 360);

            let readingOffset = 0;
            let readingLength = 4;
            const readData = [];
            let currentPair = [];
            for (let i = 0; i < imageData.data.length; i++) {
                if (i % 4 == 3) {
                    continue;
                }
                if (readingOffset == 4) {
                    const messageLength = readData[0] * 2 ** 24 + readData[1] * 2 ** 16 + readData[2] * 2 ** 8 + readData[3];
                    readingLength = messageLength;
                }
                if (readingOffset < readingLength + 4) {
                    currentPair.push(imageData.data[i] % 2 ** 4);
                    if (currentPair.length == 2) {
                        readData.push(currentPair[0] * 2 ** 4 + currentPair[1]);
                        readingOffset++;
                        currentPair = [];
                    }
                }
            }
            const readDataBuffer = Uint8Array.from(readData.slice(4));
            onDataRetrieved(decodeJSON(readDataBuffer));
        });
    });
};

const encodeUsingSteganography = async (objectToEncode, onEncoded) => {
    fetch("https://jinan-dangor.github.io/Dovecote-Character-Sheet-Builder/assets/dove%20icon.png").then(async (response) => {
        const newCanvas = document.createElement("canvas");
        newCanvas.width = 360;
        newCanvas.height = 360;
        const newImage = new Image();
        const ctx = newCanvas.getContext("2d");
        const fetchedImage = await response.blob();
        const imageSrcURL = await URL.createObjectURL(fetchedImage);
        newImage.src = imageSrcURL;
        newImage.addEventListener("load", async (e) => {
            const arrayToInsert = encodeJSON(objectToEncode);
            let chunkHeaderLength = new Uint8Array(new BigUint64Array([BigInt(arrayToInsert.length)]).buffer);
            chunkHeaderLength.reverse();
            chunkHeaderLength = chunkHeaderLength.slice(4);
            let nextHalfByteToPush = 0;
            const halfBytes = new Uint8Array((arrayToInsert.length + 4) * 2);
            chunkHeaderLength.forEach((byte) => {
                const lowerHalfByte = byte % 2 ** 4;
                const upperHalfByte = (byte - lowerHalfByte) / 2 ** 4;
                halfBytes[nextHalfByteToPush] = upperHalfByte;
                nextHalfByteToPush++;
                halfBytes[nextHalfByteToPush] = lowerHalfByte;
                nextHalfByteToPush++;
            });
            arrayToInsert.forEach((byte) => {
                const lowerHalfByte = byte % 2 ** 4;
                const upperHalfByte = (byte - lowerHalfByte) / 2 ** 4;
                halfBytes[nextHalfByteToPush] = upperHalfByte;
                nextHalfByteToPush++;
                halfBytes[nextHalfByteToPush] = lowerHalfByte;
                nextHalfByteToPush++;
            });

            ctx.drawImage(newImage, 0, 0, 360, 360);
            const imageData = ctx.getImageData(0, 0, 360, 360);
            const data = imageData.data;

            let writingOffset = 0;
            for (let i = 0; i < data.length; i++) {
                if (i % 4 == 3) {
                    continue;
                }
                if (writingOffset < (arrayToInsert.length + chunkHeaderLength.length) * 2) {
                    data[i] -= data[i] % 2 ** 4;
                    data[i] += halfBytes[writingOffset];
                    writingOffset++;
                }
            }

            ctx.putImageData(imageData, 0, 0);

            sharingImage.src = newCanvas.toDataURL("image/png");
            onEncoded();
        });
    });
};

const exportSheet = (sheet) => {
    encodeUsingSteganography(sheet, () => {
        fetch(sharingImage.src).then((response) => {
            navigator.clipboard.write([
                new ClipboardItem({
                    "image/png": response.blob(),
                }),
            ]);
        });
    });
};

const importSheetButton = document.getElementById("import-sheet-button");
importSheetButton.addEventListener("mousedown", () => {
    const modalContent = document.createElement("div");
    const modalHeading = document.createElement("h2");
    const pasteImageFromClipboardButton = document.createElement("button");
    const imageDemo = document.createElement("img");
    imageDemo.style.height = "30%";
    imageDemo.style.width = "30%";
    modalContent.appendChild(modalHeading);
    modalContent.appendChild(pasteImageFromClipboardButton);
    modalContent.appendChild(imageDemo);
    modalHeading.innerText = "Upload Sheet";
    pasteImageFromClipboardButton.innerText = "Paste Image from Clipboard";
    pasteImageFromClipboardButton.style.display = "block";
    pasteImageFromClipboardButton.addEventListener("mousedown", async () => {
        const clipboardContents = await navigator.clipboard.read();
        for (const item of clipboardContents) {
            if (item.types.includes("image/png")) {
                const blob = await item.getType("image/png");
                const pastedImage = URL.createObjectURL(blob);
                imageDemo.src = pastedImage;
                retrieveDataThroughSteganography(pastedImage, (result) => {
                    createNewSheet(result.metadata.templateName, result.metadata.sheetName);
                    saveSheetData(result.metadata.sheetName, result.sheet);
                    setCurrentSheet(result.metadata.sheetName);
                });
            } else {
                console.error("Clipboard does not contain a PNG.");
            }
        }
    });
    openModal(modalContent, []);
});
