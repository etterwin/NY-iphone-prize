$('#container_1').on('click', function () {

    //change class
    $('#card_1').toggleClass('flipped');

    //remove class
    $('#container_2').removeClass('container');
    $('#container_3').removeClass('container');

    //remove attribute
    $("#card_2").removeAttr("id");
    $("#card_3").removeAttr("id");

    //show popup
    $('div.popup').addClass('popup-wrapper').removeClass('popup');
    $('div.overlay').addClass('overlay--active').removeClass('overlay');


});


$('#container_2').on('click', function () {

    //change class
    $('#card_2').toggleClass('flipped');

    //remove class
    $('#container_1').removeClass('container');
    $('#container_3').removeClass('container');

    //remove attribute
    $("#card_1").removeAttr("id");
    $("#card_3").removeAttr("id");

    //show popup
    $('div.popup').addClass('popup-wrapper').removeClass('popup');
    $('div.overlay').addClass('overlay--active').removeClass('overlay');

});


$('#container_3').on('click', function () {
    //change class
    $('#card_3').toggleClass('flipped');

    //remove class
    $('#container_1').removeClass('container');
    $('#container_2').removeClass('container');

    //remove attribute
    $("#card_1").removeAttr("id");
    $("#card_2").removeAttr("id");

    //show popup
    $('div.popup').addClass('popup-wrapper').removeClass('popup');
    $('div.overlay').addClass('overlay--active').removeClass('overlay');


});