function iterativeLog(array){
  // array.forEach(console.log(`${index}: ${element}`));
  // apparently this isn't it. they shouldn't have "taught" callbacks and forEach at the same time.
  array.forEach((element, index, array) => { // idgi
      console.log(`${index}: ${element}`);
   });
}

function iterate(callback){
  var arrayInternal = ["not", "empty"];
  // these instructions are 202% convoluted.
  arrayInternal.forEach(callback); // BUT WHAT DOES IT DO
  return arrayInternal;
}

function doToArray (array, callback){
  array.forEach(callback);
}
