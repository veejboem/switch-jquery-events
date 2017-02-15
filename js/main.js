


$('.switch').click(function() {
  if ($('.switch button').hasClass('on')) {
  //  alert( "Lights are turned off" );
    $('body').toggleClass('light dark');
    $('.switch button').toggleClass('on off');
    $('.light').css('background-color', 'black');
    $('.status').text('Hey, who turned off the lights?');
    $('.dark').css('color', 'white');
  } else {
    // alert( "Lights are turned on" );
    $('body').toggleClass('dark light');
    $('.switch button').toggleClass('off on');
    $('.status').text("It's so bright in here!");
    $('.light').css('color', 'black');
  }
});
