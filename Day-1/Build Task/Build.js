Array.prototype.myMap=function(callback){
    const result = []
//this = Array
    for(let i=0;i<this.length;i++){
        result.push(callback(this[i],i,this))
    }

    return result
}

const arr = [1,2,3,4]

let cluster = ""
const double = arr.myMap( (num)=>{
    return num + num
})
console.log(double);

