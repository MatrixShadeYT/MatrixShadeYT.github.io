export class Object {
    constructor({ height, width, position, velocity, hitbox, color }) {
        this.height = height ?? 1;
        this.width = width ?? 1;
        this.position = position ?? {x:0,y:0};
        this.velocity = velocity ?? {x:0,y:0};
        this.hitbox = hitbox ?? {x:0,y:0,w:this.width,h:this.height};
        this.color = color ?? "white";
    }
    update({ deltaTime }) {
        this.position.x += this.velocity.x * deltaTime;
        this.position.y += this.velocity.y * deltaTime;
    }
    drawFrame({ ctx }) {
        ctx.fillStyle = `${this.color}`;
        ctx.fillRect(this.position.x,this.position.y,this.width,this.height);
    }
}