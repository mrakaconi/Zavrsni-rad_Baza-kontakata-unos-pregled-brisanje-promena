if (localStorage.getItem("contacts") == null) {
    saveJsonToLS("contacts", results);
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

// var name_title = getElementById("id_title").value;
// var name_first = getElementById("id_firstname").value;
// var name_last = getElementById("id_lasttname").value;
// var email = getElementById("id_email").value;
// var phone = getElementById("id_phone").value;
// var cell = getElementById("id_cell").value;
// var location_state = getElementById("id_state").value;
// var location_city = getElementById("id_city").value;
// var location_street = getElementById("id_street").value;
// var nat = getElementById("id_nat").value;
// var dob_age = getElementById("id_age").value;

// var newContact = createJsonObj(name_title, name_first, name_last, location_street, location_city, location_state, email, dob_age, phone, cell, nat, picture_large, picture_medium, picture_thumbnail);



/*
insertToJSON(JSContacts, newContact);

updateJSON(JSContacts, index, newContact);

saveJsonToLS("contacts", JSContacts);

*/









