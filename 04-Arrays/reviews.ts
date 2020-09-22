let reviews: number[] = [5, 5, 4.6, 1, 3];


let sum: number = 0;

for (let index = 0; index < reviews.length; index++) {
    sum+= reviews[index];   
}

let average: number = sum / reviews.length;
console.log(`Result average = ${average}`);