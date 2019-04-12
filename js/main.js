function createGrid() {
        for (let i = 0; i < results.length; i++) {
                let user = results[i];

                var $div = $("<div class=contacts></div>");

                $div.append(`<img src="${user.picture.large}">`);
                $div.append("<h1>" + user.name.first + "</h1>"),
                        $div.append("<h1>" + user.name.last + "</h1>"),
                        $div.append("<p>" + user.email + "</p>"),

                        $("#okvir").append($div);
        }
};
createGrid()

// Pravljenje dinamicke tabele sa preuzimanjem podataka i popunjavanjem celija


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
}
drawTable("podaci");

// Add User Modal

$(document).on('click', ".contacts", function () {
        $("#myModal").modal('show');
});
