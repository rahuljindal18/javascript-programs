const twoStrings = (s1, s2) => {
    let obj = {}
    let flag = 'NO'
    let temp = ''
    if (s2.length > s1.length) {
        temp = s1
        s1 = s2
        s2 = temp
    }

    for (let i = 0; i < s1.length; i++) {
        if (!obj[s1[i]]) {
            obj[s1[i]] = true
        }
    }

    for (let i = 0; i < s2.length; i++) {
        if (obj[s2[i]]) {
            flag = 'YES'
            break
        }
        else {
            continue
        }
    }
    return flag

}

console.log(twoStrings("hello","world"))