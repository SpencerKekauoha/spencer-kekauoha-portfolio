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

    .state('hana', {
      url: '/portfolio/hana',
      templateUrl: './app/components/portfolio/hana/hanaTmpl.html',
      controller: 'portfolioCtrl'
    })

    .state('weather', {
      url: '/portfolio/weather',
      templateUrl: './app/components/portfolio/weather/weatherTmpl.html',
      controller: 'portfolioCtrl'
    })

    .state('domo', {
      url: '/portfolio/domo',
      templateUrl: './app/components/portfolio/domo/domoTmpl.html',
      controller: 'portfolioCtrl'
    })

    .state('about', {
      url: '/about',
      templateUrl: './app/components/about/aboutTmpl.html',
      controller: 'aboutCtrl'
    })

    $urlRouterProvider.otherwise('/welcome');


  })
