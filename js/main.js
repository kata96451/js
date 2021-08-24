$(function () {
    let lang = $('p').first();
    $('#next').click(function () {
        $(lang).not('.last').hide('fast', function () {
            lang = $(lang).next('p');
            $(lang).show('fast');
        });
    });
    $('#prev').click(function () {
        $(lang).not('.first').hide('fast', function () {
            lang = $(lang).prev('p');
            $(lang).show('fast');
        });
    });
});