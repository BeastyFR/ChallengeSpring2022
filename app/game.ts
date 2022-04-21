class Game {
  basePosition : Point2D;
  nbHeroes : number;
  players : Player[];
  monsters : Monster[];

	constructor(baseX : number, baseY : number, heroesPerPlayer : number) 
  {
    this.basePosition = new Point2D(baseX, baseY);
    this.nbHeroes = heroesPerPlayer;
  }

  //#region UPDATE LOOP
  updatePlayer(id : number, health : number, mana : number)
  {
    if(this.players[id] == undefined)
    {
      this.players[id] = new Player(id, health, mana);
    }
    else
    {
      this.players[id].updateStats(health,mana);
    }
  }

  updateMonster(id : number, x : number, y : number, shieldLife : number, isControlled : number, health : number, vx : number, vy : number, nearBase : number, threatFor : number)
    {
        if(this.monsters[id] == undefined)
        {
            this.monsters[id] = new Monster(id,x,y,shieldLife,isControlled,health,vx,vy,nearBase,threatFor);
        }
        else
        {
            this.monsters[id].update(x,y,shieldLife,isControlled,health,vx,vy,nearBase,threatFor);
        }
    }

  updateEntity(id : number,type : number,x : number,y : number,shieldLife : number,isControlled : number,health : number,vx : number,vy : number,nearBase : number,threatFor : number)
  {
    if(type == 0)
    {
      this.updateMonster(id,x,y,shieldLife,isControlled,health,vx,vy,nearBase,threatFor);
    }
    else if(type == 1)
    {
      this.players[0].updateHero(id,x,y,shieldLife,isControlled);
    }
    else
    {
      this.players[1].updateHero(id,x,y,shieldLife,isControlled);
    }
  }

//#endregion UPDATE LOOP

  //#region EVALUATION
  evaluate(idHero : number) : GameAction
  {
    let action = this.players[0].evaluateActionForHero(idHero);
    return action;
  }
  //#endregion EVALUATION

  result(){
    return ;
  }
}
