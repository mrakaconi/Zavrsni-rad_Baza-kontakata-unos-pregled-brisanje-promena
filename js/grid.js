function createGrid(jSonContactList) {
    for (let i = 0; i < jSonContactList.length; i++) {
            let user = jSonContactList[i];
            var $div = $("<div class=contacts></div>");

            $div.append(`<img src="${user.picture.large}">`);
            
            $div.append("<h1>" + user.name.first + "</h1>"),
            $div.append("<h2>" + user.name.last + "</h2>"),
            $div.append("<p>" + user.email + "</p>"),

            $("#okvir").append($div);
    }
};
createGrid(JSContacts);
