function drawTable(tbody) {
    const user = JSContacts;
    var tr, td;
    tbody = document.getElementById("podaci");

    for (var i = 0; i < JSContacts.length; i++) {
        tr = tbody.insertRow(tbody.rows.length);
        td = tr.insertCell(tr.cells.length);
        td.innerHTML = user[i].name.first;
        td = tr.insertCell(tr.cells.length);
        td.innerHTML = user[i].name.last;
        td = tr.insertCell(tr.cells.length);
        td.innerHTML = user[i].email;
        td = tr.insertCell(tr.cells.length);
        td.innerHTML = '<a class="view"><button class="btn view">View</button></a>';
        td = tr.insertCell(tr.cells.length);
        td.innerHTML = '<a id="edit"><button class="btn edit">Edit</button></a>';
        td = tr.insertCell(tr.cells.length);
        td.innerHTML = '<a id="delete"><button class="btn delete">Delete</button></a>';
    }
};

var element = document.querySelector("tabela");
if (typeof (element) == 'undefined' || element == null) {
    drawTable("podaci");
};