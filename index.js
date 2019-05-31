//console.log('Hello World');
let name = 'mosh'; // string
let age = 16; //cislo
let isApproved = true;
let firstName = undefined;
let selectedColor = null;
let person={
    name: 'mosh',
    age: 16
};
let selection='name';
person[selection]='Marry';
console.log(person.name);
let selectedColors = ['red','blue'];
console.log(selectedColors[0]);//vypise jenom red
selectedColors[2] = 1;
console.log(selectedColors.length);//vypise 3
//console.log(name);
function greet(name){
    console.log('Hello '+ name + ' welcome in function');
}
greet('Matej');
function nasobeni(number){
    return number*number;
}
console.log(nasobeni(2));
