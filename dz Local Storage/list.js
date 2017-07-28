document.getElementById('submit').addEventListener('click', setItemToLS);

function setItemToLS() {
    var i = 0;
    while (localStorage.getItem(i.toString())) {
        i++;
    }

    var val = document.getElementsByTagName('form')[0].children[0].value;
    if ('localstorage' in window || window['localStorage'] !== null) {
        localStorage.setItem(i.toString(), val);
    }
}


function getItemToList(key) {
    var todo = localStorage.getItem(key.toString());
    var el = document.createElement('li');
    el.innerHTML = todo;
    document.getElementById('list').appendChild(el);
    var but = document.createElement('button');
    var param =  'localStorage.removeItem("'+ key.toString() +'")';
    but.setAttribute('onclick', param);
    but.setAttribute('class', 'deleteItem');
    but.innerHTML = 'delete';
    document.getElementById('list').appendChild(but);

}

var j = 0;
while (localStorage.getItem(j.toString())) {
    getItemToList(j);
    j++;
}

document.getElementById('delete').addEventListener('click', delAll);

function delAll() {
    localStorage.clear();
}


