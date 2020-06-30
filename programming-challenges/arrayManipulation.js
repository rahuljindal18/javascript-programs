const arrayManipulation = (n,queries) => {
    let arr = new Array(n).fill(0)
    queries.forEach(([a,b,k]) => {
        let i = a;
        while(i<=b){
            arr[i-1] = arr[i-1] + k
            i++
        }
        
    })
    console.log(arr)
    return Math.max(...arr)
}

console.log(arrayManipulation(10,[[1,5,3],[4,8,7],[6,9,1]]))