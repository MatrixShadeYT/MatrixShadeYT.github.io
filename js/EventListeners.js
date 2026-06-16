import { mousePosition, keys, resizeCanvas } from "./Utils.js";
export const mouseMap = ["MouseLeft", "MouseMiddle", "MouseRight"];

export function resize(e) {
    const canvas = document.querySelector("canvas");
    resizeCanvas({ canvas })
}

export function keyUp(e) {
    const key = e.code;
    if (keys[key]) {
        e.preventDefault();
        keys[key].pressed = false;
        keys[key].released = true;
    }
}

export function keyDown(e) {
    const key = e.code;
    if (keys[key]) {
        e.preventDefault();
        keys[key].pressed = true;
    }
}

export function mouseMove(e) {
    const canvas = document.querySelector("canvas");
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mousePosition.x = ((e.clientX - rect.left) / rect.width) * canvas.width;
    mousePosition.y = ((e.clientY - rect.top) / rect.height) * canvas.height;
    mousePosition.x = Math.max(0, Math.min(canvas.width, mousePosition.x));
    mousePosition.y = Math.max(0, Math.min(canvas.height, mousePosition.y));
}

export function mouseDown(e) {
    const key = mouseMap[e.button];
    if (!keys[key]) return
    if (key && keys[key]) keys[key].pressed = true;
}

export function mouseUp(e) {
    const key = mouseMap[e.button];
    if (!keys[key]) return
    if (key && keys[key]) {
        keys[key].pressed = false;
        keys[key].released = true;
    }
}

window.addEventListener('contextmenu', (e) => e.preventDefault());
window.addEventListener('resize', resize);
window.addEventListener('keyup', keyUp);
window.addEventListener('keydown', keyDown);
window.addEventListener('mousemove', mouseMove);
window.addEventListener('mousedown', mouseDown);
window.addEventListener('mouseup', mouseUp);

console.log('Log "./js/EventListeners.js"');