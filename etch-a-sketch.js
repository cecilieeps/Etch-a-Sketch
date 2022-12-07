createGrid(16);

// The CSS rules for a tile will change depending on the dimensions 
// given. i.e. the width/height of a tile will change.
function createGrid(units) {
    const grid = document.getElementById('grid');
    let styles = document.getElementById('styles');
    let l = 320/units;
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
