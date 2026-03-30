// 1. Variable number of function arguments

function sum(...number){
    return number.reduce( (acu,curr)=>{
        return acu + curr
    },0)
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20, 30, 40)); // 100

//2. Separate first value + rest

function print(first,...b){
    console.log(first);
    console.log(...b);
}

print("a", "b", "c", "d");
