/* 

Sample Input
5
2 1 5 3 4
5
2 5 1 3 4

output
3
too chaotic
*/

const minimumBribes = (q) => {
    let bribes = 0;
    for (let i = (q.length - 1); i >= 0; i--) {
        if (q[i] !== i + 1) {
            if (i - 1 >= 0 && q[i - 1] === i + 1) {
                bribes++
                q[i - 1] = q[i]
                q[i] = i + 1
            }
            else if (i - 2 >= 0 && q[i - 2] === i + 1) {
                bribes = bribes + 2
                q[i - 2] = q[i - 1]
                q[i - 1] = q[i]
                q[i] = i + 1
            }
            else {
                
                //
            }
        }
    }
    if(bribes>2){
        console.log('Too chaotic')
        console.log(bribes)
    }
    return bribes
}

console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]))