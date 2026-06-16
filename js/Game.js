import { collision, keys } from './Utils.js';
import { Object } from './Object.js';
export class Game {
    constructor({}) {}
    update({ deltaTime }) {}
    drawFrame({ctx}) {}
    render({ ctx, deltaTime }) {
        this.update({ deltaTime });
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        this.drawFrame({ ctx });
        for (const key in keys) if (keys[key].released) keys[key].released = false;
    }
}

console.log('Log "./js/Game.js"');