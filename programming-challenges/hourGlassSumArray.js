const maxSumHourGlass = (arr) => {
    let sumArr = []
    let rows = arr.length
    let columns = arr[0].length
    for(let i=0;i<rows-2;i++){
        for(let j=0;j<columns-2;j++){
            let sum = (arr[i][j] + arr[i][j+1] + arr[i][j+2]) + (arr[i+1][j+1]) + (arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]) 
            sumArr.push(sum)
        }
    }
    
    return Math.max(...sumArr)
}

const arr = [[1, 1, 1, 0 ,0, 0],
             [0, 1, 0, 0, 0, 0],
             [1, 1, 1, 0, 0, 0],
             [0, 0, 2, 4, 4, 0],
             [0, 0, 0, 2, 0, 0],
             [0, 0, 1, 2, 4, 0]]

console.log(maxSumHourGlass(arr))