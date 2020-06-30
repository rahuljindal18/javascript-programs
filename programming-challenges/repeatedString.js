/*
Lilah has a string, , of lowercase English letters that she repeated infinitely many times.

Given an integer, , find and print the number of letter a's in the first  letters of Lilah's infinite string.

For example, if the string  and , the substring we consider is , 
the first  characters of her infinite string. There are  occurrences of a in the substring.

sample input
aba
10
output
7

sample input
a
1000000000000

ouput
1000000000000

*/

const repeatedString = (s,n) => {

    const countA = (str) => {
        return str.split('a').length-1
    }

    let length = s.length
    let strReps = Math.floor(n/length)
    let remainder = s.slice(0,n%length)
    return strReps * countA(s) + countA(remainder)


}

console.log(repeatedString('aba',12))