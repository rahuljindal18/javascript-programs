const isValid = (s) => {
    let list = {};
    for (let i = 0; i < s.length; i++) {
        if (s[i] in list) {
        list[s[i]] += 1;
        } else {
        list[s[i]] = 1;
        }
    }
    
    let frequency = [];
    let lastIneq;
    let keys = Object.keys(list);
    for (let i = 0; i < keys.length; i++) {
        frequency.push(list[keys[i]]);
    }

    let difference = (Math.max(...frequency) - Math.min(...frequency))
    let count=0;
    for (let i = 1; i < frequency.length; i++) {
        if (frequency[0] !== frequency[i]) {
        count ++;
        lastIneq = i;
        }
    }
    if(count <= 1){
        if(frequency[lastIneq] == 1 || difference <= 1){
        return "YES";
        }
        else{
        return "NO"
        }
    }
    else{
        return "NO";
    }
}

console.log(isValid('a'))