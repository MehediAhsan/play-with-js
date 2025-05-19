function formatHexView(bytes, length = 50) {
  return Array.from(bytes)
    .slice(0, length)
    .map((b) => b.toString(16).padStart(2, "0").toUpperCase())
    .join(" ");
}

function formatASCII(bytes, length = 50) {
  return Array.from(bytes)
    .slice(0, length)
    .map((b) => (b >= 32 && b <= 126 ? String.fromCharCode(b) : "."))
    .join("");
}

function handleFile(file) {
  const reader = new FileReader();
  reader.onload = function () {
    const buffer = reader.result;
    const bytes = new Uint8Array(buffer);

    const sample = Array.from(bytes).slice(0, 50);

    const hex = formatHexView(bytes);
    const ascii = formatASCII(bytes);

    document.getElementById(
      "output"
    ).textContent = `File: ${file.name}\nSize: ${file.size} bytes\n\nFirst 50 bytes:\n${sample}\n\nHEX:\n${hex}\n\nASCII:\n${ascii}`;

    const blob = new Blob([bytes], { type: "application/octet-stream" });
    const url = URL.createObjectURL(blob);
    const downloadBtn = document.getElementById("downloadBtn");
    downloadBtn.href = url;
    downloadBtn.download = `${file.name}.bin`;
    downloadBtn.style.display = "inline-block";
  };

  reader.readAsArrayBuffer(file);
}

document.getElementById("fileInput").addEventListener("change", function (e) {
  if (e.target.files.length > 0) {
    handleFile(e.target.files[0]);
  }
});

const dropzone = document.getElementById("dropzone");
dropzone.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropzone.style.borderColor = "green";
});

dropzone.addEventListener("dragleave", () => {
  dropzone.style.borderColor = "#aaa";
});

dropzone.addEventListener("drop", (e) => {
  e.preventDefault();
  dropzone.style.borderColor = "#aaa";
  const file = e.dataTransfer.files[0];
  if (file) handleFile(file);
});
