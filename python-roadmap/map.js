$('.part').hover(
    function () {
        $('.mapdesc').html($(this).attr('desc-data'));
        $('.mapdesc').fadeIn();
    },
    function () {
        $('.mapdesc').fadeOut(5000);
    }
)