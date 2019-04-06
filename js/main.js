fetch('./components/fetched_data.js')
    .then(response => response.json())
    .then(podaci => prikaziPodatke(podaci))


function prikaziPodatke(korisnici) {

    for (let i = 0; i < korisnici.results.length; i++) {
        const user = korisnici.results[i];

        var $div = $("<div class=contscts></div>");

        $div.append(`<img src="${user.picture.large}">`);
        $div.append("<h1>" + user.name.first + "</h1>"),
        $div.append("<h1>" + user.name.last + "</h1>"),
        $div.append("<p>" + user.email + "</p>"),
        
        $("#okvir").append($div);
    }
    
} ;

