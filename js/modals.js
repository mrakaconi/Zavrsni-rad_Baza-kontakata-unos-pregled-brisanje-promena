$(".contacts").on('click', function () {
    $("#myModalInfo").modal('show');

    document.getElementById("#firstname").value = localStorage.getItem(JSContacts.name.first);
    
});
$(document).on('click', "#view", function () {
    $("#myModalInfo").modal('show');
});
$(document).on('click', "#add", function () {
    $("#myModalAdd").modal('show');
});
// MODALS END //