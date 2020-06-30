const flatten = (array) => {
    let newArray = []

    for(let element of array){
        if(Array.isArray(element)){
            newArray = newArray.concat(flatten(element))
        }
        else{
            newArray.push(element)
        }
    }

    return newArray
}

console.log(flatten([1,2,3,4,5]))
console.log(flatten([1,[2,3],[4,5],6,3,[23,[1,2,3]]]))
