var data = prompt("Enter your data");

var text = [];
var num = [];

if (!isNaN(data) && data.trim() !=="") {
    num.push(data);
    console.log(num);
} else if(data === String) {
    text.push(data);
    console.log(text);
} else{
    alert("Invalid value");
}