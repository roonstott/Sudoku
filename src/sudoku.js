export function Board() {

}

Board.prototype.makeRow = function() {
    let array = [];
    for(let i=1; i<=9; i++) {
        array.push(i)
    };
    return array;
};

let board1 = new Board();

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
