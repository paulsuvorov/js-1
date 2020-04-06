//-----------1------------

function splitAndMerge (str,sp) {
var sepWords = str.split(" ");
var jWords = sepWords.join('');
var sepSymb = jWords.split('');
var withSp = sepSymb.join(sp);
return withSp;
}
console.log(splitAndMerge("My name is John"," "));

//-----------2-------------

var a = {name: 'Jeremy', age: 24, role: 'Software Engineer'};
function convert(obj){
  var arr = [];
  for(var key in obj){
   arr.push([key,obj[key]]);
    
  }
   return arr;
}
console.log(convert(a));

//-----------3-------------

function toCamelCase(originString) {
  if (originString.indexOf('_')>1){
 var arrStr = originString.split('_');
  } else if (originString.indexOf('-')>1) {
   var arrStr = originString.split('-'); 
  }

  
  var mapedString = arrStr.map(function(word,index){
 
  if (index==0){
   word
  } else {
  word =  word[0].toUpperCase() + word.slice(1);
   }
  return word;
});
  var finalString = mapedString.join('');
  return finalString;
 }
  
console.log(toCamelCase("the-stealth-warrior"));

//------------4-----------

function Reverse(str) {
var splittedString = str.split(" ");
var reverseString = splittedString.map (function(word){
  word=word.split('').reverse().join('');
  return word;
});
 var finalString = reverseString.join(' ');
  return finalString;
}

console.log(Reverse(" A fun little challenge! "));

//--------------5-----------

function stringExpansion(str){
  var splitArr = str.split('');
  var finalArr = [];
  for(var i=0;i<splitArr.length;i++){
    if(isNumber(splitArr[i])&&!isNumber(splitArr[i+1])){
       for(var c=0;c<splitArr[i];c++){
      finalArr.push(splitArr[i+1]);
    }
    i++;
       }else {
     finalArr.push(splitArr[i]);
   } 
   }
function isNumber(num){
return isFinite(num) && !isNaN(num);
}
return finalArr.join('');
}

console.log(stringExpansion('3d332f2a'));

//---------------6--------------

function largest(){
var numArr=[];
  for(var i=0;i<arguments.length;i++){
  numArr.push(arguments[i]);
    }
numArr.sort(function(a,b){
return a - b;
    });
  var c = (numArr.length-1);
  return numArr[c];
}


function smallest(){
var numArr=[];
for(var i=0;i<arguments.length;i++){
numArr.push(arguments[i]);
    }
  numArr.sort(function(a,b){
return a - b;
    });
  var c = (numArr.length-1);
  return numArr[0];
}

console.log(largest(2,0.1,-5,100,3));
console.log(smallest(2, 0.1, -5, 100, 3));

//------------7-------------

function transform(arr){
return arr.map(function(elem){
  return (function(){
    return elem;
   })();
  });
  }

const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
console.log(newArray[3]);
console.log(newArray[4]);

//-------------8------------------

function summary(mas){
   if (Array.isArray(mas)){
     return (mas.length === 0) ? 0 : mas[0] + summary(mas.slice(1));
   }   
     return (arguments.length === 0) ? 0 : arguments[0] + summary(Array.from(arguments).slice(1));
}
console.log(summary(1,3,5,7));

//-------------9-------------------

function countDown(n){
    for (let i = n; i >= 0; i--){
        setTimeout(function(){
            console.log(i);
        }, 1000*(n-i));
    }

}
  console.log(countDown(3));

//------------------10--------------------

function.prototype.myBind = function () { 
  var f = this;
    return function () {
        return f.apply(obj, arguments);
    };
 }
function addPropToNumber(number) { return this.prop + number; }
var bound = addPropToNumber.MyBind({ prop: 9 });

console.log(bound(1));
