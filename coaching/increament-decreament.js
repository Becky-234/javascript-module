//Arithmetic Operators
//Increament and decrement
let j = 5
j++;

let: y = 4
y--;
console.log(j)
console.log(y)

let: stock = 10
stock--
console.log('Remaining stock is ${stock}')

let stockQty = 10; stockQty -= 2 //stockQty--;
console.log('Remaining stock is ${stock}')

let productSold = 0;
productSold++;
console.log('Products sold today ${productSold}')

//message method
/*let productSold=0
productSold++
Let message='Products sold are ${productSold}'
console.log(message)*/

function recordProducts() {
    productsSold++;
    console.log('Products sold today ${productSold}')

}