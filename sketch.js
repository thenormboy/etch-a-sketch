const gridSize = 16;
const container = document.querySelector('.container');
let pixelSizePercent = (1 / gridSize) * 100;

for (i = 0; i < gridSize; i++) {
    for (j = 0; j < gridSize; j++) {
        const content = document.createElement('div');
        content.classList.add('content');
        content.style.width = pixelSizePercent + '%';
        content.style.height = pixelSizePercent + '%';

        container.appendChild(content);
    }
}