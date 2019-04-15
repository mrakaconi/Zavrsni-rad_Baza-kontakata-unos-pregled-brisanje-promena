function drawTable(tbody) {
    const user = results;
    var tr, td;
    tbody = document.getElementById(tbody);
    table = document.getElementById("tabela");

    // loop through data source
    for (var i = 0; i < results.length; i++) {
            tr = tbody.insertRow(tbody.rows.length);
            td = tr.insertCell(tr.cells.length);
            td.innerHTML = user[i].name.first;
            td = tr.insertCell(tr.cells.length);
            td.innerHTML = user[i].name.last;
            td = tr.insertCell(tr.cells.length);
            td.innerHTML = user[i].email;
            td = tr.insertCell(tr.cells.length);
            td.innerHTML = '<a><img src="https://img.icons8.com/material/25/000000/visible.png"></a>';
            td = tr.insertCell(tr.cells.length);
            td.innerHTML = '<a><img src="https://img.icons8.com/ios/25/000000/multi-edit.png"></a>';
            td = tr.insertCell(tr.cells.length);
            td.innerHTML = '<a><img src="https://img.icons8.com/windows/25/000000/trash.png"></a>';

    }
};
drawTable("podaci");

$(document).on('click', "#add", function () {
    $("#myModalAdd").modal('show');

});