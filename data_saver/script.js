var data = prompt("Enter your data");

var text = [];
var num = [];

if (data === Number) {
    num.push(data);
} else if(data === String) {
    text.push(data)
} else{
    alert("Invalid value");
}