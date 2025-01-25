export function getScreenMatrix()
{
    // Get all Span Element of class cell, put them into a matrix variable and return that variable in order to be used to paint (render) cells in other files.

    var matrixRows = 29;
    var matrixColumns = 51;

    var matrix = [];

    var cells = document.querySelectorAll(".cell");

    var cellsIndexCounter = 0;


    for (let i = 0; i < matrixRows; i++)
    {
        matrix[i] = [];

        for (let j = 0; j < matrixColumns; j++)
        {
            matrix[i][j] = cells[cellsIndexCounter];

            cellsIndexCounter++;
        }
    }

    
    return matrix;
}