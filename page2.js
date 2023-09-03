let percentageCount = 1;

function addingPercent() {
    const container = document.getElementById('percentage-container');
    const inputDiv = document.getElementById('percentage-inputi');
    // const inputDiv = document.createElement('div');
    // inputDiv.classList.add('percentage-input');
    // inputDiv.style.margin = '50px';
    const input = document.createElement('input');
    // input.add('percentage-input');
    input.type = 'number';
    input.placeholder = `Enter ${percentageCount + 1} percentage:`;
    input.style.marginBottom = '10px';
    inputDiv.appendChild(input);
    container.appendChild(inputDiv);
    percentageCount++;
}

function navigateToIndex() {
    window.location.href = 'index.html';
}