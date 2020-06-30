const rotateLeft = (a,d) => {
    for(let i=0 ; i<d ; i++){
        let ele = a.shift()
        a.push(ele)
    }
    return a
}

console.log(rotateLeft([1, 2, 3, 4, 5],4))