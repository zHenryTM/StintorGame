import { getMatrixRows } from "./getMatrixRows.js";
import { getMatrixColumns } from "./getMatrixColumns.js";
import { getScreenMatrix } from "./getScreenMatrix.js";

import { Player } from "../Business/Player.js";


export function paintPlayerOnScreenMatrix()
{
    var matrixRows = getMatrixRows();
    var matrixColumns = getMatrixColumns();
    var matrix = getScreenMatrix();

    var playerPositionInColumns = Player.getPlayerPositionInColumns();
    var playerPositionOnGroundInRows = Player.getPlayerPositionInRows();

    for (let i = 0; i < matrixRows; i++)
    {
        for (let j = 0; j < matrixColumns; j++)
        {
            if (j == playerPositionInColumns)
            {
                if (playerPositionOnGroundInRows.includes(i)) matrix[i][j].style.backgroundColor = "black";
            } 
        }
    }
}