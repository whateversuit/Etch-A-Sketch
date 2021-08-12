//Select container div and buttons div.
const container = document.querySelector('.container');
const newBtn = document.getElementById('btn-sketch');
const eraseBtn = document.querySelector('.btn-eraser');

let rows = 16;
let columns = 16;
// const chooseGrid = prompt("Choose grid size (1-100): ")
// columns = chooseGrid;
// rows = chooseGrid;

newBtn.addEventListener('click', () => {
    while (container.firstChild){
        container.removeChild(container.firstChild);

    }
    const chooseGrid = prompt("Choose grid size (1-100): ")
    if (chooseGrid > 100 || chooseGrid < 1 ){
        let chooseGrid = 10;
        createGrid(chooseGrid);
        alert('Cannot make grids larger than 100x100 or less than 0!');

    } else {
    columns = chooseGrid;
    rows = chooseGrid;
    createGrid(chooseGrid);   
    }
})


// Cant fix this right now.
eraseBtn.addEventListener('click', () => {
    console.log("Clicked");
    {
    // grid.addEventListener('mouseover', (e) => {
    // e.target.style.backgroundColor = "";})
     
}})



let grid;
function createGrid(chooseGrid){
    
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-columns', columns);
    //Changes CSS to the desired amount of rows and columns.
    for (let i = 0; i < (rows * columns); i++) {
        grid = document.createElement('div');
        grid.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = "rgba(0, 0, 0, 0.5)";})
        container.appendChild(grid).classList = "grid-style";
    
        //Creating a loop that loops through the desired grid and creating divs attached to container.
    //Also changes background color on mouseover on each grid item.
    }
    
}
createGrid(rows, columns)

// Maybe add random RGB-colors

