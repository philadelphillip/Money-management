let percentageCount = 0;

function addingPercent(){
    const container = document.getElementById('percentage-container');
    const input = document.createElement('input');
    input.type = 'number';
    input.placeholder = 'Enter ${percentageCount + 1} percentage: ';
    container.appendChild(input);
    percentageCount++;
}

function navigateToIndex() {
    win.loadFile('index.html');
}