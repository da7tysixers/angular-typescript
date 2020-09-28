import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";


let myCircle = new Circle(5, 10, 20);
let myRectangle = new Rectangle(0, 0, 3, 7);

let arrOfShapes: Shape[] = [];

// add the shapes to an array
arrOfShapes.push(myCircle);
arrOfShapes.push(myRectangle);


for(let shapes of arrOfShapes){
    console.log(shapes.getInfo());
    console.log(shapes.calculateArea());
    console.log("\n");
}


