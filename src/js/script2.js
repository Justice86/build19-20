$(function(){
    $('.banner__link').click(function(e) {
        e.preventDefault();
        var parentClass = $(this).parent().attr('class');
        if (parentClass == 'innactive') {
            $(this).parent().siblings().removeClass('acctive').addClass('innactive');
            $(this).parent().removeClass('innactive').addClass('acctive');
        }
        else {
            $(this).parent().removeClass('acctive').addClass('innactive');
        }
    })
});
