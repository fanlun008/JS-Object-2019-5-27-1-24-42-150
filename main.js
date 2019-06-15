var user = {};
user['name'] = "John";
user['surname'] = "Mike";
user.name = "Petter";
console.log(user)
delete user.name;
console.log(user)

var fruit = {
  apple: 20,
  pear: 20,
  peach: 10
};
// write your code here...
var keys = Object.keys(fruit);
let totalPrice = keys.reduce(function (total, cur, curIndex, arr) {
  total += fruit[cur];
  return total;
}, 0);

console.log("totalPrice: " + totalPrice);