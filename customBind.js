Function.prototype.customBind = function(newThis){
    if(typeof this !== "function"){
        throw new Error(this + "is not a function")
    }

    var originalFunc = this
    var initialArgs = Array.prototype.slice.call(arguments,1)

    return function newFunc(){
        var boundArgs = Array.prototype.slice.call(arguments)
        return originalFunc.apply(
            newThis,
            initialArgs.concat(boundArgs)
        )
    }
}

function fullname(fname){
    console.log(`${fname} ${this.lname}`)
}

var obj = {lname:'sdfs'}

var boundNewFunc = fullname.customBind(obj)
boundNewFunc("sadfsdfsdf")


"asfsdfs".customBind(obj)