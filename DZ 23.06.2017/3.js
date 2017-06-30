

function hasClass(node, className) {
    el = document.getElementById(node);
    if (el.className == "") {
        console.log( "NO");
    } else {
        console.log("Yes");
        console.log(el.className);
    }
}

hasClass("p1");

hasClass("p2");