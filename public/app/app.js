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
      templateUrl: './app/components/portfolio/portfolioTmpl.html',
      controller: 'portfolioCtrl'
    })

    .state('yui', {
      url: '/portfolio/yui',
      templateUrl: './app/components/portfolio/yui/yuiTmpl.html',
      controller: 'portfolioCtrl'
    })

    .state('about', {
      url: '/about',
      templateUrl: './app/components/about/aboutTmpl.html'
    })

    $urlRouterProvider.otherwise('/welcome');


  })
