//Select container div.
const container = document.querySelector('.container');


function createGrid(rows, columns){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-columns', columns);
    //Changes CSS to the desired amount of rows and columns.
    for (let i = 0; i < (rows * columns); i++) {
        let grid = document.createElement('div');
        grid.innerText = "0"
        container.appendChild(grid).className = "grid-style";
    //Creating a loop that loops through the desired grid and creating divs attached to container.
        
    }
    
}

createGrid(16, 16);

