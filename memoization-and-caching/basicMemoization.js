// write a function, times10 , that takes an argument ,n, and multiplies n times 10

const times10 = (n) => n*10

const cache = {}

const memoTimes10 = (n) => {
    if(n in cache){
        console.log('Fetching from cache',n)
        return cache[n]
    }
    else{
        console.log('Calculating the result',n)
        let result = times10(n)
        cache[n] = result
        return result
    }
}

console.log(memoTimes10(8))
console.log(memoTimes10(8))