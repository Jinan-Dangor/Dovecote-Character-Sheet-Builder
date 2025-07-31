const imageWidth = 360;
const imageHeight = 360;
const sharingImage = document.getElementById("sharingImage");
sharingImage.style.width = imageWidth;
sharingImage.style.height = imageHeight;
const invisibleElements = document.getElementById("invisible-encoding-elements");

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

let encodedString = "";
const encodeJSON = (unencodedJSON) => {
    const encoder = new TextEncoder();
    encodedString = encoder.encode(JSON.stringify(unencodedJSON));
    return encodedString;
};

let decodedString = "";
const decodeJSON = (encodedJSON) => {
    const decoder = new TextDecoder();
    decodedString = JSON.parse(decoder.decode(encodedJSON));
    return decodedString;
};

const retrieveDataThroughMetadata = async (imageSrc = sharingImage.src) => {
    return await fetch(imageSrc).then(async (response) => {
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
            if (chunkType == "tEXt") {
                const decoder = new TextDecoder();
                const newArray = new Uint8Array(uintArray.slice(currentByteOffset + 8, currentByteOffset + 8 + chunkLength));
                return decoder.decode(newArray);
            }
            chunkArr.push({ type: chunkType, offset: currentByteOffset });
            currentByteOffset += chunkLength + 12;
            chunkNum++;
        }
    });
};

const retrieveDataThroughSteganography = async (imageSrc = sharingImage.src) => {
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
            sheetImported(decodeJSON(readDataBuffer));
        });
    });
};

const encodeUsingMetadata = async () => {
    fetch("https://jinan-dangor.github.io/Dovecote-Character-Sheet-Builder/assets/dove%20icon.png").then(async (response) => {
        const encoder = new TextEncoder();
        const arrayBuffer = await response.arrayBuffer();
        const bufferLength = arrayBuffer.byteLength;
        const uintArray = new Uint8Array(arrayBuffer, 0, bufferLength);
        const arrayToInsert = encoder.encode(JSON.stringify(providedTemplates["Blades in the Dark - Cutter"]));
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
                uintArray[currentByteOffset] * Math.pow(2, 24) +
                uintArray[currentByteOffset + 1] * Math.pow(2, 16) +
                uintArray[currentByteOffset + 2] * Math.pow(2, 8) +
                uintArray[currentByteOffset + 3];
            const chunkType =
                String.fromCharCode(uintArray[currentByteOffset + 4]) +
                String.fromCharCode(uintArray[currentByteOffset + 5]) +
                String.fromCharCode(uintArray[currentByteOffset + 6]) +
                String.fromCharCode(uintArray[currentByteOffset + 7]);
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
        sharingImage.src = URL.createObjectURL(new Blob([newUintArray], { type: "image/png" }));
    });
};

const encodeUsingSteganography = async () => {
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
            const arrayToInsert = encodeJSON(providedTemplates["Blades in the Dark - Cutter"]);
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
        });
    });
};

const exportSheetButton = document.getElementById("copy-sharing-image");
exportSheetButton.addEventListener("mousedown", () => {
    fetch(sharingImage.src).then((response) => {
        navigator.clipboard.write([
            new ClipboardItem({
                "image/png": response.blob(),
            }),
        ]);
    });
});

const importSheetButton = document.getElementById("import-sheet-button");
importSheetButton.addEventListener("mousedown", () => {
    const modalContent = document.createElement("div");
    const modalHeading = document.createElement("h2");
    const pasteImageFromClipboardButton = document.createElement("button");
    const imageDemo = document.createElement("img");
    modalContent.appendChild(modalHeading);
    modalContent.appendChild(pasteImageFromClipboardButton);
    modalContent.appendChild(imageDemo);
    modalHeading.innerText = "Upload Sheet";
    pasteImageFromClipboardButton.innerText = "Paste Image from Clipboard";
    pasteImageFromClipboardButton.addEventListener("mousedown", async () => {
        const clipboardContents = await navigator.clipboard.read();
        for (const item of clipboardContents) {
            if (item.types.includes("image/png")) {
                const blob = await item.getType("image/png");
                const pastedImage = URL.createObjectURL(blob);
                imageDemo.src = pastedImage;
                retrieveDataThroughSteganography(pastedImage);
            } else {
                console.error("Clipboard does not contain a PNG.");
            }
        }
    });
    openModal(modalContent, []);
});

const sheetImported = (sheet) => {
    console.log(`Sheet retrieved!`);
    console.log(sheet);
};

encodeUsingSteganography();
