const loopNtimes = (n) => {
    console.log("n===",n)
    if(n<=1){
        return 'complete'
    }
    else {
        return loopNtimes(n-1)
    }
}

console.log(loopNtimes(3))