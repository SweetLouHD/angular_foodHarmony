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