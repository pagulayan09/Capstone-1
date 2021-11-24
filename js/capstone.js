$(document).ready(function() {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 150) {
          $("#navnav").addClass("show-nav").fadeIn();
          
        } else {
          $("#navnav").removeClass("show-nav").fadeOut();
        }
      });

    $("img").mousedown(function(){
        return false;
    });

    //NAVBAR-COLLAPSE
    $(document).on('click','.navbar-collapse',function(e) {
      if( $(e.target).is('a') ) {
          $(".navCollapse").collapse('hide');
          // $(".navCollapse2").collapse('hide');
      }
    });
});
