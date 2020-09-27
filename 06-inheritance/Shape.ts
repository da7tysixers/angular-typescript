export class Shape{

    constructor(private _x: number, private _y: number){}

    // acessors to getters and setters
    public get y(): number {
        return this._y;
    }
    public set y(value: number) {
        this._y = value;
    }

    
    public get x(): number {
        return this._x;
    }
    public set x(value: number) {
        this._x = value;
    }


    getInfo(): string{
        return `the x= ${this._x} the y= ${this._y}`;
    }
   
}