"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myShape = new Shape_1.Shape(22, 23);
var myCircle = new Circle_1.Circle(5, 10, 20);
var myRectangle = new Rectangle_1.Rectangle(0, 0, 3, 7);
var arrOfShapes = [];
arrOfShapes.push(myShape);
arrOfShapes.push(myCircle);
arrOfShapes.push(myRectangle);
for (var _i = 0, arrOfShapes_1 = arrOfShapes; _i < arrOfShapes_1.length; _i++) {
    var shapes = arrOfShapes_1[_i];
    console.log(shapes.getInfo());
}
