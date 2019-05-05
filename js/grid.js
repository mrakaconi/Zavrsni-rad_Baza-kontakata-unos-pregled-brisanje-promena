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
}