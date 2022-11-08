export function Board() {
}

Board.prototype.makeRow = function() {
    let array = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
    return array;
}



Board.prototype.repeatingNumbers = function(numArray) {
    let lucas = true;  
    let alreadySeen ={};  
    numArray.forEach(function(num) {
      if (alreadySeen[num])
        lucas = false;
      else
        alreadySeen[num] = true
    });
    return lucas;   
}