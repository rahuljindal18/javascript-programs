// Program to check if given array is unique or not

const isArrayUnique = (arr) => {
    let cache = {}
    let result = true
    for(let i=0;i<arr.length;i++){
        if(cache[arr[i]]){
            result = false
        }
        else{
            cache[arr[i]] = true
        }
    }
    console.log(cache)
    return result
}

console.log(isArrayUnique([1,2,3,4])) //true
console.log(isArrayUnique([22,33,11,22])) //false
console.log(isArrayUnique(["asda","dsd","adsd"])) // true
console.log(isArrayUnique([[1],[1,2],[1,2,3]])) // true
