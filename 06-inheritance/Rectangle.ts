import { Shape } from "./Shape";

class Rectangle extends Shape{

    constructor(theX: number, theY: number,
        private numX: number, private numY: number){
                super(theX, theY);
        }



    getInfo(): string{
        return `this is x= ${this.numX} and y= ${this.numY}`
    }
}