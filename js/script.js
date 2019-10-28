$(document).ready(function() {
    $('.menu-bar').click(function() {
        
        if(this.className == 'menu-bar nav-close') {
            $('.overlay-nav').animate({width: '0%', height: '0%'}, 500).animate({ borderBottomLeftRadius: '50%'});
            $(this).removeClass('nav-close');
        } else {
            $('.overlay-nav').animate({width: '100%', height: '100%'}, 500).animate({ borderBottomLeftRadius: '0'});
            $(this).addClass('nav-close');
            
        }
    });
    $('#envelop').click(function() {
        $(this).animate({left: '-100px'}, 400);
        $('#times').animate({right: '0'}, 400);
        $('.overlay-form').animate({width: '100%', height: '100%', borderBottomLeftRadius: '0'});
        $('.overlay-nav').animate({width: '0%', height: '0%'}, 500).animate({ borderBottomLeftRadius: '50%'});
        $('.nav-close').removeClass('nav-close');
        
    });
    $('#times').click(function() {
        $(this).animate({right: '-100px'}, 400);
        $('#envelop').animate({left: '0'}, 400);
        $('.overlay-form').animate({width: '0%', height: '0%', borderBottomLeftRadius: '50%'});
    });
    
});