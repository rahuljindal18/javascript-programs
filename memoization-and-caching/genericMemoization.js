// write a program to pass generic function to the memoized using closures

const memoized = (cb) => {
    let cache = {}
    return (n) => {
        if(n in cache){
            console.log('Fetching from cache',n)
            return cache[n]
        }
        else{
            console.log('Calculating the result')
            let result = cb(n)
            cache[n] = result
            return result
        }
    }
}

const memoized10 = memoized((n) => n*10)
console.log(memoized10(9))
console.log(memoized10(9))
console.log(memoized10(3))
console.log(memoized10(3))