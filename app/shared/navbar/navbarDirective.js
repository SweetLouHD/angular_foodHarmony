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