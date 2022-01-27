var grilleDiv = document.getElementById("grille");
grilleDiv.className = "grilleDiv";
columns = 40;
rows = 30;

var grid = new Array(rows);



function createGrid() {

    for (let i = 0; i < rows; i++) {
        grid[i] = new Array(columns);


        for (let j = 0; j < columns; j++) {
            var cellDiv = document.createElement("div");
            cellDiv.className = 'cell';
            cellDiv.className = "cell";
            grilleDiv.appendChild(cellDiv);
            grid[i][j] = cellDiv;





        }
    }


}

createGrid();

grid[3][10].style.backgroundColor = 'red';


function createSnake() {
    for (let i = 0; i < 10; i++) {
        grid[10][i].style.backgroundColor = 'red';

    }

}


createSnake();


function updateColor(snake) {

}