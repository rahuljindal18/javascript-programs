const makingAnagrams = (a,b) => {
    let alphabet=[];  
    for (let i = 0; i < 26; i++){  
         alphabet.push(0);
    }
    
    for (let i = 0; i < a.length; i++){  
        let alphaIndex = a.charCodeAt(i) - "a".charCodeAt(0);
        alphabet[alphaIndex] += 1;
    }
    
    for (let i = 0; i < b.length; i++){  
        let alphaIndex = b.charCodeAt(i) - "a".charCodeAt(0);
        alphabet[alphaIndex] -= 1;
    }
    
    let tally = 0;  
    for (let i = 0; i < alphabet.length; i++){
        tally += Math.abs(alphabet[i]);
    }

    return tally
}

console.log(makingAnagrams("cde","abc"))