$(document).ready(function () {
    // mobile nav trigger
    $('#mobile-menu').click(function (e) {
        $('#sidebar').transition('fade right');
        e.preventDefault();
    });

    // sidebar active item
    $('#sidebar').on('click', '.item', function() {
        if(!$(this).hasClass('dropdown')) {
            $(this).addClass('active')
            .siblings('.item')
            .removeClass('active');
      };
      // If an item is clicked on mobile then hide the sidebar menu
        if($('#mobile-menu').is(':visible')) {
            $('#sidebar').transition('fade right');
      };
    });

    // smooth scrolling
    $("a[href^='#']").on('click', function(e) {
       var hash = this.hash;
       $('html, body').animate({
        scrollTop: $(hash).offset().top
         }, 700, function(){
           window.location.hash = hash;
         });
        e.preventDefault();
    });

    // Animations
    $('#splash-logo').transition('fade in', '3s');

    $('.ui.dropdown').dropdown({
      transition: 'slide down'
    });

    // animations for sections
    $('#news').visibility({
        once       : true,
        continuous : false,
        onBottomVisible : function(calculations) {
        $('#news .card').transition('fade up in', '1.5s');
        }
    });

    $('#about').visibility({
        once       : true,
        continuous : false,
        onBottomVisible  : function(calculations) {
        $('#about-subsection .item').transition('fade up in', '1.5s');
        }
    });

    $('#resources').visibility({
        once       : true,
        continuous : false,
        onTopVisible  : function(calculations) {
        $('#resources .button').transition('fade up in', '1.5s');
        $('#resources .button').css('visibility', 'visible')
        }
    });

    $('#team').visibility({
        once       : true,
        continuous : false,
        onTopVisible  : function(calculations) {
        $('#team .cards').transition('fade up in', '3s');
        }
    });
});
