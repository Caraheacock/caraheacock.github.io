$("document").ready(function(){
  var now = new Date(),
      seconds = now.getSeconds(),
      minutes = now.getMinutes(),
      hours = now.getHours(),
      $window = $(window),
      $body = $('body'),
      $container = $('#main_page_container, #child_page_container'),
      $mainPageNav = $('#main_page_container #nav'),
      $mainPageClock = $('#main_page_container #clock_container'),
      $clockFace = $('#clock_face');
    
  // Positions main nav and resizes clock according to page
  function positionAndResize() {
    var windowHeight = $window.height();
    var windowWidth = $window.width();
    var mainPageNavHeight = $mainPageNav.height() + 40;
    var minimum = 600;
    
    if (windowHeight <= minimum) {
      $mainPageNav.css("top", minimum/2 - mainPageNavHeight);
      $mainPageClock.css("padding-bottom", minimum*0.9);
      $mainPageClock.css("width", minimum*0.9);
    } else {
      $mainPageNav.css("top", windowHeight/2 - mainPageNavHeight);
      $mainPageClock.css("padding-bottom", windowHeight*0.9);
      $mainPageClock.css("width", windowHeight*0.9);
    }
  }
  
  // Loads color schemes depending on the hour of the day
  function loadColors() {
    $body.attr("class", "hour" + hours);
  }
  
  // Clock ticking mechanism
  function tick() {
    now = new Date();
    seconds = now.getSeconds();
    minutes = now.getMinutes();
    hours = now.getHours();
    
    // Move the hands
    $("#second_hand").attr("transform", "rotate(" + seconds*6 + " 500 500)");
    $("#minute_hand").attr("transform", "rotate(" + minutes*6 + " 500 500)");
    $("#hour_hand").attr("transform", "rotate(" + (hours*30 + minutes/2) + " 500 500)");
    
    // Change color scheme
    loadColors();
  }
  
  // Main Flow
  $(positionAndResize()); // Sets position when page is first loaded
  $(window).resize(positionAndResize); // Resets position whenever window size is changed
  tick();
  loadColors();
  setTimeout(function() {
    $container.removeClass('prevent-transition');
  }, 1);
  setInterval(tick, 1000);
});