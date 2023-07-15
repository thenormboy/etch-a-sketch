const gridSize = 16;
const container = document.querySelector('.container');

for (i = 0; i < gridSize; i++) {
    for (j = 0; j < gridSize; j++) {
        const content = document.createElement('div');
        content.classList.add('content');
        content.style.padding = '20px';
        content.style.border = '2px solid black';

        container.appendChild(content);
    }
}