/*
🔥 Level 1 (Basic — if you mess this up, restart JS)
1.
["karan", "jay", "rahul"]
→ capitalize first letter
// ["Karan", "Jay", "Rahul"]
*/

//  🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥  //Need To practice this

const names = ["karan", "jay", "rahul"]

const result = names.map( (e)=>{
  return  e.charAt(0).toUpperCase() + e.slice(1)
})
console.log(result);


/*
2.
[1, 2, 3, 4]
→ square each number
// [1, 4, 9, 16]
*/

const num= [1, 2, 3, 4]

const square = num.map( (e)=>{
    return e * e
})
console.log(square);


/*
3.
[10, 20, 30]
→ convert to strings with "₹"
// ["₹10", "₹20", "₹30"]
*/

const Add = [10, 20, 30]

const output = Add.map( (e)=>{
    return "₹"+e
})
console.log(output);


/*
⚡ Level 2 (Now use your brain properly)
4.
["apple", "banana", "mango"]
→ return length of each word
// [5, 6, 5]
*/

const fruit = ["apple", "banana", "mango"]

const length =fruit.map( (e)=>{
    return e.length
})
console.log(length);

/*
5.
[1, 2, 3, 4]
→ return "even" or "odd"
// ["odd", "even", "odd", "even"]
*/

const nums = [1, 2, 3, 4]

const odd_Even = nums.map( (e)=>{
    return e % 2 == 0 ? "even" : "odd"
}) 
console.log(odd_Even);


/*
6.
[
  { name: "karan", age: 21 },
  { name: "rahul", age: 25 }
]
→ extract only names
// ["karan", "rahul"]
*/

const user = [
  { name: "karan", age: 21 },
  { name: "rahul", age: 25 }
]

const extract_name = user.map( (e)=>{
    return e.name
})
console.log(extract_name)

/*
🧠 Level 3 (Real dev thinking starts here)
7.
[
  { product: "pen", price: 10 },
  { product: "book", price: 50 }
]
→ add 10% tax to price
// [{product:"pen", price:11}, {product:"book", price:55}]
*/
//  🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥  //Need To practice this

const items = [
  { product: "pen", price: 10 },
  { product: "book", price: 50 }
]
const tax = 10
const bill = items.map( (e)=>{
    const tax_val= e.price * tax /100
    return {
        product : e.product,
        price : e.price + tax_val
    }
})
console.log(bill);


/*
8.
["hello world", "good morning"]
→ capitalize each word
// ["Hello World", "Good Morning"]

👉 Hint: split → map → join
*/
//  🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥  //Need To practice this

const greet=["hello world", "good morning"]
const capitalize = greet.map( (e)=>{

return e
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")

})
console.log(capitalize);


/*
9.
[1, 2, 3]
→ convert into objects
// [{value:1}, {value:2}, {value:3}]
*/
//  🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥  //Need To practice this


const covert = [1, 2, 3]
const output1 = covert.map((e)=>{
    return {value: e}
    
})
console.log(output1);


/*
🧨 Level 4 (Interview-level thinking)
10.
[
  { name: "karan", marks: [80, 90] },
  { name: "jay", marks: [70, 60] }
]
→ calculate total marks per student
// [{name:"karan", total:170}, {name:"jay", total:130}]

👉 Hint: map + reduce combo
*/
//  🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥  //Need To practice this


const user_Data = [
  { name: "karan", marks: [80, 90] },
  { name: "jay", marks: [70, 60] }
]

const FinalMarks = user_Data.map( (e)=>{
  const sum= e.marks.reduce( (total,current)=>{
        return total+current
    },0)
    
    return {
        name: e.name,
        marks:sum
    }

})

console.log(FinalMarks);

/*

const some = [1,2,3,4]

const sum= some.reduce( (total,current)=>{
    return total + current
},0)
console.log(sum);
*/