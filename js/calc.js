$('input#mybutton').click(function () {
    'use strict';
    var typeprice;
    var width = $('#number-width').val();
    var length = $('#number-length').val();
    var depth = $('#number-depth').val();
    var type = $('#type').val();
    if (type === 'type1') {
        typeprice = 1;
    } else if (type === 'type2') {
        typeprice = 2;
    } else if (type === 'type3') {
        typeprice = 3;
    } else {
        typeprice = 4;
    }
    var total = (((depth / 12) * width * length) / 27) * typeprice;
    $('div.total-div').text(total);
});