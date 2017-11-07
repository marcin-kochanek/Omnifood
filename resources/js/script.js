$(document).ready(function() {
    
    // Sticky nav
    $('.js--hero-text-box').waypoint(function(direction) {
        if (direction === "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '100px'
    });
    
    // Scroll on buttons
    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--pricing-plans').offset().top -60 }, 1000);
    });
    
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--features').offset().top -60 }, 1000);
    });
    
    // Scroll on nav
    $('a[href*="#"]')
      .not('[href="#"]')
      .click(function(event) {
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            event.preventDefault();
            
            $('html, body').animate({
              scrollTop: target.offset().top -60
            }, 1000, function() {
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                return false;
              } else {
                $target.attr('tabindex','-1');
                $target.focus();
              };
            });
          }
        }
      });
    
    // Animated elements
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '60%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '60%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '60%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated shake');
    }, {
        offset: '80%'
    });
    
    //Mobile navigation
    $('.js--mobile-nav-icon').click(function (){
        var nav = $('.js--main-nav'),
            icon = $('.js--mobile-nav-icon i'),
            navBar = $('.navbar'),
            mobileIcon = $('.js--mobile-nav-icon');
        
        nav.slideToggle(200);

        if (icon.hasClass('ion-android-menu')) {
            icon.removeClass('ion-android-menu');
            icon.addClass('ion-android-close');
            mobileIcon.css("margin", "18px 22.1px 18px 0")
        } else {
            icon.removeClass('ion-android-close');
            icon.addClass('ion-android-menu');
            mobileIcon.css("margin", "18px 18px 18px 0")
        }
    });
    
    $(window).resize(function(){
        var nav = $('.js--main-nav'),
            icon = $('.js--nav-icon i');

        if ($(window).width() > 767){
            nav.css("display", "block");
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            nav.css("display", "none");
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });
});