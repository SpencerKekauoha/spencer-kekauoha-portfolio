angular.module('portfolioApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('welcome', {
      url: '/welcome',
      templateUrl: './app/components/welcome/welcomeTmpl.html',
      controller: 'welcomeCtrl'
    })

    .state('portfolio', {
      url: '/portfolio',
      templateUrl: './app/components/portfolio/portfolioTmpl.html'
    })

    $urlRouterProvider.otherwise('/welcome');


  })
