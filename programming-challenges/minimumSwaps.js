const minimumSwaps = (arr) => {
    var counter = 0;

   for (var i = arr.length; i > 0; i--) {
      var minval = Math.min(...arr); 
      var minIndex = arr.indexOf(minval);
      if (minval !== arr[0]) {
         var temp = arr[0];
         arr[0] = arr[minIndex];
         arr[minIndex] = temp; 
         arr.splice(0, 1);
         counter++;
      }
      else {
         arr.splice(0, 1); 
      }

   } 
   return counter;
}

console.log(minimumSwaps([1, 3, 5, 2, 4, 6, 7]))
