// const chunkArray = (array,size) => {
//     const chunked = []

//     for(let element of array){
//         let last = chunked[chunked.length-1]
//         if(!last || last.length === size){
//             chunked.push([element])
//         }
//         else{
//             last.push(element)
//         }
//     }

//     return chunked
// }

const chunkArray = (array,size) => {
    const chunked = []
    let index = 0
    while(index < array.length){
        chunked.push(array.slice(index,index+size))
        index += size
    }

    return chunked
}

console.log(chunkArray([1,2,3,4,5,6,7,8,9,0],1))
console.log(chunkArray([1,2,3,4,5,6,7,8,9,0],2))
console.log(chunkArray([1,2,3,4,5,6,7,8,9,0],3))
console.log(chunkArray([1,2,3,4,5,6,7,8,9,0],4))
console.log(chunkArray([1,2,3,4,5,6,7,8,9,0],5))
console.log(chunkArray(['a','b','c','d','e','f','g'],5))