$("document").ready(function(){
  var now = new Date();
  var seconds = now.getSeconds();
  var minutes = now.getMinutes();
  var hours = now.getHours();
    
  // Positions main nav and resizes clock according to page
  function positionAndResize() {
    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    var mainPageNavHeight = $("#main_page_nav").height() + 40;
    var minimum = 600;
    
    // Hanging onto this in case I need to do anything special for mobile
    if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    }
    
    if (windowHeight <= minimum) {
      $("#main_page_nav").css("top", minimum/2 - mainPageNavHeight);
      $("#clock_container").css("padding-bottom", minimum*0.9);
      $("#clock_container").css("width", minimum*0.9);
    } else {
      $("#main_page_nav").css("top", windowHeight/2 - mainPageNavHeight);
      $("#clock_container").css("padding-bottom", windowHeight*0.9);
      $("#clock_container").css("width", windowHeight*0.9);
    }
  }
  
  // Loads color schemes depending on the hour of the day
  function loadColors() {
    // Change the white/gray/black colors
    if (hours > 8 && hours < 17) {
      $("body").attr("class", "bg-white");
      $("#main_page_nav").attr("class", "bg-white-transparent");
      $("#second_hand, #minute_hand, #hour_hand").attr("class", "hand-white");
    } else if (hours === 8 || hours === 17) {
      $("body").attr("class", "bg-lt-gray");
      $("#main_page_nav").attr("class", "bg-lt-gray-transparent");
      $("#second_hand, #minute_hand, #hour_hand").attr("class", "hand-lt-gray");
    } else if (hours === 7 || hours === 18) {
      $("body").attr("class", "bg-md-lt-gray");
      $("#main_page_nav").attr("class", "bg-md-lt-gray-transparent");
      $("#second_hand, #minute_hand, #hour_hand").attr("class", "hand-md-lt-gray");
    } else if (hours === 6 || hours === 19) {
      $("body").attr("class", "bg-md-dk-gray");
      $("#main_page_nav").attr("class", "bg-md-dk-gray-transparent");
      $("#second_hand, #minute_hand, #hour_hand").attr("class", "hand-md-dk-gray");
    } else if (hours === 5 || hours === 20) {
      $("body").attr("class", "bg-dk-gray");
      $("#main_page_nav").attr("class", "bg-dk-gray-transparent");
      $("#second_hand, #minute_hand, #hour_hand").attr("class", "hand-dk-gray");
    } else if (hours <= 5 || hours >= 21) {
      $("body").attr("class", "bg-black");
      $("#main_page_nav").attr("class", "bg-black-transparent");
      $("#second_hand, #minute_hand, #hour_hand").attr("class", "hand-black");
    }
    
    // Change the clock face color
    $("#clock_face").attr("class", "hour" + hours);
    
    // Change the text color
    // if (hours > 7 && hours < 18 ) {
    //   $("h1, h2, h3, h4, h5, h6, p, th, td, li, a").attr("class", "text-black");
    // } else {
    //   $("h1, h2, h3, h4, h5, h6, p, th, td, li, a").attr("class", "text-white");
    // }
    
    if (hours > 7 && hours < 18 ) {
      $("#content_container, #content_container a").addClass("text-black").removeClass("text-white");
    } else {
      $("#content_container, #content_container a").addClass("text-white").removeClass("text-black");
    }
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
  setInterval(tick, 1000);
});