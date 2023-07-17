const container = document.querySelector('.container');

function createSketchBox(gridSize) {

    for (i = 0; i < gridSize; i++) {
        for (j = 0; j < gridSize; j++) {

            let pixelSizePercent = (1 / gridSize) * 100;

            const content = document.createElement('div');
            content.classList.add('content');
            content.style.width = pixelSizePercent + '%';
            content.style.height = pixelSizePercent + '%';

            container.appendChild(content);
        }
    }
}

function destroySketchBox() {
    const elements = document.querySelectorAll('.content');
    elements.forEach((content) => {
        container.removeChild(content)
    });
}

function pixelEffect(color) {
    const pixels = document.querySelectorAll('.content');

    pixels.forEach((content) => {
        content.addEventListener('mouseover', () => {
            content.style.background = color;
        })
    });
}

const sizeInput = document.querySelector('.sizeInput');
const result = document.querySelector('.result');

createSketchBox(24);
pixelEffect('black');

sizeInput.addEventListener('change', () => {
    destroySketchBox();
    if (sizeInput.value >= 1 && sizeInput.value <= 100) {
        result.textContent = 'Good Choice..'
        createSketchBox(sizeInput.value);
        pixelEffect('black');

    } else {
        result.textContent = 'ERROR';
    }
});
