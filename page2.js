let percentageCount = 1;

function addingPercent() {
    const container = document.getElementById('percentage-container');
    const inputDiv = document.createElement('div');
    inputDiv.classList.add('percentage-input');
    const input = document.createElement('input');
    input.type = 'number';
    input.placeholder = `Enter ${percentageCount + 1} percentage:`;
    inputDiv.appendChild(input);
    container.appendChild(inputDiv);
    percentageCount++;
}

function navigateToIndex() {
    window.location.href = 'index.html';
}
