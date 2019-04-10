

    for (let i = 0; i < results.length; i++) {
        const user = results[i];

        var $okvir = $("<div class=contacts></div>");

        $okvir.append(`<img src="${user.picture.large}">`);
        $okvir.append("<h1>" + user.name.first + "</h1>"),
            $okvir.append("<h1>" + user.name.last + "</h1>"),
            $okvir.append("<p>" + user.email + "</p>"),

            $("#okvir").append($okvir);
    }
};

