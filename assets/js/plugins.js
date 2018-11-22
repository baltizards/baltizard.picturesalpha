
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

      
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// //Scroll fade outs
// $(function () {
//     var lastScrollTop = 0;
//     var $navbar = $('.navbar');
//     var navbarHeight = $navbar.outerHeight();
//     var movement = 0;
//     var lastDirection = 0;
  
//     $(window).scroll(function(event){
//       var st = $(this).scrollTop();
//       movement += st - lastScrollTop;
  
//       if (st > lastScrollTop) { // scroll down
//         if (lastDirection != 1) {
//           movement = 0;
//         }
//         var margin = Math.abs(movement);
//         if (margin > navbarHeight) {
//           margin = navbarHeight;
//         }
//         margin = -margin;
//         $navbar.css('margin-top', margin+"px")
  
//         lastDirection = 1;
//       } else { // scroll up
//         if (lastDirection != -1) {
//           movement = 0;
//         }
//         var margin = Math.abs(movement);
//         if (margin > navbarHeight) {
//           margin = navbarHeight;
//         }
//         margin = margin-navbarHeight;
//         $navbar.css('margin-top', margin+"px")
  
//         lastDirection = -1;
//       }
  
//       lastScrollTop = st;
//       // console.log(margin);
//     });
//   });

// jQuery scroll down 

$(function () {
    var lastScrollTop = 0;
    var $navbar = $('.navbar');
  
    $(window).scroll(function(event){
      var st = $(this).scrollTop();
  
      if (st > lastScrollTop) { // scroll down
        
        // use this is jQuery full is used
        $navbar.fadeOut()
        
        // use this to use CSS3 animation
        $navbar.addClass("fade-out");
        $navbar.removeClass("fade-in");
        
        // use this if no effect is required
        $navbar.hide();
      } else { // scroll up
        
        // use this is jQuery full is used
        $navbar.fadeIn()
        
        // use this to use CSS3 animation
        $navbar.addClass("fade-in");
        $navbar.removeClass("fade-out");
        
        // use this if no effect is required
        $navbar.show();
      }
      lastScrollTop = st;
    });
  });

  // Click fade out navbar

//   $('.navbar-nav>li>a').on('click', function(){
//     $('.navbar-collapse').collapse('hide');
// });
$('.navbar-nav li a').on('click', function(){
    if(!$( this ).hasClass('dropdown-toggle')){
        $('.navbar-collapse').collapse('hide');
    }
});