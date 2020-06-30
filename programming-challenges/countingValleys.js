/* 

Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography. 
During his last hike he took exactly  steps. For every step he took, he noted if it was an uphill, , or a downhill,  step.
 Gary's hikes start and end at sea level and each step up or down represents a  unit change in altitude. 
 We define the following terms:
A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
Sample input 
8
UDDDUDUU
sample output
1
If we represent _ as sea level, a step up as /, and a step down as \, Gary's hike can be drawn as:
_/\      _
   \    /
    \/\/


UUDD

*/

const countingValleys = (n,s) => {
    let count = 0;
    let sum = 0;
    for(let i=0;i<n;i++){
        if(s[i]=='U'){
            sum++
          if(sum==0)
            count++;
        }
        else sum--;
      }
      return count;
}
const countingMountains = (n,s) => {
    let count = 0;
    let sum = 0;
    for(let i=0;i<n;i++){
        if(s[i]=='U'){
            sum++
        }
        else {
            sum--;
            if(sum === 0){
                count++
            }
        }
      }
      return count;
}

console.log(countingValleys(8,'UUDDDDUU'))

console.log(countingMountains(8,'UUDDDDUU'))
