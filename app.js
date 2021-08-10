//Select container div.

const container = document.querySelector('.container');


let grid;
function createGrid(rows, columns){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-columns', columns);
    //Changes CSS to the desired amount of rows and columns.
    for (let i = 0; i < (rows * columns); i++) {
        grid = document.createElement('div');
        grid.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = "red";})
        container.appendChild(grid).classList = "grid-style";
    //Creating a loop that loops through the desired grid and creating divs attached to container.
        
    }
    
}

createGrid(16, 16);


// make grid generated stay within the container size. 

// make change background on hover

// create button that 