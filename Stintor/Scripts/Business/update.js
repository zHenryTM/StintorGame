import { paintPlayerOnScreenMatrix } from "./../Interface/paintPlayerOnScreenMatrix.js";
import { paintGroundAndSkyOnScreenMatrix } from "../Interface/paintGroundAndSkyOnScreenMatrix.js";


// update is called 60 frames per second
export function update()
{
    paintGroundAndSkyOnScreenMatrix();
    paintPlayerOnScreenMatrix();

    requestAnimationFrame(update);
}