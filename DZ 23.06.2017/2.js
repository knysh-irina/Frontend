

function next(element) {

   el =  document.getElementById(element);

if (el.nextSibling.nextSibling == null ){
    console.log("Это последний, нет соседа снизу");
    console.log(el.parentNode.lastChild.previousSibling);
} else {
    nodeType =  el.nextSibling.nodeType;
    if (   nodeType == 3 || nodeType == 8){
        console.log( el.nextSibling.nextSibling);
    } else { console.log( el.nextSibling);}
}
}
next("p3");