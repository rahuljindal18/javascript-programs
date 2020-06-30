Function.prototype.bind1 = function (scope) {
    let fn = this
    let prefixArgs = Array.prototype.slice.call(arguments, 1)

    return function () {
        let suffixArgs = Array.prototype.slice.call(arguments)
        let args = prefixArgs.concat(suffixArgs)
        return fn.apply(scope, args)
    }
}

function list() {
    return Array.prototype.slice.call(arguments)
}

var leadingThirtysevenList = list.bind1(null, 37)
console.log(leadingThirtysevenList()) 