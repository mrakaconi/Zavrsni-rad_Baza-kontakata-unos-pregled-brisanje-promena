fetch('https://randomuser.me/api/?results=20')
    .then(response => response.json())
    .then(podaci => prikaziPodatke(podaci))


function prikaziPodatke(korisnici) {

    for (let i = 0; i < korisnici.results.length; i++) {
        const user = korisnici.results[i];

        var $div = $("<div class=student></div>");

        $div.append(`<img src="${user.picture.medium}">`);
        $div.append("<h1>" + user.name.first + "</h1>"),
        $div.append("<h1>" + user.name.last + "</h1>"),
        $div.append("<p>" + user.email + "</p>"),
        $div.append("<p>" + user.phone + "</p>");
        

        $("#okvir").append($div);
    }
} ;

