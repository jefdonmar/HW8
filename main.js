function (){

// Answer 1------>
//Makes an array of the prices 
var prices = items.map(function (item){
  return item.price;
}) console.log(prices);

//adds the prices up 
var sum = prices.reduce(function (first, last){
   return first + last; 
}) console.log(sum);

//does the averages of the prices
var avg = sum/ prices.length;
console.log (avg);

//gives answer to the 100ths place
var reduce = avg.toFixed(2);
console.log (reduce);

//makes the answer into a sting
var str = 'The average price is' + " $" +  reduce;
console.log(str);

//displays answer 1 on the page
var answer1 = document.querySelector('#answer1');

//Creates a Node with the answer for the DOM in the HTML
var textNode = document.createTextNode(str);

//Puts the answer within our page
answer1.appendChild(textNode);

// Answer 2----------->

//selects items with these specific prices  
var itemprice = items.filter (function (item){
  return item.price > 14 && item.price <18;
}) console.log(itemprice);

//var for the array of these times 
var itemArray = []

//puts filtered items in the array 
itemprice.forEach(function(item2){
  itemArray.push(item2.title);
  console.log (itemprice);
}); 

//Displays those Items on the Screen
var str2 = itemArray;
console.log(str2);
var answer2 = document.querySelector('#answer2');
var textNode2 = document.createTextNode(str2);
answer2.appendChild(textNode2);

// Answer 3------->

//selects items with the GBP code 
var currency = items.filter (function(code){
  return code.currency_code==='GBP';
}); console.log(currency);

//displays it on the screen 
document.getElementById('answer3').innerHTML = currency[0].title + ' costs £' +  currency[0].price;


// Answer 4---->






// Answer 5 




// Answer 6 




}