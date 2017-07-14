/**
 * Created by Users on 14.07.2017.
 */
loadDoc();

document.getElementById('update').addEventListener('click', updateDoc);

function updateDoc() {
    var table = document.getElementById("staff");
    table.innerHTML = "";
    loadDoc();
}
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj_staff = JSON.parse(this.responseText);
            var table = document.getElementById("staff");

            // HEAD of TABLE
            var tr_head = document.createElement('tr');
            for (x in obj_staff.data[0]) {
                var th_head = document.createElement('th');
                th_head.innerHTML = x;
                tr_head.appendChild(th_head);
            }
            table.appendChild(tr_head);

            //filling table
            for (worker_id in obj_staff.data) {
                var tr = document.createElement('tr');
                for (par in obj_staff.data[worker_id]) {
                    var td = document.createElement('td');
                    td.innerHTML = obj_staff.data[worker_id][par];
                    tr.appendChild(td);
                }
                table.appendChild(tr);

            }
        }
    };
    xhttp.open("GET", "staff.json", true);
    xhttp.send();
}






