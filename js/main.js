$('document').ready(function() {
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
        /*
         * If the body does not have a class indicating the current hour
         * (e.g. hour1, hour13, etc.) remove all hour classes and add the
         * current one. This class determines the color scheme of the website
         * for that hour.
         *
         * Mostly this check simply removes the class from the previous hour
         * and adds the new one, but sometimes the body retains classes from
         * several hours ago (if the website was left open in another tab, for
         * example), so that's why we remove ALL hour classes, not just the
         * previous one.
         */
        if (!$body.hasClass('hour' + hours)) {
            $body.removeClass(function(index, css) {
                return (css.match (/hour[1-2]?[0-9]/g) || []).join(' ');
            }).addClass('hour' + hours);
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
        
        // Change color scheme if necessary
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