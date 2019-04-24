const name_title = document.querySelector("id_title").value;
const name_first = document.querySelector("id_firstname").value;
const name_last = document.querySelector("id_lasttname").value;
const email = document.querySelector("id_email").value;
const phone = document.querySelector("id_phone").value;
const cell = document.querySelector("id_cell").value;
const location_state = document.querySelector("id_state").value;
const location_city = document.querySelector("id_city").value;
const location_street = document.querySelector("id_street").value;
const nat = document.querySelector("id_nat").value;
const dob_age = document.querySelector("id_age").value;

$("#navbar-frame").load("./components/nav.html")

if (localStorage.getItem("contacts") == null) {
    saveJsonToLS("contacts", results)
};

function LoadJsonFromLS(LsKey) {
    var JSString = localStorage.getItem(LsKey)
    var JSvar = JSON.parse(JSString);
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

var newContact = createJsonObj(name_title, name_first, name_last, location_street, location_city, location_state, email, dob_age, phone, cell, nat, picture_large, picture_medium, picture_thumbnail);

insertToJSON(JSContacts, newContact);

updateJSON(JSContacts, index, newContact);

saveJsonToLS("contacts", JSContacts);


