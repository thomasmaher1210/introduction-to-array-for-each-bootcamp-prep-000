function changeCompletely(element, index, array){
  array[index] = `Hey, I'm a ${element}`
}
function doToElementsInArray(array, callback){
  array.forEach(callback)
}
