import { getMatrixRows } from "./getMatrixRows.js";
import { getMatrixColumns } from "./getMatrixColumns.js";
import { getScreenMatrix } from "./getScreenMatrix.js";


export function paintPlayerOnScreenMatrix()
{
    var matrixRows = getMatrixRows();
    var matrixColumns = getMatrixColumns();
    var matrix = getScreenMatrix();

    for (let i = 0; i < matrixRows; i++)
    {
        for (let j = 0; j < matrixColumns; j++)
        {
            if (j == 9)
            {
                if (i >= 18 && i <= 24) matrix[i][j].style.backgroundColor = "black";
            } 
        }
    }
}