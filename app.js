// print aary element//
//var a = ["Pakistan","Iran","India"];
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//a.forEach(function (enter) {
//console.log(enter);
//});
/*var b = ["Pakistan","Iran","India"];
for (let index = 0; index < b.length; index++) {
    const element = b[index];
    console.log( );*/
//function negtive(array) {
/*  var number =[]
  var posivie = 0;
  //for (let index = 0; index < array.length; index++) {
      //const element = array[index];
      if (array > 0) {
          //array.push(array[index])
          
      }
      console.log(array);
      
      
  }
  
}
var c = [12,23,45,-67,-56,-77,-345,678]
negtive(c);*/
/*var b = [12,-45,-56,89,45,100,-10,22,34];
function getnegitive(array) {
    var negtive = [];
    for (let i = 0; array < array.length; i++) {
        if (array[i]> 0) {
            negtive.push(array[i]);

            
        }
        
        
    }
    return negtive;

    
}
console.log(getnegitive(b));*/
// Enter a new or insert new elemnt in array
/*var w = ["Abdul","Jutt","Imran",12];
var r = w.splice(2,0,"Hassan",25)
console.log(r);

var t = ["Abdul","Abdul","Jutt","Jutt","Imran"];
var unique = t.filter()*/
// Merge two array in third
var connect = ["Abdul", "Jutt", "Imran", 12];
var connected = ["Wahla", "Tariq", 34, 1000];
var u = connect.concat(connected);
console.log(u);
var arry1 = ["Mohsin", "Pakistan", 12];
var arr2 = [5000, 150000, "Azam"];
var concat = __spreadArray(__spreadArray([], arry1, true), arr2, true);
console.log(concat);
// reverse aaray//
var ulta = ["Iran", "Uk", "Spain", "Urgay", "Pakistan"];
var get = ulta.reverse();
console.log(get);
//Search elemnt in array//
var find = ["Iran", "Uk", "Spain", "Urgay", "Pakistan"];
var give = find.includes(/*"Spain"*/ "Usa");
console.log(give);
var letfind = ["Lahore", 25, "Multan", "FSD", "Karachi", "Quetta"];
var givevalue = letfind.indexOf("Karachi");
console.log(givevalue);
