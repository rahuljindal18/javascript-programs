// Program is to take an array and ignore the duplicates in array if any and return the sorted unique array 

const uniqueSort = (arr) => {
    let cache = {}
    let result = []
    for(let i=0;i<arr.length;i++){
        if(!cache[arr[i]]){
            result.push(arr[i])
            cache[arr[i]] = true
        
        }
    }
    result.sort((a,b) => a-b)
    console.log(cache)
    return result
}

console.log(uniqueSort([3,2,1,2,5,1]))
console.log(uniqueSort(["sda","ws","sd","lk","ws"]))
console.log(uniqueSort([2,2,1,2,5,1])) 
console.log(uniqueSort(["sd","ws","sd","lk","ws"])) 