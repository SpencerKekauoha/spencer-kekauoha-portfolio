angular.module('portfolioApp').directive('navDirective', function(){

  return {
    restrict: 'A',
    templateUrl: './app/components/nav/navTmpl.html',
    link: function(scope, element, attribute) {
      $('#toggle-nav').on('click', function(){
          $(this).toggleClass('active');
          $('#menu').toggleClass('open');
          $('main').toggleClass('hide');
      });
    }
  };

});
