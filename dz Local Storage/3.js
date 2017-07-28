document.getElementById('submit').addEventListener('click', func);

function func() {
    var val = document.getElementsByTagName('form')[0].children[0].value;
    if ('localstorage' in window || window['localStorage'] !== null) {
        localStorage.setItem('bg', val);
    }
}

var background =  localStorage.getItem('bg');
document.body.style.background = background;