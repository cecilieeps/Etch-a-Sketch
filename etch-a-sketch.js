createGrid(20);
let tiles = document.getElementById('grid').childNodes;
let clickCounter = 0;
for (let tile of tiles) {
    tile.addEventListener('click', () => { 
        clickCounter++;
        tile.style.backgroundColor = 'black';
        console.log(clickCounter);
        checkNumOfClicks(clickCounter);
    });
}

function addColor ({target}) { target.style.backgroundColor = 'black'; }

function checkNumOfClicks(clicks) {
    switch (clicks) {
        case 1:
            for (let tile of tiles) {
                tile.addEventListener('mouseover', addColor);
            }
            break;
        case 2:
            for (let tile of tiles) {
                tile.removeEventListener('mouseover', addColor);
            }
            clickCounter = 0;
        default:
            break;
    }
}

function createGrid(units) {
    const grid = document.getElementById('grid');
    let l = 600/units;
    for (let r = 0; r < units; r++){ // row-wise
        for (let c = 0; c < units; c++) { // column-wise
            const tile = document.createElement('div');
            tile.setAttribute('id', `(${r},${c})`);
            grid.appendChild(tile);
            tile.style.width = `${l}px`;
            tile.style.height = `${l}px`;
        }
    }
}

function selectColor() {
    
}
