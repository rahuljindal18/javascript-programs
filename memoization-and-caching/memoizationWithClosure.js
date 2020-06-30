// write a function, memoizedClosureTimes10 , that takes an argument ,n, and multiplies n times 10 using the closure without using global scope

const memoizedClosureTimes10 = () => {
    let cache = {}
    return (n) => {
        if(n in cache){
            console.log('Fetching from cache',n)
            return cache[n]
        }
        else{
            console.log('Calculationg the result',n)
            let result = n * 10
            cache[n] = result
            return result
        }
    }
}

const memoClosureTimes10 = memoizedClosureTimes10()

console.log(memoClosureTimes10(9))  // calculate
console.log(memoClosureTimes10(9))  // cache  