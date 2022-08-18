var obj1 = {name:"person1",age:5};
var obj2 = {age:5,name:"person1"};
console.log(JSON.stringify(obj1)===JSON.stringify(obj2))

var obj1 = {name:"person1",age:5};
var obj2 = {name:"person1",age:5};
console.log(JSON.stringify(obj1)===JSON.stringify(obj2))