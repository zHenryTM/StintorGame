import { generateScreenMatrix } from "./../Interface/generateScreenMatrix.js";
import { update } from "./update.js";


// Start is called before the first frame update
function start()
{
    generateScreenMatrix();
    
    requestAnimationFrame(update);
}


window.onload = () =>
{
    start();
}