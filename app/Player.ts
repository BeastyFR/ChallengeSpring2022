class Player
{
    id : number;
    health : number;
    mana : number;
    heroes : Hero[];

    constructor(id: number, h : number, m : number)
    {
        this.id = id;
        this.health = h;
        this.mana = m;
    }

    updateStats(h, m)
    {
        this.health = h;
        this.mana = m;
    }

    updateHero(id : number, x : number, y : number, shieldLife : number, isControlled : number)
    {
        if(this.heroes[id] == undefined)
        {
            this.heroes[id] = new Hero(id,x,y,shieldLife,isControlled);
        }
        else
        {
            this.heroes[id].updateHero(x,y,shieldLife,isControlled);
        }
    }

    evaluateActionForHero(idHero : number)
    {
        //TODO
        return new MoveAction(new Point2D(0,0));
    }

}