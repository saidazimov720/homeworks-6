var data = prompt("Enter your data");

var text = [];
var num = [];

if (!isNaN(data) && data !=="") {
    num.push(Number(data));
    console.log("Number array:", num);
} else if(isNaN(data) && data !=="") {
    text.push(data);
    console.log("text array:", text);
} else{
    alert("Invalid value");
}