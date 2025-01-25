import { paintGroundAndSkyOnScreenMatrix } from "./paintGroundAndSkyOnScreenMatrix.js";


function generateScreenMatrix()
{
    // Create the HTML Span Elements in which the game will be rendered.

    var matrixRows = 29;
    var matrixColumns = 51;
    
    for (let i = 0; i < matrixRows; i++)
    {
        for (let j = 0; j < matrixColumns; j++)
        {
            let cell = document.createElement("span");

            cell.classList.add("cell");

            document.getElementById("screen").appendChild(cell);
        }
    }

    paintGroundAndSkyOnScreenMatrix();
}


window.onload = () =>
{
    generateScreenMatrix();
}