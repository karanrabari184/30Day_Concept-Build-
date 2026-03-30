/*
🔥 Level 1 (Basic — warm up your brain)
1.
[1, 2, 3, 4, 5, 6]
→ get even numbers
// [2, 4, 6]
*/

const number = [1, 2, 3, 4, 5, 6]
const result = number.filter( (e)=>{
    return e%2==0
})
console.log(result);

/*
2.
[10, 25, 30, 5, 60]
→ get numbers greater than 20
// [25, 30, 60]
*/

const num= [10, 25, 30, 5, 60]
const Great20 = num.filter(e => e>20)
console.log(Great20);

/*
3.
["karan", "jay", "rahul", "ab"]
→ get names with length > 3
// ["karan", "rahul"]
*/

const names =["karan", "jay", "rahul", "ab"]
const Great3 = names.filter( e => e.length>3)
console.log(Great3);
 

/*
⚡ Level 2 (Now don’t be lazy)
4.
[
  { name: "karan", age: 21 },
  { name: "rahul", age: 17 },
  { name: "jay", age: 25 }
]
→ get users age >= 18
*/

const user = [
  { name: "karan", age: 21 },
  { name: "rahul", age: 17 },
  { name: "jay", age: 25 }
]

const Age18 = user.filter(e => e.age>=18) 
console.log(Age18);


/*
5.
[5, 12, 8, 130, 44]
→ remove numbers less than 10
// [12, 130, 44]
*/

const remove_num=[5, 12, 8, 130, 44]
const less10 = remove_num.filter(e => e>10)
console.log("Greater then 10: ",less10);

/*
6.
[
  { product: "pen", price: 10 },
  { product: "book", price: 50 },
  { product: "bag", price: 100 }
]
→ get products with price >= 50
*/

const items=[
  { product: "pen", price: 10 },
  { product: "book", price: 50 },
  { product: "bag", price: 100 }
]

const Price50 = items.filter(e =>e.price>=50)
console.log(Price50);

/*
🧠 Level 3 (Now real thinking starts)
7.
["apple", "", "banana", null, "mango", undefined]
→ remove all falsy values
// ["apple", "banana", "mango"]

👉 If you don’t know falsy → you’re weak in JS basics.
*/
//  🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥  //Need To practice this


const falsy=["apple", "", "banana", null, "mango", undefined]
const remove_fasly = falsy.filter(Boolean)
console.log(remove_fasly);


/*
8.
[
  { name: "karan", marks: 80 },
  { name: "jay", marks: 35 },
  { name: "rahul", marks: 60 }
]
→ get students who passed (marks >= 40)
*/

const userData = [
  { name: "karan", marks: 80 },
  { name: "jay", marks: 35 },
  { name: "rahul", marks: 60 }
]

const students = userData.filter(e => e.marks>=40)
console.log(students);

/*
9.
[1, 2, 3, 4, 5, 6]
→ get numbers divisible by both 2 and 3
// [6]
*/

const number1 = [1, 2, 3, 4, 5, 6]
const divide_by = number1.filter(e  => e%2==0 && e%3==0)
console.log(divide_by);

/*
🧨 Level 4 (Interview-level filtering)
10.
[
  { name: "karan", active: true },
  { name: "jay", active: false },
  { name: "rahul", active: true }
]
→ return only active users' names
// ["karan", "rahul"]

👉 You’ll need:

filter
map combo
*/

//  🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥  //Need To practice this

const Developer =[
  { name: "karan", active: true },
  { name: "jay", active: false },
  { name: "rahul", active: true }
]

const active_user = Developer
                    .filter(Developer => Developer.active)
                    .map(Developer =>Developer.name)

console.log(active_user);                    