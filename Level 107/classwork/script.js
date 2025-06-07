


function calculateSumAndProduct(first, second, ...rest) {
    console.log("Multiple:", first * second); 
    console.log("Sum:", rest.reduce((sum, num) => sum + num, 0)); 
}

calculateSumAndProduct(3, 4, 5, 6, 7, 8);