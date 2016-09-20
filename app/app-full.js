var app = angular.module('app', []);

/** Controler START */

app.controller('homeController', function() {
	var self = this;
});

/** Controller END */

/** Directives START */

app.directive('lgHome', function() {
  return {
    restrict: 'EA',
    transclude: true,
    templateUrl: 'app/components/home/homeView.html',
    link: function(){
      console.log("Home Loaded.");
    }
  };
});

app.directive('lgNavbar', function() {
  return {
    restrict: 'EA',
    transclude: true,
    templateUrl: 'app/shared/navbar/navbarView.html',
    link: function(){
      console.log("Navbar Loaded.");
    }
  };
});

app.directive('lgFooter', function() {
  return {
    restrict: 'EA',
    transclude: true,
    templateUrl: 'app/shared/footer/footerView.html',
    link: function(){
      console.log("Footer Loaded.");
    }
  };
});

app.directive('lgRegistration', function() {
  return {
    restrict: 'EA',
    transclude: true,
    templateUrl: 'app/shared/registration/registrationView.html',
    link: function(){
      console.log("Registration Loaded.");
    }
  };
});

app.directive('lgSearch', function() {
  return {
    restrict: 'EA',
    transclude: true,
    templateUrl: 'app/shared/search/searchView.html',
    link: function(){
      console.log("Search Loaded.");
    }
  };
});

app.directive('lgSuggest', function() {
  return {
    restrict: 'EA',
    transclude: true,
    templateUrl: 'app/shared/suggest/suggestView.html',
    link: function(){
      console.log("Suggest Loaded.");
    }
  };
});

/** Directives END */