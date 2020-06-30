//Updater.js

const updater = (arr) => {
    let emitter = new EventEmitter();
    let junkArr = [];
    arr.forEach(function(element, index) {
        if(!(typeof element === "number")){
            let junkEle = arr.splice(index, 1);

            emitter.emit('junk', junkArr, junkEle);
        }
      }, arr);
    
    return emitter;  
}

module.exports = {
    updater
}