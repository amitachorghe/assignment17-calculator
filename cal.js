// var calculator = {
//         'num1' : 0,
//         'num2' : 0,
        
//         'sum' : function () {
//             let sumz = this.num1 + this.num2;
//             return sumz;
//         },

//         //'append_input' : function(calculator){
//          //   this.append_input;
//        // },
// };
// calculator.num1 = prompt("Enter number :");
// calculator.num2 = 20;

// var sumz = calculator.sum();
// console.log(sumz);

// var calculator = {
//   'num1': 4,
//   'num2' : 7,
//   'res' :0,
//   'input' : [1,2,3,4,5,6,7,8],
//   'append_input' : function(number){
//   this.input.append(number);

// },
// 'sum' : function() {
//   this.res = this.num1 + this.num2;
//   return this.res;
// },

// }

// var sumz = calculator.sum();

// console.log(sumz);


var calculator = {
  'num1': 0,
  'num2' : 0,
  'res' :0,
  'input' : [1,2,3,4,5,6,7,8],
  'append_input' : function(number){
  this.input.append(number);

},
'sum' : function() {
  this.res = this.num1 + this.num2;
  return this.res;
},
 'div' : function() {
  this.res = this.num1 / this.num2;
  return this.res;
 },
 'mul' : function() {
  this.res = this.num1 * this.num2;
  return this.res;
 },
 'diff' : function() {
  this.res = this.num1 - this.num2;
  return this.res;
 },
};
//if you gave 2 numbers it performs all operations like sum,div,mul,and substraction.
calculator.num1=parseInt(prompt("enter number :"));
calculator.num2=parseInt(prompt("enter number :"));

var sumz = calculator.sum();
console.log("Sum of no. :",sumz);

var dive = calculator.div();
console.log("Division of no. :",dive);

var multi = calculator.mul();
console.log("Multiplication of no. :",multi);

var differ = calculator.diff();
console.log("Substraction of no. :",differ);
