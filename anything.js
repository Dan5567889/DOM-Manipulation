//const names = ["Jordan", "Velasco","Rojas","kalel", "Brenden"];
//names.forEach(count() => console.log(name.length));

let sum = 0;
const brenden = [72,80,17,38,67,41];
const total = brenden.map(add);
console.log(total);

function add(element){
    sum += element;
    return sum;
}

//Add $2 tax to each price
//Return new array


const prices = [5, 10, 20];
const pricesWithTax =  prices.map(price => price + 2);
console.log(pricesWithTax);

const nums = [3, 6, 9];
const result = nums.map(n => n / 3);
console.log(result);

