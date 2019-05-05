// provera da podaci vec postoje u LocalStorage-u
if (localStorage.getItem("contacts") == null) {
    // snima podatke u LocalStorage
    saveJsonToLS("contacts", results)
};

// Ucitavanje i parsiranje podataka unutar LS-a
function LoadJsonFromLS(LsKey) {
    var JSString = localStorage.getItem(LsKey)
    var JSvar = JSON.parse(JSString);
    return JSvar;
};
// Snimanje podataka u LS
function saveJsonToLS(LsKey, JSvar) {
    localStorage.setItem(LsKey, JSON.stringify(JSvar));
};

// Brisanje iz LS-a
function delFromJson(JSvar, index) {
    JSvar.splice(index, 1);
    return JSvar;
};

function updateJSON(JSvar, index, tempJS) {
    JSvar[index] = tempJS
};

function insertToJSON(JSvar, tempJS) {
    JSvar.push(tempJS);
};

// Varijabla koju cemo koristiti unutar aplikacije za manipulaciju podacima
var JSContacts = LoadJsonFromLS("contacts");

// Kreiranje GRID pregleda kontakata 
if (window.location.href.indexOf("index.html") > -1) {
    function createGrid(jSonContactList) {
        for (let i = 0; i < jSonContactList.length; i++) {
            let user = jSonContactList[i];
            let picLarge = `${user.picture.large}`;
            var $div = $("<div data-infogrid='" + i + "' id=contacts></div>");
            if (!picLarge) {
                picLarge = './img/no-image.jpg'
            }
            $div.append('<img src="' + picLarge + '">');

            $div.append("<h1>" + user.name.first + "</h1>"),
                $div.append("<h2>" + user.name.last + "</h2>"),
                $div.append("<p>" + user.email + "</p>"),

                $("#okvir").append($div);
        }
    };
    createGrid(JSContacts);

    function clearGrid() {
        $("#okvir").html('');
    }

    function recreateGrid(jSonContactList) {
        clearGrid();
        createGrid(jSonContactList);
    };

    // Kreiranje LIST pregleda kontakata
} else if (window.location.href.indexOf("index_list.html") > -1) {
    function drawTable() {
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
            td.innerHTML = '<a class="view"><button class="btn list-view" data-infolist="' + i + '">View</button></a>';
            td = tr.insertCell(tr.cells.length);
            td.innerHTML = '<a id="edit"><button class="btn list-edit" data-infolist="' + i + '">Edit</button></a>';
            td = tr.insertCell(tr.cells.length);
            td.innerHTML = '<a id="delete"><button class="btn list-delete" data-infolist="' + i + '">Delete</button></a>';
        }
    };

    var element = document.querySelector("tabela");
    if (typeof (element) == 'undefined' || element == null) {
        drawTable();
    }

    function clearTable() {
        $("#podaci").html('');
    }
    function recreateTable() {
        clearTable();
        drawTable();
    }
}

// Prikazivanje podataka unutar INFO modala
function userInfoGrid(userIndexGrid) {
    console.log(userIndexGrid);

    var oneContact = JSContacts[userIndexGrid];

    document.getElementById("id_info_title").innerText = "Titula: " + oneContact.name.title;
    document.getElementById("id_info_firstname").innerText = "Ime: " + oneContact.name.first;
    document.getElementById("id_info_lastname").innerText = "Prezime: " + oneContact.name.last;
    document.getElementById("id_info_age").innerText = "Godine: " + oneContact.dob.age;
    document.getElementById("id_info_email").innerText = "Email: " + oneContact.email;
    document.getElementById("id_info_phone").innerText = "Telefon: " + oneContact.phone;
    document.getElementById("id_info_cell").innerText = "Mobilni: " + oneContact.cell;
    document.getElementById("id_info_state").innerText = "Drzava: " + oneContact.location.state;
    document.getElementById("id_info_city").innerText = "Grad: " + oneContact.location.city;
    document.getElementById("id_info_street").innerText = "Ulica: " + oneContact.location.street;
    document.getElementById("id_info_nat").innerText = "Drzavljanstvo: " + oneContact.nat;

};

// Popunjavanje modala ADD sa podacima trenutnog korisnika radi potencijalne izmene
function userEditGrid(userIndexEditGrid) {
    var oneContact = JSContacts[userIndexEditGrid];

    document.getElementById("id_title").value = oneContact.name.title;
    document.getElementById("id_firstname").value = oneContact.name.first;
    document.getElementById("id_lastname").value = oneContact.name.last;
    document.getElementById("id_age").value = oneContact.dob.age;
    document.getElementById("id_email").value = oneContact.email;
    document.getElementById("id_phone").value = oneContact.phone;
    document.getElementById("id_cell").value = oneContact.cell;
    document.getElementById("id_state").value = oneContact.location.state;
    document.getElementById("id_city").value = oneContact.location.city;
    document.getElementById("id_street").value = oneContact.location.street;
    document.getElementById("id_nat").value = oneContact.nat;

};

// Kreiranje novog kontakta kroz ADD modal
function createJsonObj(name_title, name_first, name_last, location_street, location_city, location_state, email, dob_age, phone, cell, nat, picture_large, picture_medium, picture_thumbnail) {

    var tempJS = {
        name: {
            title: name_title,
            first: name_first,
            last: name_last,
        },
        location: {
            street: location_street,
            city: location_city,
            state: location_state,
        },
        email: email,

        dob: {
            age: dob_age,
        },
        phone: phone,
        cell: cell,
        nat: nat,
        picture: {
            large: picture_large,
            medium: picture_medium,
            thumbnail: picture_thumbnail
        },
    };
    return tempJS;
};

