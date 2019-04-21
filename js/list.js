function drawTable(tbody) {
    const user = JSContacts;
    var tr, td;
    tbody = document.getElementById("podaci");

    // loop through data source
    for (var i = 0; i < JSContacts.length; i++) {
            tr = tbody.insertRow(tbody.rows.length);
            td = tr.insertCell(tr.cells.length);
            td.innerHTML = user[i].name.first;
            td = tr.insertCell(tr.cells.length);
            td.innerHTML = user[i].name.last;
            td = tr.insertCell(tr.cells.length);
            td.innerHTML = user[i].email;
            td = tr.insertCell(tr.cells.length);
            td.innerHTML = '<a class="view"><button class="btn" id="gid" onclick="editPanel(view);">View</button></a>';
            td = tr.insertCell(tr.cells.length);
            td.innerHTML = '<a class="edit"><button class="btn" id="gid" onclick="editPanel(edit);">Edit</button></a>';
            td = tr.insertCell(tr.cells.length);
            td.innerHTML = '<a class="delete"><button class="btn" id="gid" onclick="editPanel(delete);">Delete</button></a>';
    }
};
drawTable("podaci");
