export class Player
{
    static jumpHeight = 5;
    static playerPositionInColumns = 9;                     // Represents the index of matrix column where the player will be rendered. It's a fixed position.
    static playerPositionInRows = [20, 21, 22, 23, 24];     // It varies depending on player's actions.
    static playerPositionOnGround = [20, 21, 22, 23, 24];   // It defines if player is on ground or not.

    
    static getPlayerPositionInColumns()
    {
        return Player.playerPositionInColumns;
    }


    static getPlayerPositionInRows()
    {
        return Player.playerPositionInRows;
    }


    static jump()
    {   
        if (Player.isPlayerOnGround())
        {
            function jumpAnimationUp(_jumpedMatrixCells)
            {
                if (_jumpedMatrixCells <= Player.jumpHeight)
                {
                    Player.playerPositionInRows = Player.decreasePlayerPositionInRows(Player.playerPositionInRows);
                    jumpedMatrixCells++;
                    setTimeout(() => {jumpAnimationUp(jumpedMatrixCells)}, 16.66);
                }
            }


            function jumpAnimationDown(_fallenMatrixCells)
            {
                if (_fallenMatrixCells >= 0)
                {
                    Player.playerPositionInRows = Player.increasePlayerPositionInRows(Player.playerPositionInRows);
                    fallenMatrixCells--;
                    setTimeout(() => {jumpAnimationDown(fallenMatrixCells)}, 16.66);
                }
            }


            var jumpedMatrixCells = 0;

            var fallenMatrixCells = Player.jumpHeight;

            jumpAnimationUp(jumpedMatrixCells);

            setTimeout(() => jumpAnimationDown(fallenMatrixCells), 500);  // Wait half second before starting falling animation
        }
    }


    static decreasePlayerPositionInRows(position)
    {   
        // Decreasing the values of player's position makes it jump.

        var newPosition = [];

        position.forEach(element => {
            newPosition.push(element - 1);
        });

        return newPosition;
    }


    static increasePlayerPositionInRows(position)
    {
        // Increasing the values of player's position makes it falling to the ground.

        var newPosition = [];

        position.forEach(element => {
            newPosition.push(element + 1);
        });

        return newPosition;
    }


    static isPlayerOnGround()
    {
        return JSON.stringify(Player.playerPositionOnGround) == JSON.stringify(Player.playerPositionInRows);
    }
}