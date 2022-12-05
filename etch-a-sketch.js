// Create a function which creates a grid.
// The function should contain a loop which creates a div for
// every iteration which is a tile. Each of those div's should be
// given a unique id.
// With nested loops we can assign a column and row value. 

const grid = document.getElementById('grid');
function createGrid(sideLength) {
    for (let r = 0; r < sideLength; r++){ // row-wise
        for (let c = 0; c < sideLength; c++) { // column-wise
            const tile = document.createElement('div');
            tile.setAttribute('id', `(${r},${c})`);
            grid.appendChild(tile);
        }
    }
}

createGrid(10);