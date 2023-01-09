createGrid(16);
let tiles = document.getElementById('grid').childNodes;
addListenerToTiles(tiles)

let clickCounter = 0;
let title = 'My Neighbor Totoro';
let rainbowMode = false;
let defaultMode = true;

const howlsBtn = document.querySelector('.howls-btn');
const totoroBtn = document.querySelector('.totoro-btn');
const kikiBtn = document.querySelector('.kiki-btn');

function addListenerToTiles(tiles) {
    for (let tile of tiles) {
        tile.addEventListener('click', () => { 
        clickCounter++;
        addColor;
        console.log(clickCounter);
        checkNumOfClicks(clickCounter);
        });
    }
}

document.getElementById('16x16').addEventListener('click', () => {
    document.getElementById('grid').innerHTML = "";
    createGrid(16);
    addListenerToTiles(tiles)
});

document.getElementById('25x25').addEventListener('click', () => {
    document.getElementById('grid').innerHTML = "";
    createGrid(25);
    addListenerToTiles(tiles)
});

document.getElementById('50x50').addEventListener('click', () => {
    document.getElementById('grid').innerHTML = "";
    createGrid(50);
    addListenerToTiles(tiles)
});

document.getElementById('80x80').addEventListener('click', () => {
    document.getElementById('grid').innerHTML = "";
    createGrid(80);
    addListenerToTiles(tiles)
});

function createGrid(units) {
    let l = 500/units;
    for (let r = 0; r < units; r++){ 
        for (let c = 0; c < units; c++) {
            const tile = document.createElement('div');
            document.getElementById('grid').appendChild(tile);
            tile.style.width = `${l}px`;
            tile.style.height = `${l}px`;
        }
    }
}

function changeBackground() {
    switch (title) {
        case 'My Neighbor Totoro':
            document.body.style.backgroundImage="url(images/totoro-scenery.jpg)"
            break;
        case 'Howl\s Moving Castle':
            document.body.style.backgroundImage="url(images/howls-scenery.jpg)";
            break;
        case 'Kiki\s Delivery Service':
            document.body.style.backgroundImage="url(images/kiki-scenery.jpg)";
            break;
        default:
            break;
    }
}

howlsBtn.addEventListener('click', () => {
    title = 'Howl\s Moving Castle';
    changeBackground();
});

totoroBtn.addEventListener('click', () => {
    title = 'My Neighbor Totoro';
    changeBackground();
});

kikiBtn.addEventListener('click', () => {
    title = 'Kiki\s Delivery Service';
    changeBackground();
});

document.querySelector('.rainbow-palette').addEventListener('click', () => { 
    rainbowMode = true; 
    defaultMode = false; 
});

document.querySelector('.default-palette').addEventListener('click', () => { 
    rainbowMode = false; 
    defaultMode = true; 
});

document.querySelector('.clear-grid-btn').addEventListener('click', () => {
    fillGrid("whitesmoke");
});

function fillGrid(color = 'whitesmoke') {
    for (let tile of tiles) {
        tile.style.background = color;
    }
}

function addColor ({target}) { 
    const howlsPalette = ['#665d60', '#b8b2a4', '#ffc3ab', '#030713', '#0d122f', '#2b5297', '#d5ba9c', '#fef898', '#feb954', '#b95821'];
    const totoroPalette = ['#876c57', '#473535', '#ece3d4', '#82c1ed', '#f38524', '#fafa5e', '#fefc8d', '#5096eb', '#fefec2', '#567442'];
    const kikiPalette = ['#3e98a3', '#2188a7', '#1d3e6b', '#19479d', '#8e8753', '#d4d770', '#3f406c', '#cab9b2', '#2b0908', '#c53840'];
    let i = Math.floor(Math.random() * 10);
    if (rainbowMode) {
        switch (title) {
            case 'My Neighbor Totoro':
                target.style.backgroundColor = `${totoroPalette[i]}`;
                break;
            case 'Howl\s Moving Castle':
                target.style.backgroundColor = `${howlsPalette[i]}`;
                break;
            case 'Kiki\s Delivery Service':
                target.style.backgroundColor = `${kikiPalette[i]}`;
                break;
            default:
                break;
        }
    }
    if (defaultMode) {
        target.style.backgroundColor = 'gray';
    }
}

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
