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
        e.target.style.backgroundColor = "rgba(0, 0, 0, 0.5";})
        container.appendChild(grid).classList = "grid-style";
    //Creating a loop that loops through the desired grid and creating divs attached to container.
    //Also changes background color on mouseover on each grid item.
    }
    
}
createGrid(20, 20);


// Make buttons
// Maybe add random RGB-colors
// add more nice styles.
// add reset function
// add function making you able to reset
// Make eraser function