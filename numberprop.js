let n = 16;

if (n % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}

if (n > 0) {
    console.log("Positive");
} else if (n < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

if (n % 4 === 0) {
    console.log("Divisible by 4");
} else {
    console.log("Not divisible by 4");
}

let sqrt = Math.sqrt(n);

if (Number.isInteger(sqrt)) {
    console.log("Perfect square");
} else {
    console.log("Not a perfect square");
}