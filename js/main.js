/*webfont online*/
WebFontConfig = {
    google: { families: ['Roboto:400,700:latin&effect=outline', 'Noto+Serif:700italic&effect=outline'] }
};
(function() {
    var wf = document.createElement('script');
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();



$(document).ready(function(){
    // gotop
    $(".gotop").click(function(){
        $("html,body").animate({
            scrollTop:0
        },1200);
    });
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 300){
            $('.gotop').fadeIn("fast");
        } else {
            $('.gotop').stop().fadeOut("normal");
        }
    });
});
