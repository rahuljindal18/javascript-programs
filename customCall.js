Function.prototype.myNewCall = function(newThis){
    newThis.fnName = this
    var args = []

    for(var i=1,len=arguments.length; i<len; i++){
        args.push("arguments[" + i + "]")
    }

    eval("newThis.fnName(" + args + ")")
}


function printMsg(salutation,msg){
    console.log(msg + ' ' + salutation + ' ' + this.name)
}

var obj = {name:'rahul jindal'}

printMsg.myNewCall(obj,"Mr.","Hello")