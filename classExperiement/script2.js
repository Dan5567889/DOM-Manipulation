document.getElementById("changeP").innerHTML="1";
document.getElementById("addButton").innerHTML="add value";

// I am selecting the button and adding an event listener for a mouse click that will
// run a function
document.getElementById("addButton").addEventListener("click",function(){
    let origin=document.getElementById("changeP").innerHTML;
    console.log(origin);
    //casting to convert string to number
    origin=parseInt(origin)+1;
    document.getElementById("changeP").innerHTML=origin;
});


document.getElementById("MultiplicationButton").addEventListener("click",function(){
    let origin=document.getElementById("changeP").innerHTML;
    let result;
    for(let a=1;a<=10;a++){
        result = origin * a;
        document.getElementById("td"+ a).innerHTML=result;
    }
});

let array = [];
let origin=document.getElementById("changeP").innerHTML;
for(let x=1;x<=10;x++){
    let num = origin * x;
    array.push(num);
}

console.log(array);
// if I want to retrieve the array I will start a index 0 and go up till index 9.
// Challenge is how to put it in the tagName
let numxber = array.map(ab);
console.log(numxber);
function ab(num){
    return num*1;
}

//getElementsByTagName will return an array of elements
for(let index=1;index<array.length;index++){
    document.getElementsByTagName("td")[index+2].innerHTML=array[index];
}

// conslusion: I would need one for the array and one for the td tags, therefore this apporach will not be the most suitable one.