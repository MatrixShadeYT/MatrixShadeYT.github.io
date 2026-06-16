import * as Utils from './Utils.js';
import { Game } from './Game.js';
export const canvas = document.querySelector('canvas');
export const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;
canvas.height = 720;
canvas.width = 1280;
Utils.resizeCanvas({canvas});
export const game = new Game({
    "tileSize": 32
});

let lastTime;
import './EventListeners.js';
function animate(timeStamp) {
    window.requestAnimationFrame(animate);
    lastTime = lastTime ?? timeStamp;
    const deltaTime = Math.min((timeStamp - lastTime) / 1000, 0.1);
    lastTime = timeStamp;
    game.render({ ctx, deltaTime });
}
window.requestAnimationFrame(animate);

console.log('Log "./js/Main.js"');