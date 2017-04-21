
'use strict';

var log1 = "Irina";
var pas1 = "12345";
var log2 = "Andrew";
var pas2 = "678910";


    var login = prompt("Please enter your login", "Login");
    var password = prompt("Please enter your password", "*****");



if (( login == log1 & password == pas1) || 
	( login == log2 & password == pas2)) {
        document.getElementById("demo").innerHTML =
        "Вы прошли! ";
    
} else {
	document.getElementById("demo").innerHTML =
        "Вы не прошли! ";
}