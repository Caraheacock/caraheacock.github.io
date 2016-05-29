$('document').ready(function(){
    var now = new Date(),
        seconds = now.getSeconds(),
        minutes = now.getMinutes(),
        hours = now.getHours(),
        $window = $(window),
        $body = $('body'),
        $homePageNav = $('.home #nav'),
        $homePageClock = $('.home #clock-container'),
        $clockFace = $('#clock-face'),
        $secondHand = $('#second-hand'),
        $minuteHand = $('#minute-hand'),
        $hourHand = $('#hour-hand');
        
    // Positions main nav and resizes clock according to page
    var positionAndResize = function() {
        var windowHeight = $window.height(),
            windowWidth = $window.width(),
            mainPageNavHeight = $homePageNav.height() + 40,
            minimum = 600;
        
        if (windowHeight <= minimum) {
            $homePageNav.css('top', minimum/2 - mainPageNavHeight);
            $homePageClock.css({
                'padding-bottom':   minimum*0.9,
                'width':            minimum*0.9
            });
        } else {
            $homePageNav.css('top', windowHeight/2 - mainPageNavHeight);
            $homePageClock.css({
                'padding-bottom':   windowHeight*0.9,
                'width':            windowHeight*0.9
            });
        }
    }
    
    // Loads color schemes depending on the hour of the day
    var loadColors = function() {
        if (!$body.hasClass('hour' + hours)) {
            $body.addClass('hour' + hours);
        }
        
        for (i = 0; i < 24; i++) {
            if (i != hours && $body.hasClass('hour' + i)) {
                $body.removeClass('hour' + i);
            }
        }
    }
    
    // Clock ticking mechanism
    var tick = function() {
        now = new Date();
        seconds = now.getSeconds();
        minutes = now.getMinutes();
        hours = now.getHours();
        
        // Move the hands
        $secondHand.attr('transform', 'rotate(' + seconds*6 + ' 500 500)');
        $minuteHand.attr('transform', 'rotate(' + minutes*6 + ' 500 500)');
        $hourHand.attr('transform', 'rotate(' + (hours*30 + minutes/2) + ' 500 500)');
        
        // Change color scheme
        loadColors();
    }
    
    // Main Flow
    positionAndResize(); // Sets position when page is first loaded
    $window.resize(positionAndResize); // Resets position whenever window size is changed
    tick();
    loadColors();
    setTimeout(function() {
        $body.removeClass('prevent-transition');
    }, 1);
    setInterval(tick, 1000);
    
    // Back to top button functionality
    var $backToTop = $('.back-to-top');
    
    $backToTop.click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });
});