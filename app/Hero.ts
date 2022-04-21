class Hero {
    id : number;
    x : number;
    y : number;
    shieldLife : number;
    isControlled : number

    constructor(id : number, x : number,y : number,shieldLife : number,isControlled : number)
    {
        this.id = id;
        this.x = x;
        this.y = y;
        this.shieldLife = shieldLife;
        this.isControlled = isControlled;
    }

    updateHero(x : number,y : number,shieldLife : number,isControlled : number)
    {
        this.x = x;
        this.y = y;
        this.shieldLife = shieldLife;
        this.isControlled = isControlled;
    }
}