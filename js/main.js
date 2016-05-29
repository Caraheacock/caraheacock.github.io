$('document').ready(function(){
    var now = new Date(),
        seconds = now.getSeconds(),
        minutes = now.getMinutes(),
        hours = now.getHours(),
        $window = $(window),
        $body = $('body'),
        $clockFace = $('#clock-face'),
        $secondHand = $('#second-hand'),
        $minuteHand = $('#minute-hand'),
        $hourHand = $('#hour-hand');
    
    // Loads color schemes depending on the hour of the day
    var loadColors = function() {
        if (!$body.hasClass('hour' + hours)) {
            $body.addClass('hour' + hours);
        }
        
        for (i = 0; i < 24; i++) {
            if (i !== hours && $body.hasClass('hour' + i)) {
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
    
    tick();
    setInterval(tick, 1000);
    
    // The "prevent-transition" class on the body prevents flashing colors
    // when the theme is added on page load.
    setTimeout(function() {
        $body.removeClass('prevent-transition');
    }, 1);
    
    // Back to top button functionality
    var $backToTop = $('.back-to-top');
    
    $backToTop.click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });
});