const isEqual = (one, two) => {
    let typeOne = Object.prototype.toString.call(one)
    let typeTwo = Object.prototype.toString.call(two)
    let typeArray = ['[object Array]', '[object Object]']

    //Check if one and two are both object or array else return false
    if (typeOne !== typeTwo) return false

    let type = Object.prototype.toString.call(one)

    //If both types are not object or array return false
    if (typeArray.indexOf(type) < 0) return false

    //compare the length of one and two

    let oneLength = (type === '[object Array]' ? one.length : Object.keys(one).length)
    let twoLength = (type === '[object Array]' ? two.length : Object.keys(two).length)
    if (oneLength !== twoLength) return false

    //Compare properties
    const compare = (item1, item2) => {
        //get the object type
        let itemType = Object.prototype.toString.call(item1)

        //If an object or array compare recursively
        if (['[object Array]', '[object Object]'].indexOf(itemType) > -1) {
            if (!isEqual(item1, item2)) return false
        }
        else {
            if (itemType !== Object.prototype.toString.call(item2)) return false

            //If it is a function convert to string and compare
            //Otherwise just compare
            if (itemType === '[object Function]') {
                if (item1.toString() !== item2.toString()) return false
            }
            else {
                if (item1 !== item2) return false
            }
        }
    }

    if (type === '[object Array]') {
        for (let i = 0; i < oneLength; i++) {
            if (compare(one[i], two[i]) === false) return false
        }
    }
    else {
        for (let key in one) {
            if (one.hasOwnProperty(key)) {
                if (compare(one[key], two[key]) === false) return false
            }
        }
    }


    //if nothing failed return true

    return true

}