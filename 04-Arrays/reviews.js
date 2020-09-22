var reviews = [5, 5, 4.6, 1, 3];
var sum = 0;
for (var index = 0; index < reviews.length; index++) {
    sum += reviews[index];
}
var average = sum / reviews.length;
console.log("Result average = " + average);
