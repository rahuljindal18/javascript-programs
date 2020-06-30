const collectStrings = (obj) => {
    let strArray = []
    for(let key in obj){
        if(typeof obj[key] === "string"){
            strArray.push(obj[key])
        }
        else if(typeof obj[key] === "object" && !Array.isArray(obj[key])){
            strArray = strArray.concat(collectStrings(obj[key]))
        }
    }
    return strArray
}

const obj = {
    stuff: "foo",
    data: {
        list : "asd",
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz",
                        wehacked: "foobar"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj))