document.getElementById("generateBtn").addEventListener("click", function () {
    const text = document.getElementById("textInput").value;
    const colorMode = document.getElementById("colorMode").value;
    const customColor = document.getElementById("customColor").value;
    const output = document.getElementById("output");

    output.innerHTML = ""; // Clear previous output

    if (text) {
        let colors = [];
        if (colorMode === "rainbow") {
            colors = ["#ff0000", "#ff7f00", "#ffff00", "#00ff00", "#0000ff", "#4b0082", "#8f00ff"];
        } else if (colorMode === "custom") {
            colors = [customColor];
        }

        for (let i = 0; i < text.length; i++) {
            const span = document.createElement("span");
            span.style.color = colors[i % colors.length];
            span.textContent = text[i];
            output.appendChild(span);
        }
    }
});

document.getElementById("colorMode").addEventListener("change", function () {
    const customColorInput = document.getElementById("customColor");
    if (this.value === "custom") {
        customColorInput.disabled = false;
    } else {
        customColorInput.disabled = true;
    }
}); // Replace with your actual logic or API
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                `www.${domain}`,
                `mail.${domain}`,
                `shop.${domain}`,
                `blog.${domain}`
            ]);
        }, 2000);
    });
}

// Download subdomains as a text file
function downloadSubdomains(subdomains) {
    const blob = new Blob([subdomains.join('\n')], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'subdomains.txt';
    link.click();
}