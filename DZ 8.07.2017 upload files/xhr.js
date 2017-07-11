/**
 * Created by Users on 11.07.2017.
 */

document.forms.upload.elements[0].addEventListener('change', function (e) {

    console.log(document.forms.upload.elements.filename.files[0]);

    var myElement = document.createElement('div');
    myElement.className = 'preview';
    document.body.appendChild(myElement);

    var preview = document.createElement('img');
    preview.setAttribute('width', '200px');
    myElement.appendChild(preview);


    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }
});

var cansel_btn = document.forms.upload.elements.cancel;

document.forms.upload.addEventListener('submit', function (e) {
    e.preventDefault();
    var file = this.elements.filename.files[0];
    if (file) {
        if (file.size < 12000000) {
            if (file.type == 'image/jpeg') {
                upload(file);
            } else {
                log('its not jpeg')
            }
        } else {
            log('its too large file, 12Mb avaliable')
        }
        console.log(file.size);
        console.log(file.type);
        console.log(file);


    }
});

function upload(file) {
    var xhr = new XMLHttpRequest();

    function abort_xhr(e) {
        e.preventDefault();
        xhr.abort();
        log('Loading canseled');
        cansel_btn.setAttribute('disabled', 'disabled');
        cansel_btn.removeEventListener('click', abort_xhr);
    }

    cansel_btn.removeAttribute('disabled');
    cansel_btn.addEventListener('click', abort_xhr);

    xhr.onload = function () {
        log("All loaded success");
        cansel_btn.setAttribute('disabled', 'disabled');
        cansel_btn.removeEventListener('click', abort_xhr);
    };
    xhr.onerror = function () {
        log('Error' + xhr.status + '' + xhr.statusText);
        cansel_btn.setAttribute('disabled', 'disabled');
        cansel_btn.removeEventListener('click', abort_xhr);
    };

    xhr.upload.onprogress = function (event) {
        log('Loaded:' + event.loaded + 'from' + event.total);
    };

    xhr.open('POST', 'post.json');
    xhr.send(file);
}

function log(text) {
    document.getElementById('log').innerHTML = text;
}