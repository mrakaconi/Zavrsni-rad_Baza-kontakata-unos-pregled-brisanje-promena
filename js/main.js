// MODALS and NAV-BAR //

$(document).ready(function () {
    $("#navbar-frame").load("./components/nav.html");

    $(document).on('click', ".contacts", function () {
        var userIndexGrid = this.getAttribute("infogrid")
        console.log(userInfoGrid);
        userInfoGrid(userIndexGrid);
        $("#myModalInfo").modal('show');
        
        
    });
    $(document).on('click', ".view", function () {
        var userIndexList = JSContacts[document.getElementsByTagName("infolist")]
        alert(userIndexList);
        
        // userInfoGrid(userIndexList);
        // $("#myModalInfo").modal('show');
    });
    $(document).on('click', ".edit", function () {
        $("#myModalAdd").modal('show');
    });
    $(document).on('click', "#add", function () {
        $("#myModalAdd").modal('show');
    });
    $(document).on('click', ".delete", function () {

    });
});

function userInfoGrid(userIndexGrid) {
    var oneContact = JSContacts[userIndexGrid];

    document.getElementById("id_info_title").innerHTML = "Titula: " + oneContact.name.title;
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
// function userInfoList(userIndexList) {
//     var oneContact = JSContacts[userIndexList];

//     document.getElementById("id_info_title").innerHTML = "Titula: " + oneContact.name.title;
//     document.getElementById("id_info_firstname").innerText = "Ime: " + oneContact.name.first;
//     document.getElementById("id_info_lastname").innerText = "Prezime: " + oneContact.name.last;
//     document.getElementById("id_info_age").innerText = "Godine: " + oneContact.dob.age;
//     document.getElementById("id_info_email").innerText = "Email: " + oneContact.email;
//     document.getElementById("id_info_phone").innerText = "Telefon: " + oneContact.phone;
//     document.getElementById("id_info_cell").innerText = "Mobilni: " + oneContact.cell;
//     document.getElementById("id_info_state").innerText = "Drzava: " + oneContact.location.state;
//     document.getElementById("id_info_city").innerText = "Grad: " + oneContact.location.city;
//     document.getElementById("id_info_street").innerText = "Ulica: " + oneContact.location.street;
//     document.getElementById("id_info_nat").innerText = "Drzavljanstvo: " + oneContact.nat;

// };
// MODALS END //

if (localStorage.getItem("contacts") == null) {
    saveJsonToLS("contacts", results)
};

function LoadJsonFromLS(LsKey) {
    var JSString = localStorage.getItem(LsKey)
    var JSvar = JSON.parse(JSString);
    console.log(JSvar);

    return JSvar;
};

function saveJsonToLS(LsKey, JSvar) {
    localStorage.setItem(LsKey, JSON.stringify(JSvar));
};

function delFromJon(JSvar, index) {
    JSvar.splice(index, 1);
    return JSvar;
};

var JSContacts = LoadJsonFromLS("contacts");

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

function updateJSON(JSvar, index, tempJS) {
    JSvar[index] = tempJS
};

function insertToJSON(JSvar, tempJS) {
    JSvar.push(tempJS);
};
function addUser(mojTip) {
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

    var newContact = createJsonObj(name_title, name_first, name_last, email, phone, cell, location_state, location_city, location_street, nat, dob_age);

    if (mojTip == "insert") {
        insertToJSON(JSContacts, newContact);
        saveJsonToLS("contacts", JSContacts);
    }
};



// var newContact = createJsonObj(name_title, name_first, name_last, email, phone, cell, location_state, location_city, location_street, nat, dob_age);

// picture_large, picture_medium, picture_thumbnail

// insertToJSON(JSContacts, newContact);

// updateJSON(JSContacts, index, newContact);

// saveJsonToLS("contacts", JSContacts);

// Search fields

function search() {
    if (window.location.href.indexOf("index.html") > -1) {
        var input, filter, form, div, h1, h2, i, txtValue;
        input = document.getElementById("kriterijum");
        filter = input.value.toUpperCase();
        form = document.getElementById("okvir");
        div = form.getElementsByTagName("div");

        // FOR loop za pretragu po imenu (first.name)
        for (i = 0; i < div.length; i++) {

            h1 = div[i].getElementsByTagName("h1")[0];
            txtValue = h1.textContent || h1.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                div[i].style.display = "";
            } else {
                div[i].style.display = "none";
            }
        };
    } else {
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
}




/*
// Search in GRID view

function searchGrid() {
    var input, filter, form, div, h1, h2, i, txtValue;
    input = document.getElementById("kriterijum");
    // filter = input.value.toUpperCase();
    form = document.getElementById("okvir");
    div = form.getElementsByTagName("div");

    // FOR loop za pretragu po imenu (first.name)
    for (i = 0; i < div.length; i++) {

        h1 = div[i].getElementsByTagName("h1")[0];
        txtValue = h1.textContent || h1.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            div[i].style.display = "";
        } else {
            div[i].style.display = "none";
        }
    };
    // FOR loop za pretragu po prezimenu (last.name)

    for (i = 0; i < div.length; i++) {
        h2 = div[i].getElementsByTagName("h2")[0];
        txtValue = h2.textContent || h2.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            div[i].style.display = "";
        } else {
            div[i].style.display = "none";
        }
    }
};

// end of Search in GRID view

// Search in LIST view

function SearchList() {
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

// end of Search in LIST view
*/