const gridSize = 16;
const container = document.querySelector('.container');
let pixelSize = 600 / gridSize;

for (i = 0; i < gridSize; i++) {
    for (j = 0; j < gridSize; j++) {
        const content = document.createElement('div');
        content.classList.add('content');

        container.appendChild(content);
    }
}