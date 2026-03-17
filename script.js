let qr;

const input = document.getElementById("inputText");
const qrContainer = document.getElementById("qrcode");
const hint = document.getElementById("hint");

qr = new QRCode(qrContainer, {
    text: " ",
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
});

// Hide the initial blank QR on load
qrContainer.style.display = "none";

input.addEventListener("input", function () {
    let value = input.value.trim();

    if (value === "") {
        qr.clear();
        qrContainer.style.display = "none";
        hint.style.display = "block";
        return;
    }

    let encoded;

    if (value.startsWith("http://") || value.startsWith("https://")) {
        encoded = value;
    } else {
        encoded = "https://eyochill-00.github.io/qr-text-viewer1/?text=" + encodeURIComponent(value);
    }

    qr.clear();
    qr.makeCode(encoded);
    qrContainer.style.display = "block";
    hint.style.display = "none";
});