var chocolateBars = ["snickers", "hundred grand","kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
return  [element, ...array];
  
}


function destructivelyAddElementToBeginningOfArray(array, element){
 array.unshift(element);
 return array
}



function addElementToEndOfArray(array, element){
return [...array, element] ; 
}



function destructivelyAddElementToEndOfArray(array, element){
array.push(element);
return array
  
}

function accessElementInArray(array, index){
<<<<<<< HEAD
return array[1,2,3,2];

}

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift([1,2,3]);
  return array
}

function removeElementFromBeginningOfArray(array){
return array.slice(1);
}


function destructivelyRemoveElementFromEndOfArray(array){
array.pop([1,2,3]);
return array
}


function removeElementFromEndOfArray(array){
return array.slice(0,array.length-1);


}







=======
  return element[0];
}


>>>>>>> 7c2dcf2426a25974fcecc61cf047a92ab015a930

