import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(22, 23);
let myCircle = new Circle(5, 10, 20);
let myRectangle = new Rectangle(0, 0, 3, 7);

let arrOfShapes: Shape[] = [];

arrOfShapes.push(myShape);
arrOfShapes.push(myCircle);
arrOfShapes.push(myRectangle);


for(let shapes of arrOfShapes){
    console.log(shapes.getInfo());
}


