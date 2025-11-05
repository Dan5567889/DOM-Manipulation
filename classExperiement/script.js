document.getElementById("taskname1").innerHTML="Complete the project documentation";
// what is the difference between Document and document in JavaScript?
document.getElementById("compl1").innerHTML="Remove";
//in the document object mo

let task = document.getElementById("taskname2").innerHTML;
console.log(task+" "+"is selected");
// I added functionality to the remove button to cross out the task and change its color to light grey when clicked
document.getElementById("compl1").addEventListener("click",function(){
    document.getElementById("taskname2").style.textDecoration="line-through";
    document.getElementById("taskname1").style.color="red";
});

document.getElementById("addTask").addEventListener("click",function(){
    event.preventDefault();
    let newTask=document.getElementById("new-task").value;
    console.log(newTask);
    document.getElementById("taskname3").innerHTML=newTask;
});