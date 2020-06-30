//Listener.js


const updater = require('./updater')

updater.on('junk',(junkArr,ele) => {
    junkArr.push(ele) 
})

module.exports = {
    listener : updater
}