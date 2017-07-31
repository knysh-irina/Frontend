document.getElementById('submit').addEventListener('click', setItemToLS);

function setItemToLS() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 1;
        }
        var i = localStorage.clickcount;
        var val = document.getElementsByTagName('form')[0].children[0].value;
        if ('localstorage' in window || window['localStorage'] !== null) {
            localStorage.setItem(i, val);
        }
    } else {
        console.log("Sorry, your browser does not support web storage...");
    }
}


function getItemToList(key) {
    var todo = localStorage.getItem(key);
    var el = document.createElement('li');
    el.setAttribute('id', key);
    el.innerHTML = todo;
    document.getElementById('list').appendChild(el);
    var but = document.createElement('button');
    but.setAttribute('class', 'deleteItem');
    but.innerHTML = 'delete';
    el.appendChild(but);

}

document.getElementById('list').addEventListener('click', deleteItem);

function deleteItem(event) {
    if (event.target.className === 'deleteItem') {
        var key = event.target.parentNode.id;
        localStorage.removeItem(key);
        document.getElementById(key).remove();

    }
}

for (key in localStorage) {
    if (key === 'clickcount') {
        continue;
    }
    getItemToList(key);
}

document.getElementById('delete').addEventListener('click', delAll);

function delAll() {
    localStorage.clear();
    document.getElementById('list').innerHTML = '';
}


