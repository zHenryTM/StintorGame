import { getMatrixRows } from "./getMatrixRows.js";
import { getMatrixColumns } from "./getMatrixColumns.js";
import { getScreenMatrix } from "./getScreenMatrix.js";


export function paintGroundAndSkyOnScreenMatrix()
{
    var matrixRows = getMatrixRows();
    var matrixColumns = getMatrixColumns();
    var matrix = getScreenMatrix();

    // I know I could assign values for each color and paint the screen like Super Mario Bros. did, but I wanted to use the FIFO Concept that I've recently learned from a book.
    var colorsQueue = [
        "#0072a0", "#00abf0", "#00abf0", "#19bdff", "#19bdff", "#19bdff", "#37c6ff", "#37c6ff",
        "#37c6ff", "#55ceff", "#55ceff", "#55ceff", "#73d7ff", "#73d7ff", "#73d7ff", "#91e0ff",
        "#91e0ff", "#91e0ff", "#a5e5ff", "#a5e5ff", "#a5e5ff", "#b9ebff", "#b9ebff", "#b9ebff",
        "#cdf0ff", "#dcba92", "#c4a17e", "#b28767", "#a06f53", "#8d5740", "#7b4230", "#692f22"
    ];

    for (let i = 0; i < matrixRows; i++)
    {
        for (let j = 0; j < matrixColumns; j++)
        {
            matrix[i][j].style.backgroundColor = colorsQueue[0];
        }

        colorsQueue.shift();
    }
}