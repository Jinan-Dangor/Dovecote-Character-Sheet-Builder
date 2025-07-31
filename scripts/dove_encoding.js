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

const retrieveDataThroughMetadata = async (imageSrc = sharingImage.src) => {
    console.log(`Retrieving from ${imageSrc}`);
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
            console.log(chunkType);
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
    console.log(`Retrieving from ${imageSrc}`);
    return await fetch(imageSrc).then(async (response) => {
        const newCanvas = document.createElement("canvas");
        newCanvas.width = 360;
        newCanvas.height = 360;
        const newImage = new Image();
        const ctx = newCanvas.getContext("2d");
        const fetchedImage = await response.blob();
        const imageSrcURL = await URL.createObjectURL(fetchedImage);
        newImage.src = imageSrcURL;
        newImage.addEventListener("load", async (e) => {
            ctx.drawImage(newImage, 0, 0, 360, 360);
            const imageData = ctx.getImageData(0, 0, 360, 360);
            console.log(imageData.data);

            let readingOffset = 0;
            let readingLength = 4;
            const readData = [];
            for (let y = 0; y < 360; y++) {
                for (let x = 0; x < 360; x++) {
                    for (let i = 0; i < 2; i++) {
                        if (readingOffset == 4) {
                            const messageLength = readData[0] * Math.pow(2, 24) + readData[1] * Math.pow(2, 16) + readData[2] * Math.pow(2, 8) + readData[3];
                            readingLength = messageLength;
                            console.log(`Incoming message is ${messageLength} long`);
                        }
                        if (readingOffset < readingLength + 4) {
                            //console.log(`Result: ${imageData.data[y * 360 * 4 + x * 4 + i * 2]}`);
                            //console.log(`Result: ${imageData.data[y * 360 * 4 + x * 4 + i * 2 + 1]}`);
                            const firstHalf = imageData.data[y * 360 * 4 + x * 4 + i * 2] % 2 ** 4;
                            const secondHalf = imageData.data[y * 360 * 4 + x * 4 + i * 2 + 1] % 2 ** 4;
                            //console.log(`First half ${firstHalf}, second half ${secondHalf}`);
                            readData.push(firstHalf * 2 ** 4 + secondHalf);
                            readingOffset++;
                        }
                    }
                }
            }
            const readDataBuffer = Uint8Array.from(readData.slice(4));
            const decoder = new TextDecoder();
            console.log(readDataBuffer);
            console.log(decoder.decode(readDataBuffer));
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
            console.log(`${chunkType}: length ${chunkLength}`);
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
            const encoder = new TextEncoder();
            const arrayToInsert = encoder.encode(JSON.stringify("Hello world!*" /*providedTemplates["Blades in the Dark - Cutter"]*/));
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
            console.log("Inserting length of message");
            console.log(chunkHeaderLength);
            console.log("Then message");
            console.log(arrayToInsert);
            console.log("As half bytes:");
            console.log(halfBytes);

            ctx.drawImage(newImage, 0, 0, 360, 360);
            const imageData = ctx.getImageData(0, 0, 360, 360);
            const data = imageData.data;

            let writingOffset = 0;
            for (let i = 0; i < data.length; i++) {
                if (writingOffset < (arrayToInsert.length + chunkHeaderLength.length) * 2) {
                    //console.log(`Initially: ${imageData.data[i]}`);
                    data[i] -= data[i] % 2 ** 4;
                    data[i] += halfBytes[writingOffset];
                    //console.log(`Result: ${data[i] % 2 ** 4}`);
                    //console.log(`Result: ${data[i] % 2 ** 4} == ${halfBytes[writingOffset]}`);
                    writingOffset++;
                }
            }

            ctx.putImageData(imageData, 0, 0);

            const testImageData = ctx.getImageData(0, 0, 360, 360);
            const testData = testImageData.data;

            writingOffset = 0;
            for (let i = 0; i < data.length; i++) {
                if (writingOffset < (arrayToInsert.length + chunkHeaderLength.length) * 2) {
                    console.log(testData[i] % 2 ** 4);
                    writingOffset++;
                }
            }

            sharingImage.src = newCanvas.toDataURL("image/png");
            retrieveDataThroughSteganography();
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
        console.log("Image copied!");
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
                const guaranteedData = await retrieveDataThroughSteganography();
                const newData = await retrieveDataThroughSteganography(pastedImage);
                console.log(guaranteedData);
                console.log(newData);
            } else {
                console.error("Clipboard does not contain a PNG.");
            }
        }
    });
    openModal(modalContent, []);
});

encodeUsingSteganography();
