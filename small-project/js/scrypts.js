function toggleSerialization(sectionId) {
    const content = document.getElementById(sectionId);
    const currentDisplay = window.getComputedStyle(content).display;

    if (currentDisplay === 'none') {
        content.style.display = 'block'; // Show
    } else {
        content.style.display = 'none'; // Hide
    }
}

function copyCode(sectionId) {
    const codeBlock = document.querySelector(`#${sectionId} code`);
    navigator.clipboard.writeText(codeBlock.innerText).then(() => {
        alert("Кодът е копиран!");
    });
}

function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
    } else {
        body.classList.add('dark-mode');
    }
}