// 
function addUser(mojTip, index = null) {
    var name_title = document.getElementById("id_title").value;
    var name_first = document.getElementById("id_firstname").value;
    var name_last = document.getElementById("id_lastname").value;
    var email = document.getElementById("id_email").value;
    var phone = document.getElementById("id_phone").value;
    var cell = document.getElementById("id_cell").value;
    var location_state = document.getElementById("id_state").value;
    var location_city = document.getElementById("id_city").value;
    var location_street = document.getElementById("id_street").value;
    var nat = document.getElementById("id_nat").value;
    var dob_age = document.getElementById("id_age").value;
    var picture_large;

    if (mojTip == 'edit' && typeof JSContacts[index] != 'undefined') {
        picture_large = JSContacts[index].picture.large;
    } else {
        picture_large = '';
    }
    var newContact = createJsonObj(name_title, name_first, name_last, location_street, location_city, location_state, email, dob_age, phone, cell, nat, picture_large, '', '');

    if (mojTip == "add") {
        insertToJSON(JSContacts, newContact);
        saveJsonToLS("contacts", JSContacts);
        $("#myModalAdd").modal('hide');
        $("#myModalInfo").modal('hide');
        if (window.location.href.indexOf("index.html") > -1) {
            recreateGrid(JSContacts);
        } else if (window.location.href.indexOf("index_list.html") > -1) {
            recreateTable();
        }
    }
    if (mojTip == "edit") {
        updateJSON(JSContacts, index, newContact);
        saveJsonToLS("contacts", JSContacts);
        $("#myModalAdd").modal('hide');
        $("#myModalInfo").modal('hide');
        if (window.location.href.indexOf("index.html") > -1) {
            recreateGrid(JSContacts);
        } else if (window.location.href.indexOf("index_list.html") > -1) {
            recreateTable();
        }
    }
};

// Pretraga kontakata kroz input polje
function search() {
    if (window.location.href.indexOf("index.html") > -1) {
        var input, filter, form, div, h1, i, txtValue;
        input = document.getElementById("kriterijum");
        filter = input.value.toUpperCase();
        form = document.getElementById("okvir");
        div = form.getElementsByTagName("div");
        for (i = 0; i < div.length; i++) {
            h1 = div[i].getElementsByTagName("h1")[0];
            txtValue = h1.textContent || h1.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                div[i].style.display = "";
            } else {
                div[i].style.display = "none";
            }
        };
    } else if (window.location.href.indexOf("index_list.html") > -1) {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("kriterijum");
        filter = input.value.toUpperCase();
        table = document.getElementById("podaci");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
};

// Razni dogadjaji
$(document).ready(function () {
    $("#navbar-frame").load("./components/nav.html");

    // grid view
    $(document).on('click', "#contacts", function () {
        var userIndexGrid = this.getAttribute("data-infogrid");
        userInfoGrid(userIndexGrid);
        $("#myModalInfo").find(".grid-edit").attr("data-infogrid", userIndexGrid);
        $("#myModalInfo").find(".grid-delete").attr("data-infogrid", userIndexGrid);
        $("#myModalInfo").modal('show');
    });
    $(document).on('click', ".grid-edit", function () {
        var userIndexEditGrid = this.getAttribute("data-infogrid");
        userEditGrid(userIndexEditGrid);
        $("#submit").attr("data-action", "edit");
        $("#submit").attr("data-infogrid", userIndexEditGrid);
        $("#myModalAdd").modal('show');
        saveJsonToLS("contacts", JSContacts);
    });
    $(document).on('click', ".grid-delete", function () {
        var userIndexEditGrid = this.getAttribute("data-infogrid");
        delFromJson(JSContacts, userIndexEditGrid);
        $("#myModalInfo").modal('hide');
        recreateGrid(JSContacts);
        saveJsonToLS("contacts", JSContacts);


    });

    // list view
    $(document).on('click', ".list-view", function () {
        let userIndexList = this.getAttribute("data-infolist");
        userInfoGrid(userIndexList);
        $("#myModalInfo").modal('show');
    });
    $(document).on('click', ".list-edit", function () {
        let userIndexList = this.getAttribute("data-infolist");
        userEditGrid(userIndexList);
        $("#submit").attr("data-action", "edit");
        $("#submit").attr("data-infolist", userIndexList);
        $("#myModalAdd").modal('show');
    });
    $(document).on('click', ".list-delete", function () {
        let userIndexList = this.getAttribute("data-infolist");
        delFromJson(JSContacts, userIndexList);
        $(this).parents("tr").remove();
        saveJsonToLS("contacts", JSContacts);
    });
    $(document).on('click', "#add", function () {
        $("#submit").attr("data-action", "add");
        $("#myModalAdd").modal('show');
    });
    $(document).on('click', "#submit", function () {
        let action = this.getAttribute('data-action');
        let index;
        if (this.getAttribute("data-infolist")) {
            index = this.getAttribute("data-infolist");
        } else {
            index = this.getAttribute("data-infogrid");
        }
        addUser(action, index);
    });
});
