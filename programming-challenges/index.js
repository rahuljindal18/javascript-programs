// index.js

// arr[1,2,3,,,,'a',,,,]

// receives junk data


// listener.js
//     at each junk data listener is notified
//     at done of listener collect all the junk data and send back to index.js

// updater.js
//     process data, remove junk, kepp only numbers , no new local array work on original array
//     at the end notify listener to be done

const updater = require('./updater')

let obj = new updater(arr)

