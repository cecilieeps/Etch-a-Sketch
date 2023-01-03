createGrid(50);

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

// Add event listener to mode buttons. Have the light version by default. And hide the LIGHT button
const voidBtn = document.querySelector('.dark-mode-btn');
const lightBtn = document.querySelector('.light-mode-btn');

voidBtn.addEventListener('click', () => {
    document.querySelector('body').style.background = 'black';
    document.querySelector('h1').style.color = 'whitesmoke';
});

lightBtn.addEventListener('click', () => {
    document.querySelector('body').style.background = 'whitesmoke';
    document.querySelector('h1').style.color = 'black';
});
