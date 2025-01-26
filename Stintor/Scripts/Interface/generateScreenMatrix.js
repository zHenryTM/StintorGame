import { getMatrixRows } from "./getMatrixRows.js";
import { getMatrixColumns } from "./getMatrixColumns.js";


export function generateScreenMatrix()
{
    // Create the HTML Span Elements in which the game will be rendered.

    var matrixRows = getMatrixRows();
    var matrixColumns = getMatrixColumns();
    
    for (let i = 0; i < matrixRows; i++)
    {
        for (let j = 0; j < matrixColumns; j++)
        {
            let cell = document.createElement("span");

            cell.classList.add("cell");

            document.getElementById("screen").appendChild(cell);
        }
    }
}