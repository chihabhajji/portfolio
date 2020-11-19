$(document).ready(function () {

    $('i').show();
    var githubPos = $('#github').position();
    var linkedinPos = $('#linkedin').position();
    var mailPos = $('#mail').position();
    var imgPos = $('.me').position();

    $('i').css({
        position: 'absolute',
        zIndex: '1',
        top: imgPos.top + 100,
        left: '47%'
    });


    setTimeout(function () {
        $('#github').animate({
            top: githubPos.top + 10,
            left: githubPos.left - 6
        }, 500);
    }, 500);

    setTimeout(function () {
        $('#github').animate({
            top: githubPos.top,
            left: githubPos.left
        }, 250);
    }, 750);

    setTimeout(function () {
        $('#linkedin').animate({
            top: linkedinPos.top + 10,
            left: linkedinPos.left
        }, 500);
    }, 1000);

    setTimeout(function () {
        $('#linkedin').animate({
            top: linkedinPos.top,
            left: linkedinPos.left
        }, 250);
    }, 1250);

    setTimeout(function () {
        $('#mail').animate({
            top: mailPos.top + 10,
            left: mailPos.left + 10
        }, 500);
    }, 1750);

    setTimeout(function () {
        $('#mail').animate({
            top: mailPos.top,
            left: mailPos.left
        }, 250);
    }, 2000);
});