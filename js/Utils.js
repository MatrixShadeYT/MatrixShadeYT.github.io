export const keys = Object.fromEntries([].map(key => [key, { pressed: false, released: false }]));
export const mousePosition = { x: 0, y: 0 }

export function resizeCanvas({ canvas }) {
    let ratioCanvas = 1;
    let widthCanvas = window.innerWidth * ratioCanvas;
    let heightCanvas = widthCanvas * (9 / 16);
    if (heightCanvas > window.innerHeight * ratioCanvas) {
        heightCanvas = window.innerHeight * ratioCanvas
        widthCanvas = heightCanvas * (16 / 9);
    }
    canvas.style.height = `${heightCanvas}px`;
    canvas.style.width = `${widthCanvas}px`;
}

export function collision([obj1,obj2]) {
    return (
            obj1.position.x < obj2.position.x + obj2.width &&
            obj1.position.x + obj1.width > obj2.position.x &&
            obj1.position.y < obj2.position.y + obj2.height &&
            obj1.position.y + obj1.height > obj2.position.y
        )
}

console.log('Log "./js/Utils.js"');