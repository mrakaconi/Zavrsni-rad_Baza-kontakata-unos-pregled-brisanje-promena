function userEdit () {
    
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
