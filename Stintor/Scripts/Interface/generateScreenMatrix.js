import { getMatrixRows } from "./getMatrixRows.js";
import { getMatrixColumns } from "./getMatrixColumns.js";
import { paintGroundAndSkyOnScreenMatrix } from "./paintGroundAndSkyOnScreenMatrix.js";
import { paintPlayerOnScreenMatrix } from "./paintPlayerOnScreenMatrix.js";


function generateScreenMatrix()
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

            // if (j == 0) cell.innerHTML = i;  Just printing row's indexes for development purposes.
            // if (j == 9) cell.innerHTML = 9;  Column that represents 20% off all screen matrix.

            document.getElementById("screen").appendChild(cell);
        }
    }

    // These methods will be in another method just responsible for updating the frames. I'll call it "update" inspired by Unity.
    paintGroundAndSkyOnScreenMatrix();
    paintPlayerOnScreenMatrix()
}


window.onload = () =>
{
    generateScreenMatrix();
}