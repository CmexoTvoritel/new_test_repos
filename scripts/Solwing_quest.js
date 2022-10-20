"use strict";

function comp(array1, array2){
    if(array1.includes(null)) return false;
    if(array2.includes(null)) return false;
    array1 = array1.map(number => {return Math.pow(number, 2)});
    array1.sort(function(a,b) {return a - b});
    array2.sort(function(a,b) {return a - b});
    alert(array1);
    alert(array2);
    for(let i = 0; i < array1.length; i++) {
      if(array1[i] != array2[i]) return false;
    }
    return true;
}
alert(comp([1, 5, 1, 4, 8, 1, 8, 0, 0, 1, 8, 7, 9, 1, 6, 9, 9, 7, 10, 10, 1, 2, 7, 6], [25, 0, 81, 100, 16, 64, 49, 64, 4, 1, 49, 49, 1, 81, 1, 64, 36, 36, 100, 1, 1, 1, 81, 1, 4]));
