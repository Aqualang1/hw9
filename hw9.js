function sum() {
    let num = 0;
    return function(arg){
        num += arg;
        return num;
    }
}

let getSum = sum();

// console.log(getSum(10));
// console.log(getSum(1));
// console.log(getSum(20));