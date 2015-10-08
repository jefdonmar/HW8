function (){

// Answer 1
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


// Answer 2





// Answer 3 





// Answer 4





// Answer 5 




// Answer 6 




}