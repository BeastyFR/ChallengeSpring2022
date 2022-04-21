/// <reference path="../util/Util.ts" />
/// <reference path="../util/Log.ts" />
/// <reference path="./Actions/GameAction.ts" />
/// <reference path="./Actions/Move.ts" />
/// <reference path="./Player.ts" />
/// <reference path="./Entity.ts" />
/// <reference path="./Hero.ts" />
/// <reference path="./Monster.ts" />

/// <reference path="./Game.ts" />

declare var readline: any

Log.debugEnable = true;
Log.debugLevel = LogLevel.Light;

let data = {};

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

 var inputs = readline().split(' ');
 const baseX = parseInt(inputs[0]); // The corner of the map representing your base
 const baseY = parseInt(inputs[1]);
 const heroesPerPlayer = parseInt(readline()); // Always 3

 let game = new Game(baseX, baseY, heroesPerPlayer);

 // game loop
 while (true) {

    for (let i = 0; i < 2; i++) {
        var inputs = readline().split(' ');
        const health = parseInt(inputs[0]); // Your base health
        const mana = parseInt(inputs[1]); // Ignore in the first league; Spend ten mana to cast a spell
        game.updatePlayer(i,health, mana);
    }

   
     const entityCount = parseInt(readline()); // Amount of heros and monsters you can see
     for (let i = 0; i < entityCount; i++) {
         var inputs = readline().split(' ');
         const id = parseInt(inputs[0]); // Unique identifier
         const type = parseInt(inputs[1]); // 0=monster, 1=your hero, 2=opponent hero
         const x = parseInt(inputs[2]); // Position of this entity
         const y = parseInt(inputs[3]);
         const shieldLife = parseInt(inputs[4]); // Ignore for this league; Count down until shield spell fades
         const isControlled = parseInt(inputs[5]); // Ignore for this league; Equals 1 when this entity is under a control spell
         const health = parseInt(inputs[6]); // Remaining health of this monster
         const vx = parseInt(inputs[7]); // Trajectory of this monster
         const vy = parseInt(inputs[8]);
         const nearBase = parseInt(inputs[9]); // 0=monster with no target yet, 1=monster targeting a base
         const threatFor = parseInt(inputs[10]); // Given this monster's trajectory, is it a threat to 1=your base, 2=your opponent's base, 0=neither
         game.updateEntity(id,type,x,y,shieldLife,isControlled,health,vx,vy,nearBase,threatFor);
     }


     for (let i = 0; i < heroesPerPlayer; i++) {
 
        let action : GameAction = game.evaluate(i);
        console.log(action.toString());

         // Write an action using console.log()
         // To debug: console.error('Debug messages...');
 
 
         // In the first league: MOVE <x> <y> | WAIT; In later leagues: | SPELL <spellParams>;
         console.log('WAIT');
     }
 }


