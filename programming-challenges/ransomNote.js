const checkMagazine = (magazine, note) => {
    const customSplit = (str, delimiter) => {
        var stringArray = [''];
        var j = 0;

        for (var i = 0; i < str.length; i++) {
            if (str[i] == delimiter) {
                j++;
                stringArray.push('');
            } else {
                stringArray[j] += str[i];
            }
        }
        return stringArray;
    }
    let magArr = customSplit(magazine, ' ')
    let magObj = {}
    for (let i = 0; i < magArr.length; i++) {
        if (magObj[magArr[i]]) {
            magObj[magArr[i]] = magObj[magArr[i]] + 1
        }
        else {
            magObj[magArr[i]] = 1
        }
    }
    let noteArr = customSplit(note, ' ')
    let noteObj = {}
    let flag = ''
    for (let i = 0; i < noteArr.length; i++) {
        if (noteObj[noteArr[i]]) {
            noteObj[noteArr[i]] = noteObj[noteArr[i]] + 1
        }
        else {
            noteObj[noteArr[i]] = 1
        }
    }
    for (let i = 0; i < noteArr.length; i++) {
        if (magObj[noteArr[i]]) {
            if (magObj[noteArr[i]] === noteObj[noteArr[i]]) {
                flag = 'Yes'
                continue
            }
            else {
                flag = 'No'
                break
            }
        }
        else {
            flag = 'No'
            break
        }
    }

    console.log(flag)

}

console.log(checkMagazine("give me one grand today night","give one grand today"))