/*

Emma is playing a new mobile game that starts with consecutively numbered clouds. 
Some of the clouds are thunderheads and others are cumulus. 
She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  or . 
She must avoid the thunderheads. 
Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud. 
It is always possible to win the game.

Sample input

7
0 0 1 0 0 1 0

output 
4

sample input 
6
0 0 0 0 1 0

output
3

*/

const jumpingOnClouds = (c) => {
    let jumps = 0;
    let currentPos = 0;
    let n = c.length
    
    for(currentPos=0;currentPos<n-2;currentPos++){
        if (c[currentPos+2]==0){
            currentPos++;
            jumps++;
            continue;
        }
        jumps++;
    }
    if(currentPos<n-1)
        jumps++;
    
    return jumps
}

console.log(jumpingOnClouds([0,0,1,0,0,1,0]))

