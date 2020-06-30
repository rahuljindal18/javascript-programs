// John works at a clothing store. He has a large pile of socks that he must pair by color for sale. 
// Given an array of integers representing the color of each sock, determine how many pairs
//Sample Input : 9 ,10 20 20 10 10 30 50 10 20
//Sample Output  : 3

//approach : maintain a object with key value pair for each unique color

const sockMerchant = (n,arr) => {
    let dictionary = {}
    let pairs = 0;
    for(let i=0 ; i<arr.length; i++){
        if(dictionary[arr[i]]){
            dictionary[arr[i]] = dictionary[arr[i]] + 1
        }
        else{
            dictionary[arr[i]] = 1
        }
    }
    for(let key in dictionary){
        pairs = pairs + Math.floor(dictionary[key]/2)
    }
    return pairs
}

console.log(sockMerchant(9,[10, 20, 20, 10, 10, 30, 50, 10, 20]))