//Select container div and buttons div.
const container = document.querySelector('.container');
const newBtn = document.getElementById('btn-sketch');
const eraseBtn = document.querySelector('.btn-eraser');
const newGrid = document.querySelector('.grid-style');

newBtn.addEventListener('click', () => {
    container.innerText = "";
    createGrid(20, 20);
    
})
eraseBtn.addEventListener('click', () => {
    console.log("Clicked");
    grid.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = "";})
    
})



let grid;
function createGrid(rows, columns){
    
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
createGrid(20, 20)

// Maybe add random RGB-colors
