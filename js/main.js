<!--collapsible cat circle-->

$(".collapsecircle").click(function() {
    $(this).parent().children(".cat-catalog").toggle();


});
$(".collapsecircle").click(function() {
    $(this).find("i").toggleClass('fa-times fa-plus');
});
<!--bottom main collapsible list cat-->
$(".collapse").click(function() {
    $(".bottom-main-cat-container").toggle('slow');
});
$(".collapse").click(function() {
    $(this).find("i").toggleClass('fa-caret-up fa-caret-down');
});








// media query event handler
if (matchMedia) {
  var mq = window.matchMedia("(max-width: 768px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

// media query change
function WidthChange(mq) {
  if (mq.matches) {
    // window width is at least 500px
  } else {
    $(window).on("scroll", function() {
    var menu = $(".header-fixed"),
        begin = $("header").height();
    if ($(this).scrollTop() > begin && !menu.hasClass("scrolled"))
        if (screen.width > '300' && $(window).width() > '300') {
            menu.addClass("scrolled").fadeIn(300);
        }
    if ($(this).scrollTop() <= begin && menu.hasClass("scrolled")) {
        menu.removeClass("scrolled").fadeOut(0);
    }
});
  }

}


// $(window).scroll(function(e){
//   parallax();
// });
// function parallax(){
//   var scrolled = $(window).scrollTop();
//   $('.prlx').css('margin-bottom',+(scrolled*0.03)+'px');
// }