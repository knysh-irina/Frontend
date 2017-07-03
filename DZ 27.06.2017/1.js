/**
 * Created by Users on 30.06.2017.
 */
/*
$(document).ready(function(){
    $("#flip").click(function(){
        $("#list").slideToggle("slow");
    });
});
*/
document.getElementById("flip").addEventListener("click", showMenu);

function showMenu() {
    message = document.getElementById("list");
    if (message.style.display == "block"){
        message.style.display = "none";
    } else {
        message.style.display = "block";
    }
}

document.getElementById("flip").addEventListener("click", showBox);

function showBox() {
    message =  document.getElementById("message");
      message.style.display = "block";
     function closeMessage() {
         message.style.display = "none";
     }

     setTimeout( closeMessage, 1000);

}

function addClass(id, className)  {
    el = document.getElementById(id);
    el.className = className;
}

function removeClass(id, className){
    el = document.getElementById(id);
    el.className =  el.className.replace(className, "");
}

function listToogle() {
    el = document.getElementById("list");

}

addClass("p1", "First-p  something");
removeClass("p1", "something");
console.log( document.getElementById("p1"));