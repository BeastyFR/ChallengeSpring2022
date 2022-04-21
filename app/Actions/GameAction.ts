abstract class GameAction {
    actionName : string;

    constructor(actionName :string)
    {
        this.actionName = actionName;
    }
    
    abstract toString();
}