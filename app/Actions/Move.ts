class MoveAction extends GameAction 
{
    targetCell : Point2D;

    constructor(targetCell : Point2D)
    {
        super("MOVE");
        this.targetCell = targetCell;
    }

    toString()
    {
        return "MOVE "+this.targetCell.x+" "+this.targetCell.y;
    }
}