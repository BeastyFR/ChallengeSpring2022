class Monster {
    id : number;
    x : number;
    y : number;
    shieldLife : number;
    isControlled : number;
    health : number;
    vx : number;
    vy : number; 
    nearBase : number;
    threatFor : number;

    constructor(id : number, x : number, y : number, shieldLife : number, isControlled : number, health : number, vx : number, vy : number, nearBase : number, threatFor : number)
    {
        this.id = id;
        this.x = x;
        this.y = y;
        this.shieldLife = shieldLife;
        this.isControlled = isControlled;
        this.health = health;
        this.vx = vx;
        this.vy = vy;
        this.nearBase = nearBase;
        this.threatFor = threatFor;
    }

    update(x : number, y : number, shieldLife : number, isControlled : number, health : number, vx : number, vy : number, nearBase : number, threatFor : number)
    {
        this.x = x;
        this.y = y;
        this.shieldLife = shieldLife;
        this.isControlled = isControlled;
        this.health = health;
        this.vx = vx;
        this.vy = vy;
        this.nearBase = nearBase;
        this.threatFor = threatFor;
    }
}