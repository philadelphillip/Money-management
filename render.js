const { ipcRenderer } = require('electron');

document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submit-button');
    submitButton.addEventListener('click', navigateToPage2);
});

function navigateToPage2() {
    ipcRenderer.send('navigate-to-page2');
}
