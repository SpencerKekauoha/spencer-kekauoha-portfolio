angular.module('portfolioApp').controller('portfolioCtrl', function() {

  $(window).scroll(function(){
    var winScroll = $(this).scrollTop();
    if(winScroll > $('.port-vid-container').offset().top + ($(window).height() * 1)) {
      $('.port-header').css('background-color', '#f7f1ef');
      $('.port-header').css({transition: '1s ease-in-out'});
    }
    if (winScroll > $('.port-hana-container').offset().top - ($(window).height() / 2)) {
      $('.port-header').css('background-color', '#ecf9ff');
      console.log('hit');
    }
    if (winScroll > $('.port-weather-container').offset().top - ($(window).height() / 2)) {
      $('.port-header').css('background-color', '#f5edfb');
    }
    if (winScroll > $('.port-domo-container').offset().top - ($(window).height() / 2)) {
      $('.port-header').css('background-color', '#edf5d3');
    }
  })
});
